import Map from "@/app/components/shared/Map";
import { Button } from "antd";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LocationErrand() {
  return (
    <div className="lg:flex justify-center gap-6">
      <div>
        <div className="bg-white p-6 rounded-lg text-primaryText  ">
          <h2 className="text-lg font-normal mb-4">Received location.</h2>
          <div className="flex justify-between mb-6">
            <div>
              <h3 className="font-medium">Pickup</h3>
              <p className="text-sm text-gray-600">Date: 12-11-2024</p>
              <p className="text-sm text-gray-600">
                Address: Rupatoli, Barishal
              </p>
            </div>
            <div className="border-l border-gray-300 mx-4"></div>
            <div>
              <h3 className="font-medium">Delivery</h3>
              <p className="text-sm text-gray-600">Date: 15-11-2024</p>
              <p className="text-sm text-gray-600">Address: Banasree, Dhaka</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-normal mb-2">User Information</h3>
            <div>
              <div className="flex items-center gap-4 mt-3">
                <Image
                  src="/images/user.png"
                  width={60}
                  height={60}
                  alt="User Profile"
                />
                <div className="space-y-2">
                  <h1 className="text-[18px] font-normal">Sabbir Hossein</h1>
                  <div className="lg:flex items-center gap-4">
                    <div className="flex items-center gap-2">4.65</div>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: sharifmahamud@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-4 border-2 text-[20px] font-normal px-5 rounded-3xl p-2">
                  <Mail />
                  <p>Send a free message</p>
                </div>
                <Phone />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
              {/* Support Button */}
              <Link href="/driver/LocationErrand" passHref>
                <Button
                  className="w-full sm:w-auto px-8 sm:px-16 py-4 sm:py-6 text-sm sm:text-[18px] font-lora font-normal bg-gray-200 hover:bg-gray-300 transition rounded-lg"
                  color="default"
                >
                  Support
                </Button>
              </Link>

              {/* Received Location Button */}
              <Link href="/driver/DeliveredRequestErrand" passHref>
                <Button
                  className="w-full sm:w-auto px-8 sm:px-16 py-4 sm:py-6 text-sm sm:text-[18px] font-lora font-normal text-white bg-black hover:bg-gray-800 transition rounded-lg"
                  color="default"
                  variant="solid"
                >
                  Received Location
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Map></Map>
      </div>
    </div>
  );
}
