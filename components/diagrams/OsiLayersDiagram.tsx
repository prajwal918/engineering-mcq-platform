"use client";

interface Layer {
  number: number;
  name: string;
  tag: string;
}

const LAYERS: Layer[] = [
  { number: 7, name: "Application", tag: "user-facing services" },
  { number: 6, name: "Presentation", tag: "translation, encryption" },
  { number: 5, name: "Session", tag: "dialog control" },
  { number: 4, name: "Transport", tag: "process-to-process delivery" },
  { number: 3, name: "Network", tag: "host-to-host routing" },
  { number: 2, name: "Data Link", tag: "node-to-node framing" },
  { number: 1, name: "Physical", tag: "raw bit transmission" },
];

const ROW_HEIGHT = 44;
const ROW_GAP = 6;
const TOP_PADDING = 34;
const CHART_WIDTH = 560;
const BRACKET_WIDTH = 26;

/**
 * A labeled OSI 7-layer stack. Not tied to a figure in the source
 * material -- added because several questions in this question bank ask
 * students to identify what a specific OSI layer does, and seeing the
 * full stack in order makes those easier to reason about.
 */
export default function OsiLayersDiagram() {
  const totalHeight = TOP_PADDING + LAYERS.length * (ROW_HEIGHT + ROW_GAP) - ROW_GAP + 40;

  return (
    <svg
      viewBox={`0 0 ${CHART_WIDTH} ${totalHeight}`}
      className="h-auto w-full max-w-xl"
      role="img"
      aria-labelledby="osi-diagram-title osi-diagram-desc"
    >
      <title id="osi-diagram-title">The OSI seven-layer model</title>
      <desc id="osi-diagram-desc">
        A stack of seven horizontal bands from Application at the top down to Physical at the
        bottom, each labeled with its layer number, name, and primary function. A bracket marks
        layers 5 through 7 as host-facing and layers 1 through 4 as media/transport-facing.
      </desc>

      <text
        x={0}
        y={20}
        className="fill-muted-foreground"
        style={{ font: "600 13px ui-sans-serif, system-ui" }}
      >
        Layer 7 (top) to Layer 1 (bottom)
      </text>

      {LAYERS.map((layer, i) => {
        const y = TOP_PADDING + i * (ROW_HEIGHT + ROW_GAP);
        const isUpper = layer.number >= 5;
        return (
          <g key={layer.number}>
            <rect
              x={BRACKET_WIDTH + 14}
              y={y}
              width={CHART_WIDTH - BRACKET_WIDTH - 14}
              height={ROW_HEIGHT}
              rx={8}
              className={isUpper ? "fill-primary/15 stroke-primary/40" : "fill-secondary stroke-border"}
              strokeWidth={1}
            />
            <text
              x={BRACKET_WIDTH + 30}
              y={y + ROW_HEIGHT / 2 - 3}
              className="fill-foreground"
              style={{ font: "700 14px ui-sans-serif, system-ui" }}
            >
              {layer.number}. {layer.name}
            </text>
            <text
              x={BRACKET_WIDTH + 30}
              y={y + ROW_HEIGHT / 2 + 14}
              className="fill-muted-foreground"
              style={{ font: "400 11.5px ui-sans-serif, system-ui" }}
            >
              {layer.tag}
            </text>
          </g>
        );
      })}

      {/* Bracket marking layers 5-7 as host-facing */}
      <path
        d={`M ${BRACKET_WIDTH} ${TOP_PADDING} h -8 v ${3 * (ROW_HEIGHT + ROW_GAP) - ROW_GAP} h 8`}
        className="stroke-primary"
        strokeWidth={2}
        fill="none"
      />
      <text
        x={BRACKET_WIDTH - 14}
        y={TOP_PADDING + 1.5 * (ROW_HEIGHT + ROW_GAP)}
        textAnchor="end"
        className="fill-primary"
        style={{ font: "600 10.5px ui-sans-serif, system-ui" }}
        transform={`rotate(-90 ${BRACKET_WIDTH - 14} ${TOP_PADDING + 1.5 * (ROW_HEIGHT + ROW_GAP)})`}
      >
        host-facing
      </text>

      {/* Bracket marking layers 1-4 as media-facing */}
      <path
        d={`M ${BRACKET_WIDTH} ${TOP_PADDING + 3 * (ROW_HEIGHT + ROW_GAP)} h -8 v ${
          4 * (ROW_HEIGHT + ROW_GAP) - ROW_GAP
        } h 8`}
        className="stroke-muted-foreground"
        strokeWidth={2}
        fill="none"
      />
      <text
        x={BRACKET_WIDTH - 14}
        y={TOP_PADDING + 3 * (ROW_HEIGHT + ROW_GAP) + 2 * (ROW_HEIGHT + ROW_GAP)}
        textAnchor="end"
        className="fill-muted-foreground"
        style={{ font: "600 10.5px ui-sans-serif, system-ui" }}
        transform={`rotate(-90 ${BRACKET_WIDTH - 14} ${
          TOP_PADDING + 3 * (ROW_HEIGHT + ROW_GAP) + 2 * (ROW_HEIGHT + ROW_GAP)
        })`}
      >
        media-facing
      </text>
    </svg>
  );
}
