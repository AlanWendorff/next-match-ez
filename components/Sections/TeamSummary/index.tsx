import type { NextPage } from "next";
import Stats from "@components/Cards/Stats";
import MatchSummary from "@components/Cards/MatchSummary";
import Roster from "@components/Cards/Roster";
import { TMatch, TStats } from "types/api";
import { IHandleSelection } from "@interfaces/section.props";

interface IProps extends IHandleSelection {
  last_match: TMatch;
  upcoming_match: TMatch;
  team_stats: TStats;
}

const TeamSummary: NextPage<IProps> = ({
  last_match,
  upcoming_match,
  team_stats,
  handleSection,
}) => {
  return (
    <>
      <Stats team_stats={team_stats} />
      <MatchSummary
        last_match={last_match}
        upcoming_match={upcoming_match}
        handleSection={handleSection}
      />
      <Roster />
    </>
  );
};

export default TeamSummary;
