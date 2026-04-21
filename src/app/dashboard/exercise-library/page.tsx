/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import {
  Edit2,
  Trash2,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
} from "lucide-react";

const stats = [
  {
    label: "Total Exercises",
    value: "2,854",
    icon: "Dumbmells.svg",
    bgImage: "exerciseBg.svg",
    bg: "#070B10",
    col: "#f59e0b",
  },
  {
    label: "published exercise",
    value: "412",
    icon: "Fire.svg",
    bgImage: "protocolBg.svg",
    bg: "#070B10",
    col: "#00d4ff",
  },

  {
    label: "Average Duration",
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
    bgImage: "usersBg.svg",
    bg: "#070B10",
    col: "#10b981",
  },
];

const exercises = [
  {
    id: "EX-260001",
    name: "Supine Pelvic Clocks",
    areas: ["Lower Back", "Shoulder", "Upper Back", "Middle Back", "Neck"],
    phases: ["Reset"],
    status: "Published",
  },
  {
    id: "EX-260002",
    name: "Thoracic Extension",
    areas: ["Lower Back", "Shoulder", "Upper Back", "Middle Back", "Neck"],
    phases: ["Reset", "Control"],
    status: "Published",
  },
  {
    id: "EX-260002",
    name: "Long-Lever Hamstring Bridge",
    areas: ["Lower Back", "Hamstrings", "Glutes", "Hips"],
    phases: ["Control", "Integrate"],
    status: "Drafted",
  },
  {
    id: "EX-260002",
    name: "Long-Lever Hamstring Bridge",
    areas: ["Lower Back", "Hamstrings", "Glutes", "Hips"],
    phases: ["Control", "Integrate"],
    status: "Published",
  },
];

