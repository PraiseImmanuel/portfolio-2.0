import Layout from "../components/Layout";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Transition from "../components/Transition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import ReactGA from "react-ga";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    ReactGA.initialize("G-MJYKME7XLY"); //

    // Track initial page view
    ReactGA.pageview(window.location.pathname);

    // Log page view on route change
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Praise Immanuel - Web Developer</title>
        <meta
          name="description"
          content="Praise Immanuel - Portfolio website"
        />
        <meta
          name="keywords"
          content="PraiseImmanuel, Web Developer, Reactjs"
        />
        <meta property="og:title" content="Praise Immanuel - Web Developer" />
        <meta
          property="og:description"
          content="Praise Immanuel - Portfolio website"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dj25aashz/image/upload/v1720861636/Me_Bg_w4148c.png"
        />
        <meta property="og:url" content="https://praiseimmanuel.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Praise Immanuel - Web Developer" />
        <meta
          name="twitter:description"
          content="Praise Immanuel - Portfolio website"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dj25aashz/image/upload/v1720861636/Me_Bg_w4148c.png"
        />
      </Head>
      <ToastContainer limit={1} />
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="min-h-screen">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
