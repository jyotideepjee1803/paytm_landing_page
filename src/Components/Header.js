import React, { useState} from 'react'
import './Header.css';

const Header = () => {
const [btnState, setBtnState] = useState(false)
const [showBars, setShow] = useState(true);
const toggleMenu = () =>{
    setBtnState(btnState => !btnState);
    setShow(showBars => !showBars);
}
let toggleClass = btnState ? 'active-menu':null;
let toggleHam = showBars ? 'fas fa-bars' : 'fas fa-plus cross';
return (
        
    <header className='header'>
        <nav className="navbar">
            <div id='hamberger-menu' onClick={toggleMenu}>
                <i className={`${toggleHam}`}></i>
            </div>
            <div className="logo">
                <img src={'https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png'} alt="" />
            </div>
            <ul className={`nav-links ${toggleClass}`}>
                <li id='dropdown-link1'> Paytm for Consumer
                    <div className='dropdown first-dropdown'>
                        <ul>
                            <li>Payments</li>
                            <li>Ticket booking</li>
                            <li>Financial Services</li>
                        </ul>
                    </div>
                </li>
                <li id='dropdown-link2'>Paytm For Business
                    <div className='dropdown second-dropdown'>
                        <ul>
                            <li>Consumer Payments</li>
                            <li>Business Payments</li>
                            <li>Business Software</li>
                            <li>Financial Service</li>
                            <li>Developer</li>
                        </ul>
                    </div>
                </li>
                <li id='dropdown-link3'>Company
                    <div className='dropdown third-dropdown'>
                        <ul>
                            <li>About</li>
                            <li>CSR</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Terms & Conditions</li>
                            <li>Sustainability</li>

                        </ul>
                    </div>
                </li>
                <li id='dropdown-link4'>Investor Relations
                    <div className='dropdown fourth-dropdown'>
                        <ul>
                            <li>Fiancial Information</li>
                            <li>Corporate Governance</li>
                            <li>Stock Exchange Submissions</li>
                            <li>General Meetings</li>
                            <li>Investor Resources</li>
                        </ul>
                    </div>
                </li>
                <li>Career</li>
            </ul>
            <div className="account">
                <button className='sign-in'> Sign In <i class="fas fa-user-circle"></i></button>
            </div>
        </nav>
    </header>
)
}

export default Header