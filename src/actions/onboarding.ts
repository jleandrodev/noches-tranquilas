"use server";

import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import type { FaixaIdade } from "@/types";

export async function salvarBebeAction(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const faixaIdade = formData.get("faixaIdade") as FaixaIdade;
  const nome = formData.get("nome") as string | null;

  // Garante que o User existe na nossa tabela antes de criar o Bebe
  await prisma.user.upsert({
    where: { id: user.id },
    update: {},
    create: { id: user.id, email: user.email! },
  });

  await prisma.bebe.upsert({
    where: { userId: user.id },
    update: { faixaIdade, nome: nome || null },
    create: { userId: user.id, faixaIdade, nome: nome || null },
  });

  redirect("/dashboard");
}
