export type FaixaIdade = "ZERO_3" | "QUATRO_6" | "SEIS_9" | "NOVE_12" | "UM_MAIS";

export type StatusAssinatura = "ATIVA" | "CANCELADA" | "EXPIRADA";

export type TipoAcompanhamento = "semanal" | "quinzenal";

export interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  checklist: string[];
  horarioSugerido?: string;
}

export interface Semana {
  numero: number; // 1–12
  titulo: string;
  objetivos: string[];
  tipo: TipoAcompanhamento;
  tarefas: Tarefa[];
  faseId: number;
}

export interface Fase {
  id: number;
  nome: string;
  semanas: number[]; // ex: [1, 2]
  objetivo: string;
  cor: string;
}

export interface Rotina {
  horario: string;
  atividade: string;
}

export interface RotinaFaixa {
  faixa: FaixaIdade;
  label: string;
  sonecas: string;
  horaDormir: string;
  metaNoturna: string;
  rotinaNoturna: Rotina[];
}

export interface Conteudo {
  slug: string;
  titulo: string;
  resumo: string;
  faseId: number;
  corpo: string;
}

export interface BebeDados {
  id: string;
  nome?: string;
  faixaIdade: FaixaIdade;
}

export interface AssinaturaDados {
  status: StatusAssinatura;
  expiraEm?: Date;
}
