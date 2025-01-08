import React from 'react'
import Projects from '../SameComponents/Projects'
import 'swiper/css';
import 'swiper/css/pagination';

import SwiperSlider from '../SameComponents/SwiperSlider';
const WhatWeDo = () => {
    const bg1 = '/';
    const bg2 = '/Home-Herobg-c2e4d53f.png';
    const style = {
      backgroundImage: `
        linear-gradient(rgba(206, 91, 91, 0.4), rgba(144, 240, 231, 0.2)),
        url(${bg2}),
        url(${bg1})`,
      backgroundSize: 'contain, cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right, center',
      backgroundColor: 'white', // Fallback background color
      position: 'relative', // Ensure the container is positioned correctly for child effects
    };
    return (
        <>  
         {/* <div className="blur-overlay"></div> */}
            <div className="whatWeDo text-center" style={style}>
         
                <div className="container-fluid">
                    <div className="row">
                        <h3 className="subHeading afterBefore g relative">Trusted by the big ones, loved by everyone</h3>
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