
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

// Sample destination data
const destinations = [
  {
    id: 1,
    name: "Charyn Canyon",
    location: "Almaty Region",
    image: "https://images.unsplash.com/photo-1615204319459-6814883cc3e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "The Valley of Castles features incredible rock formations, often compared to Arizona's Grand Canyon.",
  },
  {
    id: 2,
    name: "Lake Kaindy",
    location: "Almaty Region",
    image: "https://images.unsplash.com/photo-1614156992639-d6694788673d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A surreal sunken forest with vibrant turquoise waters created by a natural landslide dam.",
  },
  {
    id: 3,
    name: "Kolsai Lakes",
    location: "Almaty Region",
    image: "https://images.unsplash.com/photo-1614156975343-38060e59a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A series of three alpine lakes nestled among the pine forests and mountains of the northern Tien Shan.",
  },
  {
    id: 4,
    name: "Nur-Sultan",
    location: "Akmola Region",
    image: "https://images.unsplash.com/photo-1540162416395-16f3b1db9282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    description: "The capital city featuring futuristic architecture, including the iconic Baiterek Tower and Nur Alem.",
  },
];

export function FeaturedDestinations() {
  return (
    <section id="featured-destinations" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="section-title">Featured Destinations</h2>
            <p className="text-gray-600 max-w-2xl">
              From breathtaking natural wonders to vibrant cities, discover Kazakhstan's most iconic destinations that will leave you in awe.
            </p>
          </div>
          <a 
            href="/destinations" 
            className="mt-4 md:mt-0 flex items-center text-kazakh-blue hover:text-kazakh-night transition-colors font-medium"
          >
            View all destinations
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="destination-card group">
              <div className="h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-card-gradient text-white">
                <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                <p className="text-sm text-white/80">{destination.location}</p>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm">{destination.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;
