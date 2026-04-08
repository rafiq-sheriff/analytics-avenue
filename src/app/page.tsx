import Hero from "@/components/sections/hero/hero";
import Technology from "@/components/sections/technology/technology";
import About from "@/components/sections/about/about";
import Faq from "@/components/sections/faq/faq";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Technology />  
      <About />
      <Faq />
    </div>
  );
}
