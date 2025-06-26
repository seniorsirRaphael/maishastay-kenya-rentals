
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath } from "lucide-react";

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
}

const PropertyCard = ({ 
  title, 
  location, 
  price, 
  type, 
  bedrooms, 
  bathrooms, 
  image, 
  description 
}: PropertyCardProps) => {
  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in the ${title} property in ${location} for Ksh ${price.toLocaleString()}/month. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/254757319350?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge className="absolute top-3 left-3 bg-orange-600 hover:bg-orange-700">
          {type}
        </Badge>
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
        <div className="text-2xl font-bold text-orange-600">
          Ksh {price.toLocaleString()}<span className="text-sm font-normal text-gray-500">/month</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleWhatsAppContact}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Contact via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
