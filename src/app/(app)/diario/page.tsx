import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { DiarioFormClient } from "@/components/diario/DiarioFormClient";
import { Moon, Sun, Zap, PenLine } from "lucide-react";

function formatarData(date: Date): string {
  return date.toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" });
}

function calcHoras(dormir?: string | null, acordar?: string | null): string | null {
  if (!dormir || !acordar) return null;
  const [hd, md] = dormir.split(":").map(Number);
  const [ha, ma] = acordar.split(":").map(Number);
  let mins = ha * 60 + ma - (hd * 60 + md);
  if (mins < 0) mins += 24 * 60;
  return (mins / 60).toFixed(1);
}

export default async function DiarioPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const bebe = await prisma.bebe.findUnique({ where: { userId: user.id } });
  if (!bebe) redirect("/onboarding");

  const entradas = await prisma.entradaDiario.findMany({
    where: { bebeId: bebe.id },
    orderBy: { data: "desc" },
    take: 7,
  });

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#217587] via-[#1d6e7d] to-[#154f5e] pt-12 pb-28 px-5 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <p className="text-white/55 text-[13px] font-semibold uppercase tracking-widest mb-2">Registros</p>
        <h1 className="font-nunito text-[26px] font-bold text-white">Diario del Sueño</h1>
        <p className="text-white/65 text-sm mt-1">Registra cada noche de tu bebé</p>
      </div>

      {/* Glass card formulário */}
      <div className="px-4 -mt-16 relative z-10">
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
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-[#e8f4f7] flex items-center justify-center">
              <PenLine size={15} className="text-[#217587]" />
            </div>
            <div>
              <p className="font-nunito font-bold text-[#1a2e35] text-base leading-tight">Registrar noche</p>
              <p className="text-xs text-[#9ab3b9]">¿Cómo fue la noche de hoy?</p>
            </div>
          </div>
          <DiarioFormClient bebeId={bebe.id} />
        </div>
      </div>

      {/* Histórico */}
      {entradas.length > 0 && (
        <div className="px-4 pt-6 pb-4">
          <h2 className="font-nunito text-[18px] font-bold text-[#1a2e35] mb-3">Últimas noches</h2>
          <div className="space-y-3">
            {entradas.map((entrada) => {
              const horas = calcHoras(entrada.horaDormir, entrada.horaAcordar);
              const horasNum = horas ? parseFloat(horas) : 0;
              const qualidade = horasNum >= 10 ? "Óptima" : horasNum >= 7 ? "Buena" : "Difícil";
              const qualidadeCor = horasNum >= 10 ? "#22c55e" : horasNum >= 7 ? "#217587" : "#f59e0b";

              return (
                <div
                  key={entrada.id}
                  className="rounded-2xl bg-white p-4"
                  style={{ boxShadow: "0 2px 16px rgba(33,117,135,0.07)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-[13px] font-bold text-[#1a2e35] capitalize">{formatarData(entrada.data)}</p>
                    <div className="flex items-center gap-2">
                      {horas && (
                        <span className="font-nunito text-lg font-bold" style={{ color: qualidadeCor }}>{horas}h</span>
                      )}
                      <span className="text-[10px] font-bold rounded-full px-2.5 py-0.5" style={{ background: `${qualidadeCor}18`, color: qualidadeCor }}>
                        {qualidade}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    {entrada.horaDormir && (
                      <div className="flex items-center gap-1.5 bg-[#f0f8fa] rounded-full px-3 py-1.5">
                        <Moon size={12} className="text-[#217587]" />
                        <span className="text-[12px] font-semibold text-[#217587]">{entrada.horaDormir}</span>
                      </div>
                    )}
                    {entrada.horaAcordar && (
                      <div className="flex items-center gap-1.5 bg-amber-50 rounded-full px-3 py-1.5">
                        <Sun size={12} className="text-amber-500" />
                        <span className="text-[12px] font-semibold text-amber-600">{entrada.horaAcordar}</span>
                      </div>
                    )}
                    {entrada.despertares > 0 && (
                      <div className="flex items-center gap-1.5 bg-red-50 rounded-full px-3 py-1.5">
                        <Zap size={12} className="text-red-400" />
                        <span className="text-[12px] font-semibold text-red-500">{entrada.despertares}x despertó</span>
                      </div>
                    )}
                  </div>

                  {entrada.notas && (
                    <p className="mt-2.5 text-xs text-[#9ab3b9] italic border-t border-[#f0f5f6] pt-2.5">"{entrada.notas}"</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
