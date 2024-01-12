import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Ropa+Sans:ital@0;1&display=swap`}
          rel="stylesheet"
          media="print"
        />
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
        {/*GTAG */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.NEXT_PUBLIC_GA}', {cookie_flags: 'SameSite=None;Secure'});
							`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          id="wowhead-tooltip-setup"
          dangerouslySetInnerHTML={{
            __html: `const whTooltips = { colorLinks: true, iconizeLinks: true, renameLinks: true, iconSize: 'medium' };`,
          }}
        />
        <script id="wowhead-tooltip-js" src="https://wow.zamimg.com/js/tooltips.js"></script>
      </body>
    </Html>
  );
}
