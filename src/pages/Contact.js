import React from 'react'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import ContactForm from '../Components/ContactForm'
import '../Css/Contact.css'
import HeroSection from '../SameComponents/HeroSection'
const Contact = () => {

    const bg1 = '/xr-collab-capsule.jpg'
    
    // const style = {
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg1})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'right',
    // };
    const style = {
        backgroundImage: `
            linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
            
         
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' right, center',
        backgroundColor: 'white', // Fallback background color
    };
    return (
        <>
            <HeroSection style={style} heading={<h1 style={{color:'#903519'}}><span style={{color:'white'}} className='greenBackground'>Contact</span> us</h1>} subHeading='" Feel free to contact us and tell us about your great ideas so we can turn it into reality"'  />
            <ContactForm />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default Contact