
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
      className="bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-700"
      onClick={onClick}
    >
      <span className="material-icons mr-1 text-sm">{getIcon()}</span>
      {label}
    </Button>
  );
};

export default CopilotSuggestionButton;
