import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MarketingPlan from "@/components/MarketingPlan";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Products />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <MarketingPlan />
    </>
  );
}
