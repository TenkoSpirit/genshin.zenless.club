/* eslint-disable @typescript-eslint/no-unused-vars */
import type { AppProps } from "next/app";

import dayjs from "dayjs";
import deLocale from "dayjs/locale/de";
import jaLocale from "dayjs/locale/ja";
import ruLocale from "dayjs/locale/ru";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { useEffectOnce } from "react-use";

import "@/assets/styles/calculator.scss";
import "@/assets/styles/cards.scss";
import "@/assets/styles/main.scss";
import "@/assets/styles/markdown.scss";
import "@/assets/styles/nprogress.scss";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { useHydrateAllAtoms } from "@/hooks/useHydrateAllAtoms";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useHydrateAllAtoms();

  const router = useRouter();

  useEffectOnce(() => {
    dayjs.extend(localizedFormat);
    dayjs.locale(navigator.language);

    console.log("dayjs extended with localized formats");

    nProgress.configure({
      showSpinner: false,
      easing: "ease",
      speed: 250,
    });

    console.log("nProgress configured");

    const handleStart = () => {
      nProgress.start();
    };

    const handleStop = () => {
      setTimeout(() => {
        nProgress.done();
      }, 100);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  });

  return (
    <JotaiProvider>
      <ThemeProvider attribute="class">
        <div className="app-container">
          <Navigation />

          <Component {...pageProps} />

          <Footer />
        </div>
      </ThemeProvider>
    </JotaiProvider>
  );
};

export default MyApp;
