import React, { FC, useEffect, Fragment } from 'react'
import { Theme } from '../config'
import { useRouter } from 'next/router'
import { Dispatch } from 'redux'
import * as appActions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppState } from '@store/store'
import {
  CommonSnackbar,
  SnackbarProps,
} from '@common/components/CommonSnackbar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const mapStateToProps = (state: AppState) => ({ ...state })
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(appActions, dispatch)

const ParentLayout: FC = ({ children, ...restProps }) => {
  const router = useRouter()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }

    console.log('Hello', router.pathname)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [router.pathname])

  return (
    <Fragment>
      <ThemeProvider theme={createMuiTheme(Theme)}>
        <CommonSnackbar {...(restProps as SnackbarProps)} />
        <CssBaseline />
        {children}
      </ThemeProvider>
      <style jsx global>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin-top: 0;
            margin-bottom: 0.5rem;
          }
        `}
      </style>
    </Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentLayout)
