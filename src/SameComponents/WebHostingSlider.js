// import React from 'react'

// import { Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// const WebHostingSlider = () => {
//     const bg1 = '/manVr.f5cc434b.png'
//     const bg2 = '/Home-Herobg-c2e4d53f.png'
//     const style = {
//         backgroundImage: `
//             linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
//             url(${bg2}),
//             url(${bg1})`,
//         backgroundSize: 'contain, cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: ' right, center',
//         backgroundColor: 'white',
//         overflowX: 'hidden' 
//         // Fallback background color
//     };
//     return (
//         <>
//             <div className="ResellerSlider p-5" style={style}>
//                 <div
//                     style={{ width: '95%', margin: '0px auto' }}>
//                     <Swiper
//                         slidesPerView={4}
//                         loop={true}
//                         autoplay={
//                             {
//                                 delay: 1000
//                             }
//                         }
//                         spaceBetween={20}
//                         pagination={{
//                             clickable: true,
//                         }}
//                         modules={[Autoplay]}
//                         className="ResellerSwiper"
//                         breakpoints={{
//                             0: {
//                                 slidesPerView: 1,
//                                 spaceBetween: 20,
//                             },
//                             567: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 20,
//                             },

//                             767: {
//                                 slidesPerView: 3,
//                                 spaceBetween: 30,
//                             },
//                             992: {
//                                 slidesPerView: 4,
//                                 spaceBetween: 20,
//                             },

//                         }}
//                     >
//                         <SwiperSlide>
//                             <img src="/sharedlogo.dd662a0f.png" style={{ maxWidth: '160px' }} alt="" />
//                             <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
//                                 <h3 className='fs-5'>Starter Plan</h3>
//                             </div>
//                             <div className='w-100 p-2'>
//                                 <h3 className='fs-5'>Rs.3499 / Annually</h3>
//                             </div>
//                             <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
//                                 <small> 5GB Of Storage</small>
//                                 <small> Unlimited Bandwidth</small>
//                                 <small> 5000 Subdomains </small>
//                                 <small> Addon Domains </small>
//                                 <small>5 SubDomains</small>
//                                 <small>5 Email Accounts</small>
//                                 <small>5 Databases</small>
                               
//                             </div>
//                             <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#c62126' }}>Buy Now</button>
//                         </SwiperSlide>


//                         <SwiperSlide>
//                             <img src="/sharedlogo.dd662a0f.png" style={{ maxWidth: '160px' }} alt="" />
//                             <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
//                                 <h3 className='fs-5'>Economy Plan</h3>
//                             </div>
//                             <div className='w-100 p-2'>
//                                 <h3 className='fs-5'>Rs.4499 / Annually</h3>
//                             </div>
//                             <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
//                                 <small> 5GB Of Storage</small>
//                                 <small> Unlimited Bandwidth</small>
//                                 <small> 5000 Subdomains </small>
//                                 <small> Addon Domains </small>
//                                 <small>10 SubDomains</small>
//                                 <small>10 Email Accounts</small>
//                                 <small>10 Databases</small>
                               
//                             </div>
//                             <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#c62126' }}>Buy Now</button>
//                         </SwiperSlide>
                    
//                         <SwiperSlide>
//                             <img src="/sharedlogo.dd662a0f.png" style={{ maxWidth: '160px' }} alt="" />
//                             <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
//                                 <h3 className='fs-5'>Delux Plan</h3>
//                             </div>
//                             <div className='w-100 p-2'>
//                                 <h3 className='fs-5'>Rs.5499 / Annually</h3>
//                             </div>
//                             <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
//                                 <small> 20GB Of Storage</small>
//                                 <small> Unlimited Bandwidth</small>
//                                 <small> 5000 Subdomains </small>
//                                 <small> Addon Domains </small>
//                                 <small>15 SubDomains</small>
//                                 <small>15 Email Accounts</small>
//                                 <small>15 Databases</small>
                               
