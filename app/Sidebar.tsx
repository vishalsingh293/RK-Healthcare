"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  DocumentTextIcon,
  UsersIcon,
  BanknotesIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home", icon: HomeIcon },
    {
      href: "/patient-information",
      label: "Patient Information",
      icon: DocumentTextIcon,
    },
    { href: "/consultants", label: "Consultants", icon: UsersIcon },
    { href: "/our-charges", label: "Our Charges", icon: BanknotesIcon },
    { href: "/contact-us", label: "Contact Us", icon: EnvelopeIcon },
  ];
  return (
    <aside className="w-72 bg-gradient-to-b from-blue-100 to-[#f4f6fa] p-8 shadow-lg flex flex-col rounded-2xl m-4 h-[calc(100vh-2rem)] max-h-[100dvh]">
      <div className="flex flex-col items-center mb-8">
        <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center mb-2">
          <span className="text-2xl font-extrabold text-blue-700">RK</span>
        </div>
        <span className="font-bold text-xl text-blue-900 tracking-wide">
          Healthcare
        </span>
      </div>
      <div className="border-b border-blue-200 mb-6"></div>
      <nav className="flex flex-col gap-4 mt-2">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl font-semibold text-lg whitespace-nowrap transition-all duration-200
              ${
                pathname === href
                  ? "bg-white text-blue-900 shadow"
                  : "text-blue-700 hover:bg-blue-200 hover:text-blue-900"
              }
            `}
            aria-current={pathname === href ? "page" : undefined}
          >
            <Icon className="w-7 h-7 flex-shrink-0" />
            <span className="whitespace-nowrap">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
