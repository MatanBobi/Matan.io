import Head from "next/head";

export const PostSeo = ({
  title,
  description,
  coverImage,
  date,
  readTime,
  keywords,
}) => {
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
      <meta name="twitter:label1" value="Last updated" content="Last updated" />
      <meta name="twitter:data1" value={date} content={date} />
      <meta name="twitter:label2" content="Read Time" />
      <meta name="twitter:data2" content={readTime} />
    </Head>
  );
};
