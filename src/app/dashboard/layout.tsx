'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#070B10]">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="lg:ml-[218px] min-h-screen flex flex-col">
        <Topbar onMenu={() => setOpen(true)} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
