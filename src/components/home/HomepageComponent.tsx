import CommonCTA from '@common/components/CommonCTA'
import Footer from '@common/components/footer/Footer'
import CommonHeroSection from '@common/components/sections/CommonHeroSection'
import { SnackbarState } from '@store/common/snackbar/snackbarReducer'
import React from 'react'
import AdvStatisticsSection from './AdvStatisticsSection'

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
      <CommonHeroSection
        title="More than just shorter links"
        subTitle="Build your brand's recognition and get detailed insights on how your links are performing"
        buttonText="Get Started"
        onClick={() => console.log('Hero section button was clicked')}
        imageUrl="/images/illustration-working.svg"
        alt="Illustration Working"
      />
      <AdvStatisticsSection />
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
