import Emailbar from '../FixedComponents/EmailBar';
import Mediabar from '../FixedComponents/Mediabar';

const Footer = () => {
    return (
        <div className="pb-4 p-4 flex items-center flex-col justify-center gap-y-2 sm:gap-y-4">
            <Mediabar />
            <Emailbar />
            <p className="text-center text-sm sm:text-base font-mono md:hidden font-medium text-slate-light">
                Built using Next.js by Kunga Tashi
            </p>
        </div>
    );
};

export default Footer;
