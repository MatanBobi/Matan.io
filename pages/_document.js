import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&family=Montserrat:wght@700&family=Rubik:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-sans text-brand-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
