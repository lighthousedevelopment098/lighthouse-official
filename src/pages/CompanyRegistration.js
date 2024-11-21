import React from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import companyRegistration from '../Images/companyregistration.json'
import MakeYourCompanyOffical from '../Components/MakeYourCompanyOffical'
import AreYouReady from '../Components/AreYouReady'
const CompanyRegistration = () => {
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
            <HeroSection style={style} heading={<><h1><span className="greenBackground">Company </span>Registration</h1></>} subHeading='" Cloud Servers lightning speed"' animationData={companyRegistration} />
            <MakeYourCompanyOffical />
            <AreYouReady />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default CompanyRegistration