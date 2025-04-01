
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1614156894485-459809d2241d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-kazakh-night/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Begin Your Kazakh Adventure
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Let us help you plan an unforgettable journey through Kazakhstan's diverse landscapes and rich cultural heritage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-kazakh-gold hover:bg-kazakh-steppe text-kazakh-night text-lg px-8 py-6">
            Plan My Trip
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
