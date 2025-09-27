"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";

const services = [
  {
    title: "Commercial Projects",
    description:
      "Reliable electrical systems for offices, retail spaces, and commercial buildings.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Industrial Infrastructure",
    description:
      "Heavy-duty electrical solutions for manufacturing and industrial facilities.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Power Distribution",
    description:
      "Large-scale power distribution networks and grid infrastructure projects.",
    image: "/placeholder.svg?height=400&width=400",
  },
];

const images = [
  "/images/1 GD office .jpeg",
  "/images/1 Stringing bucket work .jpg",
  "/images/Craighall line 1.jpeg",
  "/images/Craighall line 2.jpeg",
  "/images/Craighall line 3.jpeg",
  "/images/Craighall line 4.jpeg",
  "/images/Craighall line 8.jpeg",
  "/images/Craighall.jpeg",
  "/images/Crane Truck 1.JPG",
  "/images/GD office 2 .JPG",
  "/images/GD office.JPG",
  "/images/golden-dynasty-logo.png",
  "/images/Grinding Balls 1 .JPG",
  "/images/Grinding Balls 2 .JPG",
  "/images/Grinding Balls 3 .JPG",
  "/images/Katu stringing 2 .JPG",
  "/images/Kusila line 1 .jpeg",
  "/images/Minerva Line 1 .jpeg",
  "/images/Minerva line 3 .jpeg",
  "/images/Mountain area stringing 2 .jpg",
  "/images/Mountain area stringing OPGW .jpg",
  "/images/Mountain area work .jpg",
  "/images/N 1 Crossing 1 .jpeg",
  "/images/N1 crossing 2 .jpeg",
  "/images/N1 crossing 3 .jpeg",
  "/images/N1 Crossing DPR 1.jpeg",
  "/images/Project line 1.JPG",
  "/images/Puller 4ton.JPG",
  "/images/Pulley 1.JPG",
  "/images/Pulleys 660mm.JPG",
  "/images/Re-drumming demo 1.jpeg",
  "/images/RE-drumming work 2.jpg",
  "/images/Stinging in Katu.JPG",
  "/images/stringing farmland 2.jpeg",
  "/images/Stringing farmland 4.jpeg",
  "/images/Stringing farmland 5.jpeg",
  "/images/Stringing farmland 6.jpeg",
  "/images/Stringing farmland7.jpeg",
  "/images/Stringing farmland8.jpeg",
  "/images/Stringing in farm land .jpeg",
  "/images/Stringing Machine 2.jpeg",
  "/images/Stringing Machines.JPG",
  "/images/Substation work.jpg",
  "/images/Taunus Substation work.jpeg",
  "/images/Tensioner machines.JPG",
];

export default function ServicesOverview() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentTranslate);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    const newTranslate = scrollLeft + walk;
    setCurrentTranslate(newTranslate);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentTranslate);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    const newTranslate = scrollLeft + walk;
    setCurrentTranslate(newTranslate);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
      const walk = (x - startX) * 2;
      const newTranslate = scrollLeft + walk;
      setCurrentTranslate(newTranslate);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Project consulting, Management, Fibre Installation in the Powerline
            Industry
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={carouselRef}
          className={`flex cursor-grab ${isDragging ? "cursor-grabbing" : ""}`}
          style={{
            transform: `translateX(${currentTranslate}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Duplicate services for infinite scroll effect */}
          {[...images, ...images, ...images].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: "20vw", height: "20vw" }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={image}
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
