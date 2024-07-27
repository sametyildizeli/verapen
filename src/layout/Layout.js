import React from "react";
import Head from "next/head";

const Layout = ({ children, title, desc, hasClass, classOpt }) => {
  return (
    <div
      className={`main-wrapper ${
        hasClass ? "overflow-hidden" : ""
      } ${classOpt}`}
    >
      <Head>
        <title>
          {title
            ? `Verapen | ${title}`
            : "Verapen Resmi Websitesi"}
        </title>
        {desc && <meta name="description" content={desc} />}
        <link rel="icon" href="/_images/favicon.png" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
