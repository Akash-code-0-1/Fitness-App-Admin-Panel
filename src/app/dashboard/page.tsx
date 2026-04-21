/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import StatusBar from "@/components/StatusBar";
import { TrendingUp } from "lucide-react";

const bars = [42, 68, 38, 55, 48, 72, 58, 82, 46, 65, 38, 60, 44, 152];
const xLabels = [
  "01 OCT",
  "02 OCT",
  "03 OCT",
  "04 OCT",
  "05 OCT",
  "06 OCT",
  "07 OCT",
  "08 OCT",
  "09 OCT",
  "10 OCT",
  "11 OCT",
  "12 OCT",
  "13 OCT",
  "14 OCT",
];

const stats = [
  {
    label: "Total Users",
    value: "14,285",
    icon: "Users.svg",
    bgImage: "usersBg.svg",
    bg: "#070B10",
    col: "#00d4ff",
  },
  {
    label: "Active Users",
    value: "8,912",
    icon: "User.svg",
    bgImage: "userBg.svg",
    bg: "#070B10",
    col: "#10b981",
  },
  {
    label: "Total Protocols",
    value: "412",
    icon: "Fire.svg",
    bgImage: "protocolBg.svg",
    bg: "#070B10",
    col: "#00d4ff",
  },
  {
    label: "Total Exercises",
    value: "2,854",
    icon: "Dumbmells.svg",
    bgImage: "exerciseBg.svg",
    bg: "#070B10",
    col: "#f59e0b",
  },
];

