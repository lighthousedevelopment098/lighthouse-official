import { PersonalInfo } from './PersonalInfo';
import React from 'react'

const DigitalRealities = () => {
    return (
        <div className="digitalRealities padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <h1 style={{ color: 'black', fontSize: '80px' }}><span className="greenColor">Idea</span> into <br /> Digital <br /> <span className="greenColor">Realities</span></h1>
                    </div>
                    <div className="col-md-7 digitalRealitiesBox">
                        <h2>Pakistan</h2>
                        <div className="row">
                            <div className="col-md-4  " >
                                <PersonalInfo icon='fa-solid fa-envelope' location='Email' info='admin@lhd-pk.com' />
                                
                            </div>

                            <div className="col-md-4">
                                <PersonalInfo icon='fa-solid fa-location-dot' location='Location' info='Office 678 Business Center Health Services Academy' />
                            </div>

                            <div className="col-md-4">
                                <PersonalInfo icon='fa-solid fa-headset' location='Support' info='+923365060108' />
                            </div>

                        </div>
                        <h2 className='mt-2'>Canada</h2>
                        <div className="row">
                            <div className="col-md-4 ">
                                <PersonalInfo icon='fa-solid fa-envelope' location='Email' info='Info@lhd-pk.com' />
                            </div>
                            <div className="col-md-4 ">
                                <PersonalInfo icon='fa-solid fa-location-dot' location='Location' info='Vancouver: 3077 Granville St #100, Vancouver, BC V6H 3J9' />
                            </div>
                            <div className="col-md-4 ">
                                <PersonalInfo icon='fa-solid fa-headset' location='Location' info='+923365060108' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default DigitalRealities