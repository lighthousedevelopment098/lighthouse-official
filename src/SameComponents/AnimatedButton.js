import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../Images/animation_lmlt9acc.json'
import { Link } from 'react-router-dom'
const AnimatedButton = ({link}) => {
    return (
        <div className="btnBox items-center d-flex">
            <Link to={link} className='text-primary-500 font-semibold' style={{color:'#903519',padding:'10px 1px'}}>LearnMore</Link>
            <Lottie animationData={animationData} style={{ width: '50px'  ,}} />
        </div>
    )
}

export default AnimatedButton