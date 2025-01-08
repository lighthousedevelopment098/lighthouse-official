import React from 'react'

const TwoDifferentApis = () => {
    const bg1 = '/'
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
            <div className="TwoDifferentApis">
                <div className="container-fluid text-center p-5" style={{backgroundColor:'#903519'}}>
                    <h2 style={{color:'white'}}>We <span style={{ backgroundColor: 'white',color:"#903519", padding: '5px 10px', borderRadius: "10px" }}>Offer</span> Two Different API's.</h2>
                </div>
                {/* <div className=" text-center p-5" style={style}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column align-items-center">
                                <button className='border-0 mb-3 px-5 py-2 ' style={{ borderRadius: '10px' }}><img src="/whatsappgb.96705183.png" style={{ maxWidth: '35px' }} className='me-2' alt="" />Official API</button>
                                <b className='text-white mb-3 fs-5'>Monthly $19.99</b>
                                <button className='px-5 py-2 fw-bold border-0' style={{ backgroundColor: '#009bdd', borderRadius: '10px' }}>Buy Now</button>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-center">
                                <button className='border-0 mb-3 px-5 py-2 ' style={{ borderRadius: '10px' }}><img src="/whatsappgb.96705183.png" style={{ maxWidth: '35px' }} className='me-2' alt="" />Non Official API</button>
                                <b className='text-white mb-3 fs-5'>Monthly $8.99</b>
                                <button className='px-5 py-2 fw-bold border-0' style={{ backgroundColor: '#009bdd', borderRadius: '10px' }}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div
  className="text-center p-5"
  style={{
    backgroundImage: `
    linear-gradient(rgba(144, 240, 231, 0.2), rgba(206, 91, 91, 0.4)),
    url(${bg2}),
    url(${bg1})`,
backgroundSize: 'contain, cover',
backgroundRepeat: 'no-repeat',
backgroundPosition: ' right, center',
backgroundColor: 'white', 
    color: '#333',
    // minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <div
    className="container"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    }}
  >
    {/* Card Component */}
    {[
      { title: 'Official API', price: '$19.99', img: '/whatsappgb.96705183.png' },
      { title: 'Non Official API', price: '$8.99', img: '/whatsappgb.96705183.png' },
    ].map((card, index) => (
      <div
        key={index}
        className="card"
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          textAlign: 'center',
          width: '280px',
        }}
      >
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f8ff',
            color: '#903519',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            marginBottom: '15px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          <img
            src={card.img}
            style={{ maxWidth: '30px', marginRight: '10px' }}
            alt={card.title}
          />
          {card.title}
        </button>
        <b style={{ fontSize: '18px', color: '#903519', marginBottom: '15px', display: 'block' }}>
          Monthly {card.price}
        </b>
        <button
          style={{
            backgroundColor: '#903519',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#903519')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#903519')}
        >
          Buy Now
        </button>
      </div>
    ))}
  </div>
</div>

            </div>
        </>
    )
}

export default TwoDifferentApis