import { makeStyles, Theme } from '@material-ui/core'
import React, { FC } from 'react'
import { navbarLinks } from 'src/config/routesForNavbar'
import { useCommonStyles } from 'src/helper/commonStyles'
import { CommonButton } from './CommonButton'
import { CommonImage } from './CommonImage'
import { CommonLink } from './CommonLink'

// export interface INavBarProps {}

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    backgroundColor: theme.palette.common.white,
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
  // singleLink: {
  //     marginRight: '1rem',
  // },
  signUpButton: {
    fontSize: '0.75rem',
    padding: '.35rem 1.2rem !important',
  },
  desktopNavigation: {
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

  return (
    <header className={classes.container}>
      <div className={`${commonClasses.wrapper} ${classes.wrapper}`}>
        <div className={classes.desktopNavigation}>
          <div className="center justify-between">
            <div className="center">
              <CommonImage src="/images/logo.svg" alt={process.env.APP_NAME} />
              <ul className={classes.linksContainer}>
                {navbarLinks.map((item, index) => {
                  return (
                    <li>
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
      </div>
    </header>
  )
}
export default NavBar
