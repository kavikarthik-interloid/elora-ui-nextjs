import Image from "next/image";
import heroImage from "@/assets/image1.svg";
import MoveRightIcon from "../icons/move-right";
import Sparkles from "../icons/sparkles";
import { Button } from "../ui/button";
import Home from "./home";
import { ScrollIndicator } from "../animation/scroll-indicator";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative isolate overflow-hidden bg-[#302b24] text-white sm:min-h-[70%] lg:min-h-[80%] 2xl:min-h-[94%]">
      <Image
        src={heroImage}
        alt="Woman looking out of a window"
        fill
        priority
        className="object-cover object-[35%_center] sm:object-[25%_center] md:object-[20%_center] lg:object-center 2xl:object-center"
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.21)_0%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_40%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.37)_7.6%,rgba(0,0,0,0)_50.12%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_70%)]" />
      <div className="relative z-10 mx-auto flex min-h-full w-full h-full max-w-[1800px] flex-col justify-end px-5 pb-2 pt-28 sm:px-8 lg:px-12 lg:pb-4 xl:pt-36">
        <div className="max-w-162.5">
          <div className="mb-12 mt-2 lg:mt-15 inline-flex items-center gap-2 rounded-full bg-primary/25 px-3 py-1.5 text-xs font-semibold font-inter uppercase tracking-wide text-accent-gold  sm:mb-14 sm:text-sm lg:text-[14px]">
            <Sparkles />
            <span>Science-backed menopause care</span>
          </div>
          <h1 className="max-w-50 sm:max-w-60 md:max-w-100 font-cormorant text-[64px] sm:text-[74px] xl:text-[130px] font-medium leading-[0.86] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]">
            Feel like <em>yourself</em> again.
          </h1>
          <p className="mt-8 lg:mt-20 max-w-45 sm:max-w-60 lg:max-w-90 text-sm font-inter leading-6 text-white/95 sm:text-lg lg:text-[22px] sm:mt-9 sm:leading-7">
            Targeted support for sleep, mood, energy, and hormonal balance.
          </p>
          <div className="mt-5 w-full flex flex-col gap-4 sm:mt-30 sm:flex-row">
            <Button
              variant="fill"
              onClick={() => Home}
              type="button"
              aria-label="Take the quiz"
              className="flex w-45 h-12 items-center justify-center rounded-full px-5 bg-primary text-base font-medium text-white transition-colors sm:h-13 sm:min-w-47 sm:text-base backdrop-blur-sm"
            >
              Take the Quiz
              <MoveRightIcon className="group-hover/button:rotate-320" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push("/shop")}
              className="corner-line button-fill-hover hover:border-primary! flex h-12 w-45 items-center justify-center rounded-full px-5 font-inter text-base font-medium text-white transition-colors sm:h-13 sm:min-w-47"
            >
              Shop Bestsellers
            </Button>
          </div>
        </div>
        <div className="sm:mt-20 flex justify-center items-start">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}
