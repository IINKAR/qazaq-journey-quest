
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripBookingForm from "@/components/TripBookingForm";
import { Compass, Map, Calendar, ShieldCheck } from "lucide-react";

const Plan = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-kazakh-blue/10 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-kazakh-night">Plan Your Trip</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Let us help you create your perfect Kazakhstan adventure. Fill out the form below to start planning your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-kazakh-blue flex items-center">
                <Compass className="mr-2" /> Why Book With Us
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-kazakh-blue font-bold mr-2">•</span>
                  <span>Local expertise and authentic experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kazakh-blue font-bold mr-2">•</span>
                  <span>Customized itineraries tailored to your interests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kazakh-blue font-bold mr-2">•</span>
                  <span>24/7 support during your trip</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kazakh-blue font-bold mr-2">•</span>
                  <span>Partnerships with high-quality local providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kazakh-blue font-bold mr-2">•</span>
                  <span>Sustainable tourism practices that benefit local communities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-kazakh-blue flex items-center">
                <Calendar className="mr-2" /> How It Works
              </h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-kazakh-blue text-white flex items-center justify-center mr-3">1</span>
                  <div>
                    <span className="font-medium">Submit your request</span>
                    <p className="text-sm mt-1">Fill out the form with your travel preferences and requirements.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-kazakh-blue text-white flex items-center justify-center mr-3">2</span>
                  <div>
                    <span className="font-medium">Get a personalized itinerary</span>
                    <p className="text-sm mt-1">Our travel experts will contact you within 24 hours with a custom plan.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-kazakh-blue text-white flex items-center justify-center mr-3">3</span>
                  <div>
                    <span className="font-medium">Confirm and book</span>
                    <p className="text-sm mt-1">Once you're happy with the itinerary, secure your booking with a deposit.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-kazakh-blue text-white flex items-center justify-center mr-3">4</span>
                  <div>
                    <span className="font-medium">Enjoy your Kazakhstan adventure!</span>
                    <p className="text-sm mt-1">We'll take care of all the details while you enjoy your trip.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          
          <TripBookingForm />
          
          <div className="mt-16 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-kazakh-blue flex items-center">
              <ShieldCheck className="mr-2" /> Travel With Confidence
            </h2>
            <p className="text-gray-700 mb-4">
              Your security and satisfaction are our top priorities. Our booking system uses secure payment methods, and we offer flexible cancellation policies for peace of mind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-kazakh-night">Secure Payments</h3>
                <p className="text-sm text-gray-600 mt-2">All transactions are encrypted and secure</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-kazakh-night">Free Cancellation</h3>
                <p className="text-sm text-gray-600 mt-2">Full refund up to 30 days before your trip</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-kazakh-night">Travel Insurance</h3>
                <p className="text-sm text-gray-600 mt-2">Optional travel insurance for extra protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plan;
