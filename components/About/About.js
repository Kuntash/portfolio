const About = () => {
    return (
        <div className="flex flex-col md:px-52 md:pt-12 text-center ">
            <h1 className="font-sans font-bold flex items-center">
                <span className="text-green mr-4 md:text-2xl">01.</span>
                <span className="text-slate-lightest md:text-3xl mr-4">
                    About Me
                </span>
                <div className="w-60 h-[1px] bg-navy-lightest "></div>
            </h1>
            <div className="flex md:mt-8 gap-x-12">
                <div className="">
                    <p className="text-left text-slate text-[18px]">
                        Hey there!! Thanks for visiting my portfolio, let my
                        start by telling you a bit about me. My name is Kunga
                        Tashi and I am sophomore at NIT Raipur doing B.Tech in
                        Computer Science.
                    </p>
                    <p className="text-left text-slate text-[18px]">
                        Fast-forward to today, and I’ve had the privilege of
                        working at an advertising agency, a start-up, a huge
                        corporation, and a student-led design studio. My main
                        focus these days is building accessible, inclusive
                        products and digital experiences at Upstatement for a
                        variety of clients.
                    </p>
                    <p className="text-left text-slate text-[18px]">
                        I also recently launched a course that covers everything
                        you need to build a web app with the Spotify API using
                        Node & React. Here are a few technologies I’ve been
                        working with recently:
                    </p>
                </div>
                <div className="my-profile-container relative">
                    <div className="profile-border ease-in-out duration-500 absolute w-full h-full border-2 border-green rounded-lg top-5 left-5"></div>
                    <div className=" absolute w-full h-full bg-green hover:bg-transparent my-profile"></div>
                </div>
            </div>
        </div>
    );
};

export default About;
