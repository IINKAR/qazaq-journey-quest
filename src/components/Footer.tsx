
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-kazakh-night text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">QazaqTourist</h3>
            <p className="text-gray-300 mb-4">
              Discover the beauty and wonder of Kazakhstan with our curated tours and travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="/experiences" className="text-gray-300 hover:text-white transition-colors">Experiences</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Kazakhstan</a></li>
              <li><a href="/plan" className="text-gray-300 hover:text-white transition-colors">Plan Your Trip</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-kazakh-blue" />
                <span className="text-gray-300">123 Nurly Zhol Ave, Astana, Kazakhstan</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-kazakh-blue" />
                <span className="text-gray-300">+7 (777) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-kazakh-blue" />
                <span className="text-gray-300">info@qazaqtourist.kz</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-3">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-kazakh-night/30 border border-gray-600 rounded focus:outline-none focus:border-kazakh-blue"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-kazakh-blue text-white rounded hover:bg-kazakh-skyblue transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} QazaqTourist. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
