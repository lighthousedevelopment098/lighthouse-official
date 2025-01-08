import React, { useEffect } from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import mobileApplication from '../Images/mobiledevlopment.json'
import AreYouReady from '../Components/AreYouReady'
import ImproveBusiness from '../Components/ImproveBusiness'
import Projects from '../SameComponents/Projects'
import { useLocation } from 'react-router-dom'

const MobileApplicationPage = () => {
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
            <HeroSection style={style} heading={<><h1 className='greenColor'><span className="greenBackground"style={{color:'white'}}>Mobile</span> Application</h1></>} subHeading='"Transform Your Ideas into High-Performance Mobile Apps!"' animationData={mobileApplication} />
            <div className='pb-3' style={{ backgroundColor: 'black' }}>
            <h2 className='' style={{textAlign:'center', width:"100%",padding:'10px 0px'}}><span className="greenColor">Trusted By The </span> Big Ones <span className="greenColor">Loved By</span> Everyone </h2>
              
                <div className="container bg-white p-3 " style={{ borderRadius: '10px' }}   >
                    <img src="/sponsered.1220e388.png" className='img-fluid' style={{ borderRadius: '10px' }} alt="" />
                </div>

            </div>

            <div className='p-5' style={style}>
                <ImproveBusiness heading={<><h3 className=' mb-4 fs-1'>Let's bring your  <span className="greenColor"> idea</span>into  <span className="greenColor">reality </span>with our <span className="greenColor">expert</span> &  <span className="greenColor">seamless</span> skills.</h3></>} pOne={<> <p>Our app leverages cutting-edge technology and Robust Development frameworks to ensure smooth performance across various mobile platforms, including iOS and Android.</p></>}
                    pTwo={<p>Whether users prefer Apple's intuitive ecosystem or the diverse Android ecosystem, they can seamlessly access your website's content and enjoy a consistent experience across devices.</p>}
                    pThree={<p>Moreover, our app ensures data security and privacy, adhering to industry standards and best practices. We implement robust authentication protocols and encryption techniques to safeguard user information and protect their privacy, instilling trust and confidence in your brand.</p>} img='/manVr.f5cc434b.png' />
            </div>
            <AreYouReady />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default MobileApplicationPage