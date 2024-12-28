import Map from "@/app/components/shared/Map";
import { Button } from "antd";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SubmitQuoteErrand() {
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
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pb-10 mt-6 font-lora">
            {/* Cancel Button */}
            <Link href="/driver/Errand" passHref>
              <Button
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-sm sm:text-[18px] font-lora font-normal bg-gray-200 hover:bg-gray-300 transition rounded-lg"
                color="default"
                variant="outlined"
              >
                Cancel
              </Button>
            </Link>

            {/* Submit Quote Button */}
            <Link href="/driver/StartErrand" passHref>
              <Button
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-sm sm:text-[18px] font-lora font-normal text-white bg-black hover:bg-gray-800 transition rounded-lg"
                color="default"
                variant="solid"
              >
                Submit Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Map></Map>
      </div>
    </div>
  );
}
