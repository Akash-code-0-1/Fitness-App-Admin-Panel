import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Body Axis™ - Admin Panel",
  description: "Body Axis Kinetic Systems Admin Panel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
