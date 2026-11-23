import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/image1.png";
import MoveRightIcon from "../icons/move-right";
import Sparkles from "../icons/sparkles";

export default function HeroSection() {
  return (
    <section className="relative isolate mt-0 overflow-hidden bg-[#302b24] text-white">
      <Image
        src={heroImage}
        alt="Woman looking out of a window"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] sm:object-[54%_center] lg:object-center"
      />

      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(16,16,15,.58)_0%,rgba(16,16,15,.24)_48%,rgba(16,16,15,.02)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,rgba(0,0,0,.82)_0%,rgba(0,0,0,.2)_36%,rgba(0,0,0,0)_70%)]" />

      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-[1555px] flex-col justify-end px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:px-12 lg:pb-14">
        <div className="max-w-162.5">
          <div className="mb-12 inline-flex items-center gap-2 rounded-full bg-[#9b742f]/55 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-[#e3ad52] backdrop-blur-sm sm:mb-14 sm:text-sm">
            <Sparkles />
            <span>Science-backed menopause care</span>
          </div>

          <h1 className="max-w-155 font-cormorant text-[3.6rem] leading-[0.86] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]">
            Feel like <em>yourself</em> again.
          </h1>

          <p className="mt-8 max-w-85 text-sm leading-6 text-white/95 sm:mt-9 sm:text-base sm:leading-7">
            Targeted support for sleep, mood, energy, and hormonal balance.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:mt-7 sm:flex-row">
            <Link
              href="/quiz"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-primary px-7 text-sm font-medium text-white transition-colors hover:bg-[#d19a35] sm:h-13 sm:min-w-47 sm:text-base"
            >
              Take the Quiz
              <MoveRightIcon />
            </Link>
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/75 px-7 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#302b24] sm:h-13 sm:min-w-47 sm:text-base"
            >
              Shop Bestsellers
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 self-center text-[10px] uppercase tracking-[0.24em] text-white/85 sm:mt-20">
          <span>Scroll</span>
          <span className="h-6 w-px bg-white/70" />
        </div>
      </div>
    </section>
  );
}
