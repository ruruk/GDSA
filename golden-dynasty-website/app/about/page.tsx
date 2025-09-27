"use client";

import { useState, useEffect } from "react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import PageHeader from "@/components/global/page-header";
import {
  Building2,
  Zap,
  Settings,
  Shield,
  Award,
  Heart,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GdsaCard, GdsaCardContent } from "@/components/ui/gdsa-card";
import Link from "next/link";
import contributions from "@/data/contributions.json";

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contributions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contributions.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + contributions.length) % contributions.length
    );
  };

  const getVisibleContributions = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index =
        (currentIndex + i - 1 + contributions.length) % contributions.length;
      visible.push({ ...contributions[index], position: i });
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="About Golden Dynasty SA"
          description="Since 1997, Golden Dynasty SA has been a trusted partner in powerline, fibre optic, and infrastructure solutions across South Africa. With ISO certification, CIDB registration, and BEE accreditation, we combine technical expertise with a commitment to community development."
          backgroundImage="/banners/website_banners_4.jpg"
        />

        {/* Company Overview Section */}
        <section className="py-16 px-4">
          <div className="max-w-container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-12 bg-gradient-to-b from-golden to-amber-600 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Company Overview
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Golden Dynasty S.A. (Pty) Ltd was established in 1997. The
                  company specializes in project consulting, fibre installation
                  & management, sourcing and supply, and delivery of various
                  kinds of transmission and distribution power line products,
                  such as insulators, optical fibre cables, ACSR conductors,
                  line hardware fittings, galvanized steel wire, grinding balls,
                  solar products, etc.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Some of the products such as glass insulators, steel wires,
                  grinding balls, and OPGW cables have been approved and used by
                  Eskom Holdings SOC Limited and NTCSA. The company has been
                  involved in the installation, testing, and commissioning of
                  OPGW / ADSS cables and Earthwire for Eskom since 2011.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-golden/20 to-amber-600/20 rounded-2xl transform rotate-3"></div>
                <img
                  src="/images/1 GD office .jpeg"
                  alt="Fibre and powerline project"
                  className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Values Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="w-8 h-8 text-golden" />
                <h2 className="text-3xl font-bold text-foreground">
                  Our Foundation
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our operations and relationships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Corporate Values",
                  content: "Reputation, Integrity and Innovation.",
                  icon: Award,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  title: "Corporate Vision",
                  content: "To create a world class African Company.",
                  icon: Shield,
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  title: "Corporate Mission",
                  content:
                    "We are committed to grow with all stakeholders and to make contributions to the society.",
                  icon: Heart,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  title: "Corporate Objective",
                  content:
                    "We are committed to provide a wide range of quality products and services to the communities through business opportunities.",
                  icon: CheckCircle,
                  color: "from-orange-500 to-orange-600",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-golden/20 h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-golden/40 group-hover:-translate-y-1">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-16 px-4">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Settings className="w-8 h-8 text-golden" />
                <h2 className="text-3xl font-bold text-foreground">
                  Our Expertise
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions across the infrastructure spectrum
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Fibre Installation & Management",
                  description:
                    "End-to-end optical fibre solutions (OPGW, ADSS)",
                },
                {
                  icon: Building2,
                  title: "Powerline Products Supply",
                  description:
                    "Wide portfolio of insulators, conductors, cables, and fittings",
                },
                {
                  icon: Settings,
                  title: "Project Management & Consultancy",
                  description:
                    "Turnkey delivery of high-voltage infrastructure projects",
                },
                {
                  icon: Shield,
                  title: "Emergency Repairs",
                  description:
                    "Fibre repair and maintenance under critical conditions",
                },
                {
                  icon: Truck,
                  title: "Equipment Rentals",
                  description:
                    "Professional equipment rental services including trucks, machinery, and specialized tools",
                },
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-golden/20 h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-golden/40">
                    <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-golden/20 transition-colors">
                      <service.icon className="w-6 h-6 text-golden" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-0">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Accreditations */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="w-8 h-8 text-golden" />
                <h2 className="text-3xl font-bold text-foreground">
                  Certifications & Accreditations
                </h2>
              </div>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Golden Dynasty SA maintains internationally recognized quality
                and compliance standards
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "ISO 9001:2015",
                  subtitle: "Quality Management System",
                  description:
                    "Golden Dynasty SA is ISO 9001:2015 certified, demonstrating our commitment to international quality standards in all projects and operations.",
                  specs: [
                    "Certificate Number: SA1659",
                    "Originally Approved: 26 May 2009",
                    "Current Validity: 10 Aug 2025 – 10 Aug 2026",
                    "Issuing Body: QAS International (UK)",
                  ],
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "B-BBEE Contributor",
                  subtitle: "Contributor",
                  description:
                    "Golden Dynasty SA is proud to be a Level 3 Broad-Based Black Economic Empowerment (B-BBEE) contributor, recognized as an empowering supplier with 110% procurement recognition.",
                  specs: [
                    "Verification Agency: Honeycomb BEE Ratings",
                    "Level: 3 Contributor",
                    "Procurement Recognition: 110%",
                    "Black Woman Ownership: 27.61%",
                    "Certificate Validity: 11 Dec 2024 – 10 Dec 2025",
                  ],
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "CIDB Certificate",
                  subtitle: "Contractor Grading",
                  description:
                    "Golden Dynasty SA is registered with the Construction Industry Development Board (CIDB) as a 7EP Electrical Engineering Works contractor, qualifying us to deliver high-value electrical and powerline projects nationwide.",
                  specs: [
                    "CRS Number: 10110192",
                    "Grade: 7EP (Electrical Engineering Works)",
                    "Status: Active",
                    "Valid Until: 27 Sep 2025",
                  ],
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-golden/20 group hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1 pr-6 pb-2.5">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-golden font-medium mb-3">
                      {cert.subtitle}
                    </p>

                    <Link href="/accreditations" className="mt-auto"></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-16 px-4 bg-gradient-to-r from-golden/5 to-amber-600/5">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-golden" />
                <h2 className="text-3xl font-bold text-foreground">
                  Quality Assurance
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                As well as offering IEC Standard products, we also offer custom
                made products according to the client's specific requirements.
                After-sale services including technical assistance will also be
                provided upon request from our clients.
              </p>
            </div>

            {/* Certificate Blocks */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  icon: Award,
                  title: "ISO 9001:2015",
                  description: "Quality Management System certification",
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  icon: CheckCircle,
                  title: "IEC Standards",
                  description:
                    "Compliance with International Electrotechnical Commission standards",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Shield,
                  title: "Type Test Certificate",
                  description:
                    "Product design and performance validation certification",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: Settings,
                  title: "Routine Test Certificate",
                  description:
                    "Regular quality control and testing documentation",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((cert, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-golden/20 h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-golden/40 group-hover:-translate-y-1">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Products Section */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-golden/20 mb-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
                Cables & Conductors
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "OPGW (Optical Fibre Composite Ground Wire & Communication Optical Fibre)",
                  "ADSS Cable",
                  "ACSR (Aluminium Conductor Steel Reinforced)",
                  "AAC (All Aluminium Alloy Conductors)",
                  "ACS Stranded Conductor",
                  "AAAC (All Aluminum Alloy Conductor)",
                  "ACS Wires",
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-golden/5 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-golden flex-shrink-0" />
                    <span className="text-sm text-foreground">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Statement */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-golden/20 text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-golden to-amber-600 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We look forward to establishing a long term mutually beneficial
                relationship with all our clients.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-golden to-amber-600 rounded-full mx-auto mt-6"></div>
            </div>
          </div>
        </section>

        {/* Social Development Contributions */}
        <section className="py-16 px-4">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-golden" />
                <h2 className="text-3xl font-bold text-foreground">
                  Our Commitment to Communities
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Making a meaningful difference in South African communities
                through targeted support and investment
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto mb-8">
              {/* Carousel Container */}
              <div className="flex items-center justify-center gap-6 px-16 py-4">
                {getVisibleContributions().map((contribution, index) => {
                  const isActive = contribution.position === 1;
                  return (
                    <div
                      key={contribution.id}
                      className={`flex-shrink-0 transition-all duration-700 ease-out ${
                        isActive
                          ? "w-80 h-[330px] scale-105 z-10"
                          : "w-72 h-[320px] scale-90 opacity-60"
                      }`}
                    >
                      <GdsaCard
                        className={`h-full overflow-hidden group hover:shadow-xl transition-all duration-300 ${
                          isActive
                            ? "ring-2 ring-golden/60 shadow-2xl"
                            : "shadow-md"
                        }`}
                      >
                        <div className="relative h-40 overflow-hidden">
                          <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(${
                                contribution.image ||
                                "/placeholder.svg?height=300&width=400"
                              })`,
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                        </div>

                        <GdsaCardContent className="p-4 text-center flex flex-col justify-between h-32">
                          <div>
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <Badge
                                variant="secondary"
                                className="text-xs px-2 py-1"
                              >
                                {contribution.category}
                              </Badge>
                            </div>
                            <h4
                              className={`font-semibold mb-2 line-clamp-2 ${
                                isActive ? "text-base" : "text-sm"
                              }`}
                            >
                              {contribution.title}
                            </h4>
                            <p
                              className={`text-muted-foreground line-clamp-2 mb-2 ${
                                isActive ? "text-sm" : "text-xs"
                              }`}
                            >
                              {contribution.description}
                            </p>
                          </div>
                        </GdsaCardContent>
                      </GdsaCard>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110 z-20"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110 z-20"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {contributions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-golden w-8"
                        : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/social-development">
                <Button className="bg-golden hover:bg-golden/90 text-white">
                  View All Contributions
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
      </main>
      <Footer />
    </div>
  );
}
