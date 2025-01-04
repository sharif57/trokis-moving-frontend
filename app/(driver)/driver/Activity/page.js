import { Button } from "antd";
import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

const data = [
  {
    from: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    to: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    price: "$585",
    time: "2:00 PM, 22 November 2024",
    vehicle: "7 Feet 1 Ton (Covered)",
    status: "Complete",
  },
  {
    from: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    to: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    price: "$585",
    time: "2:00 PM, 22 November 2024",
    vehicle: "7 Feet 1 Ton (Covered)",
    status: "Cancelled",
  },
  {
    from: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    to: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    price: "$585",
    time: "2:00 PM, 22 November 2024",
    vehicle: "7 Feet 1 Ton (Covered)",
    status: "Biding",
  },
  {
    from: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    to: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    price: "$585",
    time: "2:00 PM, 22 November 2024",
    vehicle: "7 Feet 1 Ton (Covered)",
    status: "Biding",
  },
  {
    from: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    to: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    price: "$585",
    time: "2:00 PM, 22 November 2024",
    vehicle: "7 Feet 1 Ton (Covered)",
    status: "Biding",
  },
  {
    from: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    to: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    price: "$585",
    time: "2:00 PM, 22 November 2024",
    vehicle: "7 Feet 1 Ton (Covered)",
    status: "Biding",
  },
  {
    from: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    to: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    price: "$585",
    time: "2:00 PM, 22 November 2024",
    vehicle: "7 Feet 1 Ton (Covered)",
    status: "Biding",
  },
  {
    from: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    to: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    price: "$585",
    time: "2:00 PM, 22 November 2024",
    vehicle: "7 Feet 1 Ton (Covered)",
    status: "Biding",
  },
  {
    from: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    to: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    price: "$585",
    time: "2:00 PM, 22 November 2024",
    vehicle: "7 Feet 1 Ton (Covered)",
    status: "Biding",
  },
  // Add more entries if needed
];

export default function Activity() {
  return (
    <div>
      {" "}
      <div className="bg-gray-100  p-6">
        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-4 lg:flex items-center justify-between"
            >
              {/* Address Section */}
              <div className="lg:flex-1 space-y-1">
                <div className="flex items-center">
                  <span className="material-icons text-gray-600 mr-2">
                    <ArrowUp />
                  </span>
                  <p className="text-gray-700">{item.from}</p>
                </div>
                <div className="flex items-center">
                  <span className="material-icons text-gray-600 mr-2">
                    <ArrowDown />
                  </span>
                  <p className="text-gray-700">{item.to}</p>
                </div>
              </div>
              
              <Button color="default" variant="outlined">
              Price: {item.price}
              </Button>
              {/* Price and Time */}
              <div className="flex-1 text-center space-y-1">
                <p className="text-gray-600">{item.time}</p>
                <p className="text-gray-600">{item.vehicle}</p>
              </div>

              {/* Status Button */}
              <div>
                <Button
                  type="primary"
                  className={`${
                    item.status === "Complete"
                      ? "bg-green-500"
                      : item.status === "Cancelled"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  } text-white border-none`}
                >
                  {item.status}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
