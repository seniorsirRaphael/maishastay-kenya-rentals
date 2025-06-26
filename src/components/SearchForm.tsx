
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const navigate = useNavigate();

  const locations = [
    "Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", 
    "Meru", "Voi", "Maungu", "Kitale", "Thika"
  ];

  const handleSearch = () => {
    // Navigate to properties page with search parameters
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (propertyType) params.append('type', propertyType);
    
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc.toLowerCase()}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bedsitter">Bedsitter</SelectItem>
            <SelectItem value="studio">Studio Apartment</SelectItem>
            <SelectItem value="1-bedroom">1 Bedroom</SelectItem>
            <SelectItem value="2-bedroom">2 Bedroom</SelectItem>
            <SelectItem value="3-bedroom">3 Bedroom</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="number"
          placeholder="Max Price (Ksh)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <Button onClick={handleSearch} className="bg-orange-600 hover:bg-orange-700">
          <Search className="h-4 w-4 mr-2" />
          Search Rentals
        </Button>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Search across {locations.length} major Kenyan cities • 22+ verified properties
        </p>
      </div>
    </div>
  );
};

export default SearchForm;
