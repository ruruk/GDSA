import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative -mt-10 z-10 px-4">
      <div className="max-w-container mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-golden/20 p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="p-2 bg-golden/10 rounded-full">
                  <Zap className="w-6 h-6 text-golden" />
                </div>
                <span className="text-sm font-semibold text-golden uppercase tracking-wider">
                  Partnership Excellence
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                Partnering for Power, Fibre & Future Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl">
                Building tomorrow's connections today with cutting-edge
                solutions and unwavering commitment to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-golden hover:bg-golden/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 bg-transparent"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 max-w-md lg:max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-golden/20 to-transparent rounded-2xl transform rotate-3"></div>
                <img
                  src="/images/Project line 1 .JPG"
                  alt="Golden Dynasty SA infrastructure team"
                  className="relative w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
