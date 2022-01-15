import React from "react";
import Footer from "../components/layout/Footer";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About nextjs</title>
        <meta name="description" content="About nextjs testing dev" />
      </Head>
      <div>About</div>
    </>
  );
}

export default About;
// page it self
About.getLayout = (page) => {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
