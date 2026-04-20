/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("admin@bodyaxis.com");
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex items-center justify-center p-5 bg-[var(--bg-primary)] bg-cover bg-center"
      style={{ backgroundImage: "url('/signinBgImg.png')" }}
    >
      <div className="relative z-10 w-[685px] h-[658px] flex items-center justify-center gap-20 px-16 py-32 rounded-[24px] border border-[var(--border)] bg-[var(--bg-card)] shadow-[1px_3px_10px_-3px_var(--boxShadowClorBlue)]">

        {/* Left - Logo */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src="/Logo.png" alt="Body Axis Logo" className="w-[180px] mb-3" />
        </div>

        {/* Right - Form */}
        <div className="w-[330px] min-h-[402px] flex flex-col gap-4 p-6 rounded-2xl bg-[var(--bg-secondary)] shadow-[0px_0px_40px_-10px_var(--boxShadowClorBlue)]">

          {/* Header */}
          <div className="text-center">
            <h2 className="text-[23px] font-bold leading-[26px] tracking-[-0.8px] text-[#DFE2EA]">
              Secure Authentication
            </h2>
            <p className="text-[14px] leading-5 text-[var(--text-secondary)] mt-2 mb-2">
              Enter your administrative credentials to access the axis control center.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-3">

            {/* Email */}
            <div>
              <label className="block mb-2 text-[11px] font-semibold uppercase tracking-[1px] text-white">
                Admin Email
              </label>

              <div className="relative">
                <img
                  src="/icons/email.png"
                  alt="Mail Icon"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
                <input
                  type="email"
                  placeholder="admin@bodyaxis.com"
                  className="w-full pl-10 pr-3 py-3 text-[14px] rounded-[10px] border border-[var(--border)] bg-[var(--bg-input)] text-white outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-[11px] font-semibold uppercase tracking-[1px] text-[#F8FAFC]">
                Password
              </label>

              <div className="relative">
                <img
                  src="/icons/password.png"
                  alt="Lock Icon"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  defaultValue="••••••••"
                  className="w-full pl-10 pr-10 py-3 text-[14px] rounded-[10px] border border-[var(--border)] bg-[var(--bg-input)] text-white outline-none"
                />

                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <img
                    src="/icons/see.png"
                    alt="Toggle Password"
                    className="w-4 h-4 object-contain"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-right">
            <a
              href="#"
              className="text-[12px] font-semibold text-[var(--accent-green)]"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            className="w-full mt-auto flex items-center justify-center gap-2 py-3.5 text-[15px] font-bold text-white rounded-xl bg-[var(--accent-blue)] shadow-[0_4px_15px_rgba(37,99,235,0.4)]"
          >
            Sign In
            <img
              src="/icons/login.png"
              alt="Login"
              className="w-[18px] h-[18px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}