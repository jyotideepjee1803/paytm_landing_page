import React from 'react'
import './IconComp.css';

const IconComp = (props) => {
    // const [hover, setHover] = useState(false);

    return (
        <div className="iconComp" style={{backgroundColor: `${props.bgColor}`}}>
            <h1>{props.heading}</h1>
            <div className='icon-slide'>
                <div className={`${props.id}`}> 
                    <div><img src={props.img1} alt="" /></div>
                    <p>{props.p1}&nbsp;&gt;</p>
                </div>
                <div className={`${props.id}`}>
                    <div><img src={props.img2} alt="" /></div>
                    <p>{props.p2}&nbsp;&gt;</p>
                </div>
                <div className={`${props.id}`}>
                    <div><img src={props.img3} alt="" /> </div><p>{props.p3}&nbsp;&gt;</p>
                </div>
                <div className={`${props.id}`}> 
                    <div><img src={props.img4} alt="" /> </div><p>{props.p4}&nbsp;&gt;</p>
                </div>
                <div className={`${props.id}`}>
                    <div><img src={props.img5} alt="" /> </div><p>{props.p5}&nbsp;&gt;</p>
                </div>
                <div className={`${props.id}`}>
                    <div><img src={props.img6} alt="" /> </div><p>{props.p6}&nbsp;&gt;</p>
                </div>
                <div className={`${props.id}`}>
                    <div><img src={props.img7} alt="" /> </div><p>{props.p7}&nbsp;&gt;</p>
                </div>
            </div>
        </div>
    )
}

export default IconComp