import CommonCTA from '@common/components/CommonCTA'
import { SnackbarState } from '@store/common/snackbar/snackbarReducer'

export interface HomepageProps {
  actionShowSnackbar: (state: SnackbarState) => void
}

const HomepageComponent: React.FC<HomepageProps> = (props) => {
  // const popup = () =>
  // 	props.actionShowSnackbar({
  // 		message: 'hello from the other side',
  // 		type: 'SUCESS',
  // });

  return (
    <div>
      <CommonCTA
        title="Boost your links today"
        buttonText="Get Started"
        buttonAction={() => console.log('CTA was clicked')}
      />
    </div>
  )
}

export default HomepageComponent
