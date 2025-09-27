import { Award, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-golden/10 rounded-full">
                  <Users className="w-6 h-6 text-golden" />
                </div>
                <span className="text-sm font-semibold text-golden uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                About Golden Dynasty SA
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Golden Dynasty S.A. (Pty) Ltd was established in 1997. The
                company specializes in project consulting, fibre installation &
                management, sourcing and supply, and delivery of various kinds
                of transmission and distribution power line products, such as
                insulators, optical fibre cables, ACSR conductors, line hardware
                fittings, galvanized steel wire, grinding balls, solar products,
                etc.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-golden/20">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-golden">27+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-golden">185+</p>
                <p className="text-sm text-muted-foreground">
                  OPGW, ADSS, Projects Completed
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-golden/10 to-transparent rounded-3xl transform -rotate-2"></div>
            <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
              <img
                src="/images/GD office.JPG"
                alt="Golden Dynasty SA corporate team and projects"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 bg-golden text-white p-4 rounded-2xl shadow-lg">
              <Award className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
