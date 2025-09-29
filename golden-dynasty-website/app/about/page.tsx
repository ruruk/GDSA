"use client";

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
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CenteredCarousel } from "@/components/ui/centered-carousel";
import Link from "next/link";
import contributions from "@/data/contributions.json";

export default function AboutPage() {
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
                  src="/banners/website_banners_4.jpg"
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
                  icon: Award,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  title: "B-BBEE Contributor",
                  icon: CheckCircle,
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  title: "CIDB Certificate",
                  icon: Building2,
                  color: "from-orange-500 to-orange-600",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-golden/20 group hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1 pr-6 items-center text-center pb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {cert.title}
                    </h3>
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

            <div className="mb-8">
              <CenteredCarousel
                items={contributions}
                autoPlay={true}
                autoPlayInterval={5000}
                showDots={true}
                showNavigation={true}
              />
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
