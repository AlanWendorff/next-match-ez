import { useState } from "react";
import type { NextPage } from "next";
import getTeamMatches from "@api/src/TeamMatches/getTeamMatches";
import TopBar from "src/components/Ui/TopBar";
import HistoricMatchesMapper from "src/components/Sections/HistoricMatchesMapper";
import TeamSummary from "src/components/Sections/TeamSummary";
import UpcomingMatchesMapper from "src/components/Sections/UpcomingMatchesMapper";
import { ESection } from "@constants/enums";
import { TSections } from "types/sections";
import { TMatch, TStats } from "types/api";
import styles from "./TeamProfile.module.scss";

interface IProps {
  historic_matches: TMatch[];
  upcoming_matches: TMatch[];
  team_stats: TStats;
}

interface IParams {
  params: {
    id: string;
  };
}

const TeamProfile: NextPage<IProps> = ({
  historic_matches,
  upcoming_matches,
  team_stats,
}) => {
  const [section, setSection] = useState(ESection.SUMMARY);

  const handleSection = (section: TSections) => {
    setSection(section);
  };

  const SECTIONS = {
    [ESection.SUMMARY]: (
      <TeamSummary
        last_match={historic_matches[0]}
        upcoming_match={upcoming_matches[0]}
        team_stats={team_stats}
        handleSection={handleSection}
      />
    ),
    [ESection.UPCOMING]: (
      <UpcomingMatchesMapper upcoming_match={upcoming_matches} />
    ),
    [ESection.HISTORIC]: (
      <HistoricMatchesMapper historic_matches={historic_matches} />
    ),
  };

  return (
    <div className={styles.container}>
      <TopBar section={section} handleSection={handleSection} />
      {SECTIONS[section]}
    </div>
  );
};

export const getServerSideProps = async ({ params }: IParams) => {
  const matches = await getTeamMatches(params.id);

  return {
    props: matches,
  };
};

export default TeamProfile;
