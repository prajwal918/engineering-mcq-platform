/**
 * The standard 3-state DFA for "strings ending in ab": q0 (start,
 * self-loop b), q1 (self-loop a, reached after an a), q2 (accepting,
 * reached after 'ab'). q2 --a--> q1 and q2 --b--> q0 keep the machine
 * correctly tracking the last one or two characters. The question asks
 * about interchanging final/non-final states, which complements
 * whatever language this original diagram accepts.
 */
export default function FAEndsWithAB() {
  return (
    <svg
      viewBox="0 0 420 220"
      className="mx-auto h-auto w-full max-w-md text-slate-700 dark:text-slate-300"
      role="img"
      aria-label="Three states q0, q1, q2. q0 is the start state with a self loop on b, and moves to q1 on a. q1 has a self loop on a and moves to q2 on b. q2 is accepting, and moves back to q1 on a and to q0 on b."
    >
      <defs>
        <marker id="g5-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>

      <line x1="14" y1="140" x2="52" y2="140" stroke="currentColor" strokeWidth="2" markerEnd="url(#g5-arrow)" />

      <circle cx="80" cy="140" r="26" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="80" y="146" textAnchor="middle" fontSize="16" className="fill-slate-800 dark:fill-slate-100 font-mono">q0</text>

      <circle cx="220" cy="80" r="26" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x="220" y="86" textAnchor="middle" fontSize="16" className="fill-slate-800 dark:fill-slate-100 font-mono">q1</text>

      <circle cx="360" cy="140" r="26" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <circle cx="360" cy="140" r="19" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="360" y="146" textAnchor="middle" fontSize="16" className="fill-slate-800 dark:fill-slate-100 font-mono">q2</text>

      {/* q0 self loop: b */}
      <path d="M 66 116 Q 40 80 76 68 Q 104 66 92 100" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g5-arrow)" />
      <text x="52" y="76" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">b</text>

      {/* q0 -> q1 : a */}
      <path d="M 100 122 Q 150 100 196 92" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g5-arrow)" />
      <text x="148" y="92" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">a</text>

      {/* q1 self loop: a */}
      <path d="M 206 56 Q 190 20 226 18 Q 254 22 240 54" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g5-arrow)" />
      <text x="216" y="18" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">a</text>

      {/* q1 -> q2 : b */}
      <path d="M 244 96 Q 300 110 336 122" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g5-arrow)" />
      <text x="292" y="106" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">b</text>

      {/* q2 -> q1 : a (back arc, above) */}
      <path d="M 344 118 Q 300 40 226 58" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g5-arrow)" />
      <text x="292" y="52" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">a</text>

      {/* q2 -> q0 : b (back arc, below) */}
      <path d="M 344 162 Q 220 210 92 158" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g5-arrow)" />
      <text x="220" y="204" textAnchor="middle" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">b</text>
    </svg>
  );
}
