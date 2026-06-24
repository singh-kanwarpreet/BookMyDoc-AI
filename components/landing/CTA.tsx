import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MicIcon, CalendarIcon } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-blue-500/5 to-transparent" />
      <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-background/60 backdrop-blur-xl shadow-xl">
          <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            
            <div className="space-y-8">
              <div className="space-y-5">
                
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide text-cyan-600 dark:text-cyan-400">
                    READY WHEN YOU ARE
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    Your Health{" "}
                    <span className="block bg-linear-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      Journey Starts Here
                    </span>
                  </h2>

                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Join over{" "}
                    <span className="font-semibold text-foreground">
                      1,200+ patients
                    </span>{" "}
                    who trust our AI-powered platform for instant guidance,
                    smarter healthcare decisions, and personalized dental care.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="group rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/25"
                  >
                    <MicIcon className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    Start Free Chat
                  </Button>
                </SignUpButton>

                <SignInButton mode="modal">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl border-border/60 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:bg-muted/50"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                </SignInButton>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />

                <div className="absolute -top-4 left-4 z-20 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-medium text-green-600 backdrop-blur-md dark:text-green-400">
                  ● Available 24/7
                </div>

                <div className="relative rounded-3xl border border-border/50 bg-background/40 p-4 backdrop-blur-md">
                  <Image
                    src="/cta.png"
                    alt="DentWise AI Assistant"
                    width={340}
                    height={340}
                    className="h-auto w-full max-w-85 object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;