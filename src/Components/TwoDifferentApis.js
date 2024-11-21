import React from 'react'

const TwoDifferentApis = () => {
    return (
        <>
            <div className="TwoDifferentApis">
                <div className="container-fluid text-center p-5" style={{ backgroundColor: '#903519' }}>
                    <h2 >We <span style={{ backgroundColor: '#ECDF47', padding: '5px 10px', borderRadius: "10px" }}>Offer</span> Two Different API's.</h2>
                </div>
                <div className=" text-center p-5" style={{ backgroundColor: 'black' }}>
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
                </div>
            </div>
        </>
    )
}

export default TwoDifferentApis