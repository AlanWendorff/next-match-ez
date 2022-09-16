import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import activeClassName from "./navigation.validate";
import CardsIcon from "mdi-react/CardsIcon";
import AccountGroupIcon from "mdi-react/AccountGroupIcon";
import styles from "./nav-bar.module.scss";

const index: NextPage = () => {
  const { pathname } = useRouter();
  console.log(activeClassName(pathname, "/asd"));

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link href={"/"}>
          <div className={activeClassName(pathname, "/")}>
            <AccountGroupIcon size={"40px"} />
          </div>
        </Link>
        <Link href={"/all-matches"}>
          <div className={activeClassName(pathname, "/all-matches")}>
            <CardsIcon size={"40px"} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default index;
