import Image from "next/image";

const Testimonial = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-start py-10 bg-[#f2f5f7]">
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
              <h2 className="text-5xl  text-center mb-4  sm:text-[45px] font-normal text-primaryText">
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We Are Moving & Transportation Company Services section */}
      <div className="lg:flex justify-between items-center bg-white p-8 rounded-lg">
        <Image
          src={"/images/moving.png"}
          height={600}
          width={700}
          alt="moving"
       
        ></Image>

        <div className="lg:w-2/6 mx-auto text-start">
          <h2 className="lg:text-5xl text-2xl font-normal text-primaryText  mb-4">
            We Are Moving & Transportation Company Services
          </h2>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="mt-8 space-y-4">
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
              <p className="text-lg font-medium text-primaryText ">
                10+ Years Of Experience
              </p>
            </div>
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
              <p className="text-lg font-medium text-primaryText ">
                Professional Working
              </p>
            </div>
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
              <p className="text-lg font-medium text-primaryText ">
                100% Success Moving
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
