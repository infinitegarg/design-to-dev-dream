
import React from "react";

interface CopilotPromptChipProps {
  text: string;
  className?: string;
}

/**
 * Gradient chip to match the provided design.
 * Soft rounded, no shadow, small font, gradient, neutral foreground.
 */
const CopilotPromptChip: React.FC<CopilotPromptChipProps> = ({ text, className }) => (
  <div
    className={
      `inline-flex items-center px-4 py-1 text-xs font-medium rounded-full
      bg-[linear-gradient(90deg,_rgb(255,222,226)_0%,_rgb(253,225,211)_100%)]
      text-gray-800 border border-[#f7e3e8] ${className ?? ""}`
    }
    style={{
      // tight border-radius and padding for a compact chip effect
      minHeight: 28,
      minWidth: 40,
      boxShadow: "none"
    }}
  >
    {text}
  </div>
);

export default CopilotPromptChip;
