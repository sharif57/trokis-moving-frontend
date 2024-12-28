import { BellDot } from "lucide-react";
import React from "react";

export default function Notifications() {
  return (
    <div>
      <div className="bg-gray-50 p-4 lg:w-1/2 mx-auto sm:p-6 lg:p-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Notification Header */}
          <div className="flex items-center gap-4 p-4 border-b">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
            <BellDot className="text-black" />
            </div>
            <p className="text-gray-800 text-sm sm:text-base">
              You have a load request from driver.
            </p>
          </div>

          {/* Notification List */}
          <div className="divide-y divide-gray-200">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 hover:bg-gray-100 transition"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                <BellDot className="text-black" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Your Shipment is delivered by driver, please confirm it first.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
