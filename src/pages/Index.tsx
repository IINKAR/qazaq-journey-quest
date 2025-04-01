
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Experiences from "@/components/Experiences";
import CultureSection from "@/components/CultureSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <Experiences />
      <CultureSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
