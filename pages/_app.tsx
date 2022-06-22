import { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes";

import "../styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: JSX.Element;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
