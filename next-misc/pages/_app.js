import "../styles/globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>next js misc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="next _app" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
