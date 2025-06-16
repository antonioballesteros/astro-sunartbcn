import React from "react";
import { cn } from "@/lib/utils";

interface ChevronDownIconProps {
  className?: string;
}

export const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round",
        className
      )}
    >
      <path stroke="currentColor" d="m6 9 6 6 6-6" />
    </svg>
  );
};

export default ChevronDownIcon;
