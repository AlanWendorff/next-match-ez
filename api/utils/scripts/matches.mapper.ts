import { IMatchPandascore } from "@api/utils/interfaces/match";
import { whatMapArePlaying, opponentValidate } from "./helper";

export const matchesMapper = (MATCHES: IMatchPandascore[]) =>
  MATCHES.map((MATCH) => {
    const {
      id,
      begin_at,
      number_of_games,
      name,
      tournament,
      status,
      league,
      serie,
      opponents,
      results,
      official_stream_url,
      winner,
    } = MATCH;

    const STAGE = name.includes(":")
      ? name.substring(0, name.lastIndexOf(":"))
      : tournament.name;

    return {
      id: id,
      begin_at: begin_at,
      isLive: status === "running" ? true : false,
      stage: STAGE,
      number_of_games: number_of_games,
      league_name: league.name,
      serie_name: serie.full_name,
      winner_id: winner ? winner.id : null,
      map_playing: results[0] && results[1] ? whatMapArePlaying(results) : null,
      opponents: [
        opponentValidate(opponents[0]),
        opponentValidate(opponents[1]),
      ],
      results: results,
      official_stream_url: official_stream_url,
    };
  });
