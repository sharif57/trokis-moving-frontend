// import Banner from "../components/Home/Banner";
// import Contact from "../components/Home/Contact";
// import HowWorks from "../components/Home/HowWorks";
// import Testimonial from "../components/Home/Testimonial";
// import WhyTrokis from "../components/Home/WhyTrokis";

// export default function Home() {

//   return (
//     <div className="space-y-10">
//       <Banner></Banner>
//       <WhyTrokis></WhyTrokis>
//       <HowWorks></HowWorks>
//       <Testimonial></Testimonial>
//       <Contact></Contact>
//     </div>
//   );
// }

"use client";


import { useRef } from "react";
import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import HowWorks from "../components/Home/HowWorks";
import Testimonial from "../components/Home/Testimonial";
import WhyTrokis from "../components/Home/WhyTrokis";

// Export both scroll functions for use in other components
export let scrollToContact;
export let scrollToAbout;

export default function Home() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="space-y-10">
      <Banner />
      <WhyTrokis />
      <div ref={aboutRef}>
        <HowWorks />
      </div>
      <Testimonial />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

