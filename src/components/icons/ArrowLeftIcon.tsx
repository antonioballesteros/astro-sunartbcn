import React from "react";
import { cn } from "@/lib/utils";

interface ArrowLeftIconProps {
  className?: string;
}

export const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round [&>*]:stroke-current",
        className
      )}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
};

export default ArrowLeftIcon;
