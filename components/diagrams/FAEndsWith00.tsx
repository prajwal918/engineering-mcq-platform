/**
 * Standard 3-state "ends with 00" construction: q0 (start, self-loop
 * 1 — a run of leading 1's is irrelevant), q0 --0--> q1 --0--> q2
 * (accepting, self-loop 0 — more trailing 0's still end in 00). Any 1
 * seen from q1 or q2 breaks the trailing-00 pattern, sending the
 * machine back to q0.
 */
export default function FAEndsWith00() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="mx-auto h-auto w-full max-w-md text-slate-700 dark:text-slate-300"
      role="img"
      aria-label="Start state q0 has a self loop on 1, and moves to q1 on 0. q1 moves to q2 on 0. q2 is accepting with a self loop on 0. Both q1 and q2 move back to q0 on input 1."
    >
      <defs>
        <marker id="g16-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>

      <line x1="14" y1="130" x2="52" y2="130" stroke="currentColor" strokeWidth="2" markerEnd="url(#g16-arrow)" />

      <circle cx="80" cy="130" r="26" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="80" y="136" textAnchor="middle" fontSize="16" className="fill-slate-800 dark:fill-slate-100 font-mono">q0</text>

      <circle cx="220" cy="70" r="26" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="220" y="76" textAnchor="middle" fontSize="16" className="fill-slate-800 dark:fill-slate-100 font-mono">q1</text>

      <circle cx="340" cy="130" r="26" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <circle cx="340" cy="130" r="19" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="340" y="136" textAnchor="middle" fontSize="16" className="fill-slate-800 dark:fill-slate-100 font-mono">q2</text>

      {/* q0 self loop: 1 */}
      <path d="M 66 106 Q 40 70 76 58 Q 104 56 92 90" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g16-arrow)" />
      <text x="52" y="66" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">1</text>

      {/* q0 -> q1 : 0 */}
      <path d="M 100 112 Q 150 90 196 78" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g16-arrow)" />
      <text x="150" y="80" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">0</text>

      {/* q1 -> q2 : 0 */}
      <path d="M 244 78 Q 290 90 316 112" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g16-arrow)" />
      <text x="290" y="80" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">0</text>

      {/* q2 self loop: 0 */}
      <path d="M 358 152 Q 384 188 348 200 Q 320 196 332 164" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g16-arrow)" />
      <text x="352" y="200" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">0</text>

      {/* q1 -> q0 : 1 (back arc) */}
      <path d="M 202 92 Q 150 130 106 138" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g16-arrow)" />
      <text x="150" y="152" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">1</text>

      {/* q2 -> q0 : 1 (long back arc) */}
      <path d="M 320 152 Q 220 220 92 156" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g16-arrow)" />
      <text x="220" y="200" textAnchor="middle" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">1</text>
    </svg>
  );
}
