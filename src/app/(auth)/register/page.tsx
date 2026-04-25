"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { registerAction } from "@/actions/auth";
import { Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirm = formData.get("confirm") as string;

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setLoading(true);
    const result = await registerAction(formData);
    if (result?.error) {
      setError(
        result.error === "User already registered"
          ? "Este correo ya está registrado."
          : result.error
      );
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#217587] via-[#1e6b7a] to-[#154f5e] flex items-center justify-center px-5 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-[#35a8c0]/20 blur-2xl" />

      <div className="w-full max-w-[390px] relative">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-sm mb-4 overflow-hidden ring-2 ring-white/30">
            <Image
              src="/logo/logo-vertical.jpg"
              alt="Noches Tranquilas"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="font-nunito text-3xl font-bold text-white tracking-tight">Noches Tranquilas</h1>
          <p className="text-white/60 text-sm mt-1 font-medium">Programa de sueño del bebé</p>
        </div>

        {/* Glass card */}
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
          <div className="flex items-center gap-2 mb-1">
            <UserPlus size={18} className="text-white/80" />
            <h2 className="font-nunito text-xl font-bold text-white">Crear cuenta</h2>
          </div>
          <p className="text-white/60 text-sm mb-6">Empieza hoy el programa de sueño de tu bebé</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-white/70 mb-2 uppercase tracking-wide">Correo</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="tu@correo.com"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl text-sm text-white placeholder:text-white/30 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(255,255,255,0.40)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                />
              </div>
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-xs font-semibold text-white/70 mb-2 uppercase tracking-wide">Contraseña</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  required
                  autoComplete="new-password"
                  placeholder="Mínimo 6 caracteres"
                  className="w-full pl-10 pr-11 py-3.5 rounded-xl text-sm text-white placeholder:text-white/30 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(255,255,255,0.40)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                />
                <button type="button" onClick={() => setShowPass(v => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Confirmar contraseña */}
            <div>
              <label className="block text-xs font-semibold text-white/70 mb-2 uppercase tracking-wide">Confirmar contraseña</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirm"
                  required
                  autoComplete="new-password"
                  placeholder="Repite la contraseña"
                  className="w-full pl-10 pr-11 py-3.5 rounded-xl text-sm text-white placeholder:text-white/30 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(255,255,255,0.40)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                />
                <button type="button" onClick={() => setShowConfirm(v => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                  {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-xl px-4 py-3 text-sm text-white/90 font-medium"
                style={{ background: "rgba(239,68,68,0.25)", border: "1px solid rgba(239,68,68,0.3)" }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-4 rounded-2xl text-base font-bold text-[#1a5e6e] transition-all active:scale-[0.98] disabled:opacity-60 cursor-pointer"
              style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
            >
              {loading ? "Creando cuenta..." : "Crear cuenta"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-white/60 mt-5">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="font-semibold text-white hover:text-white/80 transition-colors cursor-pointer">
            Ingresar
          </Link>
        </p>
      </div>
    </div>
  );
}
