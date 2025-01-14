import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer padding">
                <div className="container-fluid">
                    <div className="footerWrapper">
                        <div className="row justify-content-between">
                            <div className="col-md-6 text-primary-500" style={{color:'#903519',  background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)', borderRadius: "15px", padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent:'center' }}>
                                <h2 className='text-primary-500'style={{color:'#903519'}}>Ready To Built Your Ideas Into Reality.</h2>
                                <h3>THE BEST TIME TO START IS NOW!
                                    0336 5060108</h3>
                                <button type="button" className='border px-2 py-1 rounded-md border-primary-500'>Get In Touch</button>
                            </div>
                            <div className="col-md-6 ps-5">
                                <div className="d-flex justify-content-end">
                                    <div className="col-md-6">
                                        <h4>Quick Links</h4>
                                        <ul className='p-0 m-0'>
                                        <li><a href="/hardware_and_services">∘ Hardware & Services</a></li>
                                            <li><Link to={'/hosting_and_servers'} >∘ Hosting & Servers</Link></li>
                                            <li><Link to={'/mobile_application_page'} >∘ Application Devlopment</Link></li>
                                            <li><Link to={"/website_devlopment"}>∘ Website Development</Link></li>
                                            <li><Link to={'/web_application'}>∘ Web Application</Link></li>
                                            <li><Link to={"/smm"}>∘ Social Media Marketing</Link></li>
                                            {/* <li><Link to={"/"}>∘ Search Engine Optimization</Link></li> */}
                                            <li><Link to={"/robo_calls"}>∘ Branded SMS</Link></li>
                                            <li><Link to={"/company_registration"}>∘ Company Regestration</Link></li>
                                            <li><Link  to={"/api"}>∘ Whatsapp Api</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Say Hello</h4>
                                        <ul className='p-0 m-0'>
                                            <li><Link to={"/"}>∘ +92- 336-5060108</Link></li>
                                            {/* <li><Link to={"/"}>∘ +92-355-7407567</Link></li> */}
                                            <li><Link to={"/"}>∘ lighthousedev2024@gmail.com</Link></li>
                                            <li><Link to={"/"}>∘ admin@lhd-pk.com</Link></li>
                                            <li><Link to={"/"}>∘ info@lhd-pk.com</Link></li>
                                            <li>
                                                <div className="d-flex socialLinks">
                                                <a 
  href="https://www.facebook.com/Teamlighthouse004" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <i className="fa-brands fa-facebook"></i>
</a>

                                                    <a href='https://www.linkedin.com/company/light-house-development098/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    >
                                                        <i className="fa-brands fa-linkedin"></i>
                                                    </a>
                                                    <a href='https://www.instagram.com/teamlighthouse21/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    >
                                                        <i className="fa-brands fa-instagram"></i>
                                                        </a>
                                                        <a 
  href="https://wa.me/923157505059" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <i className="fa-brands fa-whatsapp"></i>
</a>


                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <img src="/footer_4.4b92ed19.png" alt="trustpoilt" />
                                                    <img src="/footer_3.96d948c3.jpg" alt="google" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <img src="/footer_2.57eded0f.png" alt="trustpoilt" />
                                                    
                                                    <img src="/footer_1.68dbbc5b.png" alt="google" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer