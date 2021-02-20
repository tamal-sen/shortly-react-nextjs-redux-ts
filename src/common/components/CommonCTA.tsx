import { Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import CommonButton from '@common/components/CommonButton'
import { useCommonStyles } from 'src/helper/commonStyles'

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    minHeight: '275px',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: 'cover',
      background: `url("images/bg-boost-desktop.svg") no-repeat`,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'cover',
      background: `url("images/bg-boost-mobile.svg") no-repeat`,
    },
  },
  paper: {
    backgroundColor: theme.palette.primary.dark,
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
  },
  ctaTitle: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: theme.palette.common.white,
  },
}))

export interface ICommonCTAProps {
  title: string
  buttonText: string
  buttonAction: () => void
  forceFullWidth?: boolean
}

const CommonCTA: React.FC<ICommonCTAProps> = ({
  title,
  buttonText,
  buttonAction,
  forceFullWidth = false, // default value if optional value is empty
}) => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()
  return (
    <section
      className={`${classes.paper} ${
        forceFullWidth && commonClasses.forceFullWidth
      }`}
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid item className={classes.itemWrapper}>
          <Typography variant="h3" className={classes.ctaTitle}>
            {title}
          </Typography>
          <CommonButton onClick={buttonAction}>{buttonText}</CommonButton>
        </Grid>
      </Grid>
    </section>
  )
}

export default CommonCTA
