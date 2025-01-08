import React from 'react'

const MakeYourCompanyOffical = () => {
    
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
        <div className="MakeYourCompanyOffical p-5 text-center" style={style}>
              <h2 className='' style={{textAlign:'center',color:'black', width:"100%",padding:'10px 0px'}}><span className="greenColor">Let's register</span> your company</h2>
          
            {/* <h3 className='text-center text-white'>Let's register your company</h3> */}
            <h2 className='borderBottom mb-4  d-inline-block'style={{color:'black'}} >Make your <span className="greenColor">Company</span> Official</h2>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 text-start">
                        <h2 className='fs-2 mb-4 ' style={{color:'black'}}>Register your <span className="greenColor">company</span> with our company <span className="greenColor">registration  </span> services</h2>

                        <p><b style={{ color: '#903519' }}>Legal Recognition:</b> Registering your company provides legal recognition and establishes its distinct identity as a separate legal entity. This separation protects the personal assets of the company's owners and limits their liability in case of any legal issues or debts.</p>

                        <p><b style={{ color: '#903519' }}>Credibility and Trust: </b> A registered company demonstrates credibility and professionalism, instilling trust among customers, suppliers, and business partners. It enhances your reputation and increases your chances of attracting investors and securing contracts.</p>

                        <p><b style={{ color: '#903519' }}>Access to Funding and Investment: </b> Registered companies have better access to funding options, such as bank loans, grants, and investment opportunities. Financial institutions and investors are more likely to support registered entities due to their legal compliance and accountability.</p>
                    </div>
                    <div className="col-md-5 d-flex flex-column align-items-center jusitfy-content-cetner">
                        <img src="/companyWidget.275e1962.png" className='img-fluid' alt="" />
                        <img src="/approvedBy.36ee60bd.png" alt="" className='img-fluid' />
                    </div>
                </div>
                <div className="row mt-5 text-start">
                    <p><b style={{ color: '#903519' }}>Brand Protection:</b> Company registration helps protect your brand identity, trademarks, and intellectual property rights. It prevents others from using or misappropriating your company's name or logo, safeguarding your unique assets and preserving your market position.</p>

                    <p><b style={{ color: '#903519' }}>Business Expansion Opportunities:</b> Registered companies can expand their operations and engage in various business activities, including entering into contracts, acquiring assets, and opening bank accounts. It offers flexibility and growth potential for your business.</p>

                    <p><b style={{ color: '#903519' }}>Tax Benefits and Incentives: </b> Registered companies may be eligible for tax benefits, incentives, and exemptions offered by the government. These advantages can significantly reduce the tax burden and improve the financial stability of your business.</p>

                    <p><b style={{ color: '#903519' }}>Perpetual Existence:  </b> Unlike sole proprietorships or partnerships, registered companies have perpetual existence, meaning they can continue their operations even in the event of changes in ownership or management. This provides stability and continuity for long-term business planning.</p>

                    <p><b style={{ color: '#903519' }}>Enhanced Business Opportunities:  </b>  Registering your company opens up opportunities to participate in government tenders, collaborations with other businesses, and access to a wider customer base. It positions your company for growth and success in the competitive market landscape.</p>
                </div>
            </div>
        </div >
    )
}

export default MakeYourCompanyOffical