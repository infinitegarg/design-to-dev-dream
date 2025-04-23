import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex w-full flex-col items-stretch mt-4">
      <div className="flex min-h-8 items-center gap-2 text-white font-normal whitespace-nowrap justify-center ml-4 max-md:ml-2.5">
        <button className="justify-center items-center rounded bg-[#0070DD] self-stretch flex min-h-8 gap-2 my-auto px-3 py-2">
          <div className="self-stretch text-base text-center w-4 my-auto px-px py-0.5">
            add_circle
          </div>
          <div className="text-sm leading-none self-stretch my-auto">New</div>
        </button>
      </div>
      <nav className="bg-[#F4F4F4] min-h-[833px] overflow-hidden mt-2">
        <div className="flex w-full flex-col items-stretch justify-center">
          <div className="flex w-full flex-col items-stretch text-[#00509F] justify-center py-1">
            <div className="items-center bg-[#DCECF9] flex w-full gap-1 pl-4 pr-2 py-1 rounded-[0px_16px_16px_0px]">
              <div className="self-stretch text-base font-light whitespace-nowrap text-center w-4 my-auto p-0.5">
                assignment_ind
              </div>
              <div className="self-stretch gap-2.5 overflow-hidden text-sm font-semibold leading-none flex-1 shrink basis-[0%] my-auto px-1">
                Consumer 360
              </div>
              <div className="self-stretch flex w-0 shrink-0 h-0.5 my-auto" />
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch text-base font-light leading-none justify-center py-1">
            <div className="flex w-full items-center gap-1 pl-4 pr-2 py-1 rounded-[0px_16px_16px_0px]">
              <div className="self-stretch text-[#1F1F1F] whitespace-nowrap text-center w-4 my-auto px-0.5 py-[3px]">
                question_answer
              </div>
              <div className="self-stretch gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none flex-1 shrink basis-[0%] my-auto px-1">
                Case Management
              </div>
              <div className="self-stretch flex w-0 shrink-0 h-0.5 my-auto" />
              <div className="self-stretch text-[#707070] whitespace-nowrap text-center w-4 my-auto px-1 py-1.5">
                expand_less
              </div>
            </div>
          </div>
          <div className="flex w-full items-stretch gap-[11px] whitespace-nowrap pl-[43px] pr-5 py-2 max-md:pl-5">
            <div className="text-base text-[#1F1F1F] font-light text-center leading-none my-auto">
              history
            </div>
            <div className="gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none">
              Timeline
            </div>
          </div>
          <div className="flex w-full items-stretch gap-2.5 whitespace-nowrap pl-[42px] pr-5 py-2 max-md:pl-5">
            <div className="text-base text-[#1F1F1F] font-light text-center leading-none my-auto">
              folder
            </div>
            <div className="gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none">
              Cases
            </div>
          </div>
          <div className="flex w-full items-stretch gap-2.5 pl-[42px] pr-5 py-2 max-md:pl-5">
            <div className="text-base text-[#1F1F1F] font-light whitespace-nowrap text-center leading-none my-auto">
              fact_check
            </div>
            <div className="gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none">
              Care Protocols
            </div>
          </div>
          <div className="flex w-full items-stretch gap-[9px] whitespace-nowrap pl-[41px] pr-5 py-2 max-md:pl-5">
            <div className="text-base text-[#1F1F1F] font-light text-center leading-none my-auto">
              waving_hand
            </div>
            <div className="gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none">
              Encounters
            </div>
          </div>
          <div className="flex w-full items-stretch gap-2.5 whitespace-nowrap pl-[42px] pr-5 py-2 max-md:pl-5">
            <div className="text-base text-[#1F1F1F] font-light text-center leading-none my-auto">
              assignment
            </div>
            <div className="gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none">
              Assessments
            </div>
          </div>
          <div className="flex w-full items-stretch gap-[9px] whitespace-nowrap pl-[41px] pr-5 py-2 max-md:pl-5">
            <div className="text-base text-[#1F1F1F] font-light text-center leading-none my-auto">
              alarm
            </div>
            <div className="gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none">
              Tasks
            </div>
          </div>
          <div className="flex w-full items-stretch gap-2.5 whitespace-nowrap pl-[43px] pr-5 py-2 max-md:pl-5">
            <div className="text-base text-[#1F1F1F] font-light text-center leading-none my-auto">
              golf_course
            </div>
            <div className="gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none">
              Goals
            </div>
          </div>
          <div className="flex w-full items-stretch gap-2.5 pl-[42px] pr-5 py-2 max-md:pl-5">
            <div className="text-base text-[#1F1F1F] font-light whitespace-nowrap text-center leading-none my-auto">
              accessibility_new
            </div>
            <div className="gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none">
              Care Plans
            </div>
          </div>
          <div className="flex w-full items-stretch gap-2.5 pl-[42px] pr-5 py-2 max-md:pl-5">
            <div className="text-base text-[#1F1F1F] font-light whitespace-nowrap text-center leading-none my-auto">
              local_pharmacy
            </div>
            <div className="gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none">
              Medication Review
            </div>
          </div>
          <div className="flex w-full items-stretch gap-2.5 pl-[42px] pr-5 py-2 max-md:pl-5">
            <div className="text-base text-[#1F1F1F] font-light whitespace-nowrap text-center leading-none my-auto">
              business
            </div>
            <div className="gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none">
              Community Resources
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch justify-center py-1">
            <div className="flex w-full items-center gap-1 pl-4 pr-2 py-1 rounded-[0px_16px_16px_0px]">
              <div className="self-stretch text-base text-[#1F1F1F] font-light whitespace-nowrap text-center leading-none w-4 my-auto p-0.5">
                signature
              </div>
              <div className="self-stretch gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none flex-1 shrink basis-[0%] my-auto px-1">
                Consent Management
              </div>
              <div className="self-stretch flex w-0 shrink-0 h-0.5 my-auto" />
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch whitespace-nowrap justify-center py-1">
            <div className="flex w-full items-center gap-1 pl-4 pr-2 py-1 rounded-[0px_16px_16px_0px]">
              <div className="self-stretch text-base text-[#1F1F1F] font-light text-center leading-none w-4 my-auto px-0.5 py-[3px]">
                favorite
              </div>
              <div className="self-stretch gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none flex-1 shrink basis-[0%] my-auto px-1">
                Risk
              </div>
              <div className="self-stretch flex w-0 shrink-0 h-0.5 my-auto" />
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch whitespace-nowrap justify-center py-1">
            <div className="flex w-full items-center gap-1 pl-4 pr-2 py-1 rounded-[0px_16px_16px_0px]">
              <div className="self-stretch text-base text-[#1F1F1F] font-light text-center leading-none w-4 my-auto p-0.5">
                receipt
              </div>
              <div className="self-stretch gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none flex-1 shrink basis-[0%] my-auto px-1">
                Claims
              </div>
              <div className="self-stretch flex w-0 shrink-0 h-0.5 my-auto" />
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch whitespace-nowrap justify-center py-1">
            <div className="flex w-full items-center gap-1 pl-4 pr-2 py-1 rounded-[0px_16px_16px_0px]">
              <div className="self-stretch text-base text-[#2F2F2F] font-light text-center w-4 my-auto p-px">
                account_circle
              </div>
              <div className="self-stretch gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none flex-1 shrink basis-[0%] my-auto px-1">
                Profile
              </div>
              <div className="self-stretch flex w-0 shrink-0 h-0.5 my-auto" />
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch justify-center py-1">
            <div className="flex w-full items-center gap-1 pl-4 pr-2 py-1 rounded-[0px_16px_16px_0px]">
              <div className="self-stretch text-base text-[#2F2F2F] font-light whitespace-nowrap text-center w-4 my-auto p-px">
                border_color
              </div>
              <div className="self-stretch gap-2.5 overflow-hidden text-sm text-[#1F1F1F] font-semibold leading-none flex-1 shrink basis-[0%] my-auto px-1">
                Manual Entry
              </div>
              <div className="self-stretch flex w-0 shrink-0 h-0.5 my-auto" />
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch text-[#2F2F2F] whitespace-nowrap justify-center py-1">
            <div className="flex w-full items-center gap-1 pl-4 pr-2 py-1 rounded-[0px_16px_16px_0px]">
              <div className="self-stretch text-base font-light text-center w-4 my-auto p-0.5">
                assignment
              </div>
              <div className="self-stretch gap-2.5 overflow-hidden text-sm font-semibold leading-none flex-1 shrink basis-[0%] my-auto px-1">
                Documents
              </div>
              <div className="self-stretch flex w-0 shrink-0 h-0.5 my-auto" />
            </div>
          </div>
        </div>
        <button className="bg-[#F4F4F4] w-full text-base text-[#1F1F1F] font-light whitespace-nowrap text-center leading-none mt-[141px] px-[22px] py-[18px] max-md:mt-10 max-md:px-5">
          keyboard_arrow_left
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
