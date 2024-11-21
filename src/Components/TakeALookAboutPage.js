import React from 'react'
import Lottie from 'lottie-react'
import animtaionData from '../Images/animation_lmn4kl7m.json'
const TakeALookAboutPage = () => {
    return (
        <>
            <div className="takeALookAboutPage padding py-5">
                <div className="container p-5" style={{ boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: "20px" }}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Lottie animationData={animtaionData} />
                        </div>
                        <div className="col-md-6">
                            <h2 style={{ color: 'black' }}>Take a look on our <span className='greenColor borderBottom'> Projects.</span></h2>

                            <p className='mt-4' style={{ color: 'black' }}>Wolf Software Solutions: Empowering Businesses Through Innovative Digital Solutions Wolf Software Solutions is a leading digital marketing and software development company, committed to empowering entrepreneurs, startups, and businesses with state-of-the-art technology and unparalleled innovation.</p>

                            <p style={{color:'black'}}>At Wolf Software Solutions, we specialize in crafting exceptional brands from scratch, delivering impactful marketing strategies that generate high-quality leads, and designing captivating websites that effortlessly convert leads into loyal customers. Our team of seasoned developers possesses a wealth of expertise in creating customized, user-friendly mobile and web applications that consistently garner praise from users worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeALookAboutPage