import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitch,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Mediabar = () => {
    const media = [
        { icon: faGithub, link: 'https://github.com/Kuntash' },
        { icon: faInstagram, link: 'https://www.instagram.com/kun_tash/' },
        { icon: faTwitter, link: 'https://twitter.com/KuntashTweets' },
        { icon: faLinkedin, link: 'https://www.linkedin.com/in/kunga-tashi/' },
    ];
    return (
        <div className="md:fixed md:bottom-0 md:left-6 lg:left-10 max-w-min gap-y-8 flex md:flex-col p-2 md:gap-y-8 gap-x-5">
            {media.map((handle, i) => {
                return (
                    <a key={i} href={handle.link}>
                        <FontAwesomeIcon
                            className="transform transition duration-250 ease-out w-6 h-6 text-slate-light hover:text-green hover:-translate-y-0.5 cursor-pointer"
                            icon={handle.icon}
                        />
                    </a>
                );
            })}
            <div className="self-center hidden md:flex h-20 w-[2px] bg-slate-light"></div>
        </div>
    );
};

export default Mediabar;
