import { URLShortningComponent } from '@common/components/URLShortningComponent'
import { makeStyles } from '@material-ui/core'
import { useCommonStyles } from 'src/helper/commonStyles'

// export interface IHomeShortingSectionProps { };

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f0f1f6',
    padding: '2rem 0',
  },
}))

export const HomeShortingSection: React.FC = (props) => {
  const commonClasses = useCommonStyles()
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={commonClasses.wrapper}>
        <URLShortningComponent />
      </div>
    </div>
  )
}
