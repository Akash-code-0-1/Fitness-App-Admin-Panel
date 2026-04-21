/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Calendar,
  ChevronDown,
} from "lucide-react";

const users = [
  {
    name: "Olivia Katherine Montgo",
    email: "olivia.katherine.montgomery@example...",
    joined: "12 Jan 2026",
    protocol: "The Lower Back Ache Full...",
    count: 4,
    status: "Active",
    sessions: 42,
  },
  {
    name: "Olivia Katherine Mont...",
    email: "olivia.katherine.montgomery@example...",
    joined: "12 Jan 2026",
    protocol: "The Lower Back Ache Full...",
    count: 4,
    status: "Expiring Soon",
    sessions: 42,
  },
  {
    name: "Olivia Katherine Mont...",
    email: "olivia.katherine.montgomery@example...",
    joined: "12 Jan 2026",
    protocol: "The Lower Back Ache Full...",
    count: 4,
    status: "Expired",
    sessions: 42,
  },
  {
    name: "Ethan Alexander Broo...",
    email: "ethan.alexander.brookshire...",
    joined: "18 Jan 2026",
    protocol: "The QL Deep Reset",
    count: 2,
    status: "Expiring Soon",
    sessions: 36,
  },
  {
    name: "Ethan Alexander Broo...",
    email: "ethan.alexander.brookshire...",
    joined: "18 Jan 2026",
    protocol: "The QL Deep Reset",
    count: 2,
    status: "Expiring Soon",
    sessions: 36,
  },
  {
    name: "Ethan Alexander Broo...",
    email: "ethan.alexander.brookshire...",
    joined: "18 Jan 2026",
    protocol: "The QL Deep Reset",
    count: 2,
    status: "Expired",
    sessions: 36,
  },
  {
    name: "Sophia Elizabeth Harri...",
    email: "sophia.elizabeth.harrington...",
    joined: "25 Jan 2026",
    protocol: "The Hip Flexor Strength F...",
    count: 4,
    status: "Active",
    sessions: 42,
  },
  {
    name: "Sophia Elizabeth Harri...",
    email: "sophia.elizabeth.harrington...",
    joined: "25 Jan 2026",
    protocol: "The Hip Flexor Strength F...",
    count: 4,
    status: "Active",
    sessions: 42,
  },
  {
    name: "Liam Jonathan Wellin...",
    email: "liam.jonathan.wellington@ex...",
    joined: "25 Jan 2026",
    protocol: "The Hip Flexor Strength F...",
    count: 4,
    status: "Expired",
    sessions: 42,
  },
  {
    name: "Liam Jonathan Wellin...",
    email: "liam.jonathan.wellington@ex...",
    joined: "25 Jan 2026",
    protocol: "The Hip Flexor Strength F...",
    count: 4,
    status: "Active",
    sessions: 42,
  },
];

const statusStyles: Record<string, string> = {
  Active: "text-[#10b981]",
  "Expiring Soon": "text-[#f59e0b]",
  Expired: "text-[#ef4444]",
};

