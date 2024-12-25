import React from 'react'
import SwiperSlider from '../SameComponents/SwiperSlider'
import { NavLink, useNavigate } from 'react-router-dom'

const EverythingInOnePlace = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="EverythingInOnePlace text-center padding">
                <h2 className='borderBottom'><span className="greenColor">Everything</span> you <span className="greenColor">Need</span> in one <span className="">Place</span></h2>

                <div className="container-fluid mt-4">

                    <div className="d-flex flex-wrap align-items-center justify-content-center">
                        <NavLink to='/services' ><button type="button">All</button></NavLink>
                        <NavLink to='/hardware_and_services'><button type="button">Hardware</button></NavLink>
                        <NavLink to='/hosting_and_servers' > <button type="button">Hosting & Servers</button></NavLink>
                        <NavLink to='/smm'> <button type="button">Social Media Markteing </button></NavLink>
                        <NavLink to='/website_devlopment' > <button type="button">Website Devlopment</button></NavLink>

                        <NavLink to='/mobile_application_page' >   <button type="button">Mobile Application</button></NavLink>
                        <NavLink to='/web_application'> <button type="button">Web Application</button></NavLink>
                        <NavLink to='/company_registration' >
                            <button type="button">Company Registration</button>
                        </NavLink>
                        <NavLink to='/robo_calls' >
                            <button type="button">Branded SMS & Robo calls</button>
                        </NavLink>
                        <NavLink to='/api' > <button type="button">Whatsapp API</button></NavLink>
                    </div>
                    <div className="mt-5"><SwiperSlider /></div>
                </div>
                <div className="container  highQuality" style={{ borderRadius: '10px', boxShadow: '1px 1px 10px black', padding: '20px', marginTop: '50px', backgroundColor: 'white', color: 'black', padding: "70px 0px" }}>
                    <div >
                        <h3 className="borderBottom d-inline-block pb-2 fw-bold fs-2">
                            Planning to built a high quality <span className="greenColor">Website</span> or <span className="greenColor">Application?</span>
                        </h3>
                        <div d-flex className="align-items-center justify-content-center">
                            <button className='fw-bold' type="button" style={{ backgroundColor: "#903519", color: 'white', marginTop: '25px' }}>Websie Devlopment</button>
                            <button className='fw-bold' type="button" style={{ backgroundColor: "#903519", color: 'white', marginTop: '25px' }}>Application Devlopment</button>
                        </div>
                    </div>
                </div>
                {/* <SwiperSlider /> */}
            </div >
        </>
    )
}

export default EverythingInOnePlace