import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Project = () => {
    return (
        <div className="grid grid-cols-12 mt-8 md:mt-12">
            {/*Profile Container for changing resizing based on viewport */}
            <div className="my-profile-container col-start-1 col-end-8 row-start-1 row-end-7 xl:max-w-[700px] shadow-customShadow relative">
                {/* Profile Image */}
                <img
                    src="images/project-bookstore.png"
                    className="my-profile rounded-lg relative"
                    alt=""
                />

                {/* Profile Overlay Green */}
                <div className="profile-overlay"></div>
            </div>
            {/* Project Description */}
            <div className="text-right col-start-7 col-end-13 row-start-1 row-end-7 z-10">
                <h2 className="text-green font-mono font-bold text-sm tracking-widest mb-2">
                    Project Name
                </h2>
                <a
                    href="https://kuntash.github.io/Bookstore/"
                    className="font-sans font-bold text-slate-lightest hover:text-green text-[25px] mb-4 inline-block"
                >
                    Book Store
                </a>
                <div className="py-4 px-8 shadow-customShadow bg-navy-light  rounded-card">
                    <p className="text-slate text-[17px]">
                        A Modern UI of a Book store landing page made using
                        HTML5, and CSS3 and SASS. Best Industry practices such
                        as BEM class notation, First Contentful Paint etc.
                    </p>
                </div>
                <ul
                    className="py-6 flex justify-end text-slate text-[14px]
        tracking-widest font-semibold gap-x-8"
                >
                    <li>HTML5</li>
                    <li>SASS</li>
                    <li>CSS3</li>
                    <li>BEM</li>
                </ul>
                <div className="flex justify-end gap-x-8 items-center">
                    <a
                        href="https://github.com/Kuntash/Bookstore"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="transform transition duration-250 ease-out w-6 h-6 text-slate-light hover:text-green cursor-pointer"
                        />
                    </a>
                    <a
                        href="https://kuntash.github.io/Bookstore/"
                        target="_blank"
                    >
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

export default Project;
