import React from "react";
import { cn } from "@/lib/utils";

interface XIconProps {
  className?: string;
}

export const XIcon: React.FC<XIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round",
        className
      )}
    >
      <path stroke="currentColor" d="M18 6 6 18" />
      <path stroke="currentColor" d="m6 6 12 12" />
    </svg>
  );
};

export default XIcon;
