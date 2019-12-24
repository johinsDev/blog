import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link href="/all.min.css" rel="stylesheet" />
        </Head>
        <body className="font-robotoMono">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
