
"use client";
import React, { useEffect, useState } from "react";
import { Select, Input, Button } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import Map from "@/app/components/shared/Map";
import Link from "next/link";

const { Option } = Select;


const NewDriver = () => {
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
          <div className="mb-4 space-y-4">
           
            <div className="flex items-center mt-1">
              <Input
                id="starting-location"
                placeholder="Describe Your Errand"
                // suffix={<EnvironmentOutlined />} 
                className="w-full py-3"
              />
            </div>
            <div className="flex items-center mt-1">
              <Input
                id="starting-location"
                placeholder="Pick up location"
                suffix={<EnvironmentOutlined />} 
                className="w-full py-3"
              />
            </div>
            <div className="flex items-center mt-1">
              <Input
                id="starting-location"
                placeholder="Drop off location"
                suffix={<EnvironmentOutlined />} 
                className="w-full py-3"
              />
            </div>
            <div className="flex items-center mt-1">
              <Input
                id="starting-location"
                placeholder="Add more destinations"
                suffix={<EnvironmentOutlined />} 
                className="w-full py-3"
              />
            </div>
          </div>



          {/* Next Button */}
          {/* <Link href={"AcceptReject"}>
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
          </Link> */}
          <Link href={"priceDone"}>
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
      <div className="w-full ">
        <Map />
      </div>
    </div>
  );
};

export default NewDriver;

