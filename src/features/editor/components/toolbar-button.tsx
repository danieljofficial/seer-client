import { LucideIcon } from "lucide-react";
import React from "react";

interface ToolbarButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
}

export const ToolbarButton = ({
  icon: Icon,
  label,
  onClick,
  disabled = false,
  active = false,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        flex items-center gap-2
        px-3 py-2
        text-sm font-medium
        rounded-md
        transition-all duration-200
        group
        ${
          active
            ? "bg-solana-purple text-white shadow-md"
            : disabled
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:text-solana-purple hover:bg-gray-100 border border-transparent hover:border-gray-200"
        }
      `}
      title={label}
    >
      <span className="text-base">
        <Icon />
      </span>
      {/* <span className="hidden sm:block">{label}</span> */}

      {/* Active indicator */}
      {active && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-solana-green rounded-full" />
      )}
    </button>
  );
};
