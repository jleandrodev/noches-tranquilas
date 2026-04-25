"use server";

import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  // Sincroniza o usuário Supabase com nossa tabela users
  if (data.user) {
    await prisma.user.upsert({
      where: { id: data.user.id },
      update: { email: data.user.email! },
      create: { id: data.user.id, email: data.user.email! },
    });
  }

  redirect("/dashboard");
}

export async function registerAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { error: error.message };
  }

  if (data.user) {
    await prisma.user.upsert({
      where: { id: data.user.id },
      update: { email: data.user.email! },
      create: { id: data.user.id, email: data.user.email! },
    });
  }

  redirect("/onboarding");
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
