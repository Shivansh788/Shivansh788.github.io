import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivansh Soni — Security × Intelligence",
  description: "The portfolio of Shivansh Soni: cybersecurity, AI systems, and ideas built for a more secure digital world.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
