/**
 * Redrawn from the source diagram: states A (start), B (accepting,
 * double circle), C. B's only edge points *out* to A — nothing ever
 * points *into* B — so B can never be entered. That is what makes the
 * language accepted by this FA "Null", and what makes B an inaccessible
 * state in the two follow-up questions.
 */
export default function FAUnreachableState() {
  return (
    <svg
      viewBox="0 0 440 280"
      className="mx-auto h-auto w-full max-w-md text-slate-700 dark:text-slate-300"
      role="img"
      aria-label="Finite automaton with states A, B, and C. A is the start state. B is an accepting state reached only by an outgoing edge to A, with no incoming edges, making it unreachable. C has a self loop on b, an edge to A labeled a, and receives an edge from A labeled b."
    >
      <defs>
        <marker
          id="fa-unreachable-arrow"
          viewBox="0 0 10 10"
          refX="8.5"
          refY="5"
          markerWidth="6.5"
          markerHeight="6.5"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* start arrow into A */}
      <line
        x1="18"
        y1="192"
        x2="66"
        y2="192"
        stroke="currentColor"
        strokeWidth="2"
        markerEnd="url(#fa-unreachable-arrow)"
      />

      {/* State A */}
      <circle cx="96" cy="192" r="28" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="96" y="198" textAnchor="middle" fontSize="18" className="fill-slate-800 dark:fill-slate-100 font-mono">
        A
      </text>

      {/* State C */}
      <circle cx="250" cy="232" r="28" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="250" y="238" textAnchor="middle" fontSize="18" className="fill-slate-800 dark:fill-slate-100 font-mono">
        C
      </text>

      {/* State B (accepting: double circle) */}
      <circle cx="332" cy="88" r="28" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <circle cx="332" cy="88" r="21" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="332" y="94" textAnchor="middle" fontSize="18" className="fill-slate-800 dark:fill-slate-100 font-mono">
        B
      </text>

      {/* A -> C labeled b */}
      <path
        d="M 116 210 Q 175 250 224 236"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        markerEnd="url(#fa-unreachable-arrow)"
      />
      <text x="168" y="254" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">
        b
      </text>

      {/* C -> A labeled a */}
      <path
        d="M 226 216 Q 175 190 122 198"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        markerEnd="url(#fa-unreachable-arrow)"
      />
      <text x="168" y="196" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">
        a
      </text>

      {/* C self loop labeled b */}
      <path
        d="M 272 214 Q 312 170 272 148 Q 244 138 240 168"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        markerEnd="url(#fa-unreachable-arrow)"
      />
      <text x="298" y="158" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">
        b
      </text>

      {/* B self loop labeled a */}
      <path
        d="M 354 68 Q 392 40 368 92 Q 358 104 350 90"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        markerEnd="url(#fa-unreachable-arrow)"
      />
      <text x="392" y="56" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">
        a
      </text>

      {/* B -> A labeled a (the only edge touching B — outgoing only) */}
      <path
        d="M 306 108 Q 210 55 118 172"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        markerEnd="url(#fa-unreachable-arrow)"
      />
      <text x="206" y="68" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">
        a
      </text>

      <text x="220" y="20" textAnchor="middle" fontSize="12" className="fill-muted-foreground">
        B has no incoming edge — it can never be reached
      </text>
    </svg>
  );
}
