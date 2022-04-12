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
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/kunga-tashi/' },
    { icon: faTwitter, link: 'https://twitter.com/KuntashTweets' },
    { icon: faInstagram, link: 'https://www.instagram.com/kun_tash/' },
  ];
  return (
    <div className="md:fixed md:bottom-0 md:left-6 lg:left-10 md:gap-y-8 max-w-min gap-x-10 sm:gap-x-12 flex md:flex-col pb-2">
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
