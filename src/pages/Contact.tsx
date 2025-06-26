
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const contactPersons = [
  {
    name: "Mary Wanjiku",
    role: "Property Manager - Nairobi",
    phone: "+254 712 345 678",
    whatsapp: "+254 712 345 678",
    email: "mary@maishastay.co.ke",
    location: "Kileleshwa, Nairobi"
  },
  {
    name: "John Mwangi",
    role: "Landlord - Westlands",
    phone: "+254 723 456 789",
    whatsapp: "+254 723 456 789",
    email: "john.mwangi@gmail.com",
    location: "Westlands, Nairobi"
  },
  {
    name: "Grace Akinyi",
    role: "Caretaker - Mombasa",
    phone: "+254 734 567 890",
    whatsapp: "+254 734 567 890",
    email: "grace.akinyi@gmail.com",
    location: "Nyali, Mombasa"
  },
  {
    name: "Peter Kamau",
    role: "Property Agent - Nakuru",
    phone: "+254 745 678 901",
    whatsapp: "+254 745 678 901",
    email: "peter.kamau@gmail.com",
    location: "Nakuru Town"
  },
  {
    name: "Sarah Njeri",
    role: "Landlord - Eldoret",
    phone: "+254 756 789 012",
    whatsapp: "+254 756 789 012",
    email: "sarah.njeri@gmail.com",
    location: "Eldoret Town"
  },
  {
    name: "David Ochieng",
    role: "Property Manager - Kisumu",
    phone: "+254 767 890 123",
    whatsapp: "+254 767 890 123",
    email: "david.ochieng@gmail.com",
    location: "Kisumu Central"
  }
];

const Contact = () => {
  const handleWhatsAppContact = (phone: string, name: string) => {
    const message = `Hi ${name}! I'm interested in learning more about available rental properties. Can you help me?`;
    const whatsappUrl = `https://wa.me/${phone.replace(/\s+/g, '').replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our property experts, landlords, and caretakers across Kenya. 
              We're here to help you find your perfect home.
            </p>
          </div>

          {/* Founder Contact */}
          <Card className="mb-12 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-orange-700">
                Contact Our Founder - SeniorSirRaphael
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold">+254 757 319 350</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-orange-600" />
                  <span>siraphaelmwendwa@gmail.com</span>
                </div>
                <Button 
                  onClick={() => handleWhatsAppContact('+254757319350', 'SeniorSirRaphael')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Property Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactPersons.map((person, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{person.name}</CardTitle>
                  <p className="text-orange-600 font-medium">{person.role}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{person.location}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{person.phone}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleCall(person.phone)}
                      >
                        Call
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm truncate">{person.email}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEmail(person.email)}
                      >
                        Email
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleWhatsAppContact(person.whatsapp, person.name)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp {person.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* General Information */}
          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How to Reach Us</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">For Property Seekers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Browse our properties and contact owners directly via WhatsApp</li>
                    <li>• Call our regional contacts for personalized assistance</li>
                    <li>• Email us for bulk inquiries or special requirements</li>
                    <li>• Join our WhatsApp groups for instant property updates</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">For Property Owners</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Contact our founder directly for partnership opportunities</li>
                    <li>• Reach out to regional managers for local listings</li>
                    <li>• Submit properties through our online form</li>
                    <li>• Get support for property management services</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
