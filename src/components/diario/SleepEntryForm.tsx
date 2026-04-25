"use client";

import { useState } from "react";
import { Moon, Sun, Minus, Plus } from "lucide-react";

interface SleepEntryFormProps {
  onSubmit?: (data: {
    horaDormir: string;
    horaAcordar: string;
    despertares: number;
    notas: string;
  }) => Promise<void>;
}

export function SleepEntryForm({ onSubmit }: SleepEntryFormProps) {
  const [horaDormir, setHoraDormir] = useState("19:45");
  const [horaAcordar, setHoraAcordar] = useState("07:00");
  const [despertares, setDespertares] = useState(0);
  const [notas, setNotas] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!onSubmit) return;
    setLoading(true);
    try {
      await onSubmit({ horaDormir, horaAcordar, despertares, notas });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white p-4 shadow-[0_2px_12px_rgba(33,117,135,0.08)]">
          <div className="flex items-center gap-2 mb-2">
            <Moon size={16} className="text-[#217587]" />
            <span className="text-xs font-semibold text-[#5a7a82]">Se durmió a las</span>
          </div>
          <input
            type="time"
            value={horaDormir}
            onChange={(e) => setHoraDormir(e.target.value)}
            className="w-full text-lg font-bold text-[#1a2e35] border-none outline-none bg-transparent"
          />
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-[0_2px_12px_rgba(33,117,135,0.08)]">
          <div className="flex items-center gap-2 mb-2">
            <Sun size={16} className="text-[#f59e0b]" />
            <span className="text-xs font-semibold text-[#5a7a82]">Se despertó a las</span>
          </div>
          <input
            type="time"
            value={horaAcordar}
            onChange={(e) => setHoraAcordar(e.target.value)}
            className="w-full text-lg font-bold text-[#1a2e35] border-none outline-none bg-transparent"
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-[0_2px_12px_rgba(33,117,135,0.08)]">
        <p className="text-xs font-semibold text-[#5a7a82] mb-3">Despertares nocturnos</p>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setDespertares((v) => Math.max(0, v - 1))}
            className="w-9 h-9 rounded-full bg-[#e8f4f7] flex items-center justify-center text-[#217587]"
          >
            <Minus size={16} />
          </button>
          <span className="text-2xl font-bold text-[#1a2e35]">{despertares}</span>
          <button
            type="button"
            onClick={() => setDespertares((v) => v + 1)}
            className="w-9 h-9 rounded-full bg-[#217587] flex items-center justify-center text-white"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-[0_2px_12px_rgba(33,117,135,0.08)]">
        <p className="text-xs font-semibold text-[#5a7a82] mb-2">Notas (opcional)</p>
        <textarea
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
          placeholder="¿Cómo fue la noche? ¿Algo diferente?"
          rows={3}
          className="w-full text-sm text-[#1a2e35] border-none outline-none bg-transparent resize-none placeholder:text-[#9ab3b9]"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#217587] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#1a5e6e] disabled:opacity-60"
      >
        {loading ? "Guardando..." : "Guardar registro"}
      </button>
    </form>
  );
}
