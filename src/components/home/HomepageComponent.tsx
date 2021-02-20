import CommonCTA from '@common/components/CommonCTA'
import Footer from '@common/components/footer/Footer'
import { SnackbarState } from '@store/common/snackbar/snackbarReducer'
import React from 'react'

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
        // forceFullWidth={false}
      />
      <Footer />
    </div>
  )
}

export default HomepageComponent
