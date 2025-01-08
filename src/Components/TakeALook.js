import React from 'react'
import AnimatedButton from '../SameComponents/AnimatedButton'

const TakeALook = () => {
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
        <div className="takeALook padding textAlign" style={style}>
            <div className="container" >
                <div className="row justify-content-evenly align-items-center">
                    <div className="col-md-4 mb-3 takeAlookBox  d-flex justify-content-end p-0">
                        <img src="/fun-3d-girl-yelllow-side.ef21ed27.png" className='girlImg' alt="girl" />

                        <img src="/projectsBanner.6e34600a.jpg" alt="laptop" className='' style={{ maxWidth: '347px', height: '290px' }} />
                    </div>
                    <div className="col-md-6">
                        <h2 className='mb-5 greenColor'>Take a look on our <span className="borderBottom greenColor">Projects.</span></h2>
                        <p className='greenColor'>Mirror of creative solutions developed for clients. As passionate designers, we love building awesome products that are easy to use, accessible, engaging, and delightful.</p>
                        <p className='greenColor'>We believe that the true power of design lies in its ability to seamlessly blend aesthetics with functionality. Every pixel and every line of code we create is carefully crafted to ensure an intuitive and immersive user experience. By blending creativity with usability, we create products that not only look stunning but also provide a seamless journey for users, keeping them engaged and coming back for more.</p>
                        <AnimatedButton link={'/portfolio'}/>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakeALook