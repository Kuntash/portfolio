import { useEffect, useState } from 'react';

const EmailBar = () => {
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsSmall(window.matchMedia('(max-width: 768px)').matches);
            };
            window.addEventListener('resize', handleResize);

            return function cleanup() {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [isSmall]);

    return (
        <div className="md:fixed md:bottom-0 md:right-6 lg:right-10 max-w-min gap-y-8 flex md:flex-col md:gap-y-8 gap-x-5">
            <div
                style={{
                    writingMode: isSmall ? 'horizontal-tb' : 'vertical-rl',
                }}
                className="text-sm sm:text-base font-mono font-medium text-slate-light tracking-widest transform transition duration-250 ease-out hover:text-green hover:-translate-y-1 cursor-pointer"
            >
                kuntashtashi11@gmail.com
            </div>
            <div className="self-center hidden md:flex h-20 w-[2px] bg-slate-light"></div>
        </div>
    );
};

export default EmailBar;
