import Map from "@/app/components/shared/Map";
import { Button } from "antd";
import { ArrowDown, ArrowUp, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StartErrand() {
  return (
    <div className="lg:flex gap-6">
      <div className=" space-y-2 rounded-lg text-[14px] font-normal font-lora">
        <div className="bg-white text-primaryText p-6 rounded-lg">
          <h1>Errand details</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <ArrowUp />
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <ArrowDown />
            <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
          </div>
          <div className="pt-10">
            <div>
              <h2 className="text-[18px] font-normal  text-primaryText mb-4">
                Pricing Details
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-[18px] font-normal  text-primaryText">
                    Your price
                  </p>
                  <p className="text-[18px] font-normal  text-primaryText">
                    $ 754
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[18px] font-normal  text-primaryText">
                    Admin fee
                  </p>
                  <p className="text-[18px] font-normal  text-primaryText">
                    20%
                  </p>
                </div>
                <hr className="mt-3 border-t-2 border-black"></hr>
                <div className="flex justify-between">
                  <p className="text-[18px] font-normal  text-primaryText">
                    Your profit :{" "}
                  </p>
                  <p className="text-[18px] font-normal  text-primaryText">
                    $ 904
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-[26px] font-normal text-primaryText mb-4">
              User Information
            </h2>

            <div>
              <div className="flex items-center gap-4 mt-8">
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
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Cancel Button */}
                <Link href="/driver/SubmitQuoteErrand" passHref>
                  <Button
                    className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-sm sm:text-[18px] font-lora font-normal bg-gray-200 hover:bg-gray-300 transition rounded-lg"
                    color="default"
                    variant="solid"
                  >
                    Cancel
                  </Button>
                </Link>

                {/* Start Button */}
                <Link href="/driver/PickedUpErrand" passHref>
                  <Button
                    className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-sm sm:text-[18px] font-lora font-normal text-white bg-black hover:bg-gray-800 transition rounded-lg"
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
      <div>
        <Map></Map>
      </div>
    </div>
  );
}
