
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContent = () => {
    const featuredSection = document.getElementById('featured-destinations');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image - we're using a div with a background image for better control */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560964645-5296b5099677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
        <h1 className="hero-title mb-6">
          Discover the Heart of <span className="text-kazakh-gold">Kazakhstan</span>
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mb-8">
          Explore vast steppes, majestic mountains, and ancient traditions in the ninth-largest country in the world
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-kazakh-blue hover:bg-kazakh-night text-white px-8 py-6 text-lg">
            Explore Destinations
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
            Plan Your Journey
          </Button>
        </div>

        {/* Scroll down indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToContent}
        >
          <ChevronDown className="h-10 w-10 text-white" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
