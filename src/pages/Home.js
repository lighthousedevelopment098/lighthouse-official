
import React, { useMemo } from 'react';
import '../Css/Home.css';
import HeroSection from '../SameComponents/HeroSection';
import WhatWeDo from '../Components/WhatWeDo';
import AboutUs from '../Components/AboutUs';
import TakeALook from '../Components/TakeALook';
import BuildFromStratch from '../Components/BuildFromStratch';
import GetStartedWith from '../Components/GetStartedWith';
import AppDevlopment from '../SameComponents/AppDevlopment';
import Articls from '../Components/Articls';
import OurSuccessPartners from '../Components/OurSuccessPartners';
import PartenerImgBox from '../Components/PartenerImgBox';
import DigitalRealities from '../Components/DigitalRealities';
import Footer from '../SameComponents/Footer';
import TheBestTimeToStart from '../Components/TheBestTimeToStart';
import Testimonials from '../Components/Testimonials';

const Home = () => {
  const bg1 = '/manVr.f5cc434b.png';
  const bg2 = '/Home-Herobg-c2e4d53f.png';
  const style = useMemo(
    () => ({
      backgroundImage: `
        linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
        url(${bg2}),
        url(${bg1})`,
      backgroundSize: 'contain, cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right, center',
      backgroundColor: 'white', // Fallback background color
    }),
    [bg1, bg2]
  );

  return (
    <>
      {/* Hero Section with props */}
      <HeroSection
        style={style}
        bg1={bg1}
        heading={
          <>
            <h1 className="font-bold heroHeading">
              Think <span className="greenBackground">Ahead</span> &
            </h1>
            <h1 className="heroHeading">
              <span className="greenBackground text-white">Scale</span> Results
            </h1>
          </>
        }
        subHeading='"Unlock your business full potential with our custom-built software solutions, tailored to meet your unique needs and drive success."'
      />

      {/* Lazy-loaded Components */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <WhatWeDo />
        <AboutUs />
        <TakeALook />
        <BuildFromStratch />
        <GetStartedWith />
        <Testimonials />
        <AppDevlopment />
        <Articls/>
        <OurSuccessPartners />
        <PartenerImgBox />
        <DigitalRealities />
        <TheBestTimeToStart />
        <Footer />
      </React.Suspense>
    </>
  );
};

export default Home;
