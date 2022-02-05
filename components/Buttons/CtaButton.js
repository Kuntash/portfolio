const CtaButton = ({ title, padding, link }) => {
    return (
        <button
            className={`border-2 flex items-center hover:bg-green-light ${padding} border-green rounded-md`}
        >
            <a href={link} className="text-green ">
                {title}
            </a>
        </button>
    );
};

export default CtaButton;
