/**
 * A single state that is both the start state and the only accepting
 * state, with no outgoing transitions at all. The only way to "end" in
 * an accepting configuration is to consume zero input symbols — so the
 * automaton accepts exactly the null (empty) string.
 */
export default function FASingleState() {
  return (
    <svg
      viewBox="0 0 220 160"
      className="mx-auto h-auto w-full max-w-[220px] text-slate-700 dark:text-slate-300"
      role="img"
      aria-label="A single state that is both the start state and the only accepting state, with no other transitions."
    >
      <defs>
        <marker
          id="fa-single-arrow"
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

      <line
        x1="18"
        y1="82"
        x2="66"
        y2="82"
        stroke="currentColor"
        strokeWidth="2"
        markerEnd="url(#fa-single-arrow)"
      />

      <circle cx="110" cy="82" r="32" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="2" />
      <circle cx="110" cy="82" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
