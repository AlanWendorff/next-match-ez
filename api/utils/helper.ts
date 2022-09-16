import { TEAM_ID } from "@constants/api";
import IMatchMapped, {
  IMatchPandaScore,
  IOpponent,
} from "@api/interfaces/match";
import logo_unknown from "@assets/images/logo-unknown.webp";
import logo_team_to_be_defined from "@assets/images/team-tbd.webp";

const opponentValidate = (opponents: IOpponent) => {
  if (!opponents) {
    return {
      id: 0,
      name: "To be defined",
      image_url: logo_team_to_be_defined.src,
    };
  }

  return {
    id: opponents.opponent.id,
    name: opponents.opponent.name,
    image_url: opponents.opponent.image_url ?? logo_unknown.src,
  };
};

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
      isLive: status === "running" ? true : false,
      stage: STAGE,
      number_of_games: number_of_games,
      league_name: league.name,
      serie_name: serie.full_name,
      winner_id: winner ? winner.id : null,
      opponents: [
        opponentValidate(opponents[0]),

        opponentValidate(opponents[1]),
      ],
      results: results,
      official_stream_url: official_stream_url,
    };
  });

/* export const playingStage = (results) => {
  let mapPlaying;
  if (results[0].score === 0 && results[1].score === 0) {
    mapPlaying = " - Playing 1st map";
  } else if (
    (results[0].score === 1 && results[1].score === 0) ||
    (results[0].score === 0 && results[1].score === 1)
  ) {
    mapPlaying = " - Playing 2th map";
  } else {
    mapPlaying = " - Playing 3th map";
  }
  if (
    (results[0].score === 2 && results[1].score === 1) ||
    (results[0].score === 1 && results[1].score === 2)
  ) {
    mapPlaying = " - Playing 4th map";
  } else if (results[0].score === 2 && results[1].score === 2) {
    mapPlaying = " - Playing 5th map";
  }
  return mapPlaying;
}; */
