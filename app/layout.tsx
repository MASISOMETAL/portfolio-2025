import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Professional portfolio showcasing my skills and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="./icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}