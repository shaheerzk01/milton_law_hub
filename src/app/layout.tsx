"use client"
import "@/css/style.css"
import React from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <title>Milton Law Hub</title>
      <meta name="description" content="Milton Law Hub" />
      <body suppressHydrationWarning={true}>{children}
      </body>
    </html>
  )
}
