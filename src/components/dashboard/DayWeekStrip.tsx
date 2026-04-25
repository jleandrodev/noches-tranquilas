"use client";

import { useState, useTransition } from "react";
import { ajustarProgressoAction } from "@/actions/programa";

interface DayWeekStripProps {
  diaAtual: number;   // 1–7
  semana: number;
  diaPrograma: number;
}

export function DayWeekStrip({ diaAtual, semana, diaPrograma }: DayWeekStripProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleComplete() {
    const nextDia = diaAtual < 7 ? diaAtual + 1 : 1;
    const nextSemana = diaAtual < 7 ? semana : Math.min(semana + 1, 12);
    startTransition(async () => {
      await ajustarProgressoAction(nextSemana, nextDia);
      setSelectedDay(null);
    });
  }

  function handleGoToDay(dia: number) {
    startTransition(async () => {
      await ajustarProgressoAction(semana, dia);
      setSelectedDay(null);
    });
  }

  function handlePrevWeek() {
    if (semana <= 1) return;
    startTransition(async () => {
      await ajustarProgressoAction(semana - 1, 1);
      setSelectedDay(null);
    });
  }

  return (
    <>
      <div
        className="rounded-2xl p-4"
        style={{
          background: "linear-gradient(135deg, rgba(33,117,135,0.06), rgba(53,168,192,0.03))",
          border: "1px solid rgba(33,117,135,0.10)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-bold text-[#217587] uppercase tracking-widest">
            Semana {semana} de 12
          </p>
          <span className="text-[11px] font-semibold text-[#9ab3b9]">Día {diaPrograma} de 84</span>
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 7 }, (_, i) => {
            const n = i + 1;
            const done = n < diaAtual;
            const current = n === diaAtual;

            return (
              <button
                key={n}
                onClick={() => setSelectedDay(n)}
                className="flex flex-col items-center gap-1 cursor-pointer transition-all active:scale-90"
              >
                <span
                  className="text-[9px] font-bold uppercase"
                  style={{ color: current ? "#217587" : done ? "#217587" : "#c8dde2" }}
                >
                  D{n}
                </span>
                <div
                  className="w-full aspect-square rounded-xl flex items-center justify-center transition-all"
                  style={
                    current
                      ? { background: "#217587", boxShadow: "0 2px 10px rgba(33,117,135,0.35)" }
                      : done
                      ? { background: "rgba(33,117,135,0.18)" }
                      : { background: "rgba(33,117,135,0.05)", border: "1px solid rgba(33,117,135,0.10)" }
                  }
                >
                  {current ? (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  ) : done ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#217587" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8dde2]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-[10px] text-center text-[#9ab3b9] mt-2.5">
          Toca un día para marcarlo o reiniciarlo
        </p>
      </div>

      {/* Popup overlay — centered */}
      {selectedDay !== null && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-5"
          onClick={() => !isPending && setSelectedDay(null)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-white p-5"
            style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.18)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f4f7] flex items-center justify-center mb-3">
                <span className="font-nunito text-lg font-bold text-[#217587]">{selectedDay}</span>
              </div>
              <p className="font-nunito font-bold text-[#1a2e35] text-[17px]">
                Día {selectedDay} — Semana {semana}
              </p>
              <p className="text-sm text-[#9ab3b9] mt-0.5">¿Qué deseas hacer?</p>
            </div>

            <div className="space-y-2.5">
              {/* Advance: only for current day */}
              {selectedDay === diaAtual && (
                <button
                  onClick={handleComplete}
                  disabled={isPending}
                  className="w-full rounded-2xl py-3.5 text-sm font-semibold text-white cursor-pointer transition-all active:scale-[0.98] disabled:opacity-50"
                  style={{ background: "#217587", boxShadow: "0 4px 16px rgba(33,117,135,0.25)" }}
                >
                  ✓ Completar día {selectedDay} y avanzar
                </button>
              )}

              {/* Go to / reset day */}
              <button
                onClick={() => handleGoToDay(selectedDay)}
                disabled={isPending}
                className="w-full rounded-2xl py-3.5 text-sm font-semibold text-[#217587] cursor-pointer transition-all active:scale-[0.98] disabled:opacity-50"
                style={{ background: "rgba(33,117,135,0.08)", border: "1px solid rgba(33,117,135,0.15)" }}
              >
                ↺ {selectedDay === diaAtual ? "Reiniciar este día" : `Ir al día ${selectedDay}`}
              </button>

              {/* Go back to previous week */}
              {semana > 1 && (
                <button
                  onClick={handlePrevWeek}
                  disabled={isPending}
                  className="w-full rounded-2xl py-3.5 text-sm font-semibold text-[#9ab3b9] cursor-pointer transition-all active:scale-[0.98] disabled:opacity-50"
                  style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  ← Volver a semana {semana - 1}
                </button>
              )}

              <button
                onClick={() => setSelectedDay(null)}
                disabled={isPending}
                className="w-full rounded-2xl py-3 text-sm font-medium text-[#9ab3b9] cursor-pointer"
              >
                Cancelar
              </button>
            </div>

            {isPending && (
              <p className="text-center text-xs text-[#9ab3b9] mt-3">Guardando...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
