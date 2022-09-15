import type { NextPage } from "next";
import Moment from "moment";
import TeamLogo from "../../team-logo";
import SocialShare from "../../ui/social-share";
import { createUpcomingMsg } from "@utils/social-share";
import { ETeamComponentMode } from "@constants/enums";
import IProps from "interfaces/match.props";
import TrophyOutlineIcon from "mdi-react/TrophyOutlineIcon";
import FormatListGroupIcon from "mdi-react/FormatListGroupIcon";
import CalendarClockIcon from "mdi-react/CalendarClockIcon";
import TrophyAwardIcon from "mdi-react/TrophyAwardIcon";
import styles from "./match-card.module.scss";

const index: NextPage<IProps> = ({ match }) => {
  const {
    opponents,
    number_of_games,
    league_name,
    serie_name,
    begin_at,
    stage,
  } = match;

  return (
    <div className={styles.containerUpcoming}>
      <div className={styles.team}>
        <TeamLogo
          componentMode={ETeamComponentMode.COLUMN}
          teamLogo={`${opponents[0].image_url}`}
          teamName={opponents[0].name}
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

export default index;
