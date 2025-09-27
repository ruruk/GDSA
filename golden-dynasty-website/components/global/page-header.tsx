import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  description,
  backgroundImage = "/placeholder.svg?height=400&width=1200",
}: PageHeaderProps) {
  return (
    <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 pt-12">
        <h1 className="text-4xl font-bold text-balance mb-4 md:text-4xl">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty lg:text-lg">
          {description}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-golden to-transparent" />
    </div>
  );
}
