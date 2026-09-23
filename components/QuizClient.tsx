"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  Home,
  RotateCcw,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DiagramRenderer, { hasDiagram } from "@/components/diagrams/DiagramRenderer";
import EngineeringDiagram from "@/components/EngineeringDiagram";
import { MathText } from "@/components/MathText";
import type { QuizMode, QuizQuestion } from "@/types/quiz";
import { cn } from "@/lib/utils";

interface QuizClientProps {
  subjectId: string;
  subjectTitle: string;
  mode: QuizMode;
  questions: QuizQuestion[];
}

/** questionIndex -> selected optionId. Only ever populated in quiz mode. */
type AnswerMap = Record<number, string>;

export default function QuizClient({ subjectId, subjectTitle, mode, questions }: QuizClientProps) {
  const isPractice = mode === "practice";
  const total = questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [showResults, setShowResults] = useState(false);
  const [direction, setDirection] = useState(1);

  const dotRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const currentQuestion = questions[currentIndex];
  const selectedOptionId = answers[currentIndex];
  const hasAnswered = selectedOptionId !== undefined;
  const answeredCount = Object.keys(answers).length;
  const isLast = currentIndex === total - 1;

  const score = useMemo(
    () => questions.reduce((acc, q, i) => (answers[i] === q.correctOptionId ? acc + 1 : acc), 0),
    [answers, questions]
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640 && total <= 50) {
      dotRefs.current[currentIndex]?.scrollIntoView({
        behavior: "auto",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex, total]);

  const handleSelect = useCallback(
    (optionId: string) => {
      // Practice mode has nothing to lock -- the answer is already shown.
      if (mode !== "quiz" || hasAnswered) return;
      setAnswers((prev) => ({ ...prev, [currentIndex]: optionId }));
    },
    [mode, hasAnswered, currentIndex]
  );

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total) return;
      if (mode === "quiz") {
        const alreadyAnswered = answers[index] !== undefined;
        const isNextUnansweredSlot = index === answeredCount;
        if (!alreadyAnswered && !isNextUnansweredSlot) return; // no skipping ahead
      }
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [mode, answers, answeredCount, currentIndex, total]
  );

  const handleNext = () => {
    if (mode === "quiz" && !hasAnswered) return;
    if (isLast) {
      setShowResults(true);
      return;
    }
    setDirection(1);
    setCurrentIndex((i) => i + 1);
  };

  const handlePrevious = () => {
    if (currentIndex === 0) return;
    setDirection(-1);
    setCurrentIndex((i) => i - 1);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
    setDirection(1);
  };

  const nextDisabled = mode === "quiz" && !hasAnswered;
  const revealForCurrent = isPractice || (mode === "quiz" && hasAnswered);

  if (showResults) {
    return (
      <ResultsScreen
        subjectTitle={subjectTitle}
        mode={mode}
        questions={questions}
        answers={answers}
        score={score}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-3 py-4 sm:px-6 sm:py-8">
      <QuizHeader
        subjectTitle={subjectTitle}
        mode={mode}
        current={currentIndex}
        total={total}
        answeredCount={answeredCount}
      />

      {/* Question progress / dots: fast & responsive on both small and large banks */}
      {total <= 50 ? (
        <div className="no-scrollbar mb-4 flex gap-1.5 overflow-x-auto py-1 sm:hidden">
          {questions.map((q, i) => {
            const answered = answers[i] !== undefined;
            const isCurrent = i === currentIndex;
            const jumpable = isPractice || answered || i === answeredCount;
            return (
              <button
                key={q.id}
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                type="button"
                onClick={() => goTo(i)}
                disabled={!jumpable}
                aria-label={`Go to question ${i + 1}${answered ? ", answered" : ""}`}
                aria-current={isCurrent ? "step" : undefined}
                className={cn(
                  "h-2.5 w-2.5 shrink-0 rounded-full transition-all",
                  isCurrent && "w-6 bg-primary",
                  !isCurrent && mode === "quiz" && answered && "bg-emerald-500/70",
                  !isCurrent && mode === "quiz" && !answered && jumpable && "bg-muted-foreground/30",
                  !isCurrent && mode === "quiz" && !answered && !jumpable && "bg-muted-foreground/10",
                  !isCurrent && mode === "practice" && "bg-muted-foreground/30"
                )}
              />
            );
          })}
        </div>
      ) : (
        <div className="mb-4 flex items-center justify-between rounded-lg border border-border/60 bg-secondary/30 px-3 py-2 text-xs font-medium text-muted-foreground sm:hidden">
          <span>Question {currentIndex + 1} of {total}</span>
          <span>{Math.round(((currentIndex + 1) / total) * 100)}%</span>
        </div>
      )}

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                Question {currentIndex + 1} of {total}
              </p>
              <h2 className="text-sm font-semibold leading-relaxed text-foreground sm:text-base lg:text-lg">
                <MathText text={currentQuestion.text} />
              </h2>
            </CardHeader>
            <CardContent>
              <DiagramRenderer questionId={currentQuestion.id} />
              {currentQuestion.diagramUrl && !hasDiagram(currentQuestion.id) && (
                <div className="mb-4">
                  <EngineeringDiagram
                    src={currentQuestion.diagramUrl}
                    alt={`Reference diagram for: ${currentQuestion.text}`}
                  />
                </div>
              )}

              <div className="flex flex-col gap-2.5 sm:gap-3" role="group" aria-label="Answer options">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOptionId === option.id;
                  const isCorrectOption = option.id === currentQuestion.correctOptionId;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect(option.id)}
                      disabled={isPractice || hasAnswered}
                      aria-pressed={isSelected}
                      className={cn(
                        "flex min-h-[52px] w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors sm:min-h-[60px] sm:text-base",
                        !isPractice && !hasAnswered && "border-border bg-secondary/40 hover:bg-secondary active:bg-secondary",
                        !isPractice && hasAnswered && "disabled:cursor-not-allowed",
                        isPractice && "cursor-default",
                        revealForCurrent && isCorrectOption && "border-emerald-500/60 bg-emerald-500/15 text-emerald-100",
                        revealForCurrent && isSelected && !isCorrectOption && "border-destructive/60 bg-destructive/15 text-red-100",
                        revealForCurrent && !isSelected && !isCorrectOption && "border-border bg-secondary/20 opacity-70"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold sm:h-8 sm:w-8",
                          !revealForCurrent && "border-border text-muted-foreground",
                          revealForCurrent && isCorrectOption && "border-emerald-500 bg-emerald-500 text-white",
                          revealForCurrent && isSelected && !isCorrectOption && "border-destructive bg-destructive text-white"
                        )}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">
                        <MathText text={option.text} />
                      </span>
                      {revealForCurrent && isCorrectOption && (
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                      )}
                      {revealForCurrent && isSelected && !isCorrectOption && (
                        <XCircle className="h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div aria-live="polite">
                {revealForCurrent && (
                  <div className="mt-4 rounded-lg border border-primary/30 bg-primary/10 p-3 text-sm text-foreground/90 sm:p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      Explanation
                    </p>
                    <p className="leading-relaxed">
                      <MathText text={currentQuestion.explanation} />
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

      <div className="mt-4 flex items-center justify-between gap-3 sm:mt-6">
        <Button
          variant="outline"
          size="touch"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="w-auto flex-1 sm:flex-none"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        {mode === "quiz" && !hasAnswered && !isLast && (
          <Button
            variant="ghost"
            size="touch"
            onClick={() => {
              setDirection(1);
              setCurrentIndex((i) => i + 1);
            }}
            className="w-auto text-muted-foreground hover:text-foreground"
          >
            Skip
          </Button>
        )}

        <Button
          variant={isLast ? "emerald" : "default"}
          size="touch"
          onClick={handleNext}
          disabled={nextDisabled}
          className="w-auto flex-1 sm:flex-none"
        >
          <span className="hidden sm:inline">{isLast ? "See results" : "Next"}</span>
          <span className="sm:hidden">{isLast ? "Results" : "Next"}</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {nextDisabled && (
        <p className="mt-2 text-center text-xs text-muted-foreground">Select an answer or click Skip to continue.</p>
      )}
    </div>
  );
}

function QuizHeader({
  subjectTitle,
  mode,
  current,
  total,
  answeredCount,
}: {
  subjectTitle: string;
  mode: QuizMode;
  current: number;
  total: number;
  answeredCount: number;
}) {
  const progressValue = mode === "practice" ? ((current + 1) / total) * 100 : (answeredCount / total) * 100;

  return (
    <div className="mb-4 sm:mb-6">
      <div className="mb-3 flex items-center justify-between gap-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-md py-1.5 pr-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Dashboard</span>
        </Link>
        <Badge variant={mode === "practice" ? "amber" : "emerald"}>
          {mode === "practice" ? "Practice Mode" : "Quiz Mode"}
        </Badge>
      </div>
      <h1 className="mb-3 truncate text-base font-bold sm:text-xl lg:text-2xl">{subjectTitle}</h1>
      <Progress value={progressValue} className="h-1.5 sm:h-2" />
    </div>
  );
}

function ResultsScreen({
  subjectTitle,
  mode,
  questions,
  answers,
  score,
  onRestart,
}: {
  subjectTitle: string;
  mode: QuizMode;
  questions: QuizQuestion[];
  answers: AnswerMap;
  score: number;
  onRestart: () => void;
}) {
  const total = questions.length;
  const isPractice = mode === "practice";
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-3 py-4 sm:px-6 sm:py-8">
      <div className="mb-4 flex items-center justify-between sm:mb-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Dashboard</span>
        </Link>
        <Badge variant={isPractice ? "amber" : "emerald"}>{isPractice ? "Practice Mode" : "Quiz Mode"}</Badge>
      </div>

      <Card className="mb-6 text-center">
        <CardContent className="pt-6 sm:pt-8">
          <Award className="mx-auto mb-3 h-10 w-10 text-primary sm:h-12 sm:w-12" aria-hidden="true" />
          <h1 className="text-lg font-bold sm:text-2xl">
            {isPractice ? "Practice review complete" : "Quiz complete"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">{subjectTitle}</p>

          {isPractice ? (
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
              You reviewed all {total} questions. Practice mode doesn&apos;t keep a score -- switch to
              Quiz mode from the dashboard when you&apos;re ready to test yourself.
            </p>
          ) : (
            <>
              <p className="mt-4 text-4xl font-bold text-primary sm:text-5xl">{percentage}%</p>
              <div className="mt-3 flex items-center justify-center gap-4 text-sm sm:text-base">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> {score} correct
                </span>
                <span className="flex items-center gap-1.5 text-destructive">
                  <XCircle className="h-4 w-4" aria-hidden="true" /> {total - score} incorrect
                </span>
              </div>
            </>
          )}

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Button variant="outline" onClick={onRestart}>
              <RotateCcw className="h-4 w-4" />
              {isPractice ? "Review again" : "Retake quiz"}
            </Button>
            <Button asChild>
              <Link href="/">
                <Home className="h-4 w-4" />
                Back to dashboard
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <h2 className="mb-3 text-sm font-semibold text-muted-foreground sm:text-base">Full review</h2>
      <div className="flex flex-col gap-3">
        {questions.map((q, i) => {
          const userAnswerId = answers[i];
          const isCorrect = userAnswerId === q.correctOptionId;
          const wasAnswered = userAnswerId !== undefined;
          return (
            <Card key={q.id}>
              <CardContent className="pt-4 sm:pt-6">
                <div className="mb-2 flex items-start gap-2">
                  {!isPractice &&
                    (wasAnswered ? (
                      isCorrect ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                      ) : (
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                      )
                    ) : (
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-muted-foreground/40" />
                    ))}
                  <p className="text-sm font-medium leading-relaxed sm:text-base">
                    {i + 1}. <MathText text={q.text} />
                  </p>
                </div>
                <div className="flex flex-col gap-1 text-sm sm:pl-6">
                  {q.options.map((opt) => {
                    const isThisCorrect = opt.id === q.correctOptionId;
                    const isThisUser = opt.id === userAnswerId;
                    return (
                      <p
                        key={opt.id}
                        className={cn(
                          "rounded px-2 py-1",
                          isThisCorrect && "bg-emerald-500/10 text-emerald-300",
                          isThisUser && !isThisCorrect && "bg-destructive/10 text-red-300"
                        )}
                      >
                        <MathText text={opt.text} />
                        {isThisCorrect && " -- correct answer"}
                        {isThisUser && !isThisCorrect && " -- your answer"}
                      </p>
                    );
                  })}
                </div>
                <p className="mt-2 text-sm text-muted-foreground sm:pl-6">
                  <MathText text={q.explanation} />
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
