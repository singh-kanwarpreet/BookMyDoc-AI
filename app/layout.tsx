import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/TanStackProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "BookMyDoc AI",
  description: "An AI-powered doctor appointment booking system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {/* Providers belong INSIDE the body tag */}
        <Providers>
          <ClerkProvider>
            {children}
          </ClerkProvider>
        </Providers>
      </body>
    </html>
  );
}