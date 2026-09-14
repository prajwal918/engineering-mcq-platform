"use client";

import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from "react";

/**
 * Every question whose stem references a visual structure (tree, graph,
 * automaton, state table, protocol stack, etc.) gets an entry here, keyed
 * by the question's `id`. Add a new diagram by dropping a component file
 * in this folder and registering it below -- no changes to QuizClient.tsx
 * are needed.
 *
 * Question ids are namespaced per subject (`os-*`, `toc-*`, plain `q*` for
 * computer-networks), so the flat key space below is safe as long as a
 * future subject doesn't reuse the bare `q<n>` scheme computer-networks
 * uses -- prefer a subject-specific prefix for any new subject's ids.
 */
const diagramLoaders: Record<string, () => Promise<{ default: ComponentType }>> = {
  // Theory of Computation -- finite automata figures.
  "toc-fa12": () => import("./FAUnreachableState"),
  "toc-fa15": () => import("./FASingleState"),
  "toc-g1": () => import("./FAStringUVW"),
  "toc-g2": () => import("./FAParityRing"),
  "toc-g5": () => import("./FAEndsWithAB"),
  "toc-g6": () => import("./FSMStateTable"),
  "toc-g12": () => import("./FAModThreeModTwo"),
  "toc-g13": () => import("./FAExactlyTwoBs"),
  "toc-g16": () => import("./FAEndsWith00"),

  // Computer Networks -- OSI stack reference, reused across the four
  // questions that ask which layer does what.
  q15: () => import("./OsiLayersDiagram"),
  q17: () => import("./OsiLayersDiagram"),
  q21: () => import("./OsiLayersDiagram"),
  q22: () => import("./OsiLayersDiagram"),
};

// Built once at module scope (not per-render) so React.lazy's internal
// cache/Suspense bookkeeping is stable across re-renders and navigation.
const diagramComponents: Record<string, LazyExoticComponent<ComponentType>> = Object.fromEntries(
  Object.entries(diagramLoaders).map(([id, loader]) => [id, lazy(loader)])
);

/** True if `questionId` has a registered inline diagram component. */
export function hasDiagram(questionId: string): boolean {
  return questionId in diagramComponents;
}

function DiagramFallback() {
  return (
    <div className="flex h-32 w-full animate-pulse items-center justify-center rounded-lg border border-border bg-secondary/50 text-sm text-muted-foreground">
      Loading diagram...
    </div>
  );
}

export default function DiagramRenderer({ questionId }: { questionId: string }) {
  const LazyDiagram = diagramComponents[questionId];

  if (!LazyDiagram) {
    return null;
  }

  return (
    <div className="mb-4 flex justify-center rounded-lg border border-border bg-card/50 p-3 sm:p-4">
      <Suspense fallback={<DiagramFallback />}>
        <LazyDiagram />
      </Suspense>
    </div>
  );
}
