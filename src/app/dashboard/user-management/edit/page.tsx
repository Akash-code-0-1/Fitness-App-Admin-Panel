/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  User,
  Shield,
  Trash,
  Calendar,
  ChevronRight,
  Check,
  Clock,
  XCircle,
  Mail,
} from "lucide-react";

export default function EditUserProfile() {
  const [status, setStatus] = useState("Active");
  const [billing, setBilling] = useState("Annual");

  return (
    <div
      className=" bg-[#080C14] text-white p-4 md:p-10 font-inter"
      suppressHydrationWarning
    >
      <div className="">
        {/* Header Section */}
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#475569] mb-1">
              <span className="hover:text-white cursor-pointer transition-colors text-[#94A3B8]">
                User Management
              </span>
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
                  boxShadow: "1px 3px 10px -3px #3B82F6", // Mapping Blue-500 hex directly
                }}
                className="px-6 py-3 rounded-xl text-[#3B82F6] font-bold text-[16px] hover:bg-[#3B82F6]/5 hover:shadow-[1px_3px_15px_-2px_#3B82F6] transition-all"
              >
                Discard Changes
              </button>
            </Link>
            <button className="px-8 py-3 rounded-xl bg-[#3B82F6] text-white font-bold text-[16px] shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all">
              Save Changes
            </button>
          </div>
        </div>

        {/* 1. PERSONAL INFORMATION - NOW FULL WIDTH */}
        <section className="bg-[#1C2533] border border-[#1a2640] rounded-2xl p-8 shadow-2xl mb-6">
          <div className="flex items-center gap-3 mb-8 border-b border-[#1a2640] pb-2">
            <div className="p-2 bg-[#2DD4BF]/10 rounded-lg">
              <User size={24} className="text-[#00d4ff]" />
            </div>
            <h2 className="text-[18px] font-black tracking-tight text-white">
              Personal Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { label: "Full Name", val: "Olivia Katherine Montgomery" },
              {
                label: "Email Address",
                val: "olivia.katherine.montgomery@example.com",
                icon: <Mail size={18} />,
              },
              { label: "Join Date", val: "12 Jan 2026" },
              { label: "Location", val: "San Francisco, CA" },
            ].map((field) => (
              <div key={field.label} className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold mb-2">
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    defaultValue={field.val}
                    className="w-full px-4 py-3 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-2xl text-[#94A3B8] focus:border-[#00d4ff] outline-none transition-all"
                  />
                  {field.icon && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a7090]">
                      {field.icon}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. LOWER GRID - SUBSCRIPTION & SECURITY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12">
          {/* Left Column: Subscription */}
          <div className="lg:col-span-7 space-y-6">
            <section className="bg-[#1C2533] border border-[#1a2640] rounded-2xl p-8 shadow-2xl h-full">
              <div className="flex items-center gap-3 mb-8 border-b border-[#1a2640] pb-2">
                <div className="p-2 bg-[#2DD4BF]/10 rounded-lg">
                  <Shield size={24} className="text-[#00d4ff]" />
                </div>
                <h2 className="text-[18px] font-black tracking-tight text-white">
                  Subscription
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <DateInput label="Start Date" val="12 Jan 2026" />
                <DateInput label="End Date" val="12 Jan 2027" />
              </div>

              <label className="text-[10px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold mb-4 block">
                Current Status
              </label>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Active", icon: <Check size={16} /> },
                  { label: "Expiring Soon", icon: <Clock size={16} /> },
                  { label: "Expired", icon: <XCircle size={16} /> },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setStatus(item.label)}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all ${
                      status === item.label
                        ? "border-[#00d4ff] bg-[#2DD4BF]/5 text-[#00d4ff]"
                        : "border-[#1a2640] bg-transparent text-[#94A3B8] hover:bg-white/5"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border ${status === item.label ? "border-[#00d4ff]" : "border-[#1a2640]"}`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-tight">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              <label className="text-[10px] uppercase tracking-[0.12em] text-[#F8FAFC] font-bold mb-4 block">
                Billing Plan
              </label>
              <div className="space-y-3">
                {[
                  {
                    id: "Annual",
                    label: "Annual Membership",
                    price: "$ 299.99/yr",
                  },
                  {
                    id: "Monthly",
                    label: "Monthly Membership",
                    price: "$ 29.99/mo",
                  },
                ].map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setBilling(plan.id)}
                    className={`flex items-center justify-between p-5 rounded-2xl border cursor-pointer transition-all ${
                      billing === plan.id
                        ? "bg-[#0d1525] border-[#00d4ff]/50 shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                        : "bg-[#0d1525] border-[#1a2640] hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${billing === plan.id ? "border-[#00d4ff]" : "border-[#1a2640]"}`}
                      >
                        {billing === plan.id && (
                          <div className="w-2.5 h-2.5 bg-[#00d4ff] rounded-full" />
                        )}
                      </div>
                      <span
                        className={`text-[14px] font-bold ${billing === plan.id ? "text-white" : "text-[#94A3B8]"}`}
                      >
                        {plan.label}
                      </span>
                    </div>
                    <span className="text-[#00d4ff] font-black text-[14px]">
                      {plan.price}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Security & Deletion */}
          <div className="lg:col-span-5 space-y-6">
            <section className="bg-[#1C2533] border border-[#1a2640] rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 border-b border-[#1a2640] pb-2">
                <div className="p-2 bg-[#2DD4BF]/10 rounded-lg">
                  <Shield size={24} className="text-[#00d4ff]" />
                </div>
                <h2 className="text-[18px] font-black tracking-tight text-white">
                  Security
                </h2>
              </div>

              <div className="space-y-4">
                <SecurityButton icon="🔄" label="Reset Password" />
                <SecurityButton
                  icon={<Shield size={18} />}
                  label="Resend Verification Email"
                />
              </div>

              <div className="mt-8 pt-8 border-t border-[#1a2640] space-y-4">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-[#F8FAFC]">Last Login</span>
                  <span className="text-[#94A3B8]">2 hours ago</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-[#F8FAFC]">IP Address</span>
                  <span className="text-[#94A3B8]">192.168.1.42</span>
                </div>
              </div>
            </section>

            <section className="bg-[#1C2533] border border-[#1a2640] rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 border-b border-[#1a2640] pb-2">
                <div className="p-2 bg-[#A32D2D]/10 rounded-lg">
                  <Trash size={24} className="text-[#A32D2D]" />
                </div>
                <h2 className="text-[18px] font-black tracking-tight text-white">
                  Account Deletion
                </h2>
              </div>
              <h3 className="text-white font-black text-[15px] mb-2">
                Deactivate or Delete User
              </h3>
              <p className="text-[#94A3B8] text-[12px] font-medium leading-relaxed mb-8">
                Once deleted, user data cannot be recovered. Deactivation
                suspends access immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-4 py-3.5 rounded-2xl border border-[#A32D2D]/30 text-[#A32D2D] font-black text-[16px] hover:bg-[#A32D2D]/5 transition-all">
                  Deactivate Account
                </button>
                <button className="flex-1 px-4 py-3.5 rounded-2xl bg-[#A32D2D] text-white font-black text-[16px] hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">
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

// Reusable Components
function DateInput({ label, val }: { label: string; val: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] uppercase tracking-widest text-[#475569] font-black">
        {label}
      </label>
      <div className="relative">
        <input
          defaultValue={val}
          className="w-full bg-[#0B1120] border border-white/5 rounded-xl px-5 py-4 text-[14px] text-[#94A3B8] outline-none"
        />
        <Calendar
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569]"
        />
      </div>
    </div>
  );
}

function SecurityButton({ icon, label }: { icon: any; label: string }) {
  return (
    <button className="w-full flex items-center gap-4 px-5 py-4 bg-[#0B1120] rounded-2xl text-[#94A3B8] font-bold text-[14px] hover:bg-[#131d2e] transition-all border border-transparent hover:border-white/5">
      <span className="text-[#475569]">{icon}</span>
      {label}
    </button>
  );
}
