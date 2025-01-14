// import { ArrowUp } from "lucide-react";
// import React from "react";
// import Map from "../../shared/Map";
// import Image from "next/image";
// import { Button } from "antd";
// import Link from "next/link";

// export default function MakeBid() {
//   return (
//     <div className="lg:flex justify-between text-primaryText ">
//       <div className="lg:w-2/5 space-y-8">
//         <div>
//           <h1 className="text-[16px] font-normal pb-4">Starting Address : </h1>
//           <div className="bg-white p-4 rounded-lg space-y-4 text-[14px]">
//             <h1 className="flex gap-3">
//               <ArrowUp></ArrowUp> 2972 Westheimer Rd. Santa Ana, Illinois{" "}
//             </h1>
//             <p>Location type : House</p>
//             <p>Floor level : 04</p>
//             <p>Is there an elevator? : Normal elevator</p>
//             <p>Choose parking type : The parking is right outside the house</p>
//           </div>
//         </div>
//         {/* date section */}
//         <div>
//           <h1 className="text-[16px] font-normal pb-4">Date and Time : </h1>
//           <div className="bg-white p-4 rounded-lg space-y-4 text-[14px] font-normal">
//             <div className="flex gap-3">
//               <p>Date : 12-12-2024</p>
//               <p>Time : 10.45 am</p>
//             </div>
//           </div>
//         </div>

//         {/* Destination Address */}
//         <div>
//           <h1 className="text-[16px] font-normal pb-4">
//             Destination Address :{" "}
//           </h1>
//           <div className="bg-white p-4 rounded-lg space-y-4 text-[14px]">
//             <h1 className="flex gap-3">
//               <ArrowUp></ArrowUp> 2972 Westheimer Rd. Santa Ana, Illinois{" "}
//             </h1>
//             <p>Location type : House</p>
//             <p>Floor level : 04</p>
//             <p>Is there an elevator? : Normal elevator</p>
//             <p>Choose parking type : The parking is right outside the house</p>
//           </div>
//         </div>

//         {/* Items */}
//         <div>
//           <h1 className="text-[16px] font-normal pb-4">Items : </h1>
//           <div className="bg-white p-4 rounded-lg space-y-2 text-[14px]">
//             <h1 className="flex text-[16px] gap-3">
//               <Image
//                 src={"/images/Tables.png"}
//                 width={24}
//                 height={24}
//                 alt={"Farmer"}
//               ></Image>
//               Bedrooms{" "}
//             </h1>
//             <p>King Bed (includes mattress) : 1</p>
//             <p>Queen Bed (includes mattress) : 2</p>
//             <p>Queen Bed (includes mattress) : 4</p>
//           </div>

//           <div className="bg-white p-4 rounded-lg space-y-2 text-[14px]">
//             <h1 className="flex text-[16px] gap-3">
//               <Image
//                 src={"/images/bed.png"}
//                 width={24}
//                 height={24}
//                 alt={"Farmer"}
//               ></Image>
//               Dining room{" "}
//             </h1>
//             <p>King Bed (includes mattress) : 1</p>
//             <p>Queen Bed (includes mattress) : 2</p>
//             <p>Queen Bed (includes mattress) : 4</p>
//           </div>

//           <div className="bg-white p-4 rounded-lg space-y-2 text-[14px]">
//             <h1 className="flex text-[16px] gap-3">
//               <Image
//                 src={"/images/Dressers.png"}
//                 width={24}
//                 height={24}
//                 alt={"Farmer"}
//               ></Image>
//               Office / studio{" "}
//             </h1>
//             <p>King Bed (includes mattress) : 1</p>
//             <p>Queen Bed (includes mattress) : 2</p>
//             <p>Queen Bed (includes mattress) : 4</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg space-y-2 text-[14px]">
//             <h1 className="flex text-[16px] gap-3">
//               <Image
//                 src={"/images/Frame.png"}
//                 width={24}
//                 height={24}
//                 alt={"Farmer"}
//               ></Image>
//               Electronics{" "}
//             </h1>
//             <p>King Bed (includes mattress) : 1</p>
//             <p>Queen Bed (includes mattress) : 2</p>
//             <p>Queen Bed (includes mattress) : 4</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg space-y-2 text-[14px]">
//             <h1 className="flex text-[16px] gap-3">
//               <Image
//                 src={"/images/Frame.png"}
//                 width={24}
//                 height={24}
//                 alt={"Farmer"}
//               ></Image>
//               Electronics{" "}
//             </h1>
//             <p>King Bed (includes mattress) : 1</p>
//             <p>Queen Bed (includes mattress) : 2</p>
//             <p>Queen Bed (includes mattress) : 4</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg space-y-2 text-[14px]">
//             <h1 className="flex text-[16px] gap-3">
//               <Image
//                 src={"/images/Frame.png"}
//                 width={24}
//                 height={24}
//                 alt={"Farmer"}
//               ></Image>
//               Electronics{" "}
//             </h1>
//             <p>King Bed (includes mattress) : 1</p>
//             <p>Queen Bed (includes mattress) : 2</p>
//             <p>Queen Bed (includes mattress) : 4</p>
//           </div>
//         </div>

