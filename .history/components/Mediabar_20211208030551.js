import { faGithub, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Mediabar = () => {
    return (
        <div className="flex flex-col flex">
            <FontAwesomeIcon className="w-8 h-18 text-white" icon={faGithub} />
            <FontAwesomeIcon className="w-8 h-18 text-white" icon={faInstagram} />
            <FontAwesomeIcon className="w-8 h-18 text-white" icon={faTwitch} />
            <FontAwesomeIcon className="w-8 h-18 text-white" icon={faGithub} />
            <FontAwesomeIcon className="w-8 h-18 text-white" icon={faGithub} />
        </div>
    );
};

export default Mediabar;
