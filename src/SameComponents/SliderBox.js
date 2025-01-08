// import React from "react";
// export function SliderBox({ singleObj }) {
//     return <div className="sliderBox position-relative">
//         <div className="overly">
//             <h4 style={{ fontSize: '20px', textTransform:'uppercase' }} >{singleObj.name}</h4>
//             <small style={{ fontSize: '15px', fontWeight: '400'  ,textTransform:'uppercase'}}>{singleObj.job}</small>
//         </div>
//         <img src={singleObj.img} alt="" style={{height:'400px',width:'400px'}} />
//     </div>;
// }


import React from "react";

export function SliderBox({ singleObj }) {
    return (
        <div className="sliderBox position-relative overflow-hidden" style={{ borderRadius: '30px' }}>
            {/* Overlay */}
            <div className="overly">
                <h4 style={{ fontSize: '20px', textTransform: 'uppercase', marginBottom: '5px' }}>
                    {singleObj.name}
                </h4>
                <small
                    style={{
                        fontSize: '14px',
                        // fontWeight: '500',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >
                    {singleObj.job}
                </small>
            </div>
            {/* Image */}
            <img
                src={singleObj.img}
                alt={singleObj.name}
                style={{
                    height: '400px',
                    width: '400px',
                    borderRadius: '30px',
                    objectFit: '',
                    transition: 'transform 0.5s',
                }}
                className="hover-zoom"
            />
        </div>
    );
}