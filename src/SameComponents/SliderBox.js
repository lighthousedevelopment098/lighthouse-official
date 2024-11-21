import React from "react";
export function SliderBox({ singleObj }) {
    return <div className="sliderBox position-relative">
        <div className="overly">
            <h4 style={{ fontSize: '18px' }} >{singleObj.name}</h4>
            <small style={{ fontSize: '15px', fontWeight: '200' }}>{singleObj.job}</small>
        </div>
        <img src={singleObj.img} alt="" />
    </div>;
}
