import React from "react";

const PatientBanner: React.FC = () => {
  return (
    <section className="shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] bg-white w-full overflow-hidden max-md:max-w-full">
      <div className="flex w-full items-center justify-between flex-wrap pl-4 pr-1.5 max-md:max-w-full">
        <div className="self-stretch flex min-w-60 min-h-8 gap-1 text-xs justify-center my-auto max-md:max-w-full">
          <div className="flex min-w-60 min-h-8 gap-2 justify-center max-md:max-w-full">
            <div className="flex min-w-60 items-center gap-2 flex-wrap max-md:max-w-full">
              <div className="self-stretch flex items-center gap-1 text-base text-[#1F1F1F] my-auto">
                <div className="self-stretch flex flex-col font-light whitespace-nowrap text-center leading-none justify-center w-7 my-auto px-0.5 py-1">
                  <div className="bg-neutral-200 w-6 h-6 fill-neutral-200 px-[3px] rounded-[50%] flex items-center justify-center">
                    person
                  </div>
                </div>
                <div className="font-bold self-stretch my-auto">
                  Lawson, Charles
                </div>
              </div>
              <div className="text-[#1F1F1F] font-semibold leading-none self-stretch my-auto">
                09/12/1992 (33y)
              </div>
              <div className="self-stretch flex min-w-60 items-center gap-2 leading-none my-auto">
                <div className="self-stretch flex items-center gap-1 my-auto">
                  <div className="text-[#707070] font-normal self-stretch my-auto">
                    Sex assigned at Birth:
                  </div>
                  <div className="text-[#1F1F1F] font-semibold self-stretch my-auto">
                    Male
                  </div>
                </div>
                <div className="self-stretch flex items-center gap-1 my-auto">
                  <div className="text-[#707070] font-normal self-stretch my-auto">
                    Gender Identity:
                  </div>
                  <div className="text-[#1F1F1F] font-semibold self-stretch my-auto">
                    Male <span className="italic">(He,Him)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex min-w-60 items-center gap-1 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-2 text-xs my-auto">
            <div className="self-stretch flex min-w-60 items-center gap-1 my-auto">
              <div className="self-stretch flex items-center gap-1 font-semibold leading-none my-auto">
                <div className="text-[#707070] text-[13px] font-normal leading-none self-stretch w-[34px] my-auto">
                  Flags:
                </div>
                <div className="self-stretch flex items-center gap-1 text-[#1F1F1F] whitespace-nowrap capitalize my-auto">
                  <div className="bg-[#EB776C] self-stretch flex w-2.5 shrink-0 h-2.5 my-auto rounded-sm" />
                  <div className="self-stretch my-auto">Homeless</div>
                </div>
                <div className="self-stretch flex items-center gap-0.5 my-auto">
                  <div className="self-stretch flex items-center gap-1 text-[#1F1F1F] capitalize my-auto">
                    <div className="bg-[#FFC208] self-stretch flex w-2.5 shrink-0 h-2.5 my-auto rounded-sm" />
                    <div className="self-stretch w-[91px] my-auto">
                      Domestic Abuse
                    </div>
                  </div>
                  <div className="text-[#494949] underline decoration-solid decoration-auto underline-offset-auto underline self-stretch my-auto">
                    +1
                  </div>
                </div>
              </div>
              <div className="rounded self-stretch flex text-[#1F1F1F] font-light whitespace-nowrap text-center leading-none w-6 my-auto">
                <div className="rounded bg-[rgba(229,229,229,0)] w-6 h-6 px-0.5 flex items-center justify-center">
                  visibility
                </div>
              </div>
            </div>
            <div className="bg-[#D5D5D5] self-stretch flex w-px shrink-0 h-5 my-auto" />
          </div>
          <div className="self-stretch flex items-center text-[#1F1F1F] w-[158px] my-auto">
            <div className="self-stretch flex items-center my-auto">
              <div className="self-stretch flex items-stretch text-[10px] font-semibold whitespace-nowrap text-center leading-[1.6] w-[60px] my-auto px-[5px] py-px">
                <div className="my-auto max-md:mr-[-3px]">
                  <div className="bg-[#FFC208] flex flex-col items-center w-6 justify-center h-6 fill-[#FFC208] px-1.5 rounded-[50%]">
                    <div className="opacity-80 mix-blend-multiply">RV</div>
                  </div>
                </div>
                <div>
                  <div className="stroke-[3px] bg-[#82C91E] flex flex-col items-center w-[30px] justify-center h-[30px] fill-[#82C91E] stroke-white px-1.5 rounded-[50%] border-white border-solid border-[3px]">
                    <div className="opacity-80 mix-blend-multiply">BK</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-center gap-1 my-auto">
                <div className="self-stretch flex items-stretch gap-1 overflow-hidden font-normal w-[68px] my-auto px-0.5">
                  <div className="text-center text-base my-auto">timer</div>
                  <div className="text-sm leading-none">26 mins</div>
                </div>
                <div className="self-stretch flex text-base font-light whitespace-nowrap text-center leading-none w-6 my-auto rounded-[20px]">
                  <div className="rounded bg-[rgba(229,229,229,0)] w-6 h-6 px-0.5 flex items-center justify-center">
                    expand_less
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-2.5 max-md:max-w-full">
        <div className="bg-neutral-200 flex min-h-px min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full" />
      </div>
      <div className="flex w-full gap-3 flex-wrap px-4 py-2 max-md:max-w-full">
        <div className="min-w-60 w-[284px] max-w-72">
          <div className="flex items-center gap-2">
            <div className="self-stretch flex gap-0.5 text-sm font-light leading-none my-auto">
              <div className="text-xs text-[#0070DD] font-semibold leading-none">
                <div className="self-stretch gap-1">(641) 555-0197</div>
              </div>
              <div className="text-[#707070] whitespace-nowrap text-center w-4 px-0.5 py-[3px] rounded-md flex items-center justify-center">
                message
              </div>
              <div className="text-[#D93737] whitespace-nowrap text-center w-4 p-[3px] rounded-md flex items-center justify-center">
                phone_disabled
              </div>
            </div>
            <div className="text-[#A6A6A6] text-[8px] font-semibold leading-4 self-stretch my-auto">
              •
            </div>
            <div className="self-stretch flex items-center gap-0.5 whitespace-nowrap w-[138px] my-auto">
              <div className="text-[#1F1F1F] text-ellipsis text-xs font-semibold leading-none self-stretch flex-1 shrink basis-[0%] my-auto">
                charles.lawson@gmail.com
              </div>
              <div className="self-stretch text-base text-[#707070] font-light text-center leading-none w-4 my-auto px-0.5 py-1 rounded-md flex items-center justify-center">
                mail
              </div>
            </div>
          </div>
          <div className="text-ellipsis flex-1 shrink basis-[0%] w-full gap-0.5 text-xs text-[#1F1F1F] font-semibold leading-none mt-[5px]">
            124 West Avenue, Columbus, CA, 90210
          </div>
        </div>
        <div className="bg-neutral-200 flex w-px shrink-0 h-[37px]" />
        <div className="flex min-w-60 min-h-[37px] gap-6 flex-wrap max-md:max-w-full">
          <div className="flex min-h-[37px] flex-col items-stretch">
            <div className="flex items-center gap-2 text-[13px] leading-none pr-[17px]">
              <div className="text-[rgba(134,134,134,1)] font-normal self-stretch my-auto">
                SHIE EMPI
              </div>
              <div className="text-[#1F1F1F] font-semibold self-stretch my-auto">
                P392847
              </div>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap mt-[5px]">
              <div className="text-[rgba(134,134,134,1)] text-[13px] font-normal leading-none self-stretch w-[62px] my-auto">
                IDs
              </div>
              <div className="self-stretch flex gap-1 font-semibold my-auto">
                <div className="text-[#1F1F1F] text-[13px] leading-none">
                  1223344555
                </div>
                <div className="text-[#494949] text-xs leading-none underline decoration-solid decoration-auto underline-offset-auto underline w-[15px]">
                  +3
                </div>
              </div>
            </div>
          </div>
          <div className="flex min-h-[37px] flex-col items-stretch w-[210px]">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="text-[rgba(134,134,134,1)] text-[13px] font-normal leading-none self-stretch w-[97px] my-auto">
                Plan/Payer
              </div>
              <div className="self-stretch flex items-center gap-1 my-auto">
                <div className="self-stretch text-base text-[#2EA843] font-light text-center leading-none w-4 my-auto px-[3px] py-0.5 flex items-center justify-center">
                  verified_user
                </div>
                <div className="text-[#1F1F1F] text-ellipsis text-[13px] font-semibold leading-none self-stretch my-auto">
                  MediCal
                </div>
              </div>
            </div>
            <div className="flex max-w-full w-[210px] items-center gap-2 text-[13px] leading-none mt-[5px]">
              <div className="text-[rgba(134,134,134,1)] font-normal self-stretch w-[100px] my-auto">
                PCP
              </div>
              <div className="text-[#1F1F1F] text-ellipsis font-semibold self-stretch flex-1 shrink basis-[0%] my-auto">
                West, Sarah
              </div>
            </div>
          </div>
          <div className="flex min-h-[37px] flex-col items-stretch">
            <div className="flex gap-2 text-[13px] leading-none">
              <div className="text-[rgba(134,134,134,1)] font-normal w-32">
                Paneled PCP
              </div>
              <div className="self-stretch gap-1 text-[#1F1F1F] font-semibold whitespace-nowrap">
                -
              </div>
            </div>
            <div className="flex items-center gap-2 mt-[5px]">
              <div className="text-[rgba(134,134,134,1)] text-[13px] font-normal leading-none self-stretch my-auto">
                Functional Limitations
              </div>
              <div className="self-stretch flex gap-1 font-semibold my-auto">
                <div className="text-[#1F1F1F] text-[13px] leading-none">
                  Deaf, ...
                </div>
                <div className="text-[#494949] text-xs leading-none underline decoration-solid decoration-auto underline-offset-auto underline w-[15px]">
                  +3
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[37px] w-[167px]">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="text-[rgba(134,134,134,1)] text-[13px] font-normal leading-none self-stretch w-[109px] my-auto">
                Risk
              </div>
              <div className="self-stretch flex items-center gap-1 w-[50px] my-auto">
                <div className="text-[#1F1F1F] text-[13px] font-semibold leading-none self-stretch my-auto">
                  SVI
                </div>
                <div className="self-stretch rounded bg-[#F9E2E2] min-h-4 gap-2.5 text-xs text-[#631919] font-bold text-center uppercase leading-none my-auto px-1">
                  H
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-2 text-[13px] leading-none mt-[5px]">
              <div className="text-[rgba(134,134,134,1)] font-normal self-stretch my-auto">
                SSN (Last 4 digits)
              </div>
              <div className="text-ellipsis self-stretch gap-1 text-[#1F1F1F] font-semibold whitespace-nowrap flex-1 shrink basis-[0%] my-auto">
                6789
              </div>
            </div>
          </div>
          <div className="min-w-60 h-[37px] w-[242px]">
            <div className="flex w-full max-w-[242px] gap-2 pr-6 max-md:pr-5">
              <div className="text-[rgba(134,134,134,1)] text-[13px] font-normal leading-none w-[91px]">
                ISA Status
              </div>
              <div className="flex items-center gap-2 overflow-hidden text-sm text-[#1F1F1F] font-semibold whitespace-nowrap leading-5">
                <div className="bg-[#2EA843] self-stretch flex w-2 shrink-0 h-2 fill-[#2EA843] my-auto rounded-[50%]" />
                <div className="self-stretch my-auto">Active</div>
              </div>
            </div>
            <div className="flex w-full max-w-[242px] gap-2 text-[13px] leading-none mt-[5px] pr-6 max-md:pr-5">
              <div className="text-[rgba(134,134,134,1)] font-normal">
                Is Incarcerated?
              </div>
              <div className="text-ellipsis self-stretch gap-1 text-[#1F1F1F] font-semibold whitespace-nowrap">
                No
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientBanner;
