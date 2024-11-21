import React from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import mobileApplication from '../Images/mobiledevlopment.json'
import AreYouReady from '../Components/AreYouReady'
import ImproveBusiness from '../Components/ImproveBusiness'
import Projects from '../SameComponents/Projects'

const MobileApplicationPage = () => {
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
            <HeroSection style={style} heading={<><h1><span className="greenBackground">Mobile</span> Application</h1></>} subHeading='" Cloud Servers lightning speed"' animationData={mobileApplication} />
            <div  style={{ backgroundColor: 'black' }}>
                <h3 className='text-white text-center mb-4'>Trusted by the big ones, loved by everyone</h3>
                <div className="container bg-white p-3" style={{ borderRadius: '10px' }}   >
                    <img src="/sponsered.1220e388.png" className='img-fluid' style={{ borderRadius: '10px' }} alt="" />
                </div>

            </div>

            <div className='p-5' style={{ backgroundColor: "black" }}>
                <ImproveBusiness heading={<><h3 className='text-white mb-4 fs-1'>Let's bring your  <span className="greenColor"> idea</span>into  <span className="greenColor">reality </span>with our <span className="greenColor">expert</span> &  <span className="greenColor">seamless</span> skills.</h3></>} pOne={<> <p>Our app leverages cutting-edge technology and Robust Development frameworks to ensure smooth performance across various mobile platforms, including iOS and Android.</p></>}
                    pTwo={<p>Whether users prefer Apple's intuitive ecosystem or the diverse Android ecosystem, they can seamlessly access your website's content and enjoy a consistent experience across devices.</p>}
                    pThree={<p>Moreover, our app ensures data security and privacy, adhering to industry standards and best practices. We implement robust authentication protocols and encryption techniques to safeguard user information and protect their privacy, instilling trust and confidence in your brand.</p>} img='https://wolftechs.pk/_next/static/media/testboy_2.3a3b9eeb.png' />
            </div>
            <AreYouReady />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default MobileApplicationPage