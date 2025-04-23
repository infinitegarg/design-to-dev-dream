
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelectionToolbarProps {
  selectedText: string;
  onAskClick: (text: string) => void;
  position: { x: number; y: number } | null;
}

const SelectionToolbar: React.FC<SelectionToolbarProps> = ({
  selectedText,
  onAskClick,
  position,
}) => {
  if (!position || !selectedText) return null;

  return (
    <div
      className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200"
      style={{
        top: `${position.y - 45}px`,
        left: `${position.x}px`,
      }}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            onClick={() => onAskClick(selectedText)}
          >
            <MessageSquare className="w-4 h-4" />
            Ask Copilot
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          Ask questions about: "{selectedText}"
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default SelectionToolbar;
