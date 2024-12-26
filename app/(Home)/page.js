import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import HowWorks from "../components/Home/HowWorks";
import Testimonial from "../components/Home/Testimonial";
import WhyTrokis from "../components/Home/WhyTrokis";


export default function Home() {
  
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <WhyTrokis></WhyTrokis>
      <HowWorks></HowWorks>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
}
