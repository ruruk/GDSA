"use client";

import { useState } from "react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import PageHeader from "@/components/global/page-header";
import { Badge } from "@/components/ui/badge";
import { GdsaCard, GdsaCardContent } from "@/components/ui/gdsa-card";
import { Search, Filter, X, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";

const products = [
  {
    id: 18,
    name: "Optical Fibre (OPGW, ADSS, Duct, Fibres)",
    categories: ["Cables"],
    description:
      "High-quality optical fiber cables for telecommunications and data transmission applications.",
    specs: ["Single/Multi-mode", "Low attenuation", "High bandwidth"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 19,
    name: "Stringing Equipment (Tensioner/Puller)",
    categories: ["Equipment"],
    description:
      "Professional stringing equipment including tensioners and pullers for efficient cable installation and maintenance.",
    specs: [
      "High tension capacity",
      "Precision control",
      "Durable construction",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 20,
    name: "Grinding Elements",
    categories: ["Equipment"],
    description:
      "High-quality grinding elements for various industrial applications and maintenance operations.",
    specs: ["Precision grinding", "Long-lasting", "Multiple specifications"],
    image: "/placeholder.svg?height=200&width=300",
  },
  // Various Insulators
  {
    id: 1,
    name: "Porcelain & Composite Insulators",
    categories: ["Various Insulators"],
    description:
      "High-performance suspension insulators designed for overhead power line applications with superior electrical and mechanical properties.",
    specs: [
      "Voltage: 11kV-400kV",
      "Porcelain/Composite options",
      "Weather resistant",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Power Line Industry Insulators",
    categories: ["Various Insulators"],
    description:
      "Specialized insulators for power transmission and distribution systems, engineered for reliability and longevity.",
    specs: [
      "High dielectric strength",
      "UV resistant",
      "Multiple voltage ratings",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },

  // Electrical Equipment
  {
    id: 3,
    name: "Switchgear Equipment",
    categories: ["Electrical Equipment"],
    description:
      "Complete switchgear solutions for power distribution and control applications in electrical installations.",
    specs: ["Indoor/Outdoor options", "Up to 36kV", "Arc fault protection"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Transformer Equipment",
    categories: ["Electrical Equipment"],
    description:
      "High-quality transformers and associated equipment for power transmission and distribution networks.",
    specs: ["Oil-filled/Dry type", "Up to 132kV", "Energy efficient"],
    image: "/placeholder.svg?height=200&width=300",
  },

  // Electrical Power Fittings
  {
    id: 5,
    name: "Electrical Protective Fittings",
    categories: ["Electrical Power Fittings"],
    description:
      "Comprehensive range of protective fittings ensuring safe and reliable power line operations.",
    specs: [
      "Corrosion resistant",
      "High tensile strength",
      "Weather protection",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Power Line Fittings",
    categories: ["Electrical Power Fittings"],
    description:
      "Essential fittings for power line construction and maintenance, designed for optimal performance.",
    specs: ["Galvanized steel", "Multiple configurations", "Easy installation"],
    image: "/placeholder.svg?height=200&width=300",
  },

  // Electrical Hardware Fittings
  {
    id: 7,
    name: "Conductor Hardware",
    categories: ["Electrical Hardware Fittings"],
    description:
      "Specialized hardware fittings for conductor installation and support in power transmission systems.",
    specs: ["Aluminum alloy", "High conductivity", "Vibration resistant"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    name: "Tower Hardware Fittings",
    categories: ["Electrical Hardware Fittings"],
    description:
      "Complete range of hardware fittings for transmission tower construction and maintenance.",
    specs: [
      "Hot-dip galvanized",
      "High strength steel",
      "Corrosion protection",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },

  // Cables
  {
    id: 11,
    name: "ACSR Conductor",
    categories: ["Cables"],
    description:
      "Aluminum Conductor Steel Reinforced cable for overhead power transmission applications.",
    specs: [
      "High strength-to-weight ratio",
      "Corrosion resistant",
      "Various conductor sizes",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 12,
    name: "AAAC Conductor",
    categories: ["Cables"],
    description:
      "All Aluminum Alloy Conductor offering excellent electrical and mechanical properties.",
    specs: ["Lightweight design", "High conductivity", "Corrosion resistant"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 13,
    name: "AAC Conductor",
    categories: ["Cables"],
    description:
      "All Aluminum Conductor for overhead power transmission with superior electrical performance.",
    specs: ["Pure aluminum", "High conductivity", "Cost-effective solution"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 14,
    name: "ACS Wires",
    categories: ["Cables"],
    description:
      "Aluminum Clad Steel wires providing excellent strength and conductivity for various applications.",
    specs: [
      "Steel core strength",
      "Aluminum conductivity",
      "Corrosion protection",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 15,
    name: "Radio Frequency Cable",
    categories: ["Cables"],
    description:
      "High-performance RF cables for communication and broadcasting applications in power systems.",
    specs: ["Low loss design", "50/75 ohm impedance", "Weather resistant"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 16,
    name: "Earth Wire & Guy Wire",
    categories: ["Cables"],
    description:
      "Grounding and support wires essential for electrical safety and structural support.",
    specs: ["Galvanized steel", "High tensile strength", "Corrosion resistant"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 17,
    name: "Submarine Cables",
    categories: ["Cables"],
    description:
      "Specialized underwater cables for power transmission across water bodies and marine environments.",
    specs: ["Waterproof design", "Armored construction", "Deep water rated"],
    image: "/placeholder.svg?height=200&width=300",
  },
];

const categories = [
  "All",
  "Various Insulators",
  "Electrical Equipment",
  "Electrical Power Fittings",
  "Electrical Hardware Fittings",
  "Cables",
  "Equipment",
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      product.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHeader
        title="Our Products"
        description="Discover our comprehensive range of high-voltage electrical products and solutions designed for power transmission and distribution projects across South Africa."
        backgroundImage="/images/GD office.JPG"
      />

      <main className="flex-1">
        <section className="bg-white border-b py-6">
          <div className="max-w-container mx-auto px-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg rounded-2xl border-2 focus:border-yellow-500"
              />
            </div>
          </div>
        </section>

        <div className="flex">
          <aside
            className={`
            fixed lg:sticky top-[76px] left-0 z-50 w-80 bg-white border-r shadow-lg lg:shadow-none
            h-[calc(100vh-76px)] overflow-y-auto transition-transform duration-300
            ${
              isMobileFilterOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filter Products
                </h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Categories
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`
                          w-full text-left px-4 py-3 rounded-xl transition-all duration-200
                          ${
                            selectedCategory === category
                              ? "bg-yellow-500 text-white shadow-md"
                              : "hover:bg-gray-50 text-gray-700"
                          }
                        `}
                      >
                        {category}
                        {category === "All" && (
                          <span className="ml-2 text-sm opacity-75">
                            ({products.length})
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden fixed bottom-6 left-6 z-40 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
          >
            <Filter className="h-6 w-6" />
          </button>

          <div className="flex-1 lg:ml-0">
            <section className="py-8">
              <div className="max-w-container mx-auto px-6">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-2">Our Products</h1>
                  <p className="text-muted-foreground">
                    Showing {filteredProducts.length} of {products.length}{" "}
                    products
                    {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <GdsaCard
                      key={product.id}
                      className="group hover:shadow-xl transition-all duration-300 hover:border-yellow-500/30 rounded-2xl overflow-hidden hover:-translate-y-1"
                    >
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                      </div>

                      <GdsaCardContent className="p-4">
                        <div className="mb-3">
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                            {product.name}
                          </h3>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {product.categories
                              .slice(0, 2)
                              .map((category, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs bg-yellow-500/10 text-yellow-700 border-yellow-500/20 rounded-full"
                                >
                                  {category}
                                </Badge>
                              ))}
                          </div>
                        </div>
                      </GdsaCardContent>
                    </GdsaCard>
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">
                      No products found
                    </h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
