import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderCard from '../SameComponents/SliderCard';


import animationData from '../Images/animation_lmljzdi0.json'
// social media markeeting
import socialMediaMarkeeting from '../Images/socialmedia.json'
// company registration
import companyRegistration from '../Images/companyregistration.json'
// robo Calls 
import RoboCalls from '../Images/calls.json'
// seo 
import Seo from '../Images/seo.json'
// whatsapp api 
import WhatsappApi from '../Images/whatsappapi.json'
// whatsapp api 
import servers from '../Images/servers.json'
// mobile application 
import MobileApplication from '../Images/mobiledevlopment.json'
// whatsapp api 
import WebApplication from '../Images/webapplication.json'


const SwiperSlider = () => {
    return (
        <>
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
                modules={[]}
                className="mySwiper"
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
                    <SliderCard img='https://wolftechs.pk/_next/static/media/Serviceboy.69aaf9e2.png'
                        heading='Social Meida Marketing'
                        subHeading='"Lets boost your sales through SSM"'
                        animationData={socialMediaMarkeeting} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard img='https://wolftechs.pk/_next/static/media/GirlService.f2a54f9a.png'
                        heading='Search Engine Optimization'
                        subHeading='"Lets improve your website by ranking through SEO"'
                        animationData={Seo} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard img='https://wolftechs.pk/_next/static/media/Serviceboy.69aaf9e2.png'
                        heading='Company Registration'
                        subHeading='"Lets make your company offical"'
                        animationData={companyRegistration} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard img='https://wolftechs.pk/_next/static/media/GirlService.f2a54f9a.png'
                        heading='Brand SMS & Robo calls'
                        subHeading='"Easy way to communicate with each other"'
                        animationData={RoboCalls} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard img='https://wolftechs.pk/_next/static/media/Serviceboy.69aaf9e2.png'
                        heading='Whatsapp APIs'
                        subHeading='"Complete offical & unoffical APIs"'
                        animationData={WhatsappApi} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard img='https://wolftechs.pk/_next/static/media/GirlService.f2a54f9a.png'
                        heading='Hosting & Servers'
                        subHeading='"Cloud Servers lightning speed"'
                        animationData={servers} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard img='https://wolftechs.pk/_next/static/media/Serviceboy.69aaf9e2.png'
                        heading='Mobile Application'
                        subHeading='"Lets build your idea in application"'
                        animationData={MobileApplication} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard img='https://wolftechs.pk/_next/static/media/GirlService.f2a54f9a.png'
                        heading='Website Devlopment'
                        subHeading='"Lets improve your bussiness online"'
                        animationData={animationData} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard img='https://wolftechs.pk/_next/static/media/Serviceboy.69aaf9e2.png'
                        heading='Web Application'
                        subHeading='"Make an online identity with web app"'
                        animationData={WebApplication} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperSlider