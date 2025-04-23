"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarRail } from "@/components/ui/sidebar";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CopilotSuggestionButton from "./CopilotSuggestionButton";
import { Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AICopilot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage: Message = {
      role: "user",
      content: inputValue
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
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

  const suggestions = [{
    label: "Quality",
    query: "What's the quality of care for this patient?"
  }, {
    label: "Risk",
    query: "What are the risk factors for this patient?"
  }, {
    label: "Cost",
    query: "What are the costs associated with this patient's care?"
  }, {
    label: "Utilization",
    query: "How often has this patient utilized our services?"
  }, {
    label: "Attribution",
    query: "Who is the primary care provider for this patient?"
  }];

  const handleSuggestionClick = (query: string) => {
    setInputValue(query);
  };

  const handleCloseSidebar = () => {
    document.cookie = "sidebar:state=collapsed; path=/; max-age=604800";
    window.location.reload();
  };

  return <SidebarProvider defaultOpen={true}>
      <Sidebar side="right" variant="sidebar" className="border-l border-gray-200 min-w-[400px]">
        <SidebarRail />
        <SidebarHeader className="flex flex-row items-center justify-between border-b py-3 px-4 bg-white">
          <div className="flex items-center gap-2">
            <Bot size={22} className="text-[#9b87f5]" />
            <h2 className="text-lg font-bold text-gray-800 tracking-tight">Copilot</h2>
          </div>
          <Button size="icon" variant="ghost" className="rounded-md text-gray-500 hover:text-gray-700 focus:outline-none" aria-label="Close sidebar" onClick={handleCloseSidebar}>
            <X className="w-5 h-5" />
          </Button>
        </SidebarHeader>

        <SidebarContent className="p-4 overflow-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 gap-3">
              <p className="text-center text-gray-500">
                You can ask me many questions about your data.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`p-3 rounded-lg max-w-[85%] ${message.role === "user" ? "bg-blue-100 text-blue-900 ml-auto" : "bg-gray-100 text-gray-800"}`}>
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg text-gray-800 w-fit">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{
                    animationDelay: "0ms"
                  }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{
                    animationDelay: "150ms"
                  }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{
                    animationDelay: "300ms"
                  }} />
                </div>
              )}
            </div>
          )}
        </SidebarContent>

        <SidebarFooter className="border-t p-4">
          <div className="flex flex-wrap gap-2 mb-3 justify-center">
            {suggestions.map((suggestion, index) => (
              <CopilotSuggestionButton key={index} label={suggestion.label} onClick={() => handleSuggestionClick(suggestion.query)} />
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input placeholder="Type your message here..." className="pl-4 pr-4 py-2" value={inputValue} onChange={e => setInputValue(e.target.value)} disabled={isLoading} />
            </div>
            <Button type="submit" disabled={!inputValue.trim() || isLoading} variant="outline" size="icon" className="shrink-0">
              <span className="material-icons">send</span>
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>;
};

export default AICopilot;
