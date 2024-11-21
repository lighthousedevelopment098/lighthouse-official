import React from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import api from '../Images/whatsappapi.json'
import WhatsappMessages from '../Components/WhatsappMessages'
import AreYouReady from '../Components/AreYouReady'
import TwoDifferentApis from '../Components/TwoDifferentApis'
const WhatsappApi = () => {
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
            <HeroSection style={style} heading={<><h1>Whatsapp<span className="greenBackground">API's</span></h1></>} subHeading='" Cloud Servers lightning speed"' animationData={api} />
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