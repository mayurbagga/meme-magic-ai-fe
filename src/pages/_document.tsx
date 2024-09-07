import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      {/* you can make class name dark here */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
