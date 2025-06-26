
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import SearchForm from "@/components/SearchForm";

const allProperties = [
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
  },
  {
    id: "6",
    title: "Executive Bedsitter Kilimani",
    location: "Kilimani, Nairobi",
    price: 30000,
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
    description: "High-end bedsitter with modern kitchen, fast internet, and backup generator."
  },
  {
    id: "7",
    title: "Student Friendly Studio",
    location: "Rongai, Nairobi",
    price: 12000,
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    description: "Perfect for students, affordable rent with reliable water and electricity supply."
  },
  {
    id: "8",
    title: "Seaside 2BR Apartment",
    location: "Nyali, Mombasa",
    price: 45000,
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
    description: "Ocean view apartment with swimming pool, perfect for those who love the coast."
  }
];

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  useEffect(() => {
    const location = searchParams.get('location');
    const maxPrice = searchParams.get('maxPrice');
    const type = searchParams.get('type');

    let filtered = allProperties;

    if (location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (maxPrice) {
      filtered = filtered.filter(property => 
        property.price <= parseInt(maxPrice)
      );
    }

    if (type) {
      filtered = filtered.filter(property => 
        property.type.toLowerCase().includes(type.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Rental</h1>
            <p className="text-gray-600">Browse through our extensive collection of verified properties across Kenya</p>
          </div>
          
          <div className="mb-12">
            <SearchForm />
          </div>
          
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProperties.length} properties
              {searchParams.get('location') && ` in ${searchParams.get('location')}`}
              {searchParams.get('maxPrice') && ` under Ksh ${parseInt(searchParams.get('maxPrice')!).toLocaleString()}`}
            </p>
          </div>
          
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-4">No properties found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search criteria or browse all properties.</p>
              <button 
                onClick={() => window.location.href = '/properties'}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg"
              >
                Show All Properties
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
