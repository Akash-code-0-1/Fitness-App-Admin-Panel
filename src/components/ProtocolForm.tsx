'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Plus, Trash2, Layers } from 'lucide-react';

type Ex = { name: string; sets: string; reps: string };

const PHASE_COLORS = { '01': '#00d4ff', '02': '#10b981', '03': '#7c3aed' };
const PHASE_LABELS = { '01': 'Reset Phase', '02': 'Control Phase', '03': 'Integrate Phase' };

function PhaseSection({ num, data }: { num: '01'|'02'|'03'; data: Ex[] }) {
  const [items, setItems] = useState<Ex[]>(data);
  const col = PHASE_COLORS[num];
  const label = PHASE_LABELS[num];
  const add = () => setItems(p => [...p, { name: '', sets: '3', reps: '10' }]);
  const del = (i: number) => setItems(p => p.filter((_, idx) => idx !== i));
  const upd = (i: number, f: keyof Ex, v: string) => setItems(p => p.map((e, idx) => idx === i ? { ...e, [f]: v } : e));

  return (
    <div className="rounded-xl border border-[#1a2640] overflow-hidden mb-4 last:mb-0" style={{ background: '#080d1a' }}>
      <div className="flex items-center gap-3 px-4 py-3 border-b-2" style={{ borderBottomColor: col, background: '#0f1729' }}>
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black" style={{ background: `${col}20`, color: col }}>{num}</div>
        <span className="text-[11px] font-black uppercase tracking-[0.12em]" style={{ color: col }}>{label}</span>
      </div>
      <div className="p-4">
        {items.map((ex, i) => (
          <div key={i} className="grid gap-2 mb-3 items-end" style={{ gridTemplateColumns: '1fr 72px 72px 32px' }}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1">Exercise Name</p>
              <input value={ex.name} onChange={e => upd(i,'name',e.target.value)} placeholder="Exercise name"
                className="w-full px-3 py-2 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white placeholder-[#3d5070] focus:border-[#00d4ff] outline-none" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1">Sets</p>
              <input value={ex.sets} onChange={e => upd(i,'sets',e.target.value)}
                className="w-full px-2 py-2 text-[13px] text-center bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1">Reps</p>
              <input value={ex.reps} onChange={e => upd(i,'reps',e.target.value)}
                className="w-full px-2 py-2 text-[13px] text-center bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none" />
            </div>
            <button onClick={() => del(i)} className="h-9 flex items-center justify-center text-[#ef4444] hover:text-red-300 bg-transparent border-none transition-colors">
              <Trash2 size={14} />
            </button>
          </div>
        ))}
        <button onClick={add}
          className="w-full py-2.5 rounded-lg text-[13px] font-semibold text-[#5a7090] hover:text-[#8899bb] flex items-center justify-center gap-1.5 transition-colors border-none"
          style={{ background: '#0d1525', border: '1px dashed #1e2e4a' }}>
          <Plus size={13} /> Add New Exercise
        </button>
      </div>
    </div>
  );
}

export default function ProtocolForm({ mode }: { mode: 'create'|'edit' }) {
  const [equip, setEquip] = useState(['Bench','Mini Band','Mat']);
  const isEdit = mode === 'edit';

  return (
    <div className="fade-in p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.09em] text-[#3d5070] mb-1.5">
        <Link href="/dashboard/protocol-manager" className="hover:text-[#8899bb] transition-colors text-[#3d5070] no-underline">Protocol Manager</Link>
        <span>›</span>
        <span className="text-[#00d4ff]">{isEdit ? 'Edit Protocol' : 'Create New Protocol'}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h1 className="text-[24px] font-extrabold text-white tracking-tight">{isEdit ? 'Edit Protocol' : 'New Performance Protocol'}</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg text-[13px] font-semibold text-[#00d4ff] bg-transparent border border-[#1a2640] hover:border-[#00d4ff] transition-colors">Save Draft</button>
          <button className="px-4 py-2 rounded-lg text-[13px] font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>Publish Protocol</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[360px,1fr] gap-5 items-start">
        {/* Left — Metadata */}
        <div className="rounded-xl border border-[#1a2640] p-5" style={{ background: '#0f1729' }}>
          <div className="flex items-center gap-2 mb-5">
            <Layers size={13} className="text-[#00d4ff]" />
            <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#00d4ff]">Protocol Metadata</span>
          </div>
          {[['Protocol ID','LB-001'],['Protocol Name','The Lumbar Full Hour Reset']].map(([l,v]) => (
            <div key={l} className="mb-4">
              <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">{l}</p>
              <input defaultValue={v} className="w-full px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none transition-colors" />
            </div>
          ))}
          {[['Target Area',['Lower Back','Upper Back','Shoulder','Hip']],['User Case',['Stiff or Tight','Feels Weak or Unstable','Just Want to Move Better']]].map(([l,opts]) => (
            <div key={l as string} className="mb-4">
              <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">{l as string}</p>
              <select className="w-full px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none transition-colors appearance-none cursor-pointer">
                {(opts as string[]).map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}
          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Equipment Needed</p>
            <div className="flex gap-2 mb-2">
              <select className="flex-1 px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none appearance-none cursor-pointer">
                <option>Dumbbell</option><option>None</option><option>Bench</option><option>Mini Band</option><option>Mat</option>
              </select>
              <button onClick={() => setEquip(p => [...p,'Dumbbell'])}
                className="flex items-center gap-1 px-3 py-2.5 rounded-lg text-[13px] font-bold text-white border-none"
                style={{ background: 'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>
                <Plus size={13} /> Add
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {equip.map(e => (
                <span key={e} onClick={() => setEquip(p => p.filter(x => x !== e))}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#00d4ff] cursor-pointer hover:bg-[#00d4ff]/20 transition-colors"
                  style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)' }}>
                  {e} ×
                </span>
              ))}
            </div>
          </div>
          <div className={isEdit ? 'mb-5' : ''}>
            <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Duration</p>
            <select className="w-full px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none appearance-none cursor-pointer">
              <option>~60 Minutes</option><option>~30 Minutes</option><option>~45 Minutes</option><option>~15 Minutes</option>
            </select>
          </div>
          {isEdit && (
            <button className="w-full py-2.5 rounded-lg text-[13px] font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] border-none transition-colors">
              Delete Protocol
            </button>
          )}
        </div>

        {/* Right — Phase builder */}
        <div className="rounded-xl border border-[#1a2640] p-5" style={{ background: '#0f1729' }}>
          <div className="flex items-center gap-2 mb-5">
            <Layers size={13} className="text-[#00d4ff]" />
            <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#00d4ff]">Phase-Based Session Builder</span>
          </div>
          <PhaseSection num="01" data={[{ name:'Pelvic Reset', sets:'1', reps:'4-6 breaths' }]} />
          <PhaseSection num="02" data={[{name:'Dead Bug',sets:'3',reps:'10'},{name:'McGill Curl-Up',sets:'3',reps:'10'},{name:'Bird Dog',sets:'3',reps:'10'}]} />
          <PhaseSection num="03" data={[
            {name:'B-Stance Glute Bridge with Band',sets:'3',reps:'10'},
            {name:'Staggered-Stance Romanian Deadlift',sets:'3',reps:'8'},
            {name:'Staggered-Stance Romanian Deadlift',sets:'3',reps:'8'},
            {name:'Bulgarian Split Squat (Front Loaded)',sets:'3',reps:'6'},
            {name:'Offset Front Rack Carry',sets:'3',reps:'20'},
          ]} />
        </div>
      </div>
    </div>
  );
}
