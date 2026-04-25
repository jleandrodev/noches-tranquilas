"use client";

import { useState } from "react";
import { CheckCircle2, Circle, ChevronDown, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Tarefa } from "@/types";

interface DayTaskCardProps {
  tarefa: Tarefa;
  concluida?: boolean;
  justCompleted?: boolean;
  onToggle?: (tarefaId: string, concluida: boolean) => void;
}

export function DayTaskCard({ tarefa, concluida = false, justCompleted = false, onToggle }: DayTaskCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "rounded-2xl bg-white overflow-hidden transition-all duration-300",
        concluida && !justCompleted ? "opacity-70" : "opacity-100",
        justCompleted && "scale-[1.01]"
      )}
      style={{
        boxShadow: justCompleted
          ? "0 4px 24px rgba(34,197,94,0.18), 0 1px 3px rgba(0,0,0,0.04)"
          : "0 2px 16px rgba(33,117,135,0.07), 0 1px 3px rgba(0,0,0,0.04)",
        borderLeft: justCompleted ? "3px solid #22c55e" : concluida ? "3px solid #d1fae5" : "3px solid transparent",
      }}
    >
      <div className="flex items-start gap-3 p-4">
        {/* Botão de check — área de toque grande */}
        <button
          onClick={() => onToggle?.(tarefa.id, !concluida)}
          className="mt-0.5 shrink-0 cursor-pointer transition-transform active:scale-90 p-0.5 -m-0.5"
          aria-label={concluida ? "Desmarcar tarea" : "Marcar como completada"}
        >
          {concluida ? (
            <CheckCircle2 size={24} className="text-[#22c55e] transition-all duration-200" />
          ) : (
            <Circle size={24} className="text-[#c8dde2] transition-all duration-200" />
          )}
        </button>

        {/* Conteúdo */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex-1 min-w-0 text-left cursor-pointer"
          aria-label="Ver detalles de la tarea"
        >
          <p className={cn(
            "font-semibold text-[15px] leading-snug transition-all duration-200",
            concluida ? "line-through text-[#b0cdd3]" : "text-[#1a2e35]"
          )}>
            {tarefa.titulo}
          </p>
          {tarefa.horarioSugerido && !concluida && (
            <div className="mt-1.5 inline-flex items-center gap-1 bg-[#f0f8fa] rounded-full px-2.5 py-0.5">
              <Clock size={11} className="text-[#217587]" />
              <span className="text-[11px] font-semibold text-[#217587]">{tarefa.horarioSugerido}</span>
            </div>
          )}
          {!expanded && !concluida && (
            <p className="text-[12px] text-[#9ab3b9] mt-1 line-clamp-1">{tarefa.descricao}</p>
          )}
        </button>

        {/* Expand */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="shrink-0 w-8 h-8 rounded-full bg-[#f5f8f9] flex items-center justify-center text-[#9ab3b9] transition-all cursor-pointer hover:bg-[#e8f4f7] active:scale-90"
          aria-label={expanded ? "Cerrar" : "Ver detalles"}
        >
          <ChevronDown size={14} className={cn("transition-transform duration-200", expanded && "rotate-180")} />
        </button>
      </div>

      {/* Detalhes expandidos */}
      {expanded && (
        <div className="px-4 pb-4 pl-[52px]">
          <div className="pt-3 border-t border-[#f0f5f6]">
            <p className="text-sm text-[#5a7a82] leading-relaxed mb-3">{tarefa.descricao}</p>
            <ul className="space-y-2.5">
              {tarefa.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#217587]/50 shrink-0" />
                  <span className="text-sm text-[#5a7a82] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
