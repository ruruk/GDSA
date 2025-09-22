import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recruitments - Golden Dynasty SA | Join Our Team",
  description: "Explore career opportunities and join our team of engineering and construction professionals.",
}

export default function RecruitmentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
