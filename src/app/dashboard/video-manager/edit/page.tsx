'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Play, SkipBack, SkipForward, Volume2, Trash2, Upload, FileText } from 'lucide-react';

export default function EditVideoPage() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="fade-in flex min-h-[calc(100vh-60px)] flex-col lg:flex-row">
      {/* Left — blurred context list */}
      <div className="flex-1 p-6 opacity-20 pointer-events-none select-none hidden lg:block overflow-hidden">
        <h2 className="text-[20px] font-bold text-white mb-1">Video Manager</h2>
        <p className="text-[12px] text-[#8899bb] mb-5">Review and manage biomechanical movement assets.</p>
        <div className="rounded-xl border border-[#1a2640] overflow-hidden" style={{ background:'#0f1729' }}>
          <div className="px-4 py-2.5 border-b border-[#1a2640]">
            <div className="grid grid-cols-3 gap-4">
              <span className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold">Exercise</span>
              <span className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold">Upload Date</span>
              <span className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold">Status</span>
            </div>
          </div>
          {['Supine Pelvic Clocks','Thoracic Extension','Long-Lever Hamstring Bridge','Long-Lever Hamstring Bridge','Long-Lever Hamstring Bridge','Long-Lever Hamstring Bridge','Long-Lever Hamstring Bridge','Long-Lever Hamstring Bridge'].map((n,i) => (
            <div key={i} className="grid grid-cols-3 gap-4 px-4 py-3 border-b border-[#1a2640] last:border-0">
              <span className="text-[13px] text-white font-semibold truncate">{n}</span>
              <span className="text-[12px] text-[#8899bb]">10/30/2025</span>
              <span className="text-[12px] text-[#10b981]">Uploaded</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Edit panel */}
      <div className="w-full lg:w-[450px] bg-[#0b1120] border-t lg:border-t-0 lg:border-l border-[#1a2640] p-6 overflow-y-auto flex-shrink-0">
        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.09em] text-[#3d5070] mb-1.5">
          <Link href="/dashboard/video-manager" className="hover:text-[#8899bb] transition-colors text-[#3d5070] no-underline">Video Manager</Link>
          <span>›</span>
          <span className="text-[#00d4ff]">Edit Video</span>
        </div>
        <h2 className="text-[22px] font-extrabold text-white mb-5 tracking-tight">Edit Video</h2>

        {/* Video Player */}
        <div className="rounded-xl overflow-hidden mb-4 relative" style={{ aspectRatio:'16/9', background:'linear-gradient(135deg,#0d1f2d,#091525)' }}>
          {/* Placeholder frame */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center opacity-20">
              <div className="text-6xl mb-2">🏃</div>
            </div>
          </div>

          {/* Video controls */}
          <div className="absolute bottom-0 inset-x-0 p-3" style={{ background:'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
            {/* Progress */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] text-white/80 font-mono">02:25</span>
              <div className="flex-1 h-1 rounded-full cursor-pointer" style={{ background:'rgba(255,255,255,0.2)' }}>
                <div className="h-full w-[46%] rounded-full" style={{ background:'linear-gradient(to right,#00d4ff,#2563eb)' }} />
              </div>
              <span className="text-[11px] text-white/80 font-mono">04:50</span>
            </div>
            {/* Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button onClick={() => setPlaying(!playing)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white border border-white/60 hover:border-white bg-transparent transition-colors">
                  {playing ? <span className="text-[10px]">⏸</span> : <Play size={12} fill="white" />}
                </button>
                <button className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 border border-white/30 hover:border-white/60 bg-transparent transition-colors">
                  <SkipBack size={11} />
                </button>
                <button className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 border border-white/30 hover:border-white/60 bg-transparent transition-colors">
                  <SkipForward size={11} />
                </button>
              </div>
              <button className="text-white/60 hover:text-white bg-transparent border-none transition-colors">
                <Volume2 size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Delete / Re-upload */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-[13px] font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] border-none transition-colors">
            <Trash2 size={14} /> Delete
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-[13px] font-bold text-white border-none hover:opacity-90 transition-opacity"
            style={{ background:'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>
            <Upload size={14} /> Re-Upload
          </button>
        </div>

        {/* Metadata */}
        <div className="rounded-xl border border-[#1a2640] p-4" style={{ background:'#0f1729' }}>
          <div className="flex items-center gap-2 mb-4">
            <FileText size={13} className="text-[#00d4ff]" />
            <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#00d4ff]">Metadata &amp; Tagging</span>
          </div>
          <div className="mb-3">
            <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Exercise ID</p>
            <input defaultValue="EX-260009" className="w-full px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white font-mono focus:border-[#00d4ff] outline-none" />
          </div>
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Exercise Name</p>
            <input defaultValue="Quadruped Thoracic Rotation" className="w-full px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none" />
          </div>
          <div className="flex items-center justify-between">
            <button className="text-[13px] font-semibold text-[#00d4ff] hover:text-[#60d9ff] bg-transparent border-none transition-colors">Save Draft</button>
            <button className="px-4 py-2 rounded-lg text-[13px] font-bold text-white border-none hover:opacity-90 transition-opacity"
              style={{ background:'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>Publish Exercise</button>
          </div>
        </div>
      </div>
    </div>
  );
}
