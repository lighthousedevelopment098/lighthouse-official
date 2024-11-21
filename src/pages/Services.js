import React from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import EverythingInOnePlace from '../Components/EverythingInOnePlace'
import '../Css/Services.css'
const Services = () => {

    const bg1 = '/services.3b34f62e.png'
    const bg2 = '/Home-Herobg-c2e4d53f.png'
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
            <HeroSection style={style} heading={<h1>Our <span className='greenBackground'>Services</span></h1>} subHeading='" We are a Tech Services Company providing Various Digital Services Worldwide. We use modern tools, trends and technology to empower you to be on top."' />
            <EverythingInOnePlace />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default Services