// TODO: Chat with me button should link to email

import gsap, { Power3 } from 'gsap';
import { useEffect, useRef } from 'react';
import CtaButton from '../Buttons/CtaButton';

const Heading = () => {
  //using useRef() for gsap animation of headers
  const headingContainer = useRef();

  //timeline
  const tl = useRef();
  useEffect(() => {
    tl = gsap
      .timeline()
      .set(headingContainer.current.children, { opacity: 0, y: 100 })
      .to(
        headingContainer.current.children,
        {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          duration: 1,
          stagger: 0.3,
        },
        1
      );
  }, []);
  return (
    <div
      ref={headingContainer}
      className="w-full md:px-16 lg:px-20 pt-4 md:pt-[100px] font-sans md:mb-32 mb-20"
    >
      <p className="font-mono sm:text-xl text-green">Hi, my name is</p>
      <h1 className="heading font-bold text-slate-lightest">Kunga Tashi.</h1>
      <h2 className="heading font-bold text-slate">I am a web developer.</h2>
      <p className="text-slate text-base max-w-lg mb-8">
        I’m a final year Computer Science student at NIT Raipur with a keen
        interest in web technologies. I specialize in building web applications
        and implementing pixel perfect UI to live code...
      </p>
      <CtaButton
        title="Chat with me!!"
        css="mx-4 my-2 md:mx-8 md:my-4"
        link="https://www.linkedin.com/in/kunga-tashi/"
      />
    </div>
  );
};

export default Heading;
