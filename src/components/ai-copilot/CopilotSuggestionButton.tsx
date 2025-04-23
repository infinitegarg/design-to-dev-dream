
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
  // Get corresponding icon based on label
  const getIcon = () => {
    switch (label.toLowerCase()) {
      case "quality":
        return "quality";
      case "risk":
        return "risk";
      case "cost":
        return "cost";
      case "utilization":
        return "utilization";
      case "attribution":
        return "attribution";
      default:
        return "help_outline";
    }
  };

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
      <span className="material-icons text-xs mr-1">{getIcon()}</span>
      {label}
    </Button>
  );
};

export default CopilotSuggestionButton;
