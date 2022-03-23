import gsap, { Power3 } from 'gsap';
import { useEffect, useRef } from 'react';
import Emailbar from '../FixedComponents/EmailBar';
import Mediabar from '../FixedComponents/Mediabar';

const Footer = () => {
    const footerContainer = useRef();
    const tl = useRef();
    useEffect(() => {
        tl = gsap
            .timeline()
            .set(footerContainer.current.children, { opacity: 0, y: 100 })
            .to(
                footerContainer.current.children,
                { opacity: 1, y: 0, duration: 2, ease: Power3.easeOut },
                0.5
            );
    });
    return (
        <div
            ref={footerContainer}
            className="pb-4 flex items-center flex-col justify-center gap-y-2 sm:gap-y-4"
        >
            <Mediabar />
            <Emailbar />
            <p className="text-center text-sm sm:text-base font-mono hidden md:block font-medium text-slate-light">
                Built using Next.js by Kunga Tashi
            </p>
            <p className="text-center text-sm sm:text-base font-mono hidden md:block font-medium text-slate-light">
                Design Inspiration:
                {/* TODO: Create a link component here */}
                <a href="http://www.brittanychiang.com" target="_blank">
                    Brittany Chiang
                </a>
            </p>
        </div>
    );
};

export default Footer;
