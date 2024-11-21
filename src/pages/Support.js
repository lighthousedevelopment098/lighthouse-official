import React from 'react'
import '../Css/Support.css'
import Lottie from 'lottie-react'
import animationData from '../Images/animation_lmn5ci00.json'

const Support = () => {
    return (
        <>
            <div className="support padding bg  d-flex align-items-center justify-content-center " style={{
                width: '100%', height: '100vh'
            }}>
                <div className="container bg-white">
                    <div className="row">
                        <div className="col-md-6 none  p-5 d-flex align-items-center justfiy-content-center" style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                            <Lottie animationData={animationData} style={{ maxWidth: "400px" }} />
                        </div>
                        <div className="col-md-6 p-5 d-flex align-items-center justify-content-center flex-column">
                            <a href=""> <img src={require('../Images/lighthouselogo.png')} alt="light house-logo" style={{ maxWidth: "140px" }} /></a>
                            <h4 className='fw-bold ' style={{ fontSize: '17px' }}>Please select from the following options.</h4>

                            <button type="button" className='form-control  p-3 fw-bold my-2' style={{ backgroundColor: 'black', color: 'white' }}>Login Now   🔒</button>

                            <button type="button" className='form-control  p-3 fw-bold my-2'>WhatsApp tool Login  <i className="fa-brands fa-whatsapp" style={{ color: '#28c600', marginLeft: '10px', fontSize: '20px' }}></i>
                            </button>

                            <button type="button" className='form-control  p-3 fw-bold my-2' style={{ backgroundColor: '#903519', color: 'white' }}>Whatsapp Live Chat <i className="fa-brands fa-whatsapp" style={{ marginLeft: '10px', fontSize: '20px' }}></i>
                            </button>

                            <button type="button" className='form-control  p-3 fw-bold my-2'>
                                Have any Query? 🔒
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support