import { makeStyles, Theme } from '@material-ui/core'

export const useCommonStyles = makeStyles<Theme>((theme) => ({
  forceFullWidth: {
    width: '100vw',
    position: 'relative',
    marginLeft: '-50vw',
    left: '50%',
  },
  wrapper: {
    padding: '0 1rem',
    margin: '0 auto',
    [theme.breakpoints.up(1440)]: {
      maxWidth: '1120px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '900px',
    },
  },
}))
