import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Mediabar = () => {
    return (
        <div className="flex fle">
            <FontAwesomeIcon className="w-8 h-18 text-white" icon={faGithub} />
            <FontAwesomeIcon className="w-8 h-18 text-white" icon={faGithub} />
            <FontAwesomeIcon className="w-8 h-18 text-white" icon={faGithub} />
            <FontAwesomeIcon className="w-8 h-18 text-white" icon={faGithub} />
            <FontAwesomeIcon className="w-8 h-18 text-white" icon={faGithub} />
        </div>
    );
};

export default Mediabar;
