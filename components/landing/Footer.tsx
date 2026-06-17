import Image from "next/image";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-blue-500/5 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="rounded-[2rem] border border-border/50 bg-background/60 backdrop-blur-xl shadow-lg">
          <div className="grid gap-10 p-8 md:grid-cols-2 lg:grid-cols-4 lg:p-10">
            {/* Brand */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-border/50 bg-background/70 p-2 backdrop-blur-sm">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div>
                  <h3 className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-xl font-bold text-transparent">
                    BookMyDoc AI
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    AI Healthcare Assistant
                  </p>
                </div>
              </div>

              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                AI-powered healthcare guidance designed to provide instant support,
                personalized recommendations, and smarter healthcare decisions.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Product
              </h4>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-cyan-500"
                  >
                    How it Works
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-cyan-500"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-cyan-500"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Support
              </h4>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-cyan-500"
                  >
                    Help Center
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-cyan-500"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-cyan-500"
                  >
                    System Status
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Legal
              </h4>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-cyan-500"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-cyan-500"
                  >
                    Terms of Service
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-cyan-500"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 px-8 py-6">
            <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground md:flex-row">
              <p>
                © 2026 BookMyDoc AI. AI-powered healthcare guidance for everyone.
              </p>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;