import type { AppProps } from "next/app";
import NavBar from "@components/Ui/NavBar";
import Web from "@components/Web";
import "@styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Web />
    <Component {...pageProps} />
    <NavBar />
  </>
);

export default MyApp;
