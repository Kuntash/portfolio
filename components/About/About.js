//TODO:
/*
    1: Check for links and make a link section 
    2: Make the component responsive
    3: Add animation and make it scrubbable using gsap3
*/
import gsap, { Power2, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Title from '../Title';

gsap.registerPlugin(ScrollTrigger);
const About = () => {
    const aboutSection = useRef();
    const aboutHeading = useRef();
    const aboutParagraph = useRef();
    const aboutImage = useRef();
    let tl = useRef();

    // Animation section
    useEffect(() => {
        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSection.current,
                scrub: 1,
            },
        });

        const aboutScrollTrigger = gsap.fromTo(
            [aboutHeading.current, aboutImage.current, aboutParagraph.current],

            {
                opacity: 0,
                y: 200,
                duration: 0.2,
                ease: Power2.easeOut,
                stagger: 0.2,
                delay: 0,
            },
            {
                opacity: 1,
                y: 0,
            }
        );
        tl.current.add(aboutScrollTrigger);
        // tl.current.add(imageScrollTrigger, '+=0.2');
    }, []);
    return (
        <div
            ref={aboutSection}
            className="flex flex-col md:px-8 lg:px-12 xl:px-20 text-center mb-32"
        >
            {/* Heading: ABOUT ME part */}
            <Title ref={aboutHeading} id="01." heading="About Me" />

            {/* Paragraph and Profile Container */}
            <div className="block md:grid md:justify-center md:grid-cols-2 mt-8 md:mt-12 lg:gap-x-8 xl:gap-x-12">
                {/* Paragraph Container */}
                <div ref={aboutParagraph} className="flex flex-col gap-y-4">
                    <p className="text-left text-slate text-[18px]">
                        Hey there!! Thanks for visiting my portfolio, let me
                        start by telling a bit about me. My name is Kunga Tashi
                        and I am sophomore at
                        {/* FIXME: Link here to www.nitrr.ac.in */} NIT Raipur
                        doing B.Tech in Computer Science.
                    </p>
                    <p className="text-left text-slate text-[18px]">
                        Talking about my experiences with the modern web. I
                        learned HTML and CSS in 2017 when I was in my high
                        school but lost the touch for about 2 years. But in my
                        1st year as an undergrad, I thought of diving once again
                        into the world of web and it clicked this time. While
                        Covid was spreading all around, I learned different
                        parts of web while making simple projects which are in
                        the
                        {/* FIXME: internal link to "archive section" */}{' '}
                        archive section.
                    </p>
                    <p className="text-left text-slate text-[18px]">
                        Over a span of 2 years or so, I have accumulated
                        different skills and experimented with different
                        library, frameworks and languages. Following are the
                        languages and tech I have used to make projects and have
                        experience with:
                    </p>
                    {/* TODO: Make a bullet point list of different tech stacks */}
                    {/* TODO: Share a list of all the things you will be doing in 2022, different ideas, course you will be following etc */}
                </div>

                {/* About Me: | Profile | */}
                <div className="flex justify-center items-start">
                    {/*Profile Container for changing resizing based on viewport */}
                    <div
                        ref={aboutImage}
                        className="my-profile-container relative xl:max-w-[300px] xl:max-h-[300px] md:max-w-[250px] md:max-h-[250px] max-h-[80vw] max-w-[80vw]"
                    >
                        {/* Border Animation Component */}
                        <div className="profile-border ease-in-out duration-500 absolute w-full h-full border-2 border-green rounded-lg sm:top-5 sm:left-5 top-3 left-3"></div>

                        {/* Profile Image */}
                        <img
                            src="images/profile-square-300.png"
                            className="my-profile rounded-lg relative"
                            alt=""
                        />

                        {/* Profile Overlay Green */}
                        <div className="profile-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
