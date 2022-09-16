import type { NextPage } from "next";
import Image from "next/image";
import { ESection } from "@constants/enums";
import IProps from "@interfaces/section.props";
import HistoryIcon from "mdi-react/HistoryIcon";
import MAIN_LOGO from "@assets/images/9z-logo.webp";
import styles from "./TopBar.module.scss";

const TopBar: NextPage<IProps> = ({ section, handleSection }) => {
  return (
    <div className={styles.container}>
      <button
        className={section === ESection.SUMMARY ? styles.on : ""}
        onClick={() => {
          handleSection(ESection.SUMMARY);
        }}
      >
        <Image
          src={MAIN_LOGO}
          width={30}
          height={30}
          placeholder="blur"
          alt="main logo"
        />
      </button>
      <button
        className={section === ESection.UPCOMING ? styles.on : ""}
        onClick={() => {
          handleSection(ESection.UPCOMING);
        }}
      >
        <h2>VS</h2>
      </button>
      <button
        className={section === ESection.HISTORIC ? styles.on : ""}
        onClick={() => {
          handleSection(ESection.HISTORIC);
        }}
      >
        <HistoryIcon size={"30px"} />
      </button>
    </div>
  );
};

export default TopBar;
