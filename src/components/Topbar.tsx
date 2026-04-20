/* eslint-disable @next/next/no-img-element */
"use client";
import { Search, Menu } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="flex items-center h-[80px] px-4 sm:px-8 lg:px-14 bg-bg-secondary font-['Inter',_sans-serif]">
      {/* Left */}
      <div className="flex items-center gap-3 flex-1">
        {/* Mobile menu */}
        <button onClick={onMenuClick} className="lg:hidden text-[#f8fafc]">
          <Menu size={22} />
        </button>

        {/* Search (now properly flexible) */}
        <div className="flex items-center gap-3 flex-1 min-w-0 bg-[rgba(17,24,39,0.8)]  rounded-2xl px-5 py-3">
          <Search size={20} className="text-[#64748b] shrink-0" />

          <input
            type="text"
            placeholder="Search analytics, users, or protocols..."
            className="flex-1 min-w-0 bg-transparent outline-none text-[14px] text-[#f8fafc] placeholder:text-[#64748b]"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 sm:gap-6 ml-4">
        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-[#3b82f6] hover:text-[#60a5fa]">
            <img
              src="/icons/bell.png"
              alt="Norifiaction Icon"
              className="w-[22px] h-[22px] object-cover"
            />
          </button>

          <button className="text-[#3b82f6] hover:text-[#60a5fa]">
            <img
              src="/icons/setting.svg"
              alt="Norifiaction Icon"
              className="w-[22px] h-[22px] object-cover"
            />
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-[34px] bg-white/10" />

        {/* User */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex flex-col items-end leading-tight">
            <span className="text-[15px] font-bold text-[#f8fafc]">
              Admin User
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#64748b]">
              System Overseer
            </span>
          </div>

          {/* Avatar */}
          <div className="w-[40px] h-[40px] rounded-full p-[2px] bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8]">
            <div className="w-full h-full rounded-full bg-[#1e293b] overflow-hidden">
              <img
                src="/adminLogo.png"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
