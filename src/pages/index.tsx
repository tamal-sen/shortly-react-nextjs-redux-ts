import NavBar from '@common/components/NavBar'
import HomepageContainer from '@containers/home/HomepageContainer'
import { LinkListState, LinkState } from '@store/linkShortning/linkReducer'
import Head from 'next/head'
import React, { Fragment } from 'react'

/**
 * Homepage - This is the current entry point of app
 */

export interface HomeProps {
  links: LinkListState
  actionAddLinkToList: (state: LinkState) => void
}

const HomePage: React.FC<HomeProps> = (props) => {
  console.log('props->> ', props)
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
