export default function StatusBar() {
  return (
    <div className="flex h-[116px] items-center justify-between px-8 py-5  border-t border-[#111827] font-['Inter',_sans-serif]">
      {/* Left Section: Stats */}
      <div className="flex gap-12">
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#64748B] font-bold mb-1">
            Server Latency
          </p>
          <p className="text-[15px] text-[#9ca3af] font-light">24ms</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#64748B] font-bold mb-1">
            Active Nodes
          </p>
          <p className="text-[15px] text-[#9ca3af] font-light">
            Region-US-East (Active)
          </p>
        </div>
      </div>

      {/* Right Section: Copyright & Version */}
      <div className="text-[11px] uppercase tracking-[0.1em] text-[#4b5563] font-semibold">
        © 2024 BODY AXIS KINETIC SYSTEMS{" "}
        <span className="mx-1.5 text-[#374151]">•</span> V4.2.0-STABLE
      </div>
    </div>
  );
}
