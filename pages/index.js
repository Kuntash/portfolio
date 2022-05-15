import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Heading from '../components/Heading/Heading';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Project from '../components/Project/Project';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

/*

    // TODO: Create a link component with underline and all
    // TODO: Create a list component to display skills
    // TODO: Create a minor project component that can be arranged in grid
    // TODO: Get connected section after minor project and link t upwork
    // TODO: Expose a link to upwork account 
    // TODO: Remove the scroll markers
*/
const Index = () => {
  return (
    <div className="bg-navy ">
      {/* Head component for NEXT.JS */}
      <Head>
        <title> Kunga Tashi </title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/*FIXME: Change the padding media query to clamp()  */}
      <div className="max-w-full w-screen flex flex-col xl:px-[150px] lg:px-[100px] md:px-[50px] sm:px-[25px] px-[20px]">
        <Heading />
        <About />
        <Project />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
