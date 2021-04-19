import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
 
  render() {
    return (
    <Html>
        <Head>
            <title>Tattoo</title>
            {/* TODO: Поставить иконку */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
             {/* TODO: Заполнить head, description и keywords */}
            <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
