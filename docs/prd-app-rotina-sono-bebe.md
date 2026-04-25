# PRD — App Noches Tranquilas: Acompanhamento de Sono do Bebê

## 1. Introdução / Visão Geral

Este projeto consiste na criação de um Web App de acompanhamento do método de sono do bebê, permitindo que mães sigam um programa estruturado de **3 meses (12 semanas)** baseado no Método das 12 Horas.

O aplicativo transformará o conteúdo do método em instruções práticas, rotinas diárias e um plano de acompanhamento guiado com 4 fases progressivas.

O sistema contará com controle de progresso semanal, acompanhamentos periódicos (semanal nas semanas 1–4, quinzenal nas semanas 5–12) e acesso por assinatura paga via Kiwify utilizando webhook.

---

## 2. Objetivos

### Objetivos principais

- Guiar mães por um programa completo de 3 meses para treinar o sono do bebê
- Transformar o conteúdo do método em tarefas práticas organizadas por fase e semana
- Facilitar a execução diária da rotina com checklists e instruções detalhadas
- Acompanhar progresso semanal e por fase do programa
- Oferecer acesso via assinatura

### Objetivos mensuráveis

- ≥ 80% dos usuários completarem a Fase 1 (Preparação, semanas 1–2)
- ≥ 60% dos usuários chegarem à semana 8 do programa
- ≤ 2 minutos para iniciar a rotina diária
- ≥ 90% dos usuários acessarem o app após ativação da assinatura
- ≥ 50% dos usuários completarem as 12 semanas do programa

---

## 3. Histórias do Usuário

Como mãe,
quero selecionar a idade do meu bebê
para receber rotinas e orientações adequadas à fase dele.

Como mãe,
quero seguir um programa de 3 meses estruturado em fases
para implementar o método de sono de forma gradual e segura.

Como mãe,
quero ver minhas tarefas da semana atual
para saber exatamente o que preciso fazer hoje.

Como mãe,
quero marcar tarefas como concluídas
para acompanhar meu progresso diário e semanal.

Como mãe,
quero visualizar meu avanço nas 12 semanas
para me manter motivada e ver o progresso do bebê.

Como mãe,
quero acessar conteúdos educativos por fase
para entender o que esperar e evitar erros comuns.

Como mãe,
quero acessar o app após comprar a assinatura
para iniciar o programa imediatamente.

---

## 4. Requisitos Funcionais

### Autenticação

- Login via Supabase Auth
- Cadastro via email
- Login automático após ativação via webhook
- Bloqueio de acesso sem assinatura ativa

---

### Integração com Kiwify

O sistema deve:

- Receber webhook da Kiwify
- Validar pagamento aprovado
- Criar usuário automaticamente
- Ativar acesso ao app
- Atualizar status da assinatura

Eventos esperados:

- `purchase.approved`
- `subscription.active`
- `subscription.canceled`

---

### Cadastro do Bebê

- Permitir cadastrar 1 bebê
- Selecionar faixa de idade:

Faixas:

- 0–3 meses
- 4–6 meses
- 6–9 meses
- 9–12 meses
- 1+ ano

- Gerar rotinas e programa automaticamente com base na idade

---

### Programa de 3 Meses (12 Semanas)

O programa é dividido em 4 fases progressivas:

#### Fase 1 — Preparação (Semanas 1–2)

**Objetivo:** Avaliar o cenário atual e preparar ambiente e rotina.

- Semana 1:
  - Avaliação completa do sono atual do bebê
  - Início do diário do sono
  - Organização do ambiente (quarto escuro, ruído branco, temperatura)

- Semana 2:
  - Ajuste da rotina diurna (horários fixos de sonecas)
  - Estabelecer rotina noturna consistente
  - Reforço da alimentação diurna

#### Fase 2 — Implementação (Semanas 3–4)

**Objetivo:** Introduzir a autonomia e iniciar o desmame noturno.

- Semana 3:
  - Início da autonomia para adormecer (colocar no berço acordado)
  - Técnica de consolo sem pegar no colo

- Semana 4:
  - Início do desmame noturno gradual
  - Redução progressiva das mamadas noturnas

#### Fase 3 — Consolidação (Semanas 5–8)

**Objetivo:** Continuar a progressão e estabilizar o sono noturno.

- Continuação do desmame noturno
- Ajustes de horários de sonecas conforme necessidade
- Redução de despertares
- Gestão de regressões de sono

#### Fase 4 — Manutenção (Semanas 9–12)

**Objetivo:** Consolidar o método e prevenir regressões futuras.

- Ajustes finos na rotina
- Estratégias de prevenção de regressões
- Transição de 2 sonecas para 1 soneca (se aplicável pela idade)
- Consolidação final: 11–12 horas de sono noturno

