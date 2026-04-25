import Link from "next/link";
import { CheckCircle2, Lock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Semana } from "@/types";

interface WeekCardProps {
  semana: Semana;
  status: "concluida" | "atual" | "futura";
}

export function WeekCard({ semana, status }: WeekCardProps) {
  const isLocked = status === "futura";
  const isAtual = status === "atual";
  const isConcluida = status === "concluida";

  return (
    <Link
      href={isLocked ? "#" : `/programa/${semana.numero}`}
      className={cn(
        "flex items-center gap-3.5 rounded-2xl p-4 transition-all cursor-pointer",
        isAtual
          ? "bg-white border-2 border-[#217587]"
          : "bg-white border border-[#edf4f6]",
        isLocked && "cursor-default opacity-55"
      )}
      style={{ boxShadow: isAtual ? "0 4px 20px rgba(33,117,135,0.12)" : "0 1px 8px rgba(33,117,135,0.05)" }}
    >
      {/* Número / ícone */}
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold transition-all",
          isConcluida && "bg-[#22c55e]/10 text-[#22c55e]",
          isAtual && "bg-[#217587] text-white shadow-[0_4px_12px_rgba(33,117,135,0.35)]",
          isLocked && "bg-[#f0f5f6] text-[#c8dde2]"
        )}
      >
        {isConcluida ? <CheckCircle2 size={19} /> : semana.numero}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className={cn("font-semibold text-[14px] leading-snug truncate", isLocked ? "text-[#c8dde2]" : "text-[#1a2e35]")}>
            {semana.titulo}
          </p>
          {isAtual && (
            <span className="shrink-0 bg-[#e8f4f7] text-[#217587] text-[10px] font-bold rounded-full px-2 py-0.5">Actual</span>
          )}
        </div>
        <p className={cn("text-[12px] mt-0.5 capitalize font-medium", isLocked ? "text-[#c8dde2]" : "text-[#9ab3b9]")}>
          {semana.tipo}
        </p>
      </div>

      {!isLocked ? (
        <ChevronRight size={16} className="text-[#c8dde2] shrink-0" />
      ) : (
        <Lock size={14} className="text-[#c8dde2] shrink-0" />
      )}
    </Link>
  );
}
