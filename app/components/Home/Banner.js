


// "use client";

// import { Input, Tooltip } from "antd";
// import { MapPin } from "lucide-react";

// export default function Banner() {
//   return (
//     <div className="lg:flex flex-col lg:flex-row justify-between items-start gap-8 px-4 sm:px-6 lg:px-12 py-8">
//       {/* Left Section */}
//       <div className="flex-1 w-full">
//         <h1 className="text-primaryText text-2xl sm:text-3xl lg:text-4xl font-normal mb-6">
//           Go anywhere with Trokis
//         </h1>
//         <div className="space-y-4 sm:space-y-6">
//           {/* Starting Location Input */}
//           <div>
//             <Input
//               className="py-3 text-sm sm:text-base"
//               placeholder="Starting Location"
//               prefix={
//                 <svg
//                   width="14"
//                   height="16"
//                   viewBox="0 0 14 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292894C6.68342 -0.0976312 7.31658 -0.0976312 7.70711 0.292894L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L8 3.41421L8 15C8 15.5523 7.55229 16 7 16C6.44772 16 6 15.5523 6 15L6 3.41421L1.70711 7.70711C1.31658 8.09763 0.683418 8.09763 0.292893 7.70711Z"
//                     fill="#8A8A8A"
//                   />
//                 </svg>
//               }
//               suffix={
//                 <Tooltip>
//                   <MapPin style={{ color: "rgba(0,0,0,.45)" }} />
//                 </Tooltip>
//               }
//             />
//           </div>

//           {/* Destination Input */}
//           <div>
//             <Input
//               className="py-3 text-sm sm:text-base"
//               placeholder="Destination"
//               prefix={
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L9 14.5858L9 3C9 2.44772 9.44772 2 10 2C10.5523 2 11 2.44772 11 3L11 14.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929Z"
//                     fill="#8A8A8A"
//                   />
//                 </svg>
//               }
//               suffix={
//                 <Tooltip>
//                   <MapPin style={{ color: "rgba(0,0,0,.45)" }} />
//                 </Tooltip>
//               }
//             />
//           </div>

//           {/* Button */}
//           <div className="mt-6 ">
//             <button className="bg-secondaryBg text-white font-semibold py-3 px-6 rounded-lg w-full sm:w-auto hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
//               See Prices
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex-1 lg:mt-0 mt-5 w-full lg:w-auto">
//         <div className="relative w-full h-48 sm:h-64 lg:h-[450px] overflow-hidden">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143760.37906979138!2d90.33728812288355!3d23.780975728197344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1734942927850!5m2!1sen!2sbd"
//             style={{ border: 0 }}
//             loading="lazy"
//             allowFullScreen=""
//             referrerPolicy="no-referrer-when-downgrade"
//             className="absolute top-0 left-0 w-full h-full"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react"; // Import Lucide icon
import Image from "next/image";

export default function Banner() {
  const [startLocation, setStartLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [startCoords, setStartCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const mapRef = useRef(null);
  const directionsRendererRef = useRef(null);

  // Initialize Google Map and DirectionsRenderer
  const initMap = () => {
    const { google } = window;

    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 23.7809757, lng: 90.3372881 }, // Default center: Dhaka
      zoom: 12,
    });

    directionsRendererRef.current = new google.maps.DirectionsRenderer({
      map,
    });

    // Initialize Autocomplete for both inputs
    initAutocomplete("start-input", setStartLocation, setStartCoords);
    initAutocomplete("destination-input", setDestinationLocation, setDestinationCoords);
  };

  // Initialize Autocomplete for an input field
  const initAutocomplete = (inputId, setLocation, setCoords) => {
    const { google } = window;
    const input = document.getElementById(inputId);

    if (!input) return;

    const autocomplete = new google.maps.places.Autocomplete(input, {
      fields: ["geometry", "formatted_address"],
      types: ["geocode"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (place.geometry) {
        setCoords(place.geometry.location);
        setLocation(place.formatted_address);
      } else {
        console.error("Autocomplete failed: No geometry available.");
      }
    });
  };

  // Draw route between start and destination locations
  const drawRoute = () => {
    if (!startCoords || !destinationCoords) return;

    const { google } = window;
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: startCoords,
        destination: destinationCoords,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          directionsRendererRef.current.setDirections(result);
        } else {
          console.error("Directions request failed: ", status);
        }
      }
    );
  };

  // Load Google Maps API
  const loadGoogleMapsAPI = () => {
    if (window.google) return; // Prevent duplicate loading

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFi80uuJIWkkLCpodFa8oXmD8XD_h8LMc&libraries=places`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
  };

  useEffect(() => {
    loadGoogleMapsAPI();
  }, []);

  useEffect(() => {
    if (startCoords && destinationCoords) {
      drawRoute();
    }
  }, [startCoords, destinationCoords]);

  return (
    <div className="lg:flex flex-col lg:flex-row justify-between items-start gap-8 px-4 sm:px-6 lg:px-12 py-8">
      {/* Left Section */}
      <div className="flex-1 w-full">
        <h1 className="text-primaryText text-2xl sm:text-3xl lg:text-4xl font-normal mb-6">
        Go anywhere with Trokis
        </h1>
        <div className="space-y-4 sm:space-y-6">
          {/* Starting Location Input */}
          <div className="relative">
            <input
              id="start-input"
              className="w-full py-3 px-4 pl-10 text-sm sm:text-base border rounded"
              placeholder="Enter Starting Location"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
            />
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
              <MapPin size={20} />
              {/* <Image src={'/images/bus.png'} height={50} width={50} alt="bus"></Image> */}
            </span>
          </div>

          {/* Destination Location Input */}
          <div className="relative">
            <input
              id="destination-input"
              className="w-full py-3 px-4 pl-10 text-sm sm:text-base border rounded"
              placeholder="Enter Destination"
              value={destinationLocation}
              onChange={(e) => setDestinationLocation(e.target.value)}
            />
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
              <MapPin size={20} />
            </span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 lg:mt-0 mt-5 w-full lg:w-auto">
        <div className="relative w-full h-48 sm:h-64 lg:h-[450px] overflow-hidden">
          <div
            ref={mapRef}
            className="absolute top-0 left-0 w-full h-full"
          ></div>
        </div>
      </div>
    </div>
  );
}
