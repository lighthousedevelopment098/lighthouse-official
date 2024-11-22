import { TestimonialSliderBox } from '../SameComponents/TestimonialSliderBox';
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
const TestimonialSlider = () => {
    return (
        <>
            <div className="TestimonialSlider" >
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    autoplay={
                        {
                            delay: 1000
                        }
                    }
                    spaceBetween={60}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[]}
                    className="Swiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },

                    }}
                >
                    <SwiperSlide>
                        <TestimonialSliderBox img='/GirlTestimon.459bc6d8.png' name='Emma Wick' detail='CEO, Tech Solutions Inc.' comment='We entrusted LHD Pvt Ltd for intricate financial software, and their exemplary delivery surpassed expectations. Their expertise makes them highly recommended for financial software requirements.' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialSliderBox img='/GirlTestimon.459bc6d8.png' name='Sarah M.' detail='Marketing Manager' comment='LHD Pvt Ltd uniquely stood out during our collaboration. Their skilled team brought our vision to life impeccably, showcasing innovation, timely delivery, and effective communication. Highly recommended for software development.' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialSliderBox img='/testboy.d7eff128.png' name='Robert S.' detail='Head of Opreations' comment='LHD Pvt Ltd is pivotal in our digital transformation. Their adeptness modernized legacy systems, integrating tech seamlessly. Professionalism and deadline commitment make them integral to our growth strategy.' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialSliderBox img='/GirlTestimon.459bc6d8.png' name='Emily R.' detail='IT Director' comment='LHD Pvt Ltd proves indispensable to our IT unit, offering tailored software enhancing efficiency. Their meticulousness and post-launch assistance are remarkable, revolutionizing our organizations operations.' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialSliderBox img='/testboy.d7eff128.png' name='Umar M.' detail='Financial Experts Ltd.' comment='We entrusted LHD Pvt Ltd for intricate financial software, and their exemplary delivery surpassed expectations. Their expertise makes them highly recommended for financial software requirements.' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialSliderBox img='/GirlTestimon.459bc6d8.png' name='Jennifer P.' detail='Startup Founder    ' comment='As a startup founder, selecting the ideal software partner was vital. LHD Pvt Ltd grasped our vision, enabling agile development that translated into product success through their expertise and dedication.' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialSliderBox img='/testboy.d7eff128.png' name='Haris K.' detail='CTO, Tech Solutions Inc.' comment='We entrusted LHD Pvt Ltd for intricate financial software, and their exemplary delivery surpassed expectations. Their expertise makes them highly recommended for financial software requirements.' />
                    </SwiperSlide>

                </Swiper>
            </div>

        </>
    )
}

export default TestimonialSlider