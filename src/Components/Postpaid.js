import React from 'react'
import './Postpaid.css';
const Postpaid = (props) => {
    return (
        <div className='Postpaid-card'>
            <div className="PostpaidCard-content">
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
                <button>{props.btn}<i class="fas fa-chevron-right"></i>
                <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="PostpaidCard-img">
                <img src={props.cardImg} alt="" />
            </div>
        </div>
    )
}

export default Postpaid