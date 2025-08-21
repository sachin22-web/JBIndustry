import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Shield,
  Zap,
  Settings,
  CheckCircle,
  ArrowRight,
  Package,
  Cog,
  Star,
  Award,
  Download,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    // {
    //   image: "/image/S1.jpg",
    //   title: "Premium Services",
    //   subtitle: "Comprehensive Fastening Solutions & Manufacturing Services",
    // },
    // {
    //   image: "/image/S2.jpg",
    //   title: "High Tensile Steel",
    //   subtitle: "Advanced Manufacturing of Heavy-Duty Fasteners",
    // },
    {
      image: "/image/S3.jpg",
      title: "Stainless Steel Solutions",
      subtitle: "Corrosion-Resistant Components for Marine Applications",
    },
    // {
    //   image:
    //     "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F8a14e3d77dae4821a9786760c484a1db?format=webp&width=800",
    //   title: "Precision Components",
    //   subtitle: "CNC Machined Parts to Exact Specifications",
    // },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F3bb246b707364c0899a08b4b9ffba3c0?format=webp&width=800",
      title: "Complete Hardware Range",
      subtitle: "Industrial Nuts, Bolts & Custom Fastening Solutions",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F21eca86535bb4f57b0979ccc68c6e08d?format=webp&width=800",
      title: "Quality Manufacturing",
      subtitle: "ISO Certified Excellence in Fastener Production",
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
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-blue-600 font-medium transition-colors"
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
            <Link to="/quote">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Quote
              </Button>
            </Link>
          </div>
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
            Professional Manufacturing & Supply of High Tensile & Stainless
            Steel Fasteners
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive fastening solutions for industrial applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Manufacturing Excellence
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Wrench className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      High Tensile Steel Fasteners
                    </h4>
                    <p className="text-gray-600">
                      Premium grade fasteners designed for heavy-duty
                      applications. Our high tensile steel fasteners offer
                      superior strength and durability for demanding industrial
                      environments.
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-500">
                      <li>• Bolts, screws, and nuts</li>
                      <li>• Washers and spacers</li>
                      <li>• Threaded rods and studs</li>
                      <li>• Custom fastening solutions</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Stainless Steel Components
                    </h4>
                    <p className="text-gray-600">
                      Corrosion-resistant solutions for demanding environments.
                      Our stainless steel components provide long-lasting
                      performance in harsh conditions.
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-500">
                      <li>• Marine grade stainless steel</li>
                      <li>• Food grade components</li>
                      <li>• Chemical resistant fasteners</li>
                      <li>• Custom alloy specifications</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Cog className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Precision Machined Components
                    </h4>
                    <p className="text-gray-600">
                      Precision-engineered parts manufactured to exact
                      specifications using advanced machining techniques and
                      quality control processes.
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-500">
                      <li>• CNC machined parts</li>
                      <li>• Custom specifications</li>
                      <li>• Tight tolerance components</li>
                      <li>• Surface treatment options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <img
                src="./image/nut.jpg"
                alt="Complete Product Range"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="./image/bolt.jpg"
                alt="Specialized Fastening Solutions"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive range of fastening solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Package className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Standard Fasteners
                </h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Hex Head Bolts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Socket Head Cap Screws
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Nuts & Washers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Threaded Rods
                  </li>
                </ul>
                <Button variant="outline" className="w-full" onClick={goToContact}>
                  View Products
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Custom Solutions
                </h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Custom Specifications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Special Alloys
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Unique Designs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Volume Production
                  </li>
                </ul>
                  <Link to="/quote">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Specialty Items
                </h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    High Strength Grades
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Corrosion Resistant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Temperature Resistant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Special Coatings
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600">
              Quality and excellence in every component
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ISO Certified
              </h3>
              <p className="text-gray-600 text-sm">
                ISO 45001:2018 certified manufacturing processes ensuring
                highest quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Premium Materials
              </h3>
              <p className="text-gray-600 text-sm">
                High-grade steel and stainless steel materials sourced from
                trusted suppliers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Testing
              </h3>
              <p className="text-gray-600 text-sm">
                Rigorous quality control and testing procedures for every
                product batch.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Custom Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Tailored fastening solutions designed to meet your specific
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600">
              State-of-the-art manufacturing facilities and capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <img
              src="./image/manu.jpg"
              alt="Manufacturing Facilities and Equipment"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Advanced Manufacturing Capabilities
              </h3>
              <div className="grid grid-cols-1 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Metric Specifications
                  </h4>
                  <p className="text-gray-600">
                    Diameter: M2 to M48 (MM) | Length: 6 to 1000 (MM)
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Inch Specifications
                  </h4>
                  <p className="text-gray-600">
                    Diameter: 1/16" to 1 3/4" | Length: 1/4" to 40"
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Surface Finishes
                  </h4>
                  <p className="text-gray-600">
                    Zinc Plating Cr6 Free, Nickle, Decro
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Special Facilities
                  </h4>
                  <p className="text-gray-600">
                    Wire Drawing (2 Stations) | Heat Treatment (Continuous
                    Furnace)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Secondary Operations & Machining
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Thread Rolling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Parting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Straightening
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Facing & Centering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    CNC Turning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Vertical Milling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Knurling
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Drilling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Grooving
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Tapping
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Shot Blasting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Grinding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Broaching
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Stamping & Buffing
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="./image/images.jpeg"
              alt="Secondary Operations and Machining"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Serving diverse industries with specialized solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Serving Multiple Sectors
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Automotive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Electronics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">
                    Agricultural Machine
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Wind Power</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Heavy Machinery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Thermal Power</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">
                    Metro & Railways
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Electricals</span>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F0cf7d7d9639843ba918d2688f0be7b1e?format=webp&width=800"
              alt="Industries We Serve"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Trusted by Leading Companies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Trusted Partners
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve top-tier companies across various industries with
              our premium fastening solutions.
            </p>
          </div>

     
  <div className="bg-gray-50 py-10 px-4">
  {/* <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-700 mb-6">
    Trusted by Leading Companies
  </h2> */}

  {/* 🟩 Horizontal Scrollable Container */}
  <div className="overflow-x-auto scrollbar-thin">
    <div className="flex gap-6 w-max">
      {[
        "image/m.webp",
        "image/f.png",
        "image/b.png",
        "image/ff.png",
        "image/l.png",
        "image/sans.jpg",
        "image/ss.jfif",
        "image/mm.png",
        "image/ll.jfif",
      ].map((src, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-3 shadow-sm w-32 h-20 flex items-center justify-center shrink-0"
        >
          <img
            src={src}
            alt={`client logo ${index}`}
            className="max-h-12 max-w-[80%] object-contain"
          />
        </div>
      ))}
    </div>
  </div>

  {/* <p className="text-center text-sm text-gray-500 mt-6">
    Frick • Mahindra • LGB • Fastenal • Sansera • Bossard • Reyher • C&S Electric • Würth
  </p> */}
</div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Fastening Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you find the perfect fastening
            solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Download Catalog
            </Button>
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
