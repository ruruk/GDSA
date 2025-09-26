import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import PageHeader from "@/components/global/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Cable,
  Settings,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Cable,
    title: "OPGW Installation",
    description:
      "Optical Fibre Composite Ground Wire installation and maintenance for power transmission lines.",
    features: [
      "Fiber optic integration",
      "Lightning protection",
      "Ground fault protection",
      "High-voltage applications",
    ],
    category: "Fiber Optic Solutions",
  },
  {
    icon: Zap,
    title: "ADSS Cable Systems",
    description:
      "All-Dielectric Self-Supporting cable installations for telecommunications infrastructure.",
    features: [
      "Self-supporting design",
      "Dielectric construction",
      "Long span capabilities",
      "Weather resistant",
    ],
    category: "Cable Solutions",
  },
  {
    icon: Settings,
    title: "Power Line Construction",
    description:
      "Complete power line construction and maintenance services for electrical infrastructure.",
    features: [
      "Transmission lines",
      "Distribution networks",
      "Substation work",
      "Emergency repairs",
    ],
    category: "Construction",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Comprehensive testing and quality assurance services ensuring ISO 9001:2015 compliance.",
    features: [
      "ISO 9001:2015 certified",
      "Equipment testing",
      "Safety inspections",
      "Compliance audits",
    ],
    category: "Quality Control",
  },
  {
    icon: Users,
    title: "Project Management",
    description:
      "End-to-end project management services for electrical and telecommunications projects.",
    features: [
      "Project planning",
      "Resource management",
      "Timeline coordination",
      "Risk assessment",
    ],
    category: "Management",
  },
  {
    icon: CheckCircle,
    title: "Maintenance Services",
    description:
      "Ongoing maintenance and support services for electrical and fiber optic infrastructure.",
    features: [
      "Preventive maintenance",
      "Emergency response",
      "System upgrades",
      "Performance monitoring",
    ],
    category: "Support",
  },
];

const capabilities = [
  {
    title: "185+ OPGW Projects",
    description:
      "Successfully completed over 185 OPGW installation projects across South Africa.",
  },
  {
    title: "ISO 9001:2015 Certified",
    description:
      "Quality management system certification ensuring consistent service delivery.",
  },
  {
    title: "B-BBEE Level 3",
    description:
      "Broad-Based Black Economic Empowerment Level 3 contributor status.",
  },
  {
    title: "CIDB 7EP Registered",
    description:
      "Construction Industry Development Board registration for electrical projects.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Our Services"
          description="Comprehensive engineering and construction solutions including fibre installation, powerline products, project management, and maintenance services."
          backgroundImage="/placeholder.svg?height=400&width=1200"
        />

        {/* Services Overview */}
        <section className="py-16 bg-background pb-0">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Engineering Excellence Since 1997
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Golden Dynasty SA delivers specialized electrical engineering
                and fiber optic solutions with over 25 years of industry
                expertise and ISO 9001:2015 quality assurance.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="border-golden/20 hover:border-golden/40 transition-all duration-300 group"
                  >
                    <CardContent className="p-6 py-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-golden/10 rounded-lg group-hover:bg-golden/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-golden" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-golden flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-golden group-hover:text-white transition-colors bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Capabilities Section */}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-golden/5">
          <div className="max-w-container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss your electrical engineering
              and fiber optic requirements. We're here to deliver solutions that
              meet your specific needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-golden hover:bg-golden/90"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get a Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+27123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Today
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
