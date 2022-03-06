import React, { useEffect, useRef } from 'react';
import Title from '../Title';
import ProjectItem from './ProjectItem';
import { projectData } from './projectData';
import gsap, { Power2 } from 'gsap';
const fromAnimation = () => {
    return {
        opacity: 0,
        y: 200,
        duration: 0.2,
        ease: Power2.easeOut,
        stagger: 0.2,
        delay: 0,
    };
};

const toAnimation = (el) => {
    return {
        scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: 'top bottom',
            end: 'top center',
            markers: true,
        },
        opacity: 1,
        y: 0,
    };
};
const Project = () => {
    const projectHeading = useRef();
    const projectItem = useRef();
    const projectItemContainer = useRef();
    const projectContainer = useRef();
    let tl = useRef();
    useEffect(() => {
        tl.current = gsap.timeline();

        let projectScrollTrigger;
        projectScrollTrigger = gsap.fromTo(
            projectHeading.current,
            fromAnimation(),
            toAnimation(projectHeading.current)
        );
        tl.current.add(projectScrollTrigger);
        console.log(typeof projectItemContainer.current.children);
        Array.from(projectItemContainer.current.children).forEach((el) => {
            projectScrollTrigger = gsap.fromTo(
                el,
                fromAnimation(),
                toAnimation(el)
            );
            tl.current.add(projectScrollTrigger);
        });
    }, []);
    return (
        <div
            ref={projectContainer}
            className="flex flex-col md:px-8 lg:px-12 xl:px-20 mb-8 "
        >
            {/* Heading: Projects */}
            <Title ref={projectHeading} id="02." heading="Personal Projects" />
            <div ref={projectItemContainer} className="flex flex-col gap-y-12">
                {projectData.map((project, index) => (
                    <ProjectItem
                        ref={projectItem}
                        key={index}
                        project={project}
                    />
                ))}
            </div>
            {/* Projects list */}
        </div>
    );
};

export default Project;
