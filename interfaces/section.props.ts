import { TSections } from "types/sections";
import { TMatch, TStats } from "types/api";

interface IProps {
  section?: TSections;
  handleSection: (section: TSections) => void;
}

export interface ISummaryProps extends IProps {
  last_match?: TMatch;
  upcoming_match?: TMatch;
  team_stats?: TStats;
}

export default IProps;
