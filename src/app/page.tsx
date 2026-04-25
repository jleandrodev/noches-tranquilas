import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, Star, Shield, Zap, Moon, Clock, TrendingUp, Baby, ChevronDown } from "lucide-react";

const CHECKOUT_URL = "https://nutrahub-life.mycartpanda.com/checkout?subscription=4263";

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#f59e0b] text-[#f59e0b]" />
      ))}
    </div>
  );
}

const faqs = [
  { q: "¿Para qué rango de edad funciona el método?", a: "La app fue diseñada para bebés de 0 a 18 meses. A partir de los 6 meses, los bebés ya no necesitan alimentación nocturna por razones nutricionales, y es cuando los resultados aparecen más rápido." },
  { q: "¿Tendré que dejar llorar a mi bebé?", a: "No. El método se llama gentil precisamente porque no usa la técnica del llanto controlado. Puede haber alguna protesta inicial — eso es normal para cualquier nueva habilidad — pero nunca dejas a tu bebé solo." },
  { q: "¿En cuánto tiempo veré resultados?", a: "La mayoría de las familias ve mejoras significativas en 7 a 10 días de aplicación consistente. Algunos bebés responden más rápido; otros pueden tardar un poco más." },
  { q: "¿Funciona para bebés que toman pecho?", a: "Sí. La app incluye un módulo sobre cómo reducir gradualmente las tomas nocturnas, siempre con orientación de consultar a tu pediatra antes de cualquier cambio." },
  { q: "¿La app reemplaza la orientación médica?", a: "No. Noches Tranquilas es un apoyo educativo y de seguimiento. Siempre consulta al pediatra de tu bebé para cuestiones de salud." },
  { q: "¿Y si lo intento y no funciona?", a: "Tienes 7 días de garantía total. Si por cualquier motivo no estás satisfecha con el contenido o los resultados, te devolvemos el 100% de tu inversión, sin preguntas." },
];

const features = [
  "Programa completo de 12 semanas (4 fases)",
  "Tareas diarias guiadas con checklist interactivo",
  "Rutina personalizada por edad del bebé",
  "Diario del sueño con historial y evolución",
  "Contenido educativo en cada fase del programa",
  "Plan de 7 días para empezar de inmediato",
  "Reducción gradual de tomas nocturnas",
  "Apoyo para manejar regresiones del sueño",
];

