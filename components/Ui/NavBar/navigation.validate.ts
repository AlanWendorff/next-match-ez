import styles from "./NavBar.module.scss";

const activeClassName = (pathname: string, route: string) =>
  pathname === route ? styles.active : styles.default;

export default activeClassName;
