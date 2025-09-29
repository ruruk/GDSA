"use client";

import { CenteredCarousel } from "@/components/ui/centered-carousel";
import contributions from "@/data/contributions.json";

export default function SocialDevelopment() {
  return (
    <section className="py-16 pb-0">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Social Development Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Beyond delivering exceptional electrical services, Golden Dynasty SA
            is committed to empowering communities and fostering sustainable
            development across South Africa.
          </p>
        </div>

        <div className="mb-16">
          <CenteredCarousel
            items={contributions}
            autoPlay={true}
            autoPlayInterval={5000}
            showDots={true}
            showNavigation={true}
          />
        </div>
      </div>
    </section>
  );
}
