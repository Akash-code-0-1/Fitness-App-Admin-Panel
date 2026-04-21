/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import { Trash2, ChevronLeft, ChevronRight, CirclePlus } from "lucide-react";

const videos = [
  {
    id: "EX-260001",
    name: "Supine Pelvic Clocks",
    size: "248.5 MB",
    date: "10/30/2025",
    status: "Uploaded",
  },
  {
    id: "EX-260002",
    name: "Thoracic Extension",
    size: "248.5 MB",
    date: "10/30/2025",
    status: "Uploaded",
  },
  {
    id: "EX-260002",
    name: "Long-Lever Hamstring Bridge",
    size: "248.5 MB",
    date: "10/30/2025",
    status: "Uploaded",
  },
  {
    id: "EX-260002",
    name: "Long-Lever Hamstring Bridge",
    size: "248.5 MB",
    date: "10/30/2025",
    status: "Processing",
  },
  {
    id: "EX-260002",
    name: "Long-Lever Hamstring Bridge",
    size: "248.5 MB",
    date: "10/30/2025",
    status: "Processing",
  },
  {
    id: "EX-260002",
    name: "Long-Lever Hamstring Bridge",
    size: "248.5 MB",
    date: "10/30/2025",
    status: "Error",
  },
  {
    id: "EX-260002",
    name: "Long-Lever Hamstring Bridge",
    size: "248.5 MB",
    date: "10/30/2025",
    status: "Error",
  },
];

const statusStyle: Record<string, string> = {
  Uploaded: "text-[#10b981]",
  Processing: "text-[#f59e0b]",
  Error: "text-[#ef4444]",
};
const dotStyle: Record<string, string> = {
  Uploaded: "bg-[#10b981]",
  Processing: "bg-[#f59e0b]",
  Error: "bg-[#ef4444]",
};

export default function VideoManagerPage() {
  return (
    <div className="fade-in">
      <div className="p-6 lg:pl-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[26px] font-extrabold text-white mb-1 tracking-tight">
              Video Manager
            </h1>
            <p className="text-[13px] text-[#8899bb]">
              Review and manage biomechanical movement assets.
            </p>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[16px] font-bold text-white flex-shrink-0 hover:opacity-90 transition-opacity border-none"
            style={{
              background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
              boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
            }}
          >
            Upload New Video <CirclePlus size={20} />
          </button>
        </div>

        {/* Filters */}
        <div
          className="rounded-xl p-5 mb-4 shadow-2xl"
          style={{ background: "#181C21" }}
        >
          <div className="flex flex-wrap items-center gap-6">
            {/* Label with specific SVG icon */}
            <div className="flex items-center gap-2 text-[12px] text-[#94A3B8] font-black tracking-[0.15em]">
              <svg
                width="20"
                height="20"
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

            {/* Exercise ID/Name Filter */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold whitespace-nowrap">
                Exercise ID/Name
              </span>
              <input
                defaultValue="Long-Lever Hamstring Bridge"
                className="px-4 py-2 text-[14px] bg-[#0d1525] rounded-2xl text-[#94A3B8] outline-none border-none w-[220px] focus:ring-1 focus:ring-[#00d4ff] transition-all"
              />
            </div>

            {/* Upload Date Filter */}
            {/* Upload Date Filter */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold whitespace-nowrap">
                Upload Date
              </span>
              <div className="flex items-center justify-between gap-4 px-4 py-2 bg-[#0d1525] rounded-2xl text-[14px] text-[#94A3B8] cursor-pointer hover:border-[#3d5070] transition-all min-w-[140px]">
                10/30/2025
                <img src="/icons/date.svg" alt="Calendar" className="w-5 h-5" />
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold whitespace-nowrap">
                Status
              </span>
              <div className="relative group">
                <select className="pl-3 pr-10 py-2 text-[14px] bg-[#0d1525] rounded-2xl text-[#94A3B8] outline-none cursor-pointer appearance-none transition-all focus:border-[#00d4ff] hover:border-[#3d5070] min-w-[120px]">
                  <option>Published</option>
                  <option>Uploaded</option>
                  <option>Processing</option>
                  <option>Error</option>
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
          </div>
          <p className="text-right text-[14px] text-[#64748B] mt-3">
            Showing 1-4 of 16
          </p>
        </div>

        {/* Video Manager Table */}
        <div className="rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead>
                <tr className="border-b border-[#1a2640] bg-bg-secondary">
                  {[
                    "EXERCISE ID",
                    "EXERCISE NAME",
                    "FILE SIZE",
                    "UPLOAD DATE",
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
                {videos.map((v, i) => (
                  <tr
                    key={i}
                    className="hover:bg-[#131d2e]/50 transition-all group border-b border-[#1a2640] last:border-0"
                  >
                    {/* First Column Style */}
                    <td className="px-6 py-6 text-[12px] text-[#94A3B8] tracking-wider">
                      {v.id}
                    </td>
                    {/* Second Column Style */}
                    <td className="px-6 py-6 text-[14px] text-[#DFE2EA] font-bold whitespace-nowrap tracking-tight">
                      <Link
                        href="/dashboard/video-manager/edit"
                        className="hover:text-[#00d4ff] transition-colors no-underline text-[#DFE2EA]"
                      >
                        {v.name}
                      </Link>
                    </td>
                    <td className="px-6 py-6 text-[13px] text-[#8899bb]">
                      {v.size}
                    </td>
                    <td className="px-6 py-6 text-[13px] text-[#8899bb]">
                      {v.date}
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px] ${dotStyle[v.status] || "bg-[#3d5070]"}`}
                        />
                        <span
                          className={`text-[12px] font-medium ${statusStyle[v.status] || "text-[#5a7090]"}`}
                        >
                          {v.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex items-center justify-end gap-4">
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

          {/* Pagination (Full Style Match) */}
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
