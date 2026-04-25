interface DayProgressProps {
  concluidas: number;
  total: number;
}

export function DayProgress({ concluidas, total }: DayProgressProps) {
  const percent = total > 0 ? Math.round((concluidas / total) * 100) : 0;
  const radius = 36;
  const strokeWidth = 7;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const size = 90;

  return (
    <div className="flex items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="white"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-white">{percent}%</span>
        </div>
      </div>
      <div>
        <p className="text-white font-semibold text-base">
          {concluidas} de {total} tarefas
        </p>
        <p className="text-white/70 text-sm">concluídas hoje</p>
      </div>
    </div>
  );
}
