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
        type="image/png"
        sizes="20x20"
        href="favicons/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="20x20"
        href="favicons/favicon.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="twitter:domain" content="matanbobi.dev" />
      <meta name="twitter:site" content="@matanbobi" />
      <meta name="twitter:creator" content="@matanbobi" />
      {router.pathname === "/" && (
        <>
          <meta property="og:url" content="https://matanbobi.dev" />
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
