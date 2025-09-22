import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Golden Dynasty SA | Engineering & Construction Excellence",
  description:
    "Welcome to Golden Dynasty SA, South Africa's leading engineering and construction company specializing in infrastructure development and social impact.",
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
