/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable react-hooks/static-components */
"use client";
import { useState, useRef, ChangeEvent } from "react";
import Link from "next/link";
import {
  Trash2,
  Upload,
  FileText,
  ChevronDown,
  CirclePlus,
} from "lucide-react";

export default function ExerciseForm({ mode }: { mode: "add" | "edit" }) {
  const isEdit = mode === "edit";
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- State Management ---
  const [formData, setFormData] = useState({
    exerciseId: "EX-260009",
    exerciseName: "Quadruped Thoracic Rotation",
    sets: "3",
    reps: "8 / side",
    primaryIntent: "Restore thoracic rotation",
    secondaryBenefits: "Reduce lumbar compensation",
    progression: "Add load",
    regression: "Reduce range",
    benefits:
      "Gets your mid-back rotating the way it should, so your lower back and neck don't have to do the twisting for it.",
  });

  const [targetAreas, setTA] = useState([
    "Shoulder",
    "Neck",
    "Upper Back",
    "Middle Back",
  ]);
  const [userCases, setUC] = useState([
    "Feels Weak or Unstable",
    "Stiff or Tight",
  ]);
  const [equipment, setEquipment] = useState<string[]>([]);
  const [phases, setPhases] = useState<string[]>(["Control"]);
  const [videoFile, setVideoFile] = useState<string | null>(
    isEdit ? "Quadruped Thoracic Rotation" : null,
  );

  // Temporary selection states
  const [selectedEquip, setSelectedEquip] = useState("None");
  const [selectedTA, setSelectedTA] = useState("Lower Back");
  const [selectedUC, setSelectedUC] = useState("Just Want to Move Better");
  const [selectedPhase, setSelectedPhase] = useState("Control");

  // --- Handlers ---
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addItem = (list: string[], setList: Function, item: string) => {
    if (item && !list.includes(item)) {
      setList([...list, item]);
    }
  };

  const removeItem = (list: string[], setList: Function, item: string) => {
    setList(list.filter((i) => i !== item));
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setVideoFile(file.name);
  };

  const handlePublish = () => {
    const finalData = {
      ...formData,
      targetAreas,
      userCases,
      equipment,
      phases,
      videoFile,
    };
    console.log("Publishing Exercise:", finalData);
    alert("Exercise Published!");
  };

  const Field = ({
    label,
    val,
    fieldKey,
    mono,
  }: {
    label: string;
    val: string;
    fieldKey: string;
    mono?: boolean;
  }) => (
    <div>
      <p className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-medium mb-2">
        {label}
      </p>
      <input
        value={val}
        onChange={(e) => handleInputChange(fieldKey, e.target.value)}
        readOnly={mono && isEdit}
        className={`w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] focus:border-[#00d4ff] outline-none transition-all ${mono ? "font-mono" : ""}`}
      />
    </div>
  );

  return (
    <div className="fade-in p-6 lg:p-10">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="video/*"
        onChange={handleFileUpload}
      />

      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-[#3d5070] mb-2">
        <Link
          href="/dashboard/exercise-library"
          className="hover:text-[#8899bb] transition-colors no-underline text-[#94A3B8]"
        >
          Exercise Library
        </Link>
        <span>›</span>
        <span className="text-[#2DD4BF] font-bold">
          {isEdit ? "Edit Exercise" : "Add New Exercise"}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-[26px] font-black text-white tracking-tight">
          {isEdit ? "Edit Exercise" : "Add New Exercise"}
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => console.log("Draft Saved", formData)}
            className="px-5 py-2.5 rounded-xl text-[16px] font-bold text-[#3B82F6] bg-transparent transition-all hover:bg-[#3B82F6]/10"
          >
            Save Draft
          </button>
          <button
            onClick={handlePublish}
            className="px-5 py-2.5 rounded-xl text-[16px] font-black text-white transition-all hover:shadow-[0_0_20px_rgba(37,99_235,0.4)]"
            style={{ background: "linear-gradient(135deg,#0ea5e9,#2563eb)" }}
          >
            Publish Exercise
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-[#1a2640] p-6 bg-[#1C2533]">
        <div className="flex items-center justify-between mb-6 border-b border-[#1a2640] pb-1">
          <div className="flex items-center gap-2.5">
            <FileText size={24} className="text-[#00d4ff]" />
            <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#94A3B8]">
              Exercise Metadata
            </span>
          </div>
          {isEdit && (
            <button
              onClick={() => {
                if (confirm("Delete this exercise?")) console.log("Deleted");
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-[16px] font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] border-none transition-colors"
            >
              <Trash2 size={17} /> Delete Exercise
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field
            label="Exercise ID"
            val={formData.exerciseId}
            fieldKey="exerciseId"
            mono
          />
          <Field
            label="Exercise Name"
            val={formData.exerciseName}
            fieldKey="exerciseName"
          />
          <Field label="Sets" val={formData.sets} fieldKey="sets" />
          <Field label="Reps" val={formData.reps} fieldKey="reps" />
          <Field
            label="Primary Intent"
            val={formData.primaryIntent}
            fieldKey="primaryIntent"
          />
          <Field
            label="Secondary Benefits"
            val={formData.secondaryBenefits}
            fieldKey="secondaryBenefits"
          />
          <Field
            label="Progression"
            val={formData.progression}
            fieldKey="progression"
          />
          <Field
            label="Regression"
            val={formData.regression}
            fieldKey="regression"
          />

          {/* Equipment */}
          <div>
            <p className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-medium mb-2">
              Equipment Needed
            </p>
            <div className="flex gap-2 mb-3">
              <div className="relative flex-1">
                <select
                  value={selectedEquip}
                  onChange={(e) => setSelectedEquip(e.target.value)}
                  className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] focus:border-[#00d4ff] outline-none appearance-none cursor-pointer"
                >
                  <option>None</option>
                  <option>Dumbbell</option>
                  <option>Bench</option>
                  <option>Mini Band</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a7090] pointer-events-none"
                  size={16}
                />
              </div>
              <button
                onClick={() => addItem(equipment, setEquipment, selectedEquip)}
                className="flex items-center gap-1.5 px-5 py-3 rounded-2xl text-[13px] font-bold text-[#F8FAFC] shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                style={{
                  background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
                }}
              >
                Add <CirclePlus size={20} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {equipment.map((e) => (
                <span
                  key={e}
                  onClick={() => removeItem(equipment, setEquipment, e)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold text-black cursor-pointer bg-[#2DD4BF] hover:bg-[#00d4ff]/20 transition-all"
                >
                  {e} <span className="opacity-50">×</span>
                </span>
              ))}
            </div>
          </div>

          {/* Phase */}
          <div>
            <p className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-medium mb-2">
              Phase
            </p>
            <div className="flex gap-2 mb-3">
              <div className="relative flex-1">
                <select
                  value={selectedPhase}
                  onChange={(e) => setSelectedPhase(e.target.value)}
                  className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] focus:border-[#00d4ff] outline-none appearance-none cursor-pointer"
                >
                  <option>Control</option>
                  <option>Reset</option>
                  <option>Integrate</option>
                  <option>Performance</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a7090] pointer-events-none"
                  size={16}
                />
              </div>
              <button
                onClick={() => addItem(phases, setPhases, selectedPhase)}
                className="flex items-center gap-1.5 px-5 py-3 rounded-2xl text-[13px] font-bold text-[#F8FAFC] shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                style={{
                  background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
                }}
              >
                Add <CirclePlus size={20} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {phases.map((p) => (
                <span
                  key={p}
                  onClick={() => removeItem(phases, setPhases, p)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold text-black cursor-pointer bg-[#2DD4BF] hover:bg-[#00d4ff]/20 transition-all"
                >
                  {p} <span className="opacity-50">×</span>
                </span>
              ))}
            </div>
          </div>

          {/* Target Area */}
          <div>
            <p className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-medium mb-2">
              Target Area
            </p>
            <div className="flex gap-2 mb-3">
              <div className="relative flex-1">
                <select
                  value={selectedTA}
                  onChange={(e) => setSelectedTA(e.target.value)}
                  className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] outline-none appearance-none cursor-pointer focus:border-[#00d4ff]"
                >
                  <option>Lower Back</option>
                  <option>Shoulder</option>
                  <option>Hip</option>
                  <option>Neck</option>
                  <option>Upper Back</option>
                  <option>Middle Back</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a7090] pointer-events-none"
                  size={16}
                />
              </div>
              <button
                onClick={() => addItem(targetAreas, setTA, selectedTA)}
                className="flex items-center gap-1.5 px-5 py-3 rounded-2xl text-[13px] font-bold text-[#F8FAFC] shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                style={{
                  background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
                }}
              >
                Add <CirclePlus size={20} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {targetAreas.map((a) => (
                <span
                  key={a}
                  onClick={() => removeItem(targetAreas, setTA, a)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold text-black cursor-pointer bg-[#2DD4BF] hover:bg-[#00d4ff]/20 transition-all"
                >
                  {a} <span className="opacity-50">×</span>
                </span>
              ))}
            </div>
          </div>

          {/* User Case */}
          <div>
            <p className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-medium mb-2">
              User Case
            </p>
            <div className="flex gap-2 mb-3">
              <div className="relative flex-1">
                <select
                  value={selectedUC}
                  onChange={(e) => setSelectedUC(e.target.value)}
                  className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] outline-none appearance-none cursor-pointer focus:border-[#00d4ff]"
                >
                  <option>Just Want to Move Better</option>
                  <option>Feels Weak or Unstable</option>
                  <option>Stiff or Tight</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a7090] pointer-events-none"
                  size={16}
                />
              </div>
              <button
                onClick={() => addItem(userCases, setUC, selectedUC)}
                className="flex items-center gap-1.5 px-5 py-3 rounded-2xl text-[13px] font-bold text-[#F8FAFC] shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                style={{
                  background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
                }}
              >
                Add <CirclePlus size={20} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {userCases.map((u) => (
                <span
                  key={u}
                  onClick={() => removeItem(userCases, setUC, u)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold text-black cursor-pointer bg-[#2DD4BF] hover:bg-[#00d4ff]/20 transition-all"
                >
                  {u} <span className="opacity-50">×</span>
                </span>
              ))}
            </div>
          </div>

          {/* Video Tutorial */}
          {/* Video Tutorial */}
          <div className="relative">
            <p className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-medium mb-2">
              Video Tutorial
            </p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="video/*"
              onChange={handleFileUpload}
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`flex ${
                videoFile
                  ? "items-center justify-between h-[110px]"
                  : "flex-col items-center justify-center h-[110px]"
              } px-4 py-3 bg-[#0d1525] border ${
                videoFile
                  ? "border-[#1a2640]"
                  : "border-dashed border-[#1a2640]"
              } rounded-2xl cursor-pointer hover:border-[#00d4ff] transition-all`}
            >
              {videoFile ? (
                <>
                  <span className="text-[14px] text-[#94A3B8] truncate max-w-[80%]">
                    {videoFile}
                  </span>
                  <div className="flex items-center gap-2">
                    <Upload size={20} className="text-[#3d5070]" />
                  </div>
                </>
              ) : (
                <>
                  <Upload size={20} className="text-[#3d5070]" />
                  <span className="text-[13px] text-[#3d5070] font-bold uppercase tracking-wider">
                    Upload Video
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <p className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-medium mb-2">
              Benefits
            </p>
            <textarea
              value={formData.benefits}
              onChange={(e) => handleInputChange("benefits", e.target.value)}
              rows={4}
              className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] focus:border-[#00d4ff] outline-none resize-y leading-relaxed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
