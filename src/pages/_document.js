import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Mag Production</title>
        <meta
          name="description"
          content="Capturing the Elegance in Every Detail and the Depth in Every Emotion. At our production house, we transform ideas into visual tales that captivate."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
