
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchForm from "@/components/SearchForm";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const featuredProperties = [
  {
    id: "1",
    title: "Modern Bedsitter in Kileleshwa",
    location: "Kileleshwa, Nairobi",
    price: 25000,
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "Tiled floors, own gate, Wi-Fi ready. Walking distance to shopping centers and matatu stage.",
    landlord: "Mary Wanjiku",
    phone: "+254 757 319 350",
    featured: true
  },
  {
    id: "2",
    title: "Spacious 2BR Villa in Karen",
    location: "Karen, Nairobi",
    price: 65000,
    type: "Villa",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
    description: "Beautiful villa with garden, parking, 24/7 security. Servant quarters included.",
    landlord: "James Mutua",
    phone: "+254 757 319 350",
    featured: true
  },
  {
    id: "6",
    title: "Modern 2BR in Nyali",
    location: "Nyali, Mombasa",
    price: 45000,
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
    description: "Ocean view apartment with swimming pool, parking, and 24/7 security.",
    landlord: "Omar Salim",
    phone: "+254 757 319 350",
    featured: true
  },
  {
    id: "11",
    title: "Student Flat near Egerton",
    location: "Nakuru Town",
    price: 15000,
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "Perfect for Egerton University students. Clean, affordable with reliable amenities.",
    landlord: "Caretaker Moses",
    phone: "+254 757 319 350",
    featured: true
  },
  {
    id: "19",
    title: "Modern 2BR in Kitale",
    location: "Kitale Town",
    price: 22000,
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
    description: "Spacious apartment in town center. Tiled floors, modern kitchen, parking available.",
    landlord: "Francis Wekesa",
    phone: "+254 757 319 350",
    featured: true
  },
  {
    id: "15",
    title: "Modern Bedsitter in Voi",
    location: "Voi Town",
    price: 8500,
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "Clean bedsitter with modern bathroom. Near Voi Railway Station and market.",
    landlord: "Mary Katana",
    phone: "+254 757 319 350",
    verified: true
  }
];

const Index = () => {
  const scrollToSearch = () => {
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToListProperty = () => {
    const listPropertySection = document.getElementById('list-property-section');
    if (listPropertySection) {
      listPropertySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Find Your Perfect Home in <span className="text-orange-600">Kenya</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover affordable rental properties across major Kenyan cities. From bedsitters to villas, we help you find a place to call home.
          </p>
          
          {/* City Highlights */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", "Meru", "Voi", "Kitale", "Thika"].map((city) => (
              <Badge key={city} variant="outline" className="text-orange-600 border-orange-300 hover:bg-orange-50">
                {city}
              </Badge>
            ))}
          </div>
          
          {/* Prominent CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              onClick={scrollToSearch}
            >
              🔍 Search Rentals
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              onClick={scrollToListProperty}
            >
              🏠 List Your Property
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Search for Your Next Home</h2>
            <p className="text-gray-600">Use our advanced search to find properties that match your needs across Kenya</p>
          </div>
          <SearchForm />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured & Verified Properties</h2>
            <p className="text-gray-600">Discover some of our most popular and trusted rental listings across Kenya</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/properties">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8">
                View All Properties ({22} listings)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* List Property Section */}
      <section id="list-property-section" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">List Your Property</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a property to rent? Join thousands of property owners who trust MaishaStay to find quality tenants across Kenya.
          </p>
          <Link to="/submit-property">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
              Submit Your Property
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose MaishaStay?</h2>
            <p className="text-gray-600">We're committed to making housing accessible for all Kenyans</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Properties</h3>
              <p className="text-gray-600">All listings are verified with real landlord contacts for your peace of mind.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Affordable Prices</h3>
              <p className="text-gray-600">Find budget-friendly options from Ksh 6,000 to Ksh 65,000 across Kenya.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Contact</h3>
              <p className="text-gray-600">Connect directly with landlords and caretakers via WhatsApp for quick responses.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
