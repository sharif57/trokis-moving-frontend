import Image from "next/image";
import React from "react";

export default function HowWorks() {
  const steps = [
    {
      number: 1,
      title: "Download the app and sign up",
      description:
        "Install the Truck Lagbe app from the Google Play store. Then sign up in the app to start the seamless truck hiring process.",
      button: "/images/google-play-badge.png",
    },
    {
      number: 2,
      title: "Choose your location",
      description: "Now select your load and unload location.",
    },
    {
      number: 3,
      title: "Choose the appropriate types of trucks",
      description: "Select the types of trucks according to your needs.",
    },
    {
      number: 4,
      title: "Choose date, time and other specifications",
      description:
        "Select the date and time that work best for you for the delivery of your goods. You can also add additional information if needed.",
    },
    {
      number: 5,
      title: "Publish your trip",
      description:
        "Finally, publish your trip and get tagged with a truck. Now enjoy our services and have access to other features and special offers.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center">
        <h1 className="text-[45px] font-normal text-primaryText">
          How it works
        </h1>
        <p className="text-[23px] font-normal">
          A simple and quick truck hiring process.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="p-8 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col border rounded-lg p-6 mb-4 shadow-sm bg-white"
            >
              <h3 className="text-lg font-normal text-primaryText">
                {step.number}. {step.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{step.description}</p>
              {step.button && (
                <Image
                  src={step.button} // Replace this with the actual image path
                  height={100}
                  width={200}
                  alt="Google Play Badge"
                  className="mt-4"
                />
              )}
            </div>
          ))}
        </div>
        <Image
          height={620}
          width={740}
          alt="HowWorks"
          src={"/images/HowWorks.png"}
        ></Image>
      </div>
    </div>
  );
}
