
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getDestinations, type Destination } from "@/lib/supabase";

export function FeaturedDestinations() {
  const { data: destinations = [], isLoading } = useQuery({
    queryKey: ['destinations'],
    queryFn: getDestinations
  });

  return (
    <section id="featured-destinations" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="section-title">Танымал бағыттар</h2>
            <p className="text-gray-600 max-w-2xl">
              Табиғаттың керемет көріністерінен бастап жанды қалаларға дейін, сізді таңғалдыратын Қазақстанның ең танымал бағыттарын ашыңыз.
            </p>
          </div>
          <a 
            href="/destinations" 
            className="mt-4 md:mt-0 flex items-center text-kazakh-blue hover:text-kazakh-night transition-colors font-medium"
          >
            Барлық бағыттарды көру
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination: Destination) => (
            <Card key={destination.id} className="destination-card group">
              <div className="h-64 overflow-hidden">
                <img
                  src={destination.image_url}
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
