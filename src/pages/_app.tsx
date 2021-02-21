import React, { FC, Fragment } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper } from '@store/store'
import Head from 'next/head'
import ParentLayout from 'src/layouts/ParentLayout'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const ShortlyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore()

  // @ts-ignore
  const myPersistor = store.__PERSISTOR
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <PersistGate persistor={myPersistor} loading={null}>
        <ParentLayout {...pageProps}>
          <Component {...pageProps} />
        </ParentLayout>
      </PersistGate>
    </Fragment>
  )
}

export default storeWrapper.withRedux(ShortlyApp)
