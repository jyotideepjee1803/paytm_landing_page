import React from 'react'
import './MainCard.css';
const MainCard = (props) => {
    return (
        <div className='Main-card'>
            <div className='Main-head'>
                <h1 id='kyc'>No Wallet KYC Required
                    😊
                    to pay using UPI on Paytm.
                    Learn more.</h1>
            </div>
            <div className="MainCard-content">
                <div className="card-logo" >
                    <img src={props.cardLogo} alt="" />
                </div>

                <div className="card-text">
                    <h1>{props.heading}</h1>
                    <p>{props.para}</p>
                </div>
                <button>Downlaod Paytm App
                    <i className="fab fa-apple"></i>
                    <a href="https://play.google.com/store/apps/details?id=net.one97.paytm" target='_blank' rel='noreferrer'> <i class="fab fa-google-play"></i></a>
                </button>
            </div>
            <div className="MainCard-img">
                <img src={props.cardImg} alt="" />
            </div>
        </div>
    )
}

export default MainCard