import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../Images/animation_lmll6y0y.json'
import AnimatedButton from '../SameComponents/AnimatedButton'
const  BuildFromStratch = () => {
    const bg1 = '/portfolio_2.4df5b044.png'
    const bg2 = '/Home-Herobg-c2e4d53f.png'
 
    const style = {
        backgroundImage: `
            linear-gradient(rgba(144, 240, 231, 0.3), rgba(206, 91, 91, 0.6)),
            url(${bg2}),
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' right, center',
        backgroundColor: 'white', // Fallback background color
    };
    return (
        <div className="buildFromStrach padding" style={style}>
            <div className="container ">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 mb-3">
                        <h2 className='mb-5'>Built from <span className="borderBottom ">Scratch</span></h2>
                        <p>Welcome to Lighthouse Software Solutions, where we are dedicated to building innovative digital solutions that are tailored to your needs. As a dynamic and forward-thinking company, we specialize in creating projects from scratch that push the boundaries of technology and deliver exceptional results.</p>

                        <p>At Lighthouse Software Solutions, we understand the value of starting fresh. We believe that by crafting projects from the ground up, we can fully capture your unique vision and deliver a solution that exceeds your expectations. Our team of talented developers and designers work closely with you to understand your goals, ensuring that every aspect of your project is customized to your specific requirements.</p>
                        <AnimatedButton link='/services'/>
                    </div>
                    <div className="col-md-5">
                        <Lottie animationData={animationData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildFromStratch