import React from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import webAppApp from '../Images/animation_lmljzdi0.json'
import ImproveBusiness from '../Components/ImproveBusiness'
import AreYouReady from '../Components/AreYouReady'
const WebApplication = () => {
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
            <HeroSection style={style} heading={<><h1><span className="greenBackground">Web</span> Application</h1></>} subHeading='" Cloud Servers lightning speed"' animationData={webAppApp} />
            <div className='p-5' style={{ backgroundColor: "black" }}>
                <ImproveBusiness heading={<><h3 className='text-white mb-4 fs-1'>Make your  <span className="greenColor"> business </span>life easy and  <span className="greenColor">Advance. </span><span className="greenColor"></span><span className="greenColor"></span></h3></>}
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