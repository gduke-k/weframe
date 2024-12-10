import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <title>WeFrame Tech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Weframetech" />
        <meta name="keywords" content="tech news, product reviews, AI trends, gadgets, Weframetech, software" />
        <meta name="author" content="Gaurav" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
