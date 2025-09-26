"use client";

import { useState } from "react";
import { GdsaCard, GdsaCardContent } from "@/components/ui/gdsa-card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import contributions from "@/data/contributions.json";

export default function SocialDevelopment() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="flex items-center justify-center gap-6 px-16 py-4">
              {getVisibleContributions().map((contribution, index) => {
                const isActive = contribution.position === 1;
                return (
                  <div
                    key={contribution.id}
                    className={`flex-shrink-0 transition-all duration-700 ease-out ${
                      isActive
                        ? "w-80 h-[360px] scale-105 z-10"
                        : "w-72 h-[350px] scale-90 opacity-60"
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
        </div>
      </div>
    </section>
  );
}
