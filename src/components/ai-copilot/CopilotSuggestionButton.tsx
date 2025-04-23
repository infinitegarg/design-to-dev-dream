
import React from "react";
import { Button } from "@/components/ui/button";

interface CopilotSuggestionButtonProps {
  label: string;
  onClick: () => void;
}

const CopilotSuggestionButton: React.FC<CopilotSuggestionButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      className="
        rounded-full 
        px-3 py-1 
        text-xs 
        bg-white 
        border-gray-200 
        text-gray-700 
        hover:bg-gray-100 
        transition-colors 
        duration-200 
        flex 
        items-center 
        gap-1
        shadow-sm
      "
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CopilotSuggestionButton;
