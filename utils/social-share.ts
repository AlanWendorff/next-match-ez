import Moment from "moment";
import { TOpponent, TResults } from "types/api";

export const createHistoricMsg = (
  opponents: TOpponent[],
  results: TResults[],
  league_name: string,
  serie_name: string
) =>
  `${opponents[0].name}: ${results[0].score} VS ${opponents[1].name}: ${
    results[1].score
  } |  ${league_name + " " + serie_name} -> ${window.location.href}`;

export const createUpcomingMsg = (
  opponents: TOpponent[],
  number_of_games: number,
  begin_at: Date,
  league_name: string,
  serie_name: string
) =>
  `${opponents[0].name} VS ${
    opponents[1].name
  } | Best of ${number_of_games} | ${Moment(begin_at).format("Do")} ${Moment(
    begin_at
  ).format("MMMM - H:mm")} hs | ${league_name + " " + serie_name} -> ${
    window.location.href
  }`;

export const createLiveMsg = (
  opponents: TOpponent[],
  results: TResults[],
  number_of_games: number,
  league_name: string,
  official_stream_url: string | null,
  stage: string
) =>
  `${opponents[0].name}: ${results[0].score} - ${opponents[1].name}: ${
    results[1].score
  } | Best of ${number_of_games} | ${league_name + " " + stage} -> ${
    official_stream_url ?? "Stream not available :'("
  }`;
