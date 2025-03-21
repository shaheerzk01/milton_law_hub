import React from "react";
import { FaLinkedin, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ComingSoon() {
  return (
    <div className="w-full h-screen flex flex-col p-4">
      <div className="relative h-[45vh] w-full bg-gray-700 flex flex-col items-center justify-center text-white text-center px-4">
        <FaClock className="text-6xl sm:text-8xl text-gray-300 animate-pulse mb-4 drop-shadow-lg" />

        <h1 className="text-4xl sm:text-6xl font-bold tracking-wide">
          COMING SOON
        </h1>

        <p className="text-gray-300 text-sm sm:text-lg mt-2 max-w-md">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
      </div>

      {/* Second Section: Scrollable Content */}
      <div className="flex-1 w-full bg-gray-100 overflow-auto px-6 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            About Milton Hobbs
          </h1>

          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
            Milton Hobbs is a distinguished international law firm providing
            sophisticated legal counsel across the UAE, France, and the Gulf
            region. We specialize in corporate, commercial, and international
            law, guided by a philosophy of{" "}
            <strong>excellence and innovation</strong>.
          </p>

          <div className="w-12 sm:w-20 border-t-2 border-gray-400 my-6 mx-auto"></div>

          {/* Centered Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md mx-auto">
            <div className="flex flex-row items-center space-x-2 justify-center bg-gray-200 rounded-lg shadow-md p-2">
              <MdEmail size={18} className="text-gray-600" />
              <a href="mailto:contact@miltonhobbs.com">
                <span>contact@miltonhobbs.com</span>
              </a>
            </div>
            <div className="flex flex-row items-center space-x-2 justify-center bg-gray-200 rounded-lg shadow-md p-2">
              <FaLinkedin size={18} className="text-gray-600" />
              <a href="https://www.linkedin.com/company/milton-hobbs/">
                <span>Connect LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="mt-8 w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Our Location
            </h2>
            <div className="w-full h-60 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.449469951233!2d55.28269847560478!3d25.221781930704065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f437f37840bed%3A0x9fe65bbb156659d1!2sMilton%20Hobbs!5e0!3m2!1sen!2sae!4v1742488183690!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
