import React from 'react'
import ImproveBusiness from './ImproveBusiness'

const TechnologyStack = () => {
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
    return (
        <>
            <div className="technologyStack p-5" style={style}>
                <div className="container-fluid text-center">
                    <h2 className='borderBottom ' style={{ display: 'inline-block',color:'black' }}>
                        Technology <span className="greenColor"> Stack</span>
                    </h2>
                    <img src="/languages.61b757b7.png" alt="" className='img-fluid mt-4' style={{ borderRadius: '10px' }} />
                </div>
                <div className='pt-5'>
                    <ImproveBusiness heading={<><h3 className='text-black mb-4 fs-1'>The <span className="greenColor">goal</span> isn’t to build a <span className="greenColor">website</span>.The goal is to <span className="greenColor">improve</span> your <span className="greenColor">bussiness</span>.</h3></>} pOne={<> <p>Using the latest technologies and industry best practices, we create websites that are not only visually appealing but also highly functional and scalable. Our development team is proficient in a wide range of programming languages and frameworks, allowing us to customize your website with advanced features and integrations that enhance its capabilities.</p></>} pTwo={<p>From content management systems to e-commerce solutions, we have the expertise to build robust websites that empower your business to thrive in the digital landscape.</p>} img='/about_hero.2859dc3e.png' />
                </div>
            </div>

        </>
    )
}

export default TechnologyStack