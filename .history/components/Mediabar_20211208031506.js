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
        <div className="flex flex-col p-4 max-w-min gap-y-4">
            <FontAwesomeIcon
                className="w-6 h-6 text-white hover:text-green"
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
