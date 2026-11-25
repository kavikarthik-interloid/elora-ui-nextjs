"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { quizQuestions } from "@/data/quiz-menu";
import { Button } from "@/components/ui/button";
import QuizResultsHero from "./quiz-results";
import MoveLeftIcon from "@/components/icons/move-left";
import Link from "next/link";
import MoveRightIcon from "@/components/icons/move-right";

const questionVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -24 : 24,
  }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 24 : -24,
  }),
};

const answerVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -24 : 24,
  }),
  center: { opacity: 1, y: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 24 : -24,
  }),
};

export default function QuizFlow() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [completed, setCompleted] = useState<boolean>(false);
  const [stepDirection, setStepDirection] = useState<number>(1);
  const prefersReducedMotion = useReducedMotion();
  const question = quizQuestions[currentIndex];
  const selected = answers[question.id] ?? [];
  const progress = Math.round(
    ((currentIndex + 1) / quizQuestions.length) * 100,
  );

  function advanceQuestion() {
    if (currentIndex === quizQuestions.length - 1) {
      setCompleted(true);
      return;
    }
    setStepDirection(1);
    setCurrentIndex((index) => index + 1);
  }

  function selectOption(optionId: string) {
    if (question.mode === "single") {
      setAnswers((currentAnswers) => ({
        ...currentAnswers,
        [question.id]: [optionId],
      }));
      advanceQuestion();
      return;
    }

    setAnswers((currentAnswers) => {
      const currentSelection = currentAnswers[question.id] ?? [];
      const nextSelection = currentSelection.includes(optionId)
        ? currentSelection.filter((id) => id !== optionId)
        : [...currentSelection, optionId];
      return { ...currentAnswers, [question.id]: nextSelection };
    });
  }

  function goNext() {
    if (selected.length === 0) return;
    advanceQuestion();
  }

  return completed ? (
    <QuizResultsHero />
  ) : (
    <main className="min-h-[calc(100svh-5rem)] bg-[#f6f2ec]">
      <section className="mx-auto max-w-2xl px-5 pb-12 pt-8">
        <Link
          href="/home"
          className="text-xs uppercase tracking-[0.2em] text-[#77736e]"
        >
          Home <span className="px-2 text-primary">›</span> Quiz
        </Link>
        <div className="mt-10 flex items-center justify-between text-xs uppercase tracking-[0.2em]">
          <span className="text-[#92908c]">
            Step {String(currentIndex + 1).padStart(2, "0")} -{" "}
            {question.section}
          </span>
          <span className="text-primary text-sm">{progress}%</span>
        </div>
        <div
          className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e5ded2]"
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            className="h-full rounded-full bg-primary transition-[width]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <AnimatePresence mode="wait" initial={false} custom={stepDirection}>
          <motion.h1
            key={question.id}
            id="quiz-question"
            custom={stepDirection}
            variants={questionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="mt-8 font-cormorant text-2xl font-medium leading-tight text-[#242321]"
          >
            {question.question}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false} custom={stepDirection}>
          <motion.fieldset
            key={question.id}
            custom={stepDirection}
            variants={answerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="mt-10 space-y-3"
          >
            <legend className="sr-only">{question.question}</legend>
            {question.options.map((option) => {
              const isSelected = selected.includes(option.id);
              const isSingleChoice = question.mode === "single";
              return (
                <label
                  key={option.id}
                  className={`group flex min-h-14 cursor-pointer items-center gap-4 hover:border-primary rounded-xl border px-5 py-3 transition-colors has-focus-visible:ring-2 has-focus-visible:ring-primary/50 ${
                    isSelected
                      ? "border-[#aa7d4e] shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
                      : "border-white"
                  }`}
                >
                  <input
                    className="peer sr-only"
                    type={question.mode === "single" ? "radio" : "checkbox"}
                    name={question.id}
                    value={option.id}
                    checked={isSelected}
                    onChange={() => selectOption(option.id)}
                  />
                  <span
                    aria-hidden="true"
                    className={`flex size-5 shrink-0 items-center justify-center border border-[#e3d2bc] group-hover:border-primary ${
                      isSingleChoice ? "rounded-full" : ""
                    } ${
                      isSelected &&
                      (isSingleChoice
                        ? "border-[#aa7d4e] bg-white"
                        : "border-[#aa7d4e] bg-[#aa7d4e] text-white")
                    }`}
                  >
                    {isSelected &&
                      (isSingleChoice ? (
                        <span className="size-full rounded-full bg-[#aa7d4e]" />
                      ) : (
                        <Check size={14} strokeWidth={3} />
                      ))}
                  </span>
                  <span className="font-inter text-sm">{option.label}</span>
                </label>
              );
            })}
          </motion.fieldset>
        </AnimatePresence>
        <div className="mt-13 flex items-center justify-between">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => {
              setStepDirection(-1);
              setCurrentIndex((index) => index - 1);
            }}
            className="text-base font-inter flex items-center disabled:cursor-not-allowed disabled:opacity-30 ml-1"
          >
            <MoveLeftIcon />
            Back
          </button>
          {question.mode === "multiple" && (
            <Button
              variant="fill"
              type="button"
              disabled={selected.length === 0}
              onClick={goNext}
              className="rounded-full bg-primary px-6 py-5 font-inter font-medium  text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              {currentIndex === quizQuestions.length - 1 ? (
                "See My Results"
              ) : (
                <span className="flex gap-3 items-center">
                  Continue <MoveRightIcon />
                </span>
              )}
            </Button>
          )}
        </div>
      </section>
    </main>
  );
}
