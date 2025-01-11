
"use client";
import React, { useEffect, useState } from "react";
import { Select, Input, Button } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import Map from "@/app/components/shared/Map";
import Link from "next/link";

const { Option } = Select;


const Destination = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="lg:flex flex-col lg:flex-row justify-between items-start gap-8 px-4 sm:px-6 lg:px-12 py-8">
      {/* Form Section */}
      <div className="w-full lg:w-1/2  rounded-md p-6">
        <form>
          {/* Starting Location */}
          <div className="mb-4">
           
            <div className="flex items-center mt-1">
              <Input
                id="starting-location"
                placeholder="Destination Location"
                prefix={<EnvironmentOutlined />}
                className="w-full py-3"
              />
            </div>
          </div>


          <div className="mb-4">
            
            <Select
              id="floor-level"
              className="w-full mt-1"
              placeholder="Location type"
            >
              <Option value="ground">Ground</Option>
              <Option value="1st">1st</Option>
              <Option value="2nd">2nd</Option>
              <Option value="3rd">3rd</Option>
            </Select>
          </div>

          <div className="mb-4">
           
          <Input
                id="starting-location"
                placeholder="Floor level"
                // prefix={<EnvironmentOutlined />}
                className="w-full "
              />
          </div>

          <div className="mb-4">
            
            <Select
              id="parking-type"
              className="w-full mt-1"
              placeholder="Is there an elevator?"
            >
              <Option value="street">Street</Option>
              <Option value="garage">Garage</Option>
              <Option value="lot">Lot</Option>
            </Select>
          </div>
          <div className="mb-6">
            
            <Select
              id="parking-type"
              className="w-full mt-1"
              placeholder="Choose parking type"
            >
              <Option value="street">Street</Option>
              <Option value="garage">Garage</Option>
              <Option value="lot">Lot</Option>
            </Select>
          </div>

          {/* Next Button */}
          <Link href={"selectedItem"}>
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

export default Destination;

