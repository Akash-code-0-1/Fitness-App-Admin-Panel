/* eslint-disable react-hooks/static-components */
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Plus, Trash2, Upload, FileText } from 'lucide-react';

export default function ExerciseForm({ mode }: { mode:'add'|'edit' }) {
  const isEdit = mode === 'edit';
  const [targetAreas, setTA] = useState(['Shoulder','Neck','Upper Back','Middle Back']);
  const [userCases, setUC] = useState(['Feels Weak or Unstable','Stiff or Tight']);

  const Field = ({ label, val, mono }: { label:string; val:string; mono?:boolean }) => (
    <div>
      <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">{label}</p>
      <input defaultValue={val} readOnly={mono && isEdit}
        className={`w-full px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none transition-colors ${mono?'font-mono':''}`} />
    </div>
  );

  return (
    <div className="fade-in p-6">
      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.09em] text-[#3d5070] mb-1.5">
        <Link href="/dashboard/exercise-library" className="hover:text-[#8899bb] transition-colors text-[#3d5070] no-underline">Exercise Library</Link>
        <span>›</span>
        <span className="text-[#00d4ff]">{isEdit ? 'Edit Exercise' : 'Add New Exercise'}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h1 className="text-[24px] font-extrabold text-white tracking-tight">{isEdit ? 'Edit Exercise' : 'Add New Exercise'}</h1>
        <div className="flex items-center gap-3">
          <button className="text-[16px] font-semibold text-[#00d4ff] hover:text-[#60d9ff] bg-transparent border-none transition-colors">Save Draft</button>
          <button className="px-4 py-2 rounded-lg text-[16px] font-bold text-white border-none hover:opacity-90 transition-opacity"
            style={{ background:'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>Publish Exercise</button>
        </div>
      </div>

      <div className="rounded-xl border border-[#1a2640] p-5" style={{ background:'#0f1729' }}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <FileText size={13} className="text-[#00d4ff]" />
            <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#00d4ff]">Exercise Metadata</span>
          </div>
          {isEdit && (
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] border-none transition-colors">
              <Trash2 size={14} /> Delete Exercise
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Exercise ID" val="EX-260009" mono />
          <Field label="Exercise Name" val="Quadruped Thoracic Rotation" />
          <Field label="Sets" val="3" />
          <Field label="Reps" val="8 / side" />
          <Field label="Primary Intent" val="Restore thoracic rotation" />
          <Field label="Secondary Benefits" val="Reduce lumbar compensation" />
          <Field label="Progression" val="Add load" />
          <Field label="Regression" val="Reduce range" />

          {/* Equipment */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Equipment Needed</p>
            <div className="flex gap-2">
              <select className="flex-1 px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white outline-none appearance-none cursor-pointer focus:border-[#00d4ff]">
                <option>None</option><option>Dumbbell</option><option>Bench</option><option>Mini Band</option>
              </select>
              <button className="flex items-center gap-1 px-3 py-2.5 rounded-lg text-[13px] font-bold text-white border-none"
                style={{ background:'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>
                <Plus size={13} /> Add
              </button>
            </div>
          </div>

          {/* Phase */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Phase</p>
            <div className="flex gap-2 mb-2">
              <input defaultValue="Control" className="flex-1 px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white outline-none focus:border-[#00d4ff]" />
              <button className="flex items-center gap-1 px-3 py-2.5 rounded-lg text-[13px] font-bold text-white border-none"
                style={{ background:'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>
                <Plus size={13} /> Add
              </button>
            </div>
            <button className="px-3 py-1 rounded-full text-[11px] text-[#5a7090] border border-[#1a2640] bg-[#0d1525] hover:border-[#8899bb] transition-colors">Reset</button>
          </div>

          {/* Target Area */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Target Area</p>
            <div className="flex gap-2 mb-2">
              <select className="flex-1 px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white outline-none appearance-none cursor-pointer focus:border-[#00d4ff]">
                <option>Lower Back</option><option>Shoulder</option><option>Hip</option><option>Neck</option>
              </select>
              <button className="flex items-center gap-1 px-3 py-2.5 rounded-lg text-[13px] font-bold text-white border-none"
                style={{ background:'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>
                <Plus size={13} /> Add
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {targetAreas.map(a => (
                <span key={a} onClick={() => setTA(p => p.filter(x => x !== a))}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#00d4ff] cursor-pointer hover:bg-[#00d4ff]/20 transition-colors"
                  style={{ background:'rgba(0,212,255,0.1)', border:'1px solid rgba(0,212,255,0.22)' }}>
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* User Case */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">User Case</p>
            <div className="flex gap-2 mb-2">
              <select className="flex-1 px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white outline-none appearance-none cursor-pointer focus:border-[#00d4ff]">
                <option>Just Want to Move Better</option><option>Feels Weak or Unstable</option><option>Stiff or Tight</option>
              </select>
              <button className="flex items-center gap-1 px-3 py-2.5 rounded-lg text-[13px] font-bold text-white border-none"
                style={{ background:'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>
                <Plus size={13} /> Add
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {userCases.map(u => (
                <span key={u} onClick={() => setUC(p => p.filter(x => x !== u))}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#00d4ff] cursor-pointer hover:bg-[#00d4ff]/20 transition-colors"
                  style={{ background:'rgba(0,212,255,0.1)', border:'1px solid rgba(0,212,255,0.22)' }}>
                  {u}
                </span>
              ))}
            </div>
          </div>

          {/* Video Tutorial */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Video Tutorial</p>
            {isEdit ? (
              <div className="flex items-center justify-between px-3 py-2.5 bg-[#0d1525] border border-[#1a2640] rounded-lg cursor-pointer hover:border-[#00d4ff] transition-colors">
                <span className="text-[13px] text-[#8899bb]">Quadruped Thoracic Rotation</span>
                <Upload size={15} className="text-[#3d5070]" />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 p-6 bg-[#0d1525] border border-dashed border-[#1e2e4a] rounded-lg cursor-pointer hover:border-[#00d4ff] transition-colors">
                <Upload size={20} className="text-[#3d5070]" />
                <span className="text-[13px] text-[#3d5070]">Upload Video</span>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Benefits</p>
            <textarea defaultValue="Gets your mid-back rotating the way it should, so your lower back and neck don't have to do the twisting for it. Reduces back stiffness and improves how your whole upper body moves."
              rows={4} className="w-full px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none resize-y leading-relaxed" />
          </div>
        </div>
      </div>
    </div>
  );
}
