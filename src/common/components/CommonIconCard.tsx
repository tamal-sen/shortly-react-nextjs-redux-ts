import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  Avatar,
  Theme,
} from '@material-ui/core'
import React from 'react'
import { CommonImage } from './CommonImage'

export const useStyles = makeStyles<Theme, ICommonIconCardProps>((theme) => ({
  root: {
    borderRadius: '5px',
    boxShadow: '0px 7px 25px 7px rgba(0,0,0,0.05)',
    padding: '1rem',
    marginTop: '2.375rem',
    overflow: 'visible',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  container: {},
  title: {
    color: theme.palette.neutral.very_dark_blue,
    marginTop: '2rem',
    marginBottom: '.85rem',
  },
  description: {
    color: theme.palette.grey[500],
  },
  avatarWrapper: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      placeContent: 'center',
    },
  },
  avatar: (props) => ({
    color: theme.palette.primary.main,
    backgroundColor: props.iconBgColor
      ? props.iconBgColor
      : theme.palette.primary.dark,
    padding: '2.3rem',
    marginTop: '-4.375rem',
    boxShadow: '0px 7px 25px 7px rgba(0,0,0,0.05)',
  }),
}))

export interface ICommonIconCardProps {
  iconUrl: string
  iconBgColor?: string
  heading?: string
  description?: string
}

export const CommonIconCard: React.FC<ICommonIconCardProps> = (props) => {
  const { iconUrl, heading, description } = props
  const classes = useStyles(props)
  return (
    <Card elevation={0} className={classes.root}>
      <CardContent>
        <div className={classes.avatarWrapper}>
          <Avatar className={classes.avatar}>
            <CommonImage src={iconUrl} />
          </Avatar>
        </div>
        <Typography
          variant="h5"
          className={classes.title}
          color="textSecondary"
        >
          {heading}
        </Typography>
        <Typography
          variant="body2"
          className={classes.description}
          color="textSecondary"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
