import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-background via-background to-cyan-500/5" />

        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-size[size:4rem_4rem] opacity-30" />

        
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          <div className="space-y-10">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                AI-Powered Doctor Assistant
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block">
                  Your Doctor
                </span>

                <span className="block bg-linear-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Questions
                </span>

                <span className="block">
                  Answered Instantly
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Chat with our AI doctor assistant for instant guidance, smart
                appointment booking, and personalized care recommendations —
                available 24/7 whenever you need support.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  className="rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/25"
                >
                  <MicIcon className="mr-2 h-5 w-5" />
                  Try Voice Agent
                </Button>
              </SignUpButton>

              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-border/60 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:bg-muted/50"
                >
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </SignUpButton>
            </div>

            {/* Social Proof */}
            <div className="pt-4">
              <div className="inline-flex flex-wrap items-center gap-5 rounded-2xl border border-border/50 bg-background/50 px-5 py-4 backdrop-blur-md">
                {/* Avatars */}
                <div className="flex -space-x-3">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                  />
                </div>

                {/* Rating */}
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <span className="font-semibold">4.9/5</span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Trusted by{" "}
                    <span className="font-semibold text-foreground">
                      1,200+ patients
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />

            {/* Glass Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-background/60 p-6 backdrop-blur-xl shadow-2xl">
              {/* Floating Status */}
              <div className="absolute left-6 top-6 z-20 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-medium text-green-600 backdrop-blur-md dark:text-green-400">
                ● Available 24/7
              </div>

              <Image
                src="/hero.png"
                alt="doctor"
                width={600}
                height={600}
                priority
                className="relative z-10 h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;