import React from 'react'
import Navbar from './Navbar';
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import Lottie from 'lottie-react';
const HeroSection = ({ heading, subHeading, style, animationData }) => {
    return (
        <>
            <div className="heroSection relative" style={style}>
                <Navbar />
                <div className="container-fluid pt-4" style={{ paddingLeft: '35px' }}>
                    <div className="row justify-content-between">
                        <div className="col-md-5 center text-[#903519] ">
                            {heading}

                            <p className='text-[#903519]'  style={{color:'#903519'}}>{subHeading}</p>
                            <button className="primaryBtn flex  px-4 items-center py-3">
                                Login now
                                <img src="/lock.949fbe97.png" alt="lockImg" className='ms-2' />
                            </button>
                            <div className="d-flex  align-items-center absolute justify-content-start heroLinks">
                                <a href=""> <FaFacebookF className='heroIcons' /> </a>
                                <a href=""> <FaLinkedin className='heroIcons' /> </a>
                                <a href=""> <FaYoutube className='heroIcons' /> </a>
                                <a href=""> <FaInstagram className='heroIcons' /> </a>
                                <a href=""> <FaWhatsapp className='heroIcons' /> </a>

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