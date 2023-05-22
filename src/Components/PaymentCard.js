import React from 'react'
import './PaymentCard.css';
const PaymentCard = (props) => {
    return (
        <div className='Payment-card'>
            <div className="PaymentCard-content">
                <div className="card-logo" >
                    <img src={props.cardLogo} alt="" />
                    <div className="card-title">
                        <h2>{props.cardTitle}</h2>
                    </div>
                </div>

                <div className="card-text">
                    <h1>{props.heading}</h1>
                    <p>{props.para}</p>
                </div>
                <button>Downlaod Paytm App
                    <i className="fab fa-apple"></i>
                    <i className="fab fa-google-play"></i>
                </button>
            </div>
            <div className="PaymentCard-img">
                <img src={props.cardImg} alt="" />
            </div>
        </div>

    )
}

export default PaymentCard