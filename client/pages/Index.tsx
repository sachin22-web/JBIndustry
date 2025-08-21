import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Award,
  Factory,
  Shield,
  CheckCircle,
  Users,
  Calendar,
  ArrowRight,
  Menu,
  X,
  Download,
  ExternalLink,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCurrentUser, isLoggedIn, logout } from "@/lib/auth";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [user, setUser] = useState(getCurrentUser());
  const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn());

  const banners = [
    {
      image:
        "https://images.pexels.com/photos/5506052/pexels-photo-5506052.jpeg",
      title: "Automotive Fastener Solution ",
      subtitle: "High-Quality Fastening Solutions for Automotive Industry",
    },
    {
      image:
        "./image/ele.avif",
      title: "Electronics Fastener Solution",
      subtitle: "Electronics tools",
    },
    {
      image:
        "./image/agrr.jpeg",
      title: "Agricultural Machine Fastener Solution",
      subtitle: "Used in farming or other agriculture",
    },
      {
      image:
        "./image/wind.jpeg",
      title: " Wind Power Fastener Solution",
      subtitle: "A wind turbine turns wind energy into electricity",
    },
    {
      image:
        "https://images.pexels.com/photos/9242907/pexels-photo-9242907.jpeg",
      title: "Heavy Machinery Fastener Solution",
      subtitle: "Heavy equipment usually comprises five equipment systems",
    },
    {
      image:
        "./image/ther.jpg",
      title: "Thermal Power Fastener Solution",
      subtitle: "The maximum power transfer theorem states",
    },
  
    // {
    //   image:
    //     "https://images.pexels.com/photos/5008306/pexels-photo-5008306.jpeg",
    //   title: "Luxury Automotive",
    //   subtitle: "Premium Fasteners for Luxury Vehicles",
    // },
    {
      image:
        "./image/metro.jpg",
      title: "Metro & Railways Fastener Solution",
      subtitle: "This system provides automatic local and central control ",
    },
    {
      image:
        "./image/electric.webp",
      title: "Electronical Fastener Solution",
      subtitle: "Electrical work, at its simplest, refers to the process ",
    },
    // {
    //   image:
    //     "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F21eca86535bb4f57b0979ccc68c6e08d?format=webp&width=800",
    //   title: "Precision Machined Fasteners",
    //   subtitle: "Advanced Manufacturing for Critical Applications",
    // },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  // Check for user state changes (e.g., after login)
  useEffect(() => {
    const checkUserState = () => {
      setUser(getCurrentUser());
      setUserLoggedIn(isLoggedIn());
    };

    // Check immediately
    checkUserState();

    // Listen for storage changes (when user logs in from another tab)
    window.addEventListener("storage", checkUserState);

    // Also check periodically in case of programmatic changes
    const userCheckInterval = setInterval(checkUserState, 1000);

    return () => {
      window.removeEventListener("storage", checkUserState);
      clearInterval(userCheckInterval);
    };
  }, []);

  const handleDownloadCatalog = () => {
    // Open PDF in new tab
    window.open(
      "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
      "_blank",
    );
  };

  const handleViewProducts = () => {
    // Navigate to products page
    window.location.href = "/products";
  };

  const handleViewCertificate = () => {
    // Open certificate in new tab
    window.open("/certifications", "_blank");
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
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
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
              {userLoggedIn && user ? (
                <div className="hidden md:flex items-center space-x-3">
                  <span className="text-sm text-gray-600">
                    Welcome,{" "}
                    <span className="font-semibold text-blue-600">
                      {user.name}
                    </span>
                  </span>
                  <Button
                    onClick={logout}
                    variant="outline"
                    size="sm"
                    className="text-gray-600 border-gray-300 hover:bg-gray-50"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="hidden md:block text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    Login
                  </Button>
                </Link>
              )}

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
                  to="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
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
                {userLoggedIn && user ? (
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="px-3 py-2 text-sm">
                      <span className="text-gray-600">Logged in as:</span>
                      <div className="font-semibold text-blue-600">
                        {user.name}
                      </div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                    <Button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      variant="outline"
                      className="w-full mt-2 text-gray-600 border-gray-300"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full mt-3 text-blue-600 border-blue-600"
                    >
                      Login
                    </Button>
                  </Link>
                )}

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
                {/* <div className="absolute top-4 right-4 opacity-20">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                    alt="JB Industries Watermark"
                    className="h-16 w-auto filter invert"
                  />
                </div> */}

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
                        Catalog
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

      {/* Welcome Section for Logged In Users */}
      {userLoggedIn && user && (
        <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 mb-4">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-blue-600 font-semibold">
                  Welcome Back!
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Hello, {user.name}! 👋
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for choosing JB Industries. Your account has been
                successfully saved to our MongoDB Atlas database.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Package className="mr-2 h-4 w-4" />
                    Browse Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Support
                  </Button>
                </Link>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <span>Account: {user.email}</span>
                {user.lastLogin && (
                  <span className="ml-4">
                    Last login: {new Date(user.lastLogin).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Factory className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  About JB Industries
                </h3>
                <p className="text-gray-600 mb-4">
                  Established as a leading manufacturer and supplier of
                  high-quality fastening solutions. Operating from our modern
                  facility in Rohtak, Haryana, we serve industries across India.
                </p>
                {/* <p className="text-sm text-gray-500">
                  Proprietorship by Rajni Jain
                </p> */}
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quality Management
                </h3>
                <p className="text-gray-600 mb-4">
                  ISO 45001:2018 certified for Occupational Health and Safety
                  Management Systems, ensuring the highest standards in our
                  manufacturing processes.
                </p>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Certified
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Expertise
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized in manufacturing precision fasteners and machined
                  components with focus on high tensile and stainless steel
                  materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services & Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fastening solutions designed for industrial
              applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Manufacturing Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      High Tensile Steel Fasteners
                    </h4>
                    <p className="text-gray-600">
                      Premium grade fasteners designed for heavy-duty
                      applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Stainless Steel Components
                    </h4>
                    <p className="text-gray-600">
                      Corrosion-resistant solutions for demanding environments
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Machined Components
                    </h4>
                    <p className="text-gray-600">
                      Precision-engineered parts to exact specifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Custom Solutions
                    </h4>
                    <p className="text-gray-600">
                      Tailored fastening solutions for specific requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <img
                src="./image/o.webp"
                alt="JB Industries Product Range"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="./image/oo.jpeg"
                alt="JB Industries Specialized Products"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Leading Companies */}
      <section className="py-20 bg-gray-50">
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

          <div className="bg-white rounded-lg shadow-lg p-8">
   
            {/* Scrollable container */}


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

 
</div>







            {/* Company Names */}
            {/* <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Trusted by Leading Companies: Frick • Mahindra • LGB • Fastenal
                • Sansera • Bossard • Reyher • C&S Electric • Würth
              </p>
              <div className="flex justify-center mt-4">
                <Badge
                  variant="outline"
                  className="text-green-700 border-green-200 bg-green-50"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  200+ Satisfied Clients Worldwide
                </Badge>
              </div>
            </div> */}
          </div>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stock & Warehousing
            </h2>
            <p className="text-xl text-gray-600">
              300 Ton Material of Standard Sizes always in our Stock to serve
              our customers On Time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7f11a11f2e0b4c32880fc6dacb2b8a64%2F68a66372550542cea6deed6cd302b442"
              alt="JB Industries Stock & Warehousing Facilities"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Extensive Inventory Management
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      300 Ton Capacity
                    </h4>
                    <p className="text-gray-600">
                      Massive inventory of standard sizes always ready for
                      immediate delivery
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      On-Time Delivery
                    </h4>
                    <p className="text-gray-600">
                      Strategic stock management ensures prompt customer service
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quality Storage
                    </h4>
                    <p className="text-gray-600">
                      Modern warehousing facilities maintaining product
                      integrity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div
          className="max-w-7xl mx-auto font-extrabold text-xl flex flex-col justify-start items-center"
          style={{ padding: "0 34px" }}
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-12 font-semibold gap-12">
                <div className="bg-white rounded-full p-2 flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                    alt="JB Industries Logo"
                    className="h-12 w-auto"
                  />
                </div>
                <div className="text-4xl font-semibold leading-7 ml-3">
                  <p>JB Industries</p>
                </div>
              </div>
              <p className="text-2xl font-semibold leading-5">
                Fastening Solution
              </p>
              <p className="text-white mb-4">
                JB Industries Leading manufacturer and supplier of high-quality fastening
                solutions. ISO certified for excellence in quality management.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3 text-white">
                <div className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    {/* <p className="text-sm">
                      <a
                        href="tel:+911262277721"
                        className="hover:text-white transition-colors"
                      >
                        +91-1262-277721
                      </a>
                    </p> */}
                    <p className="text-sm">
                      <a
                        href="tel:+919876543210"
                        className="hover:text-white transition-colors"
                      >
                        +91 87087 88516
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 font-bold text-2xl">
                  <Mail className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    <p className="text-sm">info@jbinds.com</p>
                    <p className="text-sm">sales@jbindus.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    <p className="text-sm">Plot no. 107, Gaddi Khedi Road</p>
                    <p className="text-sm">
                      <strong>HSIIDC Industrial Area</strong>
                    </p>
                    <p className="text-sm">Rohtak, Haryana 124001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-white">
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
                    to="/certifications"
                    className="hover:text-white transition-colors"
                  >
                    Certifications
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
                <li>
                  <Link
                    to="/quote"
                    className="hover:text-white transition-colors"
                  >
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            {/* <p className="text-white text-sm">
              © 2024 JB Industries. All rights reserved. | Proprietary business
              by Rajni Jain
            </p> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
