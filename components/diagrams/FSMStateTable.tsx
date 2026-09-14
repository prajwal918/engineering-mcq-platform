/**
 * Exact transition table from the source (not a hand-drawn figure —
 * transcribed directly, so no reconstruction uncertainty here).
 */
export default function FSMStateTable() {
  const rows: Array<{ state: string; x1: string; x0: string }> = [
    { state: "A", x1: "D, 0", x0: "B, 0" },
    { state: "B", x1: "B, 1", x0: "C, 1" },
    { state: "C", x1: "B, 0", x0: "D, 1" },
    { state: "D", x1: "B, 1", x0: "C, 0" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="mx-auto w-full max-w-sm border-collapse font-mono text-sm md:text-base">
        <thead>
          <tr>
            <th className="border border-border bg-secondary p-2 text-left">Present State</th>
            <th className="border border-border bg-secondary p-2 text-left" colSpan={2}>
              Next State, z
            </th>
          </tr>
          <tr>
            <th className="border border-border p-2" />
            <th className="border border-border p-2 text-left text-xs text-muted-foreground md:text-sm">X = 1</th>
            <th className="border border-border p-2 text-left text-xs text-muted-foreground md:text-sm">X = 0</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.state}>
              <td className="border border-border p-2 font-semibold">{row.state}</td>
              <td className="border border-border p-2">{row.x1}</td>
              <td className="border border-border p-2">{row.x0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
