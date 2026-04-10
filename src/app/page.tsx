import Hero from "@/components/sections/hero/hero";
import Technology from "@/components/sections/technology/technology";
import About from "@/components/sections/about/about";
import Faq from "@/components/sections/faq/faq";
import Team from "@/components/sections/team/team";
import Challenges from "@/components/sections/challenges/challenges";
import CoreTechnology from "@/components/sections/core-technology/core-technology";
import Testimonial from "@/components/sections/testimonial/testimonial";
import Footer from "@/components/scaffolds/footer/footer";
import Navbar from "@/components/scaffolds/navbar/navbar";
import Solution from "@/components/sections/solution/solution";
import Gallery from "@/components/sections/gallery/gallery";
import NewTeam from "@/components/sections/newteam/newteam";
import Reasons from "@/components/sections/reasons/reasons";
import Impact from "@/components/sections/impact/impact";
import NewFaq from "@/components/sections/newfaq/newfaq";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Technology />  
      <About />
      <Reasons />
      <Solution />
      <Impact />
      <Challenges />
      <CoreTechnology />
      {/* <Team /> */}
      <NewTeam />
      {/* <Faq /> */}
      <NewFaq />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  );
}