---

### Rotinas Diárias

Cada rotina deve conter:

- Horários sugeridos baseados na faixa de idade
- Janelas de sono recomendadas
- Horários de sonecas
- Rotina noturna estruturada

Cada etapa deve conter:

- Checklist de ações
- Instruções detalhadas
- Tempo estimado

Exemplo:

```
Rotina Noturna — Banho Relaxante
Tempo: 5–10 minutos

Checklist:
☐ Preparar água morna (37°C)
☐ Manter luz baixa ou apagada
☐ Evitar estímulos e barulhos
☐ Usar sabonete suave específico para bebês
```

---

### Tela Principal do Dia

- Exibir fase atual e semana do programa
- Exibir tarefas do dia organizadas por horário
- Exibir progresso do dia (ex: 3/7 tarefas concluídas)
- Permitir marcar tarefas concluídas
- Exibir dica do dia baseada na fase atual

---

### Acompanhamento Semanal

- Resumo de cada semana com objetivos e tarefas
- Identificação do tipo de encontro por fase:
  - Semanas 1–4: acompanhamento semanal
  - Semanas 5–12: acompanhamento quinzenal
- Checklist de entrega da semana
- Status de progresso da fase

---

### Histórico e Progresso

- Visualização das 12 semanas em linha do tempo
- Dias com tarefas concluídas destacados
- Indicador de fase atual com percentual de conclusão
- Diário do sono: registrar horários de dormir/acordar e despertares noturnos

---

### Conteúdo Educativo

- Conteúdo organizado por fase do programa
- Dicas rápidas para o dia
- Erros comuns por fase e como evitá-los
- Recomendações específicas por faixa de idade do bebê
- Explicação dos princípios do Método das 12 Horas

---

### Rotinas por Idade

Cada faixa de idade terá:

- Horários sugeridos específicos
- Número e duração das sonecas
- Janela de sono ideal
- Rotina noturna adaptada
- Total de horas de sono esperadas

---

## 5. Não-Objetivos

O sistema NÃO incluirá:

- Monitoramento automático de sono (wearables, câmeras)
- Suporte a múltiplos bebês
- Notificações push
- Chat ao vivo com especialistas
- Geração de relatórios exportáveis (fase inicial)

---

## 6. Considerações de Design

Interface simples, acolhedora e minimalista — voltada para mães cansadas que precisam de clareza e praticidade.

**Telas principais:**

1. **Dashboard do Dia** — tarefas de hoje, progresso e fase atual
2. **Programa** — visão das 12 semanas, fases e semana atual
3. **Diário do Sono** — registros diários e histórico
4. **Conteúdos** — artigos e dicas por fase
5. **Perfil** — dados do bebê e da assinatura

**Princípios de UI:**
- Cards arredondados com sombra suave
- Hierarquia clara de informação
- Progresso visual (barras, círculos de porcentagem)
- Paleta baseada em #217587 com tons neutros e quentes
- Tipografia limpa e legível

---

## 7. Considerações Técnicas

**Stack:**

- Next.js (App Router)
- Prisma ORM
- Supabase Database
- Supabase Auth
- Kiwify Webhook

**Arquitetura:**

- SSR com Server Actions
- Proteção de rotas via middleware
- Webhook com validação de assinatura

---

## 8. Fluxo do Usuário

```
Compra na Kiwify
  → Webhook recebido
  → Usuário criado automaticamente
  → Acesso liberado
  → Cadastro do bebê (idade)
  → Programa de 12 semanas gerado
  → Semana 1 / Fase 1 iniciada
  → Execução diária de tarefas
  → Progresso registrado semana a semana
  → Conclusão do programa (semana 12)
```

---

## 9. Fluxo do Webhook

**Endpoint:** `/api/webhooks/kiwify`

**Fluxo:**

```
Receber evento POST
  → Validar assinatura do webhook
  → Identificar tipo de evento
  → Criar/atualizar usuário no Supabase
  → Ativar ou desativar acesso
  → Retornar 200 OK
```

---

## 10. Métricas de Sucesso

- **Taxa de ativação:** % de usuários que completam o cadastro do bebê após a compra
- **Adesão ao programa:** % de usuários que chegam à semana 4, 8 e 12
- **Engajamento diário:** % de dias com pelo menos 1 tarefa marcada
- **Conclusão do programa:** % de usuários que completam as 12 semanas
- **Retenção:** usuários ativos após 30, 60 e 90 dias

---

## 11. Evoluções Futuras

- Dashboard de insights com gráficos de evolução do sono
- Inteligência adaptativa de rotinas
- Conteúdo premium em vídeo
- Versão mobile (React Native)
- Comunidade / fórum de mães
- Integração com consultoras de sono (agendamento)
