import React, { useRef } from "react";
import { useTextSelection } from "@/hooks/use-text-selection";
import SelectionToolbar from "@/components/ai-copilot/SelectionToolbar";

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
  cardHeight = "88px"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { selectedText, position } = useTextSelection(containerRef);

  const handleAskCopilot = (text: string) => {
    const questionInput = document.querySelector('input[placeholder="Type your message here..."]') as HTMLInputElement;
    if (questionInput) {
      questionInput.value = `Tell me more about "${text}" from the patient's records`;
      questionInput.focus();
      // Trigger form submission
      const form = questionInput.closest('form');
      if (form) {
        const submitEvent = new Event('submit', { cancelable: true });
        form.dispatchEvent(submitEvent);
      }
    }
  };

  return (
    <div className="min-w-60 flex-1 shrink basis-[0%]" ref={containerRef}>
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
            <div className={`rounded bg-[rgba(252,250,250,1)] flex shrink-0 h-[${cardHeight}]`} />
          </div>
          <div className={`self-stretch rounded ${riskColor} z-0 gap-2.5 text-xs font-bold whitespace-nowrap text-center uppercase leading-none px-1 py-0.5`}>
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
      <SelectionToolbar
        selectedText={selectedText}
        position={position}
        onAskClick={handleAskCopilot}
      />
    </div>
  );
};

const RiskAssessment: React.FC = () => {
  return <section className="w-full mt-4 pb-4 px-4 max-md:max-w-full bg-neutral-50 rounded-lg">
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

        {/* Clinical Risk - worsened data */}
        <RiskCard
          title="CLINICAL"
          icon="health_and_safety"
          riskLevel="High"
          riskColor="bg-[#F9E2E2] text-[#631919]"
          alerts={
            <div className="self-stretch z-0 flex w-full items-stretch gap-2 text-sm text-black font-normal leading-none mt-2">
              <div className="bg-[#D93737] flex w-0.5 shrink-0 h-14 rounded-sm" />
              <div className="min-w-60 flex-1 shrink basis-[0%] my-auto">
                <div>
                  <span className="font-bold">Diabetes:</span> HbA1c is at 9.2 (poor control)
                </div>
                <div className="mt-1">
                  <span className="font-bold">Blood Pressure:</span> 158/99 (severely elevated, last 2 visits)
                </div>
                <div className="mt-1">
                  <span className="font-bold">Immunization overdue:</span> Influenza &amp; Pneumococcal, {'>'}1 year
                </div>
                <div className="mt-1">
                  <span className="font-bold">Recent ER Visit:</span> For chest pain 2 weeks ago
                </div>
              </div>
            </div>
          }
          recommendations={
            <>
              <div className="flex w-full gap-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 p-0.5">
                  event_busy
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Urgently schedule primary care follow-up for hypertension and diabetes
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 p-0.5">
                  vaccine
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Administer overdue influenza and pneumococcal vaccines
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 p-0.5">
                  add_alert
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Refer to cardiology and diabetes educator
                </div>
              </div>
            </>
          }
          ongoingActivities={
            <>
              <div className="flex w-full gap-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 p-0.5">
                  medical_services
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Blood glucose and BP logs being collected
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-[3px] py-0.5">
                  notifications
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Automated reminders sent for clinic appointments 
                </div>
              </div>
            </>
          }
        />

        {/* Social Risk - worsened data */}
        <RiskCard
          title="Social"
          icon="group"
          riskLevel="High"
          riskColor="bg-[#F9E2E2] text-[#631919]"
          cardHeight="122px"
          alerts={
            <div className="self-stretch z-0 flex w-full items-stretch gap-2 text-sm text-black font-normal mt-2">
              <div className="bg-[#D93737] flex w-0.5 shrink-0 h-[56px] rounded-sm" />
              <div className="min-w-60 flex-1 shrink basis-[0%] my-auto">
                <div className="leading-5">
                  <span className="font-bold">Homelessness:</span> Housing program expired; staying in shelter
                </div>
                <div className="leading-5 mt-1">
                  <span className="font-bold">Recent eviction:</span> 1 week ago
                </div>
                <div className="leading-none mt-1">
                  <span className="font-bold">Food insecurity:</span> Not enrolled in food benefit programs
                </div>
                <div className="leading-none mt-1">
                  <span className="font-bold">Legal issues:</span> Court date pending for misdemeanors
                </div>
              </div>
            </div>
          }
          recommendations={
            <>
              <div className="flex w-full gap-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-[3px] py-0.5">
                  home
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-4 flex-1 shrink basis-[0%]">
                  Refer to social work for urgent rehousing
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-[3px] py-0.5">
                  local_grocery_store
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Enroll in SNAP &amp; local food assistance
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-[3px] py-0.5">
                  gavel
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Connect with legal aid services
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
                  Applied for housing voucher (pending)
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-[3px] py-0.5">
                  notifications
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Waiting list for food bank enrollment
                </div>
              </div>
            </>
          }
        />

        {/* Behavioral Risk - worsened data */}
        <RiskCard
          title="Behavioral"
          icon="psychology"
          riskLevel="Moderate"
          riskColor="bg-[#FDE6CE] text-[#743208]"
          cardHeight="98px"
          alerts={
            <div className="self-stretch z-0 flex w-full items-stretch gap-2 text-sm text-black font-normal leading-5 mt-2">
              <div className="bg-[#D93737] flex w-0.5 shrink-0 h-12 rounded-sm" />
              <div className="min-w-60 flex-1 shrink basis-[0%] my-auto">
                <div>
                  <span className="font-bold">Mental Health:</span> Diagnosed depression - missed last 2 therapy appointments
                </div>
                <div className="mt-1">
                  <span className="font-bold">Substance Use:</span> Reports resumed alcohol use
                </div>
                <div className="mt-1">
                  <span className="font-bold">Medication:</span> Stopped antidepressant, reports side effects
                </div>
              </div>
            </div>
          }
          recommendations={
            <div>
              <div className="flex w-full gap-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-0.5 py-[3px]">
                  schedule
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Contact for urgent behavioral health care management
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-0.5 py-[3px]">
                  medication
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Review and restart appropriate antidepressant regimen
                </div>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 px-0.5 py-[3px]">
                  group_work
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Refer to substance use counseling
                </div>
              </div>
            </div>
          }
          ongoingActivities={
            <>
              <div className="flex w-full gap-2">
                <span className="material-icons text-base text-[#2F2F2F] font-light whitespace-nowrap text-center leading-none w-4 p-0.5">
                  support
                </span>
                <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
                  Referral to behavioral health team in progress
                </div>
              </div>
            </>
          }
        />

      </div>
    </section>;
};

export default RiskAssessment;
