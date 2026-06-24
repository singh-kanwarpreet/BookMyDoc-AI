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
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

function Header() {
  const { userId, isLoaded } = useAuth();

  const authReady = isLoaded;
  const isSignedIn = !!userId;

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-16 border-b border-blue-100/50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-400 shadow-md">
            <Image
              src="/logo.png"
              alt="BookMyDoc AI Logo"
              width={28}
              height={28}
              className="w-6"
            />
          </div>

          <div>
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
              BookMyDoc AI
            </span>

            <p className="-mt-1 hidden text-[11px] text-slate-500 sm:block">
              Smart Doctor Appointment Booking
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-slate-600 hover:text-blue-600">
            How it Works
          </a>

          <a href="#pricing" className="text-slate-600 hover:text-blue-600">
            Pricing
          </a>

          <a href="#about" className="text-slate-600 hover:text-blue-600">
            About
          </a>
        </div>

        {/* Desktop Auth */}
        <div className="hidden min-w-[180px] items-center justify-end gap-3 md:flex">
          {!authReady ? (
            <div className="h-9 w-[160px]" />
          ) : !isSignedIn ? (
            <>
              <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </SignInButton>

              <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
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
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="mt-8 flex flex-col gap-6">
                <a href="#how-it-works" className="text-lg font-medium">
                  How it Works
                </a>

                <a href="#pricing" className="text-lg font-medium">
                  Pricing
                </a>

                <a href="#about" className="text-lg font-medium">
                  About
                </a>

                <div className="flex flex-col gap-3 pt-6">
                  {!authReady ? (
                    <div className="h-10 w-full" />
                  ) : !isSignedIn ? (
                    <>
                      <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                        <Button variant="outline" className="w-full">
                          Login
                        </Button>
                      </SignInButton>

                      <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
                        <Button className="w-full">Sign Up</Button>
                      </SignUpButton>
                    </>
                  ) : (
                    <>
                      <SignOutButton redirectUrl="/">
                        <Button variant="destructive" className="w-full">
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