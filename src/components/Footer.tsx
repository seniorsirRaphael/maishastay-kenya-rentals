
import { Home, Phone, Mail, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const handleLogoClick = () => {
    window.open('https://seniorsirraphael.github.io/portfolio', '_blank');
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div 
              onClick={handleLogoClick}
              className="flex items-center space-x-2 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Home className="h-8 w-8 text-orange-400" />
              <span className="text-xl font-bold">MaishaStay Rentals</span>
            </div>
            <p className="text-gray-300 mb-4">
              Making housing access easier and safer for everyday Kenyans. Find your perfect home across major Kenyan cities.
            </p>
            <p className="text-sm text-gray-400">
              Founded by SeniorSirRaphael - Applied Computer Science Student at Egerton University
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="/properties" className="hover:text-orange-400 transition-colors">Properties</a></li>
              <li><a href="/submit-property" className="hover:text-orange-400 transition-colors">Submit Property</a></li>
              <li><a href="/about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-orange-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+254 757 319 350</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">siraphaelmwendwa@gmail.com</span>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-4">
              <a href="https://seniorsirraphael.github.io/portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/Raphaelmwe80915" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/seniorsirraphael" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/seniorsirraphael" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MaishaStay Rentals. All rights reserved. | Founded by SeniorSirRaphael</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
