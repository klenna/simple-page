import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />

        <Script id="my-inline-script" strategy="afterInteractive">
          {`
            var lennawebchat = document.createElement('script');
            lennawebchat.src = "https://v3.lenna.ai/chat/lenna-init.js";

            var app = document.createElement('script');
            app.src = "https://v3.lenna.ai/chat/app.js";

            document.head.prepend(lennawebchat);
            document.head.prepend(app);

            lennawebchat.onload = function () {
              LennaWebchatInit("lejRej", "9aAOdv");
            };
          `}
        </Script>
      </body>
    </Html>
  );
}
