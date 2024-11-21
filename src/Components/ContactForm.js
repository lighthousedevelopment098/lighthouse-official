import React from 'react'
import Select from 'react-select'
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { MultiSelect } from "react-multi-select-component";
const ContactForm = () => {
    const [selected, setSelected] = useState([]);
    const [phone, setPhone] = useState('');

    const optionsTwo = [
        { label: "Hosting & Servers ", value: "Hosting & Servers" },
        { label: "Mobile Application ", value: "Mobile Application" },
        { label: "Website Devlopment ", value: "Website Devlopment" },
        { label: "Web Application ", value: "Web Application" },
        { label: "Social Media Markeeting ", value: "Social Media Markeeting" },
        { label: "Search Engine Optimization ", value: "Search Engine Optimization" },
        { label: "Company Registration   ", value: "Company Registration  " },
        { label: "Brand SMS and API's ", value: "Brand SMS and API's" },
        { label: "Whatsapp API's ", value: "Whatsapp API's" },
    ];



    const options = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' }
    ]

    return (
        <div className="contactForm ">
            <div className="container padding">
                <div className="row">
                    <div className="col-md-10">
                        <div> <h2 className='borderBottom' style={{ color: 'black', display: 'inline-block' }}>Let's <span className="greenColor">Connect</span></h2></div>
                        <h4 className='w-75 mx-auto mt-3' style={{ color: '#787878' }}>Weather you are a newbie or a professional you can tell us about you Vision</h4>

                        <div className="row justify-content-between">
                            <div className="col-md-6">
                                <label htmlFor="">Frist Name</label>
                                <input type="text" placeholder='Enter First Name' className="form-control" />
                            </div>
                            <div className="col-md-6 mtThirty">
                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder='Enter Last Name' className="form-control" />

                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12 text-start">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Enter Your Email' className='form-control' />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12 text-start">
                                <label htmlFor="">Gender</label>
                                <Select options={options} />
                            </div>
                        </div>
                        <div className="row mt-4 justify-content-between">
                            <div className="col-md-6">
                                <label htmlFor="">Company(if any)</label>
                                <input type="text" placeholder='Your Company Name' className="form-control" />
                            </div>
                            <div className="col-md-6 mtThirty">
                                <label htmlFor="">Last Name</label>
                                <PhoneInput
                                    defaultCountry="ua"
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}

                                />

                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12 text-start">
                                <label htmlFor="">Services</label>
                                <MultiSelect
                                    options={optionsTwo}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12 text-start">
                                <label htmlFor="">Message</label>
                                <textarea placeholder='Enter Your Message'  className='textarea form-control' />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12 text-center">
                                <button type="button" className="myBtn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactForm