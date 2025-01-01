"use client";

import Map from "@/app/components/shared/Map";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function FindingNearbyLocation() {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="lg:flex flex-col lg:flex-row justify-between text-primaryText items-start gap-8 px-4 sm:px-6 lg:px-12 py-8">
      {/* Left Section */}
      <div className="w-full ">
        {/* Errand Selection */}
        <div className="bg-white p-4 rounded-lg border-b pb-4 mb-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              height={100}
              width={100}
              src="/images/bike.png"
              alt="Bike"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h3 className="text-lg font-medium">Bike</h3>
              <p className="text-sm text-gray-500">12:30 PM Away</p>
            </div>
          </div>
          <button className="text-sm text-blue-500 hover:underline">
            Change
          </button>
        </div>

        {/* Pickup and Drop-off Details */}
        <div className="space-y-4">
          {/* Drop-off Details */}
          <div className="space-y-3">
            <h1 className="text-sm font-medium">Drop-off Location</h1>
            <div className="flex justify-between bg-white p-4 rounded-lg items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-black">
                  <ArrowUp />
                </span>
                <div>
                  <h4 className="text-sm font-medium">
                    2972 Westheimer Rd, Santa Ana
                  </h4>
                  <p className="text-sm text-gray-500">Dhaka</p>
                </div>
              </div>
              <button className="text-sm text-blue-500 hover:underline">
                Edit
              </button>
            </div>
          </div>

          {/* Pickup Details */}
          <div className="space-y-3">
            <h1 className="text-sm font-medium">Pickup Details</h1>
            <div className="flex justify-between bg-white p-4 rounded-lg items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-black">
                  <ArrowUp />
                </span>
                <div>
                  <h4 className="text-sm font-medium">538 Shahid Baki Rd</h4>
                  <p className="text-sm text-gray-500">Dhaka</p>
                </div>
              </div>
              <button className="text-sm text-blue-500 hover:underline">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Ride Details */}
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div className="bg-white  p-6 rounded-lg">
            {/* Header */}
            <h2 className="text-lg font-medium mb-4">Finding nearby rides..</h2>

            <div className="">
              <h1>Bike</h1>
              <p className="text-sm">Food Item</p>
            </div>

            {/* Pickup and Delivery Dates */}
            <div className="flex justify-start items-center mt-4 gap-10 mb-6">
              <div className="flex flex-col">
                <span className="text-sm font-medium">Pickup</span>
                <span className="text-xs text-gray-500">Date: 12-11-2024</span>
              </div>
              <div className="border-l border-black  pl-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Delivery</span>
                  <span className="text-xs text-gray-500">
                    Date: 15-11-2024
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6 w-1/2">
              <div className="flex items-center gap-4">
                <button
                  className={`flex-1 py-2 px-4 border rounded-lg text-sm ${
                    paymentMethod === "online"
                      ? "bg-black text-white"
                      : "bg-gray-100 text-black"
                  }`}
                  onClick={() => setPaymentMethod("online")}
                >
                  Online Payment
                </button>
                <button
                  className={`flex-1 py-2 px-4 border rounded-lg text-sm ${
                    paymentMethod === "cash"
                      ? "bg-black text-white"
                      : "bg-gray-100 text-black"
                  }`}
                  onClick={() => setPaymentMethod("cash")}
                >
                  Cash
                </button>
              </div>
            </div>

            {/* Cancel Button */}
            <button className="w-1/2 py-3 bg-black text-red-500 font-semibold rounded-lg hover:bg-gray-800">
              Cancel Delivery
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="">
        <Map />
      </div>
    </div>
  );
}
