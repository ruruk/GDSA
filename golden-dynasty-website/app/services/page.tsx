import Header from "@/components/global/header"
import Footer from "@/components/global/footer"
import PageHeader from "@/components/global/page-header"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Our Services"
          description="Comprehensive engineering and construction solutions including fibre installation, powerline products, project management, and maintenance services."
          backgroundImage="/placeholder.svg?height=400&width=1200"
        />
        {/* Content sections can be added here */}
      </main>
      <Footer />
    </div>
  )
}
