import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({
  children,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("w-full overflow-hidden z-10 bg-secondary-background", className)}
      {...props}
    >
      <div className="relative flex max-w-none overflow-hidden py-5">
        <div
          className={cn(
            "flex w-max animate-marquee",
            direction === "right" && "animate-marquee-reverse",
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

export function MarqueeDemo() {
  const trustPoints = [
    "Physician-reviewed formulas",
    "Non-hormonal options",
    "Third-party tested",
    "Made in the USA",
    "Subscription flexibility",
    "50,000+ women supported",
  ];

  return (
    <Marquee>
      {trustPoints.map((trustPoint) => (
        <div
          key={trustPoint}
          className="relative mx-10 flex h-full w-fit items-center justify-start whitespace-nowrap text-sm font-medium text-white sm:mx-16 lg:text-lg"
        >
          <span
            aria-hidden="true"
            className="mr-2 size-1.5 shrink-0 rounded-full bg-accent-gold"
          />
          {trustPoint}
        </div>
      ))}
    </Marquee>
  );
}
