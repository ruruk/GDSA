import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import PageHeader from "@/components/global/page-header";
import { GdsaButton } from "@/components/ui/gdsa-button";
import { GdsaCard, GdsaCardContent } from "@/components/ui/gdsa-card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Truck, Wrench, Zap, HardHat, Settings, Cable } from "lucide-react";

const rentalEquipment = [
  {
    id: 1,
    title: "Utility Bucket Trucks",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "High-reach utility trucks equipped with insulated booms for safe electrical line work. Perfect for OPGW and ADSS cable installations.",
    category: "Vehicles",
    icon: Truck,
    features: [
      "45ft-65ft reach",
      "Insulated boom",
      "Tool storage",
      "Safety certified",
    ],
  },
  {
    id: 2,
    title: "Cable Pulling Equipment",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Professional cable pulling systems and winches for efficient installation of power lines and fiber optic cables.",
    category: "Machinery",
    icon: Cable,
    features: [
      "Variable speed control",
      "High tensile strength",
      "Remote operation",
      "Safety monitoring",
    ],
  },
  {
    id: 3,
    title: "Electrical Testing Equipment",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Comprehensive testing equipment including insulation testers, multimeters, and power quality analyzers.",
    category: "Testing",
    icon: Zap,
    features: [
      "High voltage testing",
      "Digital displays",
      "Data logging",
      "Calibrated instruments",
    ],
  },
  {
    id: 4,
    title: "Excavation Equipment",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Compact excavators and trenching equipment for underground cable installation and utility pole placement.",
    category: "Heavy Machinery",
    icon: Settings,
    features: [
      "Precision digging",
      "Compact design",
      "Hydraulic power",
      "Operator training included",
    ],
  },
  {
    id: 5,
    title: "Safety Equipment & Gear",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Complete safety equipment packages including hard hats, safety harnesses, insulated tools, and protective clothing.",
    category: "Safety",
    icon: HardHat,
    features: [
      "OSHA compliant",
      "High visibility",
      "Electrical rated",
      "Full body protection",
    ],
  },
  {
    id: 6,
    title: "Specialized Tools",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Professional electrical tools including crimpers, cutters, stringing blocks, and tension monitoring equipment.",
    category: "Tools",
    icon: Wrench,
    features: [
      "Professional grade",
      "Precision engineered",
      "Ergonomic design",
      "Maintenance included",
    ],
  },
];

export default function RentalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Equipment Rentals"
          description="Professional-grade equipment and machinery for your electrical engineering projects. From utility trucks to specialized testing equipment, all maintained to the highest standards and ready for your projects."
          backgroundImage="https://media.istockphoto.com/id/1465157700/photo/brightly-red-colored-semi-truck-speeding-on-a-two-lane-highway-with-cars-in-background-under.jpg?s=612x612&w=0&k=20&c=cfbbPy2ylvFGRULNLGO_Ucm-C5DsOJMFHiZBdKGsq3c="
        />

        <section className="bg-background py-16">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Equipment</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive fleet of professional equipment,
                all maintained to the highest standards and ready for your
                projects.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Badge
                  variant="outline"
                  className="border-golden/20 text-golden px-4 py-2"
                >
                  Professional Grade
                </Badge>
                <Badge
                  variant="outline"
                  className="border-golden/20 text-golden px-4 py-2"
                >
                  Safety Certified
                </Badge>
                <Badge
                  variant="outline"
                  className="border-golden/20 text-golden px-4 py-2"
                >
                  Maintenance Included
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rentalEquipment.map((equipment) => {
                const IconComponent = equipment.icon;
                return (
                  <GdsaCard
                    key={equipment.id}
                    className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-500/30 rounded-2xl overflow-hidden"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={equipment.image || "/placeholder.svg"}
                        alt={equipment.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500/10 text-yellow-700 border-yellow-500/20 rounded-full">
                          {equipment.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="p-3 bg-yellow-500/10 rounded-xl">
                          <IconComponent className="h-6 w-6 text-yellow-600" />
                        </div>
                      </div>
                    </div>

                    <GdsaCardContent>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors">
                        {equipment.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {equipment.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-2 gap-1">
                          {equipment.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center text-xs text-muted-foreground"
                            >
                              <div className="w-1 h-1 bg-yellow-600 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link href="/contact">
                        <GdsaButton className="w-full bg-yellow-600 hover:bg-yellow-700 rounded-2xl">
                          Contact for Rental
                        </GdsaButton>
                      </Link>
                    </GdsaCardContent>
                  </GdsaCard>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-yellow-500/10 to-blue-500/10">
          <div className="max-w-container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Custom Equipment Solutions?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? We work with trusted partners
              to source specialized equipment for unique project requirements.
            </p>
            <Link href="/contact">
              <GdsaButton
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 rounded-2xl px-8"
              >
                Discuss Your Requirements
              </GdsaButton>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
