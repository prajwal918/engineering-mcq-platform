/**
 * The two experiences the quiz engine can render. See README.md for the
 * full behavioral contract of each mode.
 */
export type QuizMode = "quiz" | "practice";

/**
 * A single selectable answer. `id` is scoped to its parent question and is
 * what `correctOptionId` and the answer-tracking map reference.
 */
export interface QuizOption {
  id: string;
  text: string;
}

/**
 * One multiple-choice question.
 *
 * `diagramUrl` is for an externally-hosted reference image (rendered via
 * EngineeringDiagram's pan/zoom viewer). It is separate from the inline SVG
 * components mapped in components/diagrams/DiagramRenderer.tsx -- a question
 * can use either, both, or neither.
 */
export interface QuizQuestion {
  id: string;
  text: string;
  diagramUrl?: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
  /**
   * Optional grouping label (e.g. "Finite Automata", "GATE Questions")
   * for filtering/organization within a subject's question bank. Not
   * required by every subject -- purely additive.
   */
  topic?: string;
}

/**
 * Metadata describing a subject folder under /data/subjects/. Returned by
 * utils/getSubjects.ts and consumed by the dashboard.
 */
export interface SubjectMeta {
  id: string;
  title: string;
  description: string;
  /** A lucide-react icon export name, e.g. "Network". */
  icon: string;
}
