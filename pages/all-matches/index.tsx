import type { NextPage } from "next";
import getAllMatches from "@api/getters/all-matches/getAllMatches";
import UpcomingMatch from "@components/cards/upcoming-match/live";
import { TMatch } from "types/api";
import styles from "../index.module.scss";

interface IProps {
  upcoming_matches: TMatch[];
}

const index: NextPage<IProps> = ({ upcoming_matches }) => (
  <div className={styles.mainFrame}>
    {upcoming_matches.map((match) => (
      <UpcomingMatch match={match} />
    ))}
  </div>
);

export const getStaticProps = async () => {
  const matches = await getAllMatches();

  return {
    props: matches,
    revalidate: 1000,
  };
};

export default index;
