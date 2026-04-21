/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

import Link from "next/link";

import { Volume2, FileText, X } from "lucide-react";

export default function EditVideoPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#080C14] overflow-hidden">
      <div className="p-10 opacity-40 pointer-events-none select-none">
        <h2 className="text-[26px] font-black text-white mb-1 tracking-tight">
          Video Manager
        </h2>

        <p className="text-[14px] text-[#94A3B8] mb-8">
          Review and manage biomechanical movement assets.
        </p>

        <div className="rounded-2xl border border-[#1a2640] overflow-hidden bg-[#0F172A] h-[80vh]">
          <div className="p-8 space-y-4">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-full bg-[#1c2533] rounded-xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-md">
        <div className="w-full max-w-[500px] bg-[#0B1120] rounded-[32px] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/5 relative flex flex-col overflow-hidden">
          <Link
            href="/dashboard/video-manager"
            className="absolute top-8 right-8 text-[#475569] hover:text-white transition-colors"
          >
            <X size={20} />
          </Link>

          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-[#3d5070] mb-2 font-bold">
            <span className="text-[#475569]">Video Manager</span>

            <span>›</span>

            <span className="text-[#2DD4BF]">Edit Video</span>
          </div>

          <h2 className="text-[28px] font-black text-white mb-6 tracking-tighter">
            Edit Video
          </h2>

          <div
            className="rounded-[24px] overflow-hidden mb-6 relative bg-black shadow-2xl border border-white/5 shrink-0"
            style={{ aspectRatio: "16/10" }}
          >
            <img
              src="/nici.png"
              alt="Exercise"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] text-white/90 font-bold">
                  02:25
                </span>

                <div className="flex-1 h-[3px] rounded-full bg-white/20 relative">
                  <div className="absolute h-full w-[80%] rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2DD4BF] shadow-[0_0_10px_#2DD4BF]" />
                </div>

                <span className="text-[10px] text-white/90 font-bold">
                  04:50
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/icons/PlayVideo.svg"
                    alt="play"
                    className="w-8 h-8 cursor-pointer"
                  />

                  <img
                    src="/icons/Forward.svg"
                    alt="forward"
                    className="w-8 h-8 cursor-pointer"
                  />

                  <img
                    src="/icons/Backward.svg"
                    alt="backward"
                    className="w-8 h-8 cursor-pointer"
                  />
                </div>

                <Volume2
                  size={30}
                  className="text-[#2DD4BF] opacity-80 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 shrink-0">
            <button className="flex items-center justify-center py-3.5 rounded-2xl text-[14px] font-black text-white bg-[#A32D2D] hover:bg-red-700 transition-all shadow-lg">
              Delete
            </button>

            <button className="flex items-center justify-center py-3.5 rounded-2xl text-[14px] font-black text-white bg-[#3B82F6] hover:bg-blue-600 transition-all shadow-lg">
              Re-Upload
            </button>
          </div>

          <div className="rounded-[24px] bg-[#1C2025] p-6 flex-1 min-h-0">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-1.5 bg-[#2DD4BF]/10 rounded-md">
                <FileText size={16} className="text-[#2DD4BF]" />
              </div>

              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                Metadata & Tagging
              </span>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-[10px] uppercase tracking-[0.15em] text-[#475569] font-black mb-1.5 block">
                  Exercise ID
                </label>

                <input
                  defaultValue="EX-260009"
                  className="w-full px-5 py-3.5 text-[14px] bg-[#0F141F] border border-white/5 rounded-2xl text-[#94A3B8] font-bold outline-none focus:border-[#2DD4BF]/50"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.15em] text-[#475569] font-black mb-1.5 block">
                  Exercise Name
                </label>

                <input
                  defaultValue="Quadruped Thoracic Rotation"
                  className="w-full px-5 py-3.5 text-[14px] bg-[#0F141F] border border-white/5 rounded-2xl text-[#94A3B8] font-bold outline-none focus:border-[#2DD4BF]/50"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button className="text-[14px] font-black text-[#3B82F6] hover:text-blue-400 px-4">
                  Save Draft
                </button>

                <button className="px-8 py-3.5 rounded-2xl text-[14px] font-black text-white bg-[#3B82F6] shadow-blue-500/20 shadow-lg">
                  Publish Exercise
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
