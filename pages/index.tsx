import { useState } from "react";
import type { NextPage } from "next";
import getTeamMatches from "@api/getters/team-matches/getTeamMatches";
import TopBar from "@components/Ui/TopBar";
import HistoricMatchesMapper from "@components/Sections/HistoricMatchesMapper";
import TeamSummary from "@components/Sections/TeamSummary";
import UpcomingMatchesMapper from "@components/Sections/UpcomingMatchesMapper";
import { ESection } from "@constants/enums";
import { REVALIDATE_TIME } from "@constants/config";
import { TSections } from "types/sections";
import { TMatch, TStats } from "types/api";
import styles from "./MainFrame.module.scss";

interface IProps {
  historic_matches: TMatch[];
  upcoming_matches: TMatch[];
  team_stats: TStats;
}

const MainFrame: NextPage<IProps> = ({
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
    <div className={styles.mainFrame}>
      <TopBar section={section} handleSection={handleSection} />
      {SECTIONS[section]}
    </div>
  );
};

export const getStaticProps = async () => {
  console.log("re-generating");

  const matches = await getTeamMatches();

  return {
    props: matches,
    revalidate: REVALIDATE_TIME,
  };
};

export default MainFrame;
