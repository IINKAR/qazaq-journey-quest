
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Landmark, Users, Leaf, Map } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-kazakh-blue/10 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-kazakh-night">About Kazakhstan</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the rich history, diverse culture, and stunning landscapes of the 9th largest country in the world.
            </p>
          </div>
          
          {/* Country Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1590613607026-05681587571a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Kazakhstan Landscape" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-kazakh-blue">The Heart of Eurasia</h2>
              <p className="text-gray-700 mb-4">
                Spanning the boundary between Europe and Asia, Kazakhstan is a vast land of steppes, mountains, lakes, and deserts. With a territory larger than Western Europe, it's a country of stunning natural diversity and rich cultural heritage.
              </p>
              <p className="text-gray-700 mb-6">
                Home to over 19 million people from more than 100 ethnic groups, Kazakhstan is known for its hospitality, nomadic traditions, and rapidly modernizing cities like Almaty and Astana (Nur-Sultan).
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-kazakh-night">Official Language</p>
                  <p className="text-gray-600">Kazakh & Russian</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-kazakh-night">Currency</p>
                  <p className="text-gray-600">Tenge (₸)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-kazakh-night">Population</p>
                  <p className="text-gray-600">19+ Million</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-kazakh-night">Area</p>
                  <p className="text-gray-600">2.72 Million km²</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Attractions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-kazakh-night">Key Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1569115316367-164e2f55d48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Charyn Canyon" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kazakh-blue">Charyn Canyon</h3>
                  <p className="text-gray-700">
                    Known as the Grand Canyon's little brother, this spectacular red sandstone canyon stretches 90 km along the Charyn River.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1634584267553-5f6fe46ee9f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Bayterek Tower" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kazakh-blue">Bayterek Tower</h3>
                  <p className="text-gray-700">
                    A symbol of Astana, this 97-meter tall monument represents the Kazakh myth of the Samruk bird and offers panoramic views of the city.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615215271299-608ddf7e5f1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Kolsai Lakes" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kazakh-blue">Kolsai Lakes</h3>
                  <p className="text-gray-700">
                    A series of three spectacular mountain lakes known as the "Pearls of Northern Tien Shan," surrounded by alpine forests and meadows.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Culture Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-kazakh-night">Culture & Heritage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <Landmark className="text-kazakh-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-kazakh-night">Nomadic Heritage</h3>
                    <p className="text-gray-700">
                      For centuries, Kazakhs were nomadic herders, moving their livestock across the vast steppes. This nomadic heritage continues to influence Kazakh cuisine, music, and hospitality traditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <Users className="text-kazakh-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-kazakh-night">Hospitality</h3>
                    <p className="text-gray-700">
                      Hospitality is deeply ingrained in Kazakh culture. Guests are greeted with respect and generosity, often invited to share traditional meals like beshbarmak (meat with noodles) and kumys (fermented mare's milk).
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="text-kazakh-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-kazakh-night">Cultural Diversity</h3>
                    <p className="text-gray-700">
                      Kazakhstan is home to over 100 ethnic groups living in harmony. This diversity is celebrated through numerous festivals, cultural events, and a national policy of tolerance and unity.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1541855999730-c0da9d49567a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Kazakh Cultural Celebration" 
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Travel Tips */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-kazakh-night">Travel Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-kazakh-blue">Best Time to Visit</h3>
                <p className="text-gray-700 mb-6">
                  The best time to visit Kazakhstan is from May to September when the weather is warm and outdoor activities are most enjoyable. Spring (April-May) brings beautiful wildflowers to the steppes, while autumn (September-October) offers stunning foliage.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 text-kazakh-blue">Visa Information</h3>
                <p className="text-gray-700">
                  Many countries have visa-free arrangements with Kazakhstan for short stays. Check the latest visa requirements before your trip, as policies are regularly updated to promote tourism.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-kazakh-blue">Language</h3>
                <p className="text-gray-700 mb-6">
                  Kazakh is the state language, but Russian is widely spoken and understood. In tourist areas and major cities, you'll find some English speakers. Learning a few basic Kazakh or Russian phrases will be appreciated by locals.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 text-kazakh-blue">Getting Around</h3>
                <p className="text-gray-700">
                  Kazakhstan has good domestic air connections between major cities. Trains are comfortable for long-distance travel, while shared taxis and buses serve shorter routes. In remote areas, having a guide with a 4x4 vehicle is recommended.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-kazakh-night">Ready to Explore Kazakhstan?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Let us help you plan an unforgettable journey through this fascinating country. From nomadic adventures to city explorations, we'll create the perfect itinerary for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/plan" className="bg-kazakh-blue hover:bg-kazakh-night text-white px-8 py-6 h-auto text-lg">
                Plan Your Trip
              </Button>
              <Button href="/destinations" variant="outline" className="border-kazakh-blue text-kazakh-blue hover:bg-kazakh-blue hover:text-white px-8 py-6 h-auto text-lg">
                Explore Destinations
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
