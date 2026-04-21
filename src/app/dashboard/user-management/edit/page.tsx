/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import {
  User,
  Shield,
  Calendar,
  ChevronRight,
  Mail,
  CircleCheck,
  Hourglass,
  CircleX,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

export default function EditUserProfile() {
  // State for all text and date inputs
  const [formData, setFormData] = useState({
    fullName: "Olivia Katherine Montgomery",
    email: "olivia.katherine.montgomery@example.com",
    joinDate: "2026-01-12",
    location: "San Francisco, CA",
    startDate: "2026-01-12",
    endDate: "2027-01-12",
  });

  const [status, setStatus] = useState("Active");
  const [billing, setBilling] = useState("Annual");

  // Handle changes for text and date inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saving User Profile:", { ...formData, status, billing });
    alert("Changes saved to console!");
  };

  return (
    <div
      className=" bg-[#080C14] text-white p-4 md:p-10 font-inter"
      suppressHydrationWarning
    >
      <div className="">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#475569] mb-1">
              <Link href={'/dashboard/user-management'}>
                <span className="hover:text-white cursor-pointer transition-colors text-[#94A3B8]">
                  User Management
                </span>
              </Link>
              <ChevronRight size={12} className="text-[#2DD4BF]" />
              <span className="text-[#2DD4BF]">Edit User Profile</span>
            </div>
            <h1 className="text-[32px] font-black tracking-tighter">
              Edit User Profile
            </h1>
            <p className="text-[#94A3B8] text-[14px]">
              Manage clients, monitor protocols, and track performance metrics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/dashboard/user-management">
              <button
                style={{
                  border: "1px solid var(--Color-Action-Default, #3B82F6)",
                  boxShadow: "1px 3px 10px -3px #3B82F6",
                }}
                className="px-6 py-3 rounded-xl text-[#3B82F6] font-bold text-[16px] hover:bg-[#3B82F6]/5 hover:shadow-[1px_3px_15px_-2px_#3B82F6] transition-all"
              >
                Discard Changes
              </button>
            </Link>
            <button 
              onClick={handleSave}
              className="px-8 py-3 rounded-xl bg-[#3B82F6] text-white font-bold text-[16px] shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* 1. PERSONAL INFORMATION */}
        <section className="bg-[#1C2533] rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-8 border-b border-[#1a2640] pb-2">
            <div className="rounded-lg">
              <User size={32} className="text-[#00d4ff]" />
            </div>
            <h2 className="text-[18px] font-black tracking-tight text-white">
              Personal Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { label: "Full Name", name: "fullName", val: formData.fullName },
              {
                label: "Email Address",
                name: "email",
                val: formData.email,
                icon: <Mail size={25} />,
              },
              { label: "Join Date", name: "joinDate", val: formData.joinDate, isDate: true },
              { label: "Location", name: "location", val: formData.location },
            ].map((field) => (
              <div key={field.label} className="space-y-2">
                <label className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-medium mb-2">
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    type={field.isDate ? "date" : "text"}
                    name={field.name}
                    value={field.val}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] focus:border-[#00d4ff] outline-none transition-all [color-scheme:dark]"
                  />
                  {field.icon && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a7090] pointer-events-none">
                      {field.icon}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. LOWER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12">
          {/* Subscription */}
          <div className="lg:col-span-7 space-y-6">
            <section className="bg-[#1C2533] rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-8 border-b border-[#1a2640] pb-2">
                <div className="rounded-lg">
                  <Shield size={32} className="text-[#00d4ff]" />
                </div>
                <h2 className="text-[18px] font-black tracking-tight text-white">
                  Subscription
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <DateInput 
                  label="Start Date" 
                  name="startDate" 
                  val={formData.startDate} 
                  onChange={handleInputChange} 
                />
                <DateInput 
                  label="End Date" 
                  name="endDate" 
                  val={formData.endDate} 
                  onChange={handleInputChange} 
                />
              </div>

              <label className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-medium mb-4 block">
                Current Status
              </label>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Active", icon: <CircleCheck size={20} /> },
                  { label: "Expiring Soon", icon: <Hourglass size={20} /> },
                  { label: "Expired", icon: <CircleX size={20} /> },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setStatus(item.label)}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all ${
                      status === item.label
                        ? "border-[#22C55E] bg-[#2DD4BF]/5 text-[#22C55E]"
                        : "border-[#64748B] bg-transparent text-[#94A3B8] hover:bg-white/5"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border ${status === item.label ? "border-[#22C55E]" : "border-[#1a2640]"}`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-tight">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              <label className="text-[12px] uppercase tracking-[0.12em] text-[#F8FAFC] font-medium mb-4 block">
                Billing Plan
              </label>
              <div className="space-y-3">
                {[
                  { id: "Annual", label: "Annual Membership", price: "$ 299.99/yr" },
                  { id: "Monthly", label: "Monthly Membership", price: "$ 29.99/mo" },
                ].map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setBilling(plan.id)}
                    className={`flex items-center justify-between p-5 rounded-2xl cursor-pointer transition-all border ${
                      billing === plan.id
                        ? "bg-[#0d1525] border-[#2DD4BF] shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                        : "bg-[#0d1525] border-transparent hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${billing === plan.id ? "border-[#2DD4BF]" : "border-[#1a2640]"}`}
                      >
                        {billing === plan.id && (
                          <div className="w-2.5 h-2.5 bg-[#2DD4BF] rounded-full" />
                        )}
                      </div>
                      <span className={`text-[14px] font-bold ${billing === plan.id ? "text-white" : "text-[#94A3B8]"}`}>
                        {plan.label}
                      </span>
                    </div>
                    <span className="text-[#2DD4BF] font-bold text-[14px]">
                      {plan.price}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Security */}
          <div className="lg:col-span-5 space-y-6">
            <section className="bg-[#1C2533] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8 border-b border-[#1a2640] pb-2">
                <div className="rounded-lg">
                  <Shield size={32} className="text-[#00d4ff]" />
                </div>
                <h2 className="text-[18px] font-black tracking-tight text-white">
                  Security
                </h2>
              </div>

              <div className="space-y-4">
                <SecurityButton 
                  icon={<RotateCcw size={20}/>} 
                  label="Reset Password" 
                  onClick={() => alert("Password reset requested")}
                />
                <SecurityButton
                  icon={<ShieldCheck size={20} />}
                  label="Resend Verification Email"
                  onClick={() => alert("Verification email sent")}
                />
              </div>

              <div className="mt-8 pt-8 border-t border-[#444950] space-y-4">
                <div className="flex justify-between text-[11px] font-medium tracking-widest">
                  <span className="text-[#64748B] uppercase ">Last Login</span>
                  <span className="text-[#CBD5E1]">2 hours ago</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-[#64748B]">IP Address</span>
                  <span className="text-[#64748B]">192.168.1.42</span>
                </div>
              </div>
            </section>

            {/* Account Deletion */}
            <section className="bg-[#1C2533] border border-[#1a2640] rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 border-b border-[#1a2640] pb-2">
                <div className="rounded-lg">
                  <img src="/icons/Danger.svg" alt="Danger" className="w-8 h-8 object-contain" />
                </div>
                <h2 className="text-[21px] font-black tracking-tight text-white">Account Deletion</h2>
              </div>
              <h3 className="text-white font-black text-[16px] mb-2">Deactivate or Delete User</h3>
              <p className="text-[#94A3B8] text-[13px] leading-relaxed mb-8">
                Once deleted, user data cannot be recovered. Deactivation suspends access immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => alert("Deactivating...")} className="flex-1 px-4 py-3.5 rounded-2xl border border-[#A32D2D]/30 text-[#A32D2D] font-black text-[16px] hover:bg-[#A32D2D]/5 transition-all">
                  Deactivate Account
                </button>
                <button onClick={() => alert("Deleting...")} className="flex-1 px-4 py-3.5 rounded-2xl bg-[#A32D2D] text-white font-black text-[16px] hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">
                  Delete User
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

// Updated DateInput with Functional Calendar Support
function DateInput({ label, name, val, onChange }: { label: string; name: string; val: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] uppercase tracking-widest text-[#475569] font-black">
        {label}
      </label>
      <div className="relative">
        <input
          type="date"
          name={name}
          value={val}
          onChange={onChange}
          className="w-full bg-[#0B1120] border border-white/5 rounded-xl px-5 py-4 text-[14px] text-[#94A3B8] outline-none [color-scheme:dark] cursor-pointer"
        />
        <Calendar
          size={25}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none"
        />
      </div>
    </div>
  );
}

function SecurityButton({ icon, label, onClick }: { icon: any; label: string; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-4 px-5 py-4 bg-[#0B1120] rounded-2xl text-[#94A3B8] font-bold text-[14px] hover:bg-[#131d2e] transition-all border border-transparent hover:border-white/5"
    >
      <span className="text-[#475569]">{icon}</span>
      {label}
    </button>
  );
}