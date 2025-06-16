import React from "react";
import { cn } from "@/lib/utils";

interface MapPinIconProps {
  className?: string;
}

export const MapPinIcon: React.FC<MapPinIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round",
        className
      )}
    >
      <path
        stroke="currentColor"
        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
      />
      <circle stroke="currentColor" cx="12" cy="10" r="3" />
    </svg>
  );
};

export default MapPinIcon;
