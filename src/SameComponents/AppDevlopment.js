import React from 'react'
import AnimatedButton from './AnimatedButton'

const AppDevlopment = () => {
    const bg1 = '/about_hero.2859dc3e.png'
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
            linear-gradient( rgba(206, 91, 91, 0.8),rgba(144, 240, 231, 0.2)),
            url(${bg2}),
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' right, center',
        backgroundColor: 'white', // Fallback background color
    };
    return (
        <div className="appDevlopment" style={style}>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h3 className='fw-bold fs-2'>ARE YOU LOOKING FOR APP DEVELOPMENT?</h3>
                    </div>
                    <div className="col-md-3">
                        <AnimatedButton link='/mobile_application_page'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDevlopment