import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import activeClassName from "./navigation.validate";
import { ALL_MATCHES, MAIN_PAGE } from "@constants/routes";
import CardsIcon from "mdi-react/CardsIcon";
import AccountGroupIcon from "mdi-react/AccountGroupIcon";
import styles from "./NavBar.module.scss";

const NavBar: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link href={MAIN_PAGE}>
          <div className={activeClassName(pathname, MAIN_PAGE)}>
            <AccountGroupIcon size={"40px"} />
          </div>
        </Link>
        <Link href={ALL_MATCHES}>
          <div className={activeClassName(pathname, ALL_MATCHES)}>
            <CardsIcon size={"40px"} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
