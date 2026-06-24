import Image from "next/image";

function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="BookMyDoc AI"
                width={40}
                height={40}
              />

              <div>
                <h3 className="text-lg font-bold">BookMyDoc AI</h3>
                <p className="text-sm text-muted-foreground">
                  AI Healthcare Assistant
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Smart healthcare guidance powered by AI. Get instant health
              insights, symptom analysis, and doctor recommendations anytime.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact Us</h4>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: support@bookmydocai.com</p>
              <p>Phone: +91 965 210</p>
              <p>Website: book-my-doc-ai.vercel.app</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Address</h4>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>BookMyDoc AI Pvt. Ltd.</p>
              <p>Sector 17, Chandigarh</p>
              <p>Punjab, India - 160017</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} BookMyDoc AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;