
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getExperiences, type Experience } from "@/lib/supabase";

export function Experiences() {
  const { data: experiences = [], isLoading } = useQuery({
    queryKey: ['experiences'],
    queryFn: getExperiences
  });

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="section-title">Cultural Experiences</h2>
            <p className="text-gray-600 max-w-2xl">
              Immerse yourself in Kazakhstan's rich cultural heritage with authentic experiences led by local guides.
            </p>
          </div>
          <a 
            href="/experiences" 
            className="mt-4 md:mt-0 flex items-center text-kazakh-blue hover:text-kazakh-night transition-colors font-medium"
          >
            Browse all experiences
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience: Experience) => (
            <div key={experience.id} className="experience-card">
              <div className="h-56 overflow-hidden">
                <img
                  src={experience.image_url}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-kazakh-night">{experience.title}</h3>
                  <div className="text-kazakh-blue font-semibold">${experience.price}</div>
                </div>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{experience.duration}</span>
                  <Button variant="outline" className="border-kazakh-blue text-kazakh-blue hover:bg-kazakh-blue hover:text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
