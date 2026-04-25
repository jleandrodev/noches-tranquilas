import { notFound } from "next/navigation";
import { getSemana, getFaseDaSemana } from "@/data/fases";
import { PhaseTag } from "@/components/shared/PhaseTag";
import { CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface Props {
  params: Promise<{ semana: string }>;
}

export default async function SemanaPage({ params }: Props) {
  const { semana: semanaParam } = await params;
  const numero = parseInt(semanaParam, 10);

  if (isNaN(numero) || numero < 1 || numero > 12) notFound();

  const semana = getSemana(numero);
  if (!semana) notFound();

  const fase = getFaseDaSemana(numero);

  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-br from-[#217587] to-[#1a5e6e] px-5 pt-5 pb-8 rounded-b-[28px]">
        <Link href="/programa" className="flex items-center gap-1 text-white/80 text-sm mb-4">
          <ChevronLeft size={16} />
          Programa
        </Link>
        <p className="text-white/70 text-xs mb-1 capitalize">{semana.tipo}</p>
        <h1 className="font-nunito text-[22px] font-bold text-white">
          Semana {semana.numero}
        </h1>
        <p className="text-white/80 text-base mt-1">{semana.titulo}</p>
        {fase && (
          <div className="mt-3">
            <PhaseTag
              fase={fase.id}
              nome={fase.nome}
              className="bg-white/20 text-white"
            />
          </div>
        )}
      </header>

      <div className="px-5 pt-5 space-y-5">
        {/* Objetivos da semana */}
        <div className="rounded-2xl bg-white p-4 shadow-[0_2px_12px_rgba(33,117,135,0.08)]">
          <h2 className="font-nunito text-base font-bold text-[#1a2e35] mb-3">
            Objetivos de la semana
          </h2>
          <ul className="space-y-2">
            {semana.objetivos.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#5a7a82]">
                <CheckCircle size={16} className="text-[#217587] shrink-0 mt-0.5" />
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Tarefas */}
        <div>
          <h2 className="font-nunito text-base font-bold text-[#1a2e35] mb-3">
            Tareas
          </h2>
          <div className="space-y-3">
            {semana.tarefas.map((tarefa) => (
              <div
                key={tarefa.id}
                className="rounded-2xl bg-white p-4 shadow-[0_2px_12px_rgba(33,117,135,0.08)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-[15px] text-[#1a2e35]">{tarefa.titulo}</h3>
                  {tarefa.horarioSugerido && (
                    <div className="flex items-center gap-1 text-xs text-[#5a7a82] shrink-0">
                      <Clock size={11} />
                      {tarefa.horarioSugerido}
                    </div>
                  )}
                </div>
                <p className="text-sm text-[#5a7a82] mt-1 mb-3">{tarefa.descricao}</p>
                <ul className="space-y-1.5">
                  {tarefa.checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#5a7a82]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#217587] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
