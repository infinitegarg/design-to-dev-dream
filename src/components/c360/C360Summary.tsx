
import React, { useState } from "react";
import PlatformHeader from "./header/PlatformHeader";
import PatientBanner from "./header/PatientBanner";
import Sidebar from "./sidebar/Sidebar";
import Overview from "./content/Overview";
import VisitTimeline from "./content/VisitTimeline";
import RiskAssessment from "./content/RiskAssessment";
import AICopilot from "../ai-copilot/AICopilot";
import Housing from "./content/Housing";

const TABS = [
  { label: "Summary", icon: "grid_view" },
  { label: "Clinical", icon: "ecg_heart" },
  { label: "Housing", icon: "house" },
  { label: "Behavioral", icon: "cognition" }
];

const C360Summary: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Summary");

  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-md:max-w-full">
        <PlatformHeader />
        <PatientBanner />
      </div>
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[17%] max-md:w-full max-md:ml-0">
            <Sidebar />
          </div>
          <div className="w-[63%] ml-5 max-md:w-full max-md:ml-0">
            <div className="w-full pb-4 max-md:max-w-full">
              <div className="items-center bg-[#F4F4F4] flex w-full gap-4 overflow-hidden flex-wrap max-md:max-w-full">
                <div className="self-stretch flex min-w-60 flex-col flex-1 shrink basis-4 my-auto max-md:max-w-full">
                  <div className="z-10 flex items-center text-[#707070] whitespace-nowrap pl-1">
                    {TABS.map((tab) => (
                      <button
                        key={tab.label}
                        className={`self-stretch flex min-h-12 flex-col items-stretch justify-center ${
                          activeTab === tab.label ? "w-[110px]" : "w-[94px]"
                        } my-auto pt-3 px-3 
                          transition-all duration-150`}
                        onClick={() => setActiveTab(tab.label)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-icons self-stretch text-base font-light text-center leading-none w-4 my-auto p-0.5">
                            {tab.icon}
                          </span>
                          <div className={`text-ellipsis text-sm font-semibold leading-5 self-stretch my-auto`}>
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
                  <div className="flex mr-[-296px] min-h-px gap-2.5">
                    <div className="bg-[#C5C5C5] flex min-h-px min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full" />
                  </div>
                </div>
                <div className="self-stretch flex min-w-60 items-center gap-2 whitespace-nowrap my-auto pr-4">
                  <div className="self-stretch flex gap-2 text-xl text-[#1F1F1F] font-light text-center leading-none w-8 my-auto">
                    <div className="rounded flex w-8">
                      <div className="rounded bg-neutral-200 w-8 h-8 px-[3px] flex items-center justify-center">
                        <span className="material-icons">download</span>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex gap-4 text-[#868686] font-normal w-56 my-auto">
                    <div className="w-56">
                      <div className="w-full">
                        <div className="items-stretch rounded bg-white flex w-full flex-col justify-center px-2 py-1.5">
                          <div className="flex w-full items-center gap-2">
                            <div className="self-stretch flex w-full items-center gap-2 overflow-hidden flex-1 shrink basis-[0%] my-auto">
                              <span className="material-icons self-stretch text-base text-center leading-none w-4 my-auto p-[3px]">
                                search
                              </span>
                              <div className="text-sm leading-none self-stretch my-auto">
                                Search
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-1 text-xs text-center flex-wrap mt-1 pl-4 max-md:max-w-full">
                <div className="text-[#707070] font-semibold leading-4 self-stretch my-auto">
                  {activeTab === "Summary" ? "Showing summary for" : activeTab === "Housing" ? "Housing data for" : ""}
                </div>
                <div className="self-stretch gap-0.5 text-black font-extrabold uppercase tracking-[0.5px] leading-6 my-auto">
                  {activeTab === "Summary" || activeTab === "Housing"
                    ? "Mar'24 - Feb'25"
                    : ""}
                </div>
              </div>
              <div className="min-h-[833px] max-w-full w-[1200px] mt-1 px-4">
                <div className="w-full max-md:max-w-full">
                  {activeTab === "Summary" && (
                    <>
                      <div className="flex w-full items-stretch gap-4 flex-wrap max-md:max-w-full">
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
              </div>
            </div>
          </div>
          <div className="w-[20%] max-md:w-full max-md:ml-0">
            <AICopilot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default C360Summary;

