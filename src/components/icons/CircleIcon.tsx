import React from "react";
import { cn } from "@/lib/utils";

interface CircleIconProps {
  className?: string;
}

export const CircleIcon: React.FC<CircleIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round [&>*]:stroke-current",
        className
      )}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

export default CircleIcon;
