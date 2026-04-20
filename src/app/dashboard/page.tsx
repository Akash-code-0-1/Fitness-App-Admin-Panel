'use client';
import { useState } from 'react';
import StatusBar from '@/components/StatusBar';
import { Users, Activity, Layers, TrendingUp } from 'lucide-react';

const bars = [42, 68, 38, 55, 48, 72, 58, 82, 46, 65, 38, 60, 44, 152];
const xLabels = ['01 OCT','02 OCT','03 OCT','04 OCT','05 OCT','06 OCT','07 OCT','08 OCT','09 OCT','10 OCT','11 OCT','12 OCT','13 OCT','14 OCT'];

export default function DashboardPage() {
  const [period, setPeriod] = useState('Weekly');
  const maxBar = Math.max(...bars);

  return (
    <div className="fade-in">
      <div className="p-6 lg:pl-10">
        <h1 className="text-[26px] font-extrabold text-white mb-1 tracking-tight">Dashboard Home</h1>
        <p className="text-[13px] text-[#8899bb] mb-6">Visualizing movement integrity and platform growth monitoring across the Body Axis ecosystem.</p>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Users', value: '14,285', icon: Users, bg: 'rgba(0,212,255,0.08)', col: '#00d4ff' },
            { label: 'Active Users', value: '8,912', icon: Users, bg: 'rgba(16,185,129,0.08)', col: '#10b981' },
            { label: 'Total Protocols', value: '412', icon: Activity, bg: 'rgba(124,58,237,0.08)', col: '#7c3aed' },
            { label: 'Total Exercises', value: '2,854', icon: Layers, bg: 'rgba(245,158,11,0.08)', col: '#f59e0b' },
          ].map(({ label, value, icon: Icon, bg, col }) => (
            <div key={label} className="rounded-xl p-5 border border-[#1a2640] relative overflow-hidden" style={{ background: '#0f1729' }}>
              <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.04) 0%, transparent 60%)' }} />
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                    <Icon size={18} style={{ color: col }} />
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#10b981]/10 text-[#10b981]">
                    <TrendingUp size={9} /> 12%
                  </div>
                </div>
                <p className="text-[10px] uppercase tracking-[0.1em] text-[#5a7090] font-semibold mb-1">{label}</p>
                <p className="text-[28px] font-extrabold text-white tracking-tight leading-none">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart card */}
        <div className="rounded-xl border border-[#1a2640] p-5 mb-5" style={{ background: '#0f1729' }}>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
            <div>
              <h3 className="text-[17px] font-bold text-white mb-1">Engagement Velocity</h3>
              <p className="text-[12px] text-[#5a7090]">Global mobility session distribution on a day basis</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-2 bg-[#0d1525] border border-[#1a2640] rounded-lg px-3 py-1.5 text-[12px] text-[#5a7090] whitespace-nowrap">
                📅 10/14/2024 to 10/14/2024
              </div>
              <div className="flex bg-[#0d1525] border border-[#1a2640] rounded-lg overflow-hidden">
                {['Daily','Weekly','Monthly'].map(p => (
                  <button key={p} onClick={() => setPeriod(p)}
                    className={`px-3 py-1.5 text-[12px] font-semibold border-none transition-colors
                      ${period === p ? 'bg-[#2563eb] text-white' : 'bg-transparent text-[#5a7090] hover:text-[#8899bb]'}`}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bar chart */}
          <div className="flex items-end gap-1 h-[180px] mb-2">
            {bars.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                <div className="w-full rounded-t-[3px] transition-opacity hover:opacity-100"
                  style={{
                    height: `${(v / maxBar) * 100}%`,
                    minHeight: 6,
                    background: i === bars.length - 1
                      ? 'linear-gradient(to top, #7c3aed, #00d4ff)'
                      : 'linear-gradient(to top, #1e3a8a, #2563eb)',
                    opacity: i === bars.length - 1 ? 1 : 0.72,
                  }} />
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            {xLabels.map((l, i) => (
              <div key={i} className="flex-1 text-center text-[9px] text-[#3d5070] whitespace-nowrap overflow-hidden"
                style={{ fontSize: '9px' }}>{l}</div>
            ))}
          </div>

          {/* Detail table */}
          <div className="mt-4 rounded-lg overflow-hidden border border-[#1a2640]" style={{ background: '#080d1a' }}>
            <div className="px-4 py-2.5 border-b border-[#1a2640]">
              <p className="text-[10px] uppercase tracking-[0.1em] text-[#5a7090] font-bold">Engagement Data Detail</p>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1a2640]">
                  {['Date','Total Sessions','Active Sessions','Avg. Completion %'].map(h => (
                    <th key={h} className="text-left px-4 py-2.5 text-[10px] uppercase tracking-[0.08em] text-[#5a7090] font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { date: '14 Oct 2024', total: 152, active: 128, pct: 94 },
                  { date: '13 Oct 2024', total: 114, active: 98, pct: 88 },
                  { date: '12 Oct 2024', total: 108, active: 84, pct: 82 },
                ].map(row => (
                  <tr key={row.date} className="border-b border-[#1a2640] last:border-0 hover:bg-[#0f1729] transition-colors">
                    <td className="px-4 py-3 text-[13px] text-[#8899bb]">{row.date}</td>
                    <td className="px-4 py-3 text-[13px] text-white font-bold">{row.total}</td>
                    <td className="px-4 py-3 text-[13px] text-[#8899bb]">{row.active}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 rounded-full bg-[#1a2640] overflow-hidden flex-shrink-0">
                          <div className="h-full rounded-full bg-[#10b981]" style={{ width: `${row.pct}%` }} />
                        </div>
                        <span className="text-[13px] font-semibold text-[#10b981]">{row.pct}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Activity */}
        <div className="rounded-xl border border-[#1a2640] p-5" style={{ background: '#0f1729' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10b981] pulse-dot" />
              <h3 className="text-[16px] font-bold text-white">Live Activity</h3>
            </div>
            <button className="text-[12px] font-bold text-[#00d4ff] hover:text-[#60d9ff] bg-transparent border-none transition-colors tracking-wider">SEE ALL</button>
          </div>
          {[
            { name: 'Elena Rossi', type: 'NEW SUBSCRIPTION', action: 'Joined Pro Membership Plan', time: '2 minutes ago', loc: 'LONDON, UK', av: 'ER', bg: 'linear-gradient(135deg,#00d4ff,#2563eb)' },
            { name: 'Marcus Chen', type: 'ACTIVITY LOG', action: 'Completed "The Lumbar Deep Reset" Protocol', time: '15 minutes ago', loc: 'LEVEL UP', av: 'MC', bg: 'linear-gradient(135deg,#7c3aed,#2563eb)' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 py-3.5 ${i === 0 ? 'border-b border-[#1a2640]' : ''}`}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0" style={{ background: item.bg }}>{item.av}</div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-white">{item.name}</p>
                <p className="text-[10px] font-bold tracking-wider text-[#00d4ff] uppercase">{item.type}</p>
              </div>
              <p className="text-[13px] text-[#8899bb] flex-1 min-w-0 truncate hidden sm:block">{item.action}</p>
              <div className="text-right flex-shrink-0 ml-auto">
                <p className="text-[11px] text-[#3d5070]">{item.time}</p>
                <p className="text-[10px] font-bold text-[#00d4ff] tracking-wider">{item.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
