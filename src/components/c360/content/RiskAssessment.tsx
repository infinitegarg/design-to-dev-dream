import React from "react";

interface RiskCardProps {
  title: string;
  icon: string;
  riskLevel: string;
  riskColor: string;
  alerts: React.ReactNode;
  recommendations: React.ReactNode;
  ongoingActivities: React.ReactNode;
  cardHeight?: string;
}

const RiskCard: React.FC<RiskCardProps> = ({
  title,
  icon,
  riskLevel,
  riskColor,
  alerts,
  recommendations,
  ongoingActivities,
  cardHeight = "88px",
}) => {
  return (
    <div className="min-w-60 flex-1 shrink basis-[0%]">
      <div className="w-full flex-1 p-3">
        <div className="flex w-full gap-2.5 whitespace-nowrap">
          <div className="items-center rounded bg-[#F4F4F4] flex gap-2 text-base text-[#1F1F1F] font-light text-center leading-none w-6 h-6 p-1">
            <span className="material-icons self-stretch w-4 my-auto p-0.5">{icon}</span>
          </div>
          <div className="text-[#1F1F1F] text-xs font-extrabold leading-6 tracking-[0.5px] uppercase flex-1 shrink basis-[0%]">
            {title}
          </div>
        </div>
        <div className="relative flex w-full flex-col mt-2 p-2">
          <div className="absolute z-0 flex max-w-full w-[344px] flex-col inset-0">
            <div
              className={`rounded bg-[rgba(252,250,250,1)] flex shrink-0 h-[${cardHeight}]`}
            />
          </div>
          <div
            className={`self-stretch rounded ${riskColor} z-0 gap-2.5 text-xs font-bold whitespace-nowrap text-center uppercase leading-none px-1 py-0.5`}
          >
            {riskLevel}
          </div>
          {alerts}
        </div>
        <div className="w-full mt-2">
          <div className="text-[#707070] text-xs font-extrabold leading-6 tracking-[0.5px] uppercase">
            Recommendations
          </div>
          <div className="w-full mt-1">{recommendations}</div>
        </div>
        <div className="w-full mt-2">
          <div className="text-[#707070] text-xs font-extrabold leading-6 tracking-[0.5px] uppercase">
            Ongoing Activities
          </div>
          <div className="w-full mt-1">{ongoingActivities}</div>
        </div>
      </div>
    </div>
  );
};

