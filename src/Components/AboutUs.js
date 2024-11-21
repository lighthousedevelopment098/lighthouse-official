import React from 'react'
import AnimatedButton from '../SameComponents/AnimatedButton'

const AboutUs = () => {
    return (
        <>
            <div className="aboutUs padding py-5">
                <div className="container">
                    <h2 className='mb-5'><span className="greenColor borderBottom">About</span> Us.</h2>
                    <div className="row justify-content-between align-items-end">
                        <div className="col-md-6 pb-5">
                            <p>At Lighthouse Software Solution Pvt Ltd, we are dedicated to shaping your brands identity. Our exceptional services blend visually appealing and user-friendly design with top-notch programming expertise.</p>

                            <p>brands vision into a tangible reality. Whether you need a complete brand overhaul or a website redesign, we are equipped to deliver tailored solutions that align with your unique goals. Trust Wolf Software Solution Pvt Ltd to enhance your brand identity and provide you with a distinct competitive advantage in the market.</p>

                           <AnimatedButton />

                        </div>
                        <div className="col-md-6 text-right">
                            <img src="/widgetPng_1.918d124f.png" alt="about" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs