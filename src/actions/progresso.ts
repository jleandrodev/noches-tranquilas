"use server";

import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function toggleTarefaAction(tarefaId: string, semana: number) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "Não autenticado" };

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const progresso = await prisma.progresso.findUnique({
    where: { userId_data: { userId: user.id, data: hoje } },
  });

  const tarefasAtuais: string[] = progresso?.tarefaIds ?? [];
  const jaConcluida = tarefasAtuais.includes(tarefaId);

  const novasTarefas = jaConcluida
    ? tarefasAtuais.filter((id) => id !== tarefaId)
    : [...tarefasAtuais, tarefaId];

  await prisma.progresso.upsert({
    where: { userId_data: { userId: user.id, data: hoje } },
    update: { tarefaIds: novasTarefas },
    create: { userId: user.id, data: hoje, semana, tarefaIds: novasTarefas },
  });

  revalidatePath("/dashboard");
  return { ok: true };
}

export async function toggleDiaConcluido(dataISO: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Não autenticado" };

  const data = new Date(dataISO);
  data.setHours(0, 0, 0, 0);

  const progresso = await prisma.progresso.findUnique({
    where: { userId_data: { userId: user.id, data } },
  });

  const novoConcluido = !(progresso?.concluido ?? false);

  // Determine semana based on current completed days count (before this toggle)
  const totalConcluidos = await prisma.progresso.count({
    where: { userId: user.id, concluido: true },
  });
  const semanaCalc = Math.min(Math.floor(totalConcluidos / 7) + 1, 12);

  await prisma.progresso.upsert({
    where: { userId_data: { userId: user.id, data } },
    update: { concluido: novoConcluido },
    create: { userId: user.id, data, semana: semanaCalc, tarefaIds: [], concluido: novoConcluido },
  });

  revalidatePath("/dashboard");
  revalidatePath("/programa");
  return { ok: true, concluido: novoConcluido };
}

export async function salvarEntradaDiarioAction(data: {
  bebeId: string;
  horaDormir: string;
  horaAcordar: string;
  despertares: number;
  notas?: string;
}) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  await prisma.entradaDiario.upsert({
    where: { bebeId_data: { bebeId: data.bebeId, data: hoje } },
    update: {
      horaDormir: data.horaDormir,
      horaAcordar: data.horaAcordar,
      despertares: data.despertares,
      notas: data.notas,
    },
    create: {
      bebeId: data.bebeId,
      data: hoje,
      horaDormir: data.horaDormir,
      horaAcordar: data.horaAcordar,
      despertares: data.despertares,
      notas: data.notas,
    },
  });

  revalidatePath("/diario");
  return { ok: true };
}
