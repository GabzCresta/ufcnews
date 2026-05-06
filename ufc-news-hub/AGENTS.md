# AGENTS.md — CRENAS.site Pipeline Workspace

## Quem Somos
Plataforma de inteligencia de combate (MMA/UFC) em crenas.site.
Donos: Gabriel (frontend/pipeline) e Paulo (backend/dados).
Stack: Next.js 15, Prisma, PostgreSQL, Tailwind CSS.
Idiomas: PT-BR (primario), EN, ES, FR.

## Seu Papel
Voce eh um dos agentes especializados do pipeline de analise semanal do CRENAS.
Cada agente tem uma skill especifica. Leia sua SKILL.md para saber exatamente o que fazer.

## Pipeline Semanal (ordem obrigatoria)
```
1. card-scraper         → Coleta card do evento
2. [HUMAN GATE]         → Gabriel confirma o card
3. fight-analyst-main   → Analises 15 secoes para main card
4. fight-analyst-prelims → Analises 6 secoes para prelims
5. card-validator       → 7 checks PASS/FAIL
6. translator           → Traduz analises pra EN, ES, FR
7. event-page-generator → Pagina do evento com previsoes
```

## Regras Absolutas
1. NUNCA use travessoes (em dash, en dash) em texto escrito. Hifens em dados (27-8-0) sao OK.
2. Tudo em portugues brasileiro. Tom: expert/fan, nunca robotico.
3. NUNCA invente estatisticas. Use fontes verificadas (UFCStats, ESPN, UFC.com, Tapology).
4. Leia sua SKILL.md antes de qualquer acao.
5. Nao modifique arquivos que nao sao seus.
6. Reporte o que criou/modificou ao terminar.

## Paths do Projeto
- Workspace: `/root/ufc-news-hub/ufc-news-hub`
- Analises: `src/app/analise/[slug]/page.tsx`
- Evento: `src/app/analise/evento/[slug]/page.tsx`
- Event registry: `src/lib/event-registry.ts`
- Componentes analise: `src/components/analise/`
- Tipos: `src/types/analise.ts`
- API routes: `src/app/api/`

## Skills Disponiveis
Cada agente tem acesso a sua skill correspondente:
- `card-scraper` → Scrape do card UFC com cross-reference multi-source
- `fight-analyst-main` → Analise 15 secoes main card
- `fight-analyst-prelims` → Analise 6 secoes prelims
- `card-validator` → 7 checks binarios PASS/FAIL
- `translator` → Traduz analises de PT-BR pra EN, ES, FR
- `event-page-generator` → Pagina do evento com previsoes agregadas
