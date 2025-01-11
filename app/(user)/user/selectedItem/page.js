"use client";
import React, { useState } from "react";
import { Collapse, Input, Button, Upload, Modal } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  UploadOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Map from "@/app/components/shared/Map";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Beds",
    items: [
      "King Bed (includes mattress)",
      "Queen Bed (includes mattress)",
      "Double Bed (includes mattress)",
      "Semi-Double Bed (includes mattress)",
      "Single Bed (includes mattress)",
      "Detachable Bunk Bed (includes mattresses)",
      "Bed Backrest/Headboard",
      "1½-Size Mattress",
    ],
  },
  {
    name: "Dining Room",
    items: ["Dining Table", "Chairs", "Sideboard", "Cabinet"],
  },
  {
    name: "Living Room",
    items: ["Sofa", "TV Stand", "Coffee Table", "Rug"],
  },
  {
    name: "Office / Studio",
    items: ["Desk", "Chair", "Bookshelf"],
  },
  // Add more categories as needed
];

const App = () => {
  const [itemCounts, setItemCounts] = useState({});
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleIncrement = (item) => {
    setItemCounts((prev) => ({
      ...prev,
      [item]: (prev[item] || 0) + 1,
    }));
  };

  const handleDecrement = (item) => {
    setItemCounts((prev) => ({
      ...prev,
      [item]: Math.max((prev[item] || 0) - 1, 0),
    }));
  };

  const handlePreview = async (file) => {
    setPreviewImage(file.url || (file.preview || URL.createObjectURL(file.originFileObj)));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // Convert categories to items for Collapse
  const collapseItems = categories.map((category) => ({
    key: category.name,
    label: (
      <div className="flex justify-between text-primaryText font-normal font-lora items-center">
        <span>{category.name}</span>
        <RightOutlined />
      </div>
    ),
    children: category.items.map((item) => (
      <div
        key={item}
        className="flex text-primaryText font-normal font-lora items-center justify-between mb-2"
      >
        <span>{item}</span>
        <div className="flex items-center gap-2">
          <Button
            type="default"
            size="small"
            icon={<MinusOutlined />}
            onClick={() => handleDecrement(item)}
          />
          <span>{itemCounts[item] || 0}</span>
          <Button
            type="default"
            size="small"
            icon={<PlusOutlined />}
            onClick={() => handleIncrement(item)}
          />
        </div>
      </div>
    )),
  }));

  return (
    <div className="lg:flex flex-col lg:flex-row justify-between items-start gap-8 px-4 sm:px-6 lg:px-12 py-8">
      {/* Left Section: Form */}
      <div className="lg:w-1/2 w-full">
        <div className="w-full p-6 bg-white rounded-md">
          <h1 className="text-xl text-primaryText font-normal mb-4">
            Select Item
          </h1>

          {/* Categories */}
          <Collapse accordion items={collapseItems} />

          {/* Additional Details */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Additional Details
            </label>
            <Input.TextArea
              rows={4}
              placeholder="Add any additional information here..."
              className="mt-2"
            />
          </div>

          {/* Image Upload */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Upload Photos
            </label>
            <Upload
              action="https://dummy-upload-endpoint.com/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={() => setPreviewOpen(false)}
            >
              <Image
              height={100}
              width={100}
                alt="preview"
                style={{ width: "100%" }}
                src={previewImage}
              />
            </Modal>
          </div>

          {/* Next Button */}
          <Link href={"movingInfo"}>
            <div className="mt-6">
              <Button
                color="default" variant="solid"
                htmlType="submit"
                className="w-1/2 text-xl font-normal font-lora mx-auto py-6"
              >
                Next
                <span className="ml-2">{">>"}</span>
              </Button>
            </div>
          </Link>
        </div>
      </div>

      {/* Right Section: Map */}
      <div className=" rounded-md">
        <Map />
      </div>
    </div>
  );
};

export default App;
