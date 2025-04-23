import React from "react";

const Overview: React.FC = () => {
  return (
    <section className="min-w-60 grow shrink w-[461px] pb-4 px-4 max-md:max-w-full">
      <div className="flex w-full max-w-[544px] max-md:max-w-full">
        <div className="flex min-w-60 w-full items-center gap-[40px_100px] justify-between flex-wrap flex-1 shrink basis-[0%] py-2 max-md:max-w-full">
          <div className="self-stretch flex items-center gap-4 overflow-hidden my-auto">
            <div className="self-stretch flex items-center gap-3 text-base whitespace-nowrap justify-center my-auto">
              <div className="self-stretch text-[#2F2F2F] font-normal text-center leading-none w-4 my-auto p-0.5">
                overview
              </div>
              <div className="text-[#151414] font-bold self-stretch my-auto">
                Overview
              </div>
            </div>
            <div className="self-stretch flex items-center gap-2 my-auto">
              <div className="self-stretch flex min-h-4 gap-4 my-auto" />
            </div>
          </div>
          <div className="self-stretch flex min-h-8 min-w-60 gap-2 my-auto" />
        </div>
      </div>
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-4 flex-wrap max-md:max-w-full">
          <div className="min-w-60 w-[264px]">
            <div className="flex w-full pr-6 max-md:pr-5">
              <div className="flex gap-3">
                <div className="text-base text-[#707070] font-light whitespace-nowrap text-center leading-none w-4 px-0.5 py-1.5">
                  bed
                </div>
                <div className="text-[#707070] text-xs font-extrabold leading-6 tracking-[0.5px] uppercase">
                  Last Recorded Location
                </div>
              </div>
            </div>
            <div className="w-full pl-7 max-md:pl-5">
              <div className="w-full text-sm text-[#1F1F1F] font-normal leading-5">
                <div className="w-full">
                  789 Hope Street, Alameda County, CA 94501
                </div>
              </div>
              <div className="flex w-full text-xs text-[#631919] font-bold text-center uppercase leading-none mt-1">
                <div className="self-stretch rounded bg-[#F9E2E2] gap-2.5 px-1 py-0.5">
                  Homeless Shelter
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-60 w-[264px]">
            <div className="flex w-full pr-6 max-md:pr-5">
              <div className="flex gap-3">
                <div className="text-base text-[#707070] font-light whitespace-nowrap text-center leading-none w-4 px-0.5 py-1">
                  workspaces
                </div>
                <div className="text-[#707070] text-xs font-extrabold leading-6 tracking-[0.5px] uppercase">
                  Active Programs
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-stretch text-sm text-[#1F1F1F] font-normal leading-none pl-7 max-md:pl-5">
              <div className="w-full">
                <div className="w-full">Housing Outreach Services</div>
              </div>
              <div className="flex w-full">
                <div>
                  <div>Emergency Shelter - Men</div>
                </div>
              </div>
              <div className="text-sm text-[#0070DD] font-semibold leading-5">
                <button className="self-stretch gap-1">
                  View all other programs
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap mt-4 max-md:max-w-full">
          <div className="min-w-60 w-[264px]">
            <div className="flex w-full pr-6 max-md:pr-5">
              <div className="flex gap-3">
                <div className="text-base text-[#707070] font-light whitespace-nowrap text-center leading-none w-4 px-px py-[3px]">
                  waving_hand
                </div>
                <div className="text-[#707070] text-xs font-extrabold leading-6 tracking-[0.5px] uppercase">
                  Last encounter
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-stretch text-sm text-[#1F1F1F] font-normal leading-none pl-7 max-md:pl-5">
              <div className="w-full">
                <div className="w-full">01/06/2025 • ED Visit </div>
              </div>
              <div className="w-full">
                <div className="w-full">Highland Hospital </div>
              </div>
              <div className="text-sm text-[#0070DD] font-semibold leading-5">
                <button className="self-stretch gap-1">View encounter</button>
              </div>
            </div>
          </div>
          <div className="min-w-60 w-[264px]">
            <div className="flex w-full pr-6 max-md:pr-5">
              <div className="flex gap-3">
                <div className="text-base text-[#707070] font-light whitespace-nowrap text-center leading-none w-4 px-[3px] py-1">
                  meeting_room
                </div>
                <div className="text-[#707070] text-xs font-extrabold leading-6 tracking-[0.5px] uppercase">
                  Upcoming Appointment
                </div>
              </div>
            </div>
            <div className="w-full text-sm text-[#1F1F1F] font-normal leading-none pl-7 max-md:pl-5">
              <div className="w-full whitespace-nowrap">
                <div className="w-full">01/25/2025</div>
              </div>
              <div className="w-full">
                <div className="w-full">PCP Office Visit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
