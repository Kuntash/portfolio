const EmailBar = () => {
    const emailRotate = {
        writingMode: 'vertical-rl',
    };
    return (
        <div className="md:fixed md:bottom-0 md:right-6 lg:right-10 max-w-min gap-y-8 flex md:flex-col p-2 md:gap-y-8 gap-x-5">
            <div
                style={{ ...emailRotate }}
                className="font-mono font-medium text-slate-light tracking-widest transform transition duration-250 ease-out hover:text-green hover:-translate-y-1 cursor-pointer"
            >
                kuntashtashi11@gmail.com
            </div>
            <div className="self-center hidden md:flex h-20 w-[2px] bg-slate-light"></div>
        </div>
    );
};

export default EmailBar;
