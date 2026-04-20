'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CirclePlus, Trash, Layers, ChevronDown } from 'lucide-react';

type Ex = { name: string; sets: string; reps: string };

const PHASE_COLORS = { '01': '#00d4ff', '02': '#10b981', '03': '#7c3aed' };
const PHASE_LABELS = { '01': 'RESET PHASE', '02': 'CONTROL PHASE', '03': 'INTEGRATE PHASE' };

function PhaseSection({ num, data }: { num: '01'|'02'|'03'; data: Ex[] }) {
  const [items, setItems] = useState<Ex[]>(data);
  const col = PHASE_COLORS[num];
  const label = PHASE_LABELS[num];
  
  const add = () => setItems(p => [...p, { name: '', sets: '3', reps: '10' }]);
  const del = (i: number) => setItems(p => p.filter((_, idx) => idx !== i));
  const upd = (i: number, f: keyof Ex, v: string) => setItems(p => p.map((e, idx) => idx === i ? { ...e, [f]: v } : e));

  return (
    <div className="mb-10 last:mb-0">
      {/* Phase Header */}
      <div className="flex items-center gap-3 mb-6 border-b border-[#1a2640] pb-4">
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border" 
             style={{ background: `${col}15`, color: col, borderColor: `${col}35` }}>
          {num}
        </div>
        <span className="text-[11px] font-black uppercase tracking-[0.15em]" style={{ color: col }}>
          {label}
        </span>
      </div>

      <div className="space-y-4">
        {items.map((ex, i) => (
          <div key={i} className="grid gap-4 items-end" style={{ gridTemplateColumns: '1fr 80px 100px 40px' }}>
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-white font-bold mb-2">Exercise Name</p>
              <input 
                value={ex.name} 
                onChange={e => upd(i,'name',e.target.value)}
                className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] focus:border-[#00d4ff] outline-none transition-all" 
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-white font-bold mb-2 text-center">Sets</p>
              <input 
                value={ex.sets} 
                onChange={e => upd(i,'sets',e.target.value)}
                className="w-full px-2 py-3 text-[13px] text-center bg-[#0d1525] border border-[#1a2640] rounded-lg text-[#94A3B8] focus:border-[#00d4ff] outline-none" 
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-white font-bold mb-2 text-center">Reps</p>
              <input 
                value={ex.reps} 
                onChange={e => upd(i,'reps',e.target.value)}
                className="w-full px-2 py-3 text-[13px] text-center bg-[#0d1525] border border-[#1a2640] rounded-lg text-[#94A3B8] focus:border-[#00d4ff] outline-none" 
              />
            </div>
            <button 
              onClick={() => del(i)} 
              className="h-[46px] flex items-center justify-center text-[#5a7090] hover:text-red-500 transition-colors"
            >
              <Trash size={18} className='text-[#A32D2D]'/>
            </button>
          </div>
        ))}
        
        <div className="flex justify-end pt-2">
          <button 
            onClick={add}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl text-[16px] font-black text-[#3B82F6] border border-[#3B82F6] transition-all shadow-[0_0_20px_rgba(0,212,255,0.15)] bg-[#070B10]"
          >
            Add New Exercise 
            <div className="w-5 h-5 rounded-full flex items-center justify-center scale-100 group-hover:scale-110 transition-transform">
              <CirclePlus size={20} className="text-[#3B82F6]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProtocolForm({ mode }: { mode: 'create'|'edit' }) {
  const [equip, setEquip] = useState(['Bench','Mini Band','Mat']);
  const isEdit = mode === 'edit';

  return (
    <div className="fade-in p-6 lg:p-10 bg-[#070b14] min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-[#3d5070] mb-2">
        <Link href="/dashboard/protocol-manager" className="hover:text-[#8899bb] transition-colors no-underline text-[#94A3B8]">Protocol Manager</Link>
        <span>›</span>
        <span className="text-[#2DD4BF] font-bold">{isEdit ? 'Edit Protocol' : 'Create New Protocol'}</span>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-[26px] font-black text-white tracking-tight">
          {isEdit ? 'Edit Protocol' : 'New Performance Protocol'}
        </h1>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl text-[16px] font-bold text-[#00d4ff] bg-transparent border border-[#1a2640] hover:border-[#00d4ff] transition-all">Save Draft</button>
          <button className="px-5 py-2.5 rounded-xl text-[16px] font-black text-white transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>Publish Protocol</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[380px,1fr] gap-6 items-start">
        {/* Left — Metadata */}
        <div className="rounded-2xl border border-[#1a2640] p-6 bg-[#1C2533]" >
          <div className="flex items-center gap-2.5 mb-6 border-b border-[#1a2640] pb-1">
            <Layers size={24} className="text-[#00d4ff]" />
            <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#94A3B8]">Protocol Metadata</span>
          </div>

          <div className="space-y-5">
            {[['Protocol ID','LB-001'],['Protocol Name','The Lumbar Full Hour Reset']].map(([l,v]) => (
              <div key={l}>
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold mb-2">{l}</p>
                <input defaultValue={v} className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] focus:border-[#00d4ff] outline-none transition-all" />
              </div>
            ))}

            {[['Target Area',['Lower Back','Upper Back','Shoulder','Hip']],['User Case',['Stiff or Tight','Feels Weak','Better Movement']]].map(([l,opts]) => (
              <div key={l as string} className="relative">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#5a7090] font-bold mb-2">{l as string}</p>
                <div className="relative">
                  <select className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] focus:border-[#00d4ff] outline-none transition-all appearance-none cursor-pointer">
                    {(opts as string[]).map(o => <option key={o}>{o}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a7090] pointer-events-none" size={16} />
                </div>
              </div>
            ))}

            <div>
              <p className="text-[10px] uppercase tracking-[0.12em] text-[#5a7090] font-bold mb-2">Equipment Needed</p>
              <div className="flex gap-2 mb-3">
                <div className="relative flex-1">
                  <select className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] focus:border-[#00d4ff] outline-none appearance-none">
                    <option>Dumbbell</option><option>None</option><option>Bench</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a7090] pointer-events-none" size={16} />
                </div>
                <button onClick={() => setEquip(p => [...p,'Dumbbell'])}
                  className="flex items-center gap-1.5 px-5 py-3 rounded-2xl text-[13px] font-bold text-[#F8FAFC] shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                  style={{ background: 'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>
                  Add <CirclePlus size={20} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {equip.map(e => (
                  <span key={e} onClick={() => setEquip(p => p.filter(x => x !== e))}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px]  text-black cursor-pointer bg-[#2DD4BF] hover:bg-[#00d4ff]/20 transition-all">
                    {e} <span className="opacity-50">×</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.12em] text-[#5a7090] font-bold mb-2">Duration</p>
              <div className="relative">
                <select className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] appearance-none">
                  <option>~60 Minutes</option><option>~30 Minutes</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a7090] pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Right — Phase builder */}
        <div className="rounded-2xl border border-[#1a2640] p-7 bg-[#1C2533]">
          <div className="flex items-center gap-2.5 mb-8 border-b border-[#2DD4BF] pb-5">
            <Layers size={20} className="text-[#00d4ff]" />
            <span className="text-[12px] font-black uppercase tracking-[0.15em] text-white">Phase-Based Session Builder</span>
          </div>
          
          <PhaseSection num="01" data={[{ name:'Pelvic Reset', sets:'1', reps:'4-6 breaths' }]} />
          <PhaseSection num="02" data={[{name:'Dead Bug',sets:'3',reps:'10'},{name:'McGill Curl-Up',sets:'3',reps:'10'},{name:'Bird Dog',sets:'3',reps:'10'}]} />
          <PhaseSection num="03" data={[
            {name:'B-Stance Glute Bridge with Band',sets:'3',reps:'10'},
            {name:'Staggered-Stance Romanian Deadlift',sets:'3',reps:'8'},
            {name:'Bulgarian Split Squat (Front Loaded)',sets:'3',reps:'6'},
            {name:'Offset Front Rack Carry',sets:'3',reps:'20'},
          ]} />
        </div>
      </div>
    </div>
  );
}