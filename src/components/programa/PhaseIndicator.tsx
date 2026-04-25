import { cn } from "@/lib/utils";
import type { Fase } from "@/types";

interface PhaseIndicatorProps {
  fases: Fase[];
  faseAtual: number;
}

export function PhaseIndicator({ fases, faseAtual }: PhaseIndicatorProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {fases.map((fase) => {
        const ativa = fase.id === faseAtual;
        const concluida = fase.id < faseAtual;
        return (
          <div
            key={fase.id}
            className={cn(
              "shrink-0 rounded-2xl px-4 py-3 min-w-[120px]",
              ativa && "bg-[#217587] text-white",
              concluida && "bg-[#e8f4f7] text-[#217587]",
              !ativa && !concluida && "bg-white text-[#9ab3b9] border border-[#e2edf0]"
            )}
          >
            <p className={cn("text-xs font-semibold", ativa ? "text-white/80" : "")}>
              Fase {fase.id}
            </p>
            <p className={cn("text-sm font-bold mt-0.5", ativa ? "text-white" : "")}>
              {fase.nome}
            </p>
            <p className={cn("text-[10px] mt-1", ativa ? "text-white/70" : "text-[#9ab3b9]")}>
              Sem. {fase.semanas[0]}–{fase.semanas[fase.semanas.length - 1]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