//                             </div>
//                             <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#c62126' }}>Buy Now</button>
//                         </SwiperSlide>
                    
//                         <SwiperSlide>
//                             <img src="/sharedlogo.dd662a0f.png" style={{ maxWidth: '160px' }} alt="" />
//                             <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
//                                 <h3 className='fs-5'>Unlimited Plan</h3>
//                             </div>
//                             <div className='w-100 p-2'>
//                                 <h3 className='fs-5'>Rs.13499 / Annually</h3>
//                             </div>
//                             <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
//                                 <small> 50GB Of Storage</small>
//                                 <small> Unlimited Bandwidth</small>
//                                 <small> 5000 Subdomains </small>
//                                 <small> Addon Domains </small>
//                                 <small>100 SubDomains</small>
//                                 <small>50 Email Accounts</small>
//                                 <small>50 Databases</small>
                               
//                             </div>
//                             <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#c62126' }}>Buy Now</button>
//                         </SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default WebHostingSlider

import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const WebHostingSlider = () => {
    const bg1 = '/manVr.f5cc434b.png';
    const bg2 = '/Home-Herobg-c2e4d53f.png';

    const style = {
        backgroundImage: `
            linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
            url(${bg2}),
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right, center',
        backgroundColor: 'white',
        overflowX: 'hidden',
    };

    const hostingPlans = [
        {
            image: "/sharedlogo.dd662a0f.png",
            title: "Starter Plan",
            price: "Rs.3499 / Annually",
            features: [
                "5GB Of Storage", "Unlimited Bandwidth", "5000 Subdomains", 
                "Addon Domains", "5 SubDomains", "5 Email Accounts", "5 Databases"
            ]
        },
        {
            image: "/sharedlogo.dd662a0f.png",
            title: "Economy Plan",
            price: "Rs.4499 / Annually",
            features: [
                "5GB Of Storage", "Unlimited Bandwidth", "5000 Subdomains",
                "Addon Domains", "10 SubDomains", "10 Email Accounts", "10 Databases"
            ]
        },
        {
            image: "/sharedlogo.dd662a0f.png",
            title: "Delux Plan",
            price: "Rs.5499 / Annually",
            features: [
                "20GB Of Storage", "Unlimited Bandwidth", "5000 Subdomains", 
                "Addon Domains", "15 SubDomains", "15 Email Accounts", "15 Databases"
            ]
        },
        {
            image: "/sharedlogo.dd662a0f.png",
            title: "Unlimited Plan",
            price: "Rs.13499 / Annually",
            features: [
                "50GB Of Storage", "Unlimited Bandwidth", "5000 Subdomains", 
                "Addon Domains", "100 SubDomains", "50 Email Accounts", "50 Databases"
            ]
        }
    ];

    return (
        <div className="ResellerSlider p-5" style={style}>
            <div style={{ width: '95%', margin: '0px auto' }}>
                <Swiper
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 1000
                    }}
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
                    {hostingPlans.map((plan, index) => (
                        <SwiperSlide key={index}>
                            <img src={plan.image} style={{ maxWidth: '200px', height:'150px' }} alt={plan.title} />
                            <div className='w-100 p-2 mt-3' style={{ backgroundColor: '#f1f1f1' }}>
                                <h3 className='fs-5'>{plan.title}</h3>
                            </div>
                            <div className='w-100 p-2'>
                                <h3 className='fs-5'>{plan.price}</h3>
                            </div>
                            <div className='p-3' style={{ backgroundColor: '#f1f1f1', borderRadius: "4px" }}>
                                {plan.features.map((feature, index) => (
                                    <small key={index}>{feature}</small>
                                ))}
                            </div>
                            <button type='button' className='px-2 py-1 text-white fw-bold border-0 mt-3 rounded-3 mb-3' style={{ backgroundColor: '#c62126' }}>
                                Buy Now
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default WebHostingSlider;
