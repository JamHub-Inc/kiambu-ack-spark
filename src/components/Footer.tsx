import { Church, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-church-navy text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-church-gold" />
              <span className="text-xl font-bold">Kiambu ACK Church</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A welcoming community of faith committed to growing in Christ and serving our neighbors with love and compassion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-church-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-church-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-church-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-church-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#live-stream" className="text-gray-300 hover:text-white transition-colors">
                  Live Stream
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Ministries
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-church-gold">Service Times</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Sunday Morning: 9:00 AM</li>
              <li>Sunday Morning: 11:30 AM</li>
              <li>Sunday Evening: 6:00 PM</li>
              <li>Wednesday Bible Study: 7:00 PM</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-church-gold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-church-gold mt-0.5" />
                <span className="text-gray-300">
                  Kiambu Town, Kenya<br />
                  Along Kiambu Road
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-church-gold" />
                <span className="text-gray-300">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-church-gold" />
                <span className="text-gray-300">info@kiambuack.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Kiambu ACK Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;