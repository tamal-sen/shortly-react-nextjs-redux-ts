import { Grid, makeStyles } from '@material-ui/core'
import React, { FC } from 'react'
import {
  companyMenuItems,
  featuresMenuItems,
  resourcesMenuItems,
} from 'src/config/routesForFooter'
import { socialMediaLinks } from 'src/config/socialLinks'
import { useCommonStyles } from 'src/helper/commonStyles'
import { CommonImage } from '../CommonImage'
import { MenuListGroup } from './FooterMenuItems'
import { SocialMediaLinks } from './FooterSocialItems'

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '3.75rem 0',
    [theme.breakpoints.down('sm')]: {
      padding: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
    backgroundColor: theme.palette.neutral.very_dark_violet,
  },
  itemWrapper: {
    display: 'flex',
  },
}))

// export interface IFooterProps {}

const Footer: FC = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()
  return (
    <footer className={classes.container}>
      <div className={commonClasses.wrapper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <CommonImage
              src="/images/logo-white.svg"
              alt="Shortly Footer logo"
            />
          </Grid>
          <Grid item xs={12} sm={9} md={6} lg={6}>
            <Grid container>
              <Grid item xs={12} sm={4}>
                <MenuListGroup
                  menuHeading="Features"
                  menuItems={featuresMenuItems}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MenuListGroup
                  menuHeading="Resources"
                  menuItems={resourcesMenuItems}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MenuListGroup
                  menuHeading="Company"
                  menuItems={companyMenuItems}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3} md={2} lg={2}>
            <SocialMediaLinks socialMediaLinks={socialMediaLinks} />
          </Grid>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer
