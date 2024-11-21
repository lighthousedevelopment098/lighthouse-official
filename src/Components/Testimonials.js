import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import { TestimonialSliderBox } from '../SameComponents/TestimonialSliderBox'
const Testimonials = () => {
    return (
        <>
            <div className="Testimonials text-center py-5" style={{ overflowX: 'hidden' }}>
                <div className="container">
                    <h2 className='borderBottom' style={{ color: 'black' }}>What <span className="greenColor">People</span> are saying?</h2>
                    <h3 style={{ color: '#323232' }} className='mt-2'>Don’t just take it from us let our clients do the talking.</h3>
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