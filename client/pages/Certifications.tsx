import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Shield,
  CheckCircle,
  Calendar,
  FileText,
  Users,
  Eye,
  Download,
  Verified,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Certifications() {
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
                className="text-blue-600 font-medium transition-colors"
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

      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('./image/cert.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white bg-opacity-20 text-white border-white border-opacity-30">
              <Verified className="h-3 w-3 mr-1" />
              ISO 45001:2018 Certified
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quality Certifications
              <span className="block text-green-300">& Standards</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Committed to the highest standards of quality, safety, and
              environmental responsibility in all our manufacturing processes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Certification */}



{/*       
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-100 rounded-full p-3">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    ISO 45001:2018
                  </h2>
                  <p className="text-lg text-gray-600">
                    Occupational Health and Safety Management Systems
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Certification Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Certificate Number</p>
                      <p className="font-semibold text-gray-900">22UO11BV</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Certification Body</p>
                      <p className="font-semibold text-gray-900">
                        Royal Impact Certification Ltd.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Valid From</p>
                      <p className="font-semibold text-gray-900">30/01/2025</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Valid Until</p>
                      <p className="font-semibold text-gray-900">22/11/2025</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-500">Scope of Certification</p>
                      <p className="font-semibold text-gray-900">
                        Manufacturing & Supply of High Tensile & Stainless Steel
                        Fasteners & Machined Components
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Audit Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">
                        Initial Certification: 23/11/2022
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">
                        Current Certification: 30/01/2025
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">
                        1st Surveillance Audit: Successfully Conducted
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">
                        2nd Surveillance Audit: Successfully Conducted
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
                        "_blank",
                      )
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F5e0e757386e147cfaa7d42522f9cf614?format=webp&width=800",
                        "_blank",
                      )
                    }
                    variant="outline"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Full Certificate
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Official Certificates
              </h3>

              
              <div className="overflow-x-auto">
                <div className="flex space-x-6 pb-4 min-w-max">
                 
                  <div className="bg-white rounded-xl shadow-lg border-2 border-blue-200 p-4 flex-shrink-0 w-80">
                    <div className="text-center mb-4">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block mb-3">
                        <h3 className="font-bold text-lg">ISO 9001:2015</h3>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        Quality Management Systems
                      </h4>
                    </div>
                    <div className="mb-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F5ba6b03943a64e02a4ccd6c1bd5a598f?format=webp&width=800"
                        alt="ISO 9001:2015 Quality Management Certificate"
                        className="w-full h-48 object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() =>
                          window.open(
                            "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F5ba6b03943a64e02a4ccd6c1bd5a598f?format=webp&width=800",
                            "_blank",
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <strong>Certificate No:</strong> 22UQ11BT
                      </p>
                      <p>
                        <strong>Valid Until:</strong> 22/11/2025
                      </p>
                      <p>
                        <strong>Certified by:</strong> Royal Impact
                        Certification Ltd.
                      </p>
                    </div>
                    <div className="flex items-center text-green-600 mt-3">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">Current & Valid</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg border-2 border-green-200 p-4 flex-shrink-0 w-80">
                    <div className="text-center mb-4">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-full inline-block mb-3">
                        <h3 className="font-bold text-lg">ISO 14001:2015</h3>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        Environmental Management System
                      </h4>
                    </div>
                    <div className="mb-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb1c0643435d548bfa13bd07ab42be11e?format=webp&width=800"
                        alt="ISO 14001:2015 Environmental Management Certificate"
                        className="w-full h-48 object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() =>
                          window.open(
                            "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb1c0643435d548bfa13bd07ab42be11e?format=webp&width=800",
                            "_blank",
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <strong>Certificate No:</strong> 22UE11BU
                      </p>
                      <p>
                        <strong>Valid Until:</strong> 22/11/2025
                      </p>
                      <p>
                        <strong>Certified by:</strong> Royal Impact
                        Certification Ltd.
                      </p>
                    </div>
                    <div className="flex items-center text-green-600 mt-3">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">Current & Valid</span>
                    </div>
                  </div>

                 
                  <div className="bg-white rounded-xl shadow-lg border-2 border-orange-200 p-4 flex-shrink-0 w-80">
                    <div className="text-center mb-4">
                      <div className="bg-orange-600 text-white px-4 py-2 rounded-full inline-block mb-3">
                        <h3 className="font-bold text-lg">ISO 45001:2018</h3>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        Occupational Health & Safety Management Systems
                      </h4>
                    </div>
                    <div className="mb-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F154ed6e11dff4496aa2c177f79d6624f?format=webp&width=800"
                        alt="ISO 45001:2018 Occupational Health & Safety Certificate"
                        className="w-full h-48 object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() =>
                          window.open(
                            "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F154ed6e11dff4496aa2c177f79d6624f?format=webp&width=800",
                            "_blank",
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <strong>Certificate No:</strong> 22UO11BV
                      </p>
                      <p>
                        <strong>Valid Until:</strong> 22/11/2025
                      </p>
                      <p>
                        <strong>Certified by:</strong> Royal Impact
                        Certification Ltd.
                      </p>
                    </div>
                    <div className="flex items-center text-green-600 mt-3">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">Current & Valid</span>
                    </div>
                  </div>
                </div>

             
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500">
                    ← Scroll horizontally to view all certificates →
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h4 className="font-bold text-gray-900 mb-4">
                  Certificate Verification
                </h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    <strong>Certification Body:</strong> Royal Impact
                    Certification Ltd. (RICL)
                  </p>
                  <p>
                    <strong>Address:</strong> 623, Tower-B, iThum, Plot No. A -
                    40, Sector - 62, Noida 201301, India
                  </p>
                  <p>
                    <strong>Website:</strong> www.ricliso.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 120 4113693
                  </p>
                  <p>
                    <strong>Validity:</strong> 30/01/2025 Until 22/11/2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

{/* 
  <div className="flex space-x-6 pb-4 min-w-max">
                 
                  <div className="bg-white rounded-xl shadow-lg border-2 border-blue-200 p-4 flex-shrink-0 w-80">
                    <div className="text-center mb-4">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block mb-3">
                        <h3 className="font-bold text-lg">ISO 9001:2015</h3>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        Quality Management Systems
                      </h4>
                    </div>
                    <div className="mb-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F5ba6b03943a64e02a4ccd6c1bd5a598f?format=webp&width=800"
                        alt="ISO 9001:2015 Quality Management Certificate"
                        className="w-full h-48 object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() =>
                          window.open(
                            "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F5ba6b03943a64e02a4ccd6c1bd5a598f?format=webp&width=800",
                            "_blank",
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <strong>Certificate No:</strong> 22UQ11BT
                      </p>
                      <p>
                        <strong>Valid Until:</strong> 22/11/2025
                      </p>
                      <p>
                        <strong>Certified by:</strong> Royal Impact
                        Certification Ltd.
                      </p>
                    </div>
                    <div className="flex items-center text-green-600 mt-3">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">Current & Valid</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg border-2 border-green-200 p-4 flex-shrink-0 w-80">
                    <div className="text-center mb-4">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-full inline-block mb-3">
                        <h3 className="font-bold text-lg">ISO 14001:2015</h3>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        Environmental Management System
                      </h4>
                    </div>
                    <div className="mb-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb1c0643435d548bfa13bd07ab42be11e?format=webp&width=800"
                        alt="ISO 14001:2015 Environmental Management Certificate"
                        className="w-full h-48 object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() =>
                          window.open(
                            "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb1c0643435d548bfa13bd07ab42be11e?format=webp&width=800",
                            "_blank",
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <strong>Certificate No:</strong> 22UE11BU
                      </p>
                      <p>
                        <strong>Valid Until:</strong> 22/11/2025
                      </p>
                      <p>
                        <strong>Certified by:</strong> Royal Impact
                        Certification Ltd.
                      </p>
                    </div>
                    <div className="flex items-center text-green-600 mt-3">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">Current & Valid</span>
                    </div>
                  </div>

                 
                  <div className="bg-white rounded-xl shadow-lg border-2 border-orange-200 p-4 flex-shrink-0 w-80">
                    <div className="text-center mb-4">
                      <div className="bg-orange-600 text-white px-4 py-2 rounded-full inline-block mb-3">
                        <h3 className="font-bold text-lg">ISO 45001:2018</h3>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        Occupational Health & Safety Management Systems
                      </h4>
                    </div>
                    <div className="mb-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F154ed6e11dff4496aa2c177f79d6624f?format=webp&width=800"
                        alt="ISO 45001:2018 Occupational Health & Safety Certificate"
                        className="w-full h-48 object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() =>
                          window.open(
                            "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F154ed6e11dff4496aa2c177f79d6624f?format=webp&width=800",
                            "_blank",
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <strong>Certificate No:</strong> 22UO11BV
                      </p>
                      <p>
                        <strong>Valid Until:</strong> 22/11/2025
                      </p>
                      <p>
                        <strong>Certified by:</strong> Royal Impact
                        Certification Ltd.
                      </p>
                    </div>
                    <div className="flex items-center text-green-600 mt-3">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">Current & Valid</span>
                    </div>
                  </div>
                </div> */}

<div className="px-4 md:px-10 py-10 bg-gray-50">
  <div className="flex flex-wrap justify-center gap-6">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-lg border-2 border-blue-200 p-4 w-80">
      <div className="text-center mb-4">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block mb-3">
          <h3 className="font-bold text-lg">ISO 9001:2015</h3>
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-3">
          Quality Management Systems
        </h4>
      </div>
      <div className="mb-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F5ba6b03943a64e02a4ccd6c1bd5a598f?format=webp&width=800"
          alt="ISO 9001:2015 Quality Management Certificate"
          className="w-full h-48 object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() =>
            window.open(
              "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F5ba6b03943a64e02a4ccd6c1bd5a598f?format=webp&width=800",
              "_blank"
            )
          }
        />
      </div>
      <div className="space-y-2 text-sm text-gray-700">
        {/* <p>
          <strong>Certificate No:</strong> 22UQ11BT
        </p>
        <p>
          <strong>Valid Until:</strong> 22/11/2025
        </p> */}
        <p>
          <strong>Certified by:</strong> Royal Impact Certification Ltd.
        </p>
      </div>
      <div className="flex items-center text-green-600 mt-3">
        <CheckCircle className="h-4 w-4 mr-2" />
        <span className="text-sm">Current & Valid</span>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-lg border-2 border-green-200 p-4 w-80">
      <div className="text-center mb-4">
        <div className="bg-green-600 text-white px-4 py-2 rounded-full inline-block mb-3">
          <h3 className="font-bold text-lg">ISO 14001:2015</h3>
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-3">
          Environmental Management System
        </h4>
      </div>
      <div className="mb-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb1c0643435d548bfa13bd07ab42be11e?format=webp&width=800"
          alt="ISO 14001:2015 Environmental Management Certificate"
          className="w-full h-48 object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() =>
            window.open(
              "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb1c0643435d548bfa13bd07ab42be11e?format=webp&width=800",
              "_blank"
            )
          }
        />
      </div>
      <div className="space-y-2 text-sm text-gray-700">
        {/* <p>
          <strong>Certificate No:</strong> 22UE11BU
        </p>
        <p>
          <strong>Valid Until:</strong> 22/11/2025
        </p> */}
        <p>
          <strong>Certified by:</strong> Royal Impact Certification Ltd.
        </p>
      </div>
      <div className="flex items-center text-green-600 mt-3">
        <CheckCircle className="h-4 w-4 mr-2" />
        <span className="text-sm">Current & Valid</span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-lg border-2 border-orange-200 p-4 w-80">
      <div className="text-center mb-4">
        <div className="bg-orange-600 text-white px-4 py-2 rounded-full inline-block mb-3">
          <h3 className="font-bold text-lg">ISO 45001:2018</h3>
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-3">
          Occupational Health & Safety Management Systems
        </h4>
      </div>
      <div className="mb-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F154ed6e11dff4496aa2c177f79d6624f?format=webp&width=800"
          alt="ISO 45001:2018 Occupational Health & Safety Certificate"
          className="w-full h-48 object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() =>
            window.open(
              "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F154ed6e11dff4496aa2c177f79d6624f?format=webp&width=800",
              "_blank"
            )
          }
        />
      </div>
      <div className="space-y-2 text-sm text-gray-700">
        {/* <p>
          <strong>Certificate No:</strong> 22UO11BV
        </p>
        <p>
          <strong>Valid Until:</strong> 22/11/2025
        </p> */}
        <p>
          <strong>Certified by:</strong> Royal Impact Certification Ltd.
        </p>
      </div>
      <div className="flex items-center text-green-600 mt-3">
        <CheckCircle className="h-4 w-4 mr-2" />
        <span className="text-sm">Current & Valid</span>
      </div>
    </div>
  </div>
