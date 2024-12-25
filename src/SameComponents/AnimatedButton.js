import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../Images/animation_lmlt9acc.json'
const AnimatedButton = () => {
    return (
        <div className="btnBox items-center d-flex">
            <button className='text-primary-500 font-semibold'>LearnMore</button>
            <Lottie animationData={animationData} style={{ width: '50px'  ,}} />
        </div>
    )
}

export default AnimatedButton