import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Sidebar from "./Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RK Healthcare",
  description: "RK Healthcare - Consultant Anaesthetists and Patient Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f4f6fa]`}
      >
        <div className="flex flex-col min-h-screen gap-10">
          <div className="flex flex-1 min-h-0">
            <Sidebar />
            <main className="flex-1 p-8 bg-white animate-fade-in pb-12 h-full min-h-0 rounded-2xl">
              {children}
            </main>
          </div>
          <footer className="w-full bg-blue-900 text-white py-10 px-4 mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              <div className="text-lg font-semibold tracking-wide mb-2 md:mb-0">
                RK Healthcare &copy; {new Date().getFullYear()}
              </div>
              <nav className="flex flex-wrap gap-6 text-md justify-center">
                <Link
                  href="/"
                  className="hover:underline hover:text-blue-200 transition"
                >
                  Home
                </Link>
                <Link
                  href="/patient-information"
                  className="hover:underline hover:text-blue-200 transition"
                >
                  Patient Information
                </Link>
                <Link
                  href="/consultants"
                  className="hover:underline hover:text-blue-200 transition"
                >
                  Consultants
                </Link>
                <Link
                  href="/our-charges"
                  className="hover:underline hover:text-blue-200 transition"
                >
                  Our Charges
                </Link>
                <Link
                  href="/contact-us"
                  className="hover:underline hover:text-blue-200 transition"
                >
                  Contact Us
                </Link>
              </nav>
              <div className="text-xs text-blue-200 text-center md:text-right mt-2 md:mt-0">
                Designed & built with care.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
