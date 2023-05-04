import "../styles/globals.scss";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
     <title>Kacper Woźnicki</title>
     </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
