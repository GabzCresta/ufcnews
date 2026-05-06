# Plano de Reestruturacao do /pipeline — 4 Camadas

> Documento vivo. Cada camada sera discutida, pesquisada, implementada e testada com o Gabriel.
> Status: [ ] = pendente, [x] = feito, [~] = em progresso

---

## Contexto

O /pipeline eh o sistema de analises pre-luta semanal do crenas.site.
- **7 agentes** Claude Code CLI (`.claude/agents/*.md`)
- **Orquestrador:** `pipeline-runner.ts` (594 linhas) + `claude-cli.ts` (373 linhas)
- **Persistencia:** tabelas `war_room_*` (dedicadas, separadas da AI Company)
- **Interface:** War Room dashboard (3 colunas) + Pipeline Section (SSE)

A "ideia C" (migracao visual + token tracker + Claude CLI) ja esta implementada. Este plano constroi em cima disso.

---

## CAMADA 1: Agent Definitions

> **Onde:** `.claude/agents/*.md`
> **Objetivo:** Agentes mais inteligentes, contextualizados, e com self-check

### [ ] 1.1 CEO com metricas reais via appendSystemPrompt

**Problema:** CEO recebe strings montadas no pipeline-runner, sem acesso a dados historicos.

**Solucao:** Na chamada final do CEO, injetar via `appendSystemPrompt`:
- Stats dos ultimos 5 pipelines (tempo, custo, success rate)
- Performance por agente (da tabela war_room_agents)
- Comparacao com benchmarks

**Arquivos:**
- `src/lib/pipeline-runner.ts` — montar o appendSystemPrompt com dados da DB
- `.claude/agents/ceo.md` — atualizar prompt pra referenciar essas metricas

### [ ] 1.2 Card Scraper: output estruturado + persistencia

**Problema:** Card scraper retorna texto livre. O output eh passado como string pros analysts, truncado em 3000 chars.

**Solucao:**
- Atualizar prompt do scraper pra SEMPRE retornar um bloco JSON `scrapedCard` no final
- Pipeline-runner parseia esse JSON e salva como `card_snapshot` no BD
- Analysts recebem o JSON completo (nao truncado)

**Arquivos:**
- `.claude/agents/card-scraper.md` — garantir output JSON consistente
- `src/lib/pipeline-runner.ts` — parsear e persistir card

### [ ] 1.3 Translator: self-check reforçado

**Problema:** Traducoes as vezes deixam palavras em portugues. O self-check no prompt existe mas nao eh enforcement mecanico.

**Solucao:**
- Reforçar prompt com exemplos concretos de erros passados
- Adicionar lista expandida de palavras PT-BR pra grep
- Instruir agente a reportar quantas correcoes fez

**Arquivos:**
- `.claude/agents/translator.md` — reforçar self-check

### [ ] 1.4 Considerar agent de Hydration

**Problema:** Analyses ficam em arquivos .tsx mas precisam ir pro BD (risco 1).

**Solucao:** Em vez de um agente separado, adicionar fase de hydration no pipeline-runner (chama `npm run hydrate`). Mais simples e confiavel que um agente LLM.

**Decisao:** Implementar na Camada 2 (Orchestration) como fase do pipeline, nao como agente.

---

## CAMADA 2: Orchestration

> **Onde:** `src/lib/pipeline-runner.ts`
> **Objetivo:** Cortar custo, aumentar resiliencia, adicionar hydration

### [ ] 2.1 CEO de 7 chamadas → 2

**Problema:** CEO faz 7 chamadas LLM ao longo do pipeline (~$0.50 extra em sonnet por pipeline).

**Solucao:**
- **Manter:** Chamada 1 (abertura, 3-4 frases)
- **Remover:** 5 chamadas intermediarias (eval scraper, delegate analysts, eval analysts, delegate validator, eval translator)
- **Substituir por:** `emit()` logs simples ("Scraper concluiu em Xs", "Delegando analysts...")
- **Manter:** Chamada 2 (relatorio final com todas metricas)

**Impacto:** ~60% reducao custo CEO, ~2-3min mais rapido

### [ ] 2.2 Auto-retry quando Validator falha

**Problema:** Se Validator retorna FAIL, pipeline morre. Precisa re-rodar manualmente.

**Solucao:**
1. Parsear output do Validator pra identificar lutas com FAIL
2. Identificar agente responsavel (main-card ou prelims)
3. Re-chamar APENAS aquele agente pra aquela luta
4. Re-validar
5. Max 1 retry automatico — se falhar de novo, pipeline continua com warning

### [ ] 2.3 Translator || Event Page em paralelo

**Problema:** Hoje roda sequencial: Translator → Event Page.

**Solucao:** `Promise.all([translator, eventPage])` — Event Page le arquivos PT (ja existem), Translator gera EN/ES/FR.

### [ ] 2.4 Fase de Hydration automatica

**Problema:** Analyses ficam em .tsx mas nao no BD. Paginas dinamicas retornam 404 ate hydration manual.

**Solucao:** Nova fase entre Event Page e Build:
```
FASE 5.5: Hydration
  → execSync('npm run hydrate -- --event [evento-slug]')
  → Garante analyses no BD
  → Se falhar: warning (nao bloqueia build)
```

### [ ] 2.5 Card output completo (nao truncado)

**Problema:** `cardOutput.substring(0, 3000)` pode cortar dados de lutas.

