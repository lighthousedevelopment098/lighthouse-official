import React from 'react'
import Projects from '../SameComponents/Projects'
import 'swiper/css';
import 'swiper/css/pagination';

import SwiperSlider from '../SameComponents/SwiperSlider';
const WhatWeDo = () => {

    return (
        <>
            <div className="whatWeDo text-center" >
                <div className="container-fluid">
                    <div className="row">
                        <h3 className="subHeading afterBefore relative">Trusted by the big ones, loved by everyone</h3>
                    </div>

                    <div className="imgContainer">
                        <Projects
                        />
                    </div>
                    <h2 className='mt-1 borderBottom text-white'>What <span className="">we</span> do</h2>
                    <h4 className='text-white w-75 mx-auto mt-3'>Unlock your business full potential with our custom-built software solutions, tailored to meet your unique needs and drive success.</h4>
                    <div className="sliderWrapper">
                       
                        <SwiperSlider />
                    </div>
                </div>
            </div >
        </>
    )
}

export default WhatWeDo