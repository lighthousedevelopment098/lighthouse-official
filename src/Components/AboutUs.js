import React from 'react'
import AnimatedButton from '../SameComponents/AnimatedButton'

const AboutUs = () => {
    const bg1 = '/services.3b34f62e.png'
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
            linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
            url(${bg2}),
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' right, center',
        backgroundColor: 'white', // Fallback background color
    };
    
    return (
        <>
            <div className="aboutUs padding py-5" style={style}>
                <div className="container">
                    <h2 className='mb-5 greenColor'><span className="greenColor borderBottom">About</span> Us.</h2>
                    <div className="row justify-content-between align-items-end">
                        <div className="col-md-6 pb-5" >
                            <p style={{color:'black'}}>At Lighthouse Software Solution Pvt Ltd, we are dedicated to shaping your brands identity. Our exceptional services blend visually appealing and user-friendly design with top-notch programming expertise.</p>

                            <p style={{color:'black'}}>brands vision into a tangible reality. Whether you need a complete brand overhaul or a website redesign, we are equipped to deliver tailored solutions that align with your unique goals. Trust Wolf Software Solution Pvt Ltd to enhance your brand identity and provide you with a distinct competitive advantage in the market.</p>

                           <AnimatedButton link='/about'/>

                        </div>
                        {/* <div className="col-md-6 text-right">
                            <img src="/portfolio_2.4df5b044.png" alt="about" className='img-fluid' />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs