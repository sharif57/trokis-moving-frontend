// "use client";

// import React, { useState } from "react";
// import { DatePicker, Input, TimePicker, Tooltip, Select } from "antd";
// import Map from "@/app/components/shared/Map";
// import { MapPin } from "lucide-react";

// const { Option } = Select;

// const onDateChange = (date, dateString) => {
//   console.log("Selected Date:", date, "Formatted Date:", dateString);
// };

// const onTimeChange = (time, timeString) => {
//   console.log("Selected Time:", time, "Formatted Time:", timeString);
// };

// export default function DateTimePicker() {
//   const [location, setLocation] = useState("");

//   // Location options for the dropdown
//   const locationOptions = [
//     { value: "New York", label: "New York" },
//     { value: "London", label: "London" },
//     { value: "Paris", label: "Paris" },
//     { value: "Tokyo", label: "Tokyo" },
//   ];

//   return (
//     <div className="flex lg:flex-row gap-8 justify-around items-start bg-gray-100 p-8">
//       {/* Input Section */}
//       <div className="space-y-6 w-full lg:w-1/2">
//         {/* Location Select Dropdown */}
//         <div className="flex flex-col">
//           <Select
//             className="w-full  text-sm sm:text-base"
//             placeholder="Select Starting Location"
//             value={location}
//             onChange={(value) => setLocation(value)} // Handle location selection
//             suffixIcon={
//               <Tooltip title="Location">
//                 <MapPin style={{ color: "rgba(0,0,0,.45)" }} />
//               </Tooltip>
//             }
//           >
//             {locationOptions.map((option) => (
//               <Option key={option.value} value={option.value}>
//                 {option.label}
//               </Option>
//             ))}
//           </Select>
//         </div>

//         {/* Date and Time Pickers */}
//         <div className="flex flex-col lg:flex-row gap-4 mt-6">
//           {/* Date Picker */}
//           <div className="flex-1">
//             <DatePicker
//               onChange={onDateChange}
//               className="w-full py-3"
//               placeholder="Select Date"
//             />
//           </div>

//           {/* Time Picker */}
//           <div className="flex-1">
//             <TimePicker
//               onChange={onTimeChange}
//               className="w-full py-3"
//               placeholder="Select Time"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg w-full lg:w-auto hover:bg-blue-700 transition-all mt-6">
//           Submit
//         </button>
//       </div>

//       {/* Map Section */}
//       <div className="w-full">
//         <Map />
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Select, Input, Button } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import Map from "@/app/components/shared/Map";
import Link from "next/link";

const { Option } = Select;

// Dynamically load Ant Design components
const DynamicDatePicker = dynamic(
  () => import("antd").then((mod) => mod.DatePicker),
  { ssr: false }
);
const DynamicTimePicker = dynamic(
  () => import("antd").then((mod) => mod.TimePicker),
  { ssr: false }
);

const App = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 text-primaryText p-4 lg:p-8">
      {/* Form Section */}
      <div className="w-full lg:w-1/2  rounded-md p-6">
        <form>
          {/* Starting Location */}
          <div className="mb-4">
            <div className="flex items-center mt-1">
              <Input
                id="starting-location"
                placeholder="Starting Location"
                prefix={<EnvironmentOutlined />}
                className="w-full py-3"
              />
            </div>
          </div>

          {/* Date and Time */}
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <DynamicDatePicker id="date" className="w-full mt-1 py-3" />
            </div>
            <div className="flex-1">
              <DynamicTimePicker id="time" className="w-full mt-1 py-3" />
            </div>
          </div>

          {/* Dropdown Fields */}
          <div className="mb-4">
            <Select
              id="location-type"
              className="w-full mt-1 "
              placeholder="Location Type"
            >
              <Option value="home">Home</Option>
              <Option value="office">Office</Option>
              <Option value="warehouse">Warehouse</Option>
            </Select>
          </div>

          <div className="mb-4">
            <Select
              id="floor-level"
              className="w-full mt-1"
              placeholder="Floor Level"
            >
              <Option value="ground">Ground</Option>
              <Option value="1st">1st</Option>
              <Option value="2nd">2nd</Option>
              <Option value="3rd">3rd</Option>
            </Select>
          </div>

          <div className="mb-4">
            <Select
              id="elevator"
              className="w-full mt-1"
              placeholder="Select Option"
            >
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </div>

          <div className="mb-6">
            <Select
              id="parking-type"
              className="w-full mt-1"
              placeholder="Select Parking Type"
            >
              <Option value="street">Street</Option>
              <Option value="garage">Garage</Option>
              <Option value="lot">Lot</Option>
            </Select>
          </div>

          {/* Next Button */}
          <Link href={"Destination"}>
            <div className="flex justify-center ">
              <Button
                color="default"
                variant="solid"
                htmlType="submit"
                className="w-1/2 text-xl font-normal font-lora mx-auto py-6"
              >
                Next
                <span className="ml-2">{">>"}</span>
              </Button>
            </div>
          </Link>
        </form>
      </div>

      {/* Map Section */}
      <div className=" ">
        <Map />
      </div>
    </div>
  );
};

export default App;
