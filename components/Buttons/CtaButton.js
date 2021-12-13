const CtaButton = ({ title, padding }) => {
    return (
        <button
            className={`border-2 flex items-center hover:bg-green-light ${padding} border-green rounded-md`}
        >
            <a href="/resume.pdf" className="text-green ">
                {title}
            </a>
        </button>
    );
};

export default CtaButton;
