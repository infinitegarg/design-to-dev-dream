
import React from "react";
import CopilotPromptChip from "./CopilotPromptChip";

interface CopilotSuggestionButtonProps {
  label: string;
  onClick: () => void;
}

const CopilotSuggestionButton: React.FC<CopilotSuggestionButtonProps> = ({
  label,
  onClick
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-transparent rounded-full focus:outline-none p-0 border-none cursor-pointer"
      style={{ lineHeight: 1 }}
      tabIndex={0}
    >
      <CopilotPromptChip
        text={label}
        className="transition-all hover:scale-105 active:scale-95 border-0 shadow-none"
      />
    </button>
  );
};

export default CopilotSuggestionButton;
