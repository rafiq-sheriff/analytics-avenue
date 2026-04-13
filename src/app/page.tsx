import Hero from "@/components/sections/hero/hero";
import Technology from "@/components/sections/technology/technology";
import About from "@/components/sections/about/about";
import Faq from "@/components/sections/faq/faq";
import Team from "@/components/sections/team/team";
import Challenges from "@/components/sections/challenges/challenges";
import CoreTechnology from "@/components/sections/core-technology/core-technology";
import Testimonial from "@/components/sections/testimonial/testimonial";
import Cta from "@/components/cta/cta";
import Footer from "@/components/scaffolds/footer/footer";
import Navbar from "@/components/scaffolds/navbar/navbar";
import Solution from "@/components/sections/solution/solution";
import Gallery from "@/components/sections/gallery/gallery-dynamic";
import NewTeam from "@/components/sections/newteam/newteam";
import Reasons from "@/components/sections/reasons/reasons";
import Impact from "@/components/sections/impact/impact";
import NewFaq from "@/components/sections/newfaq/newfaq";
import NewReason from "@/components/sections/newreason/newreason";
import Curriculam from "@/components/sections/curriculam/curriculam";
import LaunchPopup from "@/components/scaffolds/launch-popup/launch-popup";
import Architecture from "@/components/sections/architecture/architecture";

export default function Home() {
  return (
    <div className="bg-white">
      <LaunchPopup />
      <Navbar />
      <Hero />
      <Technology />  
      <About />
      {/* <Solution /> */}
      {/* <NewReason /> */}
      <Architecture />
      <Reasons />
      <Challenges />
      
      <Impact />
      <Team />
      
      {/* <CoreTechnology /> */}
      
      {/* <NewTeam /> */}
      {/* <Faq /> */}
      <Curriculam />
      {/* <NewFaq /> */}
      
      <Testimonial />
      <Gallery />
      <Cta />
      <Footer afterCta />
    </div>
  );
}
