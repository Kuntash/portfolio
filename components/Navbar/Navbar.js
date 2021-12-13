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
                {/* <FontAwesomeIcon
                    rel={icon}
                    className=" h-10 w-10 ml-6 text-green"
                    icon={faKorvue}
                /> */}
                <svg
                    rel={icon}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="korvue"
                    className="svg-inline--fa fa-korvue fa-w-14  h-10 w-10 ml-6 text-green"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 446 512"
                >
                    <path
                        fill="currentColor"
                        d="M386.5 34h-327C26.8 34 0 60.8 0 93.5v327.1C0 453.2 26.8 480 59.5 480h327.1c33 0 59.5-26.8 59.5-59.5v-327C446 60.8 419.2 34 386.5 34zM87.1 120.8h96v116l61.8-116h110.9l-81.2 132H87.1v-132zm161.8 272.1l-65.7-113.6v113.6h-96V262.1h191.5l88.6 130.8H248.9z"
                    ></path>
                </svg>
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
