import React from 'react'
import Navbar from './Navbar';
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp,  } from 'react-icons/fa'
import Lottie from 'lottie-react';
const HeroSection = ({ heading, subHeading, animationData,bg1,bg2 }) => {
  
    const style = {
      backgroundImage: `
        linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
        url(${bg2}),
        url(${bg1})`,
      backgroundSize: 'contain, cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right, center',
      backgroundColor: 'white', // Fallback background color

    };
    return (
        <>     <Navbar />
            <div className="heroSection relative" style={style}>
       
                <div className="container-fluid pt-4" style={{ paddingLeft: '35px' }}>
                    <div className="row justify-content-between">
                        <div className="col-md-5 center  ">
                            {heading}

                            <p className="subHeading">{subHeading}</p>
<button className="primaryBtn">
  Login now
  <img src="/lock.949fbe97.png" alt="lockImg" />
</button>

                            <div className="d-flex  align-items-center absolute justify-content-start heroLinks">
                                <a href="https://www.facebook.com/Teamlighthouse004" 
  target="_blank" 
  rel="noopener noreferrer"> <FaFacebookF className='heroIcons' /> </a>
                                <a href='https://www.linkedin.com/company/light-house-development098/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'> <FaLinkedin className='heroIcons' /> </a>
                                {/* <a href=""> <FaYoutube className='heroIcons' /> </a> */}
                                <a href='https://www.instagram.com/teamlighthouse21/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'> <FaInstagram className='heroIcons' /> </a>
                                <a href="https://wa.me/923157505059" 
  target="_blank" 
  rel="noopener noreferrer"> <FaWhatsapp className='heroIcons' /> </a>

                            </div>
                        </div>
                        <div className="col-md-5 d-flex  jcc center">
                            <Lottie animationData={animationData} style={{ maxWidth: '350px' }} />


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection