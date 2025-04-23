import React from "react";

const VisitTimeline: React.FC = () => {
  return (
    <section className="min-w-60 grow shrink w-[461px] pb-4 px-4 max-md:max-w-full">
      <div className="flex w-full max-w-[544px] max-md:max-w-full">
        <div className="flex min-w-60 w-full items-center gap-[40px_100px] justify-between flex-wrap flex-1 shrink basis-[0%] py-2 max-md:max-w-full">
          <div className="self-stretch flex items-center gap-4 overflow-hidden my-auto">
            <div className="self-stretch flex items-center gap-3 text-base justify-center my-auto">
              <div className="self-stretch text-[#2F2F2F] font-normal whitespace-nowrap text-center leading-none w-4 my-auto px-1 py-0.5">
                directions_walk
              </div>
              <div className="text-[#151414] font-bold self-stretch my-auto">
                Visit Timeline
              </div>
            </div>
            <div className="self-stretch flex items-center gap-2 my-auto">
              <div className="self-stretch flex min-h-4 gap-4 my-auto" />
            </div>
          </div>
          <div className="self-stretch flex min-h-8 min-w-60 gap-2 my-auto" />
        </div>
      </div>
      <div className="flex w-full max-w-[544px] flex-col items-center justify-center mt-[77px] max-md:max-w-full max-md:mt-10">
        <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
          <div className="flex w-full gap-[27px] justify-between flex-wrap max-md:max-w-full">
            <div className="flex flex-col items-center justify-center w-5">
              <div className="stroke-[4px] bg-white flex min-h-4 w-4 h-4 fill-white stroke-[#868686] rounded-[50%] border-[rgba(134,134,134,1)] border-solid border-4" />
            </div>
            <div className="flex w-5 shrink-0 h-5" />
            <div className="flex w-5 shrink-0 h-5" />
            <div className="flex w-5 shrink-0 h-5" />
            <div className="flex w-5 shrink-0 h-5" />
            <div className="flex w-5 shrink-0 h-5" />
            <div className="flex w-5 shrink-0 h-5" />
            <div className="flex flex-col items-center justify-center w-5">
              <div className="w-[15px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b5d73a9498854c6fb7efd5b51658f101/f8ae65084a7e2ec96355c94a33cf6b13ba1410fb?placeholderIfAbsent=true"
                  className="aspect-[0.94] object-contain w-full"
                  alt="Visit icon"
                />
              </div>
              <div className="w-4 mt-4">
                <div className="bg-[#868686] flex w-full shrink-0 h-4 fill-[#868686] rounded-[50%]" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b5d73a9498854c6fb7efd5b51658f101/e2c75a4b9f81ca2c85e5097cfc7693b73d4795e2?placeholderIfAbsent=true"
                className="aspect-[0.94] object-contain w-[15px]"
                alt="Visit icon"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-5">
              <div className="w-[15px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b5d73a9498854c6fb7efd5b51658f101/e0ae278dfc8e5e9d684994bc4d042dc291200d94?placeholderIfAbsent=true"
                  className="aspect-[0.94] object-contain w-full"
                  alt="Visit icon"
                />
              </div>
            </div>
            <div className="flex w-5 shrink-0 h-5" />
            <div className="flex flex-col items-center justify-center w-5">
              <div className="w-[15px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b5d73a9498854c6fb7efd5b51658f101/5c94fc4bc4ac2d80d1d802a3f2ef1355c3d75883?placeholderIfAbsent=true"
                  className="aspect-[0.94] object-contain w-full"
                  alt="Visit icon"
                />
              </div>
            </div>
          </div>
          <div className="self-center flex min-h-px w-full gap-2.5 mt-2">
            <div className="bg-neutral-200 flex min-h-px min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full" />
          </div>
          <div className="flex w-full gap-[27px] text-[10px] text-[rgba(134,134,134,1)] font-semibold whitespace-nowrap text-center justify-between flex-wrap mt-2 max-md:max-w-full">
            <div className="w-5">Feb</div>
            <div className="w-5">Mar</div>
            <div className="w-5">Apr</div>
            <div className="w-5">May</div>
            <div className="w-5">Jun</div>
            <div className="w-5">Jul</div>
            <div className="w-5">Aug</div>
            <div className="w-5">Sep</div>
            <div className="w-5">Oct</div>
            <div className="w-5">Nov</div>
            <div className="w-5">Dec</div>
            <div className="bg-[#0070DD] text-white w-5 px-[3px] rounded-sm">
              Jan
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-[#707070] font-semibold leading-4 justify-center mt-5">
          <div className="flex items-center gap-1 whitespace-nowrap pl-px">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b5d73a9498854c6fb7efd5b51658f101/3673326d679db9e28af883f438ad3f6db6fc539f?placeholderIfAbsent=true"
              className="aspect-[0.87] object-contain w-[7px] self-stretch shrink-0 my-auto"
              alt="Behavioral icon"
            />
            <div className="self-stretch my-auto">Behavioral</div>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap pl-px">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b5d73a9498854c6fb7efd5b51658f101/e8bf63068961862f2dee23e86a1f06857f0a4074?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-2 self-stretch shrink-0 my-auto"
              alt="PCP icon"
            />
            <div className="self-stretch my-auto">PCP</div>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b5d73a9498854c6fb7efd5b51658f101/8ba2bd580883333714f9e21505393a493c9a68b7?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-2 self-stretch shrink-0 my-auto"
              alt="Justine Check-ins icon"
            />
            <div className="self-stretch my-auto">Justine Check-ins</div>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap pl-px">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b5d73a9498854c6fb7efd5b51658f101/262f358a2a03d0b157d184ea261550468ed477cc?placeholderIfAbsent=true"
              className="aspect-[0.87] object-contain w-[7px] self-stretch shrink-0 my-auto"
              alt="ED icon"
            />
            <div className="self-stretch my-auto">ED</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitTimeline;
