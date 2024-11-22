import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const ResellerSlider = () => {
    return (
        <>
            <div className="ResellerSlider" style={{ backgroundColor: 'black', overflowX:'hidden' }}>
                <div
                    style={{ width: '95%', margin: 'px auto' }}>
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
                            <img src="https://assets.tripplite.com/large-image/sr48ub-front-l.jpg" className='h-full border border-2 ' style={{ maxWidth: '260px' , height:'50vh'}} alt="" />
                         
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0  mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://stl.tech/wp-content/uploads/2023/01/Routers-in-networking.jpg" className='h-full border border-2 ' style={{ maxWidth: '260px' , height:'50vh'}} alt="" />
                         
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>



                        <SwiperSlide>
                            <img src="https://www.phoenix.com/wp-content/uploads/green-circuit-board.jpg" className='h-full border border-2 ' style={{ maxWidth: '260px' , height:'50vh'}} alt="" />
                         
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>


                        <SwiperSlide>
                            <img src="https://5.imimg.com/data5/TE/DC/GM/SELLER-1683937/local-control-panels-lcp--500x500.jpg" className='h-full border border-2 ' style={{ maxWidth: '260px' , height:'50vh'}} alt="" />
                         
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>


                        <SwiperSlide>
                            <img src="https://upsonlinestore.com/wp-content/uploads/2021/05/WPL150-12N-480x480-1.jpg" className='h-full border border-2 ' style={{ maxWidth: '260px' , height:'50vh'}} alt="" />
                         
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>


                        <SwiperSlide>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cYP5KO9DYNDolcPDOk60JZ-C3RWsdkB80g&s" className='h-full border border-2 ' style={{ maxWidth: '260px' , height:'50vh'}} alt="" />
                         
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>


                        <SwiperSlide>
                            <img src="https://e6f7jzv78yj.exactdn.com/wp-content/uploads/2017/08/Power-Cables-lineup-1170x585.jpg?strip=all&lossy=1&ssl=1" className='h-full border border-2 ' style={{ maxWidth: '260px' , height:'50vh'}} alt="" />
                         
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bzXhZKO7f1JkZ3yqQzybkOLz-eIU7VTzsA&s" className='h-full border border-2 ' style={{ maxWidth: '260px' , height:'50vh'}} alt="" />
                         
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvQub-4-h9eNxHwjE9nd7ibYUq-M4mEbF9w&s" className='h-full border border-2 ' style={{ maxWidth: '260px' , height:'50vh'}} alt="" />
                         
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvQub-4-h9eNxHwjE9nd7ibYUq-M4mEbF9w&s" className='h-full border border-2 ' style={{ maxWidth: '260px' , height:'50vh'}} alt="" />
                         
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#009BDD' }}>Buy Now</button>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ResellerSlider