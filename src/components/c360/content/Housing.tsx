
import React from "react";

const housingData = {
  status: {
    situation: "HOMELESS SHELTER",
    address: "789 Hope Street, Alameda County, CA 94501",
    since: "Since 11/19/2024",
    yearsInHMIS: "6 years 1 month",
    hmisId: "CZ999999",
    resourceZone: "South County",
    housed: false,
    agency: "Axis Community Health Inc",
    program: "Housing Services - General",
    moveInDate: "11/19/2024",
  },
  problemSolving: {
    status: "Active",
    period: {
      from: "Nov 16, 2024",
      days: 30,
      ongoing: true,
    },
    organization: "Bay Area Community Services (BACS)",
    coordinator: "James, Molly",
  },
  programHistory: [
    {
      start: "7/23/2014",
      end: "4/4/2017",
      agency: "Lifelong Medical Care",
      type: "Unsheltered Homeless Services",
      name: "Housing Outreach Services",
    },
    {
      start: "8/13/2014",
      end: "8/22/2014",
      agency: "NATIVE AMERICAN HEALTH CENTER INC",
      type: "Emergency Shelter",
      name: "Emergency Shelter - Men",
    },
    {
      start: "12/13/2013",
      end: "4/15/2014",
      agency: "NATIVE AMERICAN HEALTH CENTER INC",
      type: "Emergency Shelter",
      name: "Emergency Shelter - Winter",
    },
    {
      start: "7/23/2014",
      end: "4/4/2017",
      agency: "NATIVE AMERICAN HEALTH CENTER INC",
      type: "Supportive Services",
      name: "Housing Services - General",
    },
    {
      start: "7/23/2014",
      end: "4/4/2017",
      agency: "AXIS COMMUNITY HEALTH INC",
      type: "Supportive Services",
      name: "Case Management",
    },
  ],
};

export default function Housing() {
  return (
    <div className="flex flex-col gap-6 pt-4 pb-8">
      {/* Housing Status */}
      <section className="bg-white rounded-md shadow border px-6 py-5">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-lg font-bold text-[#1F1F1F] flex items-center gap-2">
            <span className="material-icons text-[#00509F]">house</span>
            Housing Status
          </h2>
          <span className="text-sm text-gray-500">last refreshed 2 days ago</span>
        </div>
        <div className="flex flex-wrap gap-x-16 gap-y-2">
          <div>
            <div className="text-xs text-muted-foreground">Last Reported Living Situation</div>
            <span className="inline-block bg-orange-200 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded">
              {housingData.status.situation}
            </span>
            <div className="text-sm text-gray-600 mt-1">{housingData.status.address}</div>
            <div className="text-xs text-gray-500">{housingData.status.since}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Years in HMIS</div>
            <div className="text-base text-black">{housingData.status.yearsInHMIS}</div>
            <div className="text-xs mt-2 text-muted-foreground">HMIS ID</div>
            <div className="text-base">{housingData.status.hmisId}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Resource Zone</div>
            <div className="text-base">{housingData.status.resourceZone}</div>
            <div className="text-xs mt-2 text-muted-foreground">Permanently Housed per HMIS</div>
            <div>
              {housingData.status.housed ? (
                <span className="material-icons text-green-600 align-middle">check_circle</span>
              ) : (
                <span className="material-icons text-gray-300 align-middle">remove_circle</span>
              )}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Agency</div>
            <div className="text-base">{housingData.status.agency}</div>
            <div className="text-xs mt-2 text-muted-foreground">Program</div>
            <div className="text-base">{housingData.status.program}</div>
            <div className="text-xs mt-2 text-muted-foreground">Move-in date</div>
            <div className="text-base">{housingData.status.moveInDate}</div>
          </div>
        </div>
      </section>

      {/* Housing Problem Solving */}
      <section className="bg-white rounded-md shadow border px-6 py-5">
        <div className="flex items-center justify-between pb-3">
          <h2 className="text-lg font-bold text-[#1F1F1F] flex items-center gap-2">
            <span className="material-icons text-[#00509F]">question_answer</span>
            Housing Problem Solving
          </h2>
          <span className="text-sm text-gray-500">last refreshed 2 days ago</span>
        </div>
        <div className="flex flex-wrap gap-x-16 gap-y-2">
          <div>
            <div className="text-xs text-muted-foreground">Status</div>
            <span className="inline-block text-green-700 text-xs font-semibold px-2 py-0.5 rounded">
              {housingData.problemSolving.status}
            </span>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Period</div>
            <div className="text-base">
              {housingData.problemSolving.period.from} &nbsp;....&nbsp; {housingData.problemSolving.period.days} days&nbsp; —&nbsp;{housingData.problemSolving.period.ongoing ? "Ongoing" : "Ended"}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Organization</div>
            <div className="text-base">{housingData.problemSolving.organization}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Coordinator</div>
            <div className="text-base">{housingData.problemSolving.coordinator}</div>
          </div>
        </div>
      </section>

      {/* Housing Program History */}
      <section className="bg-white rounded-md shadow border px-6 py-5">
        <div className="flex items-center justify-between pb-3">
          <h2 className="text-lg font-bold text-[#1F1F1F] flex items-center gap-2">
            <span className="material-icons text-[#00509F]">history</span>
            Housing Program History
          </h2>
          <span className="text-sm text-gray-500">last refreshed 2 days ago</span>
        </div>
        <div className="overflow-x-auto mt-2">
          <table className="min-w-full border text-sm text-left text-gray-700">
            <thead>
              <tr className="bg-[#F9FAFB]">
                <th className="px-3 py-1 font-semibold">Start Date</th>
                <th className="px-3 py-1 font-semibold">Exit Date</th>
                <th className="px-3 py-1 font-semibold">Housing Agency</th>
                <th className="px-3 py-1 font-semibold">Program Type</th>
                <th className="px-3 py-1 font-semibold">Program Name</th>
              </tr>
            </thead>
            <tbody>
              {housingData.programHistory.map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="px-3 py-1">{row.start}</td>
                  <td className="px-3 py-1">{row.end}</td>
                  <td className="px-3 py-1">{row.agency}</td>
                  <td className="px-3 py-1">{row.type}</td>
                  <td className="px-3 py-1">{row.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
