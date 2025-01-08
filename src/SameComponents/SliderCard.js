import React, { useEffect } from 'react'
import AnimatedButton from './AnimatedButton';
import Lottie from 'lottie-react';
import { useLocation } from 'react-router-dom';


const SliderCard = ({ img, heading, subHeading, animationData,link }) => {
    const location = useLocation();

    useEffect(() => {
      // Scroll to the top whenever the location changes
      window.scrollTo(0, 0);
    }, [location]);
  
    return (
        <>
            <img src={img} alt="" style={{height:'200px'}}/>
            <h4>{heading}</h4>
            <p className='fw-normal'>{subHeading}</p>
            <div >
                <Lottie animationData={animationData} style={{maxWidth:'180px', marginBottom:"30px"}}/>
            </div>
            <AnimatedButton link={link}/>
        </>
    )
}

export default SliderCard
