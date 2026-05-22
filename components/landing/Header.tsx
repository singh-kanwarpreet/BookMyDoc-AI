"use client";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignOutButton,
  useAuth,
} from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "../ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";

function Header() {
  const { userId } = useAuth();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-16 border-b border-blue-100/50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex h-full items-center justify-between px-4 sm:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-cyan-400 shadow-md">
            <Image
              src="/logo.png"
              alt="BookMyDoc AI Logo"
              width={28}
              height={28}
              className="w-6"
            />
          </div>

          <div>
            <span className="text-lg sm:text-xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              BookMyDoc AI
            </span>

            <p className="hidden sm:block text-[11px] text-slate-500 -mt-1">
              Smart Doctor Appointment Booking
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-600 hover:text-blue-600">
            How it Works
          </a>

          <a href="#" className="text-slate-600 hover:text-blue-600">
            Pricing
          </a>

          <a href="#" className="text-slate-600 hover:text-blue-600">
            About
          </a>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {!userId ? (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button size="sm">Sign Up</Button>
              </SignUpButton>
            </>
          ) : (
            <>
              <SignOutButton redirectUrl="/">
                <Button variant="destructive" size="sm">
                  Sign Out
                </Button>
              </SignOutButton>

              <UserButton />
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                
                <a href="#" className="text-lg font-medium">
                  How it Works
                </a>

                <a href="#" className="text-lg font-medium">
                  Pricing
                </a>

                <a href="#" className="text-lg font-medium">
                  About
                </a>

                <div className="pt-6 flex flex-col gap-3">
                  {!userId ? (
                    <>
                      <SignInButton mode="modal">
                        <Button variant="outline" className="w-full">
                          Login
                        </Button>
                      </SignInButton>

                      <SignUpButton mode="modal">
                        <Button className="w-full">
                          Sign Up
                        </Button>
                      </SignUpButton>
                    </>
                  ) : (
                    <>
                      <SignOutButton redirectUrl="/">
                        <Button
                          variant="destructive"
                          className="w-full"
                        >
                          Sign Out
                        </Button>
                      </SignOutButton>

                      <div className="flex justify-center">
                        <UserButton />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Header;