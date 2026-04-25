import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { logoutAction } from "@/actions/auth";
import { faixaIdadeLabel } from "@/lib/utils";
import { Baby, LogOut, User, Mail, ChevronRight } from "lucide-react";

export default async function PerfilPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const bebe = await prisma.bebe.findUnique({ where: { userId: user.id } });

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#217587] via-[#1d6e7d] to-[#154f5e] pt-12 pb-32 px-5 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <p className="text-white/55 text-[13px] font-semibold uppercase tracking-widest mb-2">Cuenta</p>
        <h1 className="font-nunito text-[26px] font-bold text-white">Mi Perfil</h1>
        <p className="text-white/65 text-sm mt-1">{user.email}</p>
      </div>

      {/* Avatar glass card */}
      <div className="px-4 -mt-16 relative z-10 mb-5">
        <div
          className="rounded-3xl p-5 flex items-center gap-4"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.93)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 8px 40px rgba(33,117,135,0.18), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#217587] to-[#1a5e6e] flex items-center justify-center shadow-[0_4px_16px_rgba(33,117,135,0.35)]">
            <User size={24} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-nunito text-lg font-bold text-[#1a2e35] truncate">
              {bebe?.nome ? `Mamá de ${bebe.nome}` : "¡Bienvenida!"}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <Mail size={12} className="text-[#9ab3b9]" />
              <p className="text-xs text-[#9ab3b9] truncate">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-3">
        {/* Bebê */}
        {bebe && (
          <div className="rounded-2xl bg-white p-4" style={{ boxShadow: "0 2px 16px rgba(33,117,135,0.07)" }}>
            <p className="text-[11px] font-bold text-[#9ab3b9] uppercase tracking-wide mb-3">Bebé</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#e8f4f7] flex items-center justify-center">
                <Baby size={20} className="text-[#217587]" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#1a2e35]">{bebe.nome ?? "Sin nombre"}</p>
                <p className="text-xs text-[#9ab3b9] mt-0.5">{faixaIdadeLabel(bebe.faixaIdade)}</p>
              </div>
              <ChevronRight size={16} className="text-[#c8dde2]" />
            </div>
          </div>
        )}

        {/* Logout */}
        <form action={logoutAction} className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 rounded-2xl py-4 text-sm font-bold text-[#ef4444] transition-all cursor-pointer hover:bg-red-50 active:scale-[0.98]"
            style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.12)" }}
          >
            <LogOut size={17} />
            Cerrar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
