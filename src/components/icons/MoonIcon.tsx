import React from "react";
import { cn } from "@/lib/utils";

interface MoonIconProps {
  className?: string;
}

export const MoonIcon: React.FC<MoonIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round [&>*]:stroke-current",
        className
      )}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
};

export default MoonIcon;
