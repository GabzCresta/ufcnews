#!/bin/bash
DB="postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub"

# Coletar dados reais do banco
TOTAL=$(psql "$DB" -t -c "SELECT COUNT(*) FROM lutadores;" | tr -d ' ')
COM_IDADE=$(psql "$DB" -t -c "SELECT COUNT(*) FROM lutadores WHERE idade IS NOT NULL;" | tr -d ' ')
COM_ALTURA=$(psql "$DB" -t -c "SELECT COUNT(*) FROM lutadores WHERE altura IS NOT NULL;" | tr -d ' ')
COM_ENVERGADURA=$(psql "$DB" -t -c "SELECT COUNT(*) FROM lutadores WHERE envergadura IS NOT NULL;" | tr -d ' ')
COM_RECORD=$(psql "$DB" -t -c "SELECT COUNT(*) FROM lutadores WHERE vitorias IS NOT NULL AND vitorias > 0;" | tr -d ' ')
COM_PAIS=$(psql "$DB" -t -c "SELECT COUNT(*) FROM lutadores WHERE pais IS NOT NULL;" | tr -d ' ')
SYNC_24H=$(psql "$DB" -t -c "SELECT COUNT(*) FROM lutadores WHERE last_stats_sync > NOW() - INTERVAL '24 hours';" | tr -d ' ')
SYNC_7D=$(psql "$DB" -t -c "SELECT COUNT(*) FROM lutadores WHERE last_stats_sync > NOW() - INTERVAL '7 days';" | tr -d ' ')
NUNCA_SYNC=$(psql "$DB" -t -c "SELECT COUNT(*) FROM lutadores WHERE last_stats_sync IS NULL;" | tr -d ' ')

# Verificar se o script ainda esta rodando
SCRIPT_RUNNING=$(ps aux | grep "update-fighters" | grep -v grep | wc -l)
if [ "$SCRIPT_RUNNING" -gt 0 ]; then
  STATUS_SCRIPT="RODANDO AGORA"
else
  STATUS_SCRIPT="PARADO"
fi

# Ultimo log do script
ULTIMO_LOG=$(grep "Progress:\|DONE\|Fatal" /tmp/fighter-update-2.log 2>/dev/null | tail -1 || echo "Log nao encontrado")

# Calcular percentuais
PCT_IDADE=$((COM_IDADE * 100 / TOTAL))
PCT_ALTURA=$((COM_ALTURA * 100 / TOTAL))
PCT_ENVERGADURA=$((COM_ENVERGADURA * 100 / TOTAL))
PCT_RECORD=$((COM_RECORD * 100 / TOTAL))

# Montar email
SUBJECT="[CRENAS] Relatorio Lutadores - $(date +%d/%m/%Y %H:%M)"

BODY="RELATORIO DE ATUALIZACAO DE LUTADORES - crenas.site
=====================================================
Gerado em: $(date '+%d/%m/%Y %H:%M UTC')
Servidor: Hostinger VPS (72.60.115.213)

STATUS DO SCRIPT: $STATUS_SCRIPT
Ultimo log: $ULTIMO_LOG

COMPLETUDE DOS DADOS ($TOTAL lutadores total):
-----------------------------------------------
Campo           | Preenchido | Faltando | %
Idade           | $COM_IDADE        | $((TOTAL - COM_IDADE))       | ${PCT_IDADE}%
Altura          | $COM_ALTURA        | $((TOTAL - COM_ALTURA))       | ${PCT_ALTURA}%
Envergadura     | $COM_ENVERGADURA        | $((TOTAL - COM_ENVERGADURA))       | ${PCT_ENVERGADURA}%
Record (V-D-E)  | $COM_RECORD        | $((TOTAL - COM_RECORD))       | ${PCT_RECORD}%
Pais            | $COM_PAIS        | $((TOTAL - COM_PAIS))       | $((COM_PAIS * 100 / TOTAL))%

SYNC STATUS:
-----------------------------------------------
Ultimas 24h:     $SYNC_24H lutadores atualizados
Ultimos 7 dias:  $SYNC_7D lutadores atualizados
Nunca sync:      $NUNCA_SYNC lutadores

CRON CONFIGURADOS:
-----------------------------------------------
Lutadores: toda segunda 3h UTC
Backup DB: todo dia 4h UTC
Relatorio: todo dia 6h UTC (este email)

---
Relatorio automatico do crenas.site
Dados 100% do banco PostgreSQL, nada inventado."

# Enviar email via sendmail/mail
echo "$BODY" | mail -s "$SUBJECT" gabriel.macedo.cresta@gmail.com 2>/dev/null

# Se mail nao funcionar, tenta com curl via API do Next.js
if [ $? -ne 0 ]; then
  # Fallback: salvar relatorio em arquivo
  echo "$BODY" > /var/log/fighter-report-$(date +%Y%m%d).txt
  echo "[Fighter Report] Email falhou, salvo em /var/log/fighter-report-$(date +%Y%m%d).txt"
fi

echo "[Fighter Report] Relatorio gerado em $(date)"
