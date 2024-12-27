// import { Input } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import { Mail } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// export default function Contact() {
//   return (
//     <div>
//       <div className="lg:flex justify-between items-start">
//         <div className="lg:w-2/5  text-start">
//           <h2 className="text-5xl font-normal text-primaryText  mb-4">
//             Keep Connected & Lets Get In Touch With Us
//           </h2>
//           <p className=" text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <div className="mt-8 space-y-4">
//             <div className="flex items-start gap-4">
//               <svg
//                 width="20"
//                 height="21"
//                 viewBox="0 0 20 21"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M5.05025 4.55025C7.78392 1.81658 12.2161 1.81658 14.9497 4.55025C17.6834 7.28392 17.6834 11.7161 14.9497 14.4497L10 19.3995L5.05025 14.4497C2.31658 11.7161 2.31658 7.28392 5.05025 4.55025ZM10 11.5C11.1046 11.5 12 10.6046 12 9.5C12 8.39543 11.1046 7.5 10 7.5C8.89543 7.5 8 8.39543 8 9.5C8 10.6046 8.89543 11.5 10 11.5Z"
//                   fill="#2B2A2A"
//                 />
//               </svg>

//               <div className="flex flex-col">
//                 <p className="text-[20px] font-normal text-primaryText ">
//                   Head Office
//                 </p>
//                 <p className="text-[16px]">
//                   Lumbung Hidup Street Madiun City East Java
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <Mail />

//               <div className="flex flex-col">
//                 <p className="text-[20px] font-normal text-primaryText  ">
//                   Email Address
//                 </p>
//                 <p>Admin@trokis.com</p>
//               </div>
//             </div>
//             <div className="flex items-start  gap-4">
//               <svg
//                 width="16"
//                 height="17"
//                 viewBox="0 0 16 17"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H3.15287C3.64171 0.5 4.0589 0.853413 4.13927 1.3356L4.87858 5.77147C4.95075 6.20451 4.73206 6.63397 4.3394 6.8303L2.79126 7.60437C3.90756 10.3783 6.12168 12.5924 8.89563 13.7087L9.6697 12.1606C9.86603 11.7679 10.2955 11.5492 10.7285 11.6214L15.1644 12.3607C15.6466 12.4411 16 12.8583 16 13.3471V15.5C16 16.0523 15.5523 16.5 15 16.5H13C5.8203 16.5 0 10.6797 0 3.5V1.5Z"
//                   fill="#2B2A2A"
//                 />
//               </svg>

//               <div className="flex flex-col">
//                 <p className="text-[20px] font-normal text-primaryText  ">
//                   Telephone
//                 </p>
//                 <p>( +44 ) 123 456 789</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-1/2 space-y-10">
//           <div className="flex flex-col gap-4">
//             <div className="flex gap-6 ">
//               <div className="flex flex-col w-full">
//                 <label
//                   htmlFor="firstName"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   First Name *
//                 </label>
//                 <Input
//                   id="firstName"
//                   placeholder="First Name"
//                   className="py-3"
//                 />
//               </div>
//               <div className="flex flex-col w-full">
//                 <label
//                   htmlFor="lastName"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Last Name *
//                 </label>
//                 <Input id="lastName" placeholder="Last Name" className="py-3" />
//               </div>
//             </div>
//             <div className="flex gap-6 ">
//               <div className="flex flex-col w-full">
//                 <label
//                   htmlFor="email"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Email Address *
//                 </label>
//                 <Input
//                   id="email"
//                   placeholder="Email address"
//                   className="py-3"
//                 />
//               </div>
//               <div className="flex flex-col w-full">
//                 <label
//                   htmlFor="subject"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Subject
//                 </label>
//                 <Input id="subject" placeholder="Subject" className="py-3" />
//               </div>
//             </div>
//             <div className="flex flex-col w-1/2 ">
//               <label
//                 htmlFor="message"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Your Message
//               </label>
//               <TextArea
//                 id="message"
//                 rows={4}
//                 placeholder="Your Message"
//                 className="py-3"
//               />
//             </div>
//           </div>
//           <button className="bg-secondaryBg px-12 py-3 rounded-full text-white">
//             Send
//           </button>
//         </div>
//       </div>


