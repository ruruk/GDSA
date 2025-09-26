"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Award,
  Package,
  Heart,
  Building,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Building Tomorrow's Infrastructure",
    subtitle: "Powerlines, Fibre, and Beyond",
    description:
      "Since 1997, Golden Dynasty SA has delivered world-class powerline and fibre optic solutions, trusted by Eskom and industries nationwide.",
    backgroundImage: "/modern-fibre-optic-cables-installation-with-golden.jpg",
    ctaText: "Explore Our Services",
    ctaLink: "/services",
    gradient: "from-blue-900/85 via-blue-800/70 to-transparent",
    icon: Building,
  },
  {
    id: 2,
    title: "Quality Assurance Excellence",
    subtitle: "ISO9000 • IEC Standards • Certified Testing",
    description:
      "Custom-made products to client specifications with comprehensive after-sale support. All products backed by ISO9000 certification, IEC standards compliance, and rigorous testing protocols.",
    backgroundImage: "/electrical-powerlines-and-transmission-towers-at-s.jpg",
    ctaText: "View Quality Standards",
    ctaLink: "/quality-assurance",
    gradient: "from-emerald-900/85 via-emerald-800/70 to-transparent",
    icon: Shield,
  },
  {
    id: 3,
    title: "Reliable. Scalable. Proven.",
    subtitle: "From 33kV to 765kV — We Deliver",
    description:
      "Over a decade of expertise in OPGW and earthwire installations, redrumming projects, and emergency fibre repairs across South Africa.",
    backgroundImage: "/electrical-powerlines-and-transmission-towers-at-s.jpg",
    ctaText: "View Our Projects",
    ctaLink: "/projects",
    gradient: "from-orange-900/85 via-orange-800/70 to-transparent",
    icon: Zap,
  },
  {
    id: 4,
    title: "ISO • CIDB • BEE Accredited",
    subtitle: "Global Standards, Local Expertise",
    description:
      "Golden Dynasty SA is ISO 9001:2015 certified, CIDB 7EP graded, and a BEE Level 3 contributor, ensuring compliance and quality in every project.",
    backgroundImage: "/construction-site-with-engineers-and-project-manag.jpg",
    ctaText: "Our Accreditations",
    ctaLink: "/accreditation",
    gradient: "from-green-900/85 via-green-800/70 to-transparent",
    icon: Award,
  },
  {
    id: 5,
    title: "From Insulators to Conductors",
    subtitle: "Everything Your Network Needs",
    description:
      "Supplying insulators, cables, conductors, fittings, and electrical components to power South Africa's transmission and distribution networks.",
    backgroundImage: "/modern-fibre-optic-cables-installation-with-golden.jpg",
    ctaText: "Browse Products",
    ctaLink: "/services",
    gradient: "from-purple-900/85 via-purple-800/70 to-transparent",
    icon: Package,
  },
  {
    id: 6,
    title: "Investing in Communities",
    subtitle: "Beyond Business",
    description:
      "Supporting early education, healthcare, and disaster relief through contributions to Nelson Mandela Children's Fund, Red Cross, SANTA, and more.",
    backgroundImage: "/community-development-project-with-people-and-infr.jpg",
    ctaText: "Social Impact",
    ctaLink: "/social-development",
    gradient: "from-red-900/85 via-red-800/70 to-transparent",
    icon: Heart,
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => {
        const IconComponent = slide.icon;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${slide.backgroundImage}')`,
              }}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-container mx-auto px-6 lg:px-8 w-full">
                <div className="max-w-4xl">
                  <div
                    className={`transform transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-golden/20 backdrop-blur-sm rounded-full p-3">
                        <IconComponent className="w-8 h-8 text-golden" />
                      </div>
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-golden">
                        {slide.subtitle}
                      </h2>
                    </div>
                    <h1 className="font-bold text-white mb-4 md:mb-6 leading-tight text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="text-white/90 mb-6 md:mb-8 max-w-2xl leading-relaxed text-pretty text-base sm:text-lg md:text-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 min-h-[60px] items-start">
                      <Button
                        asChild
                        size="lg"
                        className="bg-golden hover:bg-golden-dark text-primary font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl relative z-10"
                      >
                        <a href={slide.ctaLink}>{slide.ctaText}</a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent relative z-10"
                      >
                        <a href="/contact">Get Quote</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Controls - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-3 md:gap-6 bg-black/20 backdrop-blur-sm rounded-full py-2 md:py-4 my-7 md:px-4 px-2">
          {/* Previous button */}
          <button
            onClick={prevSlide}
            className="group"
            aria-label="Previous slide"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group-hover:bg-golden group-hover:scale-110">
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:text-primary" />
            </div>
          </button>

          {/* Pagination dots */}
          <div className="flex items-center gap-2 md:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-golden scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/80 hover:scale-110"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button onClick={nextSlide} className="group" aria-label="Next slide">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group-hover:bg-golden group-hover:scale-110">
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:text-primary" />
            </div>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-1 bg-white/20"></div>
      </div>
    </div>
  );
}
