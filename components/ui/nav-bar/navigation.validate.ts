import styles from "./nav-bar.module.scss";

const activeClassName = (pathname: string, route: string) =>
  pathname === route ? styles.active : styles.default;

export default activeClassName;
