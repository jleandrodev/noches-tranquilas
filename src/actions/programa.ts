"use server";

import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/**
 * Ajusta a posição do usuário no programa.
 * semana: 1-12, dia: 1-7
 * Recalcula inicioPrograma para que hoje seja o dia especificado.
 */
export async function ajustarProgressoAction(semana: number, dia: number) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Não autenticado" };

  const semanaValida = Math.min(Math.max(semana, 1), 12);
  const diaValido = Math.min(Math.max(dia, 1), 7);

  // Total de dias decorridos desde o início para chegar nessa posição
  const diasDecorridos = (semanaValida - 1) * 7 + (diaValido - 1);

  const novoInicio = new Date();
  novoInicio.setDate(novoInicio.getDate() - diasDecorridos);
  novoInicio.setHours(0, 0, 0, 0);

  await prisma.user.update({
    where: { id: user.id },
    data: { inicioPrograma: novoInicio },
  });

  revalidatePath("/dashboard");
  revalidatePath("/programa");
  return { ok: true };
}
