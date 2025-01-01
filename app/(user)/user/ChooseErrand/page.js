// "use client";

// import Map from "@/app/components/shared/Map";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export default function ChooseErrand() {
//   const [selectedErrand, setSelectedErrand] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("");

//   const errands = [
//     {
//       id: "bike",
//       name: "Bike",
//       image: "/images/bike.png", // Replace with your image path
//       time: "12:30 PM Away",
//       price: "$108.95",
//     },
//     {
//       id: "car",
//       name: "Car",
//       image: "/images/cycle.png", // Replace with your image path
//       time: "12:30 PM Away",
//       price: "$108.95",
//     },
//     {
//       id: "cycle",
//       name: "Cycle",
//       image: "/images/cycle.png", // Replace with your image path
//       time: "12:30 PM Away",
//       price: "$108.95",
//     },
//   ];

//   const handleNext = () => {
//     if (!selectedErrand || !paymentMethod) {
//       alert("Please select an errand and a payment method!");
//     } else {
//       alert(`Selected: ${selectedErrand}, Payment: ${paymentMethod}`);
//     }
//   };

//   return (
//     <div className="lg:flex flex-col lg:flex-row justify-between text-primaryText items-start gap-8 px-4 sm:px-6 lg:px-12 py-8">
//       <div className="bg-background w-full text-primaryText flex items-center justify-start">
//         <div className="bg-white w-full  rounded-lg shadow-lg p-6">
//           <h2 className="text-lg font-semibold mb-4">Choose an Errand</h2>

//           {/* Errand Options */}
//           <div className="space-y-3">
//             {errands.map((errand) => (
//               <div
//                 key={errand.id}
//                 className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
//                   selectedErrand === errand.id
//                     ? "border-black shadow-md"
//                     : "border-gray-300"
//                 }`}
//                 onClick={() => setSelectedErrand(errand.id)}
//               >
//                 <div className="flex items-center gap-4">
//                   <Image
//                     height={100}
//                     width={300}
//                     src={errand.image}
//                     alt={errand.name}
//                     className="w-10 h-10 object-contain"
//                   />
//                   <div>
//                     <h3 className="text-sm font-medium">{errand.name}</h3>
//                     <p className="text-xs text-gray-500">{errand.time}</p>
//                   </div>
//                 </div>
//                 <p className="text-sm font-medium">{errand.price}</p>
//               </div>
//             ))}
//           </div>

//           {/* Payment Method */}
//           <h3 className="text-sm font-medium mt-6 mb-2">
//             Select Payment Method
//           </h3>
//           <div className="flex items-center gap-4">
//             <button
//               className={`flex-1 py-2 px-4 border rounded-lg text-sm ${
//                 paymentMethod === "online"
//                   ? "bg-black text-white"
//                   : "bg-gray-100 text-black"
//               }`}
//               onClick={() => setPaymentMethod("online")}
//             >
//               Online Payment
//             </button>
//             <button
//               className={`flex-1 py-2 px-4 border rounded-lg text-sm ${
//                 paymentMethod === "cash"
//                   ? "bg-black text-white"
//                   : "bg-gray-100 text-black"
//               }`}
//               onClick={() => setPaymentMethod("cash")}
//             >
//               Cash
//             </button>
//           </div>

//           {/* Next Button */}
//           <div className="mt-6">
//             <Link href={"/user/confrimDelivery"}>
//               <button
//                 //   onClick={handleNext}
//                 className="w-full flex items-center justify-center gap-2 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
//               >
//                 Next
//                 <span className="material-icons"></span>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Map></Map>
//       </div>
//     </div>
//   );
// }


'use client';

import Map from "@/app/components/shared/Map";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChooseErrand() {
  const [selectedErrand, setSelectedErrand] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const router = useRouter();

  const errands = [
    {
      id: "bike",
      name: "Bike",
      image: "/images/bike.png",
      time: "12:30 PM Away",
      price: "$108.95",
    },
    {
      id: "car",
      name: "Car",
      image: "/images/cycle.png",
      time: "12:30 PM Away",
      price: "$108.95",
    },
    {
      id: "cycle",
      name: "Cycle",
      image: "/images/cycle.png",
      time: "12:30 PM Away",
      price: "$108.95",
    },
  ];

  const handleNext = () => {
    if (!selectedErrand || !paymentMethod) {
      alert("Please select an errand and a payment method!");
    } else {
      router.push(
        `/user/confrimDelivery`
      );
    }
  };

  return (
    <div className="lg:flex flex-col lg:flex-row justify-between text-primaryText items-start gap-8 px-4 sm:px-6 lg:px-12 py-8">
      <div className="bg-background w-full text-primaryText flex items-center justify-start">
        <div className="bg-white w-full rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Choose an Errand</h2>

          {/* Errand Options */}
          <div className="space-y-3">
            {errands.map((errand) => (
              <div
                key={errand.id}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                  selectedErrand === errand.id
                    ? "border-black shadow-md"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedErrand(errand.id)}
              >
                <div className="flex items-center gap-4">
                  <Image
                    height={100}
                    width={300}
                    src={errand.image}
                    alt={errand.name}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{errand.name}</h3>
                    <p className="text-xs text-gray-500">{errand.time}</p>
                  </div>
                </div>
                <p className="text-sm font-medium">{errand.price}</p>
              </div>
            ))}
          </div>

          {/* Payment Method */}
          <h3 className="text-sm font-medium mt-6 mb-2">
            Select Payment Method
          </h3>
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

          {/* Next Button */}
          <div className="mt-6">
            <button
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-2 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div>
        <Map></Map>
      </div>
    </div>
  );
}