**Solucao:** Passar output inteiro ou pelo menos 10000 chars. Card de 15 lutas cabe em ~5000 chars.

### [ ] 2.6 Build assincrono (nao bloqueia Node.js)

**Problema:** `execSync('npx next build')` bloqueia o processo Node.js por ~3-5min.

**Solucao:** Considerar `spawn` com callback em vez de `execSync`. Ou manter sync mas com warning claro pro usuario que o server vai ficar indisponivel.

---

## CAMADA 3: Persistence

> **Onde:** `src/lib/war-room/persistence.ts` + `types.ts`
> **Objetivo:** Dados mais ricos, metricas mais precisas

### [ ] 3.1 Distinguir retry de falha real

**Problema:** `failAgentTask()` eh chamado tanto pra rate limit retry quanto pra falha real. Incrementa tasks_failed e tira XP em ambos casos.

**Solucao:**
- Nova funcao `retryAgentTask(taskId, reason)` — nao incrementa failed, nao tira XP, marca como 'retried'
- `failAgentTask()` fica so pra falhas reais
- `pipeline-runner.ts` ja sabe quando eh rate limit — usa a funcao nova

### [ ] 3.2 Agregar custo total no pipeline run

**Problema:** `custo_total_usd` e `total_tokens` existem na tabela `pipeline_execucoes` mas nunca sao calculados.

**Solucao:** Na funcao `finishPipeline()`, fazer:
```sql
UPDATE pipeline_execucoes SET
  custo_total_usd = (SELECT SUM(cost_usd) FROM war_room_tasks WHERE pipeline_id = $1),
  total_tokens = (SELECT SUM(tokens_input + tokens_output) FROM war_room_tasks WHERE pipeline_id = $1)
WHERE id = $1
```

### [ ] 3.3 Card snapshot como JSONB

**Problema:** Card scrapado nao eh persistido de forma estruturada.

**Solucao:**
- Verificar/adicionar coluna `card_snapshot JSONB` em `pipeline_execucoes`
- Pipeline-runner salva o card parseado apos scraper completar
- Historico de cards disponivel pra analytics

### [ ] 3.4 Weekly score calculado

**Problema:** Campo `weekly_score` em `war_room_agents` existe mas nunca eh calculado.

**Solucao:** Implementar calculo similar ao XP engine da AI Company:
- Success rate (0-5) * 0.4
- Quality score (0-5) * 0.35
- Efficiency score (0-5) * 0.25
- Rodar via cron semanal ou na finalizacao do pipeline

---

## CAMADA 4: Interface

> **Onde:** `src/components/admin/dashboard/` + API routes
> **Objetivo:** Observabilidade completa, acoes acionaveis

### [ ] 4.1 Custo por fase nos logs do pipeline

**Problema:** Log console mostra "Concluido em Xs (Y tokens)" mas nao mostra custo em USD.

**Solucao:** Apos cada agente completar, emitir:
```
[COST] Card Scraper: $0.12 (3.2k tokens, 42s)
```

### [ ] 4.2 Card preview formatado no human gate

**Problema:** Human gate mostra texto bruto (substring 2000 chars).

**Solucao:** Parsear card output e renderizar como tabela no frontend:
| # | Luta | Peso | Rounds | Tipo |
|---|------|------|--------|------|
| 1 | Holloway vs Oliveira | Lightweight | 5 | main_card |

### [ ] 4.3 Botao re-run quando falha

**Problema:** Quando pipeline falha, usuario precisa rodar tudo de novo.

**Solucao:** Mostrar botoes contextuais:
- Se validator falha: "Re-run Main Card" / "Re-run Prelims"
- Se translator falha: "Re-run Translator"
- Se event page falha: "Re-run Event Page"

### [ ] 4.4 Rate limit feedback visual

**Problema:** Rate limit retry aparece so no log console. Usuario nao entende o que ta acontecendo.

**Solucao:** Mostrar banner amarelo: "Rate limit detectado. Retry automatico em Xs..."

---

## Ordem de Execucao

```
CAMADA 1: Agent Definitions (COMECAMOS AQUI)
  → 1.1 CEO metricas
  → 1.2 Card Scraper output JSON
  → 1.3 Translator self-check
  → 1.4 Hydration (decisao: vai pra Camada 2)

CAMADA 2: Orchestration
  → 2.1 CEO 7→2
  → 2.2 Auto-retry validator
  → 2.3 Translator || Event Page
  → 2.4 Hydration fase
  → 2.5 Card output completo
  → 2.6 Build assincrono

CAMADA 3: Persistence
  → 3.1 Retry vs fail
  → 3.2 Custo agregado
  → 3.3 Card snapshot
  → 3.4 Weekly score

CAMADA 4: Interface
  → 4.1 Custo por fase
  → 4.2 Card preview
  → 4.3 Botao re-run
  → 4.4 Rate limit feedback
```

## Arquivos que NAO mudam

- `claude-cli.ts` — funciona, nao mexer
- `.claude/agents/fight-analyst-main-card.md` — 37K linhas, excelente
- `.claude/agents/fight-analyst-prelims.md` — bom
- `.claude/agents/card-validator.md` — funciona
- `.claude/agents/card-scraper.md` — solido (so reforcamos output JSON)
- `.claude/agents/event-page-generator.md` — funciona
- AI Company system inteiro — separado, zero mudancas
