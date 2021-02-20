import { makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles<Theme, ICommonHeadingProps>((theme) => ({
  title: (props) => ({
    color: props.titleColor
      ? props.titleColor
      : theme.palette.neutral.very_dark_blue,
    marginBottom: '0.5rem',
  }),
  subtitle: {
    color: theme.palette.grey[500],
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
  container: (props) => ({
    maxWidth: '450px',
    margin: getDynamicMargin(props.align),
  }),
}))

const getDynamicMargin = (
  align: 'right' | 'left' | 'center' | 'justify' | undefined
) => {
  switch (align) {
    case 'right':
      return '0 0 0 auto'
    case 'center':
      return '0 auto'
    default:
      return ''
  }
}

export interface ICommonHeadingProps {
  title: string
  subTitle?: string
  titleColor?: string
  align?: 'right' | 'left' | 'center' | 'justify'
}

export const CommonHeading: React.FC<ICommonHeadingProps> = (props) => {
  const { title, subTitle, align = 'center' } = props
  const classes = useStyles(props)
  return (
    <div className={classes.container}>
      <Typography variant="h3" align={align} className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body2" align={align} className={classes.subtitle}>
        {subTitle}
      </Typography>
    </div>
  )
}
