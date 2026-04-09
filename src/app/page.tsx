import Hero from "@/components/sections/hero/hero";
import Technology from "@/components/sections/technology/technology";
import About from "@/components/sections/about/about";
import Faq from "@/components/sections/faq/faq";
import Team from "@/components/sections/team/team";
import Challenges from "@/components/sections/challenges/challenges";
import CoreTechnology from "@/components/sections/core-technology/core-technology";
import Testimonial from "@/components/sections/testimonial/testimonial";
import Footer from "@/components/scaffolds/footer/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Technology />  
      <About />
      <Challenges />
      <CoreTechnology />
      <Team />
      <Faq />
      <Testimonial />
      <Footer />
    </div>
  );
}
