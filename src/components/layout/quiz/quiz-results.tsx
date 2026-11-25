"use client";

import Link from "next/link";

export default function QuizResultsHero() {
  return (
    <section className="min-h-150 bg-[#222222] px-5 pb-14 pt-20 text-white sm:px-8">
      <nav
        aria-label="Breadcrumb"
        className="mx-auto mt-12 flex max-w-5xl items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em]"
      >
        <Link href="/home" className="hover:text-[#b1812b]">
          Home
        </Link>
        <span>›</span>
        <Link href="/quiz" className="hover:text-[#b1812b]">
          Quiz
        </Link>
        <span>›</span>
        <span className="text-[#b1812b]">Quiz Results</span>
      </nav>
      <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
        <p className="font-inter text-[13px] font-medium uppercase tracking-[0.18em] text-[#dedbd7]">
          Your Personalized Protocol
        </p>
        <h1 className="mt-5 font-cormorant text-[42px] leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">Your ELORA</span>
          <span className="mt-1 block italic text-[#b1812b]">
            Ritual is Ready.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-97.5 font-inter text-sm leading-6 text-[#e1dfdd] sm:text-base sm:leading-7">
          Based on your symptom profile and lifestyle, we&apos;ve curated a
          science-backed protocol designed specifically for your transition.
        </p>
      </div>
    </section>
  );
}
