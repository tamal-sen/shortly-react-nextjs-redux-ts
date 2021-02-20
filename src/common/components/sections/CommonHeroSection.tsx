import { Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react'
import { useCommonStyles } from 'src/helper/commonStyles'
import { CommonButton } from '../CommonButton'
import { CommonImage } from '../CommonImage'

const useStyles = makeStyles<Theme, ICommonHeroSectionProps>((theme) => ({
  container: (props) => ({
    overflow: 'hidden',
    backgroundColor: theme.palette.common.white,
    padding: '3rem 0',
    // backgroundImage: `url(${props.imageUrl})`,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: '100%',
  }),
  title: {
    color: theme.palette.neutral.very_dark_blue,
    marginBottom: '.5rem',
  },
  subtitle: {
    color: theme.palette.neutral.grayish_violet,
    fontWeight: 500,
  },
  buttonWrapper: {
    marginTop: '1.5rem',
  },
  contentGridItemWrapper: {
    alignSelf: 'center',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      order: 1,
    },
  },
  imageGridItemWrapper: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem',
    },
  },
}))

export interface ICommonHeroSectionProps {
  id?: string
  title: string
  subTitle?: string
  imageUrl: string
  alt?: string
  backgroundColor?: string
  buttonText?: string
  onClick?: () => void
}

const CommonHeroSection: React.FC<ICommonHeroSectionProps> = (props) => {
  const { title, id, subTitle, imageUrl, buttonText, onClick, alt } = props
  const classes = useStyles(props)
  const commonClasses = useCommonStyles()
  return (
    <section id={id} className={classes.container}>
      <div className={commonClasses.wrapper}>
        <Grid container spacing={0}>
          <Grid
            item
            className={classes.contentGridItemWrapper}
            xs={12}
            sm={6}
            lg={6}
          >
            <Typography variant="h1" className={classes.title}>
              {title}
            </Typography>
            {subTitle ? (
              <Typography variant="h5" className={classes.subtitle}>
                {subTitle}
              </Typography>
            ) : (
              ''
            )}
            {buttonText != null && onClick != null ? (
              <div className={classes.buttonWrapper}>
                <CommonButton onClick={onClick}>{buttonText}</CommonButton>
              </div>
            ) : (
              ''
            )}
          </Grid>
          <Grid
            item
            className={classes.imageGridItemWrapper}
            xs={12}
            sm={6}
            lg={6}
          >
            <CommonImage src={imageUrl} alt={alt} width="150%" />
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default CommonHeroSection