export default function ExerciseLibraryPage() {
  return (
    <div className="fade-in font-[inter,sans-serif]">
      <div className="p-6 lg:pl-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[26px] font-extrabold text-white mb-1 tracking-tight">
              Exercise Library
            </h1>
            <p className="text-[13px] text-[#8899bb]">
              Manage the global database of biomechanical movements, protocols,
              and performance metrics.
            </p>
          </div>
          <Link
            href="/dashboard/exercise-library/add"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[16px] font-bold text-white no-underline transition-opacity hover:opacity-90 justify-center"
            style={{
              background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
              boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
            }}
          >
            Add New Exercise <CirclePlus size={20} />
          </Link>
        </div>

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
                  {/* <div
                    className="flex items-center justify-center gap-1 w-[64px] h-[26px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] rounded-full text-[14px] font-bold bg-[#E9FFF1] text-[#10b981]"
                    style={{ transform: "rotate(0deg)", opacity: 1 }}
                  >
                    <TrendingUp size={16} /> 12%
                  </div> */}
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

        {/* Filters Section */}
        <div
          className="rounded-xl  p-5 mb-4 shadow-2xl"
          style={{ background: "#181C21" }}
        >
          <div className="flex flex-wrap items-center gap-6">
            {/* Label with specific SVG icon */}
            <div className="flex items-center gap-2 text-[12px] text-[#94A3B8] font-black tracking-[0.15em]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              FILTERS
            </div>

            {/* Filter Selects */}
            {[
              ["BODY AREA", ["Shoulder", "Lower Back", "Hip"]],
              ["PHASE", ["Reset", "Control", "Integrate"]],
              ["EQUIPMENT", ["Bench", "None", "Dumbbell"]],
              ["STATUS", ["Published", "Drafted"]],
            ].map(([label, opts]) => (
              <div key={label as string} className="flex items-center gap-3">
                <span className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold whitespace-nowrap">
                  {label as string}
                </span>
                <div className="relative group">
                  <select className="pl-3 pr-10 py-2 text-[14px] bg-[#0d1525] rounded-2xl text-[#94A3B8] outline-none cursor-pointer appearance-none transition-all focus:border-[#00d4ff] hover:border-[#3d5070] min-w-[120px]">
                    {(opts as string[]).map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#5a7090] group-hover:text-[#00d4ff] transition-colors">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-right text-[12px] text-[#64748B] mt-3">
            Showing 1-4 of 16
          </p>
        </div>

        {/* Table Section */}
        <div
          className="rounded-xl overflow-hidden shadow-2xl"
          style={{ background: "#0f1729" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead>
                <tr className="border-b border-[#1a2640] bg-bg-secondary">
                  {[
                    "EXERCISE ID",
                    "EXERCISE NAME",
                    "BODY AREA",
                    "PHASE",
                    "EQUIPMENT",
                    "STATUS",
                    "ACTIONS",
                  ].map((h) => (
                    <th
                      key={h}
                      className={`text-left px-6 py-6 text-[12px] uppercase tracking-[0.15em] text-[#94A3B8] font-black ${h === "ACTIONS" ? "text-right" : ""}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#1c2533]">
                {exercises.map((ex, i) => (
                  <tr
                    key={i}
                    className="hover:bg-[#131d2e]/50 transition-all group"
                  >
                    <td className="px-6 py-6 text-[10px] text-[#94A3B8] tracking-wider">
                      {ex.id}
                    </td>
                    <td className="px-6 py-6 text-[14px] text-[#DFE2EA] font-bold whitespace-nowrap tracking-tight">
                      {ex.name}
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-wrap gap-2 max-w-[200px]">
                        {ex.areas.map((a) => (
                          <span
                            key={a}
                            className="px-3 py-1 rounded-full text-[10px]  text-black bg-[#2DD4BF] border border-[#19fb9b]/20"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex gap-2">
                        {ex.phases.map((p) => (
                          <span
                            key={p}
                            className="flex items-center justify-center w-[72px] h-[30px] gap-[2px] px-2 py-1 rounded-[18px] text-[#2DD4BF] bg-[#0d1525] opacity-100 text-[12px] shadow-[0px_2px_6px_0px_rgba(7,11,16,0.15),0px_4px_12px_0px_rgba(7,11,16,0.15)]"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex gap-2 text-[#19fb9b] opacity-80 group-hover:opacity-100 transition-opacity">
                        {/* Replace with your local SVG icons */}
                        <img
                          src="/icons/mat.svg"
                          className="w-6 h-6"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px] ${ex.status === "Published" ? "bg-[#10b981] shadow-[#10b981]" : "bg-[#3d5070] "}`}
                        />
                        <span
                          className={`text-[12px] font-bold  ${ex.status === "Published" ? "text-[#10b981]" : "text-[#5a7090]"}`}
                        >
                          {ex.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center justify-end gap-4">
                        <Link 
                        href="/dashboard/exercise-library/edit">
                        <button className="text-[#5a7090] hover:text-[#00d4ff] transition-all p-1 hover:bg-[#00d4ff]/10 rounded-md">
                          <img
                            src="/icons/Edit.svg"
                            className="w-5 h-5"
                            alt="Edit"
                          />
                        </button>
                        </Link>
                        <button className="text-[#5a7090] hover:text-[#ef4444] transition-all p-1 hover:bg-[#ef4444]/10 rounded-md">
                          <img
                            src="/icons/Delete.svg"
                            className="w-5 h-5"
                            alt="Delete"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-[#1a2640] bg-bg-secondary">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest text-[#64748B] hover:text-[#00d4ff] transition-all border border-transparent hover:border-[#00d4ff]/30">
              <ChevronLeft size={14} /> Previous
            </button>
            <div className="flex items-center gap-2">
              {[1, 2, 3, "…", 12].map((n, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-lg text-[11px] font-black transition-all 
          ${n === 1 ? "bg-[#22D3EE] text-white shadow-[0_0_15px_rgba(0,212,255,0.4)]" : "bg-transparent border-transparent text-[#94A3B8] hover:text-[#00d4ff]"}`}
                >
                  {n}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest text-[#64748B] hover:text-[#00d4ff] transition-all border border-transparent hover:border-[#00d4ff]/30">
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
