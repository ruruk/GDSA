import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Facebook, Award, Shield, Users } from "lucide-react"

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Accreditation", href: "/accreditation" },
  ],
  services: [
    { name: "Fibre Optic Installation", href: "/services#fibre" },
    { name: "Powerline Products", href: "/services#powerline" },
    { name: "Project Management", href: "/services#management" },
    { name: "Social Development", href: "/social-development" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Recruitments", href: "/recruitments" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const credentials = [
  { icon: Award, text: "ISO 9001:2015 Certified" },
  { icon: Shield, text: "BEE Level 3 Contributor" },
  { icon: Users, text: "CIDB 7EP Registered" },
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-golden/50 to-transparent" />

      <div className="relative mx-auto max-w-container px-6 pb-8 pt-16 lg:px-8 lg:pt-9">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <Image
                src="/images/golden-dynasty-logo.png"
                alt="Golden Dynasty SA"
                width={280}
                height={70}
                className="h-16 w-auto transition-all duration-500 group-hover:scale-105 drop-shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-golden/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 scale-125" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white via-golden-light to-white bg-clip-text text-transparent">
            Powering South Africa's Future
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Leading infrastructure development with excellence, innovation, and social responsibility since 1997
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-golden/30 rounded-full px-3 py-1.5 text-sm text-white hover:bg-golden/20 transition-all duration-300"
              >
                <credential.icon className="h-3.5 w-3.5 text-golden" />
                <span>{credential.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-golden transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-golden transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-golden transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-golden" />
                <span className="text-slate-300 text-sm">+27 (0) 11 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-golden" />
                <span className="text-slate-300 text-sm">info@goldendynasty.co.za</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-golden" />
                <span className="text-slate-300 text-sm">Johannesburg, South Africa</span>
              </div>

              <div className="flex gap-2 pt-2">
                <Link href="#" className="bg-white/10 hover:bg-golden/20 p-2 rounded-lg transition-all duration-300">
                  <Facebook className="h-4 w-4 text-slate-300 hover:text-golden transition-colors duration-300" />
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-golden/20 p-2 rounded-lg transition-all duration-300">
                  <Linkedin className="h-4 w-4 text-slate-300 hover:text-golden transition-colors duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-golden/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">&copy; 2024 Golden Dynasty SA (Pty) Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-golden transition-colors duration-300">
                Privacy Policy
              </Link>
              <span className="w-px h-4 bg-slate-600" />
              <Link href="/terms" className="hover:text-golden transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
