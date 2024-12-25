import React from 'react'

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
                                        <li><a href="">∘ Hardware & Services</a></li>
                                            <li><a href="">∘ Hosting & Servers</a></li>
                                            <li><a href="">∘ Application Devlopment</a></li>
                                            <li><a href="">∘ Website Development</a></li>
                                            <li><a href="">∘ Web Application</a></li>
                                            <li><a href="">∘ Social Media Marketing</a></li>
                                            <li><a href="">∘ Search Engine Optimization</a></li>
                                            <li><a href="">∘ Branded SMS</a></li>
                                            <li><a href="">∘ Company Regestration</a></li>
                                            <li><a href="">∘ Whatsapp Api</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Say Hello</h4>
                                        <ul className='p-0 m-0'>
                                            <li><a href="">∘ +92- 336-5060108</a></li>
                                            {/* <li><a href="">∘ +92-355-7407567</a></li> */}
                                            <li><a href="">∘ lighthousedev2024@gmail.com</a></li>
                                            <li><a href="">∘ admin@lhd-pk.com</a></li>
                                            <li><a href="">∘ info@lhd-pk.com</a></li>
                                            <li>
                                                <div className="d-flex socialLinks">
                                                    <a href="">
                                                        <i className="fa-brands fa-facebook"></i>
                                                    </a>
                                                    <a href="">
                                                        <i className="fa-brands fa-youtube"></i>
                                                    </a>
                                                    <a href="">
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </a>
                                                    <a href="">
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