import { faKorvue } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import CtaButton from '../Buttons/CtaButton';
import { gsap, Power3 } from 'gsap';
import { Bounce } from 'gsap';
const Navbar = () => {
    //useRef hook
    const [isOpen, setIsOpen] = useState(false);
    const navContainer = useRef();
    const icon = useRef();
    const hamburger = useRef();
    const tl = useRef();

    useEffect(() => {
        tl.current = gsap
            .timeline()
            .set(
                [
                    navContainer.current.children,
                    icon.current,
                    hamburger.current,
                ],
                { opacity: 0, y: -100 }
            )
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
                [hamburger.current, icon.current],
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: Bounce.easeOut,
                },
                0.5
            );
    }, []);
    const handleNavClick = () => {
        // If closed, then open animation
        // back to hamburger animation
        console.log(hamburger.current.children[2]);
        if (isOpen) {
            gsap.timeline()
                .to(hamburger.current, {
                    position: 'relative',
                    top: 0,
                    right: 0,
                })
                .to(
                    hamburger.current.children[0],
                    {
                        rotation: 0,
                        duration: 0.25,
                        y: 0,
                    },
                    0
                )
                .to(
                    hamburger.current.children[1],
                    {
                        opacity: 1,
                        duration: 0.25,
                    },
                    0
                )
                .to(
                    hamburger.current.children[2],
                    {
                        rotation: 0,
                        duration: 0.25,
                        y: 0,
                        width: 24,
                    },
                    0
                );

            gsap.to(navContainer.current, {
                duration: 0.25,
                x: 320,
            });
        } else {
            //cross animation
            gsap.timeline()
                .to(hamburger.current, {
                    position: 'fixed',
                    top: 40,
                    right: 40,
                })
                .to(
                    hamburger.current.children[0],
                    {
                        rotation: 135,
                        y: 10,
                        duration: 0.25,
                        transformOrigin: 'center',
                    },
                    0
                )
                .to(
                    hamburger.current.children[1],
                    {
                        opacity: 0,
                        duration: 0.25,
                    },
                    0
                )
                .to(
                    hamburger.current.children[2],
                    {
                        rotation: -135,
                        y: -10,
                        duration: 0.25,
                        width: 40,
                        transformOrigin: 'center',
                    },
                    0
                );
            gsap.to(navContainer.current, {
                duration: 0.25,
                x: 0,
            });
        }

        setIsOpen(!isOpen);
    };
    const navTitle = [
        { title: 'About', link: 'about' },
        { title: 'Projects', link: 'projects' },
        { title: 'Contact', link: 'contact' },
    ];
    return (
        <div className="shadow-customShadow w-full h-24 p-4 flex justify-between items-center transition">
            <a ref={icon} href="#">
                <FontAwesomeIcon
                    className=" h-10 w-10 ml-6 text-green"
                    icon={faKorvue}
                />
            </a>
            {/* Hamburger */}
            <div
                ref={hamburger}
                className="flex flex-col items-end mr-4 gap-y-2 z-[21] md:hidden backdrop-blur-xl"
                onClick={handleNavClick}
            >
                <div className="bg-green h-[2px] w-10 transition"></div>
                <div className="bg-green h-[2px] w-8 transition"></div>
                <div className="bg-green h-[2px] w-6 transition"></div>
            </div>
            <div
                ref={navContainer}
                className="flex flex-col min-w-[320px] justify-around bg-navy-light md:bg-transparent fixed top-0 right-0 h-full md:relative md:flex-row items-center transition z-20 translate-x-[320px] md:translate-x-0 backdrop-blur-xl"
            >
                {/* Different Nav tabs or titles  */}
                {navTitle.map((el, i) => (
                    <a
                        key={i}
                        className="mr-8 md:text-sm font-mono font-bold tracking-widest"
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
