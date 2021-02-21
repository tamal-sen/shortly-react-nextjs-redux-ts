import { makeStyles, Theme, IconButton } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { navbarLinks } from 'src/config/routesForNavbar'
import { useCommonStyles } from 'src/helper/commonStyles'
import { CommonButton } from './CommonButton'
import { CommonLink } from './CommonLink'
import { CommonNextImage } from './CommonNextImage'

// export interface INavBarProps {}

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    backgroundColor: theme.palette.common.white,
    '& #desktopNav': {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    '& #mobileNav': {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    '& #mobileNav .overlay': {
      transition: 'visibility 0.1s, opacity 0.12s ease-in',
      position: 'absolute',
      width: '90%',
      zIndex: '999999',
      top: '70px',
      '& .overlay-wrapper': {
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '.65rem',
        padding: '1.5rem',
        textAlign: 'center',
        '& .mobile-button-container': {
          display: 'flex',
          flexDirection: 'column',
          margin: '1rem 0 .5rem 0',
        },
        '& .mobile-link-container': {
          listStyle: 'none',
          padding: 0,
          '& li': {
            marginBottom: '1rem',
          },
        },
        '& .item-single': {
          fontWeight: 700,
          fontSize: '1.2rem',
          color: theme.palette.common.white,
        },
      },
    },
  },
  wrapper: {
    height: '90px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  navLinkStyle: {
    fontWeight: 700,
    color: theme.palette.grey[500],
    paddingRight: '1.4rem',
    '&:hover': {
      color: theme.palette.neutral.very_dark_blue,
    },
  },
  linksContainer: {
    listStyle: 'none',
    display: 'inline-flex',
    '& li': {
      // paddingRight: '1.4rem',
    },
  },
  signUpButton: {
    fontSize: '0.75rem',
    padding: '.35rem 1.2rem !important',
  },
  signUpButtonForMobile: {
    marginTop: '1rem',
    fontSize: '1rem',
    padding: '.45rem 1.2rem !important',
  },
  nav: {
    '& .center': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .justify-between': {
      justifyContent: 'space-between',
    },
  },
}))

const NavBar: FC = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()

  const [mobileMenuState, setMobileMenuState] = useState(false)

  const handleMenuIconClick = () => {
    setMobileMenuState(!mobileMenuState)
  }

  return (
    <header className={classes.container}>
      <div className={`${commonClasses.wrapper} ${classes.wrapper}`}>
        {/* Desktop Navigation */}
        <div id={'desktopNav'} className={classes.nav}>
          <div className="center justify-between">
            <div className="center">
              <CommonNextImage
                src="/images/logo.svg"
                alt={process.env.APP_NAME}
                width="120"
                height="33"
                objectFit="contain"
              />
              <ul className={classes.linksContainer}>
                {navbarLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <CommonLink
                        className={classes.navLinkStyle}
                        href={item.url}
                      >
                        {item.text}
                      </CommonLink>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              {/* TODO: Combine [Sign in] [Sign up] links to feed from one place */}
              <CommonLink className={classes.navLinkStyle} href={'#'}>
                {'Login'}
              </CommonLink>
              <CommonButton
                className={classes.signUpButton}
                onClick={() => console.log('Sign Up button was clicked')}
                size="small"
              >
                Sign Up
              </CommonButton>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div id="mobileNav" className={classes.nav}>
          <div
            className="overlay"
            style={
              mobileMenuState
                ? { visibility: 'visible', opacity: 1 }
                : { visibility: 'hidden', opacity: 0 }
            }
          >
            <div className="overlay-wrapper">
              <ul className="mobile-link-container">
                {navbarLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <CommonLink className="item-single" href={item.url}>
                        {item.text}
                      </CommonLink>
                    </li>
                  )
                })}
              </ul>
              <Divider light={true} />
              <div className="mobile-button-container">
                <CommonLink className={'item-single'} href={'#'}>
                  {'Login'}
                </CommonLink>
                <CommonButton
                  className={classes.signUpButtonForMobile}
                  onClick={() => console.log('Sign Up button was clicked')}
                >
                  Sign Up
                </CommonButton>
              </div>
            </div>
          </div>
          <div className="center justify-between">
            <div className="center">
              {/* we can replace and use a mobile specific logo too */}
              <CommonNextImage
                src="/images/logo.svg"
                alt={process.env.APP_NAME}
                width="100"
                height="30"
                objectFit="contain"
              />
            </div>
            <div>
              <IconButton onClick={handleMenuIconClick}>
                <CommonNextImage
                  src="/images/icon-menu.svg"
                  alt={'Tap to open menu'}
                  width="24"
                  height="24"
                  objectFit="contain"
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default NavBar
