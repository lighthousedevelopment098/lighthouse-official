import React, { useEffect } from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import webAppApp from '../Images/animation_lmljzdi0.json'
import ImproveBusiness from '../Components/ImproveBusiness'
import AreYouReady from '../Components/AreYouReady'
import { useLocation } from 'react-router-dom'
const WebApplication = () => {
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
            <HeroSection style={style} heading={<><h1 className='greenColor'><span className="greenBackground text-white">Web</span> Application</h1></>} subHeading='"Empowering Your Business with Custom Web Applications!"' animationData={webAppApp} />
            <div className='p-5' style={style}>
                <ImproveBusiness heading={<><h3 className=' mb-4 fs-1'>Make your  <span className="greenColor"> business </span>life easy and  <span className="greenColor">Advance. </span><span className="greenColor"></span><span className="greenColor"></span></h3></>}
                    pOne={<> <p>Are you in search of a truly distinctive web application that offers a diverse range of functionalities? Look no further! At Wolf Software Solutions Pvt. Ltd., our team of seasoned designers and developers is poised to transform your visionary concepts into reality.</p></>}
                    pTwo={<p>With our expertise and commitment to excellence, we will craft a web application that sets you apart from the competition while delivering unparalleled functionality.</p>}
                    pThree={<p></p>} img='/webAppwidget.d39b4109.png' />
            </div>
            <AreYouReady />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default WebApplication