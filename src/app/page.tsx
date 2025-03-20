"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center text-center">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/background.png" 
          alt="Background"
          layout="fill" 
          objectFit="cover" 
          quality={100}
          className="opacity-50" 
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="Under Construction"
          width={160}
          height={160}
          priority
          className="mb-4"
        />
        <h1 className="text-4xl font-bold text-black mt-10">Website is under construction</h1>
      </div>
    </div>
  );
}
