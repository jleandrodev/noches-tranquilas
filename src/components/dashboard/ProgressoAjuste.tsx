"use client";

import { useState, useTransition } from "react";
import { ajustarProgressoAction } from "@/actions/programa";
import { Settings2, ChevronDown, Minus, Plus, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressoAjusteProps {
  semanaAtual: number;
  diaAtual: number;
}

export function ProgressoAjuste({ semanaAtual, diaAtual }: ProgressoAjusteProps) {
  const [open, setOpen] = useState(false);
  const [semana, setSemana] = useState(semanaAtual);
  const [dia, setDia] = useState(diaAtual);
  const [saved, setSaved] = useState(false);
  const [pending, startTransition] = useTransition();

  function handleConfirm() {
    startTransition(async () => {
      await ajustarProgressoAction(semana, dia);
      setSaved(true);
      setOpen(false);
      setTimeout(() => setSaved(false), 3000);
    });
  }

  const unchanged = semana === semanaAtual && dia === diaAtual;

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ border: "1px solid rgba(33,117,135,0.12)" }}
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-4 cursor-pointer transition-colors"
        style={{ background: open ? "rgba(33,117,135,0.06)" : "rgba(33,117,135,0.03)" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#e8f4f7] flex items-center justify-center">
            <Settings2 size={15} className="text-[#217587]" />
          </div>
          <div className="text-left">
            <p className="text-[13px] font-bold text-[#1a2e35]">Ajustar progreso</p>
            <p className="text-[11px] text-[#9ab3b9]">
              Actual: Semana {semanaAtual} · Día {diaAtual}
            </p>
          </div>
        </div>
        <ChevronDown
          size={16}
          className={cn("text-[#9ab3b9] transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {/* Painel expandível */}
      {open && (
        <div className="px-4 pb-4 bg-white border-t border-[#f0f5f6]">
          <p className="text-[11px] text-[#9ab3b9] pt-4 pb-3 leading-relaxed">
            Si perdiste días o quieres empezar desde un punto específico, ajusta tu posición aquí.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Semana */}
            <div className="rounded-xl bg-[#f5f8f9] p-3">
              <p className="text-[10px] font-bold text-[#9ab3b9] uppercase tracking-widest mb-2">Semana</p>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSemana((v) => Math.max(1, v - 1))}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#217587] shadow-sm cursor-pointer"
                >
                  <Minus size={14} />
                </button>
                <span className="font-nunito text-xl font-bold text-[#1a2e35]">{semana}</span>
                <button
                  type="button"
                  onClick={() => setSemana((v) => Math.min(12, v + 1))}
                  className="w-8 h-8 rounded-full bg-[#217587] flex items-center justify-center text-white cursor-pointer"
                >
                  <Plus size={14} />
                </button>
              </div>
              <p className="text-[10px] text-center text-[#b0cdd3] mt-1">de 12</p>
            </div>

            {/* Dia */}
            <div className="rounded-xl bg-[#f5f8f9] p-3">
              <p className="text-[10px] font-bold text-[#9ab3b9] uppercase tracking-widest mb-2">Día</p>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setDia((v) => Math.max(1, v - 1))}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#217587] shadow-sm cursor-pointer"
                >
                  <Minus size={14} />
                </button>
                <span className="font-nunito text-xl font-bold text-[#1a2e35]">{dia}</span>
                <button
                  type="button"
                  onClick={() => setDia((v) => Math.min(7, v + 1))}
                  className="w-8 h-8 rounded-full bg-[#217587] flex items-center justify-center text-white cursor-pointer"
                >
                  <Plus size={14} />
                </button>
              </div>
              <p className="text-[10px] text-center text-[#b0cdd3] mt-1">de la semana</p>
            </div>
          </div>

          {!unchanged && (
            <p className="text-[11px] text-[#5a7a82] mb-3 text-center">
              Serás posicionada en: Semana {semana} · Día {(semana - 1) * 7 + dia} de 84
            </p>
          )}

          <button
            onClick={handleConfirm}
            disabled={pending || unchanged}
            className="w-full rounded-full py-3 text-sm font-semibold transition-all cursor-pointer disabled:opacity-50"
            style={{
              background: unchanged ? "rgba(33,117,135,0.08)" : "#217587",
              color: unchanged ? "#9ab3b9" : "white",
            }}
          >
            {pending ? "Guardando..." : unchanged ? "Sin cambios" : "Confirmar ajuste"}
          </button>
        </div>
      )}

      {saved && (
        <div className="flex items-center gap-2 justify-center py-2.5 text-[#22c55e] text-[12px] font-semibold bg-white">
          <CheckCircle2 size={14} />
          ¡Progreso actualizado!
        </div>
      )}
    </div>
  );
}
