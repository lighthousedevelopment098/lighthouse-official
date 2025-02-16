import React, { useEffect } from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import webDevlopment from '../Images/webapplication.json'
import TechnologyStack from '../Components/TechnologyStack'
import AreYouReady from '../Components/AreYouReady'
import { useLocation } from 'react-router-dom'
const WebsiteDevlopment = () => {
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
            <HeroSection style={style} bg1={bg1} bg2={bg2} heading={<><h1 className='greenColor '><span className="greenBackground text-white">Website</span> Devlopment</h1></>} subHeading='
"Revamp your digital identity with professional website development, creating a seamless and impactful online experience that drives engagement and growth' animationData={webDevlopment} />
            <TechnologyStack />
            <AreYouReady />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default WebsiteDevlopment