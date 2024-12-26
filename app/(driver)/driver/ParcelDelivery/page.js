import Map from "@/app/components/shared/Map";
import SendReceive from "@/app/components/shared/SendReceive";
import React from "react";

export default function ParcelDelivery() {
  return (
    <div>
      <div className="flex justify-center gap-10">
        <SendReceive></SendReceive>
        <Map></Map>
      </div>
    </div>
  );
}
