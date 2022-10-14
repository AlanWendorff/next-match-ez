import type { NextPage } from "next";
import Moment from "moment";
import TeamLogo from "../../TeamLogo";
import SocialShare from "@Ui/SocialShare";
import { createUpcomingMsg } from "@scripts/social-share";
import { ETeamComponentMode } from "@constants/enums";
import { TEAM_ID } from "@constants/api";
import IProps from "@interfaces/match.props";
import TrophyOutlineIcon from "mdi-react/TrophyOutlineIcon";
import FormatListGroupIcon from "mdi-react/FormatListGroupIcon";
import CalendarClockIcon from "mdi-react/CalendarClockIcon";
import TrophyAwardIcon from "mdi-react/TrophyAwardIcon";
import styles from "./Match.module.scss";

const Upcoming: NextPage<IProps> = ({ match }) => {
  const {
    opponents,
    number_of_games,
    league_name,
    serie_name,
    begin_at,
    stage,
  } = match;

  const EXACT_INDEX = opponents[0].id !== TEAM_ID ? 0 : 1;

  return (
    <div className={styles.containerUpcoming}>
      <div className={styles.team}>
        <TeamLogo
          componentMode={ETeamComponentMode.COLUMN}
          teamLogo={`${opponents[EXACT_INDEX].image_url}`}
          teamName={opponents[EXACT_INDEX].name}
          teamId={opponents[EXACT_INDEX].id}
          big
        />
      </div>
      <div className={styles.matchDetail}>
        <p>
          <TrophyOutlineIcon size={"20px"} />
          {`${league_name} ${serie_name}`}
        </p>
        <p>
          <FormatListGroupIcon size={"20px"} />
          {stage}
        </p>
        <p>
          <CalendarClockIcon size={"20px"} />
          {Moment(begin_at).format("Do")}{" "}
          {Moment(begin_at).format("MMMM - H:mm")} hs
        </p>
        <p>
          <TrophyAwardIcon size={"20px"} />
          Best of {number_of_games}
        </p>
        <SocialShare
          distanceOfSocials={120}
          msg={createUpcomingMsg(
            opponents,
            number_of_games,
            begin_at,
            league_name,
            serie_name
          )}
        />
      </div>
    </div>
  );
};

export default Upcoming;
