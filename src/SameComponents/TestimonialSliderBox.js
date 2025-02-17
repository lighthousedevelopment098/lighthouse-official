import React from "react";

const TestimonialSliderBox = React.memo(({ img, name, comment, detail }) => {
    return (
        <>
            <img 
                src={img} 
                alt={name} 
                loading="lazy"
                className="w-full h-auto rounded-full mb-4"
            />
            <h3 className="fs-4 font-semibold">{name}</h3>
            <p className="text-gray-600">{detail}</p>
            <small className="text-gray-800">{comment}</small>
        </>
    );
});

export { TestimonialSliderBox };
