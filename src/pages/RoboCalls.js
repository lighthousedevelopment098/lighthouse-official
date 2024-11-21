import React from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import roboCalls from '../Images/calls.json'
import SmsServicesPlans from '../Components/SmsServicesPlans'
import '../Css/RoboCalls.css'
import AreYouReady from '../Components/AreYouReady'
const RoboCalls = () => {
    const bg1 = '/Untitled-1.jpg'
    const bg2 = '/Untitled-1.jpg'
    const style = {

        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${bg2}),
        url(${bg1})`,
        backgroundSize: 'contain,cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right,center',
    };
    return (
        <>
            <HeroSection style={style} heading={<><h1 style={{ lineHeight: '80px' }}>Branded <span className="greenBackground">Sms</span> & Robbo <span className='greenBackground'>Calls</span></h1></>} subHeading='" Cloud Servers lightning speed"' animationData={roboCalls} />
            <SmsServicesPlans />
            <AreYouReady />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default RoboCalls