import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";

export default function Privacy() {
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                At JB Industries, we collect information you provide directly to
                us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Request a quote or contact us through our website</li>
                <li>
                  Subscribe to our newsletters or marketing communications
                </li>
                <li>Participate in surveys or feedback forms</li>
                <li>Apply for employment with us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and respond to your inquiries and requests</li>
                <li>
                  Send you technical notices, updates, and marketing
                  communications
                </li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Information Sharing
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  Service providers who assist us in operating our business
                </li>
                <li>Legal authorities when required by law</li>
                <li>
                  Business partners for joint marketing efforts (with your
                  consent)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Cookies and Tracking
              </h2>
              <p className="text-gray-700 mb-4">
                Our website may use cookies and similar tracking technologies to
                enhance your experience. You can control cookie settings through
                your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Third-Party Links
              </h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our data
                practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">info@jbindustries.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">+91-1262-277721</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <span className="text-gray-700">
                      Plot no. 107, Gaddi Khedi Road, HSIIDC Industrial Area,
                      Rohtak, Haryana 124001
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

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
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">
                    info@jbindustries.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">+91-1262-277721</span>
                </div>
              </div>
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
