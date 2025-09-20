import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logomain.png"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Live Stream", href: "#live-stream" },
    { label: "Departments", href: "#departments" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <a href="#home" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="ACK St. Philip's Kihingo Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="text-lg md:text-xl font-bold text-church-navy whitespace-nowrap">
              ACK St. Philip&apos;s Kihingo
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-church-gold transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
           <Button
            asChild
            variant="default"
            className="bg-church-gold hover:bg-church-gold/90 text-white font-semibold px-6 rounded-full shadow-md transition-all"
            >
            <a href="#donate">Donate</a>
           </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-church-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-4 pt-4 pb-6 space-y-3 border-t border-border bg-white rounded-b-lg shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-church-navy hover:text-church-gold font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button
                  variant="default"
                  className="bg-church-gold hover:bg-church-gold/90 text-white w-full font-semibold rounded-full shadow-md"
                >
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
