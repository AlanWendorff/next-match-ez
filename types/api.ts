export type TMatch = {
  id: number;
  begin_at: Date;
  isLive: boolean;
  stage: string;
  number_of_games: number;
  league_name: string;
  serie_name: string;
  winner_id: number | null;
  opponents: TOpponent[];
  results: TResults[];
  official_stream_url: string | null;
};

export type TOpponent = {
  id: number;
  name: string;
  image_url: string;
};

export type TResults = {
  score: number;
  team_id: number;
};

export type TStats = {
  last_five_games: ("W" | "L")[];
  win_strike: number;
  win_rate: number;
};
