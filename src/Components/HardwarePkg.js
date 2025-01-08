import React from 'react'
      const bg1 = '/'
    const bg2 = '/Home-Herobg-c2e4d53f.png'
const HardwarePkg = () => {

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
            <div style={style} className="ResellerPackege text-center p-5" >
                <h2 className="borderBottom  greenColor mb-2">Hardware <span className="greenColor">Services</span></h2>

                <p className="greenColor">We are providing  all these services</p>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-end">
                            <img  src="/fun-3d-girl-yelllow-side.ef21ed27.png" className='position-absolute none' alt="" style={{maxWidth:"200px",left:"80px"}} />
                            <img src="/resellerbanner.4e3e063f.png" style={{width:"90%"}}  alt="" className='fullW' />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default HardwarePkg