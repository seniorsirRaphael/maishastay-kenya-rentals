
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.open('https://seniorsirraphael.github.io/portfolio', '_blank');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Home className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-800">MaishaStay Rentals</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/properties" className="text-gray-700 hover:text-orange-600 transition-colors">Properties</Link>
            <Link to="/submit-property" className="text-gray-700 hover:text-orange-600 transition-colors">Submit Property</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</Link>
            <Link to="/blog" className="text-gray-700 hover:text-orange-600 transition-colors">Blog</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="block py-2 text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
              <Link to="/properties" className="block py-2 text-gray-700 hover:text-orange-600 transition-colors">Properties</Link>
              <Link to="/submit-property" className="block py-2 text-gray-700 hover:text-orange-600 transition-colors">Submit Property</Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-orange-600 transition-colors">About</Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-orange-600 transition-colors">Contact</Link>
              <Link to="/blog" className="block py-2 text-gray-700 hover:text-orange-600 transition-colors">Blog</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
