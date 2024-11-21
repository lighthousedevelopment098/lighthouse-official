import React from 'react'
import AnimatedButton from './AnimatedButton';
import Lottie from 'lottie-react';


const SliderCard = ({ img, heading, subHeading, animationData }) => {
    return (
        <>
            <img src={img} alt="" />
            <h4>{heading}</h4>
            <p className='fw-normal'>{subHeading}</p>
            <div >
                <Lottie animationData={animationData} style={{maxWidth:'180px', marginBottom:"30px"}}/>
            </div>
            <AnimatedButton />
        </>
    )
}

export default SliderCard
