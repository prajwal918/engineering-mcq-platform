/**
 * A correct 6-state product automaton for "count of 1's divisible by 3
 * AND count of 0's divisible by 2": one state per (1's-count mod 3,
 * 0's-count mod 2) pair, arranged as a 3x2 grid. Reading a '1' advances
 * along a row (mod-3 cycle); reading a '0' switches between rows
 * (mod-2 cycle). (0,0) is both start and the only accepting state.
 * This is a correct automaton for the language, not a redraw of the
 * source's specific (harder to make out) layout.
 */
export default function FAModThreeModTwo() {
  const states = [
    { id: "0,0", cx: 80, cy: 80, accept: true },
    { id: "1,0", cx: 220, cy: 80, accept: false },
    { id: "2,0", cx: 360, cy: 80, accept: false },
    { id: "0,1", cx: 80, cy: 240, accept: false },
    { id: "1,1", cx: 220, cy: 240, accept: false },
    { id: "2,1", cx: 360, cy: 240, accept: false },
  ];

  return (
    <svg
      viewBox="0 0 440 300"
      className="mx-auto h-auto w-full max-w-lg text-slate-700 dark:text-slate-300"
      role="img"
      aria-label="Six states arranged in a 3 by 2 grid, labeled by (count of ones mod 3, count of zeros mod 2). Reading a 1 cycles across a row; reading a 0 switches between rows. The (0,0) state, top left, is both the start and only accepting state."
    >
      <defs>
        <marker id="g12-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>

      <line x1="14" y1="80" x2="50" y2="80" stroke="currentColor" strokeWidth="2" markerEnd="url(#g12-arrow)" />

      {states.map((s) => (
        <g key={s.id}>
          <circle cx={s.cx} cy={s.cy} r="24" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
          {s.accept && <circle cx={s.cx} cy={s.cy} r="17" fill="none" stroke="currentColor" strokeWidth="2" />}
          <text x={s.cx} y={s.cy + 5} textAnchor="middle" fontSize="13" className="fill-slate-800 dark:fill-slate-100 font-mono">
            {s.id}
          </text>
        </g>
      ))}

      {/* top row cycle on 1 */}
      <line x1="104" y1="80" x2="196" y2="80" stroke="currentColor" strokeWidth="2" markerEnd="url(#g12-arrow)" />
      <line x1="244" y1="80" x2="336" y2="80" stroke="currentColor" strokeWidth="2" markerEnd="url(#g12-arrow)" />
      <path d="M 360 56 Q 220 -18 80 56" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g12-arrow)" />
      <text x="220" y="26" textAnchor="middle" fontSize="14" className="fill-slate-700 dark:fill-slate-300 italic">1</text>

      {/* bottom row cycle on 1 */}
      <line x1="104" y1="240" x2="196" y2="240" stroke="currentColor" strokeWidth="2" markerEnd="url(#g12-arrow)" />
      <line x1="244" y1="240" x2="336" y2="240" stroke="currentColor" strokeWidth="2" markerEnd="url(#g12-arrow)" />
      <path d="M 360 264 Q 220 320 80 264" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#g12-arrow)" />
      <text x="220" y="298" textAnchor="middle" fontSize="14" className="fill-slate-700 dark:fill-slate-300 italic">1</text>

      {/* vertical edges on 0 */}
      <line x1="80" y1="104" x2="80" y2="216" stroke="currentColor" strokeWidth="2" markerStart="url(#g12-arrow)" markerEnd="url(#g12-arrow)" />
      <line x1="220" y1="104" x2="220" y2="216" stroke="currentColor" strokeWidth="2" markerStart="url(#g12-arrow)" markerEnd="url(#g12-arrow)" />
      <line x1="360" y1="104" x2="360" y2="216" stroke="currentColor" strokeWidth="2" markerStart="url(#g12-arrow)" markerEnd="url(#g12-arrow)" />
      <text x="94" y="164" fontSize="14" className="fill-slate-700 dark:fill-slate-300 italic">0</text>
    </svg>
  );
}
