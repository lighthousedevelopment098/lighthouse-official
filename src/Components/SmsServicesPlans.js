import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SmsCard } from '../SameComponents/SmsCard';
const SmsServicesPlans = () => {
    return (
        <>
            <div className="SmsServicesPlans text-center p-5" style={{ backgroundColor: 'black', overflowX: "hidden" }}>
                <h2 className='text-center my-5 borderBottom'>Wolf Techs <span className="greenColor"> Branded SMS</span> Services and Plans.</h2>
                <div style={{ width: '95%', margin: '0px auto' }}>
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
                        className="SmsSwiper"
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
                            <SmsCard img='https://wolftechs.pk/_next/static/media/sms.7e01d7fb.png'
                                length='10k SMS'
                                pOne='Validity : 365'
                                pTwo='Free Masking : 0'
                                pThree='API Docs : Available'
                                pFour='Plugins : Available'
                                pFive='Support : Email Only'
                                price='PKR : 15000'
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <SmsCard img='https://wolftechs.pk/_next/static/media/sms.7e01d7fb.png'
                                length='25k SMS'
                                pOne='Validity : 360'
                                pTwo='Free Masking : 0'
                                pThree='API Docs : Available'
                                pFour='Plugins : Available'
                                pFive='Support : Email / Whatsapp'
                                price='PKR : 40000'
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <SmsCard img='https://wolftechs.pk/_next/static/media/sms.7e01d7fb.png'
                                length='100k SMS'
                                pOne='Validity : 365'
                                pTwo='Free Masking : 1'
                                pThree='API Docs : Available'
                                pFour='Plugins : Available'
                                pFive='Support : Email Only'
                                price='PKR : 140000'
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <SmsCard img='https://wolftechs.pk/_next/static/media/sms.7e01d7fb.png'
                                length='10k SMS'
                                pOne='Validity : 365'
                                pTwo='Free Masking : 0'
                                pThree='API Docs : Available'
                                pFour='Plugins : Available'
                                pFive='Support : Email Only'
                                price='PKR : 15000'
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <SmsCard img='https://wolftechs.pk/_next/static/media/sms.7e01d7fb.png'
                                length='10k SMS'
                                pOne='Validity : 365'
                                pTwo='Free Masking : 0'
                                pThree='API Docs : Available'
                                pFour='Plugins : Available'
                                pFive='Support : Email Only'
                                price='PKR : 15000'
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <SmsCard img='https://wolftechs.pk/_next/static/media/sms.7e01d7fb.png'
                                length='10k SMS'
                                pOne='Validity : 365'
                                pTwo='Free Masking : 0'
                                pThree='API Docs : Available'
                                pFour='Plugins : Available'
                                pFive='Support : Email Only'
                                price='PKR : 15000'
                            />

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="SmsServicesPlans text-center p-5" style={{ backgroundColor: 'black', overflowX: "hidden" }}>
                <h2 className='text-center my-5 borderBottom'>Wolf Techs <span className="greenColor"> Branded SMS</span> Services and Plans.</h2>
                <div style={{ width: '95%', margin: '0px auto' }}>
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
                        className="SmsSwiper"
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
                            <SmsCard
                                img='https://wolftechs.pk/_next/static/media/csr.62a65372.png'
                                length='BASIC PLAN'
                                pOne='Sms Quantity : 2k'
                                pTwo='Validity Days : 30'
                                pThree='Support : Email Only'

                                price='PKR : 7000'
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <SmsCard
                                img='https://wolftechs.pk/_next/static/media/csr.62a65372.png'
                                length='STANDARD PLAN'
                                pOne='Sms Quantity : 5k'
                                pTwo='Validity Days : 60'
                                pThree='Support : Phone / Email'

                                price='PKR : 15000'
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <SmsCard
                                img='https://wolftechs.pk/_next/static/media/csr.62a65372.png'
                                length='GOLDEN PLAN'
                                pOne='Sms Quantity : 10k'
                                pTwo='Validity Days : 90'
                                pThree='Support : Phone / Email'

                                price='PKR : 25000'
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SmsCard
                                img='https://wolftechs.pk/_next/static/media/csr.62a65372.png'
                                length='DAIMOND PLAN'
                                pOne='Sms Quantity : 23k'
                                pTwo='Validity Days : 90'
                                pThree='Support : Phone / Email / Whatsapp'

                                price='PKR : 56000'
                            />

                        </SwiperSlide>

                       
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default SmsServicesPlans