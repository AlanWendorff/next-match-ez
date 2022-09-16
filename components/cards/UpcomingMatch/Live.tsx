import type { NextPage } from "next";
import Moment from "moment";
import TeamLogo from "../../TeamLogo";
import SocialShare from "../../Ui/SocialShare";
import { isMatchFinal } from "@utils/tournament.validate";
import { createLiveMsg } from "@utils/social-share";
import { resultValidator } from "@utils/team.validate";
import { ETeamComponentMode } from "@constants/enums";
import IProps from "interfaces/match.props";
import TrophyOutlineIcon from "mdi-react/TrophyOutlineIcon";
import CalendarClockIcon from "mdi-react/CalendarClockIcon";
import TwitchIcon from "mdi-react/TwitchIcon";
import styles from "./Match.module.scss";

const Live: NextPage<IProps> = ({ match }) => {
  const {
    isLive,
    opponents,
    results,
    number_of_games,
    league_name,
    serie_name,
    begin_at,
    stage,
    official_stream_url,
  } = match;

  return (
    <div className={styles.containerLive}>
      <div className={styles.match}>
        <p className={isMatchFinal(stage)}>{stage}</p>
        <div className={styles.team}>
          <TeamLogo
            componentMode={ETeamComponentMode.ROW}
            teamLogo={`${opponents[0].image_url}`}
            teamName={opponents[0].name}
          />
          {isLive && (
            <p className={resultValidator(results[0].score, results[1].score)}>
              {results[0].score}
            </p>
          )}
        </div>
        <div className={styles.team}>
          <TeamLogo
            componentMode={ETeamComponentMode.ROW}
            teamLogo={`${opponents[1].image_url}`}
            teamName={opponents[1].name}
          />
          {isLive && (
            <p className={resultValidator(results[1].score, results[0].score)}>
              {results[1].score}
            </p>
          )}
        </div>
        <p>Best of {number_of_games}</p>
      </div>
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
        {isLive && (
          <p>
            <TwitchIcon size={"20px"} />
            {official_stream_url ? (
              <a
                href={official_stream_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {official_stream_url}
              </a>
            ) : (
              <>{"Stream not available :'("} </>
            )}
          </p>
        )}
        <SocialShare
          msg={createLiveMsg(
            isLive,
            begin_at,
            serie_name,
            opponents,
            results,
            number_of_games,
            league_name,
            official_stream_url,
            stage
          )}
        />
      </div>
    </div>
  );
};

export default Live;
