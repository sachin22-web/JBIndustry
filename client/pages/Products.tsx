import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Package,
  CheckCircle,
  Search,
  Filter,
  ShoppingCart,
  Star,
  Award,
  Shield,
  Phone,
  Mail,
  ArrowRight,
  Download,
  Wrench,
  Settings,
  Grid3X3,
  List,
  Eye,
  ExternalLink,
  FileText,
  Globe,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@shared/types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("name");
  const [loading, setLoading] = useState(true);

  // Industrial product data matching the German catalog style
  const industrialProducts = [
    // {
    //   _id: "1",
    //   id: "1",
    //   name: "Verbindungselemente",
    //   category: "Fasteners",
    //   description:
    //     "Das REYHER-Angebot an Verbindungselementen gehört zu den breitesten und tiefsten Sortimenten der Branche. Hierzu gehören sowohl genormte als auch nicht genormte Verbindungselemente in sämtlichen Abmessungen und Oberflächen.",
    //   detailedDescription:
    //     "Für alle Fälle die richtige Verbindung - kontinuierliche Pflege des Sortiments für maximale Verfügbarkeit.",
    //   price: 850,
    //   imageUrl:
    //     "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F3915672a959f416695f9d0f2b1105224?format=webp&width=1200&quality=90",
    //   inStock: true,
    //   catalogPdf:
    //     "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
    // },
    {
      _id: "2",
      id: "2",
      name: "High Tensile Steel Fasteners",
      category: "Industrial Fasteners",
      description:
        "Premium grade fasteners designed for heavy-duty applications with superior strength and durability in automotive and industrial sectors.",
      detailedDescription:
        "Manufactured to ISO standards with rigorous quality control for maximum reliability.",
      price: 1200,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F47a2660e8ad3448c93d93260c707cc3d?format=webp&width=1200&quality=90",
      inStock: true,
      catalogPdf:
        "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
    },
    {
      _id: "3",
      id: "3",
      name: "Stainless Steel Components",
      category: "Marine Grade",
      description:
        "Corrosion-resistant fasteners designed for marine and chemical industry applications with exceptional durability.",
      detailedDescription:
        "Grade 316 stainless steel for maximum corrosion resistance in harsh environments.",
      price: 950,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F38fded8719594e939fcd01905054c404?format=webp&width=1200&quality=90",
      inStock: true,
      catalogPdf:
        "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
    },
    {
      _id: "4",
      id: "4",
      name: "Precision Machined Parts",
      category: "Custom Components",
      description:
        "Custom machined components manufactured to exact specifications for automotive and aerospace industry requirements.",
      detailedDescription:
        "CNC machined with tight tolerances for critical applications.",
      price: 1850,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F47a2660e8ad3448c93d93260c707cc3d?format=webp&width=1200&quality=90",
      inStock: true,
      catalogPdf:
        "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
    },
    {
      _id: "5",
      id: "5",
      name: "Industrial Bolts & Nuts",
      category: "Construction Grade",
      description:
        "Heavy-duty bolts and nuts for construction and infrastructure projects with certified quality standards.",
      detailedDescription:
        "Galvanized coating for enhanced corrosion protection in outdoor applications.",
      price: 750,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F38fded8719594e939fcd01905054c404?format=webp&width=1200&quality=90",
      inStock: true,
      catalogPdf:
        "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
    },
    {
      _id: "6",
      id: "6",
      name: "Specialty Screws",
      category: "Electronics",
      description:
        "Custom designed screws for electronics and precision equipment manufacturing with micro-threading technology.",
      detailedDescription:
        "Available in various head styles and drives for specific applications.",
      price: 650,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F47a2660e8ad3448c93d93260c707cc3d?format=webp&width=1200&quality=90",
      inStock: true,
      catalogPdf:
        "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Try to fetch from admin API first
        const response = await fetch("/api/products");
        if (response.ok) {
          const apiResponse = await response.json();
          // Handle different API response structures
          let apiProducts = [];
          if (Array.isArray(apiResponse)) {
            apiProducts = apiResponse;
          } else if (apiResponse && Array.isArray(apiResponse.products)) {
            apiProducts = apiResponse.products;
          } else if (apiResponse && Array.isArray(apiResponse.data)) {
            apiProducts = apiResponse.data;
          }

          // Combine API products with static industrial products
          const allProducts = [...apiProducts, ...industrialProducts];
          setProducts(allProducts);
          setFilteredProducts(allProducts);
        } else {
          // Fallback to static data if API fails
          setProducts(industrialProducts);
          setFilteredProducts(industrialProducts);
        }
      } catch (error) {
        console.error("❌ Failed to fetch products:", error);
        // Fallback to static data on error
        setProducts(industrialProducts);
        setFilteredProducts(industrialProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy]);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  const handleCatalogAction = (action: string, product: any) => {
    switch (action) {
      case "webshop":
        window.open("/products", "_self");
        break;
      case "catalog":
        window.open(product.catalogPdf, "_blank");
        break;
      case "epaper":
        window.open(product.catalogPdf, "_blank");
        break;
      default:
        break;
    }
  };
   const handleDownloadCatalog = () => {
    // Open PDF in new tab
    window.open(
      "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
      "_blank",
    );
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
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
                className="text-blue-600 font-medium transition-colors"
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

      {/* Hero Section - German Style */}

      <section
        className="relative text-white py-20 border-b-2 border-orange-400"
        style={{
          backgroundImage: "url('/image/banner1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Products
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow">
            High-performance industrial components you can trust.
          </p>
        </div>
      </section>


      {/* Filters and Search */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Products Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All category" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sortieren nach" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">
                   Price: Low to High
                  </SelectItem>
                  <SelectItem value="price-high">
                     Price: High to Low
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="bg-orange-500 hover:bg-orange-600"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="bg-orange-500 hover:bg-orange-600"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Products Grid/List - Screenshot Based Layout */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Products ({filteredProducts.length})
            </h2>
            {/* <p className="text-gray-600">
              Zeigt {filteredProducts.length} von {products.length} Produkten
            </p> */}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Produkte werden geladen...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Keine Produkte gefunden
              </h3>
              <p className="text-gray-600">
                Passen Sie Ihre Such- oder Filterkriterien an
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id || product._id}
                  className="border border-gray-300 bg-[#f6f6f6]"
                >
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-[150px_1fr_200px] gap-6 items-center">
                      {/* Image */}
                      <div>
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-36 w-36 object-contain"
                          onError={(e) =>
                            (e.currentTarget.src = "/placeholder.svg")
                          }
                        />
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">
                          {product.name}
                        </h3>
                        
                        <p className="text-sm text-gray-700 mb-1">
                          {product.description}
                        </p>
                        {/* <p className="text-sm text-gray-500 mb-1">
                          Die kontinuierliche Pflege des...
                        </p> */}
                        {/* <button className="text-xs text-black hover:underline">
                          ▶ Mehr lesen
                        </button> */}
                      </div>

                      {/* Buttons */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="text-orange-600 w-4 h-4" />
                          <span className="text-sm font-semibold text-black">
                            PDF
                          </span>
                        </div>
                         <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-gray-900"
                        onClick={handleDownloadCatalog}
                      >
                        <Download className="mr-2 h-5 w-5" />
                        PDF
                      </Button>
                      
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section - German Industrial Style */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Warum unsere Produkte wählen?
            </h2>
            <p className="text-xl text-gray-600">
              Qualität und Exzellenz in jedem Bauteil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                ISO Certified
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
Advanced manufacturing processes certified with ISO 45001:2018 to ensure the highest quality standards.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                Premium Materials
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                High-grade steel and stainless steel materials sourced from trusted suppliers
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
               Quality Testing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
               Strict quality checks and testing procedures followed for every production batch.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                 Customised Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tailor-made fastening solutions designed for your specific needs.
              </p>
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
                    className="h-9 w-auto"
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
