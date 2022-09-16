import { API_KEY } from "@constants/api";
import { matchesMapper } from "../../utils/helper";
import IMatchMapped from "@api/interfaces/match";

const getAllMatches = async () => {
  const UPCOMING_MATCHES = await fetch(
    `https://api.pandascore.co/csgo/matches?sort=begin_at&filter[status]=not_started,running&token=${API_KEY}`
  );

  const UPCOMING_MAPPED: IMatchMapped[] = matchesMapper(
    await UPCOMING_MATCHES.json()
  );

  return {
    upcoming_matches: UPCOMING_MAPPED,
  };
};

export default getAllMatches;