//       <div className="flex justify-between items-center mt-20">
//         <div className="w-[500px]    text-start">
//           <h2 className="text-4xl font-normal text-primaryText  mb-4">
//             Get The Most of Trokis With Our Mobile App
//           </h2>
//           <p className=" text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//             tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//           </p>
//           <div className="mt-8 space-y-4">
//             <div className="flex items-center gap-4">
//               <svg
//                 width="24"
//                 height="25"
//                 viewBox="0 0 24 25"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.03033 12.4697ZM10.5 15L9.96967 15.5303C10.2626 15.8232 10.7374 15.8232 11.0303 15.5303L10.5 15ZM16.0303 10.5303C16.3232 10.2374 16.3232 9.76256 16.0303 9.46967C15.7374 9.17678 15.2626 9.17678 14.9697 9.46967L16.0303 10.5303ZM21.25 12.5C21.25 17.6086 17.1086 21.75 12 21.75V23.25C17.9371 23.25 22.75 18.4371 22.75 12.5H21.25ZM12 21.75C6.89137 21.75 2.75 17.6086 2.75 12.5H1.25C1.25 18.4371 6.06294 23.25 12 23.25V21.75ZM2.75 12.5C2.75 7.39137 6.89137 3.25 12 3.25V1.75C6.06294 1.75 1.25 6.56294 1.25 12.5H2.75ZM12 3.25C17.1086 3.25 21.25 7.39137 21.25 12.5H22.75C22.75 6.56294 17.9371 1.75 12 1.75V3.25ZM7.96967 13.5303L9.96967 15.5303L11.0303 14.4697L9.03033 12.4697L7.96967 13.5303ZM11.0303 15.5303L16.0303 10.5303L14.9697 9.46967L9.96967 14.4697L11.0303 15.5303Z"
//                   fill="#323B47"
//                 />
//               </svg>
//               <p className="text-lg font-medium text-primaryText ">
//                 Multiple location selection option
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <svg
//                 width="24"
//                 height="25"
//                 viewBox="0 0 24 25"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.03033 12.4697ZM10.5 15L9.96967 15.5303C10.2626 15.8232 10.7374 15.8232 11.0303 15.5303L10.5 15ZM16.0303 10.5303C16.3232 10.2374 16.3232 9.76256 16.0303 9.46967C15.7374 9.17678 15.2626 9.17678 14.9697 9.46967L16.0303 10.5303ZM21.25 12.5C21.25 17.6086 17.1086 21.75 12 21.75V23.25C17.9371 23.25 22.75 18.4371 22.75 12.5H21.25ZM12 21.75C6.89137 21.75 2.75 17.6086 2.75 12.5H1.25C1.25 18.4371 6.06294 23.25 12 23.25V21.75ZM2.75 12.5C2.75 7.39137 6.89137 3.25 12 3.25V1.75C6.06294 1.75 1.25 6.56294 1.25 12.5H2.75ZM12 3.25C17.1086 3.25 21.25 7.39137 21.25 12.5H22.75C22.75 6.56294 17.9371 1.75 12 1.75V3.25ZM7.96967 13.5303L9.96967 15.5303L11.0303 14.4697L9.03033 12.4697L7.96967 13.5303ZM11.0303 15.5303L16.0303 10.5303L14.9697 9.46967L9.96967 14.4697L11.0303 15.5303Z"
//                   fill="#323B47"
//                 />
//               </svg>
//               <p className="text-lg font-medium text-primaryText ">
//                 In-app tracking allows you and the receiver to track
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <svg
//                 width="24"
//                 height="25"
//                 viewBox="0 0 24 25"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.03033 12.4697ZM10.5 15L9.96967 15.5303C10.2626 15.8232 10.7374 15.8232 11.0303 15.5303L10.5 15ZM16.0303 10.5303C16.3232 10.2374 16.3232 9.76256 16.0303 9.46967C15.7374 9.17678 15.2626 9.17678 14.9697 9.46967L16.0303 10.5303ZM21.25 12.5C21.25 17.6086 17.1086 21.75 12 21.75V23.25C17.9371 23.25 22.75 18.4371 22.75 12.5H21.25ZM12 21.75C6.89137 21.75 2.75 17.6086 2.75 12.5H1.25C1.25 18.4371 6.06294 23.25 12 23.25V21.75ZM2.75 12.5C2.75 7.39137 6.89137 3.25 12 3.25V1.75C6.06294 1.75 1.25 6.56294 1.25 12.5H2.75ZM12 3.25C17.1086 3.25 21.25 7.39137 21.25 12.5H22.75C22.75 6.56294 17.9371 1.75 12 1.75V3.25ZM7.96967 13.5303L9.96967 15.5303L11.0303 14.4697L9.03033 12.4697L7.96967 13.5303ZM11.0303 15.5303L16.0303 10.5303L14.9697 9.46967L9.96967 14.4697L11.0303 15.5303Z"
//                   fill="#323B47"
//                 />
//               </svg>
//               <p className="text-lg font-medium text-primaryText ">
//                 Truck hiring for the whole day
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <svg
//                 width="24"
//                 height="25"
//                 viewBox="0 0 24 25"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.03033 12.4697ZM10.5 15L9.96967 15.5303C10.2626 15.8232 10.7374 15.8232 11.0303 15.5303L10.5 15ZM16.0303 10.5303C16.3232 10.2374 16.3232 9.76256 16.0303 9.46967C15.7374 9.17678 15.2626 9.17678 14.9697 9.46967L16.0303 10.5303ZM21.25 12.5C21.25 17.6086 17.1086 21.75 12 21.75V23.25C17.9371 23.25 22.75 18.4371 22.75 12.5H21.25ZM12 21.75C6.89137 21.75 2.75 17.6086 2.75 12.5H1.25C1.25 18.4371 6.06294 23.25 12 23.25V21.75ZM2.75 12.5C2.75 7.39137 6.89137 3.25 12 3.25V1.75C6.06294 1.75 1.25 6.56294 1.25 12.5H2.75ZM12 3.25C17.1086 3.25 21.25 7.39137 21.25 12.5H22.75C22.75 6.56294 17.9371 1.75 12 1.75V3.25ZM7.96967 13.5303L9.96967 15.5303L11.0303 14.4697L9.03033 12.4697L7.96967 13.5303ZM11.0303 15.5303L16.0303 10.5303L14.9697 9.46967L9.96967 14.4697L11.0303 15.5303Z"
//                   fill="#323B47"
//                 />
//               </svg>
//               <p className="text-lg font-medium text-primaryText ">
//                 Round-trip option
//               </p>
//             </div>
//           </div>
//         </div>
//         <Image src={'/images/car.png'} height={200} width={500} alt="car"></Image>
//       </div>
//     </div>
//   );
// }


