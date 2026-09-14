/**
 * Standard construction for {w | every a in w is followed by exactly
 * two b's}: q0 (start, accepting, self-loop b) --a--> q1 --b--> q2
 * --b--> q0, with any premature 'a' from q1 or q2 falling into a
 * non-accepting trap state that can never be left.
 */
export default function FAExactlyTwoBs() {
  return (
    <svg
      viewBox="0 0 460 260"
      className="mx-auto h-auto w-full max-w-lg text-slate-700 dark:text-slate-300"
      role="img"
      aria-label="Start state q0 is accepting with a self loop on b, and moves to q1 on a. q1 moves to q2 on b. q2 moves back to q0 on b, completing exactly two b's after an a. From q1 or q2, reading a instead moves to a non-accepting trap state with a self loop on both a and b."
    >
      <defs>
        <marker id="g13-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>

      <line x1="14" y1="70" x2="52" y2="70" stroke="currentColor" strokeWidth="2" markerEnd="url(#g13-arrow)" />

      <circle cx="80" cy="70" r="26" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <circle cx="80" cy="70" r="19" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="80" y="76" textAnchor="middle" fontSize="16" className="fill-slate-800 dark:fill-slate-100 font-mono">q0</text>

      <circle cx="230" cy="70" r="26" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="230" y="76" textAnchor="middle" fontSize="16" className="fill-slate-800 dark:fill-slate-100 font-mono">q1</text>

      <circle cx="380" cy="70" r="26" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="380" y="76" textAnchor="middle" fontSize="16" className="fill-slate-800 dark:fill-slate-100 font-mono">q2</text>

      <circle cx="230" cy="200" r="26" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="230" y="206" textAnchor="middle" fontSize="14" className="fill-slate-800 dark:fill-slate-100 font-mono">trap</text>

      {/* q0 self loop: b */}
      <path d="M 66 46 Q 40 10 76 -2 Q 104 -4 92 30" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g13-arrow)" />
      <text x="52" y="4" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">b</text>

      {/* q0 -> q1 : a */}
      <line x1="106" y1="70" x2="204" y2="70" stroke="currentColor" strokeWidth="2" markerEnd="url(#g13-arrow)" />
      <text x="155" y="62" textAnchor="middle" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">a</text>

      {/* q1 -> q2 : b */}
      <line x1="256" y1="70" x2="354" y2="70" stroke="currentColor" strokeWidth="2" markerEnd="url(#g13-arrow)" />
      <text x="305" y="62" textAnchor="middle" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">b</text>

      {/* q2 -> q0 : b (arc over the top) */}
      <path d="M 372 46 Q 260 -40 96 48" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g13-arrow)" />
      <text x="230" y="-8" textAnchor="middle" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">b</text>

      {/* q1 -> trap : a */}
      <line x1="230" y1="96" x2="230" y2="174" stroke="currentColor" strokeWidth="2" markerEnd="url(#g13-arrow)" />
      <text x="244" y="140" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">a</text>

      {/* q2 -> trap : a */}
      <path d="M 366 92 Q 310 150 256 190" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g13-arrow)" />
      <text x="326" y="150" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">a</text>

      {/* trap self loop: a, b */}
      <path d="M 210 222 Q 180 250 210 256 Q 240 260 226 232" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g13-arrow)" />
      <text x="176" y="252" fontSize="14" className="fill-slate-700 dark:fill-slate-300 italic">a, b</text>
    </svg>
  );
}
