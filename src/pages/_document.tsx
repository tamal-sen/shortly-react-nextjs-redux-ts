import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import sprite from 'svg-sprite-loader/runtime/sprite.build'
import { ServerStyleSheets } from '@material-ui/core/styles'

interface CustomDocumentProps {
  spriteContent: string
}

export default class CustomDocument extends Document<CustomDocumentProps> {
  public static async getInitialProps(
    ctx: DocumentContext
  ): Promise<CustomDocumentProps & DocumentInitialProps> {
    const spriteContent = sprite.stringify()
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })
    const initialProps = await Document.getInitialProps(ctx)

    return {
      spriteContent,
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    }
  }

  public render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* your head if needed */}
          <meta name="description" content={process.env.APP_DESCRIPTION} />
          <meta name="twitter:card" content={process.env.APP_DESCRIPTION} />
          <meta name="twitter:url" content={`${process.env.HOST}`} />
          <meta name="twitter:title" content={process.env.APP_NAME} />
          <meta
            name="twitter:description"
            content={process.env.APP_DESCRIPTION}
          />
          <meta
            name="twitter:image"
            content={`${process.env.HOST}/images/favicon-32x32.png`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={process.env.APP_NAME} />
          <meta
            property="og:description"
            content={process.env.APP_DESCRIPTION}
          />
          <meta property="og:site_name" content={process.env.APP_NAME} />
          <meta property="og:url" content={`${process.env.HOST}`} />
          <meta
            property="og:image"
            content={`${process.env.HOST}/images/favicon-32x32.png`}
          />

          <link
            rel="apple-touch-icon"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link rel="shortcut icon" href="/images/favicon-32x32.png" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" />
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
