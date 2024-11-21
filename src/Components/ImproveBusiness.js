import React from 'react'

const ImproveBusiness = ({ heading, pOne, pTwo,pThree, img }) => {
    return (
        <>
            <div className="improveYourBusiness ">
                <div className="container p-4" style={{ border: '8px solid #903519', borderRadius: "20px" }}>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6  ">
                            {heading}
                            <p>{pOne}</p>
                            <p>{pTwo}</p>
                            <p>{pThree}</p>
                            <button className='px-4 py-2 fw-bold fs-4' style={{ borderLeft: 'none', outline: "none", borderRadius: '10px' }}>Whatsapp <img src="https://wolftechs.pk/_next/static/media/whatsappgb.96705183.png" alt="" style={{ maxWidth: '40px' }} /></button>
                        </div>
                        <div className="col-md-5">
                            <img src={img} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImproveBusiness