import { useState } from "react";
import type { NextPage } from "next";
import getTeamMatches from "@api/team-matches/getTeamMatches";
import TopBar from "@ui/top-bar";
import HistoricMatches from "@sections/historic-matches";
import TeamSummary from "@sections/team-summary";
import UpcomingMatches from "@sections/upcoming-matches";
import { ESection } from "@constants/enums";
import { TSections } from "types/sections";
import styles from "./index.module.scss";

interface IProps {
  HISTORIC_MATCHES: any[];
  UPCOMING_MATCHES: any[];
}

const index: NextPage<IProps> = ({ HISTORIC_MATCHES, UPCOMING_MATCHES }) => {
  const [section, setSection] = useState(ESection.SUMMARY);
  //console.log(HISTORIC_MATCHES, UPCOMING_MATCHES);

  const handleSection = (section: TSections) => {
    setSection(section);
  };

  const SECTIONS = {
    [ESection.SUMMARY]: <TeamSummary handleSection={handleSection} />,
    [ESection.UPCOMING]: <UpcomingMatches />,
    [ESection.HISTORIC]: <HistoricMatches />,
  };

  return (
    <div className={styles.mainFrame}>
      <TopBar section={section} handleSection={handleSection} />
      {SECTIONS[section]}
    </div>
  );
};

export const getStaticProps = async () => {
  const matches = await getTeamMatches();

  return {
    props: matches,
    revalidate: 1000,
  };
};

export default index;
