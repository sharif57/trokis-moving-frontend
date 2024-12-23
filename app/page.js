import Image from "next/image";
import Banner from "./components/Home/Banner";
import WhyTrokis from "./components/Home/WhyTrokis";
import HowWorks from "./components/Home/HowWorks";
import Testimonial from "./components/Home/Testimonial";

export default function Home() {
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <WhyTrokis></WhyTrokis>
      <HowWorks></HowWorks>
      <Testimonial></Testimonial>
    </div>
  );
}
