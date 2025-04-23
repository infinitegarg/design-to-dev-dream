import React from "react";
import { Button } from "@/components/ui/button";
interface CopilotSuggestionButtonProps {
  label: string;
  onClick: () => void;
}
const CopilotSuggestionButton: React.FC<CopilotSuggestionButtonProps> = ({
  label,
  onClick
}) => {
  return <Button variant="outline" onClick={onClick} className="bg-white border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-1 shadow-sm py-0 px-[8px] rounded-md text-xs">
      {label}
    </Button>;
};
export default CopilotSuggestionButton;