"use client";

import { useState } from "react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import PageHeader from "@/components/global/page-header";
import { GdsaButton } from "@/components/ui/gdsa-button";
import { Badge } from "@/components/ui/badge";
import { GdsaCard, GdsaCardContent } from "@/components/ui/gdsa-card";
import { Zap, MapPin, Ruler } from "lucide-react";

const flagshipProjects = [
  {
    name: "Medupi Borotho",
    distance: "96.8 km",
    type: "OPGW",
    description: "Critical power infrastructure for Medupi power station",
  },
  {
    name: "Ingula – Majuba",
    distance: "166 km",
    type: "OPGW",
    description: "Major transmission line project connecting key substations",
  },
  {
    name: "Ankerlig",
    distance: "96.9 km",
    type: "OPGW",
    description: "Western Cape transmission network enhancement",
  },
];

const allProjects = [
  { name: "Albany Project", distance: "57 km", type: "OPGW" },
  { name: "Nkomazi Figtree", distance: "24.5 km", type: "OPGW" },
  { name: "Boulders Karino", distance: "25 km", type: "OPGW" },
  { name: "Ndumo Nondabuyo", distance: "46.5 km", type: "OPGW" },
  { name: "Khanyaswe Malelane", distance: "33 km", type: "OPGW" },
  { name: "Mfiniso", distance: "23 km", type: "OPGW" },
  { name: "Apollo Croydon", distance: "37 km", type: "OPGW" },
  { name: "DWAF", distance: "3 km", type: "OPGW" },
  { name: "Singo/Soekmekaar", distance: "30 km", type: "OPGW" },
  { name: "Middelburg Mhluzi", distance: "21.4 km", type: "OPGW" },
  { name: "Knobel/Gilead", distance: "38.9 km", type: "OPGW" },
  { name: "Matlosana", distance: "16.6 km", type: "OPGW" },
  { name: "Knobel/Bochum", distance: "28.6 km", type: "OPGW" },
  { name: "Qolweni Cala", distance: "70 km", type: "OPGW" },
  { name: "Hendrina Zamokuhle", distance: "22 km", type: "OPGW" },
  { name: "Ferrum Umtu", distance: "70.85 km", type: "OPGW" },
  { name: "Poseidon Kopleegte", distance: "21.7 km", type: "OPGW" },
  { name: "Swellendam", distance: "15 km", type: "OPGW" },
  { name: "Usuthu Ermelo", distance: "17.7 km", type: "OPGW" },
  { name: "Ariadne Venus", distance: "31 km", type: "OPGW" },
  { name: "Umtu Klipkop", distance: "17.7 km", type: "OPGW" },
  { name: "Craighall Minerva", distance: "21 km", type: "OPGW" },
  { name: "Apollo Thuso", distance: "13 km", type: "OPGW" },
  { name: "Silimela Manogeng", distance: "77 km", type: "OPGW" },
  { name: "Spitskop Gaborone", distance: "52.8 km", type: "OPGW" },
  { name: "Borotho PPRust", distance: "16.6 km", type: "OPGW" },
  { name: "Ariadne Eros", distance: "31 km", type: "OPGW" },
  { name: "Borotho Sandsloot", distance: "16.6 km", type: "OPGW" },
  { name: "Kusile Lulamisa Section A", distance: "N/A", type: "OPGW" },
  { name: "Blaauwberg Rietvlei", distance: "3.5 km", type: "OPGW" },
  { name: "Kusile Lulamisa Section B", distance: "N/A", type: "OPGW" },
  { name: "Letaba Tarentaal", distance: "10.3 km", type: "OPGW" },
  { name: "Melkspruit Riebeeck", distance: "30.9 km", type: "OPGW" },
  { name: "Slilamela Tubatse", distance: "77 km", type: "OPGW" },
  { name: "Nkonka Bendigo", distance: "58.2 km", type: "OPGW" },
  { name: "Everest Witpan", distance: "20.18 km", type: "OPGW" },
  { name: "Elloit Ugie", distance: "8.6 km", type: "OPGW" },
  { name: "Everst New Steyn", distance: "13.2 km", type: "OPGW" },
  { name: "Beaufort West", distance: "13.2 km", type: "OPGW" },
  { name: "Virginia Theseus", distance: "15.9 km", type: "OPGW" },
  { name: "Hillside Athene", distance: "11 km", type: "OPGW" },
  { name: "Merapi Tweespruit", distance: "33.2 km", type: "OPGW" },
  { name: "Hendrina Gumeni", distance: "91.7 km", type: "OPGW" },
  { name: "Hotazel", distance: "17.9 km", type: "OPGW" },
  { name: "Kruispunt Matla", distance: "21.9 km", type: "OPGW" },
  { name: "Merapi Tweespruit", distance: "30 km", type: "OPGW" },
  { name: "Blueridge Mapoch", distance: "36.17 km", type: "OPGW" },
  { name: "Kenzal Zeus", distance: "78.9 km", type: "OPGW" },
  { name: "Eerste Fabrieke", distance: "1.1 km", type: "OPGW" },
  { name: "Aries Nieuwenhoop", distance: "74.3 km", type: "OPGW" },
  { name: "Spencer Bambeni", distance: "36.2 km", type: "OPGW" },
  { name: "Tweespruit Driedorp", distance: "55.7 km", type: "OPGW" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterProjects = (projects: typeof allProjects) => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) => {
      const distance = Number.parseFloat(project.distance);
      if (isNaN(distance)) return activeFilter === "all";

      switch (activeFilter) {
        case "under20":
          return distance < 20;
        case "20to50":
          return distance >= 20 && distance <= 50;
        case "over50":
          return distance > 50;
        default:
          return true;
      }
    });
  };

  const filteredProjects = filterProjects(allProjects);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Major Projects Completed"
          description="Golden Dynasty SA has successfully delivered numerous high-voltage fibre and powerline projects for Eskom across South Africa. From short-distance installations to multi-hundred-kilometre networks, our track record demonstrates technical expertise, reliability, and scale."
          backgroundImage="/images/GD office.JPG"
        />

        <section className="sticky top-[76px] z-40 bg-white/95 backdrop-blur-sm border-b shadow-sm py-3">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground">
                Filter by distance:
              </span>
              <GdsaButton
                variant={activeFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("all")}
              >
                All Projects ({allProjects.length})
              </GdsaButton>
              <GdsaButton
                variant={activeFilter === "under20" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("under20")}
              >
                Under 20km
              </GdsaButton>
              <GdsaButton
                variant={activeFilter === "20to50" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("20to50")}
              >
                20-50km
              </GdsaButton>
              <GdsaButton
                variant={activeFilter === "over50" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("over50")}
              >
                50km+
              </GdsaButton>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 pb-0">
          <div className="container mx-auto px-4 max-w-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flagship Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our most significant infrastructure achievements, spanning
                hundreds of kilometres
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {flagshipProjects.map((project, index) => (
                <GdsaCard
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-500/30 rounded-2xl overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-blue-500/20 relative overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/shutterstock_1549253021-e1584678785841%281%29%281%29%281%29%281%29%281%29%281%29%281%29-3mSfR02oaYFFpCWIspmbEuHSyUN5fq.jpg"
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                  </div>
                  <GdsaCardContent>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-yellow-500/10 rounded-xl">
                        <Zap className="h-6 w-6 text-yellow-600" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-yellow-500/10 text-yellow-700 border-yellow-500/20 rounded-full"
                      >
                        {project.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Ruler className="h-4 w-4 text-muted-foreground" />
                      <span className="text-2xl font-bold text-yellow-600">
                        {project.distance}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </GdsaCardContent>
                </GdsaCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                All Completed Projects
              </h2>
              <p className="text-muted-foreground">
                {activeFilter === "all"
                  ? `Comprehensive portfolio of ${allProjects.length} successfully delivered projects`
                  : `Showing ${filteredProjects.length} projects matching your filter`}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, index) => (
                <GdsaCard
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:border-yellow-500/30 rounded-2xl overflow-hidden hover:-translate-y-1"
                >
                  <div className="h-32 md:h24 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 relative overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/shutterstock_1549253021-e1584678785841%281%29%281%29%281%29%281%29%281%29%281%29%281%29-3mSfR02oaYFFpCWIspmbEuHSyUN5fq.jpg"
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                  </div>
                  <GdsaCardContent className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-1.5 bg-blue-500/10 rounded-xl">
                        <MapPin className="h-3 w-3 text-blue-600" />
                      </div>
                      <Badge variant="outline" className="text-xs rounded-full">
                        {project.type}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-1 group-hover:text-yellow-600 transition-colors text-xl">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs font-medium text-blue-600">
                        {project.distance}
                      </span>
                    </div>
                  </GdsaCardContent>
                </GdsaCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-yellow-500/10 to-blue-500/10">
          <div className="container mx-auto px-4 max-w-container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Your Next Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              With over 50 major projects completed, Golden Dynasty SA brings
              proven expertise to every infrastructure challenge.
            </p>
            <GdsaButton
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700 rounded-2xl px-8"
            >
              Start Your Project
            </GdsaButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
