import { faKorvue } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useEffect, useRef, useState } from 'react';
import CtaButton from '../Buttons/CtaButton';
import { gsap } from 'gsap';
import { Bounce } from 'gsap';
// import styles from './Navbar.module.css';
// Navbar animation: When scrolled up the navbar will show the nav other wise hide it

const Navbar = () => {
    //useRef hook
    const [navStyle, setNavStyle] = useState({
        position: 'unset',
        boxShadow: 'none',
    });
    const navContainer = useRef();
    const icon = useRef();
    const tl = useRef();

    useEffect(() => {
        // gsap.from(descendents)
        console.log(icon);
        tl.current = gsap
            .timeline()
            .from(
                navContainer.current.children,
                {
                    opacity: 0,
                    y: -100,
                    duration: 1,
                    ease: Bounce.easeOut,
                    stagger: 0.2,
                },
                1
            )
            .from(icon.current, {
                y: -100,
                duration: 1,
                ease: Bounce.easeOut,
            });
    });

    const navTitle = [
        { title: 'About', link: 'about' },
        { title: 'Projects', link: 'projects' },
        { title: 'Contact', link: 'contact' },
    ];
    // Stick navigation
    return (
        <div
            style={{ ...navStyle }}
            className={`w-full h-24 p-4 sm:flex hidden sm:justify-between sm:items-center`}
        >
            <a href="#">
                <FontAwesomeIcon
                    rel={icon}
                    className=" h-10 w-10 ml-6 text-green"
                    icon={faKorvue}
                />
            </a>
            <div ref={navContainer} className="flex items-center">
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
                <CtaButton title="Resume" padding="px-4 py-2" />
            </div>
        </div>
    );
};

export default Navbar;
