
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Sample experiences data
const experiences = [
  {
    id: 1,
    title: "Nomadic Yurt Stay",
    description: "Experience traditional Kazakh hospitality in an authentic yurt on the vast steppe. Enjoy local food, music, and horseback riding.",
    image: "https://images.unsplash.com/photo-1591621709420-3e1301186151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "2 days",
    price: "$120",
  },
  {
    id: 2,
    title: "Eagle Hunting Experience",
    description: "Witness the ancient tradition of hunting with golden eagles and learn about Kazakh nomadic culture from eagle hunters.",
    image: "https://images.unsplash.com/photo-1614156992137-4d2d9fd6bd9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "1 day",
    price: "$85",
  },
  {
    id: 3,
    title: "Silk Road Heritage Tour",
    description: "Follow the ancient Silk Road through Kazakhstan visiting historical sites, mausoleums, and ancient cities.",
    image: "https://images.unsplash.com/photo-1594818379496-da1e345bf9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    duration: "5 days",
    price: "$495",
  },
];

export function Experiences() {
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
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-card">
              <div className="h-56 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-kazakh-night">{experience.title}</h3>
                  <div className="text-kazakh-blue font-semibold">{experience.price}</div>
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