//         <div>
//           <h2 className="text-2xl font-normal text-primaryText  mb-4">
//             Photos
//           </h2>
//           <div className="flex gap-4">
//             <Image
//               src="/images/product-1.png"
//               width={100}
//               height={100}
//               alt="product-1.png"
//             />
//             <Image
//               src="/images/product-2.png"
//               width={100}
//               height={100}
//               alt="product-1.png"
//             />
//             <Image
//               src="/images/product-3.png"
//               width={100}
//               height={100}
//               alt="product-1.png"
//             />
//           </div>
//         </div>
        // <div className="flex flex-col items-center gap-4 pb-10 font-lora">
        //   <Button
        //     className="px-12 py-6 text-[18px] font-lora font-normal"
        //     color="default"
        //     variant="outlined"
        //   >
        //     Bid Price
        //   </Button>
        //   <div className="flex gap-4">
        //     <Button
        //       className="px-12 py-6 text-[18px] font-lora font-normal"
        //       color="default"
        //       variant="outlined"
        //     >
        //       Cancel
        //     </Button>
        //     <Link href={'/driver/SubmitQuote'}>
        //       <Button
        //         className="px-12 py-6 text-[18px] font-lora font-normal"
        //         color="default"
        //         variant="solid"
        //       >
        //         Next
        //       </Button>
        //     </Link>
        //   </div>
        // </div>
//       </div>
//       <div className="">
//         <Map></Map>
//       </div>
//     </div>
//   );
// }



import { ArrowUp } from "lucide-react";
import React from "react";
import Map from "../../shared/Map";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

export default function MakeBid() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 text-primaryText p-4 lg:p-8">
      {/* Left Content */}
      <div className="lg:w-2/5 space-y-8">
        {/* Starting Address */}
        <div>
          <h1 className="text-[16px] font-normal pb-4">Starting Address:</h1>
          <div className="bg-white p-4 rounded-lg space-y-4 text-[14px]">
            <h1 className="flex gap-3 items-center">
              <ArrowUp className="text-gray-600" />
              2972 Westheimer Rd. Santa Ana, Illinois
            </h1>
            <p>Location type: House</p>
            <p>Floor level: 04</p>
            <p>Is there an elevator?: Normal elevator</p>
            <p>Choose parking type: The parking is right outside the house</p>
          </div>
        </div>

        {/* Date and Time */}
        <div>
          <h1 className="text-[16px] font-normal pb-4">Date and Time:</h1>
          <div className="bg-white p-4 rounded-lg space-y-4 text-[14px] font-normal">
            <div className="flex flex-col sm:flex-row gap-3">
              <p>Date: 12-12-2024</p>
              <p>Time: 10.45 am</p>
            </div>
          </div>
        </div>

        {/* Destination Address */}
        <div>
          <h1 className="text-[16px] font-normal pb-4">Destination Address:</h1>
          <div className="bg-white p-4 rounded-lg space-y-4 text-[14px]">
            <h1 className="flex gap-3 items-center">
              <ArrowUp className="text-gray-600" />
              2972 Westheimer Rd. Santa Ana, Illinois
            </h1>
            <p>Location type: House</p>
            <p>Floor level: 04</p>
            <p>Is there an elevator?: Normal elevator</p>
            <p>Choose parking type: The parking is right outside the house</p>
          </div>
        </div>

        {/* Items Section */}
        <div>
          <h1 className="text-[16px] font-normal pb-4">Items:</h1>
          <div className="space-y-4">
            {[
              { icon: "/images/Tables.png", title: "Bedrooms" },
              { icon: "/images/bed.png", title: "Dining room" },
              { icon: "/images/Dressers.png", title: "Office / Studio" },
              { icon: "/images/Frame.png", title: "Electronics" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg space-y-2 text-[14px]"
              >
                <h1 className="flex items-center text-[16px] gap-3">
                  <Image src={item.icon} width={24} height={24} alt={item.title} />
                  {item.title}
                </h1>
                <p>King Bed (includes mattress): 1</p>
                <p>Queen Bed (includes mattress): 2</p>
                <p>Queen Bed (includes mattress): 4</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photos */}
        <div>
          <h2 className="text-2xl font-normal text-primaryText mb-4">Photos</h2>
          <div className="flex gap-4 flex-wrap">
            {["product-1.png", "product-2.png", "product-3.png"].map((img, idx) => (
              <Image
                key={idx}
                src={`/images/${img}`}
                width={100}
                height={100}
                alt={img}
                className="rounded-lg shadow"
              />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 pb-10 font-lora">
          <Button
            className="px-12 py-6 text-[18px] font-lora font-normal"
            color="default"
            variant="outlined"
          >
            Bid Price
          </Button>
          <div className="flex gap-4">
            <Button
              className="px-12 py-6 text-[18px] font-lora font-normal"
              color="default"
              variant="outlined"
            >
              Cancel
            </Button>
            <Link href={'/driver/SubmitQuote'}>
              <Button
                className="px-12 py-6 text-[18px] font-lora font-normal"
                color="default"
                variant="solid"
              >
                Next
              </Button>
            </Link>
          </div>
        </div>
        </div>
      {/* Map Section */}
      <div className="w-full lg:w-3/5 h-[400px] lg:h-auto">
        <Map />
      </div>
    </div>
  );
}
