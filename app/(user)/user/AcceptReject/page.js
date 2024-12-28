import Map from "@/app/components/shared/Map";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AcceptReject = () => {
  const data = [
    {
      truckNumber: "DET-METRO 560-456-8540",
      trailerSize: "48 feet trailer",
      palletSpaces: "24 pallets",
      name: "Sushil Hosoda",
      rating: 4.5,
      price: "$700",
    },
    {
      truckNumber: "DET-METRO 560-456-8540",
      trailerSize: "48 feet trailer",
      palletSpaces: "24 pallets",
      name: "Sushil Hosoda",
      rating: 4.5,
      price: "$700",
    },
    {
      truckNumber: "DET-METRO 560-456-8540",
      trailerSize: "48 feet trailer",
      palletSpaces: "24 pallets",
      name: "Sushil Hosoda",
      rating: 4.5,
      price: "$700",
    },
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
    <div className="lg:flex flex-col   lg:flex-row lg:justify-between gap-8 text-primaryText p-4 lg:p-8">
      <div className="bg-gray-100 lg:w-1/2 lgp-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mb-6 items-center justify-between"
          >
            {/* Left Section */}
            <div className="space-y-6">
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">
                  Truck Information
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Truck Number:</strong> {item.truckNumber}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Trailer size:</strong> {item.trailerSize}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Pallet Spaces:</strong> {item.palletSpaces}
                </p>
              </div>

              {/* Middle Section */}
              <div className="lg:flex justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    height={200}
                    width={300}
                    src="/images/user.png"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.rating} ⭐</p>
                  </div>
                </div>
                <div className="bg-black lg:mt-0 mt-4 text-center text-white px-4 py-2 rounded-md">
                  {item.price}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Link href={"Confirm"}>
                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-green-600">
                  Accept
                </button>
              </Link>
              <button className="px-4 py-2 bg-gray-200 text-red-500 rounded-md hover:bg-gray-300">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
      <Map></Map>
    </div>
  );
};

export default AcceptReject;
