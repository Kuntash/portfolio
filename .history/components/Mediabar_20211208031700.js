import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitch,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Mediabar = () => {
    return (
        <div className="flex flex-col p-4 max-w-min gap-y-5">
            <FontAwesomeIcon
                className="transition duration-500 ease-in-out w-6 h-6 text-white hover:text-green hover:"
                icon={faGithub}
            />
            <FontAwesomeIcon
                className="w-6 h-6 text-white"
                icon={faInstagram}
            />
            <FontAwesomeIcon className="w-6 h-6 text-white" icon={faTwitter} />
            <FontAwesomeIcon className="w-6 h-6 text-white" icon={faLinkedin} />
        </div>
    );
};

export default Mediabar;
