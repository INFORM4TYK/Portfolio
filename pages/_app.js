import "../styles/globals.scss";
import Layout from "../components/Layout/Layout";
import CustomHelmet from "../components/utils/CustomHelmet";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Kacper Woźnicki" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Front-end Developer Portfolio"
        />
        <meta property="og:image" content="/img.jpg" />
        <meta property="og:locale" content="en - EN" />
        <meta property="og:url" content="https://kwoznicki.vercel.app" />
      </Head>
      <CustomHelmet />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
