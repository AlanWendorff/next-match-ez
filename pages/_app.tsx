import type { AppProps } from "next/app";
import NavBar from "@components/ui/nav-bar";
import Web from "@components/web";
import "@styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Web />
    <Component {...pageProps} />
    <NavBar />
  </>
);

export default MyApp;
