import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { logoValidator, nameValidator } from "@scripts/team.validate";
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
  teamId: string;
  big?: boolean;
}

const TeamLogo: NextPage<IProps> = ({
  componentMode,
  teamLogo,
  teamName,
  teamId,
  big,
}) => (
  <div className={COMPONENT_MODE[componentMode]}>
    <Link href={`team-profile/${teamId}`}>
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
    </Link>
  </div>
);

export default TeamLogo;
