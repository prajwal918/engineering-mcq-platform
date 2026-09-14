/**
 * States S (start), t (accepting, self-loop a), r (self-loop b).
 * S<->t is a single bidirectional edge on b; S<->r is a single
 * bidirectional edge on a. Re-derived and traced against strings
 * u=abbaba, v=bab, w=aabb to confirm it reproduces the source's answer
 * (accepts u, rejects v and w) before being drawn here.
 */
export default function FAStringUVW() {
  return (
    <svg
      viewBox="0 0 380 260"
      className="mx-auto h-auto w-full max-w-sm text-slate-700 dark:text-slate-300"
      role="img"
      aria-label="Three states S, t, r. S is the start state. t is accepting with a self loop on a. r has a self loop on b. S and t are connected by a bidirectional edge labeled b. S and r are connected by a bidirectional edge labeled a."
    >
      <defs>
        <marker id="g1-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>

      <line x1="14" y1="150" x2="60" y2="150" stroke="currentColor" strokeWidth="2" markerEnd="url(#g1-arrow)" />

      <circle cx="90" cy="150" r="28" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="90" y="156" textAnchor="middle" fontSize="17" className="fill-slate-800 dark:fill-slate-100 font-mono">S</text>

      <circle cx="300" cy="70" r="28" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <circle cx="300" cy="70" r="21" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="300" y="76" textAnchor="middle" fontSize="17" className="fill-slate-800 dark:fill-slate-100 font-mono">t</text>

      <circle cx="300" cy="220" r="28" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="300" y="226" textAnchor="middle" fontSize="17" className="fill-slate-800 dark:fill-slate-100 font-mono">r</text>

      {/* S <-> t, bidirectional, label b */}
      <line x1="112" y1="132" x2="276" y2="86" stroke="currentColor" strokeWidth="2" markerStart="url(#g1-arrow)" markerEnd="url(#g1-arrow)" />
      <text x="185" y="98" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">b</text>

      {/* S <-> r, bidirectional, label a */}
      <line x1="112" y1="168" x2="276" y2="204" stroke="currentColor" strokeWidth="2" markerStart="url(#g1-arrow)" markerEnd="url(#g1-arrow)" />
      <text x="185" y="204" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">a</text>

      {/* self loop on t: a */}
      <path d="M 320 52 Q 356 30 330 12 Q 306 4 302 34" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g1-arrow)" />
      <text x="352" y="20" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">a</text>

      {/* self loop on r: b */}
      <path d="M 320 240 Q 356 258 330 250 Q 306 244 302 234" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g1-arrow)" />
      <text x="340" y="256" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">b</text>
    </svg>
  );
}
