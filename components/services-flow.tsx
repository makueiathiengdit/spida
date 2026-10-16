import type { CSSProperties } from "react";

// Layout in viewBox units (640 x 480)
const NODE_W = 160;
const NODE_H = 52;
const CENTER = { x: 250, y: 210, w: 140, h: 60 };
const LEFT_X = 20;
const RIGHT_X = 460;
const LEFT_TRUNK = 215;
const RIGHT_TRUNK = 425;
const ROWS = [90, 240, 390];

const nodes = [
  { lines: ["WEB DESIGN"], side: "left", row: 0, fill: ["#1d3b3c", "#21474a"], stroke: "#5fa8a8", glow: "#8ee6e6" },
  { lines: ["DATA ANALYTICS"], side: "left", row: 1, fill: ["#1f3a4c", "#244459"], stroke: "#6aa7c9", glow: "#9fd6f5" },
  { lines: ["API INTEGRATIONS"], side: "left", row: 2, fill: ["#36334a", "#403b57"], stroke: "#a69bc6", glow: "#d3c8f5" },
  { lines: ["WEB HOSTING"], side: "right", row: 0, fill: ["#2c3e66", "#4a6699"], stroke: "#7d95c4", glow: "#b4c8f2" },
  { lines: ["SOFTWARE", "DEVELOPMENT"], side: "right", row: 1, fill: ["#6e4115", "#8f5a20"], stroke: "#d48a3a", glow: "#ffbf73" },
  { lines: ["NETWORK", "INFRASTRUCTURE"], side: "right", row: 2, fill: ["#2a451d", "#3a5c25"], stroke: "#6c9a4a", glow: "#a8dc80" },
] as const;

// Row stagger so the pulses don't all land at once
const ROW_DELAY = [0.3, 0, 0.6];

export function ServicesFlow() {
  const cy = CENTER.y + CENTER.h / 2;

  return (
    <div className="services-flow">
      <svg
        viewBox="0 0 640 480"
        className="h-auto w-full"
        role="img"
        aria-label="Spida delivers web design, data analytics, API integrations, web hosting, software development and network infrastructure"
      >
        <defs>
          <marker
            id="sf-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 L3,5 z" fill="#3f3f46" />
          </marker>
          {nodes.map((n, i) => (
            <linearGradient key={i} id={`sf-fill-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={n.fill[0]} />
              <stop offset="100%" stopColor={n.fill[1]} />
            </linearGradient>
          ))}
        </defs>

        {/* Connectors */}
        {nodes.map((n, i) => {
          const y = ROWS[n.row];
          const d =
            n.side === "left"
              ? `M${CENTER.x},${cy} H${LEFT_TRUNK} V${y} H${LEFT_X + NODE_W}`
              : `M${CENTER.x + CENTER.w},${cy} H${RIGHT_TRUNK} V${y} H${RIGHT_X}`;
          const style = {
            "--sf-delay": `${ROW_DELAY[n.row]}s`,
            "--sf-glow": n.stroke,
          } as CSSProperties;
          return (
            <g key={i} style={style}>
              <path
                d={d}
                fill="none"
                stroke="#3f3f46"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                markerEnd="url(#sf-arrow)"
              />
              <path
                d={d}
                fill="none"
                stroke={n.stroke}
                strokeWidth="3"
                strokeLinecap="round"
                pathLength={1}
                className="sf-pulse"
              />
            </g>
          );
        })}

        {/* Service nodes */}
        {nodes.map((n, i) => {
          const x = n.side === "left" ? LEFT_X : RIGHT_X;
          const y = ROWS[n.row] - NODE_H / 2;
          const style = {
            "--sf-delay": `${ROW_DELAY[n.row]}s`,
            "--sf-glow": n.stroke,
          } as CSSProperties;
          return (
            <g key={i} style={style}>
              <rect
                x={x}
                y={y}
                width={NODE_W}
                height={NODE_H}
                rx="8"
                fill={`url(#sf-fill-${i})`}
                stroke={n.stroke}
                strokeWidth="1.5"
              />
              <rect
                x={x}
                y={y}
                width={NODE_W}
                height={NODE_H}
                rx="8"
                fill="none"
                stroke={n.stroke}
                strokeWidth="2.5"
                className="sf-node-glow"
              />
              <text
                x={x + NODE_W / 2}
                y={ROWS[n.row] - ((n.lines.length - 1) * 16) / 2}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#ffffff"
                fontSize="14"
                fontWeight="600"
                letterSpacing="0.3"
              >
                {n.lines.map((line, j) => (
                  <tspan key={j} x={x + NODE_W / 2} dy={j === 0 ? 0 : 16}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        {/* Spida hub */}
        <g style={{ "--sf-glow": "#4f56c9" } as CSSProperties}>
          <rect
            x={CENTER.x}
            y={CENTER.y}
            width={CENTER.w}
            height={CENTER.h}
            rx="10"
            fill="#070b3a"
            stroke="#c7cbe0"
            strokeWidth="1.5"
          />
          <rect
            x={CENTER.x}
            y={CENTER.y}
            width={CENTER.w}
            height={CENTER.h}
            rx="10"
            fill="none"
            stroke="#4f56c9"
            strokeWidth="2.5"
            className="sf-hub-glow"
          />
          <text
            x={CENTER.x + CENTER.w / 2}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#ffffff"
            fontSize="17"
            fontWeight="700"
            letterSpacing="2"
          >
            SPIDA
          </text>
        </g>
      </svg>
    </div>
  );
}
