"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <Image
        src="/images/logo.png" // Must be inside `public/`
        alt="Under Construction"
        width={160} // Ensure width & height are fixed
        height={160}
        priority // Ensures fast load
        className="mb-4"
      />
      <h1 className="text-4xl font-bold">Website is under construction</h1>
    </div>
  );
}
