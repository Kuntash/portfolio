import gsap, { Power3 } from 'gsap';
import { useEffect, useRef } from 'react';
import CtaButton from '../Buttons/CtaButton';

const Heading = () => {
    //For font clamping instead of media query adjustment
    const bigHeading1 = useRef();
    const bigHeading2 = useRef();

    useEffect(() => {
        bigHeading1.current.style.fontSize = 'clamp(40px, 8vw, 80px)';
        bigHeading2.current.style.fontSize = 'clamp(40px, 8vw, 80px)';
    });

    //using useRef() for gsap animation of headers
    const headingContainer = useRef();

    //timeline
    const tl = useRef();
    useEffect(() => {
        tl = gsap
            .timeline()
            .set(headingContainer.current.children, { opacity: 0, y: 100 })
            .to(
                headingContainer.current.children,
                {
                    opacity: 1,
                    y: 0,
                    ease: Power3.easeOut,
                    duration: 1,
                    stagger: 0.3,
                },
                1
            );
    });
    return (
        <div
            ref={headingContainer}
            className="pl-8 pt-4 pr-8 sm:pl-12 md:pl-40 lg:pl-48 md:pt-[100px] font-sans min-h-screen"
        >
            <p className="font-mono sm:text-xl text-green">Hi, my name is</p>
            <h1 ref={bigHeading1} className=" font-bold text-slate-lightest">
                Kunga Tashi.
            </h1>
            <h2 ref={bigHeading2} className="font-bold text-slate">
                I am a web developer.
            </h2>
            <p className="text-slate text-[18px] max-w-lg mb-4">
                I’m a Computer Science student [ sophomore ] at NIT Raipur with
                a keen interest in web technologies. I specialize in building
                web applications and implementing pixel perfect UI to live
                code...
            </p>
            <CtaButton
                title="Chat with me!!"
                padding="px-4 py-2 md:px-8 md:py-4"
            />
        </div>
    );
};

export default Heading;
