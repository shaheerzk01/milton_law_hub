import Image from "next/image";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="h-screen w-full flex flex-col p-5">
      {/* First Half: Full-width Image */}
      <div className="relative h-[60%] w-full">
        <Image
          src="/images/panoramic.png" // Ensure this is inside /public/images
          alt="Coming Soon"
          layout="fill"
          quality={100}
        />
      </div>

      {/* Second Half: Blank Section with Text */}
      <div className="h-[40%] w-full bg-white flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Coming Soon</h1>
      </div>
    </div>
  );
}
