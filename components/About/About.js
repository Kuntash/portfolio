//TODO:
/*
    1: Check for links and make a link section 
    2: Make the component responsive
    3: Add animation and make it scrubbable using gsap3
*/
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap, { Power2 } from 'gsap';
import { useEffect, useRef } from 'react';
import Title from '../Title';
import { skillList } from './skillList';
const About = () => {
  const aboutSection = useRef();
  const aboutHeading = useRef();
  const aboutParagraph = useRef();
  const aboutImage = useRef();
  let tl = useRef();

  // Animation section
  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection.current,
        scrub: 1,
      },
    });

    const aboutScrollTrigger = gsap.fromTo(
      [aboutHeading.current, aboutImage.current, aboutParagraph.current],

      {
        opacity: 0,
        y: 200,
        duration: 0.2,
        ease: Power2.easeOut,
        stagger: 0.2,
        delay: 0,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
    tl.current.add(aboutScrollTrigger);
    // tl.current.add(imageScrollTrigger, '+=0.2');
  }, []);
  return (
    <div
      ref={aboutSection}
      className="flex flex-col md:px-8 lg:px-12 xl:px-20 text-center mb-32"
    >
      {/* Heading: ABOUT ME part */}
      <a id="about"></a>
      <Title ref={aboutHeading} id="01." heading="About Me" />

      {/* Paragraph and Profile Container */}
      <div className="block md:grid md:justify-center md:grid-cols-2 mt-8 md:mt-12 lg:gap-x-8 xl:gap-x-12">
        {/* Paragraph Container */}
        <div
          ref={aboutParagraph}
          className="flex flex-col gap-y-4 mb-8 md:mb-0"
        >
          <p className="text-left text-slate text-base">
            Hey there!! Thanks for visiting my portfolio, let me start by
            telling a bit about me. My name is Kunga Tashi and I am a final year
            student at
            {/* FIXME: Link here to www.nitrr.ac.in */} NIT Raipur doing B.Tech
            in Computer Science.
          </p>
          <p className="text-left text-slate text-base">
            Till now I have interned at two companies for a period of 9 months
            and have also received a full time offer as Frontend Engineer in my
            third year. Its been almost a year now working full time and
            managing studies and I have learned a lot along the way. I love to
            craft user experiences that are pixel perfect, responsive,
            accessible and performant.
          </p>
          <p className="text-left text-slate text-base">
            Following are the languages and tech I have used to make projects
            and have experience with:
          </p>
          {/* TODO: Make a bullet point list of different tech stacks */}
          <ul className="grid grid-cols-2 gap-2">
            {skillList.map((skill, i) => (
              <li key={i} className="flex justify-start gap-2 items-center">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="w-4 h-4 text-green"
                />
                <span className="text-slate text-sm">{skill}</span>
              </li>
            ))}
          </ul>
          {/* TODO: Share a list of all the things you will be doing in 2022, different ideas, course you will be following etc */}
        </div>

        {/* About Me: | Profile | */}
        <div className="flex justify-center items-start">
          {/*Profile Container for changing resizing based on viewport */}
          <div
            ref={aboutImage}
            className="my-profile-container relative xl:max-w-[300px] xl:max-h-[300px] md:max-w-[250px] md:max-h-[250px] max-h-[80vw] max-w-[80vw]"
          >
            {/* Border Animation Component */}
            <div className="profile-border ease-in-out duration-500 absolute w-full h-full border-2 border-green rounded-lg sm:top-5 sm:left-5 top-3 left-3"></div>

            {/* Profile Image */}
            <img
              src="images/profile-square-300.png"
              className="my-profile rounded-lg relative"
              alt=""
            />

            {/* Profile Overlay Green */}
            <div className="profile-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
