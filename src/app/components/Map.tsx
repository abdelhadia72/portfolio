/* eslint-disable */
"use client";

import { Badge } from "@/components/ui/badge";

export default function LocationMap() {
  return (
    <div className="w-full mx-auto">
      <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://ih1.redbubble.net/image.2102644559.0193/raf,360x360,075,t,fafafa:ca443f4786.jpg"
          alt="Stylized map"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-2xl drop-shadow-lg shadow-black/50 hover:drop-shadow-2xl transition-allxl">
            📍
          </div>
        </div>

        <div className="absolute bottom-4 left-4">
          <Badge className="bg-white/30 backdrop-blur-md text-black border-none shadow-lg px-4 py-1.5">
            Morocco, Casablanca
          </Badge>
        </div>
      </div>
    </div>
  );
}
