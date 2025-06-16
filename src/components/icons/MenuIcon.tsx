import React from "react";
import { cn } from "@/lib/utils";

interface MenuIconProps {
  className?: string;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round",
        className
      )}
    >
      <path stroke="currentColor" d="M3 6h18" />
      <path
        stroke="currentColor"
        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
      />
      <path stroke="currentColor" d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path stroke="currentColor" d="M12 11v6" />
      <path stroke="currentColor" d="m15 11-3 3-3-3" />
    </svg>
  );
};

export default MenuIcon;
