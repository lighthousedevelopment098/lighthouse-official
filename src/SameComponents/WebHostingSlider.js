import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const WebHostingSlider = () => {
    return (
        <>
            <div className="ResellerSlider p-5" style={{ backgroundColor: 'black', overflowX: 'hidden' }}>
                <div
                    style={{ width: '95%', margin: '0px auto' }}>
                    <Swiper
                        slidesPerView={4}
                        loop={true}
                        autoplay={
                            {
                                delay: 1000
                            }
                        }
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="ResellerSwiper"
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
                            <img src="https://wolftechs.pk/_next/static/media/sharedlogo.dd662a0f.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Starter Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.3499 / Annually</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 5GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> 5000 Subdomains </small>
                                <small> Addon Domains </small>
                                <small>5 SubDomains</small>
                                <small>5 Email Accounts</small>
                                <small>5 Databases</small>
                               
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#c62126' }}>Buy Now</button>
                        </SwiperSlide>


                        <SwiperSlide>
                            <img src="https://wolftechs.pk/_next/static/media/sharedlogo.dd662a0f.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Economy Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.4499 / Annually</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 5GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> 5000 Subdomains </small>
                                <small> Addon Domains </small>
                                <small>10 SubDomains</small>
                                <small>10 Email Accounts</small>
                                <small>10 Databases</small>
                               
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#c62126' }}>Buy Now</button>
                        </SwiperSlide>
                    
                        <SwiperSlide>
                            <img src="https://wolftechs.pk/_next/static/media/sharedlogo.dd662a0f.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Delux Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.5499 / Annually</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 20GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> 5000 Subdomains </small>
                                <small> Addon Domains </small>
                                <small>15 SubDomains</small>
                                <small>15 Email Accounts</small>
                                <small>15 Databases</small>
                               
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#c62126' }}>Buy Now</button>
                        </SwiperSlide>
                    
                        <SwiperSlide>
                            <img src="https://wolftechs.pk/_next/static/media/sharedlogo.dd662a0f.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Unlimited Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.13499 / Annually</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 50GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> 5000 Subdomains </small>
                                <small> Addon Domains </small>
                                <small>100 SubDomains</small>
                                <small>50 Email Accounts</small>
                                <small>50 Databases</small>
                               
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#c62126' }}>Buy Now</button>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default WebHostingSlider