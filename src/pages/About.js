import React, { useEffect } from 'react'
import AppDevlopment from '../SameComponents/AppDevlopment'
import BuildFromStratch from '../Components/BuildFromStratch'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import HeroSection from '../SameComponents/HeroSection'
import TakeALookAboutPage from '../Components/TakeALookAboutPage'
import '../Css/About.css'
import OurTeam from '../Components/OurTeam'
import { useLocation } from 'react-router-dom'

const About = () => {
       const location = useLocation();
   
       useEffect(() => {
       
         window.scrollTo(0, 0);
       }, [location]);
     
    const bg1 = '/about_hero.2859dc3e.png'
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
            <HeroSection style={style} bg1={bg1} bg2={bg2} heading=
            {
                <h1 style={{color:'#903519'}}>Our <span className='greenBackground'
             style={{color:'white'}}> Mission,</span>  Your Success</h1>
            }
              subHeading='" At Lighthouse Software Solution Pvt Ltd, we are dedicated to shaping your brand s identity. Our exceptional services blend visually appealing and user-friendly design with top-notch programming expertise. "' />
            <TakeALookAboutPage />
            <OurTeam />
            <AppDevlopment />
            <BuildFromStratch />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default About