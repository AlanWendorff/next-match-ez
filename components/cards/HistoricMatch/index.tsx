import { useState } from "react";
import type { NextPage } from "next";
import Moment from "moment";
import TeamLogo from "../../TeamLogo";
import SocialShare from "../../Ui/SocialShare";
import { createHistoricMsg } from "@utils/social-share";
import { isMatchFinal } from "@utils/tournament.validate";
import { resultValidator } from "@utils/team.validate";
import { ETeamComponentMode } from "@constants/enums";
import IProps from "interfaces/match.props";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import ChevronUpIcon from "mdi-react/ChevronUpIcon";
import TrophyOutlineIcon from "mdi-react/TrophyOutlineIcon";
import CalendarClockIcon from "mdi-react/CalendarClockIcon";
import styles from "./HistoricMatch.module.scss";

const HistoricMatch: NextPage<IProps> = ({ match }) => {
  const [detailState, setDetailState] = useState(false);
  const {
    opponents,
    results,
    number_of_games,
    league_name,
    serie_name,
    begin_at,
    stage,
  } = match;

  return (
    <div className={styles.container}>
      <div className={styles.match}>
        <p className={isMatchFinal(stage)}>{stage}</p>
        <div
          className={`${styles.team} ${
            results[0].score < results[1].score ? styles.lost : ""
          }`}
        >
          <TeamLogo
            componentMode={ETeamComponentMode.ROW}
            teamLogo={`${opponents[0].image_url}`}
            teamName={opponents[0].name}
          />
          <p className={resultValidator(results[0].score, results[1].score)}>
            {results[0].score}
          </p>
        </div>
        <div
          className={`${styles.team} ${
            results[1].score < results[0].score ? styles.lost : ""
          }`}
        >
          <TeamLogo
            componentMode={ETeamComponentMode.ROW}
            teamLogo={`${opponents[1].image_url}`}
            teamName={opponents[1].name}
          />
          <p className={resultValidator(results[1].score, results[0].score)}>
            {results[1].score}
          </p>
        </div>
        <p>Best of {number_of_games}</p>
      </div>
      <button
        className={styles.arrow}
        onClick={() => setDetailState(!detailState)}
      >
        {detailState ? (
          <ChevronUpIcon size={"30px"} />
        ) : (
          <ChevronDownIcon size={"30px"} />
        )}
      </button>
      {detailState && (
        <div className={styles.matchDetail}>
          <p>
            <TrophyOutlineIcon size={"20px"} />
            {`${league_name} ${serie_name}`}
          </p>
          <p>
            <CalendarClockIcon size={"20px"} />
            {Moment(begin_at).format("Do")}{" "}
            {Moment(begin_at).format("MMMM - H:mm")} hs
          </p>
          <SocialShare
            msg={createHistoricMsg(opponents, results, league_name, serie_name)}
          />
        </div>
      )}
    </div>
  );
};

export default HistoricMatch;
