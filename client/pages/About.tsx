import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Factory,
  Users,
  Award,
  Calendar,
  MapPin,
  Building,
  CheckCircle,
  TrendingUp,
  Menu,
  X,
  ArrowRight,
  Download,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      image: "/image/A.jpg",
      title: "About JB Industries",
      subtitle: "Leading Manufacturer of Fastening Solutions Since 2019",
    },
    // {
    //   image: "/image/B.jpg",
    //   title: "Quality Manufacturing",
    //   subtitle: "ISO 45001:2018 Certified Excellence in Production",
    // },
    {
      image: "/image/C.jpg",
      title: "Advanced Technology",
      subtitle: "State-of-the-art Manufacturing Facilities",
    },
    {
      image:
        "./image/o.webp",
      title: "Premium Components",
      subtitle: "High-Quality Steel Fasteners & Hardware Solutions",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F3bb246b707364c0899a08b4b9ffba3c0?format=webp&width=800",
      title: "Complete Solutions",
      subtitle: "Comprehensive Range of Industrial Hardware",
    },
  ];
 const navigate = useNavigate();

    const goToContact = () => {
        navigate("/products");
    };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handleDownloadCatalog = () => {
    window.open(
      "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
      "_blank",
    );
  };

  const handleViewProducts = () => {
    window.location.href = "/products";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
    
  <Link
  to="/"
  className="flex items-center space-x-2 px-2 max-w-full"
>
  <img
    src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fe47a2c8dea8b451da551bc04f83bbb06?format=webp&width=800"
    alt="Industries Fastening Solution Logo"
    className="h-12 sm:h-14 w-auto" // ✅ Original image size
  />
  {/* <p className="text-sm sm:text-base text-blue-600 font-bold whitespace-nowrap">
    Industries Fastening Solution
  </p> */}
</Link>


            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-blue-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Products
              </Link>
              <Link
                to="/certifications"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Certifications
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link to="/quote">
                <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white">
                  Get Quote
                </Button>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/products"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/certifications"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Certifications
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Banner Slider */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* JB Industries Watermark */}
                <div className="absolute top-4 right-4 opacity-20">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                    alt="JB Industries Watermark"
                    className="h-16 w-auto filter invert"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {banner.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                      {banner.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={handleViewProducts}
                      >
                        View Products <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-gray-900"
                        onClick={handleDownloadCatalog}
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Catalog
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Company Banner */}
      <section className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white font-medium">
            Your Trusted Partner for Industrial Fastening Solutions Since 2019
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Company
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Legal Structure
                    </h3>
                    <p className="text-gray-600">
                      <strong>Legal Name:</strong> Rajni Jain
                      <br />
                      <strong>Trade Name:</strong> JB Industries
                      <br />
                      <strong>Constitution:</strong> Proprietorship
                      <br />
                      <strong>GST No:</strong> 06AGZPJ8621P1ZF
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      Plot no. 107, Gaddi Khedi Road
                      <br />
                      HSIIDC Industrial Area
                      <br />
                      Rohtak, Haryana 124001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Establishment
                    </h3>
                    <p className="text-gray-600">
                      Date of Liability: 19/04/2019
                      <br />
                      Registration Valid From: 19/04/2019
                      <br />
                      Registration Type: Regular
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F71ee101920e54926895d3def67a1fd81?format=webp&width=800"
                alt="JB Industries Vision and Mission"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fe3154f1abe564045998be81c12f8e0f6?format=webp&width=800"
                alt="JB Industries Manufacturing Excellence"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Philosophy
            </h2>
            <p className="text-xl text-gray-600">
              Providing trusted fastening & inventory management solutions
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Company Vision
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  JB Industries was started with a vision to provide the one
                  stop trusted fastening & Inventory Mgt. solutions with speed,
                  service & flexibility.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Today's Challenges
                    </h4>
                    <p className="text-gray-600">
                      Small items? Low Volume? Big issues!! Supply Chain
                      Challenges
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Our Solution
                    </h4>
                    <p className="text-gray-600">
                      Quality with speed, service and flexibility
                    </p>
                  </div>
                </div>
              </div>



             <div className="flex flex-col gap-4">
  <button onClick={goToContact}
    className="bg-blue-600 text-white p-6 rounded-lg text-center text-xl font-bold hover:bg-blue-700 transition cursor-pointer"
  >
    Fasteners & Machining Parts
  </button>

  <button onClick={goToContact}
    className="bg-green-600 text-white p-6 rounded-lg text-center text-xl font-bold hover:bg-green-700 transition cursor-pointer"
  >
    Inventory Mgt. Solutions
  </button>
</div>


              
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To provide high-quality fastening solutions that meet the most
                  demanding industrial requirements while maintaining the
                  highest standards of safety, quality, and customer
                  satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To become the leading manufacturer and supplier of fastening
                  solutions in India, recognized for our innovation, quality,
                  and commitment to excellence in industrial applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose JB Industries?
            </h2>
            <p className="text-xl text-gray-600">
              Excellence in every aspect of our business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Factory className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Advanced Manufacturing
                </h3>
                <p className="text-gray-600 text-sm">
                  State-of-the-art manufacturing facility equipped with modern
                  machinery and technology for precision manufacturing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 text-sm">
                  ISO 45001:2018 certified ensuring the highest standards of
                  occupational health and safety management systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Expert Team
                </h3>
                <p className="text-gray-600 text-sm">
                  Experienced professionals committed to delivering excellence
                  in every project and maintaining long-term customer
                  relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality & Testing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance & Testing
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive quality control from raw material to dispatch
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Traceability & Quality Confirmation
              </h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Raw Material Inspection
                  </h4>
                  <p className="text-gray-600">
                    Complete incoming inspection as per customer specifications
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Process Control
                  </h4>
                  <p className="text-gray-600">
                    Set-up approval and process patrolling at every stage
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Final Inspection
                  </h4>
                  <p className="text-gray-600">
                    Comprehensive final inspection before packaging
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Documentation
                  </h4>
                  <p className="text-gray-600">
                    Complete traceability with delivery docs and test
                    certificates
                  </p>
                </div>
              </div>
            </div>
            <img
              src="./image/Q.jpg"
              alt="Quality Control Process"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="./image/machi.jpg"
              alt="Testing Facilities and Equipment"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Advanced Testing Facilities
              </h3>
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex justify-between bg-gray-50 p-3 rounded">
                  <span className="font-medium">Rockwell Hardness Tester</span>
                  <span className="text-gray-600">0-100 HRB, HRC</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-3 rounded">
                  <span className="font-medium">Metallurgical Microscope</span>
                  <span className="text-gray-600">Kyowa</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-3 rounded">
                  <span className="font-medium">Magnetic Crack Detector</span>
                  <span className="text-gray-600">ITW Magnaflux</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-3 rounded">
                  <span className="font-medium">Digital Vernier</span>
                  <span className="text-gray-600">Up to 150 mm</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-3 rounded">
                  <span className="font-medium">Thread Ring Plug Gauges</span>
                  <span className="text-gray-600">M3 to M16</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-3 rounded">
                  <span className="font-medium">Torque Wrenches</span>
                  <span className="text-gray-600">Griphold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your fastening solution requirements and
            discover how we can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white rounded-full p-1 flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                    alt="JB Industries Logo"
                    className="h-6 w-auto"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">JB Industries</h3>
                  <p className="text-gray-400 text-sm">Fastening Solution</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
               JB Industries Leading manufacturer and supplier of high-quality fastening
                solutions. ISO 45001:2018 certified for excellence in
                occupational health and safety management.
              </p>
              <p className="text-sm text-gray-500">GST: 06AGZPJ8621P1ZF</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quality"
                    className="hover:text-white transition-colors"
                  >
                    Quality Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            {/* <p className="text-gray-400 text-sm">
              © 2024 JB Industries. All rights reserved. | Proprietary business
              by Rajni Jain
            </p> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
