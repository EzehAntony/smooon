import React from "react";
import Footer from "./Footer";
import Head from "next/head";


function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
