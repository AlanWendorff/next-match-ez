interface IMatchMapped {
  id: number;
  begin_at: Date;
  status: string;
  stage: string;
  number_of_games: number;
  league_name: string;
  serie_name: string;
  winner_id: number | null;
  opponents: (
    | false
    | {
        id: number;
        name: string;
        image_url: string;
      }
  )[];
  results: IResult[];
  official_stream_url: string | null;
}

type TOpponents = {
  id: number;
  name: string;
  image_url: string;
};

export interface IMatchApi {
  slug: string;
  modified_at: Date;
  winner_id: number;
  number_of_games: number;
  match_type: string;
  league_id: number;
  tournament_id: number;
  id: number;
  name: string;
  official_stream_url: string;
  streams_list: IStreamsList[];
  league: ILeague;
  serie_id: number;
  status: string;
  videogame: IVideogame;
  game_advantage: null;
  tournament: ITournament;
  end_at: Date;
  serie: ISerie;
  original_scheduled_at: Date;
  winner_type: string;
  rescheduled: boolean;
  videogame_version: null;
  detailed_stats: boolean;
  live: ILive;
  games: IGame[];
  scheduled_at: Date;
  results: IResult[];
  begin_at: Date;
  live_embed_url: string;
  draw: boolean;
  winner: ITeamClass;
  forfeit: boolean;
  streams: IStreams;
  opponents: IOpponent[];
}

interface IGameWinner {
  id: number;
  type: string;
}

interface IGame {
  begin_at: Date;
  complete: boolean;
  detailed_stats: boolean;
  end_at: Date;
  finished: boolean;
  forfeit: boolean;
  id: number;
  length: number;
  match_id: number;
  position: number;
  status: string;
  video_url: null | string;
  winner: IGameWinner;
  winner_type: string;
}

interface ILeague {
  id: number;
  image_url: string;
  modified_at: Date;
  name: string;
  slug: string;
  url: string;
}

interface ILive {
  opens_at: null;
  supported: boolean;
  url: null;
}

interface IOpponent {
  opponent: ITeamClass;
  type: string;
}

interface ITeamClass {
  acronym: null;
  id: number;
  image_url: string;
  location: null | string;
  modified_at: Date;
  name: string;
  slug: string;
}

interface IResult {
  score: number;
  team_id: number;
}

interface ISerie {
  begin_at: Date;
  description: null;
  end_at: Date;
  full_name: string;
  id: number;
  league_id: number;
  modified_at: Date;
  name: string;
  season: string;
  slug: string;
  tier: string;
  winner_id: number;
  winner_type: string;
  year: number;
}

interface IStreams {
  english: IStreamURL;
  official: IStreamURL;
  russian: IStreamURL;
}

interface IStreamURL {
  embed_url: null | string;
  raw_url: null | string;
}

interface IStreamsList {
  embed_url: string;
  language: string;
  main: boolean;
  official: boolean;
  raw_url: string;
}

interface ITournament {
  begin_at: Date;
  end_at: Date;
  id: number;
  league_id: number;
  live_supported: boolean;
  modified_at: Date;
  name: string;
  prizepool: string;
  serie_id: number;
  slug: string;
  tier: string;
  winner_id: number;
  winner_type: string;
}

interface IVideogame {
  id: number;
  name: string;
  slug: string;
}

export default IMatchMapped;
