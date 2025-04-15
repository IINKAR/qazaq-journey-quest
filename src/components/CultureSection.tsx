
import { Button } from "@/components/ui/button";

export function CultureSection() {
  return (
    <section className="py-16 md:py-24 bg-kazakh-blue/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1608295819717-2bd78945fa5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
              alt="Қазақ дәстүрлі мәдениеті"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-title">Ежелгі дәстүрлер, заманауи рух</h2>
            <p className="text-gray-700 mb-6">
              Қазақстан мәдениеті – көшпенді мұра мен заманауи инновацияның қызықты үйлесімі. Дәстүрлі киіз үйден бастап ұлттық өрнектердің күрделі үлгілеріне дейін, қазақ мәдениеті елдің бай тарихы мен әртүрлі әсерлерін көрсетеді.
            </p>
            <p className="text-gray-700 mb-6">
              Домбырада орындалатын дәстүрлі музыканы тыңдаңыз, бешбармақ пен бауырсақ сияқты нағыз қазақ тағамдарын татып көріңіз және ғасырлар бойы жалғасып келе жатқан дәстүрлі мерекелерге қатысыңыз.
            </p>
            <Button className="bg-kazakh-blue hover:bg-kazakh-night text-white">
              Қазақ мәдениетін зерттеу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CultureSection;
