import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Golden Dynasty SA | Our Story & Mission",
  description:
    "Learn about Golden Dynasty SA's journey, mission, and commitment to engineering excellence and social development in South Africa.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
