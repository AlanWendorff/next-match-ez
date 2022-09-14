import { TEAM_ID } from "@constants/api";
import IMatchMapped, { IMatchPandaScore } from "@api/interfaces/match";

export const makeStatistics = (HISTORIC_MATCHES: IMatchMapped[]) => {
  let win_strike = 0;

  const ALL_MATCHES_WINNED = HISTORIC_MATCHES.filter(
    ({ winner_id }) => winner_id === TEAM_ID
  ).length;

  const LAST_FIVE_GAMES = HISTORIC_MATCHES.slice(0, 5).map(({ winner_id }) => {
    return winner_id === TEAM_ID ? "W" : "L";
  });

  for (let index = HISTORIC_MATCHES.length - 1; index >= 0; index--) {
    if (HISTORIC_MATCHES[index].winner_id === TEAM_ID) {
      win_strike = win_strike + 1;
    } else {
      win_strike = 0;
    }
  }

  const WIN_RATE = (ALL_MATCHES_WINNED * 100) / HISTORIC_MATCHES.length;

  return {
    last_five_games: LAST_FIVE_GAMES,
    win_strike,
    win_rate: WIN_RATE,
  };
};

export const matchesMapper = (MATCHES: IMatchPandaScore[]) =>
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
      status: status,
      stage: STAGE,
      number_of_games: number_of_games,
      league_name: league.name,
      serie_name: serie.full_name,
      winner_id: winner ? winner.id : null,
      opponents: [
        opponents[0] !== undefined && {
          id: opponents[0].opponent.id,
          name: opponents[0].opponent.name,
          image_url: opponents[0].opponent.image_url,
        },

        opponents[1] !== undefined && {
          id: opponents[1].opponent.id,
          name: opponents[1].opponent.name,
          image_url: opponents[1].opponent.image_url,
        },
      ],
      results: results,
      official_stream_url: official_stream_url,
    };
  });
