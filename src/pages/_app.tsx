import React, { FC, Fragment } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper } from '@store/store'
import Head from 'next/head'
import ParentLayout from 'src/layouts/ParentLayout'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const ShortlyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <ParentLayout {...pageProps}>
        <Component {...pageProps} />
      </ParentLayout>
    </Fragment>
  )
}

export default storeWrapper.withRedux(ShortlyApp)
