import React from "react";
import { cn } from "@/lib/utils";

interface MailIconProps {
  className?: string;
}

export const MailIcon: React.FC<MailIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round",
        className
      )}
    >
      <rect stroke="currentColor" width="20" height="16" x="2" y="4" rx="2" />
      <path
        stroke="currentColor"
        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      />
    </svg>
  );
};

export default MailIcon;
