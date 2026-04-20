'use client';
import Link from 'next/link';
import StatusBar from '@/components/StatusBar';
import { Plus, Edit2, Trash2, TrendingUp, ChevronLeft, ChevronRight, BookOpen, Clock, Users, Activity } from 'lucide-react';

const exercises = [
  { id:'EX-260001', name:'Supine Pelvic Clocks', areas:['Lower Back','Shoulder','Upper Back','Middle Back','Neck'], phases:['Reset'], status:'Published' },
  { id:'EX-260002', name:'Thoracic Extension', areas:['Lower Back','Shoulder','Upper Back','Middle Back','Neck'], phases:['Reset','Control'], status:'Published' },
  { id:'EX-260002', name:'Long-Lever Hamstring Bridge', areas:['Lower Back','Hamstrings','Glutes','Hips'], phases:['Control','Integrate'], status:'Drafted' },
  { id:'EX-260002', name:'Long-Lever Hamstring Bridge', areas:['Lower Back','Hamstrings','Glutes','Hips'], phases:['Control','Integrate'], status:'Published' },
];

export default function ExerciseLibraryPage() {
  return (
    <div className="fade-in">
      <div className="p-6 lg:pl-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[26px] font-extrabold text-white mb-1 tracking-tight">Exercise Library</h1>
            <p className="text-[13px] text-[#8899bb]">Manage the global database of biomechanical movements, protocols, and performance metrics.</p>
          </div>
          <Link href="/dashboard/exercise-library/add"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-bold text-white no-underline flex-shrink-0 hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#2563eb)', boxShadow: '0 4px 16px rgba(37,99,235,0.35)' }}>
            <Plus size={15} /> Add New Exercise
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label:'Total Exercises', value:'2,854', icon:BookOpen, bg:'rgba(0,212,255,0.08)', col:'#00d4ff' },
            { label:'Published Exercise', value:'2,852', icon:Activity, bg:'rgba(16,185,129,0.08)', col:'#10b981' },
            { label:'Average Duration', value:'18 Min', icon:Clock, bg:'rgba(124,58,237,0.08)', col:'#7c3aed' },
            { label:'Active Users', value:'8,912', icon:Users, bg:'rgba(245,158,11,0.08)', col:'#f59e0b' },
          ].map(({ label,value,icon:Icon,bg,col }) => (
            <div key={label} className="rounded-xl p-5 border border-[#1a2640] overflow-hidden" style={{ background:'#0f1729' }}>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background:bg }}>
                  <Icon size={17} style={{ color:col }} />
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

        {/* Filters */}
        <div className="rounded-xl border border-[#1a2640] p-4 mb-4" style={{ background:'#0f1729' }}>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-[12px] text-[#5a7090] font-bold">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              FILTERS
            </div>
            {[['Body Area',['Shoulder','Lower Back','Hip','Neck']],['Phase',['Reset','Control','Integrate']],['Equipment',['Bench','None','Dumbbell','Mat']],['Status',['Published','Drafted']]].map(([label,opts]) => (
              <div key={label as string} className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold whitespace-nowrap">{label as string}</span>
                <select className="px-3 py-1.5 text-[12px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white outline-none cursor-pointer appearance-none focus:border-[#00d4ff]">
                  {(opts as string[]).map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>
          <p className="text-right text-[12px] text-[#3d5070] mt-2">Showing 1-4 of 16</p>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-[#1a2640] overflow-hidden" style={{ background:'#0f1729' }}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-[#1a2640]">
                  {['Exercise ID','Exercise Name','Body Area','Phase','Equipment','Status','Actions'].map(h => (
                    <th key={h} className={`text-left px-4 py-3 text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold ${h==='Actions'?'text-right':''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {exercises.map((ex,i) => (
                  <tr key={i} className="border-b border-[#1a2640] last:border-0 hover:bg-[#131d2e] transition-colors">
                    <td className="px-4 py-4 text-[12px] text-[#3d5070] font-mono">{ex.id}</td>
                    <td className="px-4 py-4 text-[14px] font-bold text-white whitespace-nowrap">{ex.name}</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1">
                        {ex.areas.map(a => (
                          <span key={a} className="px-2 py-0.5 rounded-full text-[11px] font-semibold text-[#00d4ff]"
                            style={{ background:'rgba(0,212,255,0.1)', border:'1px solid rgba(0,212,255,0.22)' }}>{a}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex gap-1">
                        {ex.phases.map(p => (
                          <span key={p} className="px-2.5 py-0.5 rounded-full text-[11px] text-[#8899bb] border border-[#1e2e4a]">{p}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex gap-0.5 text-[16px]">
                        {ex.phases.length > 1 ? '🤲🤲' : '🤲'}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${ex.status==='Published'?'bg-[#10b981]':'bg-[#3d5070]'}`} />
                        <span className={`text-[12px] font-semibold ${ex.status==='Published'?'text-[#10b981]':'text-[#5a7090]'}`}>{ex.status}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-3">
                        <Link href="/dashboard/exercise-library/edit" className="text-[#5a7090] hover:text-[#00d4ff] transition-colors">
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
