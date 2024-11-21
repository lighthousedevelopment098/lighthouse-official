import React from "react";

export function PersonalInfo({ icon, location, info }) {
    return (
        <>

            <i className={icon}></i>
            <h4>{location}</h4>
            <p style={{ color: "black" }}>{info}</p>


        </>
    )
}
