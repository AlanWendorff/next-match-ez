import type { NextPage } from "next";
import TeamLogo from "../../team-logo";
import { resultValidator } from "@utils/team.validate";
import { ETeamComponentMode, ESection } from "@constants/enums";
import { ISummaryProps } from "@interfaces/section.props";
import InformationOutlineIcon from "mdi-react/InformationOutlineIcon";
import { HISTORIC_MATCHES, UPCOMING_MATCHES } from "dummy-data";
import styles from "./match-summary.module.scss";

const index: NextPage<ISummaryProps> = ({
  last_match,
  upcoming_match,
  handleSection,
}) => {
  const UPCOMING_MATCH = UPCOMING_MATCHES[0];

  if (!last_match) {
    return <div></div>;
  }

  return (
    <div className={styles.container}>
      <section>
        <p className={styles.title}>Last Game</p>
        <div className={styles.historicMatch}>
          <TeamLogo
            componentMode={ETeamComponentMode.COLUMN}
            teamLogo={last_match.opponents[0].image_url}
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
            teamLogo={last_match.opponents[1].image_url}
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
        {UPCOMING_MATCH && <div className={styles.live} />}
        {UPCOMING_MATCH ? (
          <>
            <p>Next Game</p>
            <div className={styles.upcomingMatch}>
              <TeamLogo
                componentMode={ETeamComponentMode.COLUMN}
                teamLogo={UPCOMING_MATCH.opponents[0].opponent.image_url}
                teamName={UPCOMING_MATCH.opponents[0].opponent.name}
              />
              <p>vs</p>
              <TeamLogo
                componentMode={ETeamComponentMode.COLUMN}
                teamLogo={UPCOMING_MATCH.opponents[1].opponent.image_url}
                teamName={UPCOMING_MATCH.opponents[1].opponent.name}
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
};

export default index;
