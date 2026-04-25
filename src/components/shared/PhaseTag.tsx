import { cn } from "@/lib/utils";

interface PhaseTagProps {
  fase: number;
  nome: string;
  className?: string;
}

const faseColors: Record<number, string> = {
  1: "bg-[#e8f4f7] text-[#217587]",
  2: "bg-[#d0eaf0] text-[#1a5e6e]",
  3: "bg-[#217587] text-white",
  4: "bg-[#1a5e6e] text-white",
};

export function PhaseTag({ fase, nome, className }: PhaseTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        faseColors[fase] ?? "bg-[#e8f4f7] text-[#217587]",
        className
      )}
    >
      Fase {fase} · {nome}
    </span>
  );
}
