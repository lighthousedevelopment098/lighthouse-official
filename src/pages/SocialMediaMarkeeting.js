import React, { useEffect } from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import socialMedia from '../Images/socialmedia.json'
import BoostSalesSlider from '../Components/BoostSalesSlider'
import Testimonials from '../Components/Testimonials'
import { useLocation } from 'react-router-dom'


const SocialMediaMarkeeting = () => {
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
            <HeroSection style={style} bg1={bg1} bg2={bg2} heading={<><h1 className=''style={{color:'#903519'}}> 
                <span className="greenBackground" style={{color:'white '}}>Social Media  </span> & Marketing </h1></>} subHeading='"Enhance your brand visibility with targeted strategies, boosting your presence across social platforms and engaging your audience for maximum impact and growth."' animationData={socialMedia} />
            <BoostSalesSlider />
            <Testimonials />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default SocialMediaMarkeeting