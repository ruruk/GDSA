import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products - Golden Dynasty SA",
  description:
    "Explore our comprehensive range of high-voltage electrical products and solutions for power transmission and distribution projects.",
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
