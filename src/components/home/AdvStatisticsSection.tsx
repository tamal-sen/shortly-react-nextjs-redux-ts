import CommonHeading from '@common/components/CommonHeading'
import CommonIconCard from '@common/components/CommonIconCard'
import { Grid, makeStyles } from '@material-ui/core'
import { FC } from 'react'
import { useCommonStyles } from 'src/helper/commonStyles'

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f0f1f6',
    padding: '2rem 0',
  },
  cardsContainer: {
    padding: '2rem 0 3rem 0',

    // This is for creating a horizontal line
    backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main})`,
    backgroundSize: '100% 7px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',

    //  This one flips the line vertically
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '5px 70%',
    },
  },
  itemSecond: {
    marginTop: '1rem',
    [theme.breakpoints.up('sm')]: {
      marginTop: '2.35rem',
    },
  },
  itemThird: {
    marginTop: '1rem',
    [theme.breakpoints.up('sm')]: {
      marginTop: `${2.35 * 2}rem`,
    },
  },
}))

// export interface IAdvStatisticsSectionProps {}

const AdvStatisticsSection: FC = () => {
  const commonClasses = useCommonStyles()
  const classes = useStyles()
  return (
    <section className={classes.container}>
      <div className={commonClasses.wrapper}>
        <CommonHeading
          align="center"
          title="Advanced Statistics"
          subTitle="Track how your links are performing across the web with our advanced statistics dashboard"
        />
        <div className={classes.cardsContainer}>
          <Grid container spacing={3}>
            <Grid item sm={4}>
              <CommonIconCard
                iconUrl="/images/icon-brand-recognition.svg"
                heading="Brand Recognition"
                description="Boost your brand recognition with each click. Generics links don't mean a thing. Branded links help install confidence in your content."
              />
            </Grid>
            <Grid item sm={4} className={classes.itemSecond}>
              <CommonIconCard
                iconUrl="/images/icon-detailed-records.svg"
                heading="Detailed Records"
                description="Gain insights into who is clicking your links. Knowing when are where people engage with your content helps inform better decision."
              />
            </Grid>
            <Grid item sm={4} className={classes.itemThird}>
              <CommonIconCard
                iconUrl="/images/icon-fully-customizable.svg"
                heading="Fully Customizable"
                description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  )
}

export default AdvStatisticsSection
