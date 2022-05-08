import Head from "next/head";
import { useRouter } from "next/router";
import { globals } from "../../lib/constants";

export const PostSeo = ({ title, description, coverImage, keywords }) => {
  const router = useRouter();
  const _pathSliceLength = Math.min.apply(Math, [
    router.asPath.indexOf("?") > 0
      ? router.asPath.indexOf("?")
      : router.asPath.length,
    router.asPath.indexOf("#") > 0
      ? router.asPath.indexOf("#")
      : router.asPath.length,
  ]);
  const canonicalURL =
    globals.siteUrl + router.asPath.substring(0, _pathSliceLength);

  return (
    <Head>
      <title>{title} | Matan.io</title>
      <link rel="canonical" href={canonicalURL} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      <meta property="og:image" content={`${globals.siteUrl}${coverImage}`} />
      <meta
        name="twitter:card"
        content={coverImage ? "summary_large_image" : "summary"}
      />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={`${globals.siteUrl}${coverImage}`} />
      <meta name="image" content={`${globals.siteUrl}${coverImage}`} />
    </Head>
  );
};
