import { useState } from "react";
import ShareVariantIcon from "mdi-react/ShareVariantIcon";
import type { NextPage } from "next";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import styles from "./SocialShare.module.scss";

const SOCIAL_STATES = {
  true: styles.social,
  false: styles.hide,
};

interface IProps {
  distanceOfSocials?: number;
  msg: string;
}

const SocialShare: NextPage<IProps> = ({ distanceOfSocials, msg }) => {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowSocials(!showSocials)}
        className={styles.shareButton}
      >
        <ShareVariantIcon size={"20px"} />
      </button>

      <div
        className={SOCIAL_STATES[`${showSocials}`]}
        style={{ transform: `translate(-${distanceOfSocials ?? 200}%, -75%)` }}
      >
        <FacebookShareButton
          url={"https://next-match-ez.vercel.app/"}
          hashtag="#csgo"
          quote={msg}
          className={styles.BTN3}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={"https://next-match-ez.vercel.app/"}
          hashtags={["csgo"]}
          title={msg}
          className={styles.BTN2}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton url={msg} className={styles.BTN1}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
