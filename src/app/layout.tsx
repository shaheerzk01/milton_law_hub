"use client";
import "@/css/style.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen w-full">
      <head>
        <title>Milton Hobbs</title>
        <meta name="description" content="Milton Law Hub" />
      </head>
      <body className="min-h-screen w-full m-0 p-0 overflow-auto" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
