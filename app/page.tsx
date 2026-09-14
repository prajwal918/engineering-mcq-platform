import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { getSubjects } from "@/utils/getSubjects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

async function getQuestionCount(subjectId: string): Promise<number> {
  try {
    // Relative import so webpack's context-module resolution can find every
    // /data/subjects/*/questions.ts file at build time.
    const mod = await import(`../data/subjects/${subjectId}/questions`);
    return mod.questions?.length ?? 0;
  } catch {
    return 0;
  }
}

function resolveIcon(name: string): LucideIcon {
  const icon = (Icons as unknown as Record<string, LucideIcon>)[name];
  return icon ?? Icons.BookOpen;
}

export default async function DashboardPage() {
  const subjects = getSubjects();
  const subjectsWithCounts = await Promise.all(
    subjects.map(async (subject) => ({
      ...subject,
      questionCount: await getQuestionCount(subject.id),
    }))
  );

  return (
    <main className="mx-auto max-w-6xl px-2 py-4 sm:px-4 sm:py-8">
      <header className="mb-6 sm:mb-10">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          Pick a subject to study
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Practice mode shows you every answer and explanation as you go. Quiz mode locks in your
          answers and scores you at the end.
        </p>
      </header>

      {subjectsWithCounts.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {subjectsWithCounts.map((subject) => {
            const Icon = resolveIcon(subject.icon);
            return (
              <Card
                key={subject.id}
                className="flex flex-col justify-between border-border/80 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {subject.questionCount > 0 && (
                      <Badge variant="outline">{subject.questionCount} questions</Badge>
                    )}
                  </div>
                  <CardTitle>{subject.title}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild variant="amberOutline" size="touch" className="flex-1">
                    <Link href={`/quiz/${subject.id}?mode=practice`}>Practice</Link>
                  </Button>
                  <Button asChild variant="emerald" size="touch" className="flex-1">
                    <Link href={`/quiz/${subject.id}?mode=quiz`}>Quiz</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </main>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground sm:p-12">
      <p className="text-sm sm:text-base">
        No subjects yet. Add a folder under{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5">data/subjects/</code> with a{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5">questions.ts</code> file to get
        started.
      </p>
    </div>
  );
}
