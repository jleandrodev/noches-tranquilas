import type { RotinaFaixa } from "@/types";

export const rotinasPorFaixa: RotinaFaixa[] = [
  {
    faixa: "ZERO_3",
    label: "0–3 meses",
    sonecas: "4–5 siestas/día",
    horaDormir: "~20:00",
    metaNoturna: "5–6h seguidas",
    rotinaNoturna: [
      { horario: "19:00", atividade: "Inicio de la rutina — luz baja" },
      { horario: "19:15", atividade: "Baño relajante (5 min)" },
      { horario: "19:25", atividade: "Pijama + masaje suave" },
      { horario: "19:35", atividade: "Amamantamiento/biberón" },
      { horario: "19:50", atividade: "Cuna (somnoliento pero despierto)" },
      { horario: "20:00", atividade: "Dormir" },
    ],
  },
  {
    faixa: "QUATRO_6",
    label: "4–6 meses",
    sonecas: "3–4 siestas/día",
    horaDormir: "~19:30",
    metaNoturna: "8–10h",
    rotinaNoturna: [
      { horario: "18:30", atividade: "Inicio de la rutina — ambiente tranquilo" },
      { horario: "18:45", atividade: "Baño relajante" },
      { horario: "19:00", atividade: "Pijama + luz baja" },
      { horario: "19:10", atividade: "Amamantamiento/biberón" },
      { horario: "19:20", atividade: "Música suave o cuento" },
      { horario: "19:30", atividade: "Cuna (despierto)" },
    ],
  },
  {
    faixa: "SEIS_9",
    label: "6–9 meses",
    sonecas: "2–3 siestas/día",
    horaDormir: "~19:00",
    metaNoturna: "10–11h",
    rotinaNoturna: [
      { horario: "18:00", atividade: "Cena sólida (si ya la inició)" },
      { horario: "18:30", atividade: "Inicio de la rutina — actividad tranquila" },
      { horario: "18:45", atividade: "Baño relajante" },
      { horario: "19:00", atividade: "Pijama + luz baja" },
      { horario: "19:10", atividade: "Última toma de amamantamiento/biberón" },
      { horario: "19:20", atividade: "Cuento corto" },
      { horario: "19:30", atividade: "Cuna (despierto)" },
    ],
  },
  {
    faixa: "NOVE_12",
    label: "9–12 meses",
    sonecas: "2 siestas/día",
    horaDormir: "~19:00",
    metaNoturna: "11h",
    rotinaNoturna: [
      { horario: "17:30", atividade: "Cena en familia" },
      { horario: "18:30", atividade: "Inicio de la rutina — sin pantallas" },
      { horario: "18:45", atividade: "Baño relajante (5–10 min)" },
      { horario: "19:00", atividade: "Pijama + luz baja" },
      { horario: "19:10", atividade: "Toma si aplica" },
      { horario: "19:20", atividade: "Cuento corto" },
      { horario: "19:30", atividade: "Cuna (despierto)" },
    ],
  },
  {
    faixa: "UM_MAIS",
    label: "1+ año",
    sonecas: "1–2 siestas/día",
    horaDormir: "~19:00",
    metaNoturna: "11–12h",
    rotinaNoturna: [
      { horario: "18:30", atividade: "Inicio de la rutina — actividad tranquila" },
      { horario: "19:00", atividade: "Baño relajante (5–10 min)" },
      { horario: "19:15", atividade: "Pijama + luz baja" },
      { horario: "19:20", atividade: "Última toma (si aplica)" },
      { horario: "19:30", atividade: "Cuento corto" },
      { horario: "19:45", atividade: "Cuna (bebé despierto)" },
      { horario: "20:00", atividade: "Dormir" },
    ],
  },
];

export function getRotinaFaixa(faixa: string): RotinaFaixa | undefined {
  return rotinasPorFaixa.find((r) => r.faixa === faixa);
}