import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Text Section */}
        <div className="lg:w-2/5 text-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-primaryText mb-4">
            Keep Connected & Let's Get In Touch With Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.05025 4.55025C7.78392 1.81658 12.2161 1.81658 14.9497 4.55025C17.6834 7.28392 17.6834 11.7161 14.9497 14.4497L10 19.3995L5.05025 14.4497C2.31658 11.7161 2.31658 7.28392 5.05025 4.55025ZM10 11.5C11.1046 11.5 12 10.6046 12 9.5C12 8.39543 11.1046 7.5 10 7.5C8.89543 7.5 8 8.39543 8 9.5C8 10.6046 8.89543 11.5 10 11.5Z"
                  fill="#2B2A2A"
                />
              </svg>
              <div>
                <p className="text-lg font-medium text-primaryText">Head Office</p>
                <p className="text-sm">Lumbung Hidup Street Madiun City East Java</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail />
              <div>
                <p className="text-lg font-medium text-primaryText">Email Address</p>
                <p className="text-sm">Admin@trokis.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H3.15287C3.64171 0.5 4.0589 0.853413 4.13927 1.3356L4.87858 5.77147C4.95075 6.20451 4.73206 6.63397 4.3394 6.8303L2.79126 7.60437C3.90756 10.3783 6.12168 12.5924 8.89563 13.7087L9.6697 12.1606C9.86603 11.7679 10.2955 11.5492 10.7285 11.6214L15.1644 12.3607C15.6466 12.4411 16 12.8583 16 13.3471V15.5C16 16.0523 15.5523 16.5 15 16.5H13C5.8203 16.5 0 10.6797 0 3.5V1.5Z"
                  fill="#2B2A2A"
                />
              </svg>
              <div>
                <p className="text-lg font-medium text-primaryText">Telephone</p>
                <p className="text-sm">( +44 ) 123 456 789</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 w-full space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                First Name *
              </label>
              <Input id="firstName" placeholder="First Name" className="py-3" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <Input id="lastName" placeholder="Last Name" className="py-3" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <Input id="email" placeholder="Email address" className="py-3" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input id="subject" placeholder="Subject" className="py-3" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Your Message
            </label>
            <TextArea id="message" rows={4} placeholder="Your Message" className="py-3" />
          </div>
          <button className="bg-secondaryBg px-12 py-3 rounded-full text-white">
            Send
          </button>
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-20 gap-12">
        <div className="lg:w-[500px] text-start">
          <h2 className="text-3xl sm:text-4xl font-normal text-primaryText mb-4">
            Get The Most of Trokis With Our Mobile App
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Multiple location selection option",
              "In-app tracking allows you and the receiver to track",
              "Truck hiring for the whole day",
              "Round-trip option",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-4">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.03033 12.4697ZM10.5 15L9.96967 15.5303C10.2626 15.8232 10.7374 15.8232 11.0303 15.5303L10.5 15ZM16.0303 10.5303C16.3232 10.2374 16.3232 9.76256 16.0303 9.46967C15.7374 9.17678 15.2626 9.17678 14.9697 9.46967L16.0303 10.5303ZM21.25 12.5C21.25 17.6086 17.1086 21.75 12 21.75V23.25C17.9371 23.25 22.75 18.4371 22.75 12.5H21.25ZM12 21.75C6.89137 21.75 2.75 17.6086 2.75 12.5H1.25C1.25 18.4371 6.06294 23.25 12 23.25V21.75ZM2.75 12.5C2.75 7.39137 6.89137 3.25 12 3.25V1.75C6.06294 1.75 1.25 6.56294 1.25 12.5H2.75ZM12 3.25C17.1086 3.25 21.25 7.39137 21.25 12.5H22.75C22.75 6.56294 17.9371 1.75 12 1.75V3.25ZM7.96967 13.5303L9.96967 15.5303L11.0303 14.4697L9.03033 12.4697L7.96967 13.5303ZM11.0303 15.5303L16.0303 10.5303L14.9697 9.46967L9.96967 14.4697L11.0303 15.5303Z"
                    fill="#323B47"
                  />
                </svg>
                <p className="text-base sm:text-lg font-medium text-primaryText">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/images/car.png"
          height={500}
          width={600}
          alt="car"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
