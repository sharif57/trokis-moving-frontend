import Map from "@/app/components/shared/Map";
import { Button } from "antd";
import {
  ArrowDown,
  ArrowUp,
  BadgeCent,
  CircleDollarSign,
  FishOff,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BidStart() {
  return (
    <div className="flex justify-center gap-10">
      <div>
        <div className="   ">
          <div className="bg-white rounded-lg  p-6  w-full">
            {/* Addresses */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="material-icons text-gray-600 mr-2">
                  <ArrowUp />
                </span>
                <p className="text-gray-700">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-gray-600 mr-2">
                  <ArrowDown />
                </span>
                <p className="text-gray-700">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </p>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-gray-600 mr-2">
                  <FishOff />
                </span>
                <p className="text-gray-700">Food Item</p>
              </div>
            </div>

            {/* Price */}
            <div className="mt-6">
              <button className="bg-black text-white px-4 py-2 rounded-lg text-lg ">
                Price : $59585
              </button>
            </div>

            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-gray-700 font-medium">
                Select Payment Method{" "}
              </p>
              <div className="flex space-x-4 mt-4">
                <button className="bg-gray-300 t  text-black px-8 py-2 rounded-lg text-lg flex items-center gap-4">
                  Online Payment <BadgeCent />
                </button>
                <button className="bg-black text-white px-8 py-2 rounded-lg text-lg flex items-center gap-4">
                  Cash <CircleDollarSign />
                </button>
              </div>
            </div>

            {/* Errand Trip */}
            <div className="bg-gray-50 rounded-lg shadow-md p-4 mt-6">
              <p className="text-gray-700 font-medium">
                Here is a Errand Trip for you.
              </p>
              <p className="text-gray-700">Bike</p>
              <div className="flex justify-between mt-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium">Pickup</p>
                  <p>Date: 12-11-2024</p>
                </div>
                <div>
                  <p className="font-medium">Delivery</p>
                  <p>Date: 15-11-2024</p>
                </div>
              </div>

              <div className="flex justify-between gap-3 mt-6">
                <div>
                  <Link href="/driver/DeliveryDoneErrand" passHref>
                    <Button
                      className="px-16 py-6 text-[18px]  font-lora font-normal"
                      color="default"
                    >
                      Cancel
                    </Button>
                  </Link>
                </div>
                <Link href="/driver/ParcelErrand" passHref>
                  <Button
                    className="px-16 py-6 text-[18px] text-white font-lora font-normal"
                    color="default"
                    variant="solid"
                  >
                    Start
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map></Map>
    </div>
  );
}
