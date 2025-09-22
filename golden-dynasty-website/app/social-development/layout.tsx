import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Development - Golden Dynasty SA | Community Impact",
  description: "Learn about our social development initiatives and community impact programs across South Africa.",
}

export default function SocialDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
