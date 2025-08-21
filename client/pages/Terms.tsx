import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";

export default function Terms() {
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
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the services of JB Industries, you accept
                and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Company Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Legal Name:</strong> Rajni Jain
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Trade Name:</strong> JB Industries
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>GST Number:</strong> 06AGZPJ8621P1ZF
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Plot no. 107, Gaddi Khedi Road,
                  HSIIDC Industrial Area, Rohtak, Haryana 124001
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Products and Services
              </h2>
              <p className="text-gray-700 mb-4">
                JB Industries specializes in manufacturing high tensile and
                stainless steel fasteners and machined components. Our product
                specifications, quality standards, and delivery terms are
                subject to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>ISO 9001:2015 Quality Management Standards</li>
                <li>ISO 14001:2015 Environmental Management Standards</li>
                <li>ISO 45001:2018 Occupational Health & Safety Standards</li>
                <li>Industry specifications and customer requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Orders and Quotations
              </h2>
              <p className="text-gray-700 mb-4">
                All quotations are valid for 30 days unless otherwise specified.
                Orders are subject to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Written confirmation and acceptance</li>
                <li>Credit approval and payment terms agreement</li>
                <li>Material availability and production capacity</li>
                <li>Compliance with minimum order quantities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Payment Terms
              </h2>
              <p className="text-gray-700 mb-4">
                Standard payment terms are Net 30 days from invoice date unless
                otherwise agreed in writing. Late payments may be subject to
                interest charges at the rate of 1.5% per month.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Quality Assurance
              </h2>
              <p className="text-gray-700 mb-4">
                All products are manufactured according to agreed specifications
                and undergo quality control processes. We provide:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Material test certificates when required</li>
                <li>Dimensional inspection reports</li>
                <li>Compliance with agreed quality standards</li>
                <li>Traceability documentation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Delivery and Risk
              </h2>
              <p className="text-gray-700 mb-4">
                Delivery dates are estimates and not guaranteed unless
                specifically agreed in writing. Risk of loss or damage passes to
                the buyer upon delivery to the carrier or pickup by the buyer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Returns and Warranty
              </h2>
              <p className="text-gray-700 mb-4">
                Products manufactured to customer specifications are not
                returnable unless defective. Standard products may be returned
                within 30 days in original condition with prior authorization.
                We warrant our products to be free from defects in material and
                workmanship for a period of 12 months.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                Our liability is limited to the replacement or credit of
                defective products. We shall not be liable for consequential,
                incidental, or special damages arising from the use of our
                products.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Intellectual Property
              </h2>
              <p className="text-gray-700 mb-4">
                All designs, drawings, specifications, and technical information
                provided by JB Industries remain our property. Customer
                specifications and designs provided to us are kept confidential.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Force Majeure
              </h2>
              <p className="text-gray-700 mb-4">
                We shall not be liable for delays or failures in performance due
                to circumstances beyond our reasonable control, including but
                not limited to acts of God, natural disasters, government
                actions, labor disputes, or material shortages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Governing Law
              </h2>
              <p className="text-gray-700 mb-4">
                These terms shall be governed by and construed in accordance
                with the laws of India. Any disputes shall be subject to the
                jurisdiction of courts in Rohtak, Haryana.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Modifications
              </h2>
              <p className="text-gray-700 mb-4">
                These terms may be modified only by written agreement signed by
                both parties. We reserve the right to update these terms with
                reasonable notice for future transactions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                For questions regarding these terms of service, please contact
                us:
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
