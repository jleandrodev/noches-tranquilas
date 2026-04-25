"use client";

import { useState } from "react";
import Image from "next/image";
import { salvarBebeAction } from "@/actions/onboarding";
import type { FaixaIdade } from "@/types";
import { Baby, ChevronRight } from "lucide-react";

const faixas: { value: FaixaIdade; label: string; sub: string; emoji: string }[] = [
  { value: "ZERO_3", label: "0–3 meses", sub: "4–5 siestas/día · Meta: 5–6h", emoji: "👶" },
  { value: "QUATRO_6", label: "4–6 meses", sub: "3–4 siestas/día · Meta: 8–10h", emoji: "🌙" },
  { value: "SEIS_9", label: "6–9 meses", sub: "2–3 siestas/día · Meta: 10–11h", emoji: "⭐" },
  { value: "NOVE_12", label: "9–12 meses", sub: "2 siestas/día · Meta: 11h", emoji: "💫" },
  { value: "UM_MAIS", label: "1+ año", sub: "1–2 siestas/día · Meta: 11–12h", emoji: "🌟" },
];

export default function OnboardingPage() {
  const [faixaSelecionada, setFaixaSelecionada] = useState<FaixaIdade | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!faixaSelecionada) return;
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await salvarBebeAction(formData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#217587] via-[#1e6b7a] to-[#154f5e] flex flex-col items-center justify-center px-5 py-8 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[390px] relative">
        {/* Header */}
        <div className="flex flex-col items-center mb-7">
          <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-2 ring-white/20">
            <Image src="/logo/logo-vertical.jpg" alt="Noches Tranquilas" width={64} height={64} className="object-cover w-full h-full" />
          </div>
          <h1 className="font-nunito text-[26px] font-bold text-white text-center">¡Vamos a empezar!</h1>
          <p className="text-white/60 text-sm mt-1 text-center">Configura el programa para tu bebé</p>
        </div>

        {/* Glass form card */}
        <div
          className="rounded-3xl p-6"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.13)",
            border: "1px solid rgba(255,255,255,0.22)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome */}
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                Nombre del bebé (opcional)
              </label>
              <input
                type="text"
                name="nome"
                placeholder="Ej: Sofía, Miguel..."
                className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder:text-white/30 outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                onFocus={e => (e.target.style.borderColor = "rgba(255,255,255,0.40)")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
              />
            </div>

            {/* Idade */}
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-3">
                Edad del bebé
              </label>
              <div className="space-y-2">
                {faixas.map((f) => {
                  const selected = faixaSelecionada === f.value;
                  return (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => setFaixaSelecionada(f.value)}
                      className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all cursor-pointer active:scale-[0.98]"
                      style={
                        selected
                          ? { background: "rgba(255,255,255,0.95)", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }
                          : { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }
                      }
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${selected ? "bg-[#e8f4f7]" : "bg-white/10"}`}>
                        <Baby size={16} className={selected ? "text-[#217587]" : "text-white/60"} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-semibold text-sm ${selected ? "text-[#1a2e35]" : "text-white"}`}>{f.label}</p>
                        <p className={`text-[11px] mt-0.5 ${selected ? "text-[#5a7a82]" : "text-white/45"}`}>{f.sub}</p>
                      </div>
                      {selected && <ChevronRight size={16} className="text-[#217587] shrink-0" />}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="faixaIdade" value={faixaSelecionada ?? ""} />
            </div>

            <button
              type="submit"
              disabled={!faixaSelecionada || loading}
              className="w-full py-4 rounded-2xl text-base font-bold text-[#1a5e6e] transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer mt-2"
              style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
            >
              {loading ? "Guardando..." : "Comenzar el programa"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
