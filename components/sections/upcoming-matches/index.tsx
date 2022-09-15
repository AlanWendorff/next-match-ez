import type { NextPage } from "next";
import UpcomingMatch from "../../cards/upcoming-match/upcoming";
import LiveMatch from "../../cards/upcoming-match/live";
import { TMatch } from "types/api";

interface IProps {
  upcoming_match: TMatch[];
}

const index: NextPage<IProps> = ({ upcoming_match }) => (
  <>
    {upcoming_match.map((match) => {
      return match.isLive ? (
        <LiveMatch match={match} />
      ) : (
        <UpcomingMatch match={match} />
      );
    })}
  </>
);

export default index;
