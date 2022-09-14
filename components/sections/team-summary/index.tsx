import type { NextPage } from "next";
import Stats from "@cards/stats";
import MatchSummary from "@cards/match-summary";
import Roster from "@cards/roster";
import { ISummaryProps } from "@interfaces/section.props";

const index: NextPage<ISummaryProps> = ({
  last_match,
  upcoming_match,
  team_stats,
  handleSection,
}) => {
  return (
    <>
      <Stats />
      <MatchSummary
        last_match={last_match}
        upcoming_match={upcoming_match}
        team_stats={team_stats}
        handleSection={handleSection}
      />
      <Roster />
    </>
  );
};

export default index;
