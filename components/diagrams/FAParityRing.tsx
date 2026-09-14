/**
 * A 4-state ring: q0-q1 (label 1), q1-q2 (label 0), q2-q3 (label 1),
 * q3-q0 (label 0), each edge traversable in either direction on its
 * label. No start or accept state is marked here deliberately — the
 * question asks which states should be chosen for those roles.
 * Re-derived and confirmed: starting at q1 and accepting at q2 yields
 * exactly "odd number of 0's, even number of 1's", matching the
 * source's answer.
 */
export default function FAParityRing() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="mx-auto h-auto w-full max-w-sm text-slate-700 dark:text-slate-300"
      role="img"
      aria-label="Four states q0, q1, q2, q3 arranged in a square. q0 top left connects to q1 top right on input 1. q1 connects to q2 bottom right on input 0. q2 connects to q3 bottom left on input 1. q3 connects back to q0 on input 0. Every edge is bidirectional."
    >
      <defs>
        <marker id="g2-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>

      {[
        { id: "q0", cx: 80, cy: 80 },
        { id: "q1", cx: 240, cy: 80 },
        { id: "q2", cx: 240, cy: 240 },
        { id: "q3", cx: 80, cy: 240 },
      ].map((s) => (
        <g key={s.id}>
          <circle cx={s.cx} cy={s.cy} r="28" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
          <text x={s.cx} y={s.cy + 6} textAnchor="middle" fontSize="16" className="fill-slate-800 dark:fill-slate-100 font-mono">
            {s.id}
          </text>
        </g>
      ))}

      {/* q0 <-> q1 : 1 */}
      <line x1="108" y1="80" x2="212" y2="80" stroke="currentColor" strokeWidth="2" markerStart="url(#g2-arrow)" markerEnd="url(#g2-arrow)" />
      <text x="160" y="70" textAnchor="middle" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">1</text>

      {/* q1 <-> q2 : 0 */}
      <line x1="240" y1="108" x2="240" y2="212" stroke="currentColor" strokeWidth="2" markerStart="url(#g2-arrow)" markerEnd="url(#g2-arrow)" />
      <text x="256" y="164" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">0</text>

      {/* q2 <-> q3 : 1 */}
      <line x1="212" y1="240" x2="108" y2="240" stroke="currentColor" strokeWidth="2" markerStart="url(#g2-arrow)" markerEnd="url(#g2-arrow)" />
      <text x="160" y="260" textAnchor="middle" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">1</text>

      {/* q3 <-> q0 : 0 */}
      <line x1="80" y1="212" x2="80" y2="108" stroke="currentColor" strokeWidth="2" markerStart="url(#g2-arrow)" markerEnd="url(#g2-arrow)" />
      <text x="64" y="164" textAnchor="middle" fontSize="15" className="fill-slate-700 dark:fill-slate-300 italic">0</text>
    </svg>
  );
}
