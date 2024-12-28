import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ErrandUser() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mt-8">
          <Image
            src="/images/errand.png"
            alt="Trokis Logo"
            width={200}
            height={200}
          />
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          Moving and errands, simplified.
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {/* Send Package */}
          <button className="w-full border px-14 border-gray-300 text-primaryText    bg-white shadow-md rounded-lg py-6 text-center hover:bg-black hover:text-white focus:ring-2 focus:ring-black focus:outline-none">
            <div className="text-3xl mb-4">📦</div>
            <p className="font-medium">Send package</p>
          </button>

          {/* Receive Package */}
          <button className="w-full border border-gray-300 text-primaryText bg-white shadow-md rounded-lg py-6 text-center hover:bg-black hover:text-white focus:ring-2 focus:ring-black focus:outline-none">
            <div className="text-3xl mb-4">📥</div>
            <p className="font-medium">Receive package</p>
          </button>

          {/* Errand */}

          <Link href={"/user/NewDriver"}>
            <button className="w-full border border-gray-300 text-primaryText hover:text-white  shadow-md rounded-lg py-6 text-center hover:bg-gray-800 focus:ring-2 focus:ring-gray-800 focus:outline-none">
              <div className="text-3xl mb-4">🛒</div>
              <p className="font-medium">Errand</p>
            </button>
          </Link>
        </div>

        {/* Back Button */}
        <Link href={"/user"}>
          <button className="mt-8 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-black hover:text-white focus:ring-2 focus:ring-gray-300 focus:outline-none">
            ← Back
          </button>
        </Link>
      </div>
    </div>
  );
}
