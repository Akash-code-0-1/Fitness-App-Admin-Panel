'use client';
import { useState } from 'react';
import Link from 'next/link';
import StatusBar from '@/components/StatusBar';
import { TrendingUp, Plus, Edit2, Trash2, Activity, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const protocols = [
  { id: '001', name: 'The Rotator Cuff Reset', dur: '15m', active: true },
  { id: '002', name: 'The Lower Back Performance Flow', dur: '30m', active: true },
  { id: '003', name: 'The Lower Back Deep Performance', dur: '45m', active: true },
  { id: '004', name: 'The Rotator Cuff Reset', dur: '60m', active: false },
  { id: '005', name: 'The Hip Rotation Deep Performance', dur: '45m', active: true },
  { id: '006', name: 'The Hip Flexor Strength Full Build', dur: '30m', active: false },
  { id: '007', name: 'The Upper Back Ache Full Protocol', dur: '30m', active: false },
  { id: '008', name: 'The Shoulder ER Reset', dur: '15m', active: true },
];

function Toggle({ on, toggle }: { on: boolean; toggle: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={toggle}
        className={`w-9 h-5 rounded-full relative transition-colors duration-200 border-none p-0 flex-shrink-0
          ${on ? 'bg-[#10b981]' : 'bg-[#1a2640]'}`}>
        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-200 ${on ? 'left-[17px]' : 'left-0.5'}`} />
      </button>
      <span className={`text-[11px] font-bold uppercase tracking-wider ${on ? 'text-[#10b981]' : 'text-[#3d5070]'}`}>
        {on ? 'Active' : 'Inactive'}
      </span>
    </div>
  );
}

export default function ProtocolManagerPage() {
  const [items, setItems] = useState(protocols);
  const toggle = (id: string) => setItems(p => p.map(x => x.id === id ? { ...x, active: !x.active } : x));

  return (
    <div className="fade-in">
      <div className="p-6 lg:pl-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[26px] font-extrabold text-white mb-1 tracking-tight">Protocol Manager</h1>
            <p className="text-[13px] text-[#8899bb]">Design and oversee corrective movement sequences.</p>
          </div>
          <Link href="/dashboard/protocol-manager/create"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-bold text-white no-underline flex-shrink-0 transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#2563eb)', boxShadow: '0 4px 16px rgba(37,99,235,0.35)' }}>
            <Plus size={15} /> Create New Protocol
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Protocols', value: '412', icon: Activity, bg: 'rgba(0,212,255,0.08)', col: '#00d4ff' },
            { label: 'Total Exercises', value: '2,854', icon: Activity, bg: 'rgba(16,185,129,0.08)', col: '#10b981' },
            { label: 'Average Duration', value: '18 Min', icon: Clock, bg: 'rgba(124,58,237,0.08)', col: '#7c3aed' },
            { label: 'Active Users', value: '8,912', icon: Users, bg: 'rgba(245,158,11,0.08)', col: '#f59e0b' },
          ].map(({ label, value, icon: Icon, bg, col }) => (
            <div key={label} className="rounded-xl p-5 border border-[#1a2640] relative overflow-hidden" style={{ background: '#0f1729' }}>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                  <Icon size={17} style={{ color: col }} />
                </div>
                <span className="flex items-center gap-1 text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 rounded-full px-2 py-0.5">
                  <TrendingUp size={9} />12%
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.1em] text-[#5a7090] font-semibold mb-1">{label}</p>
              <p className="text-[28px] font-extrabold text-white tracking-tight leading-none">{value}</p>
            </div>
          ))}
        </div>

        {/* Table card */}
        <div className="rounded-xl border border-[#1a2640] overflow-hidden" style={{ background: '#0f1729' }}>
          <div className="px-5 py-4 border-b border-[#1a2640]">
            <h3 className="text-[16px] font-bold text-white">Manage Protocols</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#1a2640]">
                  <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold w-16">#</th>
                  <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold">Protocol Name</th>
                  <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold">Duration</th>
                  <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold">Status</th>
                  <th className="text-right px-5 py-3 text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map(p => (
                  <tr key={p.id} className="border-b border-[#1a2640] last:border-0 hover:bg-[#131d2e] transition-colors">
                    <td className="px-5 py-3.5 text-[13px] text-[#3d5070] font-mono">{p.id}</td>
                    <td className="px-5 py-3.5 text-[14px] font-semibold text-white">{p.name}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#8899bb]">{p.dur}</td>
                    <td className="px-5 py-3.5"><Toggle on={p.active} toggle={() => toggle(p.id)} /></td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-3">
                        <Link href="/dashboard/protocol-manager/edit" className="text-[#5a7090] hover:text-[#00d4ff] transition-colors">
                          <Edit2 size={15} />
                        </Link>
                        <button className="text-[#5a7090] hover:text-[#ef4444] transition-colors bg-transparent border-none p-0">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 flex items-center justify-between border-t border-[#1a2640]">
            <span className="text-[12px] text-[#3d5070]">Showing 1-8 of 124 protocols</span>
            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[12px] text-[#5a7090] hover:text-[#00d4ff] bg-transparent border border-[#1a2640] hover:border-[#00d4ff] transition-colors">
                <ChevronLeft size={13} /> Previous
              </button>
              {[1,2,3,'…',12].map((n,i) => (
                <button key={i} className={`w-7 h-7 rounded-md text-[12px] font-medium border transition-colors
                  ${n===1 ? 'bg-[#2563eb] border-[#2563eb] text-white' : 'bg-transparent border-[#1a2640] text-[#5a7090] hover:border-[#00d4ff] hover:text-[#00d4ff]'}`}>{n}</button>
              ))}
              <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[12px] text-[#5a7090] hover:text-[#00d4ff] bg-transparent border border-[#1a2640] hover:border-[#00d4ff] transition-colors">
                Next <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
