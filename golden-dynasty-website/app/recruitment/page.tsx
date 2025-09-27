import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import PageHeader from "@/components/global/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Mail, Briefcase, Users, Zap } from "lucide-react";

const jobListings = [
  {
    id: 1,
    title: "Project Manager",
    department: "Operations",
    location: "South Africa",
    type: "Full-time",
    datePosted: "2024-01-15",
    isActive: true,
    description:
      "Lead and manage electrical engineering projects from conception to completion. Oversee OPGW and ADSS cable installations, coordinate with clients, and ensure project delivery within scope, time, and budget.",
    requirements: [
      "Bachelor's degree in Engineering or Project Management",
      "5+ years project management experience",
      "PMP certification preferred",
      "Experience with electrical infrastructure projects",
    ],
  },
  {
    id: 2,
    title: "Site Supervisor",
    department: "Field Operations",
    location: "South Africa",
    type: "Full-time",
    datePosted: "2024-01-12",
    isActive: true,
    description:
      "Supervise on-site installation and maintenance activities for power line projects. Ensure safety compliance, quality standards, and coordinate field teams for optimal project execution.",
    requirements: [
      "Technical diploma in Electrical Engineering",
      "3+ years supervisory experience in electrical field work",
      "Safety certification and training",
      "Strong leadership and communication skills",
    ],
  },
  {
    id: 3,
    title: "Sales Representative",
    department: "Sales",
    location: "South Africa",
    type: "Full-time",
    datePosted: "2024-01-10",
    isActive: true,
    description:
      "Develop and maintain relationships with utility companies and industrial clients. Promote our range of electrical products including OPGW cables, insulators, and power line equipment.",
    requirements: [
      "Bachelor's degree in Business or Engineering",
      "2+ years sales experience in industrial/electrical sector",
      "Strong technical product knowledge",
      "Excellent communication and negotiation skills",
    ],
  },
  {
    id: 4,
    title: "Financial Assistant",
    department: "Finance",
    location: "South Africa",
    type: "Full-time",
    datePosted: "2024-01-08",
    isActive: true,
    description:
      "Support financial operations including accounts payable/receivable, budget tracking, and financial reporting. Assist with project costing and financial analysis for engineering projects.",
    requirements: [
      "Diploma in Accounting or Finance",
      "2+ years experience in financial administration",
      "Proficiency in accounting software and Excel",
      "Attention to detail and accuracy",
    ],
  },
  {
    id: 5,
    title: "Experienced Climbers",
    department: "Field Operations",
    location: "South Africa",
    type: "Full-time",
    datePosted: "2024-01-05",
    isActive: true,
    description:
      "Perform specialized climbing work for power line installations and maintenance. Work at heights on transmission towers and poles for cable installation, equipment mounting, and maintenance activities.",
    requirements: [
      "Certified climbing and safety training",
      "3+ years experience in power line climbing",
      "Physical fitness and ability to work at heights",
      "Safety-first mindset and attention to detail",
    ],
  },
  {
    id: 6,
    title: "Environmental Officer",
    department: "Compliance",
    location: "South Africa",
    type: "Full-time",
    datePosted: "2024-01-03",
    isActive: true,
    description:
      "Ensure environmental compliance for all projects. Conduct environmental impact assessments, manage permits, and implement environmental management plans for electrical infrastructure projects.",
    requirements: [
      "Bachelor's degree in Environmental Science or related field",
      "2+ years experience in environmental compliance",
      "Knowledge of South African environmental legislation",
      "Strong analytical and reporting skills",
    ],
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getDaysAgo = (dateString: string) => {
  const posted = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - posted.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export default function RecruitmentsPage() {
  const activeJobs = jobListings.filter((job) => job.isActive);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Join Our Team"
          description="Explore career opportunities with Golden Dynasty SA and become part of our mission to build South Africa's infrastructure future."
          backgroundImage="/images/GD office.JPG"
        />

        <div className="py-16 px-4 pb-0">
          <div className="max-w-container mx-auto">
            {/* Company Values Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Why Work With Us?
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  Join a company built on reputation, integrity, and innovation.
                  Be part of creating a world-class African company.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Reputation</h3>
                  <p className="text-muted-foreground">
                    Build your career with a trusted leader in South Africa's
                    electrical engineering sector.
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p className="text-muted-foreground">
                    Work in an environment that values honesty, transparency,
                    and ethical business practices.
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Be at the forefront of technological advancement in power
                    systems and fiber optics.
                  </p>
                </div>
              </div>
            </section>

            {/* Active Job Listings */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-golden" />
                <h2 className="text-2xl font-bold text-foreground">
                  Current Openings
                </h2>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 border-green-200"
                >
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
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {job.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">
                            Key Requirements:
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {job.requirements.map((req, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
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
                            href={`mailto:melanie@goldendynasty.co.za?subject=Application for ${
                              job.title
                            }&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${
                              job.title
                            } position posted on ${formatDate(
                              job.datePosted
                            )}.%0D%0A%0D%0APlease find my application details below:%0D%0A%0D%0ABest regards`}
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

            {/* Contact Section */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
