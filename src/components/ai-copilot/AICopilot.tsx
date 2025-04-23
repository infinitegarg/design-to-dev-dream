"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent,
  SidebarHeader, 
  SidebarFooter,
  SidebarRail
} from "@/components/ui/sidebar";
import { DrawerClose } from "@/components/ui/drawer"; // Changed from SidebarClose to DrawerClose
import { X } from "lucide-react"; 
import { useToast } from "@/hooks/use-toast";
import CopilotSuggestionButton from "./CopilotSuggestionButton";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AICopilot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage: Message = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    try {
      setTimeout(() => {
        const aiResponse: Message = { 
          role: "assistant", 
          content: "Based on Charles Lawson's records, I can see he has been consistently attending his appointments and his vital signs have been stable over the past 3 months. His most recent lab work from last week shows improved cholesterol levels."
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  // Suggested questions
  const suggestions = [
    { label: "Quality", query: "What's the quality of care for this patient?" },
    { label: "Risk", query: "What are the risk factors for this patient?" },
    { label: "Cost", query: "What are the costs associated with this patient's care?" },
    { label: "Utilization", query: "How often has this patient utilized our services?" },
    { label: "Attribution", query: "Who is the primary care provider for this patient?" }
  ];

  const handleSuggestionClick = (query: string) => {
    setInputValue(query);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar 
        side="right" 
        variant="sidebar" 
        className="border-l border-gray-200 min-w-[400px]"
      >
        <SidebarRail />
        <SidebarHeader className="relative flex flex-col items-center p-4 border-b">
          {/* Close button in the top right */}
          <DrawerClose asChild>
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute right-2 top-2 z-10"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </Button>
          </DrawerClose>
          <div className="w-16 h-16 mb-2">
            <img 
              src="/lovable-uploads/7ba51120-a6da-421d-b781-2d96cb842dd0.png" 
              alt="AI Copilot" 
              className="w-full h-full object-contain" 
            />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Hi, I'm Sara. Ask me a question.
          </h2>
        </SidebarHeader>
        
        <SidebarContent className="p-4 overflow-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <p className="mb-8">
                You can ask me many questions about your data. I can answer questions about
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {suggestions.map((suggestion, index) => (
                  <CopilotSuggestionButton
                    key={index}
                    label={suggestion.label}
                    onClick={() => handleSuggestionClick(suggestion.query)}
                  />
                ))}
              </div>
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
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </div>
          )}
        </SidebarContent>
        
        <SidebarFooter className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <span className="material-icons">search</span>
              </span>
              <Input
                placeholder="Type your message here..."
                className="pl-10 pr-4 py-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
