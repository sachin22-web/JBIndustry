import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  User,
  MessageSquare,
  Send,
  Navigation,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                className="text-blue-600 font-medium transition-colors"
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
                  className="block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md transition-colors"
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

      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('./image/cc.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white bg-opacity-20 text-white border-white border-opacity-30">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact
              <span className="block text-blue-300">JB Industries</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to discuss your fastening requirements? Our team is here to
              help you find the perfect solution for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Multiple Office Locations */}
    <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Locations
      </h2>
      <p className="text-xl text-gray-600">
        Multiple offices serving customers across regions
      </p>
    </div>

    {/* ✅ Centered Card */}
    <div className="flex justify-center">
      <Card className="border-blue-200 border-2 bg-blue-50 w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Building className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Factory Address</h3>

          <div className="text-gray-600 space-y-1">
            <p className="font-medium">Plot no. 107</p>
            <p>Gaddi Khedi Road</p>
            <p>HSIIDC Industrial Area</p>
            <p>Rohtak, Haryana 124001</p>
            <p>India</p>
          </div>

          <Badge className="mt-4 bg-blue-600 text-white">Manufacturing Unit</Badge>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">

{/* 
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Location
                </h3>
                <div
                  className="text-gray-600 space-y-1 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=Plot+no.+107,+Gaddi+Khedi+Road,+HSIIDC+Industrial+Area,+Rohtak,+Haryana+124001,+India",
                      "_blank",
                    )
                  }
                >
                  <p className="hover:text-blue-600 transition-colors">
                    Plot no. 107
                  </p>
                  <p className="hover:text-blue-600 transition-colors">
                    Gaddi Khedi Road
                  </p>
                  <p className="hover:text-blue-600 transition-colors">
                    HSIIDC Industrial Area
                  </p>
                  <p className="hover:text-blue-600 transition-colors">
                    Rohtak, Haryana 124001
                  </p>
                  <p className="hover:text-blue-600 transition-colors">India</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Plot+no.+107,+Gaddi+Khedi+Road,+HSIIDC+Industrial+Area,+Rohtak,+Haryana+124001,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="mt-4" variant="outline" size="sm">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card> */}


<Card className="border-gray-200 hover:shadow-lg transition-shadow">
  <CardContent className="p-8 text-center">
    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
      <MapPin className="h-8 w-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>

    <div className="text-gray-600 space-y-1">
      <p>Plot no. 107</p>
      <p>Gaddi Khedi Road</p>
      <p>HSIIDC Industrial Area</p>
      <p>Rohtak, Haryana 124001</p>
      <p>India</p>
    </div>
 
        <Button className="mt-4" variant="outline"   onClick={() =>
              window.open(
                "https://maps.google.com/?q=Plot+no.+107,+Gaddi+Khedi+Road,+HSIIDC+Industrial+Area,+Rohtak,+Haryana+124001,+India",
                "_blank",
              )
            }>
                  <Navigation className="mr-2 h-4 w-4" />
                  Open in Google Maps
                </Button>
    {/* 🗺️ Embedded Google Map */}
 
  </CardContent>
</Card>


            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Phone & Fax
                </h3>
                <div className="text-gray-600 space-y-1">
                  {/* <p>
                    Phone:{" "}
                    <a
                      href="tel:+911262277721"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      +91-1262-277721
                    </a>
                  </p> */}
                  <p>
                    Mobile:{" "}
                    <a
                      href="tel:+919876543210"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      +91 87087 88516
                    </a>
                  </p>
                  <p>Fax: Available on request</p>
                </div>
                <a href="tel:+911262277721">
                  <Button className="mt-4" variant="outline" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Email Us
                </h3>
                <div className="text-gray-600 space-y-1">
                  <p>
                    {/* General:{" "} */}
                    <a
                      href="mailto:info@jbindustries.com"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      info@jbinds.com
                    </a>
                  </p>
                  <p>
                    {/* Sales:{" "} */}
                    <a
                      href="mailto:sales@jbindustries.com"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                    md@jbindus.com
                    </a>
                  </p>
                  {/* <p>
                    Support:{" "}
                    <a
                      href="mailto:support@jbindustries.com"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      support@jbindustries.com
                    </a>
                  </p> */}
                </div>
                <a href="mailto:info@jbindustries.com">
                  <Button className="mt-4" variant="outline" size="sm">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Information
            </h2>
            <p className="text-xl text-gray-600">
              Official company details and registration information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Legal Information
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Legal Name:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      Rajni Jain
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Trade Name:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      JB Industries
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Constitution:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      Proprietorship
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Proprietor Details
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Name:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      Rajni Jain
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Designation:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      Proprietor
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">State:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      Haryana
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Registration Details
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">GST No:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      06AGZPJ8621P1ZF
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Date of Liability:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      19/04/2019
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      Regular
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products or services? Fill out the form
                and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MessageSquare className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Quick Response
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We respond to all inquiries within 24 hours during
                      business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p>Time Zone: IST (Indian Standard Time)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <User className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Expert Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our experienced team provides technical support and custom
                      solution recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 9999999999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="custom-quote">Custom Quote Request</option>
                      <option value="technical-support">
                        Technical Support
                      </option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your requirements, specifications, quantities, and timeline..."
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <Link
                        to="/privacy"
                        className="text-blue-600 hover:underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/terms"
                        className="text-blue-600 hover:underline"
                      >
                        Terms of Service
                      </Link>
                    </label>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>




      {/* Company Greetings */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F280cf759d2404c608cfc8bc21f8ace12?format=webp&width=800"
              alt="JB Industries Greetings"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
            />
            <p className="text-lg text-gray-600 mb-8">
              We look forward to building lasting partnerships and delivering
              excellence in every interaction.
            </p>
          </div>
        </div>
      </section> */}

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us on Map
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of HSIIDC Industrial Area, Rohtak
            </p>
          </div>

   <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10">
  <div className="w-full bg-gray-200 rounded-lg overflow-hidden shadow-md">
    <iframe
      title="Company Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.775610719213!2d76.58556417535469!3d28.909004074016425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db0555566b4e5%3A0x49f7f59bb6f2aeb2!2sHSIIDC%20Industrial%20Area%2C%20Rohtak%2C%20Haryana%20124001!5e0!3m2!1sen!2sin!4v1721212879821!5m2!1sen!2sin"
      className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div className="flex justify-center mt-6">
    <a
      href="https://maps.google.com/?q=Plot+no.+107,+Gaddi+Khedi+Road,+HSIIDC+Industrial+Area,+Rohtak,+Haryana+124001,+India"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline">
        <Navigation className="mr-2 h-4 w-4" />
        Open in Google Maps
      </Button>
    </a>
  </div>
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
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    {/* <p className="text-sm">+91-1262-277721</p> */}
                    <p className="text-sm">+91 87087 88516</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    <p className="text-sm"> info@jbinds.com</p>
                    <p className="text-sm">md@jbindus.com</p>
                    {/* <p className="text-sm">jkindustries09@gmail.com</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    <p className="text-sm">Plot no. 107, Gaddi Khedi Road</p>
                    <p className="text-sm">HSIIDC Industrial Area</p>
                    <p className="text-sm">Rohtak, Haryana 124001</p>
                  </div>
                </div>
              </div>
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
