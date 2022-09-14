export type TMatch = {
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
  results: {
    score: number;
    team_id: number;
  };
  official_stream_url: string | null;
};

export type TStats = {
  last_five_games: ("W" | "L")[];
  win_strike: number;
  win_rate: number;
};