export default function HomePage() {
  return (
    <>
      <Script
        src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/cpsales.js"
        strategy="beforeInteractive"
      />
    <main className="bg-white font-[family-name:var(--font-inter)] text-[#1a2e35]">
      <style>{`
        @keyframes pulse-cta {
          0%, 100% { box-shadow: 0 0 0 0 rgba(33,117,135,0.5), 0 6px 24px rgba(33,117,135,0.35); transform: scale(1); }
          50%       { box-shadow: 0 0 0 12px rgba(33,117,135,0), 0 8px 32px rgba(33,117,135,0.5); transform: scale(1.015); }
        }
        @keyframes pulse-cta-white {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4), 0 6px 24px rgba(0,0,0,0.20); transform: scale(1); }
          50%       { box-shadow: 0 0 0 12px rgba(255,255,255,0), 0 8px 32px rgba(0,0,0,0.28); transform: scale(1.015); }
        }
      `}</style>

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#217587] via-[#1d6e7d] to-[#154f5e] pt-14 pb-16 lg:pt-20 lg:pb-24 px-5 lg:px-8 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 lg:w-[500px] lg:h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-60 h-60 rounded-full bg-[#35c0d8]/15 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: copy */}
            <div>
              <div className="flex justify-center lg:justify-start mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/80"
                  style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.20)" }}>
                  <Moon size={11} /> Método 12 Horas · Suzy Giordano
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-nunito)] text-[34px] sm:text-[40px] lg:text-[52px] font-bold text-white text-center lg:text-left leading-tight mb-5">
                Tu bebé dormirá{" "}
                <span className="text-[#7ee8f8]">12 horas seguidas</span>{" "}
                — sin llanto interminable
              </h1>
              <p className="text-white/75 text-[16px] lg:text-[18px] text-center lg:text-left leading-relaxed mb-8">
                Una app práctica y amorosa, con métodos probados, para transformar las noches de tu familia en descanso de verdad.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { n: "90%", label: "tasa de éxito" },
                  { n: "7–10", label: "días para resultado" },
                  { n: "12h", label: "sueño ininterrumpido" },
                ].map(({ n, label }) => (
                  <div key={label} className="rounded-2xl p-3 lg:p-4 text-center"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.20)" }}>
                    <p className="font-[family-name:var(--font-nunito)] text-2xl lg:text-3xl font-bold text-white">{n}</p>
                    <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wide mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full py-4 text-base font-bold text-[#154f5e] cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.97)", animation: "pulse-cta-white 2s ease-in-out infinite" }}>
                  🌙 Quiero empezar esta semana
                </a>
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full py-3.5 text-sm font-semibold text-white cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.30)" }}>
                  Sí, quiero empezar esta noche
                </a>
              </div>
              <p className="text-center lg:text-left text-white/40 text-xs mt-4">Acceso inmediato · Pago único · 7 días de garantía</p>
            </div>

            {/* Right: hero image */}
            <div className="mt-10 lg:mt-0">
              <div className="rounded-3xl overflow-hidden">
                <Image src="/images/image-hero.png" alt="Bebé durmiendo tranquilamente"
                  width={700} height={520} className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DOLOR ════════════════════════════════════════════════════ */}
      <section className="bg-[#f5f8f9] py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-md mb-10 lg:mb-0">
              <Image src="/images/pain.png" alt="Mamá agotada con bebé"
                width={700} height={520} className="w-full object-cover" />
            </div>

            {/* Copy */}
            <div>
              <h2 className="font-[family-name:var(--font-nunito)] text-[26px] lg:text-[36px] font-bold text-[#1a2e35] leading-tight mb-3">
                ¿Te suena familiar? Agotada. Cada noche. Sin final a la vista.
              </h2>
              <p className="text-[#5a7a82] text-[14px] lg:text-[16px] mb-8 leading-relaxed">
                Si estás viviendo esto, recuerda: <strong className="text-[#1a2e35]">la privación de sueño no es señal de debilidad.</strong>
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "El bebé se despierta 3, 4, 5 veces por noche",
                  "Amamantar es la única forma de que se duerma",
                  "Ansiedad solo de pensar en la hora de dormir",
                  "Ya lo intentaste todo — y nada funcionó",
                  "Sientes culpa por querer una noche de sueño",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white rounded-2xl px-4 py-3.5"
                    style={{ boxShadow: "0 2px 12px rgba(33,117,135,0.07)" }}>
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-500 text-[11px] font-bold">✕</span>
                    </span>
                    <p className="text-[14px] text-[#4a6a72] leading-snug">{item}</p>
                  </div>
                ))}
              </div>

              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center rounded-full py-4 text-base font-bold text-white cursor-pointer"
                style={{ background: "linear-gradient(135deg, #217587, #1a5e6e)", animation: "pulse-cta 2s ease-in-out infinite" }}>
                🌙 Quiero que mi bebé duerma ya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROBLEMA / CAUSAS ════════════════════════════════════════ */}
      <section id="metodo" className="py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-nunito)] text-[26px] lg:text-[36px] font-bold text-[#1a2e35] leading-tight mb-3">
              ¿Por qué el bebé no duerme?
            </h2>
            <p className="text-[#5a7a82] text-[14px] lg:text-[16px] leading-relaxed">
              El problema no es tu bebé. Son los patrones que aprendió — y todos son completamente reversibles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
            {[
              { icon: "🔗", title: "Asociaciones de sueño", body: "Cuando el bebé aprende a dormirse solo mamando o en brazos, necesita la misma 'contraseña' al despertar naturalmente durante la noche." },
              { icon: "😴", title: "Exceso de cansancio", body: "Perder la ventana de sueño activa el cortisol y hace que dormirse sea mucho más difícil — un ciclo vicioso." },
              { icon: "🗓️", title: "Rutina inconsistente", body: "Sin patrones diarios predecibles, el bebé no desarrolla señales internas de sueño, haciendo cada noche una sorpresa." },
              { icon: "☀️", title: "Desequilibrio de siestas", body: "Las siestas mal distribuidas durante el día impactan directamente la calidad del sueño nocturno." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex gap-4 rounded-2xl p-5 bg-[#f5f8f9]"
                style={{ border: "1px solid rgba(33,117,135,0.08)" }}>
                <span className="text-3xl shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-[#1a2e35] text-[15px] lg:text-[16px] mb-2">{title}</p>
                  <p className="text-[13px] lg:text-[14px] text-[#5a7a82] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 text-center max-w-2xl mx-auto"
            style={{ background: "linear-gradient(135deg, rgba(33,117,135,0.08), rgba(53,168,192,0.05))", border: "1px solid rgba(33,117,135,0.12)" }}>
            <p className="text-[15px] lg:text-[17px] text-[#1a2e35] font-semibold leading-relaxed">
              Con métodos gentiles y consistentes, la mayoría de las familias ve{" "}
              <strong className="text-[#217587]">mejoras significativas en 7 a 10 días.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ══ SOLUCIÓN / APP ═══════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#217587] via-[#1d6e7d] to-[#154f5e] py-16 lg:py-24 px-5 lg:px-8 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#35c0d8]/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/80 mb-4"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.20)" }}>
              <Zap size={11} /> La solución
            </span>
            <h2 className="font-[family-name:var(--font-nunito)] text-[28px] lg:text-[42px] font-bold text-white leading-tight mb-3">
              Noches Tranquilas
            </h2>
            <p className="text-white/75 text-[15px] lg:text-[17px] max-w-2xl mx-auto leading-relaxed">
              La app que une la sabiduría de Suzy Giordano con un acompañamiento práctico y gentil para transformar las noches de tu bebé — semana a semana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Clock size={20} />, title: "Rutina diaria estructurada", body: "Horarios claros con recordatorios y tareas diarias en la app." },
              { icon: <Moon size={20} />, title: "Sueño independiente", body: "Sin llanto controlado. Gentil, progresivo y amoroso." },
              { icon: <TrendingUp size={20} />, title: "12 semanas de seguimiento", body: "4 fases con progreso visual y contenido educativo." },
              { icon: <Baby size={20} />, title: "Diario del sueño", body: "Registra cada noche y observa la evolución de tu bebé." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="rounded-2xl p-5 flex flex-col items-start gap-3"
                style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white">{icon}</div>
                <div>
                  <p className="font-bold text-white text-[15px] mb-1">{title}</p>
                  <p className="text-[13px] text-white/65 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
              className="block w-full text-center rounded-full py-4 text-base font-bold text-[#154f5e] cursor-pointer"
              style={{ background: "rgba(255,255,255,0.97)", animation: "pulse-cta-white 2s ease-in-out infinite" }}>
              🌙 Quiero acceder a la app ahora
            </a>
          </div>
        </div>
      </section>

      {/* ══ PROGRAMA 12 SEMANAS ═════════════════════════════════════ */}
      <section id="programa" className="py-16 lg:py-24 px-5 lg:px-8 bg-[#f5f8f9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-nunito)] text-[26px] lg:text-[36px] font-bold text-[#1a2e35] leading-tight mb-2">
              El programa semana a semana
            </h2>
            <p className="text-[#5a7a82] text-[14px] lg:text-[16px]">12 semanas divididas en 4 fases progresivas</p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="space-y-3 mb-10 lg:mb-0">
              {[
                { fase: "Fase 1", semanas: "Sem. 1–2", nome: "Preparación", desc: "Entender el método, preparar el ambiente y construir la rutina base de tu bebé." },
                { fase: "Fase 2", semanas: "Sem. 3–4", nome: "Implementación", desc: "Iniciar la rutina y aplicar las técnicas de sueño independiente con apoyo diario." },
                { fase: "Fase 3", semanas: "Sem. 5–8", nome: "Consolidación", desc: "Estabilizar la rutina, resolver regresiones y ajustar según el crecimiento." },
                { fase: "Fase 4", semanas: "Sem. 9–12", nome: "Mantenimiento", desc: "Mantener los resultados y adaptar la rutina con el desarrollo del bebé." },
              ].map(({ fase, semanas, nome, desc }) => (
                <div key={fase} className="flex gap-4 bg-white rounded-2xl p-5"
                  style={{ boxShadow: "0 2px 16px rgba(33,117,135,0.07)", borderLeft: "3px solid #217587" }}>
                  <div className="shrink-0 text-center w-14">
                    <span className="text-[10px] font-bold text-white uppercase bg-[#217587] rounded-full px-2 py-0.5 block text-center mb-1">{fase}</span>
                    <p className="text-[10px] text-[#9ab3b9] font-semibold">{semanas}</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#1a2e35] text-[15px] mb-1">{nome}</p>
                    <p className="text-[13px] text-[#5a7a82] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center rounded-full py-4 text-base font-bold text-white cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #217587, #1a5e6e)", animation: "pulse-cta 2s ease-in-out infinite" }}>
                  🌙 Quiero empezar el programa
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-3xl overflow-hidden shadow-lg mb-6">
                <Image src="/images/plan.png" alt="Plan de 7 días" width={700} height={500} className="w-full object-cover" />
              </div>

              {/* 7-day timeline */}
              <div className="space-y-2">
                {[
                  { day: "Días 1–2", title: "Establecer la base", desc: "Horarios fijos + rutina de 20 min antes de dormir." },
                  { day: "Días 3–4", title: "Soñoliento pero despierto", desc: "Pon al bebé en la cuna aún despierto." },
                  { day: "Días 5–6", title: "Reducir estímulos nocturnos", desc: "Espera unos minutos antes de responder." },
                  { day: "Día 7", title: "Primeros resultados", desc: "La mayoría ya muestra mejora visible." },
                ].map(({ day, title, desc }) => (
                  <div key={day} className="flex gap-3 rounded-xl p-3"
                    style={{ background: "linear-gradient(135deg, rgba(33,117,135,0.06), rgba(53,168,192,0.03))", border: "1px solid rgba(33,117,135,0.08)" }}>
                    <span className="shrink-0 text-[10px] font-bold text-[#217587] w-14 pt-0.5">{day}</span>
                    <div>
                      <p className="font-bold text-[#1a2e35] text-[13px]">{title}</p>
                      <p className="text-[11px] text-[#5a7a82]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIOS ════════════════════════════════════════════ */}
      <section id="testimonios" className="py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-nunito)] text-[26px] lg:text-[36px] font-bold text-[#1a2e35] mb-2">
              Mamás que transformaron sus noches
            </h2>
            <p className="text-[#5a7a82] text-[14px] lg:text-[16px]">Resultados reales de familias que usaron el método</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
            {[
              { name: "Amanda L.", baby: "Valentina, 8 meses", text: "Mi hija se despertaba 5 veces por noche. Al 6º día de seguir la app, durmió 11 horas seguidas. ¡No lo creí hasta que pasó de nuevo al día siguiente!" },
              { name: "Claire M.", baby: "Noah, 10 meses", text: "En el octavo día, Noah estaba durmiendo de 19h a 7h, en su cuna, solo. Noches Tranquilas fue un antes y después para nuestra familia." },
              { name: "Sarah K.", baby: "Isabelle, 13 meses", text: "Estaba al límite. La app me dio el paso a paso que necesitaba — sin juicios, sin llanto. Hoy toda la familia duerme. Eso no tiene precio." },
            ].map(({ name, baby, text }) => (
              <div key={name} className="bg-white rounded-3xl p-6 flex flex-col" style={{ boxShadow: "0 4px 24px rgba(33,117,135,0.10)" }}>
                <StarRow />
                <p className="text-[14px] lg:text-[15px] text-[#4a6a72] leading-relaxed mt-4 mb-5 flex-1">"{text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0f5f6]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#217587] to-[#1a5e6e] flex items-center justify-center text-white font-bold text-[14px]">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#1a2e35]">{name}</p>
                    <p className="text-[11px] text-[#9ab3b9]">Mamá de {baby}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
              className="block w-full text-center rounded-full py-4 text-base font-bold text-white cursor-pointer"
              style={{ background: "linear-gradient(135deg, #217587, #1a5e6e)", animation: "pulse-cta 2s ease-in-out infinite" }}>
              🌙 Quiero estos resultados para mi bebé
            </a>
          </div>
        </div>
      </section>

      {/* ══ INCLUIDO + PRECIO ════════════════════════════════════════ */}
      <section className="bg-[#f5f8f9] py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-nunito)] text-[26px] lg:text-[36px] font-bold text-[#1a2e35] mb-2">
              ¿Qué incluye la app?
            </h2>
            <p className="text-[#5a7a82] text-[14px] lg:text-[16px]">Todo lo que necesitas para transformar las noches de tu bebé</p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            {/* Checklist */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3"
                    style={{ boxShadow: "0 2px 10px rgba(33,117,135,0.06)" }}>
                    <CheckCircle2 size={18} className="text-[#22c55e] shrink-0" />
                    <p className="text-[13px] lg:text-[14px] text-[#4a6a72]">{item}</p>
                  </div>
                ))}
              </div>

              {/* Guarantee badge */}
              <div className="flex items-center gap-4 rounded-2xl p-4 bg-white"
                style={{ boxShadow: "0 2px 12px rgba(33,117,135,0.07)", border: "1px solid rgba(33,117,135,0.10)" }}>
                <Image src="/images/selo-garantia.webp" alt="Garantía 7 días" width={64} height={64} className="object-contain shrink-0" />
                <div>
                  <p className="font-bold text-[#1a2e35] text-[14px] mb-0.5">Garantía incondicional de 7 días</p>
                  <p className="text-[12px] text-[#5a7a82] leading-snug">Si no estás satisfecha, te devolvemos el 100% de tu inversión. Sin preguntas.</p>
                </div>
              </div>
            </div>

            {/* Pricing card */}
            <div className="mt-8 lg:mt-0">
              <div className="rounded-3xl overflow-hidden sticky top-24"
                style={{ border: "2px solid #217587", boxShadow: "0 12px 48px rgba(33,117,135,0.20)" }}>
                <div className="bg-[#217587] px-6 py-4 text-center">
                  <p className="text-[11px] font-bold text-white/80 uppercase tracking-widest">Acceso completo a la app</p>
                </div>
                <div className="bg-white p-8 text-center">
                  <p className="text-[14px] text-[#9ab3b9] line-through mb-1">$37.00 USD</p>
                  <p className="font-[family-name:var(--font-nunito)] text-6xl font-bold text-[#217587] leading-none">$5</p>
                  <p className="text-[14px] font-semibold text-[#217587] mt-2">USD · Por mes</p>

                  <div className="mt-5 space-y-2.5 text-left">
                    {["Acceso inmediato", "Sin suscripción mensual", "7 días de garantía total"].map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#22c55e] shrink-0" />
                        <span className="text-[14px] text-[#5a7a82]">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
                      className="block w-full text-center rounded-full py-4 text-base font-bold text-white cursor-pointer"
                      style={{ background: "linear-gradient(135deg, #217587, #1a5e6e)", animation: "pulse-cta 2s ease-in-out infinite" }}>
                      🌙 Quiero empezar ahora — $5
                    </a>
                  </div>
                  <p className="text-[#9ab3b9] text-xs mt-3">Acceso inmediato después del pago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GARANTÍA ════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 text-center" style={{ boxShadow: "0 8px 40px rgba(33,117,135,0.12)", border: "1px solid rgba(33,117,135,0.08)" }}>
            <div className="flex justify-center mb-6">
              <Image src="/images/selo-garantia.webp" alt="Garantía de 7 días" width={140} height={140} className="object-contain" />
            </div>
            <h3 className="font-[family-name:var(--font-nunito)] text-[24px] lg:text-[30px] font-bold text-[#1a2e35] mb-4">
              Garantía incondicional de 7 días
            </h3>
            <p className="text-[14px] lg:text-[16px] text-[#5a7a82] leading-relaxed mb-6 max-w-xl mx-auto">
              Si por cualquier motivo no estás satisfecha con el contenido o los resultados, contáctanos dentro de 7 días y te devolvemos el 100% de tu inversión. Sin burocracia. Sin preguntas.
            </p>
            <div className="flex items-center justify-center gap-2 text-[#22c55e]">
              <Shield size={18} />
              <span className="text-[14px] font-bold">Tu inversión está protegida</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════ */}
      <section id="faq" className="bg-[#f5f8f9] py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-nunito)] text-[26px] lg:text-[36px] font-bold text-[#1a2e35] mb-2">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-10">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-white rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(33,117,135,0.10)", boxShadow: "0 2px 10px rgba(33,117,135,0.05)" }}>
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none gap-3">
                  <span className="text-[14px] lg:text-[15px] font-semibold text-[#1a2e35]">{q}</span>
                  <ChevronDown size={16} className="text-[#217587] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[13px] lg:text-[14px] text-[#5a7a82] leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
              className="block w-full text-center rounded-full py-4 text-base font-bold text-white cursor-pointer"
              style={{ background: "linear-gradient(135deg, #217587, #1a5e6e)", animation: "pulse-cta 2s ease-in-out infinite" }}>
              🌙 Quiero empezar ahora — $5
            </a>
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#217587] via-[#1d6e7d] to-[#154f5e] py-16 lg:py-24 px-5 lg:px-8 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#35c0d8]/10 blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-10 lg:mb-0">
              <Image src="/images/final-cta.png" alt="Mamá y bebé durmiendo tranquilamente"
                width={700} height={520} className="w-full object-cover" />
            </div>

            {/* Copy */}
            <div>
              <h2 className="font-[family-name:var(--font-nunito)] text-[30px] lg:text-[42px] font-bold text-white leading-tight mb-5">
                Imagina despertar mañana descansada. En paz. Con tu bebé.
              </h2>
              <p className="text-white/70 text-[15px] lg:text-[17px] leading-relaxed mb-8">
                Esto no es fantasía. Es lo que pasa cuando sigues un método gentil y probado — y le das a tu hijo la habilidad de dormir que llevará por toda la vida.
              </p>

              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center rounded-full py-5 text-[17px] font-bold text-[#154f5e] cursor-pointer mb-5"
                style={{ background: "rgba(255,255,255,0.97)", animation: "pulse-cta-white 2s ease-in-out infinite" }}>
                🌙 Sí, estoy lista para transformar nuestras noches
              </a>

              <div className="flex items-center justify-center gap-6 text-white/50 text-[12px] font-semibold flex-wrap">
                <span>✓ Acceso inmediato</span>
                <span>✓ 7 días de garantía</span>
                <span>✓ Solo $5 USD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════ */}
      <footer className="bg-[#1a2e35] py-10 px-5 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <Image src="/logo/logo-horizontal.jpg" alt="Noches Tranquilas" width={160} height={40} className="rounded-lg opacity-80" />
            <p className="text-[#5a7a82] text-[11px] leading-relaxed max-w-xs text-center lg:text-left">
              Solo para fines educativos y de seguimiento. Consulta siempre al pediatra de tu bebé.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 text-[12px] text-[#5a7a82]">
            <Link href="/login" className="hover:text-white transition-colors cursor-pointer">Iniciar sesión</Link>
            <Link href="/register" className="hover:text-white transition-colors cursor-pointer">Crear cuenta</Link>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
              className="rounded-full px-5 py-2 text-white font-semibold cursor-pointer transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #217587, #1a5e6e)" }}>
              Comprar — $5
            </a>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
