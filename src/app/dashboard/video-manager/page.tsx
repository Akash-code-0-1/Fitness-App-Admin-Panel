'use client';
import Link from 'next/link';
import StatusBar from '@/components/StatusBar';
import { Plus, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  { id:'EX-260001', name:'Supine Pelvic Clocks', size:'248.5 MB', date:'10/30/2025', status:'Uploaded' },
  { id:'EX-260002', name:'Thoracic Extension', size:'248.5 MB', date:'10/30/2025', status:'Uploaded' },
  { id:'EX-260002', name:'Long-Lever Hamstring Bridge', size:'248.5 MB', date:'10/30/2025', status:'Uploaded' },
  { id:'EX-260002', name:'Long-Lever Hamstring Bridge', size:'248.5 MB', date:'10/30/2025', status:'Processing' },
  { id:'EX-260002', name:'Long-Lever Hamstring Bridge', size:'248.5 MB', date:'10/30/2025', status:'Processing' },
  { id:'EX-260002', name:'Long-Lever Hamstring Bridge', size:'248.5 MB', date:'10/30/2025', status:'Error' },
  { id:'EX-260002', name:'Long-Lever Hamstring Bridge', size:'248.5 MB', date:'10/30/2025', status:'Error' },
];

const statusStyle: Record<string, string> = {
  Uploaded: 'text-[#10b981]',
  Processing: 'text-[#f59e0b]',
  Error: 'text-[#ef4444]',
};
const dotStyle: Record<string, string> = {
  Uploaded: 'bg-[#10b981]',
  Processing: 'bg-[#f59e0b]',
  Error: 'bg-[#ef4444]',
};

export default function VideoManagerPage() {
  return (
    <div className="fade-in">
      <div className="p-6 lg:pl-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[26px] font-extrabold text-white mb-1 tracking-tight">Video Manager</h1>
            <p className="text-[13px] text-[#8899bb]">Review and manage biomechanical movement assets.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-bold text-white flex-shrink-0 hover:opacity-90 transition-opacity border-none"
            style={{ background:'linear-gradient(135deg,#0ea5e9,#2563eb)', boxShadow:'0 4px 16px rgba(37,99,235,0.35)' }}>
            <Plus size={15} /> Upload New Video
          </button>
        </div>

        {/* Filters */}
        <div className="rounded-xl border border-[#1a2640] p-4 mb-4" style={{ background:'#0f1729' }}>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-[12px] text-[#5a7090] font-bold">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              FILTERS
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold whitespace-nowrap">Exercise ID/Name</span>
              <input defaultValue="Long-Lever Hamstring Bridge" className="px-3 py-1.5 text-[12px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white outline-none w-[200px] focus:border-[#00d4ff]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold whitespace-nowrap">Upload Date</span>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0d1525] border border-[#1a2640] rounded-lg text-[12px] text-[#8899bb] cursor-pointer hover:border-[#00d4ff] transition-colors">
                10/30/2025 <span className="text-[#3d5070]">📅</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold">Status</span>
              <select className="px-3 py-1.5 text-[12px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white outline-none cursor-pointer appearance-none focus:border-[#00d4ff]">
                <option>Published</option><option>Uploaded</option><option>Processing</option><option>Error</option>
              </select>
            </div>
          </div>
          <p className="text-right text-[12px] text-[#3d5070] mt-2">Showing 1-4 of 16</p>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-[#1a2640] overflow-hidden" style={{ background:'#0f1729' }}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#1a2640]">
                  {['Exercise ID','Exercise Name','File Size','Upload Date','Status','Actions'].map(h => (
                    <th key={h} className={`text-left px-4 py-3 text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold ${h==='Actions'?'text-right':''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {videos.map((v,i) => (
                  <tr key={i} className="border-b border-[#1a2640] last:border-0 hover:bg-[#131d2e] transition-colors">
                    <td className="px-4 py-3.5 text-[12px] text-[#3d5070] font-mono">{v.id}</td>
                    <td className="px-4 py-3.5">
                      <Link href="/dashboard/video-manager/edit" className="text-[14px] font-bold text-white hover:text-[#00d4ff] transition-colors no-underline">
                        {v.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3.5 text-[13px] text-[#8899bb]">{v.size}</td>
                    <td className="px-4 py-3.5 text-[13px] text-[#8899bb]">{v.date}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${dotStyle[v.status]}`} />
                        <span className={`text-[12px] font-semibold ${statusStyle[v.status]}`}>{v.status}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <button className="text-[#5a7090] hover:text-[#ef4444] transition-colors bg-transparent border-none p-0">
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 flex items-center justify-between border-t border-[#1a2640]">
            <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[12px] text-[#5a7090] hover:text-[#00d4ff] bg-transparent border border-[#1a2640] hover:border-[#00d4ff] transition-colors">
              <ChevronLeft size={13} /> Previous
            </button>
            <div className="flex items-center gap-1.5">
              {[1,2,3,'…',12].map((n,i) => (
                <button key={i} className={`w-7 h-7 rounded-md text-[12px] font-medium border transition-colors
                  ${n===1?'bg-[#2563eb] border-[#2563eb] text-white':'bg-transparent border-[#1a2640] text-[#5a7090] hover:border-[#00d4ff] hover:text-[#00d4ff]'}`}>{n}</button>
              ))}
            </div>
            <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[12px] text-[#5a7090] hover:text-[#00d4ff] bg-transparent border border-[#1a2640] hover:border-[#00d4ff] transition-colors">
              Next <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
