import React from 'react'
import Lottie from 'lottie-react';
import animationDataOne from '../Images/animation_lmljxx3t.json';
import animationDataThree from '../Images/animation_lmljymqp.json';
import animationDataTwo from '../Images/animation_lmljzdi0.json';
const Articls = () => {
    return (
        <>
            <div className="articles">
                <div className="container-fluid">
                    <h2 className='borderBottom'>Recent <span className="greenColor">News</span> & <span className="greenColor">Articles</span></h2>
                    <div className="articleBoxes flex-wrap d-flex align-items-center justify-content-between">
                        <div className="articleBox">

                            <div className="animationBox">
                                <Lottie animationData={animationDataOne} style={{ width: '250px', height: '200px' }}  />
                            </div>
                            <h3>Expand your network with <b>Hosting</b> & <b>Servers</b></h3>
                        </div>
                        <div className="articleBox text-white">
                            <Lottie animationData={animationDataThree} style={{ width: '250px', height: '200px' }}  />
                            <h3>The importance of images for your <b>The importance of images for your Website</b></h3>
                        </div>
                        <div className="articleBox">
                            <Lottie animationData={animationDataTwo} style={{ width: '250px', height: '200px' }}  />
                            <h3>Do you <b>Know</b> ? What is a Website Prototype ?</h3>
                        </div>
                    </div>
                </div>
                    <div className="imgBox">
                        <img src="https://wolftechs.pk/_next/static/media/newsArticleBannerImg.65c84749.jpg" alt="laptops" className='img-fluid' />
                    </div>
            </div>
        </>
    )
}

export default Articls