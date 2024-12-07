import { Html, Head, Main, NextScript } from "next/document";

// tracking ID as a variable
const GA_TRACKING_ID = "G-LYLCP5JVSL";

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
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
