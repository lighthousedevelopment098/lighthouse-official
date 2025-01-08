import Lottie from 'lottie-react'
import React from 'react'
import animationData from '../Images/girl.json'
const WhatsappMessages = () => {
    const bg1 = '/'
    const bg2 = '/Home-Herobg-c2e4d53f.png'
    const style = {
        backgroundImage: `
            linear-gradient(rgba(144, 50, 231, 0.2), rgba(206, 91, 91, 0.4)),
            url(${bg2}),
            url(${bg1})`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' right, center',
        backgroundColor: 'white', // Fallback background color
    };
    return (
        <>
            <div className="MakeYourCompanyOffical p-5 text-center" style={style}>
                <h2 className='borderBottom   d-inline-block'>WhatsApp <span className="greenColor">Messaging</span></h2>
                <h3 className='text-center mb-4 'style={{color:'#903519', fontWeight:'bold'}}>Platform with external applications and services</h3>
                <div className="container mt-5">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6 text-start">
                            <h2 className='fs-2 mb-4 d-block'>WhatsApp<span className="greenColor"> API's</span></h2>

                            <p>The WhatsApp API is used to integrate the WhatsApp messaging platform with external applications and services. It allows businesses and developers to programmatically send and receive messages, automate communication, and build interactive experiences on the WhatsApp platform.</p>

                            <b className="greenColor">Here are some common use cases for the WhatsApp API:</b>

                            <p><b style={{ color: '#903519' }}>Support and Engagement: </b>Customer Businesses can use the WhatsApp API to provide customer support, answer queries, and engage with customers in real-time through WhatsApp chat. It enables businesses to offer personalized assistance and build stronger relationships with their customers.</p>


                        </div>
                        <div className="col-md-5 ">
                            <Lottie animationData={animationData} />
                        </div>
                    </div>
                    <div className="row text-start mt-5">
                        <p><b style={{ color: '#903519' }}>Notifications and Alerts:</b> The WhatsApp API can be used to send important notifications, updates, and alerts to customers. This includes order confirmations, delivery updates, appointment reminders, payment notifications, and more. Businesses can leverage the popularity and instant reach of WhatsApp to ensure timely communication with their customers.</p>

                        <p><b style={{ color: '#903519' }}>Transactional Messaging:</b>  The API enables businesses to send transactional messages, such as purchase receipts, account statements, and booking confirmations, directly to customers via WhatsApp. This facilitates efficient communication and enhances the customer experience.</p>

                        <p><b style={{ color: '#903519' }}>Marketing and Promotions:</b>  The WhatsApp API can be utilized for marketing campaigns and promotions. Businesses can send targeted messages, promotional offers, and product updates to their customers, reaching them directly on their WhatsApp accounts.</p>

                        <p><b style={{ color: '#903519' }}>Chatbots and Automation:</b>  By integrating chatbot technology with the WhatsApp API, businesses can automate conversations and provide instant responses to customer queries. Chatbots can handle frequently asked questions, guide customers through processes, and gather relevant information before transferring the conversation to a human agent if needed.</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default WhatsappMessages