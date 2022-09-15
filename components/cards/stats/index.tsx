import type { NextPage } from "next";
import { TStats } from "types/api";
import TLastFiveStyle from "types/stats";
import styles from "./stats.module.scss";

const lastFiveStyle: TLastFiveStyle = {
  W: styles.winnedGame,
  L: styles.lostGame,
};

interface IProps {
  team_stats: TStats;
}

const index: NextPage<IProps> = ({ team_stats }) => (
  <div className={styles.container}>
    <section className={styles.generalStats}>
      <p>
        Winrate: <span>{team_stats.win_rate}%</span>
      </p>
      <p>
        Winstrike: <span>{team_stats.win_strike}</span>
      </p>
    </section>
    <section className={styles.lastFive} title="Last 5 games">
      {team_stats.last_five_games.map((status, index) => (
        <span key={index} className={lastFiveStyle[status]}>
          {status}
        </span>
      ))}
    </section>
  </div>
);

export default index;
