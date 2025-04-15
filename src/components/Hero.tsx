
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
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560964645-5296b5099677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
        <h1 className="hero-title mb-6">
          <span className="text-kazakh-gold">Қазақстанның</span> жүрегін ашыңыз
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mb-8">
          Әлемдегі тоғызыншы ең үлкен елдің кең даласын, әсем тауларын және ежелгі дәстүрлерін зерттеңіз
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-kazakh-blue hover:bg-kazakh-night text-white px-8 py-6 text-lg">
            Бағыттарды зерттеу
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
            Саяхатты жоспарлау
          </Button>
        </div>

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
