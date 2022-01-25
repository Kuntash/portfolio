const Title = ({ id, heading }) => {
    return (
        <h1 className="font-sans font-bold flex items-center">
            <span className="about-me-heading text-green mr-4 md:text-2xl">
                {id}
            </span>
            <span className="about-me-heading text-slate-lightest md:text-3xl mr-4">
                {heading}
            </span>
            <div className=" w-[22vw] h-[1px] bg-navy-lightest "></div>
        </h1>
    );
};

export default Title;
