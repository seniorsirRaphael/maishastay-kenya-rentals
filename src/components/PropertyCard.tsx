
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, User, Phone } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  image: string;
  description: string;
  landlord: string;
  phone: string;
  featured?: boolean;
  verified?: boolean;
}

const PropertyCard = ({ 
  title, 
  location, 
  price, 
  type, 
  bedrooms, 
  bathrooms, 
  image, 
  description,
  landlord,
  phone,
  featured,
  verified
}: PropertyCardProps) => {
  const handleWhatsAppContact = () => {
    const message = `Hi ${landlord}! I'm interested in the ${title} in ${location} for Ksh ${price.toLocaleString()}/month. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${phone.replace(/\s+/g, '').replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 relative">
      <div className="relative">
        <img
          src={image}
          alt={`${type} in ${location.split(',')[0]} - Ksh ${price.toLocaleString()}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <Badge className="bg-orange-600 hover:bg-orange-700">
            {type}
          </Badge>
          {featured && (
            <Badge className="bg-yellow-500 hover:bg-yellow-600">
              ⭐ Featured
            </Badge>
          )}
          {verified && (
            <Badge className="bg-blue-500 hover:bg-blue-600">
              ✓ Verified
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center space-x-4 mb-3">
          {bedrooms && (
            <div className="flex items-center text-gray-600">
              <Bed className="h-4 w-4 mr-1" />
              <span className="text-sm">{bedrooms} bed{bedrooms > 1 ? 's' : ''}</span>
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center text-gray-600">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-sm">{bathrooms} bath{bathrooms > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="mb-3">
          <div className="flex items-center text-gray-700 mb-1">
            <User className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{landlord}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-1" />
            <span className="text-sm">{phone}</span>
          </div>
        </div>
        
        <div className="text-2xl font-bold text-orange-600">
          Ksh {price.toLocaleString()}<span className="text-sm font-normal text-gray-500">/month</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleWhatsAppContact}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Contact {landlord.split(' ')[0]} via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
