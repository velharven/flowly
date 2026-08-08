import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonial } from "@/components/testimonial";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Features />
        <HowItWorks />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
