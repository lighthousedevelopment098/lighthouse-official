import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BoostSalesSlider = () => {
    
    return (
        
        <>
            <div className="boostSaleSlider pt-3 text-center" style={{ overflowX: 'hidden', backgroundColor: 'black' }}>
                <h2 className='borderBottom'>Maximize <span className="greenColor">Leads</span> and Boost <span className="greenColor">Sales</span> with Proven <span className="greenColor">Strategies</span></h2>
                <h3 className='text-white w-75 mx-auto'> Empowering eCommerce Brands: Scaling Businesses from 0 to Millions with 9+ Years of Experience</h3>
                <div style={{ width: '95%', margin: '80px auto' }}>
                    <Swiper
                        slidesPerView={4}
                        loop={true}

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
                                <img src="https://wolftechs.pk/_next/static/media/smm1.427496cf.jpeg" alt="" />
                                <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="https://wolftechs.pk/_next/static/media/smm2.0426dcd7.jpeg" alt="" />
                                <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="https://wolftechs.pk/_next/static/media/smm3.0a61543b.jpeg" alt="" />
                                <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="https://wolftechs.pk/_next/static/media/smm4.f9ca26d2.jpeg" alt="" />
                                <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="https://wolftechs.pk/_next/static/media/smm4.f9ca26d2.jpeg" alt="" />
                                <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column">
                                <img src="https://wolftechs.pk/_next/static/media/smm6.becca37b.jpeg" alt="" />
                                <button className='w-100 mt-3 py-2 fw-bold border-0'>Buy Now</button>
                            </div>
                        </SwiperSlide>



                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default BoostSalesSlider