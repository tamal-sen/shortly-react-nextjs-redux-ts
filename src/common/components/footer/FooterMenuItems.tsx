import {
  List,
  ListItem,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import React, { FC, Fragment } from 'react'
import CommonLink from '../CommonLink'

const useStyles = makeStyles<Theme>((theme) => ({
  menuHeading: {
    fontWeight: 700,
    color: theme.palette.common.white,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  menuItemsWrapper: {
    marginBottom: '0.5rem',
  },
  listItem: {
    padding: '.4rem 0',
    [theme.breakpoints.down('xs')]: {
      placeContent: 'center',
      padding: '.25rem 0',
      margin: '0 auto',
    },
  },
}))

export interface ImenuItem {
  text: string
  url: string
}
export interface IMenuItemsGroupProps {
  menuHeading: string
  menuItems: ImenuItem[]
  [propName: string]: any
}

export const MenuListGroup: FC<IMenuItemsGroupProps> = ({
  menuHeading,
  menuItems,
  ...restProps
}) => {
  const classes = useStyles()

  return (
    <Fragment>
      <Typography variant="h6" className={classes.menuHeading}>
        {menuHeading}
      </Typography>
      <List className={classes.menuItemsWrapper}>
        {menuItems.map((item, index) => {
          return (
            <ListItem key={index} className={classes.listItem}>
              <CommonLink href={item.url} key={index} {...restProps}>
                {item.text}
              </CommonLink>
            </ListItem>
          )
        })}
      </List>
    </Fragment>
  )
}
