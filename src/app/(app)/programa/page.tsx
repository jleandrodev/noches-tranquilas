import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { fases, semanas } from "@/data/fases";
import { calcularPosicao } from "@/lib/programa";
import { WeekCard } from "@/components/programa/WeekCard";
import { CheckCircle2, Lock, ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function ProgramaPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const dbUser = await prisma.user.findUnique({ where: { id: user.id } });
  const { semana: semanaAtual } = calcularPosicao(
    dbUser?.inicioPrograma ?? dbUser?.criadoEm ?? new Date()
  );
  const faseAtual = fases.find((f) => f.semanas.includes(semanaAtual))?.id ?? 1;
  const progresso = Math.round(((semanaAtual - 1) / 12) * 100);

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#217587] via-[#1d6e7d] to-[#154f5e] pt-12 pb-28 px-5 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <p className="text-white/55 text-[13px] font-semibold uppercase tracking-widest mb-2">Tu progreso</p>
        <h1 className="font-nunito text-[26px] font-bold text-white leading-tight">Programa 12 Semanas</h1>
        <p className="text-white/65 text-sm mt-1">Método 12 Horas · Suzy Giordano</p>
      </div>

      {/* Progress glass card */}
      <div className="px-4 -mt-16 relative z-10 mb-5">
        <div
          className="rounded-3xl p-5"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.93)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 8px 40px rgba(33,117,135,0.18), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-[#9ab3b9] uppercase tracking-wide">Progreso general</p>
              <p className="font-nunito text-2xl font-bold text-[#1a2e35] mt-0.5">{progresso}%</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-[#9ab3b9] uppercase tracking-wide">Fase actual</p>
              <p className="font-nunito text-lg font-bold text-[#217587] mt-0.5">
                {fases.find(f => f.id === faseAtual)?.nome}
              </p>
            </div>
          </div>
          <div className="h-2.5 rounded-full bg-[#e8f4f7] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#217587] to-[#35a8c0] transition-all duration-700"
              style={{ width: `${progresso}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[11px] text-[#9ab3b9]">Semana 1</span>
            <span className="text-[11px] text-[#9ab3b9]">Semana 12</span>
          </div>
        </div>
      </div>

      {/* Fases e semanas */}
      <div className="px-4 space-y-6 pb-4">
        {fases.map((fase) => {
          const semanasDaFase = semanas.filter((s) => s.faseId === fase.id);
          const faseAtiva = fase.id === faseAtual;
          const faseConcluida = fase.id < faseAtual;

          return (
            <div key={fase.id}>
              {/* Fase header */}
              <div className={`rounded-2xl p-4 mb-3 ${faseAtiva ? "bg-gradient-to-r from-[#217587] to-[#1d7c8a]" : faseConcluida ? "bg-[#e8f4f7]" : "bg-white border border-[#e8f4f7]"}`}
                style={faseAtiva ? { boxShadow: "0 4px 20px rgba(33,117,135,0.25)" } : {}}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-[11px] font-bold uppercase tracking-widest mb-0.5 ${faseAtiva ? "text-white/60" : "text-[#9ab3b9]"}`}>
                      Fase {fase.id}
                    </p>
                    <p className={`font-nunito text-base font-bold ${faseAtiva ? "text-white" : faseConcluida ? "text-[#217587]" : "text-[#9ab3b9]"}`}>
                      {fase.nome}
                    </p>
                    <p className={`text-xs mt-0.5 ${faseAtiva ? "text-white/65" : "text-[#9ab3b9]"}`}>
                      Sem. {fase.semanas[0]}–{fase.semanas[fase.semanas.length - 1]}
                    </p>
                  </div>
                  {faseConcluida && <CheckCircle2 size={22} className="text-[#217587]" />}
                  {!faseAtiva && !faseConcluida && <Lock size={18} className="text-[#c8dde2]" />}
                  {faseAtiva && (
                    <span className="bg-white/20 text-white text-[10px] font-bold rounded-full px-2.5 py-1">Actual</span>
                  )}
                </div>
              </div>

              {/* Semanas */}
              <div className="space-y-2">
                {semanasDaFase.map((semana) => {
                  const status = semana.numero < semanaAtual ? "concluida" : semana.numero === semanaAtual ? "atual" : "futura";
                  return <WeekCard key={semana.numero} semana={semana} status={status} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
