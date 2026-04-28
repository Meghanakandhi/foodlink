import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Featured } from "@/components/site/Featured";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Loader } from "@/components/site/Loader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Featured />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
