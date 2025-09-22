import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Golden Dynasty SA | Our Engineering Portfolio",
  description: "Explore our portfolio of successful engineering and construction projects across South Africa.",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
