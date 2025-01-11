
"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

const Banner = () => {
  const [startLocation, setStartLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [startCoords, setStartCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const mapRef = useRef(null);
  const directionsRendererRef = useRef(null);

  const initMap = () => {
    const { google } = window;

    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });

    directionsRendererRef.current = new google.maps.DirectionsRenderer({
      map,
    });

    initAutocomplete("start-input", setStartLocation, setStartCoords);
    initAutocomplete(
      "destination-input",
      setDestinationLocation,
      setDestinationCoords
    );
  };

  const initAutocomplete = (inputId, setLocation, setCoords) => {
    if (typeof window === "undefined") return;

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

  const loadGoogleMapsAPI = () => {
    if (typeof window === "undefined") return;
    if (window.google) return;

    const existingScript = document.querySelector(
      `script[src^="https://maps.googleapis.com/maps/api/js"]`
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = () => {
      console.log("Google Maps API loaded.");
      initMap();
    };
    document.head.appendChild(script);
  };

  useEffect(() => {
    loadGoogleMapsAPI();
  }, []);

  useEffect(() => {
    if (startCoords && destinationCoords) {
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
    }
  }, [startCoords, destinationCoords]);

  return (
    <div className="lg:flex flex-col lg:flex-row justify-between items-start gap-8 px-4 sm:px-6 lg:px-12 py-8">
      <div className="flex-1 w-full">
        <h1 className="text-primaryText text-2xl sm:text-3xl lg:text-4xl font-normal mb-6">
          Go anywhere with Trokis
        </h1>
        <div className="space-y-4 sm:space-y-6">
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
            </span>
          </div>
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
};

export default dynamic(() => Promise.resolve(Banner), { ssr: false });
