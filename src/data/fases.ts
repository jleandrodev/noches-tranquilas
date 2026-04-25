import type { Fase, Semana } from "@/types";

export const fases: Fase[] = [
  {
    id: 1,
    nome: "Preparación",
    semanas: [1, 2],
    objetivo: "Entender el método y preparar el ambiente para el sueño",
    cor: "#217587",
  },
  {
    id: 2,
    nome: "Implementación",
    semanas: [3, 4],
    objetivo: "Iniciar la rutina y aplicar las técnicas de sueño independiente",
    cor: "#1a5e6e",
  },
  {
    id: 3,
    nome: "Consolidación",
    semanas: [5, 6, 7, 8],
    objetivo: "Estabilizar la rutina y resolver regresiones",
    cor: "#2a8fa6",
  },
  {
    id: 4,
    nome: "Mantenimiento",
    semanas: [9, 10, 11, 12],
    objetivo: "Mantener los resultados y ajustar con el crecimiento del bebé",
    cor: "#35a8c0",
  },
];

export const semanas: Semana[] = [
  // === FASE 1: PREPARACIÓN ===
  {
    numero: 1,
    faseId: 1,
    titulo: "Conociendo el Método",
    tipo: "semanal",
    objetivos: [
      "Leer los materiales del método 12 Horas",
      "Identificar el rango de edad del bebé",
      "Preparar el ambiente de sueño ideal",
      "Establecer horario fijo para dormir",
    ],
    tarefas: [
      {
        id: "s1-t1",
        titulo: "Lee la guía del método",
        descricao: "Lee el material completo del Método 12 Horas de Suzy Giordano",
        checklist: [
          "Leer el capítulo sobre la ventana de sueño",
          "Anotar dudas",
          "Ver la rutina recomendada para el rango de edad",
        ],
        horarioSugerido: "Manhã",
      },
      {
        id: "s1-t2",
        titulo: "Prepara el cuarto para el sueño",
        descricao: "Crea un ambiente oscuro, silencioso y con temperatura agradable",
        checklist: [
          "Instalar blackout o cortina oscura",
          "Usar ruido blanco (app o dispositivo)",
          "Regular temperatura entre 20–22°C",
          "Verificar seguridad de la cuna",
        ],
        horarioSugerido: "Tarde",
      },
      {
        id: "s1-t3",
        titulo: "Define el horario para dormir",
        descricao: "Elige un horario consistente para colocar al bebé en la cuna",
        checklist: [
          "Investigar la ventana de sueño del rango de edad",
          "Conversar con la pareja sobre la rutina",
          "Anotar el horario elegido en el diario",
        ],
      },
    ],
  },
  {
    numero: 2,
    faseId: 1,
    titulo: "Creando la Rutina Nocturna",
    tipo: "semanal",
    objetivos: [
      "Iniciar rutina nocturna consistente",
      "Practicar colocar al bebé despierto en la cuna",
      "Registrar patrones de sueño en el diario",
    ],
    tarefas: [
      {
        id: "s2-t1",
        titulo: "Ejecuta la rutina nocturna todos los días",
        descricao: "Sigue la secuencia: baño → pijama → amamantamiento → cuento → cuna",
        checklist: [
          "Baño relajante (5–10 min)",
          "Pijama con luz baja",
          "Última toma si aplica",
          "Cuento corto",
          "Colocar en la cuna despierto",
        ],
        horarioSugerido: "18:30–19:45",
      },
      {
        id: "s2-t2",
        titulo: "Registra en el diario de sueño",
        descricao: "Anota el horario de dormir, despertar y despertares nocturnos",
        checklist: [
          "Registrar la hora en que lo pusiste en la cuna",
          "Registrar la hora en que se durmió",
          "Contar despertares nocturnos",
          "Registrar la hora de despertar por la mañana",
        ],
        horarioSugerido: "Noite",
      },
    ],
  },

  // === FASE 2: IMPLEMENTACIÓN ===
  {
    numero: 3,
    faseId: 2,
    titulo: "Sueño Independiente",
    tipo: "semanal",
    objetivos: [
      "Iniciar técnica de sueño independiente",
      "Reducir asociaciones de sueño",
      "Mantener consistencia en la rutina",
    ],
    tarefas: [
      {
        id: "s3-t1",
        titulo: "Practica el sueño independiente",
        descricao: "Coloca al bebé en la cuna despierto y permite que se duerma solo",
        checklist: [
          "Colocar en la cuna con señales de sueño (bostezos, frotándose los ojos)",
          "Salir del cuarto mientras está despierto",
          "Esperar antes de intervenir si llora",
          "Registrar el tiempo hasta dormirse",
        ],
        horarioSugerido: "19:30–20:00",
      },
      {
        id: "s3-t2",
        titulo: "Reduce las asociaciones de sueño",
        descricao: "Identifica y reduce gradualmente los apoyos para dormir",
        checklist: [
          "Listar apoyos actuales (amamantamiento, mecimiento, etc.)",
          "Elegir uno para trabajar primero",
          "Aplicar estrategia de reducción gradual",
        ],
      },
    ],
  },
  {
    numero: 4,
    faseId: 2,
    titulo: "Consolidando el Sueño Nocturno",
    tipo: "semanal",
    objetivos: [
      "Aumentar bloques de sueño nocturno",
      "Reducir alimentaciones nocturnas si es adecuado",
      "Evaluar el progreso de la semana 3",
    ],
    tarefas: [
      {
        id: "s4-t1",
        titulo: "Evalúa el progreso nocturno",
        descricao: "Compara los registros del diario con la semana anterior",
        checklist: [
          "Calcular el promedio de despertares",
          "Verificar tendencia de mejora",
          "Ajustar estrategia si es necesario",
        ],
        horarioSugerido: "Manhã",
      },
      {
        id: "s4-t2",
        titulo: "Trabaja las alimentaciones nocturnas",
        descricao: "Evalúa si las alimentaciones nocturnas son por hambre o hábito",
        checklist: [
          "Consultar tabla de necesidades por edad",
          "Verificar aumento de peso con el pediatra",
          "Planear reducción gradual si está indicado",
        ],
      },
    ],
  },

  // === FASE 3: CONSOLIDACIÓN ===
  {
    numero: 5,
    faseId: 3,
    titulo: "Estabilizando la Rutina",
    tipo: "quincenal",
    objetivos: [
      "Mantener consistencia en las últimas 2 semanas",
      "Resolver pequeñas regresiones",
      "Ajustar siestas del día",
    ],
    tarefas: [
      {
        id: "s5-t1",
        titulo: "Mantén la rutina sin excepciones",
        descricao: "La consistencia es la clave en esta fase — evita las excepciones",
        checklist: [
          "Mantener horario fijo para dormir",
          "Seguir la rutina incluso los fines de semana",
          "Evitar excepciones por viajes o visitas",
        ],
      },
      {
        id: "s5-t2",
        titulo: "Ajusta el número de siestas",
        descricao: "Verifica si el número de siestas es adecuado para el rango de edad",
        checklist: [
          "Consultar tabla de siestas por rango",
          "Observar señales de cansancio excesivo",
          "Ajustar ventanas de sueño si es necesario",
        ],
        horarioSugerido: "Manhã",
      },
    ],
  },
  {
    numero: 6,
    faseId: 3,
    titulo: "Gestionando Regresiones",
    tipo: "quincenal",
    objetivos: [
      "Identificar causas de regresión",
      "Aplicar estrategias de recuperación",
      "Mantener la calma y la consistencia",
    ],
    tarefas: [
      {
        id: "s6-t1",
        titulo: "Identifica las posibles causas de regresión",
        descricao: "Las regresiones son normales — entiende qué las está causando",
        checklist: [
          "Verificar si hay salto cognitivo (Wonder Weeks)",
          "Revisar la salud del bebé (dentición, enfermedades)",
          "Verificar cambios en la rutina familiar",
          "Evaluar el ambiente de sueño",
        ],
      },
      {
        id: "s6-t2",
        titulo: "Aplica estrategia de recuperación",
        descricao: "Refuerza la rutina sin introducir nuevos apoyos para dormir",
        checklist: [
          "Mantener la rutina nocturna igual",
          "Ofrecer consuelo sin crear nuevas asociaciones",
          "Ser consistente por al menos 3–5 noches",
        ],
      },
    ],
  },
  {
    numero: 7,
    faseId: 3,
    titulo: "Sueño y Desarrollo",
    tipo: "quincenal",
    objetivos: [
      "Entender el impacto del desarrollo en el sueño",
      "Ajustar la rutina para nuevos hitos",
      "Revisar el ambiente de sueño",
    ],
    tarefas: [
      {
        id: "s7-t1",
        titulo: "Revisa el ambiente de sueño",
        descricao: "Con el desarrollo, el bebé puede necesitar ajustes en el ambiente",
        checklist: [
          "Verificar seguridad de la cuna (barrotes, posición)",
          "Revisar blackout y ruido blanco",
          "Evaluar temperatura del cuarto",
        ],
      },
      {
        id: "s7-t2",
        titulo: "Adapta la rutina al desarrollo",
        descricao: "Hitos como gatear y hablar pueden afectar el sueño",
        checklist: [
          "Observar nuevos hitos de la semana",
          "Ajustar el horario para dormir si es necesario",
          "Añadir actividad física durante el día",
        ],
      },
    ],
  },
  {
    numero: 8,
    faseId: 3,
    titulo: "Evaluación de la Fase 3",
    tipo: "quincenal",
    objetivos: [
      "Evaluar el progreso desde el inicio",
      "Celebrar los logros",
      "Planear la fase de mantenimiento",
    ],
    tarefas: [
      {
        id: "s8-t1",
        titulo: "Haz una evaluación completa",
        descricao: "Compara el sueño actual con la semana 1 del programa",
        checklist: [
          "Revisar el diario de las últimas 8 semanas",
          "Calcular la mejora en horas de sueño",
          "Anotar los principales logros",
          "Identificar puntos que aún necesitan atención",
        ],
        horarioSugerido: "Final de semana",
      },
    ],
  },

  // === FASE 4: MANTENIMIENTO ===
  {
    numero: 9,
    faseId: 4,
    titulo: "Mantenimiento y Autonomía",
    tipo: "quincenal",
    objetivos: [
      "Mantener la rutina con menos supervisión",
      "Confiar en el proceso conquistado",
      "Manejar situaciones excepcionales",
    ],
    tarefas: [
      {
        id: "s9-t1",
        titulo: "Prueba la flexibilidad con consistencia",
        descricao: "Pequeñas variaciones son normales — aprende cómo recuperarte",
        checklist: [
          "Planear cómo manejar los viajes",
          "Crear un protocolo para noches difíciles",
          "Definir qué es una 'excepción aceptable'",
        ],
      },
    ],
  },
  {
    numero: 10,
    faseId: 4,
    titulo: "Transiciones de Sueño",
    tipo: "quincenal",
    objetivos: [
      "Planear transición de siestas",
      "Prepararse para cambios de rango de edad",
      "Ajustar horarios conforme al crecimiento",
    ],
    tarefas: [
      {
        id: "s10-t1",
        titulo: "Evalúa la transición de siestas",
        descricao: "Verifica si es momento de reducir el número de siestas",
        checklist: [
          "Observar resistencia a la hora de la siesta",
          "Verificar el horario de dormir por la noche",
          "Consultar tabla del rango de edad",
          "Planear transición gradual",
        ],
      },
    ],
  },
  {
    numero: 11,
    faseId: 4,
    titulo: "Sueño Sostenible",
    tipo: "quincenal",
    objetivos: [
      "Crear hábitos a largo plazo",
      "Involucrar a toda la familia en la rutina",
      "Prepararse para el segundo año de vida",
    ],
    tarefas: [
      {
        id: "s11-t1",
        titulo: "Involucra a toda la familia",
        descricao: "Abuelos, niñeras y cuidadores deben conocer y respetar la rutina",
        checklist: [
          "Crear guía de rutina para otros cuidadores",
          "Conversar con los abuelos sobre la importancia",
          "Definir reglas para las excepciones",
        ],
      },
    ],
  },
  {
    numero: 12,
    faseId: 4,
    titulo: "Graduación del Programa",
    tipo: "quincenal",
    objetivos: [
      "Celebrar 3 meses de progreso",
      "Documentar la rutina establecida",
      "Planear los próximos meses",
    ],
    tarefas: [
      {
        id: "s12-t1",
        titulo: "Documenta la rutina conquistada",
        descricao: "Registra la rutina actual para referencia futura",
        checklist: [
          "Escribir la rutina detallada del día",
          "Anotar lo que funcionó y lo que no funcionó",
          "Fotografiar el ambiente de sueño actual",
          "Hacer copia de seguridad del diario",
        ],
      },
      {
        id: "s12-t2",
        titulo: "¡Celebra el logro!",
        descricao: "¡Completaste el programa de 3 meses — eso es increíble!",
        checklist: [
          "Compartir el progreso con la familia",
          "Hacer algo especial para ti (¡te lo mereces!)",
          "Evaluar el programa y dejar comentarios",
        ],
      },
    ],
  },
];

export function getSemana(numero: number): Semana | undefined {
  return semanas.find((s) => s.numero === numero);
}

export function getFase(id: number): Fase | undefined {
  return fases.find((f) => f.id === id);
}

export function getFaseDaSemana(numeroSemana: number): Fase | undefined {
  return fases.find((f) => f.semanas.includes(numeroSemana));
}
