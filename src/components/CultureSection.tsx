
import { Button } from "@/components/ui/button";

export function CultureSection() {
  return (
    <section className="py-16 md:py-24 bg-kazakh-blue/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image side */}
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1608295819717-2bd78945fa5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
              alt="Kazakh traditional culture"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text side */}
          <div className="md:w-1/2">
            <h2 className="section-title">Ancient Traditions, Modern Spirit</h2>
            <p className="text-gray-700 mb-6">
              Kazakhstan's culture is a fascinating blend of nomadic heritage and modern innovation. From the traditional yurt dwelling to the intricate patterns of national ornaments, Kazakh culture reflects the country's rich history and diverse influences.
            </p>
            <p className="text-gray-700 mb-6">
              Experience traditional music played on the dombra, taste authentic Kazakh cuisine like beshbarmak and baursak, and participate in traditional celebrations that have been practiced for centuries.
            </p>
            <Button className="bg-kazakh-blue hover:bg-kazakh-night text-white">
              Explore Kazakh Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CultureSection;
