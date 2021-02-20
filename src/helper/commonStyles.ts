import { makeStyles } from '@material-ui/core'

export const commonUseStyles = makeStyles(() => ({
  forceFullWidth: {
    width: '100vw',
    position: 'relative',
    marginLeft: '-50vw',
    left: '50%',
  },
}))
