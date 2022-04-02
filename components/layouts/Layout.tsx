import React, { FC } from "react";
import Head from "next/head";

import { Navbar } from "../ui";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Layout: FC<Props> = ({ children, title }) => {
  // console.log(origin);
  return (
    <>
      <Head>
        <title> {title || "Pokemon App"} </title>
        <meta name="author" content="Carlos Gumucio" />
        <meta name="description" content={`Pokemon ${title} Info`} />
        <meta name="keywords" content={`${title}. pokemon pokedex`} />
        <meta property="og:title" content={`${title} Pokedex Info`} />
        <meta
          property="og:description"
          content={`Check ${title} stats, moves and more for !`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />

      {/* {Navbar} */}

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
