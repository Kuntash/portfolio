import React, { forwardRef } from 'react';
const Title = forwardRef((props, ref) => {
    return (
        <h1 ref={ref} className="font-sans font-bold flex items-center">
            <span className="about-me-heading text-green mr-4 md:text-2xl">
                {props.id}
            </span>
            <span className="about-me-heading text-slate-lightest md:text-3xl mr-4">
                {props.heading}
            </span>
            <div className=" w-[22vw] h-[1px] bg-navy-lightest "></div>
        </h1>
    );
});

export default Title;
