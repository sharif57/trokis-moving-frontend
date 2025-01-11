"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  const [startLocation, setStartLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [startCoords, setStartCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const mapRef = useRef(null);
  const directionsRendererRef = useRef(null);

  const GOOGLE_MAPS_API_KEY_Next = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;


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
    initAutocomplete(
      "destination-input",
      setDestinationLocation,
      setDestinationCoords
    );
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
    if (!startCoords || !destinationCoords) {
      alert("Please select both a starting location and a destination.");
      return;
    }

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
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY_Next}&libraries&libraries=places`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
  };

  useEffect(() => {
    loadGoogleMapsAPI();
  }, []);

  return (
    <div className="lg:flex flex-col lg:flex-row justify-between text-primaryText items-start gap-8 px-4 sm:px-6 lg:px-12 py-8">
      {/* Left Section */}
      <div className="flex-1 w-full">
        <div className="space-y-4 sm:space-y-6">
          {/* Starting Location Input */}
          <div className="relative">
            <input
              id="start-input"
              className="w-full py-3 px-4 pl-10 text-sm sm:text-base border rounded"
              placeholder="Pick up location"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
            />
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
              <MapPin size={20} />
            </span>
          </div>

          {/* Destination Location Input */}
          <div className="relative">
            <input
              id="destination-input"
              className="w-full py-3 px-4 pl-10 text-sm sm:text-base border rounded"
              placeholder="Drop off location"
              value={destinationLocation}
              onChange={(e) => setDestinationLocation(e.target.value)}
            />
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
              <MapPin size={20} />
            </span>
          </div>

          {/* Search Button */}
          <div className="flex justify-evenly gap-10">
            <div className=" w-full mx-auto mt-8">
              <button
                onClick={drawRoute} // Trigger drawRoute on button click
                className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Search
              </button>
            </div>
            <div className=" w-full mx-auto mt-8">
              <Link href={"/user/ChooseErrand"}>
                <button
                  // onClick={drawRoute} // Trigger drawRoute on button click
                  className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  Next
                </button>
              </Link>
            </div>
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
