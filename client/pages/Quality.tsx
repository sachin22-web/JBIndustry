import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, CheckCircle, Award, Target, Users } from "lucide-react";

export default function Quality() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fe47a2c8dea8b451da551bc04f83bbb06?format=webp&width=800"
                alt="JB Industries Logo"
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  JB Industries
                </h1>
                <p className="text-xs text-gray-500">Fastening Solution</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Products
              </Link>
              <Link
                to="/certifications"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Certifications
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
              <Link
                to="/quote"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/products"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/certifications"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Certifications
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/quote"
                  className="block mx-3 mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Quality Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Committed to delivering superior quality through rigorous
              processes, continuous improvement, and international standards
              compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-blue-600 font-semibold">
                  ISO 9001:2015
                </span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-green-600 font-semibold">
                  ISO 14001:2015
                </span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-orange-600 font-semibold">
                  ISO 45001:2018
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Management System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on international standards and best practices to ensure
              consistent quality in every product we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality Planning
              </h3>
              <p className="text-gray-600">
                Comprehensive planning processes to ensure quality at every
                stage of production.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality Control
              </h3>
              <p className="text-gray-600">
                Rigorous inspection and testing procedures throughout the
                manufacturing process.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Systematic monitoring and evaluation to prevent quality issues
                before they occur.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Continuous Improvement
              </h3>
              <p className="text-gray-600">
                Regular review and enhancement of processes based on feedback
                and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quality Testing & Inspection
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art testing facilities ensure every product
                meets or exceeds industry standards and customer specifications.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Dimensional Inspection
                    </h3>
                    <p className="text-gray-600">
                      Precision measurement using calibrated instruments for
                      exact dimensional compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Material Testing
                    </h3>
                    <p className="text-gray-600">
                      Chemical composition and mechanical property verification
                      for material compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Surface Treatment Verification
                    </h3>
                    <p className="text-gray-600">
                      Testing coating thickness, adhesion, and corrosion
                      resistance properties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Performance Testing
                    </h3>
                    <p className="text-gray-600">
                      Torque, tensile strength, and durability testing to ensure
                      product performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F561f2f60827243e1b66f8cc220f0da2b?format=webp&width=800"
                alt="Quality Testing Facilities"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ISO Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International Standards Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is demonstrated through our ISO
              certifications and adherence to international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ISO 9001:2015
              </h3>
              <p className="text-gray-600 mb-4">Quality Management Systems</p>
              <p className="text-sm text-gray-500">
                Ensures consistent quality in all our manufacturing processes
                and customer service delivery.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ISO 14001:2015
              </h3>
              <p className="text-gray-600 mb-4">Environmental Management</p>
              <p className="text-sm text-gray-500">
                Demonstrates our commitment to environmental responsibility and
                sustainable manufacturing practices.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ISO 45001:2018
              </h3>
              <p className="text-gray-600 mb-4">Occupational Health & Safety</p>
              <p className="text-sm text-gray-500">
                Ensures safe working conditions and demonstrates our commitment
                to employee well-being.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fc02af939e05344ca8a98be04748e712b?format=webp&width=800"
              alt="ISO Certifications"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Quality Policy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              JB Industries is committed to delivering excellence through
              continuous improvement and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  Customer satisfaction through quality products and services
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  Continuous improvement of processes and systems
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  Compliance with applicable standards and regulations
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  Employee training and development in quality practices
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Quality Objectives</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  Zero defect manufacturing through robust quality control
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  On-time delivery of products meeting specifications
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  Continuous reduction in customer complaints
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  Regular enhancement of employee competencies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience Quality Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with us for superior quality fastening solutions backed by
            international standards and continuous improvement.
          </p>
          <div className="space-x-4">
            <Link
              to="/quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Quality Quote
            </Link>
            <Link
              to="/certifications"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              View Certifications
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                  alt="JB Industries Logo"
                  className="h-6 w-auto"
                />
                <div className="ml-3">
                  <h3 className="text-lg font-bold">JB Industries</h3>
                  <p className="text-gray-400 text-sm">Fastening Solution</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Leading manufacturer of high-quality fastening solutions with
                ISO certifications and commitment to excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quality"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Quality
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certifications"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Business Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Info</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <strong>Legal Name:</strong> Rajni Jain
                </li>
                <li>
                  <strong>Trade Name:</strong> JB Industries
                </li>
                <li>
                  <strong>GST:</strong> 06AGZPJ8621P1ZF
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-blue-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-blue-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 JB Industries. All rights reserved. | Proprietary business
              by Rajni Jain
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
