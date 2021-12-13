import { useEffect, useRef } from 'react';

const Heading = () => {
    const bigHeading1 = useRef();
    const bigHeading2 = useRef();
    
    useEffect(() => {
        bigHeading1.current.style.fontSize = 'clamp(40px, 8vw, 80px)';
        bigHeading2.current.style.fontSize = 'clamp(40px, 8vw, 80px)';
    });
    return (
        <div className="pl-8 pt-4 pr-8 sm:pl-12 md:pl-40 lg:pl-48 md:pt-[100px] font-sans min-h-screen">
            <p className="font-mono sm:text-xl text-green">Hi, my name is</p>
            <h1 ref={bigHeading1} className=" font-bold text-slate-lightest">
                Kunga Tashi.
            </h1>
            <h2 ref={bigHeading2} className="font-bold text-slate">
                I am a web developer.
            </h2>
            <p className="text-slate text-[18px] max-w-lg">
                I’m a Computer Science student [ sophomore ] at NIT Raipur with
                a keen interest in web technologies. I specialize in building
                web applications and implementing pixel perfect UI to live
                code...
            </p>
        </div>
    );
};

export default Heading;
