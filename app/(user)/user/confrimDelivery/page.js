"use client";

import Map from "@/app/components/shared/Map";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ConfirmDelivery() {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="lg:flex flex-col lg:flex-row justify-between text-primaryText items-start gap-8 px-4 sm:px-6 lg:px-12 py-8">
      <div className=" rounded-lg p-6 w-full ">
        {/* Errand Selection */}
        <div className="flex justify-between bg-white p-4 rounded-lg items-center border-b pb-4 mb-4">
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
          <div className="space-y-3">
            <h1>Drop off location</h1>

            <div className="flex justify-between bg-white p-4 rounded-lg items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-black">
                  <ArrowUp></ArrowUp>
                </span>
                <div>
                  <h4 className="text-sm font-medium">
                    2972 Westheimer Rd. Santa Ana,
                  </h4>
                  <p className="text-sm text-gray-500">Dhaka</p>
                </div>
              </div>
              <button className="text-sm text-blue-500 hover:underline">
                Edit
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <h1>Pickup details</h1>

            <div className="flex justify-between bg-white p-4 rounded-lg items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-black">
                  <ArrowUp></ArrowUp>
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
          {/* <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl text-black">
                <ArrowDown></ArrowDown>
              </span>
              <div>
                <div>
                  <h1>Pickup details</h1>
                  <h4 className="text-sm font-medium">2972 Westheimer Rd</h4>
                  <p className="text-sm text-gray-500">
                    Santa Ana, Illinois 85486
                  </p>
                </div>
              </div>
            </div>
            <button className="text-sm text-blue-500 hover:underline">
              Edit
            </button>
          </div> */}
        </div>

        {/* Payment Method */}
        <div className="mt-6 bg-white p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Select Payment Method</h3>
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

        {/* Guidelines */}
        <div className="mt-6 text-sm bg-white p-4 rounded-lg">
          <h3 className="font-medium mb-2">Review package guidelines</h3>
          <p className="mb-2">
            For a successful delivery, make sure your package is:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>5 KG or less</li>
            <li>BDT 6000 or less in value</li>
            <li>Securely sealed and ready for pickup</li>
          </ul>
          <h4 className="font-medium">Prohibited Items</h4>
          <p className="text-gray-500">
            Alcohol, medication, drugs, firearms, and dangerous or illegal items
            are prohibited. Items sent via Uber must comply with all laws and
            regulations.
          </p>
        </div>

        {/* Confirm Delivery Button */}

        <Link href={"/user/FindingNearbyLocation"}>
          <button className="mt-6 w-full py-3 bg-black text-white font-normal rounded-lg hover:bg-gray-800">
            Confirm delivery
          </button>
        </Link>
      </div>
      <div>
        <Map></Map>
      </div>
    </div>
  );
}
