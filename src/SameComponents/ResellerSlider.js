import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const ResellerSlider = () => {
    return (
        <>
            <div className="ResellerSlider" style={{ backgroundColor: 'black', overflowX:'hidden' }}>
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
                            <img src="https://wolftechs.pk/_next/static/media/resellerlogo.5edbcce7.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Starter Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.4749 / Monthly</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 50GB Of Storage</small>
                                <small> Addon Domains  </small>
                                <small> Unlimited Bandwidth</small>
                                <small> 5000 Subdomains </small>
                                <small> Unlimited Email Accounts.</small>
                                <small> Unlimited Databases </small>                          <small> Free SSL Certficates</small>                           <small> Free COM Domain </small>
                                <small> Free Private Nameservers.</small>
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://wolftechs.pk/_next/static/media/resellerlogo.5edbcce7.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Starter Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.4749 / Monthly</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 50GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> Addon Domains  </small>
                                <small> 5000 Subdomains </small>
                                <small> Unlimited Email Accounts.</small>
                                <small> Unlimited Databases </small>                          <small> Free SSL Certficates</small>                           <small> Free COM Domain </small>
                                <small> Free Private Nameservers.</small>
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://wolftechs.pk/_next/static/media/resellerlogo.5edbcce7.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Starter Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.4749 / Monthly</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 50GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> Addon Domains  </small>
                                <small> 5000 Subdomains </small>
                                <small> Unlimited Email Accounts.</small>
                                <small> Unlimited Databases </small>                          <small> Free SSL Certficates</small>                           <small> Free COM Domain </small>
                                <small> Free Private Nameservers.</small>
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://wolftechs.pk/_next/static/media/resellerlogo.5edbcce7.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Economy Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.49 / Monthly</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 75GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> Addon Domains  </small>
                                <small> Unlimited SubDomains</small>
                                <small> Unlimited Email Accounts </small>                          <small> Unlimited Databases</small>                           <small> Free SSL Certificates </small>
                                <small> Free.Com Domain</small>
                                <small> Free Private Nameverses</small>
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://wolftechs.pk/_next/static/media/resellerlogo.5edbcce7.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Delux Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.8949 / Monthly</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 100GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> Addon Domains  </small>
                                <small> Unlimited SubDomains</small>
                                <small> Unlimited Email Accounts </small>                          <small> Unlimited Databases</small>                           <small> Free SSL Certificates </small>
                                <small> Free.Com Domain</small>
                                <small> Free Private Nameverses</small>
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://wolftechs.pk/_next/static/media/resellerlogo.5edbcce7.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Master Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.11749 / Monthly</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 150GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> Addon Domains  </small>
                                <small> 5000 Subdomains </small>
                                <small> Unlimited Email Accounts.</small>
                                <small> Unlimited Databases </small>                          <small> Free SSL Certficates</small>                           <small> Free COM Domain </small>
                                <small> Free Private Nameservers.</small>
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>


                        <SwiperSlide>
                            <img src="https://wolftechs.pk/_next/static/media/resellerlogo.5edbcce7.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Bussiness Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.13499 / Monthly</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 150GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> Addon Domains  </small>
                                <small> Unlimited Subdomains </small>
                                <small> Unlimited Email Accounts.</small>
                                <small> Unlimited Databases </small>                          <small> Free SSL Certficates</small>                           <small> Free COM Domain </small>
                                <small> Free Private Nameservers.</small>
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://wolftechs.pk/_next/static/media/resellerlogo.5edbcce7.png" style={{ maxWidth: '160px' }} alt="" />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>Unlimited Plan</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>Rs.16349 / Monthly</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                <small> 150GB Of Storage</small>
                                <small> Unlimited Bandwidth</small>
                                <small> Addon Domains  </small>
                                <small> Unlimited Subdomains </small>
                                <small> Unlimited Email Accounts.</small>
                                <small> Unlimited Databases </small>                          <small> Free SSL Certficates</small>                           <small> Free COM Domain </small>
                                <small> Free Private Nameservers.</small>
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ResellerSlider