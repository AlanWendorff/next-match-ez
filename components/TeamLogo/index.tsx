import type { NextPage } from "next";
import Image from "next/image";
import { logoValidator, nameValidator } from "@utils/team.validate";
import { ETeamComponentMode } from "@constants/enums";
import styles from "./TeamLogo.module.scss";

const COMPONENT_MODE = {
  [ETeamComponentMode.ROW]: styles.containerRow,
  [ETeamComponentMode.COLUMN]: styles.containerColumn,
};

interface IProps {
  componentMode: ETeamComponentMode.ROW | ETeamComponentMode.COLUMN;
  teamLogo: string | undefined | null;
  teamName: string | null;
  big?: boolean;
}

const TeamLogo: NextPage<IProps> = ({
  componentMode,
  teamLogo,
  teamName,
  big,
}) => (
  <div className={COMPONENT_MODE[componentMode]}>
    <Image
      src={logoValidator(teamLogo)}
      width={big ? 190 : 50}
      height={big ? 190 : 50}
      objectFit="contain"
      loading="lazy"
      draggable="false"
      alt={`${teamName} logo`}
    />

    <p className={`${styles.teamName} ${big && styles.bigLetters}`}>
      {nameValidator(teamName)}
    </p>
  </div>
);

export default TeamLogo;
