import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-16 border-b border-blue-100/50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex h-full items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md">
            <Image
              src="/logo.png"
              alt="DentWise Logo"
              width={28}
              height={28}
              className="w-7"
            />
          </div>

          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              DentWise
            </span>
            <p className="text-[11px] text-slate-500 -mt-1">
              Smart Dental Care
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-slate-600 font-medium transition hover:text-blue-600"
          >
            How it Works
          </a>

          <a
            href="#"
            className="text-slate-600 font-medium transition hover:text-blue-600"
          >
            Pricing
          </a>

          <a
            href="#"
            className="text-slate-600 font-medium transition hover:text-blue-600"
          >
            About
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl"
            >
              Login
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button
              size="sm"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:opacity-90"
            >
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}

export default Header;