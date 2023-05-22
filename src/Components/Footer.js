import React from 'react'

import './Footer.css';
const Footer = () => {
    return (
        <div className='Footer-container'>
            <div className="footer">
                <div className="footer-first-div">
                    <div className='download-icons'>
                        <span>Download Paytm App <br /> to Pay from anywhere</span>
                        <img src={'https://assetscdn1.paytm.com/frontendcommonweb/71229188.svg'} alt="" />
                        <img src={'https://assetscdn1.paytm.com/frontendcommonweb/33d9d7f1.svg'} alt="" />
                    </div>
                    <div className="social-icons">
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                    </div>
                </div>
            </div>
            <div className="footer-links">
                <div className="links">
                    Investor Relations
                    <i className="fas fa-plus"></i>
                </div>
                <div className="links">
                    More About Paytm
                    <i className="fas fa-plus"></i>
                </div>
                <div className="links">
                    Company
                    <i className="fas fa-plus"></i>
                </div>
                <div className="links">
                    Career
                    <i className="fas fa-plus"></i>
                </div>
                <div className="links">
                    Recharge & Pay Bills
                    <i className="fas fa-plus"></i>
                </div>
                <div className="links">
                    Pay Loan EMI, Insurance Premiums & Education Fee
                    <i className="fas fa-plus"></i>
                </div>
                <div className="links">
                    Book Travel & Entertainment
                    <i className="fas fa-plus"></i>
                </div>
                <div className="links">
                    Investments & Miscellaneous
                    <i className="fas fa-plus"></i>
                </div>
                <div className="links">
                    Insurance (Powered by Paytm Insurance Broking Private Limited)
                    <i className="fas fa-plus"></i>
                </div>
                <div className="links">
                    Loans and Credit Cards
                    <i className="fas fa-plus"></i>
                </div>
                <div className="links">
                    Financial Tools & Calculators
                    <i className="fas fa-plus"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer