import Link from "next/link";
import { conteudos } from "@/data/conteudos";
import { fases } from "@/data/fases";
import { ChevronRight, BookOpen } from "lucide-react";

const faseColors = [
  { bg: "bg-gradient-to-r from-[#217587] to-[#1d7c8a]", text: "text-white", badgeBg: "bg-white/20 text-white" },
  { bg: "bg-gradient-to-r from-[#1a5e6e] to-[#217587]", text: "text-white", badgeBg: "bg-white/20 text-white" },
  { bg: "bg-gradient-to-r from-[#2a8fa6] to-[#217587]", text: "text-white", badgeBg: "bg-white/20 text-white" },
  { bg: "bg-gradient-to-r from-[#35a8c0] to-[#2a8fa6]", text: "text-white", badgeBg: "bg-white/20 text-white" },
];

export default function ConteudosPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#217587] via-[#1d6e7d] to-[#154f5e] pt-12 pb-28 px-5 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <p className="text-white/55 text-[13px] font-semibold uppercase tracking-widest mb-2">Aprende</p>
        <h1 className="font-nunito text-[26px] font-bold text-white">Contenidos</h1>
        <p className="text-white/65 text-sm mt-1">Artículos sobre el método y el sueño del bebé</p>
      </div>

      {/* Cards flutuante */}
      <div className="px-4 -mt-16 relative z-10">
        <div
          className="rounded-3xl p-4"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.93)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 8px 40px rgba(33,117,135,0.18), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex items-center gap-3 p-1">
            <div className="w-10 h-10 rounded-2xl bg-[#e8f4f7] flex items-center justify-center">
              <BookOpen size={18} className="text-[#217587]" />
            </div>
            <div>
              <p className="font-nunito font-bold text-[#1a2e35]">{conteudos.length} artículos disponibles</p>
              <p className="text-xs text-[#9ab3b9]">Organizados por fase del programa</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-5 space-y-6 pb-4">
        {fases.map((fase, fi) => {
          const artigos = conteudos.filter((c) => c.faseId === fase.id);
          if (!artigos.length) return null;
          const colors = faseColors[fi % faseColors.length];

          return (
            <div key={fase.id}>
              {/* Fase label */}
              <div className={`rounded-2xl p-4 mb-3 ${colors.bg}`} style={{ boxShadow: "0 4px 16px rgba(33,117,135,0.20)" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Fase {fase.id}</p>
                    <p className="font-nunito text-base font-bold text-white mt-0.5">{fase.nome}</p>
                  </div>
                  <span className="text-[11px] font-bold bg-white/20 text-white rounded-full px-2.5 py-1">
                    {artigos.length} artículo{artigos.length > 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {artigos.map((conteudo) => (
                  <Link
                    key={conteudo.slug}
                    href={`/conteudos/${conteudo.slug}`}
                    className="flex items-start gap-3.5 rounded-2xl bg-white p-4 transition-all cursor-pointer hover:shadow-md"
                    style={{ boxShadow: "0 2px 12px rgba(33,117,135,0.06)" }}
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#e8f4f7] flex items-center justify-center shrink-0">
                      <BookOpen size={16} className="text-[#217587]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[14px] text-[#1a2e35] leading-snug">{conteudo.titulo}</h3>
                      <p className="text-[12px] text-[#9ab3b9] mt-1 line-clamp-2 leading-relaxed">{conteudo.resumo}</p>
                    </div>
                    <ChevronRight size={15} className="text-[#c8dde2] shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
