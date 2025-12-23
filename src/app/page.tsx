"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { HeroSection } from "@/components/home/hero-section";
import { SummaryDashboard } from "@/components/home/summary-dashboard";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { AnimatePresence, motion } from "framer-motion";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "input";

  const handleProcess = (url: string) => {
    // 1. Navigate to processing state
    router.push("?step=processing", { scroll: false });

    // 2. Simulate processing delay then navigate to dashboard
    setTimeout(() => {
      router.push("?step=dashboard", { scroll: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 3000);
  };

  return (
    <AnimatePresence mode="wait">
      {step === "dashboard" ? (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="pt-24 pb-20 px-4"
        >
          <SummaryDashboard />
        </motion.div>
      ) : (
        <>
          <HeroSection
            key="hero"
            onProcess={handleProcess}
            isProcessing={step === "processing"}
          />
          <Features />
          <HowItWorks />
        </>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <HomeContent />
      </Suspense>
    </main>
  );
}
