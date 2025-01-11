import Banner from "@/app/components/Home/Banner";
import Image from "next/image";
import React from "react";

export default function driver() {
  const prorducts = [
    {
      title: "Fast Booking",
      description: "Book your trip in just a few seconds",
      image: "/images/boost.png",
    },
    {
      title: "Best Rate",
      description: "Get the best fare on the market",
      image: "/images/Group.png",
    },
    {
      title: "Secured Delivery",
      description: "Ensure the safest delivery of your products",
      image: "/images/rate.png",
    },
    {
      title: "Verified Drivers",
      description: "Thousands of verified drivers are available",
      image: "/images/Verified Drivers.png",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Choose the appropriate types of trucks",
      description: "Select the types of trucks according to your needs.",
    },
    {
      number: 2,
      title: "Choose date, time and other specifications",
      description:
        "Select the date and time that work best for you for the delivery of your goods. You can also add additional information if needed.",
    },
    {
      number: 3,
      title: "Publish your trip",
      description:
        "Finally, publish your trip and get tagged with a truck. Now enjoy our services and have access to other features and special offers.",
    },
  ];

  return (
    <div className="text-primaryText space-y-10">
      <Banner></Banner>

      {/* Benefits for Driver */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-primaryText">
            Benefits for Driver
          </h1>
          <p className="text-sm md:text-lg lg:text-xl font-normal text-gray-600 mt-2 lg:w-1/2 mx-auto">
            Truck Lagbe helps you to get trips and earn more by leveraging
            technology, while reducing day to day hassle of the traditional
            truck hiring process
          </p>
        </div>
        <div className="lg:flex justify-between items-center gap-8 lg:mt-10 mt-">
          {/* Left Section - Product Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {prorducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-md p-4 text-center"
                >
                  <div className="flex items-center justify-center h-20 w-20 mx-auto">
                    <Image
                      width={50}
                      height={50}
                      className="bg-[#c4f6fc] p-2 rounded-full text-black shadow-md"
                      alt={product.title || "Product Image"}
                      src={product.image}
                    />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-base md:text-lg font-normal text-primaryText">
                      {product.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex-1 mt-8 lg:mt-0 text-center lg:text-right">
            <Image
              width={660}
              height={555}
              className="max-w-full h-auto mx-auto lg:mx-0"
              alt="WhyTrokis"
              src={"/images/driverPic.png"}
            />
          </div>
        </div>
      </div>

      {/* How it work section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-[30px] sm:text-[40px] md:text-[45px] font-normal text-primaryText">
            How it works
          </h1>
          <p className="text-[18px] sm:text-[20px] md:text-[23px] font-normal">
            A simple and quick truck hiring process.
          </p>
        </div>

        {/* Steps and Image Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-10">
          {/* Steps Container */}
          <div className="flex-1 p-4 sm:p-6 lg:p-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col border rounded-lg p-6 mb-4 shadow-sm bg-white"
              >
                <h3 className="text-base sm:text-lg font-normal text-primaryText">
                  {step.number}. {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  {step.description}
                </p>
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

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              height={500}
              width={740}
              alt="HowWorks"
              src={"/images/driverHow.png"}
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </div>

      {/* testimonial section */}
      <div>
        <div className="lg:flex flex-col items-center justify-start py-10 px-4 bg-[#f2f5f7]">
          <div className="lg:relative w-full ">
            {/* Background Image */}
            <Image
              src={"/images/Testimonial.png"}
              height={655}
              width={955}
              alt="Background"
              className="rounded-lg object-cover"
            />

            {/* Testimonial Card */}
            <div className="lg:absolute inset-0 flex items-center justify-end ">
              <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl z-10">
                <h2 className="lg:text-5xl text-2xl font-normal text-primaryText text-center mb-4">
                  Testimonial
                </h2>
                <div className="flex flex-col items-center">
                  {/* Profile Image */}
                  <Image
                    src="/images/user.png" // Replace with the testimonial profile image URL
                    alt="Jane Cooper"
                    width={80} // Set specific width
                    height={80} // Set specific height
                    className="rounded-full mb-4 pt-10"
                  />
                  <p className="text-lg font-medium">Jane Cooper</p>
                  {/* Star Ratings */}
                  <div className="flex my-2">
                    {Array(5)
                      .fill("")
                      .map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-yellow-500"
                        >
                          <path d="M12 17.27L18.18 21 16.54 14.04 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.8L5.82 21z" />
                        </svg>
                      ))}
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-center lg:w-1/2 mx-auto text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* get the most  */}
      <div className="lg:flex justify-between items-center mt-20 px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="lg:w-[500px] text-start mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primaryText mb-4">
            Get The Most of Trokis With Our Mobile App
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="mt-8 space-y-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
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
                Multiple location selection option
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center gap-4">
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
                In-app tracking allows you and the receiver to track
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex items-center gap-4">
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
                Truck hiring for the whole day
              </p>
            </div>
            {/* Feature 4 */}
            <div className="flex items-center gap-4">
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
                Round-trip option
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end flex-1">
          <Image
            src="/images/briverMoving.png"
            height={200}
            width={500}
            alt="car"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}
