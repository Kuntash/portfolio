import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Mediabar = () => {
    return (
        <div>
            <div>
                <FontAwesomeIcon className="h-10 w-5" icon={faGithub} />
            </div>
        </div>
    );
};

export default Mediabar;
