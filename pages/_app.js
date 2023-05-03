import "../styles/globals.scss";
import Layout from "../components/Layout/Layout";
import CustomHelmet from "../components/utils/CustomHelmet";
export default function App({ Component, pageProps }) {
  return (
    <>
    <CustomHelmet />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
