import { memo, FC } from 'react'
import { useRouter } from 'next/router'
import Link from '@material-ui/core/Link'
import { makeStyles, Theme } from '@material-ui/core'

export interface ICommonLinkProps {
  children: JSX.Element | string
  href?: string
  className?: string
  actDefault?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement> | undefined) => void
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    color: theme.palette.grey[400],
    fontSize: '.80rem',
    '&:hover, &:hover svg path': {
      fill: theme.palette.primary.main,
      color: theme.palette.primary.main,
      textDecoration: 'initial',
    },
  },
}))

const _CommonLink: FC<ICommonLinkProps> = ({
  href,
  onClick,
  className,
  children,
  actDefault,
  ...restProps
}) => {
  const router = useRouter()
  const classes = useStyles()

  const handleClick = (event: React.MouseEvent<HTMLElement> | undefined) => {
    if (event) event.preventDefault()
    if (onClick) onClick(event)
    if (href) router.push(href)
  }

  return (
    <Link
      href={href ? href : ''}
      onClick={actDefault ? undefined : handleClick}
      className={className ? `${className} ${classes.root}` : classes.root}
      {...restProps}
    >
      {children}
    </Link>
  )
}

export const CommonLink = memo(_CommonLink)