</div>

      {/* Complete Certification Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete ISO Certification Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Triple certification demonstrating our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ISO 9001:2015
                </h3>
                <p className="text-gray-600 mb-4">
                  Quality Management System ensuring consistent quality in all
                  our manufacturing processes.
                </p>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Quality Management
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ISO 14001:2015
                </h3>
                <p className="text-gray-600 mb-4">
                  Environmental Management System demonstrating our commitment
                  to environmental responsibility.
                </p>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Environmental Management
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ISO 45001:2018
                </h3>
                <p className="text-gray-600 mb-4">
                  Occupational Health and Safety Management System ensuring
                  workplace safety for all.
                </p>
                <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                  Safety Management
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What ISO Standards Mean */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What ISO 45001:2018 Means
            </h2>
            <p className="text-xl text-gray-600">
              Understanding our commitment to workplace safety and health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Workplace Safety
                </h3>
                <p className="text-gray-600">
                  Systematic approach to managing workplace health and safety
                  risks, ensuring a safe working environment for all employees
                  and stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Employee Well-being
                </h3>
                <p className="text-gray-600">
                  Demonstrates our commitment to protecting the health and
                  safety of our workforce through proper training, procedures,
                  and continuous improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Continuous Improvement
                </h3>
                <p className="text-gray-600">
                  Regular monitoring, evaluation, and improvement of our safety
                  management systems to maintain the highest standards of
                  occupational health and safety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Compliance & Standards */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Quality Standards
            </h2>
            <p className="text-xl text-gray-600">
              Adhering to national and international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  GST Compliance
                </h3>
                <p className="text-sm text-gray-600">
                  Registered under GST with number 06AGZPJ8621P1ZF
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Quality Management
                </h3>
                <p className="text-sm text-gray-600">
                  Rigorous quality control processes for all products
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Safety Standards
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive safety protocols and procedures
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Regular Audits
                </h3>
                <p className="text-sm text-gray-600">
                  Periodic surveillance audits ensure continued compliance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits for Our Customers
            </h2>
            <p className="text-xl text-gray-600">
              How our certifications benefit your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Assured Quality
                  </h3>
                  <p className="text-gray-600">
                    Our ISO certification ensures consistent quality in all
                    products and services, giving you confidence in every order.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Risk Mitigation
                  </h3>
                  <p className="text-gray-600">
                    Our safety management systems reduce risks in your supply
                    chain and ensure reliable delivery schedules.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Compliance Support
                  </h3>
                  <p className="text-gray-600">
                    Working with a certified supplier helps you meet your own
                    compliance requirements and industry standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-600">
                    Our commitment to continuous improvement means you benefit
                    from ongoing enhancements in our processes and products.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Transparency
                  </h3>
                  <p className="text-gray-600">
                    Regular audits and certifications provide transparency in
                    our operations and build trust in our business relationship.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    International Standards
                  </h3>
                  <p className="text-gray-600">
                    Our adherence to international standards ensures our
                    products meet global quality and safety requirements.
                  </p>
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
            Partner with a Certified Manufacturer
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the difference that quality certifications make in
            reliability, safety, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Contact Us Today
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Our Services
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
