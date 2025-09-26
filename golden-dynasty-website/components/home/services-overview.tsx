import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Commercial Projects",
    description:
      "Reliable electrical systems for offices, retail spaces, and commercial buildings.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Industrial Infrastructure",
    description:
      "Heavy-duty electrical solutions for manufacturing and industrial facilities.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Power Distribution",
    description:
      "Large-scale power distribution networks and grid infrastructure projects.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive electrical solutions tailored to meet the diverse
            needs of our clients across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={
                index % 2 === 0
                  ? "bg-card border-golden/20"
                  : "bg-transparent border-golden"
              }
            >
              <CardContent className="p-6 py-0">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-pretty">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
