"use client"

import { useState } from "react"
import Header from "@/components/global/header"
import Footer from "@/components/global/footer"
import PageHeader from "@/components/global/page-header"
import { Badge } from "@/components/ui/badge"
import { GdsaCard, GdsaCardContent } from "@/components/ui/gdsa-card"
import { Search, Filter, X, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"

const products = [
  {
    id: 1,
    name: "OPGW Cable 48 Core",
    categories: ["Fiber Optic", "Power Lines"],
    description:
      "High-performance optical ground wire combining fiber optic communication with electrical grounding protection.",
    specs: ["48 fiber cores", "Lightning protection", "Temperature range: -40°C to +85°C"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Transmission Tower Kit",
    categories: ["Infrastructure", "Steel"],
    description: "Complete galvanized steel transmission tower components for high-voltage power line installations.",
    specs: ["Hot-dip galvanized", "Wind load: 150 km/h", "Height: 15-45m options"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Conductor Clamps",
    categories: ["Hardware", "Accessories"],
    description: "Heavy-duty aluminum conductor clamps designed for secure power line connections.",
    specs: ["Aluminum alloy", "Current rating: 1000A", "Corrosion resistant"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Insulator Strings",
    categories: ["Insulators", "Safety"],
    description: "Composite polymer insulators providing superior electrical isolation and weather resistance.",
    specs: ["Polymer housing", "Voltage: 132kV-400kV", "Hydrophobic surface"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Earthing System",
    categories: ["Safety", "Grounding"],
    description: "Complete earthing solution for electrical installations ensuring personnel and equipment safety.",
    specs: ["Copper conductors", "Resistance: <1 ohm", "Corrosion protection"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Splice Enclosures",
    categories: ["Fiber Optic", "Protection"],
    description: "Weatherproof fiber optic splice enclosures for outdoor installations.",
    specs: ["IP68 rated", "96 splice capacity", "UV resistant"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    name: "Vibration Dampers",
    categories: ["Hardware", "Protection"],
    description: "Stockbridge dampers reducing conductor vibration and preventing fatigue damage.",
    specs: ["Aluminum construction", "Frequency range: 5-100 Hz", "Weather resistant"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    name: "Cable Pulling Equipment",
    categories: ["Tools", "Installation"],
    description: "Professional cable pulling systems for efficient fiber optic and power cable installation.",
    specs: ["Pull force: 50kN", "Remote control", "Variable speed"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categories = ["All", "Fiber Optic", "Infrastructure", "Hardware", "Safety", "Tools", "Protection", "Accessories"]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.categories.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHeader
        title="Our Products"
        description="Discover our comprehensive range of high-voltage electrical products and solutions designed for power transmission and distribution projects across South Africa."
        backgroundImage="/placeholder.svg?height=400&width=1200"
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
            ${isMobileFilterOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
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
                  <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wide">Categories</h4>
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
                        {category === "All" && <span className="ml-2 text-sm opacity-75">({products.length})</span>}
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
                    Showing {filteredProducts.length} of {products.length} products
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
                            {product.categories.slice(0, 2).map((category, index) => (
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

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                        <div className="space-y-2">
                          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-1">
                            <Settings className="h-3 w-3" />
                            Key Specs
                          </h4>
                          <ul className="space-y-1">
                            {product.specs.slice(0, 2).map((spec, index) => (
                              <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                                <div className="w-1 h-1 bg-yellow-500 rounded-full" />
                                {spec}
                              </li>
                            ))}
                          </ul>
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
                    <h3 className="text-lg font-medium mb-2">No products found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
