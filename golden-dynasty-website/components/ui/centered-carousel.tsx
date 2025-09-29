"use client";

import { useState, useEffect } from "react";
import { GdsaCard, GdsaCardContent } from "@/components/ui/gdsa-card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CenteredCarouselItem {
  id: number;
  title: string;
  description: string;
  date?: string;
  image?: string;
  category?: string;
  amount?: string;
}

interface CenteredCarouselProps {
  items: CenteredCarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showNavigation?: boolean;
  className?: string;
  cardClassName?: string;
  renderCard?: (
    item: CenteredCarouselItem,
    isActive: boolean
  ) => React.ReactNode;
}

export function CenteredCarousel({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showNavigation = true,
  className,
  cardClassName,
  renderCard,
}: CenteredCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i - 1 + items.length) % items.length;
      visible.push({ ...items[index], position: i });
    }
    return visible;
  };

  const defaultRenderCard = (item: CenteredCarouselItem, isActive: boolean) => (
    <GdsaCard
      className={cn(
        "h-full overflow-hidden group hover:shadow-xl transition-all duration-300",
        isActive ? "ring-2 ring-golden/60 shadow-2xl" : "shadow-md",
        cardClassName
      )}
    >
      <div className="relative h-40 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${
              item.image || "/placeholder.svg?height=300&width=400"
            })`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
      </div>

      <GdsaCardContent className="p-4 text-center flex flex-col justify-between h-32">
        <div>
          {item.category && (
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs px-2 py-1">
                {item.category}
              </Badge>
            </div>
          )}
          <h4
            className={cn(
              "font-semibold mb-2 line-clamp-2",
              isActive ? "text-base" : "text-sm"
            )}
          >
            {item.title}
          </h4>
          <p
            className={cn(
              "text-muted-foreground line-clamp-2 mb-2",
              isActive ? "text-sm" : "text-xs"
            )}
          >
            {item.description}
          </p>
        </div>
      </GdsaCardContent>
    </GdsaCard>
  );

  return (
    <div
      className={cn(
        "relative w-full max-w-5xl mx-auto overflow-hidden",
        className
      )}
    >
      {/* Carousel Container */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 px-4 sm:px-8 md:px-16 py-4">
        {getVisibleItems().map((item, index) => {
          const isActive = item.position === 1;
          return (
            <div
              key={item.id}
              className={cn(
                "flex-shrink-0 transition-all duration-700 ease-out",
                // Mobile: single card, full width
                isActive
                  ? "w-full max-w-sm h-[320px] scale-100 z-10 sm:w-80 sm:h-[360px] sm:scale-105"
                  : "hidden sm:block w-72 h-[350px] scale-90 opacity-60"
              )}
            >
              {renderCard
                ? renderCard(item, isActive)
                : defaultRenderCard(item, isActive)}
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      {showNavigation && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110 z-20"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110 z-20"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center gap-1 sm:gap-2 mt-6 sm:mt-8 px-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-1.5 sm:h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-golden w-6 sm:w-8"
                  : "bg-gray-300 w-1.5 sm:w-2 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
