// export default function Map() {
//   return (
//     <div className="bg-gray-100 lg:w-[900px] lg:h-[835px] ">
//       {/* <Container> */}

//         <div className="lg:w-full h-64 lg:h-[450px] overflow-hidden ">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143760.37906979138!2d90.33728812288355!3d23.780975728197344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1734942927850!5m2!1sen!2sbd"
//             style={{ border: 0 }}
//             loading="lazy"
//             allowFullScreen=""
//             referrerPolicy="no-referrer-when-downgrade"
//             className="w-full h-full"
//           ></iframe>
//         </div>
//       {/* </Container> */}
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null); // Reference to the map container

  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      // Check if Google Maps API is already loaded
      if (window.google) {
        initMap();
        return;
      }

      // Load the Google Maps API script
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFi80uuJIWkkLCpodFa8oXmD8XD_h8LMc`;
      script.async = true;
      script.onload = initMap; // Initialize map after the API is loaded
      document.head.appendChild(script);
    };

    const initMap = () => {
      const { google } = window;

      // Create a new map instance
      new google.maps.Map(mapRef.current, {
        center: { lat: 23.7809757, lng: 90.3372881 }, // Center the map on Dhaka
        zoom: 12, // Set zoom level
      });
    };

    loadGoogleMapsAPI();
  }, []);

  return (
    <div className="bg-gray-100 lg:w-[900px] lg:h-[835px]">
      <div ref={mapRef} className="w-full h-64 lg:h-[450px]"></div>
    </div>
  );
}
