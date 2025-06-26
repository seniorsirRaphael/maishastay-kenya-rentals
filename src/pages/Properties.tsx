
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import SearchForm from "@/components/SearchForm";

const allProperties = [
  // Nairobi Properties
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
    id: "3",
    title: "Executive 1BR in Westlands",
    location: "Westlands, Nairobi",
    price: 45000,
    type: "1 Bedroom",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "High-rise apartment with lift, backup generator, and fast internet connection.",
    landlord: "Grace Njeri",
    phone: "+254 757 319 350",
    verified: true
  },
  {
    id: "4",
    title: "Student Bedsitter in Rongai",
    location: "Rongai, Nairobi",
    price: 12000,
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=600&q=80",
    description: "Affordable mabati house, reliable water and electricity. Perfect for students.",
    landlord: "Caretaker John",
    phone: "+254 757 319 350"
  },

  // Mombasa Properties
  {
    id: "5",
    title: "Seaside Bedsitter in CBD",
    location: "CBD, Mombasa",
    price: 18000,
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "Near Digo Road, tiled floors, own toilet. Walking distance to offices and bus station.",
    landlord: "Amina Hassan",
    phone: "+254 757 319 350",
    verified: true
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

  // Kisumu Properties
  {
    id: "7",
    title: "Lakeside 1BR Apartment",
    location: "Kisumu Central",
    price: 20000,
    type: "1 Bedroom",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "Near Lake Victoria, tiled floors, reliable water supply. Close to town center.",
    landlord: "Peter Otieno",
    phone: "+254 757 319 350"
  },
  {
    id: "8",
    title: "Student Studio in Milimani",
    location: "Milimani, Kisumu",
    price: 8000,
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=600&q=80",
    description: "Affordable housing for students. Electricity and water included. Near Maseno University.",
    landlord: "Caretaker Agnes",
    phone: "+254 757 319 350"
  },

  // Eldoret Properties
  {
    id: "9",
    title: "Family 3BR House",
    location: "Eldoret Town",
    price: 35000,
    type: "3 Bedroom",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
    description: "Spacious family house with compound, parking, and kitchen garden space.",
    landlord: "Samuel Koech",
    phone: "+254 757 319 350",
    verified: true
  },
  {
    id: "10",
    title: "Modern Bedsitter Pioneer",
    location: "Pioneer, Eldoret",
    price: 15000,
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "Clean bedsitter with modern fittings. Water and electricity never lacks.",
    landlord: "Rose Cherop",
    phone: "+254 757 319 350"
  },

  // Nakuru Properties
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
    id: "12",
    title: "Executive 2BR Milimani",
    location: "Milimani, Nakuru",
    price: 30000,
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
    description: "Modern apartment in upmarket area. Tiled throughout with ample parking.",
    landlord: "David Kamau",
    phone: "+254 757 319 350"
  },

  // Meru Properties
  {
    id: "13",
    title: "Cozy 1BR in Meru Town",
    location: "Meru Central",
    price: 16000,
    type: "1 Bedroom",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "Centrally located with modern kitchen fittings. Close to matatu stage and market.",
    landlord: "Catherine Mwenda",
    phone: "+254 757 319 350"
  },
  {
    id: "14",
    title: "Affordable Bedsitter",
    location: "Makutano, Meru",
    price: 9000,
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=600&q=80",
    description: "Budget-friendly housing with consistent water and power supply. Quiet neighborhood.",
    landlord: "Caretaker Paul",
    phone: "+254 757 319 350"
  },

  // Voi Properties
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
  },
  {
    id: "16",
    title: "Family House in Voi",
    location: "Voi Residential",
    price: 18000,
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
    description: "Standalone house with compound and kitchen garden. Ideal for small families.",
    landlord: "Joseph Mwalimu",
    phone: "+254 757 319 350"
  },

  // Maungu Properties
  {
    id: "17",
    title: "Cozy Studio in Maungu",
    location: "Maungu Center",
    price: 6000,
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "Affordable studio apartment. Perfect for singles, reliable water and electricity.",
    landlord: "Grace Mwatha",
    phone: "+254 757 319 350"
  },
  {
    id: "18",
    title: "Simple Bedsitter",
    location: "Maungu Trading Center",
    price: 7500,
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=600&q=80",
    description: "Basic but clean bedsitter near trading center. Good transport connections.",
    landlord: "Caretaker Evans",
    phone: "+254 757 319 350"
  },

  // Kitale Properties
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
    id: "20",
    title: "Student Bedsitter",
    location: "Mitume, Kitale",
    price: 10000,
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "Ideal for students and young professionals. Clean, affordable with good security.",
    landlord: "Caretaker Alice",
    phone: "+254 757 319 350"
  },

  // Thika Properties
  {
    id: "21",
    title: "Executive 1BR in Thika",
    location: "Thika Town",
    price: 28000,
    type: "1 Bedroom",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    description: "Modern apartment with backup generator, parking, and Wi-Fi ready infrastructure.",
    landlord: "Stephen Kariuki",
    phone: "+254 757 319 350",
    verified: true
  },
  {
    id: "22",
    title: "Affordable Bedsitter Makongeni",
    location: "Makongeni, Thika",
    price: 14000,
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=600&q=80",
    description: "Budget-friendly option with reliable utilities. Close to industrial area and town.",
    landlord: "Jane Wanjiku",
    phone: "+254 757 319 350"
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
