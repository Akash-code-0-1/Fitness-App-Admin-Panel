/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard Home", href: "/dashboard", iconName: "dashboard.svg" },
  { label: "Protocol Manager", href: "/dashboard/protocol-manager", iconName: "protocol.svg" },
  { label: "Exercise Library", href: "/dashboard/exercise-library", iconName: "exercise.svg" },
  { label: "Video Manager", href: "/dashboard/video-manager", iconName: "play.svg" },
  { label: "User Management", href: "/dashboard/user-management", iconName: "user.svg" },
];

export default function Sidebar({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[235px] z-50 flex flex-col
        bg-bg-secondary
        transition-transform duration-300 ease-in-out font-['Inter',_sans-serif]
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="px-4 py-4 flex items-center justify-center">
          <Link href="/dashboard" onClick={onClose}>
            <img
              src="/dashLogo.png"
              alt="Body Axis Logo"
              className="h-[60px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 mx-3 my-1 px-5 py-3 rounded-2xl w-[calc(100%-24px)]
                transition-all duration-300 whitespace-nowrap
                ${
                  isActive
                    ? "bg-[#172A4F] text-accent-blue border-r-[4px] border-[#1D4ED8] shadow-[inset_0_0_10px_rgba(59,130,246,0.1)]"
                    : "text-[#94a3b8] hover:text-white hover:bg-bg-card-hover"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-5 h-5 flex-shrink-0 transition-colors duration-300
                  ${isActive ? "bg-accent-blue" : "bg-[#94a3b8]"}`}
                  style={{
                    WebkitMaskImage: `url(/icons/${item.iconName})`,
                    maskImage: `url(/icons/${item.iconName})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />

                <span
                  className={`text-[15px] tracking-[0.3px] truncate ${
                    isActive ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* System Status */}
        <div className="p-4">
          <div className="bg-bg-card rounded-xl p-3">
            <p className="text-[10px] uppercase tracking-[0.1em] text-text-muted font-semibold mb-1">
              System Status
            </p>

            <div className="flex items-center gap-2 text-[12px] text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              All Nodes Active
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}