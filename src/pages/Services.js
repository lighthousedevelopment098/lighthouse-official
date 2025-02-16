import React, { useEffect } from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import EverythingInOnePlace from '../Components/EverythingInOnePlace'
import '../Css/Services.css'
import { useLocation } from 'react-router-dom'
const Services = () => {
    const location = useLocation();

    useEffect(() => {
      // Scroll to the top whenever the location changes
      window.scrollTo(0, 0);
    }, [location]);
  
    const bg1 = '/services.3b34f62e.png'
    const bg2 = '/Home-Herobg-c2e4d53f.png'
    // const style = {
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    //     url(${bg2}),
    //     url(${bg1})`,
    //     backgroundSize: 'contain,cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'right,center',
    // };
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
             heading={<h1 style={{color:'#903519'}} className='text-[#903519]'>
                Tailored <span className='text-white greenBackground'>Business </span>Solutions</h1>} subHeading='" We are a Tech Services Company providing Various Digital Services Worldwide. We use modern tools, trends and technology to empower you to be on top."' />
            <EverythingInOnePlace />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default Services