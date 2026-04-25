import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getSemana, getFaseDaSemana } from "@/data/fases";
import { calcularPosicao } from "@/lib/programa";
import { TasksSection } from "@/components/dashboard/TasksSection";
import { DayWeekStrip } from "@/components/dashboard/DayWeekStrip";
import { Lightbulb, Calendar, TrendingUp, Moon } from "lucide-react";

const dicas = [
  "La constancia es más importante que la perfección. Una noche difícil no borra semanas de progreso.",
  "Los bebés duermen mejor en habitaciones oscuras. Invierte en un blackout de calidad.",
  "La ventana de sueño es real: coloca al bebé en la cuna al primer signo de cansancio.",
  "El ruido blanco enmascara los sonidos externos y ayuda al bebé a seguir durmiendo.",
  "Temperatura ideal del cuarto: 20–22°C. Los bebés duermen mejor en ambientes frescos.",
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const [bebe, dbUser, progresso] = await Promise.all([
    prisma.bebe.findUnique({ where: { userId: user.id } }),
    prisma.user.findUnique({ where: { id: user.id } }),
    prisma.progresso.findFirst({ where: { userId: user.id, data: hoje } }),
  ]);

  if (!bebe) redirect("/onboarding");

  const { diaPrograma, semana: semanaAtual, diaAtual } = calcularPosicao(
    dbUser?.inicioPrograma ?? dbUser?.criadoEm ?? new Date()
  );

  const semanaData = getSemana(semanaAtual);
  const fase = getFaseDaSemana(semanaAtual);

  const tarefasIdsAtual = semanaData?.tarefas.map((t) => t.id) ?? [];
  const tarefasConcluidas = (progresso?.tarefaIds ?? []).filter((id) => tarefasIdsAtual.includes(id));
  const totalTarefas = semanaData?.tarefas.length ?? 0;
  const percent = totalTarefas > 0 ? Math.round((tarefasConcluidas.length / totalTarefas) * 100) : 0;
  const dicaHoje = dicas[new Date().getDay() % dicas.length];
  const nomeFormatado = bebe.nome ?? "mamá";

  const dataFormatada = new Date().toLocaleDateString("es-ES", {
    weekday: "long", day: "numeric", month: "long",
  });

  return (
    <div>
      {/* ── HERO ──────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#217587] via-[#1d6e7d] to-[#154f5e] pt-12 pb-28 px-5 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute top-8 -left-12 w-40 h-40 rounded-full bg-[#35c0d8]/15 blur-2xl pointer-events-none" />

        <p className="text-white/55 text-[13px] font-medium capitalize mb-1">{dataFormatada}</p>
        <h1 className="font-nunito text-[28px] font-bold text-white leading-tight">
          Hola, {nomeFormatado}!
        </h1>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-white/65 text-sm">{fase?.nome}</span>
          <span className="text-white/30 text-sm">·</span>
          <span className="text-white/80 text-sm font-semibold">Semana {semanaAtual} · Día {diaPrograma}</span>
        </div>
      </div>

      {/* ── GLASS STATS CARD ── */}
      <div className="px-4 -mt-16 relative z-10">
        <div
          className="rounded-3xl p-5"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.92)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 8px 40px rgba(33,117,135,0.18), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div className="grid grid-cols-3 divide-x divide-[#e8f4f7]">
            {/* Semana */}
            <div className="flex flex-col items-center gap-1.5 px-2">
              <div className="w-9 h-9 rounded-2xl bg-[#e8f4f7] flex items-center justify-center">
                <Calendar size={17} className="text-[#217587]" />
              </div>
              <span className="font-nunito text-xl font-bold text-[#1a2e35]">{semanaAtual}</span>
              <span className="text-[10px] font-semibold text-[#9ab3b9] uppercase tracking-wide">Semana</span>
            </div>

            {/* Progresso */}
            <div className="flex flex-col items-center gap-1.5 px-2">
              <div className="w-9 h-9 rounded-2xl bg-[#e8f4f7] flex items-center justify-center">
                <TrendingUp size={17} className="text-[#217587]" />
              </div>
              <span className="font-nunito text-xl font-bold text-[#1a2e35]">{percent}%</span>
              <span className="text-[10px] font-semibold text-[#9ab3b9] uppercase tracking-wide">Hoy</span>
            </div>

            {/* Fase */}
            <div className="flex flex-col items-center gap-1.5 px-2">
              <div className="w-9 h-9 rounded-2xl bg-[#e8f4f7] flex items-center justify-center">
                <Moon size={17} className="text-[#217587]" />
              </div>
              <span className="font-nunito text-xl font-bold text-[#1a2e35]">{fase?.id ?? 1}</span>
              <span className="text-[10px] font-semibold text-[#9ab3b9] uppercase tracking-wide">Fase</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 pt-4 border-t border-[#e8f4f7]">
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span className="text-[#5a7a82]">{tarefasConcluidas.length} de {totalTarefas} tareas</span>
              <span className="text-[#217587]">{percent}% completado</span>
            </div>
            <div className="h-2 rounded-full bg-[#e8f4f7] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#217587] to-[#35a8c0] transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTEÚDO ─────────────────────────────── */}
      <div className="px-4 pt-5 space-y-4">

        {/* Strip visual da semana */}
        <DayWeekStrip
          diaAtual={diaAtual}
          semana={semanaAtual}
          diaPrograma={diaPrograma}
        />

        {/* Dica do dia */}
        <div
          className="rounded-2xl p-4 flex gap-3"
          style={{
            background: "linear-gradient(135deg, rgba(33,117,135,0.08), rgba(53,168,192,0.05))",
            border: "1px solid rgba(33,117,135,0.12)",
          }}
        >
          <div className="w-8 h-8 rounded-xl bg-[#217587]/10 flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb size={15} className="text-[#217587]" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-[#217587] uppercase tracking-widest mb-1">Tip del día</p>
            <p className="text-sm text-[#3d6670] leading-relaxed">{dicaHoje}</p>
          </div>
        </div>

        {/* Tarefas interativas */}
        <TasksSection
          tarefas={semanaData?.tarefas ?? []}
          tarefasConcluidas={tarefasConcluidas}
          semanaAtual={semanaAtual}
        />

        <div className="h-2" />
      </div>
    </div>
  );
}
