'use client';
import Link from 'next/link';
import StatusBar from '@/components/StatusBar';
import { Edit2, ChevronLeft, ChevronRight } from 'lucide-react';

const users = [
  { name:'Olivia Katherine Montgo', email:'olivia.katherine.montgomery...', joined:'12 Jan 2026', protocol:'The Lower Back Ache Full...', count:4, status:'Active', sessions:42 },
  { name:'Olivia Katherine Mont...', email:'olivia.katherine.montgomery...', joined:'12 Jan 2026', protocol:'The Lower Back Ache Full...', count:4, status:'Expiring Soon', sessions:42 },
  { name:'Olivia Katherine Mont...', email:'olivia.katherine.montgomery...', joined:'12 Jan 2026', protocol:'The Lower Back Ache Full...', count:4, status:'Expired', sessions:42 },
  { name:'Ethan Alexander Broo...', email:'ethan.alexander.brookshire...', joined:'18 Jan 2026', protocol:'The QL Deep Reset', count:2, status:'Expiring Soon', sessions:36 },
  { name:'Ethan Alexander Broo...', email:'ethan.alexander.brookshire...', joined:'18 Jan 2026', protocol:'The QL Deep Reset', count:2, status:'Expiring Soon', sessions:36 },
  { name:'Ethan Alexander Broo...', email:'ethan.alexander.brookshire...', joined:'18 Jan 2026', protocol:'The QL Deep Reset', count:2, status:'Expired', sessions:36 },
  { name:'Sophia Elizabeth Harri...', email:'sophia.elizabeth.harrington...', joined:'25 Jan 2026', protocol:'The Hip Flexor Strength F...', count:4, status:'Active', sessions:42 },
  { name:'Sophia Elizabeth Harri...', email:'sophia.elizabeth.harrington...', joined:'25 Jan 2026', protocol:'The Hip Flexor Strength F...', count:4, status:'Active', sessions:42 },
  { name:'Liam Jonathan Wellin...', email:'liam.jonathan.wellington@ex...', joined:'25 Jan 2026', protocol:'The Hip Flexor Strength F...', count:4, status:'Expired', sessions:42 },
  { name:'Liam Jonathan Wellin...', email:'liam.jonathan.wellington@ex...', joined:'25 Jan 2026', protocol:'The Hip Flexor Strength F...', count:4, status:'Active', sessions:42 },
];

const sc: Record<string,string> = { Active:'text-[#10b981]', 'Expiring Soon':'text-[#f59e0b]', Expired:'text-[#ef4444]' };

export default function UserManagementPage() {
  return (
    <div className="fade-in">
      <div className="p-6 lg:pl-10">
        <div className="mb-6">
          <h1 className="text-[26px] font-extrabold text-white mb-1 tracking-tight">User Management</h1>
          <p className="text-[13px] text-[#8899bb]">Manage clinets, monitor protocols, and track performance metrics.</p>
        </div>

        {/* Filters */}
        <div className="rounded-xl border border-[#1a2640] p-4 mb-4" style={{ background:'#0f1729' }}>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-[12px] text-[#5a7090] font-bold">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              FILTERS
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold whitespace-nowrap">Email ID/Name</span>
              <input defaultValue="olivia.katherine.montgomery@exampl..." className="px-3 py-1.5 text-[12px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-white outline-none w-[220px] focus:border-[#00d4ff]" />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold whitespace-nowrap">Join Date</span>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0d1525] border border-[#1a2640] rounded-lg text-[12px] text-[#8899bb] cursor-pointer hover:border-[#00d4ff] transition-colors whitespace-nowrap">
                10/14/2025 📅
              </div>
              <span className="text-[12px] text-[#3d5070]">to</span>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0d1525] border border-[#1a2640] rounded-lg text-[12px] text-[#8899bb] cursor-pointer hover:border-[#00d4ff] transition-colors whitespace-nowrap">
                10/14/2025 📅
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold">Status</span>
              <select className="px-3 py-1.5 text-[12px] bg-[#0d1525] border border-[#1a2640] rounded-lg text-[#f59e0b] outline-none cursor-pointer appearance-none focus:border-[#00d4ff]">
                <option className="text-white">Expiring Soon</option><option className="text-white">Active</option><option className="text-white">Expired</option>
              </select>
            </div>
          </div>
          <p className="text-right text-[12px] text-[#3d5070] mt-2">Showing 1-10 of 9,546</p>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-[#1a2640] overflow-hidden" style={{ background:'#0f1729' }}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-[#1a2640]">
                  {['Name','Email','Join Date','Current Protocol','Total Protocols','Status','Sessions','Actions'].map(h => (
                    <th key={h} className={`text-left px-4 py-3 text-[10px] uppercase tracking-[0.09em] text-[#5a7090] font-semibold ${h==='Actions'?'text-right':''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((u,i) => (
                  <tr key={i} className="border-b border-[#1a2640] last:border-0 hover:bg-[#131d2e] transition-colors">
                    <td className="px-4 py-3.5 text-[13px] font-semibold text-white max-w-[150px] truncate">{u.name}</td>
                    <td className="px-4 py-3.5 text-[12px] text-[#8899bb] max-w-[150px] truncate">{u.email}</td>
                    <td className="px-4 py-3.5 text-[12px] text-[#8899bb] whitespace-nowrap">{u.joined}</td>
                    <td className="px-4 py-3.5 text-[12px] text-[#8899bb] max-w-[160px] truncate">{u.protocol}</td>
                    <td className="px-4 py-3.5 text-[13px] text-[#8899bb] text-center">{u.count}</td>
                    <td className="px-4 py-3.5">
                      <span className={`text-[12px] font-bold ${sc[u.status]}`}>{u.status}</span>
                    </td>
                    <td className="px-4 py-3.5 text-[13px] text-center font-bold text-white">{u.sessions}</td>
                    <td className="px-4 py-3.5 text-right">
                      <Link href="/dashboard/user-management/edit" className="text-[#5a7090] hover:text-[#00d4ff] transition-colors">
                        <Edit2 size={15} />
                      </Link>
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
              {[1,2,3,'…',955].map((n,i) => (
                <button key={i} className={`min-w-[28px] h-7 px-1 rounded-md text-[12px] font-medium border transition-colors
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
