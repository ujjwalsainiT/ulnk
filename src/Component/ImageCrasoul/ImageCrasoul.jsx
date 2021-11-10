import React from 'react'
import "./ImageCrasoul.css";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";
function ImageCrasoul() {
    return (
        <>
            <div className="image-rotator hi-slide">
                <div className="hi-prev "></div>
                <div className="hi-next "></div>
                <ul>
                    <li><img src={c1} alt="" /></li>
                    <li><img src={c2} alt="" /></li>
                    <li><img src={c3} alt="" /></li>
                    <li><img src={c4} alt="" /></li>
                    <li><img src={c5} alt="" /></li>
                    <li><img src={c4} alt="" /></li>
                    <li><img src={c5} alt="" /></li>
                    <li><img src={c4} alt="" /></li>
                    <li><img src={c5} alt="" /></li>
                </ul>

            </div>

        </>
    )
}

export default ImageCrasoul
