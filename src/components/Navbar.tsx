
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Experiences", href: "/experiences" },
  { name: "About Kazakhstan", href: "/about" },
  { name: "Plan Your Trip", href: "/plan" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className={cn(
            "font-bold text-2xl transition-colors",
            isScrolled ? "text-kazakh-night" : "text-white"
          )}>
            QazaqTourist
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-colors hover:text-kazakh-blue",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className={cn(
            "rounded-full transition-colors",
            isScrolled ? "text-gray-700 hover:text-kazakh-blue" : "text-white hover:text-kazakh-skyblue"
          )}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className={cn(
            "rounded-full transition-colors",
            isScrolled ? "text-gray-700 hover:text-kazakh-blue" : "text-white hover:text-kazakh-skyblue"
          )}>
            <Globe className="h-5 w-5" />
          </Button>
          <Button className="bg-kazakh-blue hover:bg-kazakh-night text-white">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "rounded-full",
              isScrolled ? "text-gray-700" : "text-white"
            )}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-kazakh-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-kazakh-blue hover:bg-kazakh-night text-white w-full">
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
