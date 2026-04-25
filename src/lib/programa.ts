export interface PosicaoPrograma {
  diaPrograma: number;  // 1–84
  semana: number;       // 1–12
  diaAtual: number;     // 1–7 (dia dentro da semana)
}

export function calcularPosicao(inicio: Date): PosicaoPrograma {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const ref = new Date(inicio);
  ref.setHours(0, 0, 0, 0);
  const diasDecorridos = Math.floor((hoje.getTime() - ref.getTime()) / (1000 * 60 * 60 * 24));
  const diaPrograma = Math.min(Math.max(diasDecorridos + 1, 1), 84);
  const semana = Math.min(Math.ceil(diaPrograma / 7), 12);
  const diaAtual = ((diaPrograma - 1) % 7) + 1;
  return { diaPrograma, semana, diaAtual };
}
