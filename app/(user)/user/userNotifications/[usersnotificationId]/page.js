"use client";

import Map from "@/app/components/shared/Map";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NotificationDetail() {
  const pathname = usePathname();
  const router = useRouter();

  const usersnotificationId = pathname.split("/").pop();

  const data = [
    {
      truckNumber: "DET-METRO 560-456-8540",
      trailerSize: "48 feet trailer",
      palletSpaces: "24 pallets",
      name: "Sushil Hosoda",
      rating: 4.5,
      price: "$700",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 text-primaryText p-4 lg:p-8 ">
      <div className="  rounded-lg p-6 bg-white w-full lg:h-[300px]">
        <h2 className="text-2xl font-normal  mb-4">
          Truck Information ---- {usersnotificationId}
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-medium">Truck Number</p>
            <p className="text-gray-600">DHK METRO HA 64-8549</p>
          </div>
          <div>
            <p className="text- font-medium">Trailer Size</p>
            <p className="text-gray-600">48-foot trailer.</p>
          </div>
          <div>
            <p className="text-sm font-medium">Pallet Spaces</p>
            <p className="text-gray-600">24 pallets.</p>
          </div>
          <div>              
            <p className="text-sm font-medium">Member</p>
            <p className="text-gray-600">7</p>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <Image
            height={100}
            width={100}
            src="/images/user.png"
            alt="Driver"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium">Sabbir Hossein</p>
            <p className="text-yellow-500 text-sm">★ 4.65</p>
          </div>
          <div className="ml-auto">
            <p className="text-lg font-bold bg-black text-white px-8 py-2 rounded-lg">
              $780
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8">
          <Link href={"/user/Confirm"}>
            <button className="bg-black text-white py-2 px-8 rounded-lg hover:bg-gray-800">
              Accept
            </button>
          </Link>
          <button className="bg-gray-100 text-red-600 py-2 px-8 rounded-lg hover:bg-gray-200">
            Cancel
          </button>
        </div>
      </div>
      <div className="">
        <Map />
      </div>
    </div>
  );
}
