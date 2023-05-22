import React from 'react'
import './BusinessTool.css';
const BusinessTool = (props) => {
    return (
        <div className="BusinessTool">
            <div className="tool-img">
                <img src={props.toolImg} alt="" />
            </div>
            <div className="tool-head">
                <h2>{props.toolHead}</h2>
            </div>
            <div className="tool-para">
                <p>{props.toolPara}</p>
            </div>
            <div className="tool-btn">
                <button>{props.LM}
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default BusinessTool