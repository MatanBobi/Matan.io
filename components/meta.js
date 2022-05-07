import Head from "next/head";
import { useRouter } from "next/router";
import { globals } from "../lib/constants";

export default function Meta() {
  const router = useRouter();
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥬</text></svg>"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥬</text></svg>"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥬</text></svg>"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#000000"
      />
      <link
        rel="shortcut icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥬</text></svg>"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="twitter:domain" content="matan.io" />
      <meta name="twitter:site" content="@matanbobi" />
      <meta name="twitter:creator" content="@matanbobi" />
      {router.pathname === "/" && (
        <>
          <meta property="og:url" content="https://matan.io" />
          <meta name="description" content={`Matan Bobi's personal site`} />
          <meta property="og:image" content={globals.ogImage} />
          <meta name="twitter:image" content={globals.ogImage} />
          <meta
            name="keywords"
            content="Matan Borenkraout, React, Frontend, Engineering, JavaScript, TypeScript, Testing, Software Engineering"
          />
        </>
      )}
    </Head>
  );
}
