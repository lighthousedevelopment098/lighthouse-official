import React from 'react'
import HeroSection from '../SameComponents/HeroSection'
import servers from '../Images/servers.json'
import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
import ResellerPackege from '../Components/ResellerPackege'
import HostingPackeges from '../Components/HostingPackeges'
import ResellerSlider from '../SameComponents/ResellerSlider'
import '../Css/HostingAndServers.css'
import WebHostingSlider from '../SameComponents/WebHostingSlider'
import HardwarePkg from '../Components/HardwarePkg'
const Hardware = () => {
    const bg1 = '/Untitled-1.jpg'
    const bg2 = '/Untitled-1.jpg'

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
            <HeroSection style={style} heading={<><h1> <span className="greenBackground">Hardware</span> & Services</h1></>} subHeading='Blazing-fast hardware services, built for reliability.' animationData={servers} />
          <HardwarePkg/>
            <ResellerSlider /> 
            <br/>
            {/* <HostingPackeges /> */}
            {/* <WebHostingSlider /> */}
            {/* <DigitalRealities /> */}
            <TheBestTimeToStart />
            <Footer />

        </>
    )
}

export default Hardware