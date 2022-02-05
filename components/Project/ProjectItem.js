import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
//TODO:
const ProjectItem = ({ project }) => {
    const { imageSrc, title, description, techList, repoLink, liveSiteLink } =
        project;
    return (
        <div className="group grid grid-cols-12 mt-8 md:mt-12 ">
            {/*Profile Container for changing resizing based on viewport */}
            <div className="my-profile-container md:group-even:col-start-7 md:group-even:col-end-13 md:row-start-1 md:row-end-7 group-odd:md:col-start-1 group-odd:md:col-end-7 xl:max-w-[700px] shadow-customShadow relative">
                {/* Profile Image */}
                <img
                    src={imageSrc}
                    className="my-profile rounded-lg relative"
                    alt=""
                />

                {/* Profile Overlay Green */}
                <div className="profile-overlay"></div>
            </div>
            {/* Project Description */}
            <div className="md:text-left md:group-odd:text-right md:col-start-1 md:col-end-8 md:row-start-1 md:row-end-7 md:group-odd:col-start-6 md:group-odd:col-end-13 z-10">
                <h2 className="text-green font-mono font-bold text-sm tracking-widest mb-2">
                    Project Name
                </h2>
                <a
                    href={repoLink}
                    className="font-sans font-bold text-slate-lightest hover:text-green text-[25px] mb-4 inline-block"
                >
                    {title}
                </a>
                <div className="py-4 px-8 shadow-customShadow bg-navy-light  rounded-card">
                    <p className="text-slate text-[17px]">{description}</p>
                </div>
                <ul
                    className="py-6 flex md:group-even:justify-start md:justify-end text-slate text-[14px]
        tracking-widest font-semibold gap-x-8"
                >
                    {techList.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div className="flex md:group-even:justify-start md:justify-end gap-x-8 items-center">
                    <a href={repoLink} target="_blank">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="transform transition duration-250 ease-out w-6 h-6 text-slate-light hover:text-green cursor-pointer"
                        />
                    </a>
                    <a href={liveSiteLink} target="_blank">
                        <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="transform transition duration-250 ease-out w-6 h-6 text-slate-light hover:text-green cursor-pointer"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