export default function UserManagementPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white font-['Inter',_sans-serif] overflow-x-hidden">
      <div className="p-4 sm:p-8 lg:p-10">
        <div className="mb-6 sm:mb-10">
          <h1 className="text-[24px] sm:text-[32px] font-black text-white mb-2 tracking-tighter">
            User Management
          </h1>
          <p className="text-[13px] sm:text-[14px] text-[#94A3B8] font-medium leading-relaxed">
            Manage clients, monitor protocols, and track performance metrics.
          </p>
        </div>

        {/* --- UPDATED FILTERS --- */}
        <div
          className="rounded-xl p-5 mb-4 shadow-2xl"
          style={{ background: "#181C21" }}
        >
          <div className="flex flex-wrap items-center gap-6">
            {/* Filter Label */}
            <div className="flex items-center gap-2 text-[12px] text-[#94A3B8] font-black tracking-[0.15em] uppercase">
              <Filter size={20} strokeWidth={3} />
              FILTERS
            </div>

            {/* Email/Name Input */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold whitespace-nowrap">
                Email ID/Name
              </span>
              <input
                defaultValue="olivia.katherine.montgomery..."
                className="px-4 py-2 text-[14px] bg-[#0d1525] rounded-2xl text-[#94A3B8] outline-none border-none w-full sm:w-[220px] focus:ring-1 focus:ring-[#00d4ff] transition-all"
              />
            </div>

            {/* Join Date Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold whitespace-nowrap">
                Join Date
              </span>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-between gap-4 px-4 py-2 bg-[#0d1525] rounded-2xl text-[14px] text-[#94A3B8] cursor-pointer hover:border-[#3d5070] transition-all min-w-[130px]">
                  10/14/25
                  <Calendar size={18} />
                </div>
                <span className="text-[12px] text-[#64748B]">to</span>
                <div className="flex items-center justify-between gap-4 px-4 py-2 bg-[#0d1525] rounded-2xl text-[14px] text-[#94A3B8] cursor-pointer hover:border-[#3d5070] transition-all min-w-[130px]">
                  10/14/25
                  <Calendar size={18} />
                </div>
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold whitespace-nowrap">
                Status
              </span>
              <div className="relative group">
                <select className="pl-3 pr-10 py-2 text-[14px] bg-[#0d1525] rounded-2xl text-[#94A3B8] outline-none cursor-pointer appearance-none transition-all focus:ring-1 focus:ring-[#00d4ff] hover:border-[#3d5070] min-w-[140px]">
                  <option>Expiring Soon</option>
                  <option>Active</option>
                  <option>Expired</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#5a7090] group-hover:text-[#00d4ff] transition-colors">
                  <ChevronDown size={14} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-right text-[14px] text-[#64748B] mt-3">
            Showing <span className="text-[#94A3B8]">1-10</span> of 9,546
          </p>
        </div>

        {/* --- MOBILE RESPONSIVE TABLE CONTAINER --- */}
        {/* --- UPDATED USER TABLE --- */}
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[1100px]">
              <thead>
                <tr className="bg-bg-secondary">
                  {[
                    "Name",
                    "Email",
                    "Join Date",
                    "Current Protocol",
                    "Total",
                    "Status",
                    "Sessions",
                    "Actions",
                  ].map((header) => (
                    <th
                      key={header}
                      className={`px-6 py-6 text-[12px] font-black uppercase tracking-[0.15em] text-[#94A3B8] ${header === "Actions" ? "text-right" : ""}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#1c2533]">
                {users.map((user, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#131d2e]/50 transition-all group border-b border-[#1a2640] last:border-0"
                  >
                    <td className="px-6 py-6 text-[14px] font-bold text-[#DFE2EA] whitespace-nowrap tracking-tight">
                      <Link
                        href="/dashboard/user-management/edit"
                        className="hover:text-[#00d4ff] transition-colors"
                      >
                        {user.name}
                      </Link>
                    </td>
                    <td className="px-6 py-6 text-[13px] text-[#8899bb] max-w-[200px] truncate">
                      {user.email}
                    </td>
                    <td className="px-6 py-6 text-[13px] text-[#8899bb] whitespace-nowrap">
                      {user.joined}
                    </td>
                    <td className="px-6 py-6 text-[13px] text-[#8899bb] whitespace-nowrap">
                      {user.protocol}
                    </td>
                    <td className="px-6 py-6 text-[14px] font-bold text-[#94A3B8] text-center">
                      {user.count}
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {/* Dot indicator to match video manager style */}
                        <div
                          className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px] current-color ${
                            user.status === "Active"
                              ? "bg-[#10b981] shadow-[#10b981]/50"
                              : user.status === "Expired"
                                ? "bg-[#ef4444] shadow-[#ef4444]/50"
                                : "bg-[#f59e0b] shadow-[#f59e0b]/50"
                          }`}
                        />
                        <span
                          className={`text-[12px] font-black uppercase tracking-wider ${statusStyles[user.status]}`}
                        >
                          {user.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-[14px] font-black text-[#10B981] text-center">
                      {user.sessions}
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex items-center justify-end gap-4">
                        <Link
                          href="/dashboard/user-management/edit">
                        <button className="text-[#5a7090] hover:text-[#00d4ff] transition-all p-1 hover:bg-[#00d4ff]/10 rounded-md">
                          <img
                            src="/icons/Edit.svg"
                            className="w-6 h-6"
                            alt="Edit"
                          />
                        </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination (Full Style Match) */}
          <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between bg-bg-secondary gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest text-[#64748B] hover:text-[#00d4ff] transition-all border border-transparent hover:border-[#00d4ff]/30">
              <ChevronLeft size={14} /> Previous
            </button>

            <div className="flex items-center gap-2">
              {[1, 2, 3, "...", 955].map((page, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-lg text-[11px] font-black transition-all ${
                    page === 1
                      ? "bg-[#22D3EE] text-white shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                      : "bg-transparent border-transparent text-[#94A3B8] hover:text-[#00d4ff]"
                  }`}
                >
                  {page}
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
