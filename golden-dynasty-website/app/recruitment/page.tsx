import { Briefcase, Calendar, MapPin, Mail, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const jobPostings = [
  {
    id: 1,
    title: "Senior Electrical Engineer",
    department: "Engineering",
    location: "Johannesburg, South Africa",
    type: "Full-time",
    datePosted: "2024-01-15",
    description:
      "Lead electrical design projects for transmission and distribution systems. Experience with OPGW cables and high-voltage systems required.",
    requirements: ["Bachelor's degree in Electrical Engineering", "5+ years experience", "ECSA registration preferred"],
    isActive: true,
  },
  {
    id: 2,
    title: "Project Manager - Fiber Optic Installation",
    department: "Operations",
    location: "Cape Town, South Africa",
    type: "Full-time",
    datePosted: "2024-01-10",
    description:
      "Manage fiber optic installation projects from planning to commissioning. Experience with Eskom projects and OPGW systems essential.",
    requirements: ["Project Management certification", "3+ years fiber optic experience", "Valid driver's license"],
    isActive: true,
  },
  {
    id: 3,
    title: "Quality Assurance Specialist",
    department: "Quality Control",
    location: "Durban, South Africa",
    type: "Full-time",
    datePosted: "2024-01-08",
    description:
      "Ensure compliance with ISO 9001:2015 standards and IEC specifications. Conduct routine and type testing of electrical products.",
    requirements: ["Quality Management experience", "ISO 9001 knowledge", "Electrical testing background"],
    isActive: true,
  },
  {
    id: 4,
    title: "Sales Engineer - Power Line Products",
    department: "Sales",
    location: "Pretoria, South Africa",
    type: "Full-time",
    datePosted: "2024-01-05",
    description:
      "Drive sales of transmission line products including conductors, insulators, and hardware fittings. Build relationships with utility companies.",
    requirements: ["Engineering degree", "Sales experience", "Technical product knowledge"],
    isActive: true,
  },
  {
    id: 5,
    title: "Field Technician - OPGW Installation",
    department: "Field Operations",
    location: "Multiple Locations",
    type: "Contract",
    datePosted: "2024-01-03",
    description:
      "Install and commission OPGW cables on transmission lines. Work on various voltage levels from 33kV to 765kV.",
    requirements: ["Electrical trade qualification", "Height work certification", "2+ years field experience"],
    isActive: true,
  },
  {
    id: 6,
    title: "Graduate Trainee Engineer",
    department: "Engineering",
    location: "Johannesburg, South Africa",
    type: "Graduate Program",
    datePosted: "2023-12-20",
    description:
      "12-month graduate program covering all aspects of electrical engineering in the power transmission industry.",
    requirements: ["Recent Engineering graduate", "Strong academic record", "Willingness to travel"],
    isActive: false,
  },
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return "1 day ago"
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  return `${Math.floor(diffDays / 30)} months ago`
}

export default function RecruitmentPage() {
  const activeJobs = jobPostings.filter((job) => job.isActive)
  const inactiveJobs = jobPostings.filter((job) => !job.isActive)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-golden/10 py-16 px-4">
        <div className="max-w-container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className="w-12 h-12 text-golden" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Join Our Team</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build your career with Golden Dynasty SA, a leading electrical engineering company specializing in power
            transmission and fiber optic solutions. We offer exciting opportunities to work on cutting-edge projects
            with industry-leading clients.
          </p>
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-golden" />
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-golden" />
              <span>B-BBEE Level 3</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-golden" />
              <span>185+ Projects Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Active Job Listings */}
      <section className="py-16 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Current Opportunities</h2>
            <p className="text-lg text-muted-foreground">
              {activeJobs.length} active position{activeJobs.length !== 1 ? "s" : ""} available
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeJobs.map((job) => (
              <div
                key={job.id}
                className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-golden transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full">
                        Active
                      </span>
                      <span className="bg-golden/10 text-golden text-xs font-medium px-2.5 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{job.description}</p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-card-foreground mb-2">Key Requirements:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {job.requirements.slice(0, 2).map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-golden mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                      {job.requirements.length > 2 && (
                        <li className="text-golden text-xs">+{job.requirements.length - 2} more requirements</li>
                      )}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{getTimeAgo(job.datePosted)}</span>
                    </div>
                    <Button size="sm" className="bg-golden hover:bg-golden-dark text-white" asChild>
                      <a href="mailto:melanie@goldendynasty.co.za?subject=Application for Senior Electrical Engineer Position">
                        <Mail className="w-4 h-4 mr-2" />
                        Apply Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Closed Positions */}
      {inactiveJobs.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Recently Closed Positions</h2>
              <p className="text-lg text-muted-foreground">Keep an eye on these roles - they may reopen soon</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {inactiveJobs.map((job) => (
                <div key={job.id} className="bg-card rounded-xl border border-border shadow-sm opacity-75">
                  <div className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">{job.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                          Closed
                        </span>
                        <span className="bg-gray-50 text-gray-500 text-xs font-medium px-2.5 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{job.description}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Closed {getTimeAgo(job.datePosted)}</span>
                      </div>
                      <Button size="sm" variant="outline" disabled className="opacity-50 bg-transparent">
                        Position Closed
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-golden/5 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Don't See the Right Role?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're always looking for talented individuals to join our team. Send us your CV and let us know how you can
            contribute to our mission of delivering world-class electrical engineering solutions.
          </p>
          <Button size="lg" className="bg-golden hover:bg-golden-dark text-white" asChild>
            <a href="mailto:melanie@goldendynasty.co.za?subject=General Application - Golden Dynasty SA">
              <Mail className="w-5 h-5 mr-2" />
              Send Your CV
            </a>
          </Button>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>Email: melanie@goldendynasty.co.za</p>
            <p>We'll get back to you within 48 hours</p>
          </div>
        </div>
      </section>
    </div>
  )
}
