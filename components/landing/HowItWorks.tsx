import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-blue-500/5 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-md">
            <ZapIcon className="h-4 w-4 text-cyan-500" />
            <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
              Simple Process
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="block">
              Three Steps To
            </span>

            <span className="block bg-linear-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Better Health
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Our streamlined AI-powered process makes healthcare accessible,
            convenient, and stress-free for everyone.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-linear-to-r from-transparent via-cyan-500/30 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {/* STEP 1 */}
            <div className="group relative">
              <div className="relative h-full rounded-[2rem] border border-border/50 bg-background/60 p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-cyan-500/10">
                <div className="absolute left-8 top-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg">
                  1
                </div>

                <div className="mb-6 flex justify-center">
                  <div className="rounded-2xl border border-border/50 bg-background/70 p-5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/audio.png"
                      alt="Voice Chat"
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                </div>

                <h3 className="mb-4 text-center text-2xl font-bold">
                  Ask Questions
                </h3>

                <p className="mb-6 text-center leading-relaxed text-muted-foreground">
                  Chat with our AI assistant about health concerns and receive
                  instant guidance on symptoms, treatments, and wellness.
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400">
                    24/7 Available
                  </span>

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400">
                    Instant Response
                  </span>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="group relative">
              <div className="relative h-full rounded-[2rem] border border-border/50 bg-background/60 p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-cyan-500/10">
                <div className="absolute left-8 top-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg">
                  2
                </div>

                <div className="mb-6 flex justify-center">
                  <div className="rounded-2xl border border-border/50 bg-background/70 p-5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/brain.png"
                      alt="AI Brain"
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                </div>

                <h3 className="mb-4 text-center text-2xl font-bold">
                  Get Expert Advice
                </h3>

                <p className="mb-6 text-center leading-relaxed text-muted-foreground">
                  Receive AI-powered recommendations based on thousands of
                  healthcare cases and professional best practices.
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400">
                    AI-Powered
                  </span>

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400">
                    Personalized
                  </span>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="group relative">
              <div className="relative h-full rounded-[2rem] border border-border/50 bg-background/60 p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-cyan-500/10">
                <div className="absolute left-8 top-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg">
                  3
                </div>

                <div className="mb-6 flex justify-center">
                  <div className="rounded-2xl border border-border/50 bg-background/70 p-5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/calendar.png"
                      alt="Calendar"
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                </div>

                <h3 className="mb-4 text-center text-2xl font-bold">
                  Book & Get Care
                </h3>

                <p className="mb-6 text-center leading-relaxed text-muted-foreground">
                  Schedule appointments with verified healthcare professionals and receive
                  comprehensive follow-up care recommendations.
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400">
                    Verified Professionals
                  </span>

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400">
                    Follow-up Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <SignUpButton mode="modal">
            <Button
              size="lg"
              className="rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/25"
            >
              <ArrowRightIcon className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </SignUpButton>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;