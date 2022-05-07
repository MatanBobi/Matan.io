import Head from "next/head";

export const PostSeo = ({ title, description, coverImage, keywords }) => {
  return (
    <Head>
      <title>{title} | Matan.io</title>
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      <meta property="og:image" content={coverImage} />
      <meta
        name="twitter:card"
        content={coverImage ? "summary_large_image" : "summary"}
      />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={coverImage} />
      <meta name="image" content={coverImage} />
    </Head>
  );
};
