import React from 'react'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import ContactForm from '../Components/ContactForm'
import '../Css/Contact.css'
import HeroSection from '../SameComponents/HeroSection'
const Contact = () => {

    const bg1 = '/contactUsBg.116c4903.jpg'
    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
    };
    return (
        <>
            <HeroSection heading={<h1><span className='greenBackground'>Contact</span> us</h1>} subHeading='" Feel free to contact us and tell us about your great ideas so we can turn it into reality"' style={style} />
            <ContactForm />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default Contact