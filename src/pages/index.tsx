import NavBar from '@common/components/NavBar'
import HomepageContainer from '@containers/home/HomepageContainer'
import Head from 'next/head'
import React, { Fragment } from 'react'

/**
 * Homepage - This is the current entry point of app
 */
const HomePage: React.FC = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{process.env.APP_NAME ? process.env.APP_NAME : 'Shortly'}</title>
      </Head>
      <NavBar />
      <main>
        <HomepageContainer {...props} />
      </main>
    </Fragment>
  )
}

export default HomePage
