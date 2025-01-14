import React, { useEffect } from 'react'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import ContactForm from '../Components/ContactForm'
import '../Css/Contact.css'
import HeroSection from '../SameComponents/HeroSection'
import { useLocation } from 'react-router-dom'
const Contact = () => {
    const location = useLocation();

    useEffect(() => {
      // Scroll to the top whenever the location changes
      window.scrollTo(0, 0);
    }, [location]);
  
   
    const bg1 = '/services.3b34f62e.png'
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
        // filter: 'blur(10px)', // Blur effect
        // borderBottom: '5px solid rgba(0, 0, 0, 0.9)', // Border bottom
    };

   
    return (
        <>
            <HeroSection style={style} bg1={bg1} bg2={bg2} heading={<h1 style={{color:'#903519'}}><span style={{color:'white'}} className='greenBackground'>Contact</span> us</h1>} subHeading='" Feel free to contact us and tell us about your great ideas so we can turn it into reality"'  />
        
            <ContactForm />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default Contact