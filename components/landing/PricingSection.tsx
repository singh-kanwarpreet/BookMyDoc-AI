import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CheckCircleIcon } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Essential appointment booking",
    buttonText: "Get Started Free",
    features: [
      "Unlimited appointment booking",
      "Find doctors in your area",
      "Basic text chat support",
      "Appointment reminders",
    ],
  },
  {
    name: "AI Basic",
    price: "$9",
    description: "AI consultations + appointment booking",
    buttonText: "Start AI Basic",
    featured: true,
    features: [
      "Everything in Free",
      "10 AI voice calls per month",
      "AI dental guidance & advice",
      "Symptom assessment",
      "Priority support",
      "Call history & recordings",
    ],
  },
  {
    name: "AI Pro",
    price: "$19",
    description: "Unlimited AI consultations",
    buttonText: "Upgrade to AI Pro",
    features: [
      "Everything in AI Basic",
      "Unlimited AI voice calls",
      "Advanced AI dental analysis",
      "Personalized care plans",
      "24/7 priority AI support",
      "Detailed health reports",
    ],
  },
];

function PricingSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-cyan-500/5" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-size[size:4rem_4rem] opacity-30" />

      {/* Glows */}
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
              Simple Pricing
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="block">Choose Your</span>

            <span className="block bg-linear-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              AI Healthcare Plan
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Book appointments for free and upgrade for unlimited AI
            consultations. Perfect for ongoing dental care.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${
                plan.featured ? "lg:-mt-4" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
                  <div className="rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-[2rem] border backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "border-cyan-500/30 bg-background/70 shadow-2xl shadow-cyan-500/10"
                    : "border-border/50 bg-background/60 shadow-lg hover:border-cyan-500/20"
                }`}
              >
                <div className="space-y-6">
                  {/* Plan Info */}
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>

                    <div className="mt-3 flex items-end gap-1">
                      <span
                        className={`text-5xl font-bold ${
                          plan.featured
                            ? "bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                            : ""
                        }`}
                      >
                        {plan.price}
                      </span>

                      <span className="mb-1 text-muted-foreground">
                        /month
                      </span>
                    </div>

                    <p className="mt-3 text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  {/* CTA */}
                  {plan.name === "Free" ? (
                    <SignUpButton mode="modal">
                      <Button
                        variant="outline"
                        className="w-full rounded-xl border-border/60 bg-background/40 backdrop-blur-sm"
                      >
                        {plan.buttonText}
                      </Button>
                    </SignUpButton>
                  ) : plan.featured ? (
                    <Button
                      className="
                      w-full
                      rounded-xl
                      bg-linear-to-r
                      from-blue-600
                      to-cyan-500
                      text-white
                      shadow-lg
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-cyan-500/25
                    "
                    >
                      {plan.buttonText}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="
                        w-full
                        rounded-xl
                        border-cyan-500/20
                        bg-background/40
                        backdrop-blur-sm
                        hover:border-cyan-500/40
                        hover:bg-cyan-500/5
                      "
                    >
                      {plan.buttonText}
                    </Button>
                  )}

                  {/* Features */}
                  <div className="space-y-4 pt-2">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />

                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;