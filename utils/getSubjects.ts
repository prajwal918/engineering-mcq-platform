import fs from "node:fs";
import path from "node:path";
import type { SubjectMeta } from "@/types/quiz";

const SUBJECTS_DIR = path.join(process.cwd(), "data", "subjects");

/**
 * Manual overrides, keyed by folder name under /data/subjects/.
 *
 * Phase 7 (Subject Registration): to add a new subject, drop a
 * `questions.ts` file in a new /data/subjects/<id>/ folder and add an
 * entry here with a clean title, a short description, and a lucide-react
 * icon name. Folders without an entry still show up on the dashboard --
 * see `formatFallbackTitle` below -- so registration is optional polish,
 * not a requirement for a subject to appear.
 */
const SUBJECT_MAP: Record<string, Omit<SubjectMeta, "id">> = {
  "operating-systems": {
    title: "Operating Systems",
    description:
      "Process management, CPU scheduling, inter-process communication, and multithreading models.",
    icon: "Cpu",
  },
  "theory-of-computation": {
    title: "Theory of Computation",
    description:
      "Finite automata, regular languages, grammars, pushdown automata, Turing machines, and decidability.",
    icon: "Binary",
  },
  "computer-networks": {
    title: "Computer Networks & Communication",
    description:
      "Unit 1 of CS3001: data communication fundamentals, the OSI model, transmission media, encoding, and error control.",
    icon: "Network",
  },
  "cryptography-network-security": {
    title: "Cryptography & Network Security",
    description:
      "Security foundations, classical ciphers (Caesar, Playfair, Hill, Vigenere), and public-key cryptography with RSA.",
    icon: "Lock",
  },
  "sociology": {
    title: "Sociology & Rural Development",
    description: "Questions on village structure, diversity, kinship, social issues, and rural livelihood programs.",
    icon: "Users",
  },
  "ipr": {
    title: "Intellectual Property Rights",
    description:
      "Units 1-2: IPR fundamentals, Indian IP statutes and international treaties, patents, industrial designs, copyright, and trademarks.",
    icon: "Scale",
  },
  "quantitative-aptitude": {
    title: "Quantitative Aptitude",
    description:
      "Placement-prep problem sets: time & work, time/speed/distance, trains, boats & streams, pipes & cisterns, and mixtures & alligations.",
    icon: "Calculator",
  },
};

/**
 * Turns a raw folder name like "digital-logic_design" into "Digital Logic Design"
 * for subjects that haven't been registered in SUBJECT_MAP yet.
 */
function formatFallbackTitle(slug: string): string {
  return slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Scans /data/subjects/ for subject folders and returns display metadata
 * for each one, applying SUBJECT_MAP overrides and falling back to an
 * auto-formatted title + generic description/icon otherwise.
 *
 * This only touches the filesystem (folder names), not question content --
 * see app/page.tsx for how question counts are read via a dynamic import,
 * which is the approach that plays well with Next.js's bundler.
 */
export function getSubjects(): SubjectMeta[] {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(SUBJECTS_DIR, { withFileTypes: true });
  } catch {
    return [];
  }

  const subjectIds = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((id) => {
      // Only surface folders that actually contain a questions module.
      return fs.existsSync(path.join(SUBJECTS_DIR, id, "questions.ts"));
    })
    .sort((a, b) => a.localeCompare(b));

  return subjectIds.map((id) => {
    const override = SUBJECT_MAP[id];
    if (override) {
      return { id, ...override };
    }
    return {
      id,
      title: formatFallbackTitle(id),
      description: `Practice questions for ${formatFallbackTitle(id)}.`,
      icon: "BookOpen",
    };
  });
}

/** Look up a single subject's metadata by id, or undefined if it doesn't exist. */
export function getSubjectById(id: string): SubjectMeta | undefined {
  return getSubjects().find((subject) => subject.id === id);
}
