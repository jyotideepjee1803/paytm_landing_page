import React from 'react'
import './BankCard.css';
const BankCard = (props) => {
    return (

        <div className="BankCard-div">
            <div className='bank-logo'>
                <img src={props.cardLogo} alt="" />
            </div>
            <div className='bankCard-title'>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>{props.para}</p>
            </div>
            <div className='bankCard-img'>
                <img src={props.cardImg} alt="" />
            </div>
        </div>
    )
}

export default BankCard