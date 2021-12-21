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
                        Hello! My name is Brittany and I enjoy creating things
                        that live on the internet. My interest in web
                        development started back in 2012 when I decided to try
                        editing custom Tumblr themes — turns out hacking
                        together a custom reblog button taught me a lot about
                        HTML & CSS!
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
                <div className=" rounded-lg grow-0 shrink-0 h-[300px] basis-[300px] bg-[url('../../public/images/profile-square-300.png')] bg-green bg-blend-multiply hover:bg-transparent relative"></div>
            </div>
        </div>
    );
};

export default About;
