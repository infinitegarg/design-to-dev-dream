
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarRail } from "@/components/ui/sidebar";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CopilotSuggestionButton from "./CopilotSuggestionButton";

// Category/question data structure
const promptCategories = [
  {
    label: "Patient Overview",
    questions: [
      "What are the most important health changes for Charles Lawson this year?",
      "Can you summarize Charles Lawson’s chronic conditions based on recent records?",
      "Which new concerns have appeared for Charles Lawson in the summary panel?"
    ]
  },
  {
    label: "Clinical History",
    questions: [
      "What recent diagnoses have affected Charles Lawson’s care?",
      "Is there any trend in his vital readings?",
      "Which medications were added or changed during the last few visits?"
    ]
  },
  {
    label: "Housing Situation",
    questions: [
      "How has Charles Lawson's change in housing impacted his medical visits or outcomes?",
      "Were there any care gaps linked to unstable housing?",
      "Has housing support improved access to care for this patient?"
    ]
  },
  {
    label: "Behavioral Health",
    questions: [
      "Are there changes in cognition or mental health noted in recent assessments?",
      "Do recent visit notes mention behavioral health interventions?",
      "Is there a trend in mood or engagement with care teams?"
    ]
  },
  {
    label: "Care Planning",
    questions: [
      "Based on the summary, what follow-up actions are recommended?",
      "Which goals should Charles Lawson and his care team prioritize next?",
      "How can care coordination be improved for this patient given current challenges?"
    ]
  }
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AICopilot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage: Message = {
      role: "user",
      content: inputValue
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setSelectedCategory(null);
    setIsLoading(true);
    try {
      setTimeout(() => {
        const aiResponse: Message = {
          role: "assistant",
          content: "Based on Charles Lawson's records, I can see he has been consistently attending his appointments and his vital signs have been stable over the past 3 months. His most recent lab work from last week shows improved cholesterol levels."
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (categoryIdx: number) => {
    setSelectedCategory(categoryIdx);
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
  };

  const handleCloseSidebar = () => {
    document.cookie = "sidebar:state=collapsed; path=/; max-age=604800";
    window.location.reload();
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar side="right" variant="sidebar" className="border-l border-gray-200 min-w-[400px]">
        <SidebarRail />
        <SidebarHeader className="flex flex-row items-center justify-between border-b py-3 px-4 bg-white">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/a1d6738d-1b1a-4519-a4bb-e1d83207fb73.png" alt="Copilot" className="w-6 h-6" />
            <h2 className="text-lg font-bold text-gray-800 tracking-tight">Copilot</h2>
          </div>
          <Button size="icon" variant="ghost" className="rounded-md text-gray-500 hover:text-gray-700 focus:outline-none" aria-label="Close sidebar" onClick={handleCloseSidebar}>
            <X className="w-5 h-5" />
          </Button>
        </SidebarHeader>

        <SidebarContent className="p-4 overflow-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 gap-3 w-full">
              {/* Prompt chips or question list */}
              {selectedCategory === null ? (
                <div className="flex flex-wrap gap-2 justify-center w-full">
                  {promptCategories.map((cat, idx) => (
                    <CopilotSuggestionButton
                      key={cat.label}
                      label={cat.label}
                      onClick={() => handleSuggestionClick(idx)}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-2 w-full max-w-full mt-2">
                  {promptCategories[selectedCategory].questions.map((question, qIdx) => (
                    <button
                      key={qIdx}
                      type="button"
                      className="text-left px-4 py-2 bg-gradient-to-r from-pink-100 via-orange-50 to-white text-gray-900 rounded-md border border-[#f7e3e8] hover:bg-pink-200 transition"
                      onClick={() => handleQuestionClick(question)}
                    >
                      {question}
                    </button>
                  ))}
                  <button
                    className="mt-3 text-xs text-blue-600 underline underline-offset-2 hover:text-blue-800 w-fit self-center"
                    onClick={() => setSelectedCategory(null)}
                    type="button"
                  >
                    ⟵ Back to categories
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-[85%] ${
                    message.role === "user"
                      ? "bg-blue-100 text-blue-900 ml-auto"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg text-gray-800 w-fit">
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{
                      animationDelay: "0ms"
                    }}
                  />
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{
                      animationDelay: "150ms"
                    }}
                  />
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{
                      animationDelay: "300ms"
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </SidebarContent>

        <SidebarFooter className="border-t p-4">
          {/* Only show quick prompt chips if no conversation yet */}
          {messages.length === 0 && selectedCategory === null && (
            <div className="flex flex-wrap gap-2 mb-3 justify-center">
              {promptCategories.map((cat, idx) => (
                <CopilotSuggestionButton
                  key={cat.label}
                  label={cat.label}
                  onClick={() => handleSuggestionClick(idx)}
                />
              ))}
            </div>
          )}
          {/* Quick questions as buttons when category selected */}
          {messages.length === 0 && selectedCategory !== null && (
            <div className="flex flex-col gap-2 mb-3">
              {promptCategories[selectedCategory].questions.map((question, qIdx) => (
                <button
                  key={qIdx}
                  type="button"
                  className="text-left px-4 py-2 bg-gradient-to-r from-pink-100 via-orange-50 to-white text-gray-900 rounded-md border border-[#f7e3e8] hover:bg-pink-200 transition"
                  onClick={() => handleQuestionClick(question)}
                >
                  {question}
                </button>
              ))}
              <button
                className="mt-3 text-xs text-blue-600 underline underline-offset-2 hover:text-blue-800 w-fit self-center"
                onClick={() => setSelectedCategory(null)}
                type="button"
              >
                ⟵ Back to categories
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input
                placeholder="Type your message here..."
                className="pl-4 pr-4 py-2"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              variant="outline"
              size="icon"
              className="shrink-0"
            >
              <span className="material-icons">send</span>
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default AICopilot;
