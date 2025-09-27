"use client";

import {
  Shield,
  Award,
  CheckCircle,
  Settings,
  Headphones,
  FileCheck,
} from "lucide-react";

const qualityFeatures = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description:
      "Quality Management System certification ensuring international quality standards in all projects and operations.",
  },
  {
    icon: Shield,
    title: "IEC Standards",
    description:
      "Compliance with International Electrotechnical Commission standards for electrical engineering excellence.",
  },
  {
    icon: FileCheck,
    title: "Type Test Certificate",
    description:
      "Comprehensive testing documentation verifying product performance and safety specifications.",
  },
  {
    icon: CheckCircle,
    title: "Routine Test Certificate",
    description:
      "Regular quality testing protocols ensuring consistent product reliability and performance.",
  },
];

const services = [
  {
    icon: Settings,
    title: "Custom Products",
    description:
      "Tailored solutions designed according to your specific requirements and applications.",
  },
  {
    icon: Headphones,
    title: "After-Sale Support",
    description:
      "Comprehensive technical assistance and support services for all our products.",
  },
];

export default function QualityAssurance() {
  return (
    <section className="bg-gradient-to-br from-background via-muted/30 to-background py-20 pb-0">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-golden/10 text-golden px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Quality Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quality Assurance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As well as offering IEC Standard products, we also offer custom made
            products according to the client's specific requirements. After-sale
            services including technical assistance will also be provided upon
            request from our clients.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Our Quality Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-golden/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-golden/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-golden/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-golden" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-card/50 rounded-3xl p-8 md:p-12 border border-border">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-background rounded-2xl border border-border hover:border-golden/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-golden/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12"></div>
      </div>
    </section>
  );
}
