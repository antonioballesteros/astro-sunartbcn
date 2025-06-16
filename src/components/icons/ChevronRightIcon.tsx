import React from "react";
import { cn } from "@/lib/utils";

interface ChevronRightIconProps {
  className?: string;
}

export const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round [&>*]:stroke-current",
        className
      )}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};

export default ChevronRightIcon;
