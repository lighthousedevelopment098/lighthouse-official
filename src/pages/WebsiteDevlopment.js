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
    // const style = {
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    //     url(${bg2}),
    //     url(${bg1})`,
    //     backgroundSize: 'contain,cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'right,center',
    // };
    return (
        <>
            <HeroSection style={style} heading={<><h1 className='greenColor '><span className="greenBackground text-white">Website</span> Devlopment</h1></>} subHeading='"Transform Your Online Presence with Expert Website Development!"' animationData={webDevlopment} />
            <TechnologyStack />
            <AreYouReady />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default WebsiteDevlopment