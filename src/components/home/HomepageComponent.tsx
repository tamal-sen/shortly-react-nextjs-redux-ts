import CommonCTA from '@common/components/CommonCTA'
import Footer from '@common/components/footer/Footer'
import CommonHeroSection from '@common/components/sections/CommonHeroSection'
import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import { theme } from 'src/config'
import { HomeProps } from 'src/pages'
import AdvStatisticsSection from './AdvStatisticsSection'
import { HomeShortingSection } from './HomeShortningSection'

const HomepageComponent: React.FC<HomeProps> = (props) => {
  const matchesMobile = useMediaQuery(theme.breakpoints.down('xs')) // const popup = () =>
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
        imageWidth={matchesMobile ? '450' : '700'}
        imageHeight={matchesMobile ? '300' : '500'}
      />
      <HomeShortingSection {...props} />
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
