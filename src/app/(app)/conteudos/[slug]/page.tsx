import { notFound } from "next/navigation";
import Link from "next/link";
import { getConteudo } from "@/data/conteudos";
import { getFase } from "@/data/fases";
import { ArticleBody } from "@/components/shared/ArticleBody";
import { ChevronLeft, Clock, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

function calcTempoLeitura(texto: string): number {
  const palavras = texto.trim().split(/\s+/).length;
  return Math.max(1, Math.round(palavras / 200));
}

const faseGradients: Record<number, string> = {
  1: "from-[#217587] via-[#1d6e7d] to-[#154f5e]",
  2: "from-[#1a5e6e] via-[#217587] to-[#1d7c8a]",
  3: "from-[#2a8fa6] via-[#217587] to-[#1a5e6e]",
  4: "from-[#35a8c0] via-[#2a8fa6] to-[#217587]",
};

export default async function ConteudoPage({ params }: Props) {
  const { slug } = await params;
  const conteudo = getConteudo(slug);
  if (!conteudo) notFound();

  const fase = getFase(conteudo.faseId);
  const tempoLeitura = calcTempoLeitura(conteudo.corpo);
  const gradiente = faseGradients[conteudo.faseId] ?? faseGradients[1];

  return (
    <div>
      {/* Hero header */}
      <div className={`relative bg-gradient-to-br ${gradiente} pt-5 pb-28 px-5 overflow-hidden`}>
        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/3 blur-2xl pointer-events-none" />

        {/* Voltar */}
        <Link
          href="/conteudos"
          className="inline-flex items-center gap-1.5 text-white/70 text-sm mb-5 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronLeft size={16} />
          <span>Contenidos</span>
        </Link>

        {/* Fase badge */}
        {fase && (
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.20)" }}
          >
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">
              Fase {fase.id} · {fase.nome}
            </span>
          </div>
        )}

        <h1 className="font-nunito text-[22px] font-bold text-white leading-snug mb-3">
          {conteudo.titulo}
        </h1>

        <p className="text-white/65 text-sm leading-relaxed mb-4">{conteudo.resumo}</p>

        {/* Metadata */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-white/50" />
            <span className="text-[12px] text-white/60">{tempoLeitura} min de lectura</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen size={13} className="text-white/50" />
            <span className="text-[12px] text-white/60">Método 12 Horas</span>
          </div>
        </div>
      </div>

      {/* Glass card flutuante com o conteúdo */}
      <div className="px-4 -mt-16 relative z-10 pb-6">
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.97)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 8px 40px rgba(33,117,135,0.15), 0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <div className="p-5 pt-6">
            <ArticleBody content={conteudo.corpo} />
          </div>

          {/* Footer do artigo */}
          <div
            className="mx-5 mb-5 rounded-2xl p-4 flex items-center gap-3"
            style={{
              background: "linear-gradient(135deg, rgba(33,117,135,0.06), rgba(53,168,192,0.03))",
              border: "1px solid rgba(33,117,135,0.10)",
            }}
          >
            <div className="w-9 h-9 rounded-xl bg-[#e8f4f7] flex items-center justify-center shrink-0">
              <BookOpen size={16} className="text-[#217587]" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#217587]">Método 12 Horas · Suzy Giordano</p>
              <p className="text-[11px] text-[#9ab3b9] mt-0.5">
                Contenido exclusivo del programa Noches Tranquilas
              </p>
            </div>
          </div>
        </div>

        {/* Botão voltar no final */}
        <Link
          href="/conteudos"
          className="mt-4 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-[#217587] transition-all cursor-pointer"
          style={{ background: "rgba(33,117,135,0.07)", border: "1px solid rgba(33,117,135,0.12)" }}
        >
          <ChevronLeft size={15} />
          Ver todos los contenidos
        </Link>
      </div>
    </div>
  );
}
