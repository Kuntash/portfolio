import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitch,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const media = [
    { icon: faGithub, link: 'https://github.com/Kuntash' },
    { icon: faInstagram, link: 'https://www.instagram.com/kun_tash/' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/kunga-tashi/' },
    { icon: faTwitter, link: 'https://twitter.com/KuntashTweets' },
];
const Mediabar = () => {
    return (
        <div className="flex flex-col p-4 max-w-min gap-y-5">
            {media.forEach((handle) => 
                return <a href={handle.link}>
                    <FontAwesomeIcon
                        className="transform transition duration-250 ease-out w-6 h-6 text-white hover:text-green hover:-translate-y-0.5 cursor-pointer"
                        icon={handle.icon}
                    />
                </a>
            ))}
        </div>
    );
};

export default Mediabar;
