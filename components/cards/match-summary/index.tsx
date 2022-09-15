import type { NextPage } from "next";
import TeamLogo from "../../team-logo";
import { resultValidator } from "@utils/team.validate";
import { ETeamComponentMode, ESection } from "@constants/enums";
import { TMatch, TStats } from "types/api";
import { IHandleSelection } from "@interfaces/section.props";
import InformationOutlineIcon from "mdi-react/InformationOutlineIcon";
import styles from "./match-summary.module.scss";

interface IProps extends IHandleSelection {
  last_match: TMatch;
  upcoming_match: TMatch;
}

const index: NextPage<IProps> = ({
  last_match,
  upcoming_match,
  handleSection,
}) => (
  <div className={styles.container}>
    <section>
      <p className={styles.title}>Last Game</p>
      <div className={styles.historicMatch}>
        <TeamLogo
          componentMode={ETeamComponentMode.COLUMN}
          teamLogo={`${last_match.opponents[0].image_url}`}
          teamName={last_match.opponents[0].name}
        />

        <p
          className={resultValidator(
            last_match.results[0].score,
            last_match.results[1].score
          )}
        >
          {last_match.results[0].score}
        </p>

        <p>-</p>

        <p
          className={resultValidator(
            last_match.results[1].score,
            last_match.results[0].score
          )}
        >
          {last_match.results[1].score}
        </p>

        <TeamLogo
          componentMode={ETeamComponentMode.COLUMN}
          teamLogo={`${last_match.opponents[1].image_url}`}
          teamName={last_match.opponents[1].name}
        />
      </div>
      <button
        onClick={() => {
          handleSection(ESection.HISTORIC);
        }}
      >
        <InformationOutlineIcon size={"20px"} />
      </button>
    </section>

    <hr />
    <section>
      {upcoming_match.isLive && <div className={styles.live} />}
      {upcoming_match ? (
        <>
          <p>Next Game</p>
          <div className={styles.upcomingMatch}>
            <TeamLogo
              componentMode={ETeamComponentMode.COLUMN}
              teamLogo={`${upcoming_match.opponents[0].image_url}`}
              teamName={upcoming_match.opponents[0].name}
            />
            <p>vs</p>
            <TeamLogo
              componentMode={ETeamComponentMode.COLUMN}
              teamLogo={`${upcoming_match.opponents[1].image_url}`}
              teamName={upcoming_match.opponents[1].name}
            />
          </div>
          <button
            onClick={() => {
              handleSection(ESection.UPCOMING);
            }}
          >
            <InformationOutlineIcon size={"20px"} />
          </button>
        </>
      ) : (
        <div>
          <span>NO UPCOMING MATCH</span>
        </div>
      )}
    </section>
  </div>
);

export default index;
