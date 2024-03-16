import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{
        overscrollBehavior: "none",
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
