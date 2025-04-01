
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">About Kazakhstan</h1>
          <p className="text-lg text-gray-700">This page is under construction. Check back soon to learn more about Kazakhstan's history, culture, and people.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
