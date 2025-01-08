import React from 'react'
import Lottie from 'lottie-react'
import animtaionData from '../Images/animation_lmn4kl7m.json'
const TakeALookAboutPage = () => {
    const bg1 = '/'
    const bg2 = '/Home-Herobg-c2e4d53f.png'

    const style = {
        backgroundImage: `
            linear-gradient(rgba(144, 240, 231, 0.4), rgba(206, 91, 91, 0.8)),
            url(${bg2}),
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' right, center',
        backgroundColor: 'white', // Fallback background color
    };
    return (
        <>
            <div className="takeALookAboutPage appDevlopment padding py-5" style={style}>
                <div className="container p-5 " >
                {/* style={{ boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: "20px" }} */}
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Lottie animationData={animtaionData} />
                        </div>
                        <div className="col-md-6">
                            <h2 style={{ color: 'black' }}>Take a look on our <span className='greenColor borderBottom'> Projects.</span></h2>

                            <p className='mt-4' style={{ color: 'white' }}>Lighthouse Digital: Empowering Businesses Through Innovative Digital Solutions Lighthouse Digital Software Solutions is a leading digital marketing and software development company, committed to empowering entrepreneurs, startups, and businesses with state-of-the-art technology and unparalleled innovation.</p>

                            <p style={{color:'white'}}>At Lighthouse Digital, we specialize in crafting exceptional brands from scratch, delivering impactful marketing strategies that generate high-quality leads, and designing captivating websites that effortlessly convert leads into loyal customers. Our team of seasoned developers possesses a wealth of expertise in creating customized, user-friendly mobile and web applications that consistently garner praise from users worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeALookAboutPage