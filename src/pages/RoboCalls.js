import React, { useEffect } from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import roboCalls from '../Images/calls.json'
import SmsServicesPlans from '../Components/SmsServicesPlans'
import '../Css/RoboCalls.css'
import AreYouReady from '../Components/AreYouReady'
import { useLocation } from 'react-router-dom'
const RoboCalls = () => {
    const location = useLocation();

    useEffect(() => {
      // Scroll to the top whenever the location changes
      window.scrollTo(0, 0);
    }, [location]);
  
    const bg1 = '/'
    const bg2 = '/Home-Herobg-c2e4d53f.png'


    const style = {
        backgroundImage: `
            linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
            url(${bg2}),
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' right, center',
        backgroundColor: 'white', // Fallback background color
    };
    return (
        <>
            <HeroSection style={style} bg1={bg1} bg2={bg2}
             heading={<><h1 style={{ lineHeight: '80px',color:'#903519' }}>Branded <span className="greenBackground text-white">Sms</span> & Robbo <span className='greenBackground text-white'>Calls</span></h1></>}
              subHeading='"Connect with your audience instantly through branded SMS and robo calls, delivering personalized messages that drive engagement and boost your business reach."' animationData={roboCalls} />
            <SmsServicesPlans />
            <AreYouReady />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default RoboCalls