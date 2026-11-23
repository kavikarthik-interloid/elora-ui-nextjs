"use client";

import { motion, useAnimate, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const WORD = "Elora";
const JUMP_HEIGHT = 5;

interface EloraIntroProps {
  onComplete: () => void;
}

export function EloraIntro({ onComplete }: EloraIntroProps) {
  const [scope, animate] = useAnimate();
  const [filledLetters, setFilledLetters] = useState<number>(0);
  const wordRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const ballRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;

    const runAnimation = async () => {
      const word = wordRef.current;
      const ball = ballRef.current;

      if (!word || !ball || !scope.current) return;

      const ballSize = ball.getBoundingClientRect().width;

      if (reducedMotion) {
        await animate(scope.current, { opacity: 0 }, { duration: 0.3 });
        if (!cancelled) onComplete();
        return;
      }

      const wordRect = word.getBoundingClientRect();
      const fontSize = parseFloat(
        getComputedStyle(lettersRef.current[0]).fontSize,
      );
      const lowercaseOffset = fontSize * 0.24;
      const glyphTopOffsets = [
        0,
        0,
        lowercaseOffset,
        lowercaseOffset,
        lowercaseOffset,
      ];

      // Calculate the landing position above each letter.
      const positions = lettersRef.current.map((letter, index) => {
        const rect = letter.getBoundingClientRect();

        return {
          x: rect.left - wordRect.left + rect.width / 2 - ballSize / 2,
          y: rect.top - wordRect.top - ballSize + glyphTopOffsets[index],
        };
      });

      if (positions.length !== WORD.length) return;

      //   Place the ball above the first letter.
      const first = positions[0];

      await animate(
        ball,
        {
          x: first.x,
          y: first.y - JUMP_HEIGHT,
        },
        { duration: 0 },
      );

      await new Promise((resolve) => setTimeout(resolve, 150));

      //   Drop and bounce on each letter.
      for (let i = 0; i < positions.length; i++) {
        if (cancelled) return;

        const current = positions[i];

        // 1. Land on the current letter.
        await animate(
          ball,
          {
            x: current.x,
            y: current.y,
          },
          {
            duration: i === 0 ? 0.22 : 0.18,
            ease: [0.22, 1, 0.36, 1],
          },
        );

        // Fill the letter as the ball lands.
        setFilledLetters(i + 1);

        if (cancelled) return;

        // 2. Squash the ball on impact.
        await animate(
          ball,
          {
            scaleX: 1.3,
            scaleY: 0.65,
          },
          { duration: 0.1, ease: "easeOut" },
        );
        // Fill the letter as the ball lands.
        setFilledLetters(i + 1);

        // 3. Restore the ball's shape.
        await animate(
          ball,
          {
            scaleX: 1,
            scaleY: 1,
          },
          { duration: 0.2, ease: "easeOut" },
        );
        // Fill the letter as the ball lands.
        setFilledLetters(i + 1);
        if (cancelled) return;

        // Pause briefly on the letter.
        await new Promise((resolve) => setTimeout(resolve, 40));

        // 4. Jump to the next letter.
        if (i < positions.length - 1) {
          const next = positions[i + 1];

          await animate(
            ball,
            {
              x: [current.x, next.x],
              y: [current.y, current.y - JUMP_HEIGHT, next.y],
            },
            {
              duration: 0.3,
              ease: [0.22, 0.65, 0.3, 1],
            },
          );
        }
        // Fill the letter as the ball lands.
        setFilledLetters(i + 1);
      }

      if (cancelled) return;

      //   5. Final settling bounce after A.
      await animate(
        ball,
        {
          scaleX: [1, 1.2, 1],
          scaleY: [1, 0.8, 1],
        },
        {
          duration: 0.2,
          ease: "easeOut",
        },
      );

      const lastPosition = positions[positions.length - 1];
      const lastLetter = lettersRef.current[lettersRef.current.length - 1];
      if (!lastLetter) return;

      const lastRect = lastLetter.getBoundingClientRect();
      const lastFontSize = parseFloat(getComputedStyle(lastLetter).fontSize);
      const periodPosition = {
        x: lastRect.right - wordRect.left + lastFontSize * 0.08,
        y: lastRect.top - wordRect.top - ballSize + lastFontSize * 0.9,
      };

      // Jump from A to the full-stop position.
      await animate(
        ball,
        {
          x: [lastPosition.x, periodPosition.x],
          y: [lastPosition.y, lastPosition.y - JUMP_HEIGHT, periodPosition.y],
        },
        {
          duration: 0.3,
          ease: [0.22, 0.65, 0.3, 1],
        },
      );

      // Small squash when the ball lands as the full stop.
      await animate(
        ball,
        {
          scaleX: [1, 1.25, 1],
          scaleY: [1, 0.75, 1],
        },
        { duration: 0.1, ease: "easeOut" },
      );

      await new Promise((resolve) => setTimeout(resolve, 150));

      //   Fade out the intro.
      await animate(
        scope.current,
        { opacity: 0 },
        {
          duration: 0.3,
          ease: "easeInOut",
        },
      );

      if (!cancelled) onComplete();
    };

    runAnimation();

    return () => {
      cancelled = true;
    };
  }, [animate, onComplete, reducedMotion, scope]);

  return (
    <motion.div
      ref={scope}
      className="fixed inset-0  flex items-center justify-center bg-black"
    >
      <div
        ref={wordRef}
        className="relative flex items-baseline font-quantify text-[clamp(3rem,10vw,8rem)]"
      >
        {WORD.split("").map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            ref={(element) => {
              if (element) lettersRef.current[index] = element;
            }}
            className="font-quantify text-[clamp(3rem,10vw,8rem)] leading-none font-semibold text-primary"
            style={{
              color: index < filledLetters ? "#C9A45C" : "transparent",
              WebkitTextStroke: "0.25px #C9A45C",
            }}
          >
            {letter}
          </span>
        ))}

        <motion.div
          ref={ballRef}
          className="absolute left-0 top-0 h-[0.12em] w-[0.12em] rounded-full bg-primary shadow-[0_0_15px_rgba(201,164,92,0.55)]"
          style={{
            transformOrigin: "center bottom",
          }}
        />
      </div>
    </motion.div>
  );
}
