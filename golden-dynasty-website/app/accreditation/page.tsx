import Header from "@/components/global/header"
import Footer from "@/components/global/footer"
import PageHeader from "@/components/global/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Award, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function AccreditationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Accreditations & Compliance"
          description="Golden Dynasty SA maintains internationally recognized certifications and accreditations, ensuring quality, compliance, and empowerment in all our projects."
          backgroundImage="/engineering-certification-documents-professional.jpg"
        />

        <div className="max-w-container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-0">
            {/* ISO Certification */}
            <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-amber-800">ISO 9001:2015</CardTitle>
                <p className="text-amber-700">Quality Management System</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-300">
                  Certified Since 2009
                </Badge>
                <p className="text-sm text-amber-700">
                  International quality standards ensuring consistency and reliability in all projects.
                </p>
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            {/* CIDB Grading */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-blue-800">CIDB Grade 7EP</CardTitle>
                <p className="text-blue-700">Electrical Engineering Works</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300">
                  Active Registration
                </Badge>
                <p className="text-sm text-blue-700">
                  Qualified to deliver high-value electrical and engineering projects across South Africa.
                </p>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            {/* BEE Certification */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-green-800">BEE Level 3</CardTitle>
                <p className="text-green-700">110% Procurement Recognition</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
                  Empowering Supplier
                </Badge>
                <p className="text-sm text-green-700">
                  Committed to transformation, inclusivity, and economic development in South Africa.
                </p>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          </div>

          
        </div>
      </main>
      <Footer />
    </div>
  )
}
