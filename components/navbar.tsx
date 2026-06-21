"use client";

import { UserButton, useUser, useClerk } from "@clerk/nextjs";
import { CalendarIcon, CrownIcon, HomeIcon, MicIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: HomeIcon,
    },
    {
      href: "/appointments",
      label: "Appointments",
      icon: CalendarIcon,
    },
    {
      href: "/voice",
      label: "Voice",
      icon: MicIcon,
    },
    {
      href: "/pro",
      label: "Pro",
      icon: CrownIcon,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-blue-100/50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        
        {/* LEFT SECTION */}
        <div className="flex items-center gap-6 lg:gap-10">
          {/* Logo */}
          <Link
            href="/dashboard"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-md">
              <Image
                src="/logo.png"
                alt="BookMyDoc AI Logo"
                width={28}
                height={28}
                className="w-7 object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="bg-linear-to-r from-blue-700 to-cyan-500 bg-clip-text text-lg font-bold text-transparent">
                BookMyDoc AI
              </h1>
              <p className="-mt-1 text-[11px] text-slate-500">
                Smart Healthcare Dashboard
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2 md:gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-700 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 transition-colors ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-500 group-hover:text-blue-600"
                    }`}
                  />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-sm font-semibold text-slate-800">
              {user?.firstName} {user?.lastName}
            </span>
            <span className="text-xs text-slate-500">
              {user?.emailAddresses?.[0]?.emailAddress}
            </span>
          </div>

          <div className="scale-110">
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-10 h-10 ring-2 ring-blue-100 hover:ring-blue-300 transition",
                },
              }}
            />
          </div>

          {/* Custom logout button */}
          <button
            onClick={() => signOut({ redirectUrl: "/" })}
            className="rounded-lg bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;