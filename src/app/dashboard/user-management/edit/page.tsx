'use client';
import { useState } from 'react';
import Link from 'next/link';
import StatusBar from '@/components/StatusBar';
import { User, Shield, AlertTriangle, Calendar, Mail, RotateCcw, RefreshCw } from 'lucide-react';

export default function EditUserProfilePage() {
  const [subStatus, setSubStatus] = useState<'Active'|'Expiring Soon'|'Expired'>('Active');
  const [billing, setBilling] = useState<'Annual'|'Monthly'>('Annual');

  return (
    <div className="fade-in">
      <div className="p-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.09em] text-[#3d5070] mb-1.5">
          <Link href="/dashboard/user-management" className="hover:text-[#8899bb] transition-colors text-[#3d5070] no-underline">User Management</Link>
          <span>›</span>
          <span className="text-[#00d4ff]">Edit User Profile</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[24px] font-extrabold text-white tracking-tight mb-1">Edit User Profile</h1>
            <p className="text-[13px] text-[#8899bb]">Manage clinets, monitor protocols, and track performance metrics.</p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button className="px-4 py-2 rounded-lg text-[13px] font-semibold text-white bg-transparent border border-[#1a2640] hover:border-[#8899bb] transition-colors">
              Discard Changes
            </button>
            <button className="px-4 py-2 rounded-lg text-[13px] font-bold text-white border-none hover:opacity-90 transition-opacity"
              style={{ background:'linear-gradient(135deg,#0ea5e9,#2563eb)' }}>
              Save Changes
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {/* Personal Information */}
          <div className="rounded-xl border border-[#1a2640] p-5" style={{ background:'#0f1729' }}>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background:'rgba(0,212,255,0.1)' }}>
                <User size={16} className="text-[#00d4ff]" />
              </div>
              <h3 className="text-[17px] font-bold text-white">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Full Name</p>
                <input defaultValue="Olivia Katherine Montgomery"
                  className="w-full px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none transition-colors" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Email Address</p>
                <div className="relative">
                  <input defaultValue="olivia.katherine.montgomery@example.com"
                    className="w-full px-3 py-2.5 pr-9 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none transition-colors" />
                  <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3d5070]" />
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Join Date</p>
                <input defaultValue="12 Jan 2026"
                  className="w-full px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none transition-colors" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">Location</p>
                <input defaultValue="San Francisco, CA"
                  className="w-full px-3 py-2.5 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none transition-colors" />
              </div>
            </div>
          </div>

          {/* Subscription + Security row */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr,340px] gap-5 items-start">
            {/* Subscription */}
            <div className="rounded-xl border border-[#1a2640] p-5" style={{ background:'#0f1729' }}>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background:'rgba(0,212,255,0.1)' }}>
                  <RefreshCw size={16} className="text-[#00d4ff]" />
                </div>
                <h3 className="text-[17px] font-bold text-white">Subscription</h3>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                {[['Start Date','12 Jan 2026'],['End Date','12 Jan 2027']].map(([l,v]) => (
                  <div key={l}>
                    <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-1.5">{l}</p>
                    <div className="relative">
                      <input defaultValue={v}
                        className="w-full px-3 py-2.5 pr-9 text-[13px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white focus:border-[#00d4ff] outline-none transition-colors" />
                      <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3d5070]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Status */}
              <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-2">Current Status</p>
              <div className="flex gap-3 mb-5 flex-wrap">
                {(['Active','Expiring Soon','Expired'] as const).map(s => {
                  const col = s==='Active'?'#10b981':s==='Expiring Soon'?'#f59e0b':'#ef4444';
                  const icon = s==='Active'?'✅':s==='Expiring Soon'?'⏳':'❌';
                  const active = subStatus === s;
                  return (
                    <button key={s} onClick={() => setSubStatus(s)}
                      className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl text-[11px] font-bold border transition-all cursor-pointer bg-transparent"
                      style={{
                        borderColor: active ? col : '#1a2640',
                        color: active ? col : '#3d5070',
                        background: active ? `${col}10` : '#0d1525',
                        boxShadow: active ? `0 0 12px ${col}25` : 'none',
                      }}>
                      <span className="text-xl">{icon}</span>
                      <span className="whitespace-nowrap">{s}</span>
                    </button>
                  );
                })}
              </div>

              {/* Billing plan */}
              <p className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold mb-2">Billing Plan</p>
              <div className="flex flex-col gap-2.5">
                {([
                  { key:'Annual', label:'Annual Membership', price:'$ 299.99/yr' },
                  { key:'Monthly', label:'Monthly Membership', price:'$ 29.99/mo' },
                ] as const).map(plan => {
                  const sel = billing === plan.key;
                  return (
                    <button key={plan.key} onClick={() => setBilling(plan.key)}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all text-left bg-transparent"
                      style={{ borderColor: sel ? '#00d4ff' : '#1a2640', background: sel ? 'rgba(0,212,255,0.05)' : '#0d1525' }}>
                      <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors"
                        style={{ borderColor: sel ? '#00d4ff' : '#3d5070' }}>
                        {sel && <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />}
                      </div>
                      <span className="flex-1 text-[13px] font-medium text-white">{plan.label}</span>
                      <span className="text-[14px] font-bold text-[#00d4ff]">{plan.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right column — Security + Deletion */}
            <div className="flex flex-col gap-4">
              {/* Security */}
              <div className="rounded-xl border border-[#1a2640] p-5" style={{ background:'#0f1729' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background:'rgba(37,99,235,0.12)' }}>
                    <Shield size={16} className="text-[#3b82f6]" />
                  </div>
                  <h3 className="text-[17px] font-bold text-white">Security</h3>
                </div>
                <div className="flex flex-col gap-2.5 mb-4">
                  {[
                    { icon: RotateCcw, label:'Reset Password' },
                    { icon: Mail, label:'Resend Verification Email' },
                  ].map(({ icon: Icon, label }) => (
                    <button key={label}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#1a2640] bg-[#0d1525] text-[13px] text-white text-left hover:border-[#00d4ff] transition-colors">
                      <Icon size={15} className="text-[#3d5070]" />
                      {label}
                    </button>
                  ))}
                </div>
                <div className="border-t border-[#1a2640] pt-3 flex flex-col gap-2.5">
                  {[['Last Login','2 hours ago'],['IP Address','192.168.1.42']].map(([k,v]) => (
                    <div key={k} className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.08em] text-[#3d5070] font-semibold">{k}</span>
                      <span className="text-[12px] font-semibold text-[#8899bb]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Account Deletion */}
              <div className="rounded-xl border p-5" style={{ background:'#0f1729', borderColor:'rgba(245,158,11,0.25)' }}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background:'rgba(245,158,11,0.12)' }}>
                    <AlertTriangle size={16} className="text-[#f59e0b]" />
                  </div>
                  <h3 className="text-[17px] font-bold text-white">Account Deletion</h3>
                </div>
                <p className="text-[13px] font-semibold text-white mb-1">Deactivate or Delete User</p>
                <p className="text-[12px] text-[#5a7090] leading-relaxed mb-4">
                  Once deleted, user data cannot be recovered. Deactivation suspends access immediately.
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <button className="py-2.5 px-3 rounded-lg text-[12px] font-bold text-[#f97316] border border-[#f97316] bg-transparent hover:bg-[#f97316]/10 transition-colors">
                    Deactivate Account
                  </button>
                  <button className="py-2.5 px-3 rounded-lg text-[12px] font-bold text-white border-none bg-[#dc2626] hover:bg-[#b91c1c] transition-colors">
                    Delete User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
