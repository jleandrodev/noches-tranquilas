"use client";

interface ProgressRingProps {
  percent: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
}

export function ProgressRing({
  percent,
  size = 80,
  strokeWidth = 7,
  label,
  sublabel,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e8f4f7"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#217587"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      {label && (
        <div className="flex flex-col items-center -mt-1" style={{ marginTop: -(size / 2 + 8) }}>
          <span className="text-lg font-bold text-[#1a2e35]">{label}</span>
          {sublabel && <span className="text-xs text-[#5a7a82]">{sublabel}</span>}
        </div>
      )}
    </div>
  );
}
