import { List, ListItem, makeStyles, Theme } from '@material-ui/core'
import React, { FC, Fragment } from 'react'
import CommonLink from '../CommonLink'

const useStyles = makeStyles<Theme>((theme) => ({
  menuHeading: {
    fontWeight: 700,
    color: theme.palette.common.white,
  },
  menuItemsWrapper: {
    display: 'flex',
    maxWidth: '11rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      placeContent: 'center',
    },
  },
  listItem: {
    padding: '.4rem 0',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      padding: '.25rem 0',
      placeContent: 'center',
    },
  },
}))

export interface ISocialIconItem {
  svg: JSX.Element
  url: string
}

export interface ISocialMediaLinksProps {
  socialMediaLinks: ISocialIconItem[]
}

export const SocialMediaLinks: FC<ISocialMediaLinksProps> = (props) => {
  const classes = useStyles()

  return (
    <Fragment>
      <List className={classes.menuItemsWrapper}>
        {props.socialMediaLinks.map((item, index) => {
          return (
            <ListItem key={index} className={classes.listItem}>
              <CommonLink href={item.url} key={index}>
                {item.svg}
              </CommonLink>
            </ListItem>
          )
        })}
      </List>
    </Fragment>
  )
}
