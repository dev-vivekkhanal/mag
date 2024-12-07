import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Move this from _document.js to here
const GA_TRACKING_ID = "G-LYLCP5JVSL";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track initial page view
    const pageView = (url) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    // Track initial page load
    pageView(router.pathname);

    // Track route changes
    const handleRouteChange = (url) => pageView(url);

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, router.pathname]);

  return <Component {...pageProps} />;
}
