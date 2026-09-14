import { notFound } from "next/navigation";

import QuizClient from "@/components/QuizClient";
import { getSubjectById } from "@/utils/getSubjects";
import type { QuizMode, QuizQuestion } from "@/types/quiz";

interface QuizPageProps {
  // Next.js 15+: params and searchParams are Promises in the App Router.
  params: Promise<{ subjectId: string }>;
  searchParams: Promise<{ mode?: string | string[] }>;
}

export default async function QuizPage({ params, searchParams }: QuizPageProps) {
  const { subjectId } = await params;
  const resolvedSearchParams = await searchParams;
  const rawMode = Array.isArray(resolvedSearchParams.mode)
    ? resolvedSearchParams.mode[0]
    : resolvedSearchParams.mode;
  const mode: QuizMode = rawMode === "practice" ? "practice" : "quiz";

  const subject = getSubjectById(subjectId);
  if (!subject) {
    notFound();
  }

  let questions: QuizQuestion[] | undefined;
  try {
    // Relative dynamic import (not the "@/..." alias) so webpack's context-module
    // resolution reliably picks up every /data/subjects/*/questions.ts file.
    const mod = await import(`../../../data/subjects/${subjectId}/questions`);
    questions = mod.questions;
  } catch {
    notFound();
  }

  if (!questions || questions.length === 0) {
    notFound();
  }

  return (
    <QuizClient
      subjectId={subjectId}
      subjectTitle={subject.title}
      mode={mode}
      questions={questions}
    />
  );
}
