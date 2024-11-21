import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderBox } from '../SameComponents/SliderBox';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
const OurTeam = () => {
    const teamObj = [
        { img: '/t3.45457b6b.png', name: 'UZAIR MIRZA', job: "Project Manager" },
        { img: '/t4.bdbbaba8.png', name: 'AFAQ AHEMD', job: "UI/UX Designer" },
        { img: '/t5.51bd0487.png', name: 'FAHAD ABBASI', job: ".Net Developer" },
        { img: '/t6.a52ac0a2.png', name: 'JOE EVORA', job: "Marketing Manager" },
        { img: '/t7.9cc6c8c0.png', name: 'SHOAIB MANZOOR', job: "Network Administator" },
        { img: '/t8.fc8d3265.png', name: 'HANAN QADRI', job: "React Native Developer" },
        { img: '/t9.d6663976.png', name: 'MUHAMMAD RIZWAN', job: "Tax Expert" },
        { img: '/t10.d56f99c6.png', name: 'SAIMAN KHAN', job: "Ruby Developer" },
        { img: '/t11.6e90b402.png', name: 'BILAL TARIQ', job: "Assistant Manager" },
        { img: '/t2.831e3d60.png', name: 'ARI AKASH', job: "Director & Co-founder" },
        { img: '/t1.200a0ead.jpeg', name: 'ASHER VICTOR', job: "CEO (Chief Excetive Officer)" }
    ]
    return (
        <div className="ourTeam py-5 text-center" >
            <h2 className='borderBottom '><span className='greenColor  '>Meet</span> our Team</h2>
            <h4 style={{ color: 'white' }}>Generating ideas is a Team Work</h4>
            <div className="conatiner-fluid p-5">

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={
                        {
                            delay: 1000
                        }
                    }
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="imgSwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        567: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        // When window width is >= 768px
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
                    {
                        teamObj.map((singleObj) => (
                            <>
                                <SwiperSlide>
                                    <SliderBox singleObj={singleObj} />
                                </SwiperSlide>
                            </>
                        ))
                    }

                </Swiper>
            </div>
        </div >
    )
}

export default OurTeam