import Header from "@/components/global/header"
import Footer from "@/components/global/footer"
import PageHeader from "@/components/global/page-header"
import contributionsData from "@/data/contributions.json"

export default function SocialDevelopmentPage() {
  const contributions = contributionsData

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Social Development Initiatives"
          description="Making a difference in communities through meaningful contributions to education, healthcare, and disaster relief across South Africa."
          backgroundImage="/placeholder.svg?height=400&width=1200"
        />

        <section className="py-16 bg-background">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Community Impact</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Through strategic partnerships and dedicated initiatives, we've made lasting contributions to
                communities across South Africa, focusing on sustainable development and empowerment.
              </p>
            </div>

            <div className="space-y-8">
              {contributions.map((contribution, index) => (
                <div
                  key={contribution.id}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-card ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex flex-col lg:flex lg:min-h-[160px] max-h-[300px]`}
                >
                  {/* Background Image */}
                  <div className="relative lg:w-1/2 h-48 lg:h-auto">
                    <img
                      src={contribution.image || "/placeholder.svg"}
                      alt={contribution.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 ${
                        index % 2 === 0
                          ? "bg-gradient-to-l from-card via-card/40 to-transparent"
                          : "bg-gradient-to-r from-card via-card/40 to-transparent"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`relative lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center bg-transparent ${
                      index % 2 === 0 ? "lg:-ml-8" : "lg:-mr-8"
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
                        {contribution.category}
                      </span>
                      <p className="text-sm text-muted-foreground font-medium">{contribution.date}</p>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {contribution.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{contribution.description}</p>

                    {/* Impact Indicator */}
                    <div className="mt-4 flex items-center text-accent">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse" />
                      <span className="text-sm font-medium">Active Impact</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Partner With Us for Greater Impact
                </h3>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                  Join us in making a difference. Together, we can create sustainable solutions that empower communities
                  and drive positive change across South Africa.
                </p>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
