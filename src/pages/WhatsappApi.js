import React, { useEffect } from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import api from '../Images/whatsappapi.json'
import WhatsappMessages from '../Components/WhatsappMessages'
import AreYouReady from '../Components/AreYouReady'
import TwoDifferentApis from '../Components/TwoDifferentApis'
import { useLocation } from 'react-router-dom'
const WhatsappApi = () => {
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
             heading={<><h1 style={{color:'#903519'}}>Whatsapp <span className="greenBackground text-white">API's</span></h1></>}
              subHeading='"Streamline your business communication with the WhatsApp API, offering seamless messaging solutions that enhance customer interaction and drive efficiency."' animationData={api} />
            <WhatsappMessages />
            <TwoDifferentApis />
            <AreYouReady />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default WhatsappApi