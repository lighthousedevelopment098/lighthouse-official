// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { SliderBox } from '../SameComponents/SliderBox';
// import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// const OurTeam = () => {
//     const teamObj = [
//         { img: '/t3.45457b6b.png', name: 'UZAIR MIRZA', job: "CEO" },
//         { img: '/qasim.jpg', name: 'Qasim Ali Qasmi', job: "Project Manager" },
//         { img: '/waseem.jpg', name: 'Muhammad Waseem', job: "Senior Web Developer" },
//         { img: '/hammad.jpg', name: 'Hammad', job: "Senior Flutter Developer" },
//         { img: '/faisal.jpg', name: 'Muhammad Faisal', job: "Web Developer" },
//         { img: '/saeed.jpg', name: 'Saeed Ahmed', job: "Graphic Designer" },
//         // { img: '/t9.d6663976.png', name: 'MUHAMMAD RIZWAN', job: "Tax Expert" },
//         // { img: '/t10.d56f99c6.png', name: 'SAIMAN KHAN', job: "Ruby Developer" },
//         { img: '/images (1).png', name: 'HifFa Khalid', job: "Assistant Manager" },
//         // { img: '/t2.831e3d60.png', name: 'ARI AKASH', job: "Director & Co-founder" },
//         // { img: '/t1.200a0ead.jpeg', name: 'ASHER VICTOR', job: "CEO (Chief Excetive Officer)" }
//     ]
//     return (
//         <div className="ourTeam py-5 text-center" >
//             <h2 className='borderBottom '><span className='greenColor  '>Meet</span> our Team</h2>
//             <h4 style={{ color: 'white' }}>Generating ideas is a Team Work</h4>
//             <div className="conatiner-fluid p-5" >

//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={30}
//                     loop={true}
//                     autoplay={
//                         {
//                             delay: 1000
//                         }
//                     }
//                     freeMode={true}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     modules={[FreeMode, Pagination, Autoplay]}
//                     className="imgSwiper"
//                     breakpoints={{
//                         0: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                         },
//                         567: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                         },
//                         // When window width is >= 768px
//                         767: {
//                             slidesPerView: 3,
//                             spaceBetween: 30,
//                         },
//                         992: {
//                             slidesPerView: 4,
//                             spaceBetween: 20,
//                         },

//                     }}


//                 >
//                     {
//                         teamObj.map((singleObj) => (
//                             <>
//                                 <SwiperSlide>
//                                     <SliderBox singleObj={singleObj} />
//                                 </SwiperSlide>
//                             </>
//                         ))
//                     }

//                 </Swiper>
//             </div>
//         </div >
//     )
// }

// export default OurTeam
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderBox } from '../SameComponents/SliderBox';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const OurTeam = () => {
    const bg1 = '/about_hero.2859dc3e.png'
    const bg2 = '/Home-Herobg-c2e4d53f.png'
    // const style = {
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    //     url(${bg2}),
    //     url(${bg1})`,
    //     backgroundSize: 'contain,cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'right,center',
    // };
    const style = {
        backgroundImage: `
            linear-gradient(rgba(144, 240, 231, 0.4), rgba(206, 91, 91, 0.4)),
            url(${bg2}),
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' right, center',
        backgroundColor: 'white', // Fallback background color
    };
    const teamObj = [
        { img: '/t3.45457b6b.png', name: 'UZAIR MIRZA', job: "CEO" },
        { img: '/qasim.jpg', name: 'Qasim Ali Qasmi', job: "Project Manager" },
        { img: '/waseem.jpg', name: 'Muhammad Waseem', job: "Senior Web Developer" },
        { img: '/hammad.jpg', name: 'Hammad Sarwar', job: "Senior Flutter Developer" },
        { img: '/faisal.jpg', name: 'Muhammad Faisal', job: "Web Developer" },
        { img: '/junaid.jpg', name: 'Junaid Mahmood', job: "Web Developer" },
        { img: '/saeed.jpg', name: 'Saeed Ahmed', job: "Graphic Designer" },
        { img: '/images (1).png', name: 'HifFa Khalid', job: "Assistant Manager" },
    ];

    return (
        <div className="ourTeam py-5 text-center" style={style}>
            <h2 className="borderBottom "style={{color:'black'}}>
                <span className="greenColor">Meet</span> our Team
            </h2>
            <h4 style={{ color: '#903519',fontSize:'20px',fontWeight:'bold' }}>Generating ideas is a Team Work</h4>
            <div className="container-fluid p-5">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={false} // Enables continuous looping
                    speed={1000} // Smooth scrolling transition duration in milliseconds
                    autoplay={{
                        delay: 3000, // Autoplay delay between transitions
                        disableOnInteraction: false, // Keeps autoplay running after interaction
                    }}
                    freeMode={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        567: {
                            slidesPerView: 1,
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
                    className="imgSwiper"
                >
                    {teamObj.map((singleObj, index) => (
                        <SwiperSlide key={index}>
                            <SliderBox singleObj={singleObj} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default OurTeam;
