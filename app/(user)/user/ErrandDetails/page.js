import Map from "@/app/components/shared/Map";
import { Button } from "antd";
import { ChevronLeft, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ErrandDetails() {
  return (
    <div className="lg:flex justify-center gap-10">
      <div>
        <div>
          <div>
            <div className="bg-white p-6 rounded-lg text-primaryText  ">
              <h2 className="text-lg font-normal mb-4">Errand details</h2>
              <p className="w-3/5 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <h3 className="text-[28px] font-normal mb-2">
                  Driver Information
                </h3>
                <div>
                  <div className="flex items-center gap-4 mt-3">
                    <Image
                      src="/images/user.png"
                      width={60}
                      height={60}
                      alt="User Profile"
                    />
                    <div className="space-y-2">
                      <h1 className="text-[18px] font-normal">
                        Sabbir Hossein
                      </h1>
                      <div className="lg:flex items-center gap-4">
                        <p>123-456-7890</p>
                        <div className="border-l-2 h-6 border-black"></div>
                        <p>sharifmahamud@gmail.com</p>
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
              </div>
              <div className="flex justify-start pt-8 mb-6">
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
                  <p className="text-sm text-gray-600">
                    Address: Banasree, Dhaka
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-[20px] font-normal ">
                  Select Payment Method
                </h1>
              </div>

              <div className="flex justify-start gap-6  mt-6">
                <Link href="/driver/ParcelWay" passHref>
                  <Button
                    className="px-8 py-6 text-[18px]  rounded-2xl bg-white text-black font-lora font-normal"
                    color="default"
                    // variant="solid"
                  >
                    Online Payment
                  </Button>
                </Link>
                <Link href="/driver/ParcelWay" passHref>
                  <Button
                    className="px-8 py-6 text-[18px] rounded-2xl  bg-white text-black font-lora font-normal"
                    color="default"
                    variant="solid"
                  >
                    Cash
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/user/Confirm" passHref>
              <Button
                className="px-8 py-6 text-[18px]  rounded-2xl bg-white text-black font-lora font-normal"
                color="default"
                // variant="solid"
              >
                <ChevronLeft />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Map></Map>
    </div>
  );
}
