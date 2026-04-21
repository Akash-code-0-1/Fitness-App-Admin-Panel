/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import {
  TrendingUp,
  Plus,
  Edit2,
  Trash2,
  Activity,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
} from "lucide-react";

const protocols = [
  { id: "001", name: "The Rotator Cuff Reset", dur: "15m", active: true },
  {
    id: "002",
    name: "The Lower Back Performance Flow",
    dur: "30m",
    active: true,
  },
  {
    id: "003",
    name: "The Lower Back Deep Performance",
    dur: "45m",
    active: true,
  },
  { id: "004", name: "The Rotator Cuff Reset", dur: "60m", active: false },
  {
    id: "005",
    name: "The Hip Rotation Deep Performance",
    dur: "45m",
    active: true,
  },
  {
    id: "006",
    name: "The Hip Flexor Strength Full Build",
    dur: "30m",
    active: false,
  },
  {
    id: "007",
    name: "The Upper Back Ache Full Protocol",
    dur: "30m",
    active: false,
  },
  { id: "008", name: "The Shoulder ER Reset", dur: "15m", active: true },
];

const stats = [
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

function Toggle({ on, toggle }: { on: boolean; toggle: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggle}
        className={`w-9 h-5 rounded-full relative transition-colors duration-200 border-none p-0 flex-shrink-0
          ${on ? "bg-[#10b981]" : "bg-[#1a2640]"}`}
      >
        <div
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-200 ${on ? "left-[17px]" : "left-0.5"}`}
        />
      </button>
      <span
        className={`text-[11px] font-bold uppercase tracking-wider ${on ? "text-[#10b981]" : "text-[#3d5070]"}`}
      >
        {on ? "Active" : "Inactive"}
      </span>
    </div>
  );
}

export default function ProtocolManagerPage() {
  const [items, setItems] = useState(protocols);
  const toggle = (id: string) =>
    setItems((p) =>
      p.map((x) => (x.id === id ? { ...x, active: !x.active } : x)),
    );

  return (
    <div className="fade-in font-[inter,sans-serif]">
      <div className="p-6 lg:pl-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[26px] font-extrabold text-white mb-1 tracking-tight">
              Protocol Manager
            </h1>
            <p className="text-[13px] text-[#8899bb]">
              Design and oversee corrective movement sequences.
            </p>
          </div>
          <Link
            href="/dashboard/protocol-manager/create"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[16px] font-bold text-white no-underline transition-opacity hover:opacity-90 justify-center"
            style={{
              background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
              boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
            }}
          >
            Create New Protocol <CirclePlus size={20} /> 
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

        {/* Table card */}
        <div className="rounded-xl  overflow-hidden bg-bg-secondary">
          <div className="px-5 py-4 ">
            <h3 className="text-[16px] font-bold text-white">
              Manage Protocols
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#0F172A]">
                  <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.09em] text-[#64748B] font-semibold w-16">
                    #
                  </th>
                  <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.09em] text-[#64748B] font-semibold">
                    Protocol Name
                  </th>
                  <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.09em] text-[#64748B] font-semibold">
                    Duration
                  </th>
                  <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.09em] text-[#64748B] font-semibold">
                    Status
                  </th>
                  <th className="text-right px-5 py-3 text-[10px] uppercase tracking-[0.09em] text-[#64748B] font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((p) => (
                  <tr
                    key={p.id}
                    className=" hover:bg-[#0F172A] transition-colors"
                  >
                    <td className="px-5 py-3.5 text-[13px] text-[#3d5070] font-mono">
                      {p.id}
                    </td>
                    <td className="px-5 py-3.5 text-[14px] font-semibold text-white">
                      {p.name}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-[#94A3B8]">
                      {p.dur}
                    </td>
                    <td className="px-5 py-3.5">
                      <Toggle on={p.active} toggle={() => toggle(p.id)} />
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-3">
                        <Link
                          href="/dashboard/protocol-manager/edit"
                          className="text-[#5a7090] hover:text-[#00d4ff] transition-colors"
                        >
                          <img
                            src="/icons/Edit.svg"
                            alt="Edit"
                            className="w-[24px] h-[24px] object-contain"
                          />
                        </Link>
                        <button className="text-[#5a7090] hover:text-[#ef4444] transition-colors bg-transparent border-none p-0">
                          <img
                            src="/icons/Delete.svg"
                            alt="Delete"
                            className="w-[24px] h-[24px] object-contain"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 flex items-center justify-between border-t border-[#1a2640]">
            <span className="text-[12px] text-[#3d5070]">
              Showing 1-8 of 124 protocols
            </span>
            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[12px] text-[#5a7090] hover:text-[#00d4ff] bg-transparent transition-colors">
                <img
                  src="/icons/Arrow-Left.svg"
                  alt="Delete"
                  className="w-[24px] h-[24px] object-contain"
                />
              </button>
              {[1, 2, 3].map((n, i) => (
                <button
                  key={i}
                  className={`w-7 h-7 rounded-md text-[12px] font-medium transition-colors
                  ${n === 1 ? "bg-[#1E293B] border-none text-white" : "bg-transparent border-[#1a2640] text-[#5a7090]  hover:text-[#00d4ff]"}`}
                >
                  {n}
                </button>
              ))}
              <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[12px] text-[#5a7090] hover:text-[#00d4ff] bg-transparent transition-colors">
                <img
                  src="/icons/Arrow-Right.svg"
                  alt="Delete"
                  className="w-[24px] h-[24px] object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
