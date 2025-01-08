import React from 'react'

const AreYouReady = () => {
    const bg1 = '/manVr.f5cc434b.png'
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
            <div className="AreYouReady  text-center p-5 " style={style}>
                <h2><span style={{backgroundColor:'#903519', padding:'5px 10px', borderRadius:'10px', color:'white',fontSize:"35px"}}>ARE YOU READY?</span></h2>
                <h2 className='d-block  my-4' style={{fontSize:'35px'}}>TO WATCH YOUR IDEA INTO REAL APPLICATION.</h2>
                {/* <button className='px-4 text-white py-2 fw-bold fs-4' style={{ border: 'none', outline: "0", borderRadius: '10px' ,backgroundColor:'#8A2B0E', boxShadow:"0px 0px 4px black"}}>Learn More</button> */}

            </div>
        </>
    )
}

export default AreYouReady