import { URLShortningComponent } from '@common/components/URLShortningComponent'
import { makeStyles } from '@material-ui/core'
import { useCommonStyles } from 'src/helper/commonStyles'
import { HomeProps } from 'src/pages'

// export interface IHomeShortingSectionProps { };

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f0f1f6',
    padding: '2rem 0',
  },
  pushToTop: {
    marginTop: '-118px',
  },
}))

export const HomeShortingSection: React.FC<HomeProps> = (props) => {
  const commonClasses = useCommonStyles()
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={`${commonClasses.wrapper} ${classes.pushToTop}`}>
        <URLShortningComponent {...props} />
      </div>
    </div>
  )
}
