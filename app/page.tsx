import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatToAsk from "@/components/landing/WhatToAsk";
import PricingSection from "@/components/landing/PricingSection";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer"; 

export default async function Home() {
  const { userId } = await auth()

  // if (userId) {
  //   redirect("/dashboard");
  // }

  return (
    <>
   <Header />
   <Hero />
   <HowItWorks />
   <WhatToAsk />
   <PricingSection />
   <CTA /> 
  <Footer />
  </>
  );
}
