import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import { TestimonialSliderBox } from '../SameComponents/TestimonialSliderBox'
const Testimonials = () => {
    const bg1 = '/';
    const bg2 = '/Home-Herobg-c2e4d53f.png';
    const style = {
      backgroundImage: `
        linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
        url(${bg2}),
        url(${bg1})`,
      backgroundSize: 'contain, cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right, center',
      backgroundColor: 'white', // Fallback background color
      position: 'relative', 
      overflowX: 'hidden'// Ensure the container is positioned correctly for child effects
    };
    return (
        <>
            <div className="Testimonials text-center py-5" style={style}>
                <div className="container">
                    <h2 className='borderBottom' style={{ color: 'black' }}>What <span className="greenColor">People</span> are saying?</h2>
                    <h3 style={{ color: '#323232',fontSize:'1rem',fontWeight:'bold' }} className='mt-2'>Don’t just take it from us let our clients do the talking.</h3>
                </div>
                <div className="container-fluid ">
                    <div style={{ width: '95%', overflowX: 'hidden', margin: "0px auto" }}>
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials