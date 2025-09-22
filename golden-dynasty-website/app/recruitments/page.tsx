import Header from "@/components/global/header"
import Footer from "@/components/global/footer"
import PageHeader from "@/components/global/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Mail, Briefcase, Users, Zap } from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "Senior Electrical Engineer",
    department: "Engineering",
    location: "Johannesburg, South Africa",
    type: "Full-time",
    datePosted: "2024-01-15",
    isActive: true,
    description:
      "Lead electrical design projects for power transmission and distribution systems. Work with OPGW cables, ACSR conductors, and high-voltage installations.",
    requirements: [
      "Bachelor's degree in Electrical Engineering",
      "5+ years experience in power systems",
      "Knowledge of IEC standards",
    ],
  },
  {
    id: 2,
    title: "Project Manager - Fiber Optic Installation",
    department: "Operations",
    location: "Cape Town, South Africa",
    type: "Full-time",
    datePosted: "2024-01-10",
    isActive: true,
    description:
      "Manage fiber optic cable installation projects for Eskom. Oversee OPGW and ADSS cable installations across various voltage levels.",
    requirements: [
      "Project Management certification",
      "Experience with fiber optic systems",
      "Strong leadership skills",
    ],
  },
  {
    id: 3,
    title: "Quality Assurance Specialist",
    department: "Quality Control",
    location: "Durban, South Africa",
    type: "Full-time",
    datePosted: "2024-01-08",
    isActive: true,
    description:
      "Ensure compliance with ISO 9001:2015 standards and IEC specifications. Conduct routine and type testing of electrical products.",
    requirements: ["Quality management experience", "Knowledge of ISO standards", "Attention to detail"],
  },
  {
    id: 4,
    title: "Field Technician - Power Lines",
    department: "Field Operations",
    location: "Pretoria, South Africa",
    type: "Full-time",
    datePosted: "2024-01-05",
    isActive: true,
    description:
      "Install and maintain power line equipment including conductors, insulators, and hardware fittings. Work on projects from 33kV to 765kV.",
    requirements: [
      "Technical diploma or certification",
      "Experience with high-voltage systems",
      "Safety certification",
    ],
  },
  {
    id: 5,
    title: "Sales Representative - Industrial Products",
    department: "Sales",
    location: "Remote/Travel",
    type: "Full-time",
    datePosted: "2023-12-28",
    isActive: false,
    description:
      "Develop relationships with utility companies and industrial clients. Promote our range of transmission and distribution products.",
    requirements: [
      "Sales experience in industrial sector",
      "Technical product knowledge",
      "Strong communication skills",
    ],
  },
  {
    id: 6,
    title: "Graduate Trainee - Engineering",
    department: "Engineering",
    location: "Johannesburg, South Africa",
    type: "Graduate Program",
    datePosted: "2023-12-20",
    isActive: false,
    description:
      "12-month graduate program covering all aspects of electrical engineering in power systems. Mentorship and training provided.",
    requirements: ["Recent Engineering graduate", "Strong academic record", "Eagerness to learn"],
  },
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const getDaysAgo = (dateString: string) => {
  const posted = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - posted.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export default function RecruitmentsPage() {
  const activeJobs = jobListings.filter((job) => job.isActive)
  const inactiveJobs = jobListings.filter((job) => !job.isActive)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Join Our Team"
          description="Explore career opportunities with Golden Dynasty SA and become part of our mission to build South Africa's infrastructure future."
          backgroundImage="/placeholder.svg?height=400&width=1200"
        />

        <div className="py-16 px-4">
          <div className="max-w-container mx-auto">
            {/* Company Values Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Work With Us?</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  Join a company built on reputation, integrity, and innovation. Be part of creating a world-class
                  African company.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Reputation</h3>
                  <p className="text-muted-foreground">
                    Build your career with a trusted leader in South Africa's electrical engineering sector.
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p className="text-muted-foreground">
                    Work in an environment that values honesty, transparency, and ethical business practices.
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Be at the forefront of technological advancement in power systems and fiber optics.
                  </p>
                </div>
              </div>
            </section>

            {/* Active Job Listings */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-golden" />
                <h2 className="text-2xl font-bold text-foreground">Current Openings</h2>
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                  {activeJobs.length} Active
                </Badge>
              </div>

              <div className="grid gap-6">
                {activeJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-golden/30"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1 hover:text-golden transition-colors">
                              {job.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {getDaysAgo(job.datePosted)} days ago
                              </span>
                            </div>
                          </div>
                          
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>

                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-golden rounded-full mt-2 shrink-0"></span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="lg:ml-6 shrink-0">
                        <Button
                          asChild
                          className="w-full lg:w-auto bg-golden hover:bg-golden-dark text-primary-foreground"
                        >
                          <a
                            href={`mailto:melanie@goldendynasty.co.za?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position posted on ${formatDate(job.datePosted)}.%0D%0A%0D%0APlease find my application details below:%0D%0A%0D%0ABest regards`}
                            className="flex items-center gap-2"
                          >
                            <Mail className="w-4 h-4" />
                            Apply Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recently Closed Positions */}
            {inactiveJobs.length > 0 && (
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="w-6 h-6 text-muted-foreground" />
                  <h2 className="text-2xl font-bold text-foreground">Recently Closed</h2>
                  <Badge variant="outline" className="border-muted text-muted-foreground">
                    {inactiveJobs.length} Closed
                  </Badge>
                </div>

                <div className="grid gap-4">
                  {inactiveJobs.map((job) => (
                    <div key={job.id} className="bg-muted/30 border border-border rounded-xl p-6 opacity-75">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-medium text-muted-foreground mb-1">{job.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Closed {getDaysAgo(job.datePosted)} days ago
                                </span>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-muted text-muted-foreground shrink-0">
                              Closed
                            </Badge>
                          </div>

                          <p className="text-muted-foreground text-sm">{job.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-golden/5 to-amber-600/5 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Don't See the Right Position?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your CV and let us know how you
                can contribute to our mission.
              </p>
              <Button asChild size="lg" className="bg-golden hover:bg-golden-dark text-primary-foreground">
                <a
                  href="mailto:melanie@goldendynasty.co.za?subject=General Application - Golden Dynasty SA&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in exploring career opportunities with Golden Dynasty SA.%0D%0A%0D%0APlease find my CV attached. I would welcome the opportunity to discuss how my skills and experience can contribute to your team.%0D%0A%0D%0ABest regards"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send General Application
                </a>
              </Button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
