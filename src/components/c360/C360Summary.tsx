
import React, { useState } from "react";
import PlatformHeader from "./header/PlatformHeader";
import PatientBanner from "./header/PatientBanner";
import Sidebar from "./sidebar/Sidebar";
import Overview from "./content/Overview";
import VisitTimeline from "./content/VisitTimeline";
import RiskAssessment from "./content/RiskAssessment";
import AICopilot from "../ai-copilot/AICopilot";
import Housing from "./content/Housing";
import { ScrollArea } from "@/components/ui/scroll-area";

const TABS = [
  { label: "Summary", icon: "grid_view" },
  { label: "Clinical", icon: "ecg_heart" },
  { label: "Housing", icon: "house" },
  { label: "Behavioral", icon: "cognition" }
];

const C360Summary: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Summary");

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      <div className="w-full">
        <PlatformHeader />
        <PatientBanner />
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - Fixed width on larger screens, responsive on smaller */}
          <div className="w-full md:w-[17%] md:min-w-[200px]">
            <ScrollArea className="h-full">
              <Sidebar />
            </ScrollArea>
          </div>
          
          {/* Main content area - Takes available space */}
          <div className="w-full md:w-[63%] md:px-5 px-2">
            <div className="w-full pb-4">
              <div className="bg-[#F4F4F4] w-full overflow-x-auto">
                {/* Tabs navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center overflow-x-auto scrollbar-hide">
                    {TABS.map((tab) => (
                      <button
                        key={tab.label}
                        className={`flex min-h-12 flex-col items-center justify-center ${
                          activeTab === tab.label ? "w-[110px]" : "w-[94px]"
                        } pt-3 px-3 transition-all duration-150`}
                        onClick={() => setActiveTab(tab.label)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-icons text-base font-light text-center leading-none w-4 p-0.5 text-[#707070]">
                            {tab.icon}
                          </span>
                          <div className="text-ellipsis text-sm font-semibold leading-5 text-[#707070]">
                            {tab.label}
                          </div>
                        </div>
                        <div className={`
                          flex min-h-0.5 w-full mt-3.5 rounded-[1px_1px_0px_0px] 
                          ${activeTab === tab.label ? "bg-[#0070DD]" : ""}
                        `} />
                      </button>
                    ))}
                  </div>
                  
                  {/* Search and download buttons */}
                  <div className="flex items-center gap-2 my-auto px-2">
                    <div className="flex gap-2 text-xl text-[#1F1F1F] font-light w-8">
                      <div className="rounded flex w-8">
                        <div className="rounded bg-neutral-200 w-8 h-8 px-[3px] flex items-center justify-center">
                          <span className="material-icons">download</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 text-[#868686] font-normal w-56 md:block hidden">
                      <div className="w-full">
                        <div className="items-stretch rounded bg-white flex w-full flex-col justify-center px-2 py-1.5">
                          <div className="flex w-full items-center gap-2">
                            <div className="flex w-full items-center gap-2 overflow-hidden">
                              <span className="material-icons text-base text-center leading-none w-4 p-[3px]">
                                search
                              </span>
                              <div className="text-sm leading-none">
                                Search
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Divider line */}
                <div className="flex w-full min-h-px">
                  <div className="bg-[#C5C5C5] min-h-px w-full" />
                </div>
              </div>
              
              {/* Date range indicator */}
              <div className="flex w-full items-center gap-1 text-xs flex-wrap mt-1 px-4">
                <div className="text-[#707070] font-semibold leading-4">
                  {activeTab === "Summary" ? "Showing summary for" : activeTab === "Housing" ? "Housing data for" : ""}
                </div>
                <div className="text-black font-extrabold uppercase tracking-[0.5px] leading-6">
                  {activeTab === "Summary" || activeTab === "Housing" ? "Mar'24 - Feb'25" : ""}
                </div>
              </div>
              
              {/* Content area with ScrollArea to prevent overflow */}
              <ScrollArea className="w-full h-[calc(100vh-220px)]">
                <div className="w-full px-4">
                  {activeTab === "Summary" && (
                    <>
                      <div className="flex w-full flex-col md:flex-row gap-4">
                        <Overview />
                        <VisitTimeline />
                      </div>
                      <RiskAssessment />
                    </>
                  )}
                  {activeTab === "Housing" && (
                    <Housing />
                  )}
                  {/* can implement other tabs similarly */}
                </div>
              </ScrollArea>
            </div>
          </div>
          
          {/* AI Copilot - Responsive width */}
          <div className="w-full md:w-[20%] md:min-w-[250px]">
            <AICopilot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default C360Summary;
