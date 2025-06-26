
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchForm from "@/components/SearchForm";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
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
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
    description: "Fully furnished bedsitter with modern amenities, close to shopping centers and public transport."
  },
  {
    id: "2",
    title: "Spacious 2BR Apartment",
    location: "Westlands, Nairobi",
    price: 65000,
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
    description: "Beautiful 2-bedroom apartment with parking, gym access, and 24/7 security in prime location."
  },
  {
    id: "3",
    title: "Cozy Studio in Town",
    location: "CBD, Mombasa",
    price: 18000,
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    description: "Perfect studio apartment for young professionals, walking distance to offices and restaurants."
  },
  {
    id: "4",
    title: "Family Villa with Garden",
    location: "Karen, Nairobi",
    price: 120000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=600&q=80",
    description: "Luxurious 4-bedroom villa with large garden, perfect for families seeking space and tranquility."
  },
  {
    id: "5",
    title: "Affordable 1BR in Nakuru",
    location: "Nakuru Town",
    price: 15000,
    type: "1 Bedroom",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&q=80",
    description: "Clean and affordable 1-bedroom apartment with water and electricity included, great neighborhood."
  }
];

const Index = () => {
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
          
          <div className="mb-12">
            <SearchForm />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8">
                Search Rentals
              </Button>
            </Link>
            <Link to="/submit-property">
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8">
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Properties</h2>
            <p className="text-gray-600">Discover some of our most popular rental listings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/properties">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                View All Properties
              </Button>
            </Link>
          </div>
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
              <p className="text-gray-600">All listings are verified to ensure quality and authenticity for your peace of mind.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Affordable Prices</h3>
              <p className="text-gray-600">Find budget-friendly options across Kenya without compromising on quality.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Contact</h3>
              <p className="text-gray-600">Connect directly with property owners via WhatsApp for quick responses.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
