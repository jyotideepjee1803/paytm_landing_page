import React from 'react'
import './Slider.css';
const Slider = (props) => {
    return (
        <div className="slider-box">
            <div className="slider-info">
                <div className="slider-logo">
                    <img src={props.logo} alt="" />
                </div>
                <div className="para">
                   {props.para}
                </div>
                <p>{props.LM}</p>
            </div>
            <div className="slider">
                <div>
                    <div className="slider-img">
                        <img src={props.img1} alt="" />
                    </div>
                    <p>{props.text1}</p>
                </div>
                <div>
                    <div className="slider-img">
                        <img src={props.img2} alt="" />
                    </div>
                    <p>{props.text2}</p>
                </div>
                <div>
                    <div className="slider-img">
                        <img src={props.img3} alt="" />
                    </div>
                    <p>{props.text3}</p>
                </div>
                <div>
                    <div className="slider-img">
                        <img src={props.img4} alt="" />
                    </div>
                    <p>{props.text4}</p>
                </div>
                <div>
                    <div className="slider-img">
                        <img src={props.img5} alt="" />
                    </div>
                    <p>{props.text5}</p>
                </div>

            </div>
        </div>
    )
}

export default Slider