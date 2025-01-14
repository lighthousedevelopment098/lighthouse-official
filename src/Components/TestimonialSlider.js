import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TestimonialSliderBox } from '../SameComponents/TestimonialSliderBox';

const testimonials = [
    {
        img: '/GirlTestimon.459bc6d8.png',
        name: 'Emma Wick',
        detail: 'CEO, Tech Solutions Inc.',
        comment: 'We entrusted LHD Pvt Ltd for intricate financial software, and their exemplary delivery surpassed expectations. Their expertise makes them highly recommended for financial software requirements.'
    },
    {
        img: '/GirlTestimon.459bc6d8.png',
        name: 'Sarah M.',
        detail: 'Marketing Manager',
        comment: 'LHD Pvt Ltd uniquely stood out during our collaboration. Their skilled team brought our vision to life impeccably, showcasing innovation, timely delivery, and effective communication. Highly recommended for software development.'
    },
    {
        img: '/testboy.d7eff128.png',
        name: 'Robert S.',
        detail: 'Head of Operations',
        comment: 'LHD Pvt Ltd is pivotal in our digital transformation. Their adeptness modernized legacy systems, integrating tech seamlessly. Professionalism and deadline commitment make them integral to our growth strategy.'
    },
    {
        img: '/GirlTestimon.459bc6d8.png',
        name: 'Emily R.',
        detail: 'IT Director',
        comment: 'LHD Pvt Ltd proves indispensable to our IT unit, offering tailored software enhancing efficiency. Their meticulousness and post-launch assistance are remarkable, revolutionizing our organizations operations.'
    },
    {
        img: '/testboy.d7eff128.png',
        name: 'Umar M.',
        detail: 'Financial Experts Ltd.',
        comment: 'We entrusted LHD Pvt Ltd for intricate financial software, and their exemplary delivery surpassed expectations. Their expertise makes them highly recommended for financial software requirements.'
    },
    {
        img: '/GirlTestimon.459bc6d8.png',
        name: 'Jennifer P.',
        detail: 'Startup Founder',
        comment: 'As a startup founder, selecting the ideal software partner was vital. LHD Pvt Ltd grasped our vision, enabling agile development that translated into product success through their expertise and dedication.'
    },
    {
        img: '/testboy.d7eff128.png',
        name: 'Haris K.',
        detail: 'CTO, Tech Solutions Inc.',
        comment: 'We entrusted LHD Pvt Ltd for intricate financial software, and their exemplary delivery surpassed expectations. Their expertise makes them highly recommended for financial software requirements.'
    }
];

const TestimonialSlider = () => {
    return (
        <div className="TestimonialSlider bg-gray-700 py-12 px-6">
            <h2 className="text-center text-2xl font-bold mb-8 text-gray-800" style={{color:'#903519',fontSize:'25px',fontWeight:'bold',padding:'10px 0px'}}>What Our Clients Say</h2>
            <Swiper
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
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
                        spaceBetween: 40,
                    },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialSliderBox
                            img={testimonial.img}
                            name={testimonial.name}
                            detail={testimonial.detail}
                            comment={testimonial.comment}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
