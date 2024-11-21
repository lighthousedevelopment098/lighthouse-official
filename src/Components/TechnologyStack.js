import React from 'react'
import ImproveBusiness from './ImproveBusiness'

const TechnologyStack = () => {
    return (
        <>
            <div className="technologyStack p-5" style={{ backgroundColor: 'black' }}>
                <div className="container-fluid text-center">
                    <h2 className='borderBottom' style={{ display: 'inline-block' }}>
                        Technology <span className="greenColor"> Stack</span>
                    </h2>
                    <img src="/languages.61b757b7.png" alt="" className='img-fluid mt-4' style={{ borderRadius: '10px' }} />
                </div>
                <div className='pt-5'>
                    <ImproveBusiness heading={<><h3 className='text-white mb-4 fs-1'>The <span className="greenColor">goal</span> isn’t to build a <span className="greenColor">website</span>.The goal is to <span className="greenColor">improve</span> your <span className="greenColor">bussiness</span>.</h3></>} pOne={<> <p>Using the latest technologies and industry best practices, we create websites that are not only visually appealing but also highly functional and scalable. Our development team is proficient in a wide range of programming languages and frameworks, allowing us to customize your website with advanced features and integrations that enhance its capabilities.</p></>} pTwo={<p>From content management systems to e-commerce solutions, we have the expertise to build robust websites that empower your business to thrive in the digital landscape.</p>} img='https://wolftechs.pk/_next/static/media/webdevwidget.5f037b66.jpg' />
                </div>
            </div>

        </>
    )
}

export default TechnologyStack