"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { quizQuestions } from "@/data/quiz-menu";
import { Button } from "@/components/ui/button";
import MoveLeftIcon from "@/components/icons/move-left";
import Link from "next/link";
import MoveRightIcon from "@/components/icons/move-right";
import VectorIcon from "@/components/icons/vector";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [stepDirection, setStepDirection] = useState<number>(1);
  const [isSelectingSingle, setIsSelectingSingle] = useState(false);
  const singleAnswerTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const prefersReducedMotion = useReducedMotion();
  const question = quizQuestions[currentIndex];
  const selected = answers[question.id] ?? [];
  const progress = Math.round(
    ((currentIndex + 1) / quizQuestions.length) * 100,
  );
  const isLastQuestion = currentIndex === quizQuestions.length - 1;

  useEffect(
    () => () => {
      if (singleAnswerTimeout.current !== null) {
        clearTimeout(singleAnswerTimeout.current);
      }
    },
    [],
  );

  function advanceQuestion() {
    if (currentIndex === quizQuestions.length - 1) {
      router.push("/quiz/results");
      return;
    }
    setStepDirection(1);
    setCurrentIndex((index) => index + 1);
  }

  function selectOption(optionId: string) {
    if (isSelectingSingle) return;

    if (question.mode === "single") {
      setAnswers((currentAnswers) => ({
        ...currentAnswers,
        [question.id]: [optionId],
      }));
      setIsSelectingSingle(true);
      singleAnswerTimeout.current = setTimeout(() => {
        singleAnswerTimeout.current = null;
        setIsSelectingSingle(false);
        advanceQuestion();
      }, 300);
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

  return (
    <main className="min-h-80 bg-[#f6f2ec]">
      <section className="mx-auto md:px-10 px-6.5 max-w-395 pb-12 pt-24 md:pt-30">
        <Link
          href="/home"
          className="relative text-sm lg:text-base uppercase tracking-[0.2em] flex gap-2.5 items-center text-foreground font-medium"
        >
          <span className="absolute flex gap-2.5 items-center pt-4 xl:mt-20  min-[1700px]:right-365">
            <span className="hover:text-primary animated-underline">Home{" "}</span>
          <span>
            <VectorIcon></VectorIcon>
          </span>{" "}
          <span className="text-primary">Quiz</span>
          </span>
        </Link>
        <div className="mt-13 xl:mt-30 flex items-center justify-between text-xs uppercase tracking-[0.2em]">
          <span className="text-muted-foreground text-xs lg:text-base font-medium">
            Step {String(currentIndex + 1).padStart(2, "0")} -{" "}
            {question.section}
          </span>
          <span className="text-primary text-sm md:text-base font-medium">
            {progress}%
          </span>
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
            className="mt-8 font-cormorant text-[26px] md:text-[36px] xl:text-[64px] font-medium leading-tight text-foreground"
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
            {question.options?.map((option) => {
              const isSelected = selected.includes(option.id);
              const isSingleChoice = question.mode === "single";
              return (
                <label
                  key={option.id}
                  className={`group flex min-h-14 md:min-h-18.75 cursor-pointer items-center gap-4 hover:border-primary rounded-xl border px-5 py-3 transition-colors has-focus-visible:ring-2 has-focus-visible:ring-primary/50 ${
                    isSelected
                      ? "border-[#aa7d4e] shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
                      : "border-white"
                  }`}
                >
                  <input
                    className="peer sr-only"
                    type={question.mode === "single" ? "radio" : "checkbox"}
                    name={question.name}
                    value={option.id}
                    checked={isSelected}
                    disabled={isSelectingSingle}
                    onChange={() => selectOption(option.id)}
                  />
                  <span
                    aria-hidden="true"
                    className={`flex size-5 xl:size-6.25 shrink-0 items-center justify-center border border-[#e3d2bc] group-hover:border-primary ${
                      isSingleChoice ? "rounded-full" : ""
                    } ${
                      isSelected &&
                      (isSingleChoice
                        ? "border-primary bg-primary text-white"
                        : "border-primary bg-primary text-white")
                    }`}
                  >
                    {isSelected && (
                      <Check size={isSingleChoice ? 12 : 14} strokeWidth={3} />
                    )}
                  </span>
                  <span className="font-inter text-sm md:text-lg xl:text-2xl">
                    {option.label}
                  </span>
                </label>
              );
            })}
            {question.mode === "none" && (
              <div className="mt-1.75 xl:w-3/4">
                <p className="text-sm md:text-[17px] lg:text-[22px] max-w-85 sm:max-w-[85%] lg:max-w-[90%] font-inter font-medium">
                  {question.description}
                </p>
                <input
                  type="input"
                  placeholder="your@email.com"
                  className="w-full h-12 font-cormorant placeholder:text-2xl md:placeholder:text-[28px] border-b border-border bg-transparent mt-8 md:mt-10 px-0 pb-4.75 text-2xl md:text-[28px] md:text-xl xl:text-[24px] leading-normal text-secondary outline-none focus:border-primary"
                />
              </div>
            )}
          </motion.fieldset>
        </AnimatePresence>
        <div className="mt-25 md:mt-20 flex items-center justify-between">
          <button
            type="button"
            disabled={currentIndex === 0 || isSelectingSingle}
            onClick={() => {
              setStepDirection(-1);
              setCurrentIndex((index) => index - 1);
            }}
            className="text-base font-inter flex items-center disabled:cursor-not-allowed disabled:opacity-30 ml-1 cursor-pointer"
          >
            <MoveLeftIcon />
            Back
          </button>
          {(question.mode === "multiple" || isLastQuestion) && (
            <Button
              variant="fill"
              type="button"
              disabled={!isLastQuestion && selected.length === 0}
              onClick={() =>
                isLastQuestion ? router.push("/quiz/results") : goNext()
              }
              className="group rounded-full px-6 py-5 md:h-12 lg:h-13 font-inter font-medium text-base md:text-lg border-0! hover:border! focus-visible:border-0!  shadow-[0px_2px_15px_0px_rgba(175,125,40,0.5)] text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              {currentIndex === quizQuestions.length - 1 &&
              question.mode === "none" ? (
                <span className="flex gap-3 items-center">
                  See My Results
                  <MoveRightIcon className="group-hover/button:-rotate-45 transition-normal duration-500" />
                </span>
              ) : (
                <span className="flex gap-3 items-center">
                  Continue{" "}
                  <MoveRightIcon className="group-hover/button:-rotate-45 transition-normal duration-500" />
                </span>
              )}
            </Button>
          )}
        </div>
      </section>
    </main>
  );
}
