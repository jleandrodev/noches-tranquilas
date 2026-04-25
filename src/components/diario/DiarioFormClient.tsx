"use client";

import { useState } from "react";
import { SleepEntryForm } from "./SleepEntryForm";
import { salvarEntradaDiarioAction } from "@/actions/progresso";
import { CheckCircle2 } from "lucide-react";

interface DiarioFormClientProps {
  bebeId: string;
}

export function DiarioFormClient({ bebeId }: DiarioFormClientProps) {
  const [saved, setSaved] = useState(false);

  async function handleSubmit(data: {
    horaDormir: string;
    horaAcordar: string;
    despertares: number;
    notas: string;
  }) {
    await salvarEntradaDiarioAction({ bebeId, ...data });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <>
      <SleepEntryForm onSubmit={handleSubmit} />
      {saved && (
        <div className="mt-3 flex items-center gap-2 justify-center text-[#22c55e] text-sm font-semibold animate-fade-in">
          <CheckCircle2 size={16} />
          ¡Registro guardado con éxito!
        </div>
      )}
    </>
  );
}
