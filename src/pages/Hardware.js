import React, { useEffect } from 'react'
import HeroSection from '../SameComponents/HeroSection'
import servers from '../Images/servers.json'
// import DigitalRealities from '../Components/DigitalRealities'
import TheBestTimeToStart from '../Components/TheBestTimeToStart'
import Footer from '../SameComponents/Footer'
// import ResellerPackege from '../Components/ResellerPackege'
// import HostingPackeges from '../Components/HostingPackeges'
import ResellerSlider from '../SameComponents/ResellerSlider'
import '../Css/HostingAndServers.css'
// import WebHostingSlider from '../SameComponents/WebHostingSlider'
import HardwarePkg from '../Components/HardwarePkg'
import { useLocation } from 'react-router-dom'
const Hardware = () => {
    const location = useLocation();

    useEffect(() => {
      // Scroll to the top whenever the location changes
      window.scrollTo(0, 0);
    }, [location]);
  
    // const bg1 = '/teest1 (3).webp'
    // const bg2 = '/teest1 (3).webp'
    
    const bg1 = '/'
    const bg2 = '/Home-Herobg-c2e4d53f.png'
    const style = {
        backgroundImage: `
            linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
            url(${bg2}),
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' right, center',
        backgroundColor: 'white', // Fallback background color
    };
    // const style = {
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    //     url(${bg2}),
    //     url(${bg1})`,
    //     backgroundSize: 'contain,cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'right,center',
    // };
    return (
        <>
            <HeroSection style={style} bg1={bg1} bg2={bg2} heading={<><h1 style={{color:'#903519'}}>
                 <span className="greenBackground text-white">Hardware</span> & Services</h1></>} 
                 subHeading='"Our blazing-fast hardware services are engineered to deliver exceptional speed and unwavering reliability, providing robust solutions that ensure seamless performance, minimize downtime, and support the growth and success of your business."' animationData={servers} />
          <HardwarePkg/>
            <ResellerSlider /> 
            
            {/* <HostingPackeges /> */}
            {/* <WebHostingSlider /> */}
            {/* <DigitalRealities /> */}
            <TheBestTimeToStart />
            <Footer />

        </>
    )
}

export default Hardware