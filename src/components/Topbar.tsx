/* eslint-disable @next/next/no-img-element */
"use client";
import { Search, Menu } from "lucide-react";

export default function Topbar({ onMenu }: { onMenu?: () => void }) {
  return (
    <header className="flex items-center h-[80px] px-4 sm:px-8 lg:px-14 bg-bg-secondary font-['Inter',_sans-serif]">
      {/* Left Section */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button onClick={onMenu} className="lg:hidden text-[#f8fafc] shrink-0">
          <Menu size={22} />
        </button>

        <div className="flex items-center gap-3 flex-1 min-w-0 bg-[rgba(17,24,39,0.8)] rounded-2xl px-5 py-3">
          <Search size={20} className="text-[#64748b] shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 min-w-0 bg-transparent outline-none text-[14px] text-[#f8fafc] placeholder:text-[#64748b]"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-6 ml-3 sm:ml-4 shrink-0">
        {/* Icons - Hidden on very small mobile to save space, or kept as icons */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button className="text-[#3b82f6] hover:text-[#60a5fa]">
            <img src="/icons/bell.png" alt="Bell" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" />
          </button>
          <button className="text-[#3b82f6] hover:text-[#60a5fa]">
            <img src="/icons/setting.svg" alt="Settings" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" />
          </button>
        </div>

        <div className="w-px h-[34px] bg-white/10 shrink-0" />

        {/* User Section - Removed 'hidden' so it shows on mobile */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Labels - Hidden on mobile, shown from 'sm' (640px) up */}
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="text-[15px] font-bold text-[#f8fafc]">Admin User</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#64748b]">System Overseer</span>
          </div>

          {/* Avatar - Always visible */}
          <div className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] rounded-full p-[2px] bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] shrink-0">
            <div className="w-full h-full rounded-full bg-[#1e293b] overflow-hidden">
              <img src="/adminLogo.png" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}