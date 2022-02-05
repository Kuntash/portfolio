import { faKorvue } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import CtaButton from '../Buttons/CtaButton';
import { gsap } from 'gsap';
import { Bounce } from 'gsap';
const Navbar = () => {
    //useRef hook
    const navContainer = useRef();
    const icon = useRef();
    const tl = useRef();

    useEffect(() => {
        tl.current = gsap
            .timeline()
            .set(navContainer.current.children, { opacity: 0, y: -100 })
            .set(icon.current, { opacity: 0, y: -100 })
            .to(
                navContainer.current.children,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: Bounce.easeOut,
                    stagger: 0.2,
                },
                0.5
            )
            .to(
                icon.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: Bounce.easeOut,
                },
                0.5
            );
    }, []);

    const navTitle = [
        { title: 'About', link: 'about' },
        { title: 'Projects', link: 'projects' },
        { title: 'Contact', link: 'contact' },
    ];
    return (
        <div
            className={`shadow-customShadow w-full h-24 p-4 md:flex hidden md:justify-between md:items-center transition `}
        >
            <a ref={icon} href="#">
                <FontAwesomeIcon
                    className=" h-10 w-10 ml-6 text-green"
                    icon={faKorvue}
                />
            </a>
            <div ref={navContainer} className="flex items-center transition">
                {/* Different Nav tabs or titles  */}
                {navTitle.map((el, i) => (
                    <a
                        key={i}
                        className="mr-8 text-sm font-mono font-bold tracking-widest"
                        href={`#${el.link}`}
                    >
                        <span className="text-green mr-2">{`0${i + 1}.`}</span>
                        <span className=" text-slate-light hover:text-green">
                            {el.title}
                        </span>
                    </a>
                ))}

                {/* Resume button */}
                <CtaButton
                    title="Resume"
                    padding="px-4 py-2"
                    link="./files/resume.pdf"
                />
            </div>
        </div>
    );
};

export default Navbar;