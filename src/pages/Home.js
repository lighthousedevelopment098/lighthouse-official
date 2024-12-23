import React from 'react'
import '../Css/Home.css'
import HeroSection from '../SameComponents/HeroSection'
import WhatWeDo from '../Components/WhatWeDo'
import AboutUs from '../Components/AboutUs'
import TakeALook from '../Components/TakeALook'
import BuildFromStratch from '../Components/BuildFromStratch'
import GetStartedWith from '../Components/GetStartedWith'
import AppDevlopment from '../SameComponents/AppDevlopment'
import Articls from '../Components/Articls'
import OurSuccessPartners from '../Components/OurSuccessPartners'
import PartenerImgBox from '../Components/PartenerImgBox'
import DigitalRealities from '../Components/DigitalRealities'
import Footer from '../SameComponents/Footer'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Testimonials from '../Components/Testimonials'
const Home = () => {

    const bg1 = '/manVr.f5cc434b.png'
    const bg2 = '/Home-Herobg-c2e4d53f.png'

    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${bg2}),
        url(${bg1})`,
        backgroundSize: 'contain,cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right,center',
    };
    return (
        <>
            <HeroSection style={style} heading={<>
                <h1>Think <span className="greenBackground">Ahead</span> & </h1>
                <h1><span className='greenBackground'>Scale</span> Results</h1></>

            } subHeading='" Unlock your business full potential with our custom-built software solutions, tailored to meet your unique needs and drive success."' />
            <WhatWeDo />
            <AboutUs />
            <TakeALook />
            <BuildFromStratch />
            <GetStartedWith />
            <Testimonials />
            <Articls />
            <AppDevlopment />
            <OurSuccessPartners />
            {/* <PartenerImgBox /> */}
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />

        </>
    )
}

export default Home