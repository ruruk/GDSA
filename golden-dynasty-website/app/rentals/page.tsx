import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import PageHeader from "@/components/global/page-header";
import { GdsaButton } from "@/components/ui/gdsa-button";
import { GdsaCard, GdsaCardContent } from "@/components/ui/gdsa-card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Truck, Wrench, Zap, HardHat, Settings, Cable } from "lucide-react";

const equipmentCategories = [
  {
    id: "vehicles",
    title: "Vehicles",
    icon: Truck,
    items: ["Crane Trucks", "4 x 4 Bakkies", "Passenger Carrier"],
  },
  {
    id: "hydraulic-equipment",
    title: "Hydraulic Equipment",
    icon: Settings,
    items: [
      "Hydraulic Puller",
      "Hydraulic Tensioner",
      "Hydraulic Cutter / Grinder",
      "Hydraulic Pumps",
      "Stringing Equipment",
    ],
  },
  {
    id: "testing-measurement",
    title: "Testing & Measurement",
    icon: Zap,
    items: [
      "Dynometer",
      "Length Measurement Meter",
      "High Voltage Tester",
      "OPGW Fusion Joint Splicing Machine and PLMS Tester",
    ],
  },
  {
    id: "cable-installation",
    title: "Cable Installation",
    icon: Cable,
    items: [
      "Helicopter Stringing Blocks",
      "Single Sheave Stringing Block",
      "Cable Mesh Sock",
    ],
  },
  {
    id: "reels-stands",
    title: "Reels & Stands",
    icon: Settings,
    items: [
      "Empty Reels",
      "Hydraulic Reel Stands",
      "Integrated Reel Stand",
      "Reel Rotator Platform",
    ],
  },
  {
    id: "gripping-tools",
    title: "Gripping Tools",
    icon: Wrench,
    items: [
      "Radial Locking Grip",
      "Bolt Type Anti Twist Steel Rope Gripper",
      "Anti Twisting Braided Steel Rope",
    ],
  },
  {
    id: "safety-access",
    title: "Safety & Access",
    icon: HardHat,
    items: ["Anti Twist Running Board", "Stepladder", "Crane Man Buckets"],
  },
  {
    id: "specialized-tools",
    title: "Specialized Tools",
    icon: Wrench,
    items: [
      "Hand Wrenching Chain Tackle Block",
      "Swivel Joints",
      "Manual Presser",
    ],
  },
  {
    id: "pilot-ropes",
    title: "Pilot Ropes",
    icon: Cable,
    items: ["Silk Insulated Pilot Rope", "Insulated Nylon Pilot Rope"],
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
              {equipmentCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <GdsaCard
                    key={category.id}
                    className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-500/30 rounded-2xl overflow-hidden flex flex-col h-full"
                  >
                    <GdsaCardContent className="flex flex-col h-full p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-yellow-500/10 rounded-xl">
                            <IconComponent className="h-6 w-6 text-yellow-600" />
                          </div>
                          <h3 className="text-xl font-semibold group-hover:text-yellow-600 transition-colors">
                            {category.title}
                          </h3>
                        </div>
                        <Badge className="bg-yellow-500/10 text-yellow-700 border-yellow-500/20 rounded-full">
                          {category.items.length} items
                        </Badge>
                      </div>

                      <div className="flex-grow mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Available Equipment:
                        </h4>
                        <div className="space-y-2">
                          {category.items.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-3"></div>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <Link href="/contact">
                          <GdsaButton className="w-full bg-yellow-600 hover:bg-yellow-700 rounded-2xl">
                            Contact for Rental
                          </GdsaButton>
                        </Link>
                      </div>
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

        <section className="py-12 bg-background border-t border-yellow-500/20">
          <div className="max-w-container mx-auto px-6 lg:px-8 text-center">
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-yellow-700 mb-4">
                Quality Assurance
              </h3>
              <p className="text-muted-foreground text-lg font-medium">
                ALL EQUIPMENT & TOOLS ARE INSPECTED & TESTED EVERY 3 MONTHS AS
                PER ESKOM / NTCSA REQUIREMENTS
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
