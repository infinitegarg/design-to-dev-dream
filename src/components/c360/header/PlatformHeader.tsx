import React from "react";

const PlatformHeader: React.FC = () => {
  return (
    <header className="bg-white w-full py-[3px] max-md:max-w-full">
      <div className="flex w-full max-w-[1412px] items-stretch gap-5 flex-wrap justify-between ml-3 mr-4 max-md:max-w-full max-md:mr-2.5">
        <div className="flex items-stretch gap-6 flex-wrap my-auto max-md:max-w-full">
          <div className="flex items-center gap-4 h-full w-7">
            <div className="self-stretch flex min-h-7 w-7 my-auto" />
          </div>
          <nav className="flex min-w-60 items-stretch gap-[40px_48px] text-sm text-[#1F1F1F] font-normal whitespace-nowrap leading-none h-full w-[570px] max-md:max-w-full">
            <div className="flex min-w-60 items-center gap-6 h-full">
              <div className="self-stretch text-[rgba(47,47,47,1)] my-auto">
                Worklist
              </div>
              <div className="self-stretch text-[#0070DD] font-semibold my-auto">
                Patients
              </div>
              <div className="self-stretch my-auto">Messages</div>
              <div className="self-stretch my-auto">Dashboards</div>
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-3 whitespace-nowrap text-center">
          <div className="self-stretch flex items-center gap-4 overflow-hidden my-auto py-[3px]">
            <div className="self-stretch flex items-center gap-0.5 my-auto">
              <div className="self-stretch flex items-center gap-1.5 my-auto">
                <div className="self-stretch flex flex-col items-stretch w-[34px] my-auto">
                  <div className="bg-[#D93737] z-10 h-[13px] gap-2 text-[10px] text-white font-bold uppercase leading-none ml-3 px-[5px] rounded-2xl max-md:ml-2.5">
                    9+
                  </div>
                  <div className="rounded flex mt-[-11px] text-base text-[#1F1F1F] font-light leading-none max-md:mr-0.5">
                    <div className="rounded w-8 px-[3px] py-[11px]">sms</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-stretch w-[34px] my-auto">
                  <div className="bg-[#D93737] z-10 min-h-4 gap-2 text-[10px] text-white font-bold uppercase leading-none ml-3 px-[5px] py-0.5 rounded-2xl max-md:ml-2.5">
                    9+
                  </div>
                  <div className="rounded flex text-base text-[#1F1F1F] font-light leading-none -mt-3.5 max-md:mr-0.5">
                    <div className="rounded w-8 px-[3px] py-2.5">
                      notifications
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch text-sm text-white font-semibold leading-none w-8 my-auto">
              <div className="bg-[#0070DD] w-8 h-8 fill-[#0070DD] px-[3px] rounded-[50%] flex items-center justify-center">
                JD
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-px gap-2.5 mt-[5px]">
        <div className="bg-[#C5C5C5] flex min-h-px min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full" />
      </div>
    </header>
  );
};

export default PlatformHeader;
