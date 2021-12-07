import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitch,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const media = [{ icon: faGithub, link: 'https://github.com/Kuntash' }, {icon: faInstagram, link: "https://www.instagram.com/kun_tash/"}, {icon: fa}];
const Mediabar = () => {
    return (
        <div className="flex flex-col p-4 max-w-min gap-y-5">
            <a href="https://github.com/Kuntash">
                <FontAwesomeIcon
                    className="transform transition duration-250 ease-out w-6 h-6 text-white hover:text-green hover:-translate-y-0.5 cursor-pointer"
                    icon={faGithub}
                />
            </a>
            <a href="https://github.com/Kuntash">
                <FontAwesomeIcon
                    className="transform transition duration-250 ease-out w-6 h-6 text-white hover:text-green hover:-translate-y-0.5 cursor-pointer"
                    icon={faGithub}
                />
            </a>
            <a href="https://github.com/Kuntash">
                <FontAwesomeIcon
                    className="transform transition duration-250 ease-out w-6 h-6 text-white hover:text-green hover:-translate-y-0.5 cursor-pointer"
                    icon={faGithub}
                />
            </a>
            <a href="https://github.com/Kuntash">
                <FontAwesomeIcon
                    className="transform transition duration-250 ease-out w-6 h-6 text-white hover:text-green hover:-translate-y-0.5 cursor-pointer"
                    icon={faGithub}
                />
            </a>
        </div>
    );
};

export default Mediabar;
