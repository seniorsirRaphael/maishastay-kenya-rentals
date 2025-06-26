
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";

const BlogPost = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Top 5 Tips When Renting in Kenya - MaishaStay Blog",
        text: "Essential advice for anyone looking to rent property in Kenya",
        url: window.location.href
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="outline" className="group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <Card>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1200&q=80"
                alt="Top 5 Tips When Renting in Kenya"
                className="w-full h-64 md:h-80 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-lg flex items-end">
                <div className="p-8 text-white">
                  <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">Tips & Advice</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Top 5 Tips When Renting in Kenya
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>SeniorSirRaphael</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>June 26, 2024</span>
                    </div>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div></div>
                <Button 
                  onClick={handleShare}
                  variant="outline" 
                  size="sm"
                  className="group"
                >
                  <Share2 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Share
                </Button>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 mb-6 font-medium">
                  Renting in Kenya can be tricky if you don't know what to look out for. Here are 5 essential tips for new renters to help you find the perfect home while avoiding common pitfalls.
                </p>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">1</span>
                      Always Visit the Property First
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Never pay for a property without seeing it in person. This is one of the most important rules when renting in Kenya. Scammers often use fake photos or outdated images to lure unsuspecting tenants.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                      <p className="text-gray-700 font-medium">💡 Pro Tip: Schedule your visit during different times of the day to get a complete feel of the neighborhood and property.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">2</span>
                      Ask About Bills and Utilities
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Always clarify what's included in your rent. Some landlords include water and electricity, while others charge separately. Understanding this upfront helps you budget properly and avoid surprises.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-12">
                      <li>Is water included or charged separately?</li>
                      <li>How much is the average electricity bill?</li>
                      <li>Are there service charges for garbage collection?</li>
                      <li>Is there a maintenance fee?</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">3</span>
                      Check Security Arrangements
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Security is paramount when choosing a rental property in Kenya. Don't just ask about it – verify the security measures in place.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-12">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">What to Look For:</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Working gate locks</li>
                          <li>• Security guards</li>
                          <li>• CCTV cameras</li>
                          <li>• Proper lighting</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Red Flags:</h4>
                        <ul className="text-red-700 text-sm space-y-1">
                          <li>• Broken fences</li>
                          <li>• No lighting at night</li>
                          <li>• Easy access points</li>
                          <li>• No emergency contacts</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">4</span>
                      Know Your Neighbors
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Your neighbors can make or break your living experience. Take time to chat with current tenants and people in the area to understand the community dynamics.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Questions to Ask Neighbors:</h4>
                      <ul className="text-blue-700 space-y-1">
                        <li>• How long have you lived here?</li>
                        <li>• Is the area generally quiet?</li>
                        <li>• How responsive is the landlord to issues?</li>
                        <li>• Are there any recurring problems?</li>
                        <li>• Do you feel safe walking around at night?</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">5</span>
                      Use a Trusted Platform
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      With the rise of online property scams, it's crucial to use verified and trusted platforms when searching for rentals. This ensures the properties are legitimate and the landlords are real.
                    </p>
                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                      <h4 className="font-bold text-orange-800 mb-3">Why Choose MaishaStay Rentals?</h4>
                      <ul className="text-orange-700 space-y-2">
                        <li>✅ All properties are verified by our team</li>
                        <li>✅ Direct contact with property owners</li>
                        <li>✅ Transparent pricing with no hidden fees</li>
                        <li>✅ Local expertise across 10+ Kenyan cities</li>
                        <li>✅ WhatsApp support for quick responses</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Final Thoughts</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Finding the perfect rental property in Kenya doesn't have to be stressful. By following these 5 essential tips, you'll be better equipped to make informed decisions and avoid common pitfalls. Remember, taking your time to research and verify information upfront can save you from headaches and financial losses later.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    At MaishaStay Rentals, we're committed to making your house-hunting journey as smooth as possible. Our platform connects you directly with verified landlords and property managers across Kenya, ensuring transparency and trust in every transaction.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">Ready to find your perfect home?</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/properties">
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Browse Properties
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline">
                        Contact Our Team
                      </Button>
                    </Link>
                  </div>
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

export default BlogPost;