const RiskAssessment: React.FC = () => {
  return (
    <section className="w-full mt-4 pb-4 px-4 max-md:max-w-full">
      <div className="flex w-full max-md:max-w-full">
        <div className="flex min-w-60 w-full items-center gap-[40px_100px] justify-between flex-wrap flex-1 shrink basis-[0%] py-2 max-md:max-w-full">
          <div className="self-stretch flex items-center gap-4 overflow-hidden my-auto">
            <div className="self-stretch flex items-center gap-3 text-base whitespace-nowrap justify-center my-auto">
              <span className="material-icons self-stretch text-[#2F2F2F] font-normal text-center leading-none w-4 my-auto px-0.5 py-[3px]">
                favorite
              </span>
              <div className="text-[#151414] font-bold self-stretch my-auto">
                Risk
              </div>
            </div>
            <div className="self-stretch flex items-center gap-2 my-auto">
              <div className="self-stretch flex min-h-4 gap-4 my-auto" />
            </div>
          </div>
          <div className="self-stretch flex min-h-8 min-w-60 gap-2 my-auto" />
        </div>
      </div>
      <div className="flex w-full items-stretch gap-4 flex-wrap max-md:max-w-full">
        <RiskCard
          title="CLINICAL"
          icon="health_and_safety"
          riskLevel="Moderate"
          riskColor="bg-[#FDE6CE] text-[#743208]"
          alerts={
            <div className="self-stretch z-0 flex w-full items-stretch gap-2 text-sm text-black font-normal leading-none mt-2">
              <div className="bg-[#D93737] flex w-0.5 shrink-0 h-11 rounded-sm" />
              <div className="min-w-60 flex-1 shrink basis-[0%] my-auto">
                <div>
                  <span className="font-bold">Diabetes:</span> HbA1c is at 7.8
                </div>
                <div className="mt-1">
                  <span className="font-bold">Immunization overdue:</span>{" "}
                  Influenza, since Dec' 2024
                </div>
              </div>
            </div>
          }
          recommendations={
            <>
              <div className="flex w-full gap-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 p-0.5">
                  event
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  <span className="font-normal">Schedule visit for</span>{" "}
                  Diabetes Management
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 p-0.5">
                  event
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  <span className="font-normal">Schedule visit for</span>{" "}
                  Immunization: Influenza
                </div>
              </div>
            </>
          }
          ongoingActivities={
            <>
              <div className="flex w-full gap-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 p-0.5">
                  fact_check
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  <span className="text-[#0070DD]">Diabetes Management</span>
                  <span className="font-normal">
                    {" "}
                    Care Protocol in progress
                  </span>
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-[3px] py-0.5">
                  notifications
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  <span className="text-[#0070DD]">Automated reminders</span>{" "}
                  <span className="font-normal">being sent for </span>
                  Immunization.
                </div>
              </div>
            </>
          }
        />

        <RiskCard
          title="Social"
          icon="group"
          riskLevel="High"
          riskColor="bg-[#F9E2E2] text-[#631919]"
          cardHeight="108px"
          alerts={
            <div className="self-stretch z-0 flex w-full items-stretch gap-2 text-sm text-black font-normal mt-2">
              <div className="bg-[#D93737] flex w-0.5 shrink-0 h-16 rounded-sm" />
              <div className="min-w-60 flex-1 shrink basis-[0%] my-auto">
                <div className="leading-5">
                  <span className="font-bold">Homelessness:</span> Housing
                  program expires on Jan 25
                </div>
                <div className="leading-none mt-1">
                  <span className="font-bold">Financial instability:</span> No
                  verified income source
                </div>
              </div>
            </div>
          }
          recommendations={
            <>
              <div className="flex w-full gap-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-[3px] py-0.5">
                  upload_file
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-4 flex-1 shrink basis-[0%]">
                  <span className="font-normal">Add </span>
                  Housing Support Documents
                  <span className="font-normal"> for permanent placement</span>
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-[3px] py-0.5">
                  upload_file
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  <span className="font-normal">Add </span>
                  Income Verification Documents
                  <span className="font-normal"> for financial aid</span>
                </div>
              </div>
            </>
          }
          ongoingActivities={
            <>
              <div className="flex w-full gap-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 p-0.5">
                  fact_check
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  ID Verification Pending
                  <span className="font-normal"> for Health Homes Program</span>
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-[3px] py-0.5">
                  notifications
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  <span className="font-normal">Enrolled in </span>
                  CalWorkforce Dev <span className="font-normal">Program</span>
                </div>
              </div>
            </>
          }
        />

        <RiskCard
          title="Behavioral"
          icon="psychology"
          riskLevel="Low"
          riskColor="bg-neutral-200 text-[#1F1F1F]"
          cardHeight="84px"
          alerts={
            <div className="self-stretch z-0 flex w-full items-stretch gap-2 text-sm text-black font-normal leading-5 mt-2">
              <div className="bg-[#D93737] flex w-0.5 shrink-0 h-10 rounded-sm" />
              <div className="min-w-60 flex-1 shrink basis-[0%] my-auto">
                <span className="font-bold">Mental Health:</span> Counselling
                sessions not scheduled
              </div>
            </div>
          }
          recommendations={
            <div className="flex w-full gap-2">
              <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-0.5 py-[3px]">
                create_new_folder
              </span>
              <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                <span className="font-normal">Enrol patient in </span>
                ACCESS Program
                <span className="font-normal"> for mental health</span>
              </div>
            </div>
          }
          ongoingActivities={<></>}
        />
      </div>
    </section>
  );
};

export default RiskAssessment;
