import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - Golden Dynasty SA | Engineering & Construction Solutions",
  description:
    "Explore our comprehensive engineering services including fibre optic installation, powerline products, and project management solutions.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