export default function DashboardPage() {
  const [period, setPeriod] = useState("Weekly");
  const [startDate, setStartDate] = useState("2024-10-14");
  const [endDate, setEndDate] = useState("2024-10-14");
  const maxBar = Math.max(...bars);

  return (
    <div className="fade-in font-[inter,sans-serif]">
      <div className="p-6 lg:pl-10">
        <h1 className="text-[26px] font-extrabold text-white mb-1 tracking-tight">
          Dashboard Home
        </h1>
        <p className="text-[13px] text-[#8899bb] mb-6">
          Visualizing movement integrity and platform growth monitoring across
          the Body Axis ecosystem.
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map(({ label, value, icon, bg, col, bgImage }) => (
            <div
              key={label}
              className="rounded-xl p-5 border border-[#1a2640] relative overflow-hidden"
              style={{
                background: "#0f1729",
                backgroundImage: `url('/${bgImage}')`,
                backgroundSize: "81px",
                backgroundPosition: "right 0px top 54px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.04) 0%, transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: bg }}
                  >
                    <img
                      src={`/icons/${icon}`}
                      alt={label}
                      className="w-[25px] h-[25px] object-contain"
                    />
                  </div>
                  <div
                    className="flex items-center justify-center gap-1 w-[64px] h-[26px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] rounded-full text-[14px] font-bold bg-[#E9FFF1] text-[#10b981]"
                    style={{ transform: "rotate(0deg)", opacity: 1 }}
                  >
                    <TrendingUp size={16} /> 12%
                  </div>
                </div>
                <p className="text-[14px] font-medium leading-[20px] tracking-[0.7px] uppercase align-middle text-[#5a7090] mb-1">
                  {label}
                </p>
                <p className="text-[24px] font-bold leading-[26px] tracking-[-0.75px] align-middle text-white">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart card */}
        <div
          className="rounded-[20px]  p-8 mb-5"
          style={{ background: "#0B1220" }}
        >
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
            <div>
              <h3 className="text-[22px] font-bold text-white tracking-tight leading-tight">
                Engagement Velocity
              </h3>
              <p className="text-[14px] text-[#5a7090] mt-1">
                Global mobility session distribution on a day basis
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 bg-[#0d1525]/80 p-2 lg:p-1.5 rounded-[16px] lg:rounded-[12px] border border-[#1a2640] lg:border-none w-full lg:w-auto">
              {/* TOP ROW (Mobile): Date Pickers */}
              <div className="flex flex-col sm:flex-row items-center gap-3 px-2 py-2 lg:py-1 lg:border-r lg:border-[#1a2640] w-full lg:w-auto">
                {/* Label & Main Icon for Mobile Accessibility */}
                <div className="flex items-center justify-between w-full lg:w-auto gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="/icons/calendar.svg"
                      alt=""
                      className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] flex-shrink-0"
                    />
                    <span className="lg:hidden text-[11px] font-bold text-[#5a7090] uppercase tracking-widest">
                      Date Range
                    </span>
                  </div>
                </div>

                {/* Input Grid: Ensures perfect symmetry on mobile */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 w-full lg:flex lg:w-auto">
                  {/* Start Date */}
                  <div className="relative flex items-center bg-[#070b14] lg:bg-transparent rounded-lg border border-[#1a2640] lg:border-none px-3 py-2 lg:p-0">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="bg-transparent text-[13px] text-white outline-none [color-scheme:dark] w-full lg:w-[95px] cursor-pointer z-10"
                    />
                    <img
                      src="/icons/dateInput.svg"
                      className="w-[14px] h-[14px] pointer-events-none absolute right-3 lg:static lg:ml-2"
                      alt=""
                    />
                  </div>

                  <span className="text-[#5a7090] text-[12px] font-medium px-1">
                    to
                  </span>

                  {/* End Date */}
                  <div className="relative flex items-center bg-[#070b14] lg:bg-transparent rounded-lg border border-[#1a2640] lg:border-none px-3 py-2 lg:p-0">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="bg-transparent text-[13px] text-white outline-none [color-scheme:dark] w-full lg:w-[95px] cursor-pointer z-10"
                    />
                    <img
                      src="/icons/dateInput.svg"
                      className="w-[14px] h-[14px] pointer-events-none absolute right-3 lg:static lg:ml-2"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* BOTTOM ROW (Mobile): Toggle buttons */}
              <div className="flex gap-1 w-full lg:w-auto">
                {["Daily", "Weekly", "Monthly"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`flex-1 lg:flex-none px-4 py-2 lg:py-1.5 rounded-lg text-[12px] font-bold transition-all
          ${
            period === p
              ? "bg-[#2563eb] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              : "text-[#5a7090] hover:text-white hover:bg-white/5"
          }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bar Chart Section */}
          {/* Scrollable Wrapper for Mobile */}
          <div className="w-full overflow-x-auto pb-6 scrollbar-hide sm:overflow-visible">
            <div className="min-w-[600px] sm:min-w-full">
              {/* Bar Chart Section */}
              <div className="relative h-[280px] w-full flex items-end gap-2 sm:gap-3 mb-4 px-2">
                {bars.map((v, i) => {
                  const isLast = i === bars.length - 1;
                  return (
                    <div
                      key={i}
                      className="flex-1 group relative flex flex-col items-center h-full justify-end"
                    >
                      {/* Glow effect for the last bar */}
                      {/* {isLast && (
                        <div
                          className="absolute bottom-0 w-full bg-[#19FB9B] blur-[20px] opacity-20"
                          style={{ height: `${v}%` }}
                        />
                      )} */}
                      <div
                        className="w-full rounded-t-md transition-all duration-300 hover:brightness-125"
                        style={{
                          height: `${v}%`,
                          background: isLast
                            ? "linear-gradient(180deg, #9945FF 0%, #19FB9B 100%)"
                            : "linear-gradient(180deg, rgba(82, 67, 170, 0.4) 0%, rgba(20, 241, 149, 0.4) 100%)",
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* X-Axis Labels */}
              <div className="flex w-full">
                {xLabels.map((l, i) => (
                  <div key={i} className="flex-1 flex justify-center">
                    <span className="text-[10px] font-bold text-[#3d5070] tracking-wider uppercase whitespace-nowrap">
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

{/* Table Section */}
          <div className="rounded-[16px] overflow-hidden border border-[#1a2640] bg-[#0d1525]/40">
            <div className="px-6 py-4 border-b border-[#1a2640] bg-[#0F172A]/50">
              <h4 className="text-[14px] font-bold leading-[20px] tracking-[0.7px] uppercase align-middle text-white">
                Engagement Data Detail
              </h4>
            </div>
            
            {/* Added overflow-x-auto for responsiveness */}
            <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-[#1a2640] scrollbar-track-transparent">
              <table className="w-full border-collapse bg-[#1c2533] min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-700">
                    {[
                      "Date",
                      "Total Sessions",
                      "Active Sessions",
                      "Avg. Completion %",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-6 py-4 text-[11px] uppercase tracking-widest text-[#5a7090] font-bold whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a2640]">
                  {[
                    { date: "14 Oct 2024", total: "152", active: "128", pct: 94 },
                    { date: "13 Oct 2024", total: "114", active: "98", pct: 88 },
                    { date: "12 Oct 2024", total: "108", active: "84", pct: 82 },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/[0.02] transition-colors border-b border-gray-700"
                    >
                      <td className="px-6 py-5 text-[14px] text-[#8899bb] border-b border-gray-700 whitespace-nowrap">
                        {row.date}
                      </td>
                      <td className="px-6 py-5 text-[15px] text-white font-bold tracking-tight border-b border-gray-700 whitespace-nowrap">
                        {row.total}
                      </td>
                      <td className="px-6 py-5 text-[14px] text-[#8899bb] border-b border-gray-700 whitespace-nowrap">
                        {row.active}
                      </td>
                      <td className="px-6 py-5 border-b border-gray-700 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <div className="h-1.5 w-32 rounded-full bg-[#1a2640] flex-shrink-0">
                            <div
                              className="h-full rounded-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                              style={{ width: `${row.pct}%` }}
                            />
                          </div>
                          <span className="text-[14px] font-bold text-[#10b981]">
                            {row.pct}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="w-full">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-5 px-1">
            <div className="flex items-center gap-3">
              <div className="w-[8px] h-[8px] rounded-full bg-[#10b981] pulse-dot shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <h3 className="text-[20px] font-bold text-white tracking-tight">
                Live Activity
              </h3>
            </div>
            <button className="text-[11px] font-extrabold text-[#2563eb] hover:text-[#00d4ff] transition-colors tracking-[0.1em] uppercase">
              See All
            </button>
          </div>

          {/* Activity Cards */}
          <div className="flex flex-col gap-3">
            {[
              {
                name: "Elena Rossi",
                type: "NEW SUBSCRIPTION",
                action: "Joined Pro Membership Plan",
                time: "2 minutes ago",
                loc: "LONDON, UK",
                img: "avatar1.jpg",
              },
              {
                name: "Marcus Chen",
                type: "ACTIVITY LOG",
                action: 'Completed "The Lumbar Deep Reset" Protocol',
                time: "15 minutes ago",
                loc: "LEVEL UP",
                img: "avatar2.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 rounded-[16px] border border-[#1a2640]/50 shadow-sm bg-[#1C2025]/50"
              >
                {/* Top Row: Avatar + Name + Time (Mobile) */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#1a2640]">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name}&background=1a2640&color=fff`;
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 sm:w-[120px] sm:flex-shrink-0">
                    <p className="text-[14px] font-bold text-white leading-tight">
                      {item.name}
                    </p>
                    <p className="text-[10px] font-bold tracking-wider text-[#5a7090] mt-0.5 uppercase">
                      {item.type}
                    </p>
                  </div>

                  {/* Time: Visible only on mobile here to save space */}
                  <div className="sm:hidden text-right">
                    <p className="text-[11px] text-[#5a7090] font-medium">
                      {item.time}
                    </p>
                  </div>
                </div>

                {/* Middle Column: Action Text */}
                <div className="flex-1 sm:px-4 border-l border-[#1a2640] sm:border-none pl-4 sm:pl-0">
                  <p className="text-[13px] sm:text-[14px] text-[#8899bb] font-medium leading-tight">
                    {item.action}
                  </p>
                </div>

                {/* Right Side: Status (Mobile: Stays bottom right or bottom left) */}
                <div className="flex justify-between items-center sm:block text-right flex-shrink-0 mt-1 sm:mt-0">
                  <p className="hidden sm:block text-[12px] text-[#5a7090] font-medium">
                    {item.time}
                  </p>
                  <p className="text-[11px] font-black text-[#10b981] tracking-[0.05em] sm:mt-0.5 uppercase bg-[#10b981]/10 sm:bg-transparent px-2 py-1 sm:p-0 rounded">
                    {item.loc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
