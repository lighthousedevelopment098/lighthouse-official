import React from 'react'
import HeroSection from '../SameComponents/HeroSection'
import DigitalRealities from '../Components/DigitalRealities'
import Footer from '../SameComponents/Footer'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import OurBestProjects from '../Components/OurBestProjects'
import '../Css/Portfolio.css'

const Portfolio = () => {
    const bg1 = '/portfolio_2.4df5b044.png'
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
            <HeroSection heading={<h1>Our <span className='greenBackground'>Portfolio</span></h1>} subHeading='" At our company, we have a dynamic and driven team of developers, designers, and marketers who are fueled by passion and commitment."' style={style} />
            <OurBestProjects />
            <DigitalRealities />
            <TheBestTimeToStart />
            <Footer />
        </>
    )
}

export default Portfolio