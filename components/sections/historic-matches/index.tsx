import type { NextPage } from "next";
import HistoricMatch from "../../cards/historic-match";
import { TMatch } from "types/api";

interface IProps {
  historic_matches: TMatch[];
}

const index: NextPage<IProps> = ({ historic_matches }) => (
  <>
    {historic_matches.map((match) => (
      <HistoricMatch match={match} />
    ))}
  </>
);

export default index;
