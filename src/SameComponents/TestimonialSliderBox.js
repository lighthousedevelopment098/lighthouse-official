import React from "react";
export function TestimonialSliderBox({ img, name, comment, detail }) {
    return <>
        <img src={img} alt="" />
        <h3 className="fs-4">{name}</h3>
        <p>{detail}</p>
        <small>{comment}</small></>;
}
