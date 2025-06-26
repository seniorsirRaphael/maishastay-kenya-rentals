
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About MaishaStay Rentals</h1>
            <p className="text-xl text-gray-600">
              Making housing access easier and safer for everyday Kenyans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  At MaishaStay Rentals, we believe that finding a home should be simple, safe, and affordable. 
                  We connect property seekers with verified landlords across Kenya's major cities, ensuring 
                  transparent transactions and quality living spaces for all.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To become Kenya's most trusted rental platform, where every Kenyan can find their perfect home 
                  with confidence. We envision a future where housing access is democratized and the rental 
                  process is seamless for both tenants and landlords.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Meet Our Founder</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-6xl text-white font-bold">SR</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">SeniorSirRaphael</h3>
                  <p className="text-orange-600 font-semibold mb-4">
                    Applied Computer Science Student at Egerton University
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    As a passionate computer science student and tech enthusiast, SeniorSirRaphael founded 
                    MaishaStay Rentals with a clear mission: to leverage technology in solving real-world 
                    housing challenges faced by everyday Kenyans.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Having experienced firsthand the difficulties of finding affordable and reliable housing 
                    as a student, he understood the need for a platform that would bridge the gap between 
                    property owners and seekers while ensuring transparency and trust in every transaction.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Through MaishaStay, he combines his technical skills with his understanding of the 
                    Kenyan housing market to create a platform that truly serves the community's needs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">1000+</h3>
                <p className="text-gray-600">Properties Listed</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">5000+</h3>
                <p className="text-gray-600">Happy Tenants</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">10</h3>
                <p className="text-gray-600">Cities Covered</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
