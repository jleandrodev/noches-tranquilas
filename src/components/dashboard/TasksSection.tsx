"use client";

import { useState, useTransition } from "react";
import { DayTaskCard } from "./DayTaskCard";
import { toggleTarefaAction } from "@/actions/progresso";
import type { Tarefa } from "@/types";
import { CheckCircle2, Sparkles } from "lucide-react";

interface TasksSectionProps {
  tarefas: Tarefa[];
  tarefasConcluidas: string[];
  semanaAtual: number;
}

export function TasksSection({ tarefas, tarefasConcluidas: inicial, semanaAtual }: TasksSectionProps) {
  const [concluidas, setConcluidas] = useState<string[]>(inicial);
  const [isPending, startTransition] = useTransition();
  const [justCompleted, setJustCompleted] = useState<string | null>(null);

  const percent = tarefas.length > 0 ? Math.round((concluidas.length / tarefas.length) * 100) : 0;
  const todasConcluidas = concluidas.length === tarefas.length && tarefas.length > 0;

  function handleToggle(tarefaId: string, novaConcluida: boolean) {
    // Atualiza UI imediatamente (optimistic update)
    setConcluidas((prev) =>
      novaConcluida ? [...prev, tarefaId] : prev.filter((id) => id !== tarefaId)
    );

    if (novaConcluida) {
      setJustCompleted(tarefaId);
      setTimeout(() => setJustCompleted(null), 1200);
    }

    // Sincroniza com o servidor em background
    startTransition(() => {
      toggleTarefaAction(tarefaId, semanaAtual);
    });
  }

  return (
    <div>
      {/* Header com progresso */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-nunito text-[18px] font-bold text-[#1a2e35]">Tareas de hoy</h2>
          <p className="text-xs text-[#9ab3b9] mt-0.5">
            {concluidas.length} de {tarefas.length} completadas
          </p>
        </div>
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 -rotate-90" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="18" fill="none" stroke="#e8f4f7" strokeWidth="4" />
            <circle
              cx="22" cy="22" r="18"
              fill="none"
              stroke="#217587"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 18}`}
              strokeDashoffset={`${2 * Math.PI * 18 * (1 - percent / 100)}`}
              className="transition-all duration-500"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#217587]">
            {percent}%
          </span>
        </div>
      </div>

      {/* Lista de tarefas */}
      {tarefas.length > 0 ? (
        <div className="space-y-3">
          {tarefas.map((tarefa) => (
            <DayTaskCard
              key={tarefa.id}
              tarefa={tarefa}
              concluida={concluidas.includes(tarefa.id)}
              justCompleted={justCompleted === tarefa.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      ) : (
        <div
          className="rounded-2xl bg-white p-6 text-center"
          style={{ boxShadow: "0 2px 16px rgba(33,117,135,0.07)" }}
        >
          <p className="text-sm text-[#9ab3b9]">No hay tareas para hoy.</p>
        </div>
      )}

      {/* Celebração quando todas concluídas */}
      {todasConcluidas && (
        <div
          className="mt-4 rounded-2xl p-4 flex items-center gap-3"
          style={{
            background: "linear-gradient(135deg, rgba(34,197,94,0.10), rgba(34,197,94,0.05))",
            border: "1px solid rgba(34,197,94,0.20)",
          }}
        >
          <div className="w-9 h-9 rounded-xl bg-[#22c55e]/15 flex items-center justify-center shrink-0">
            <Sparkles size={17} className="text-[#22c55e]" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#16a34a]">¡Felicitaciones! ¡Todas las tareas completadas!</p>
            <p className="text-xs text-[#22c55e]/70 mt-0.5">Lo estás haciendo increíble en el programa</p>
          </div>
        </div>
      )}

      {/* Indicador de sincronização */}
      {isPending && (
        <p className="text-center text-[10px] text-[#9ab3b9] mt-3">Guardando...</p>
      )}
    </div>
  );
}
