import {
  Church,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "@/assets/logomain.png"; 

const Footer = () => {
  return (
    <footer className="bg-church-navy text-white py-14 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
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
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              A welcoming family of believers in Kiambu, rooted in Christ and
              serving our community with love, fellowship, and compassion.
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-gray-400 hover:text-church-gold transition-colors duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-church-gold transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-church-gold transition-colors duration-300 transform hover:scale-110"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-church-gold uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#live-stream"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Live Stream
                </a>
              </li>
              <li>
                <a
                  href="#departments"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Departments
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-church-gold uppercase tracking-wide">
              Service Times
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-medium text-white">English Service:</span>{" "}
                8:30am – 10:30am
              </li>
              <li>
                <span className="font-medium text-white">Kikuyu Service:</span>{" "}
                10:30am – 12:30pm
              </li>
              <li>
                <span className="font-medium text-white">Children Ministry:</span>{" "}
                8:30am – 12:30pm
              </li>
              <li>
                <span className="font-medium text-white">Teens Ministry:</span>{" "}
                8:30am – 10:30am
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-church-gold uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-church-gold mt-1" />
                <span>
                  ACK St. Philip&apos;s Kihingo <br />
                  Kiambu Town, along Kiambu Road
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-church-gold" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-church-gold" />
                <span>info@st.philip'skihingo.com</span>
              </div>
            </div>
          </div>
        </div>
       {/* Bottom Bar */}
<div className="border-t border-gray-700 mt-8 pt-6 text-center space-y-2">
  <p className="text-gray-400">
    © {new Date().getFullYear()} ACK St. Philip&apos;s Kihingo. All
    rights reserved.
  </p>
  <p className="text-sm text-gray-500">
    Crafted with ❤️ by{" "}
    <a
      href="https://dukatrack.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-church-gold hover:underline transition"
    >
      Duka Track Software Limited
    </a>
  </p>
</div>

      </div>

      {/* Decorative Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
