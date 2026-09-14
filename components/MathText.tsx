/**
 * Question and option text is transcribed verbatim from source material,
 * using plain-text conventions to preserve exponents/subscripts exactly:
 *   - "a^n"      -> a with superscript n
 *   - "a^(n+1)"  -> a with superscript "n+1"
 *   - "q_0"      -> q with subscript 0
 *   - "S_(n+1)"  -> S with subscript "n+1"
 * Everything else (Σ, ε, δ, →, ∈, Φ, ∅, ∪, ∩, ⊆, etc.) is stored as the
 * literal Unicode character and needs no special handling.
 *
 * This component parses that notation into real <sup>/<sub> elements so
 * the rendered question matches the source's mathematical formatting,
 * rather than flattening "a^(n+1)" into plain caret text.
 */

import type { ReactNode } from "react";

const MATH_PATTERN =
  /([A-Za-zΣΓΔΩ0-9])\^(\([^)]+\)|[A-Za-z0-9+\-]+)|([A-Za-zΣΓΔΩ])_(\([^)]+\)|[A-Za-z0-9+\-]+)/g;

function stripParens(token: string): string {
  return token.startsWith("(") && token.endsWith(")") ? token.slice(1, -1) : token;
}

export function MathText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  // text.matchAll (rather than a manual MATH_PATTERN.exec loop) never
  // touches MATH_PATTERN's own .lastIndex, so this stays pure even though
  // MATH_PATTERN is a shared module-level /g regex -- safe to call from
  // render with no external mutation.
  for (const match of text.matchAll(MATH_PATTERN)) {
    const index = match.index ?? 0;

    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      nodes.push(match[1]);
      nodes.push(<sup key={`sup-${key++}`}>{stripParens(match[2])}</sup>);
    } else if (match[3] !== undefined && match[4] !== undefined) {
      nodes.push(match[3]);
      nodes.push(<sub key={`sub-${key++}`}>{stripParens(match[4])}</sub>);
    }

    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}
