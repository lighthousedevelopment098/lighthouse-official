import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BoostSalesSlider = () => {
    const bg1 = '/manVr.f5cc434b.png'
    const bg2 = '/Home-Herobg-c2e4d53f.png'

    const style = {
        backgroundImage: `
            linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
            url(${bg2}),
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' right, center',
        backgroundColor: 'white',
        overflowX: 'hidden',  // Fallback background color
    };
    return (
        
        <>
            <div className="boostSaleSlider pt-3 text-center" style={style}>
                <h2 className='borderBotto greenColor'>Maximize <span className="greenColor" style={{color:'black'}}>Leads</span> and Boost <span className="greenColor"style={{color:'black'}}>Sales</span> with Proven <span className="greenColor" style={{color:'black'}}>Strategies</span></h2>
                <h3 className='greenColor w-75 mx-auto'> Empowering eCommerce Brands: Scaling Businesses from 0 to Millions with 9+ Years of Experience</h3>
                <div style={{ width: '95%', margin: '80px auto' }}>
                    <Swiper
                        slidesPerView={4}
                        loop={false}

                        autoplay={
                            {
                                delay: 2000
                            }
                        }
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="boostSwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            567: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },

                            767: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },

                        }}
                    >
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="/ContentWriting .jpg" alt="" />
                                {/* <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="/DigitalMarketing.jpg" alt="" />
                                {/* <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="/GoogleAds.jpg" alt="" />
                                {/* <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="/MobileApp.jpg" alt="" />
                                {/* <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="/SoftwareDevelopment .jpg" alt="" />
                                {/* <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="/WebDesign.jpg" alt="" />
                                {/* <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button> */}
                            </div>
                        </SwiperSlide>



                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default BoostSalesSlider