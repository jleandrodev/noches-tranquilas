import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function faixaIdadeLabel(faixa: string): string {
  const labels: Record<string, string> = {
    ZERO_3: "0–3 meses",
    QUATRO_6: "4–6 meses",
    SEIS_9: "6–9 meses",
    NOVE_12: "9–12 meses",
    UM_MAIS: "1+ año",
  };
  return labels[faixa] ?? faixa;
}
