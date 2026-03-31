#!/bin/bash
# Roda o update V2 completo e depois envia relatorio por email
# Uso: bash scripts/run-update-and-report.sh [email]

cd /root/ufc-news-hub/ufc-news-hub
export DATABASE_URL="postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub"
export PATH="/usr/bin:/usr/local/bin:$PATH"

EMAIL="${1:-paulocesarjnasr@gmail.com}"
LOG="/var/log/fighter-update-$(date +%Y%m%d-%H%M).log"

echo "[$(date)] Starting fighter update V2..." | tee "$LOG"

# Snapshot ANTES
BEFORE_DOB=$(PGPASSWORD=crenas_ufc_2026 psql -U crenas -h localhost -d ufc_news_hub -t -c "SELECT COUNT(*) FROM lutadores WHERE data_nascimento IS NOT NULL" | tr -d ' ')
BEFORE_APELIDO=$(PGPASSWORD=crenas_ufc_2026 psql -U crenas -h localhost -d ufc_news_hub -t -c "SELECT COUNT(*) FROM lutadores WHERE apelido IS NOT NULL AND apelido != ''" | tr -d ' ')
BEFORE_PAIS=$(PGPASSWORD=crenas_ufc_2026 psql -U crenas -h localhost -d ufc_news_hub -t -c "SELECT COUNT(*) FROM lutadores WHERE pais IS NOT NULL" | tr -d ' ')
BEFORE_ACADEMIA=$(PGPASSWORD=crenas_ufc_2026 psql -U crenas -h localhost -d ufc_news_hub -t -c "SELECT COUNT(*) FROM lutadores WHERE academia IS NOT NULL AND academia != ''" | tr -d ' ')

echo "[$(date)] Before: DOB=$BEFORE_DOB, Apelido=$BEFORE_APELIDO, Pais=$BEFORE_PAIS, Academia=$BEFORE_ACADEMIA" | tee -a "$LOG"

# Rodar o script
npx tsx scripts/update-fighters-v2.ts 2>&1 | tee -a "$LOG"
EXIT_CODE=${PIPESTATUS[0]}

echo "[$(date)] Script finished with exit code $EXIT_CODE" | tee -a "$LOG"

# Snapshot DEPOIS
AFTER_DOB=$(PGPASSWORD=crenas_ufc_2026 psql -U crenas -h localhost -d ufc_news_hub -t -c "SELECT COUNT(*) FROM lutadores WHERE data_nascimento IS NOT NULL" | tr -d ' ')
AFTER_APELIDO=$(PGPASSWORD=crenas_ufc_2026 psql -U crenas -h localhost -d ufc_news_hub -t -c "SELECT COUNT(*) FROM lutadores WHERE apelido IS NOT NULL AND apelido != ''" | tr -d ' ')
AFTER_PAIS=$(PGPASSWORD=crenas_ufc_2026 psql -U crenas -h localhost -d ufc_news_hub -t -c "SELECT COUNT(*) FROM lutadores WHERE pais IS NOT NULL" | tr -d ' ')
AFTER_ACADEMIA=$(PGPASSWORD=crenas_ufc_2026 psql -U crenas -h localhost -d ufc_news_hub -t -c "SELECT COUNT(*) FROM lutadores WHERE academia IS NOT NULL AND academia != ''" | tr -d ' ')
TOTAL=$(PGPASSWORD=crenas_ufc_2026 psql -U crenas -h localhost -d ufc_news_hub -t -c "SELECT COUNT(*) FROM lutadores" | tr -d ' ')

DIFF_DOB=$((AFTER_DOB - BEFORE_DOB))
DIFF_APELIDO=$((AFTER_APELIDO - BEFORE_APELIDO))
DIFF_PAIS=$((AFTER_PAIS - BEFORE_PAIS))
DIFF_ACADEMIA=$((AFTER_ACADEMIA - BEFORE_ACADEMIA))

echo "[$(date)] After: DOB=$AFTER_DOB (+$DIFF_DOB), Apelido=$AFTER_APELIDO (+$DIFF_APELIDO), Pais=$AFTER_PAIS (+$DIFF_PAIS), Academia=$AFTER_ACADEMIA (+$DIFF_ACADEMIA)" | tee -a "$LOG"

# Enviar relatorio por email via API do Next.js
# Pegar as ultimas linhas do failure report do log
FAILURE_REPORT=$(grep -A20 "FAILURE REPORT" "$LOG" | head -20)

# Enviar email via send-fighter-report.ts (que ja gera o HTML bonito)
# Mas primeiro mandar um email rapido com o diff
curl -s -X POST http://localhost:3010/api/admin/send-report \
  -H "Content-Type: application/json" \
  -d "$(cat <<ENDJSON
{
  "to": "$EMAIL",
  "subject": "[CRENAS] Update V2 concluido - DOB +$DIFF_DOB, Apelido +$DIFF_APELIDO",
  "text": "Fighter Update V2 finalizado.\n\nRESULTADO:\n  DOB: $BEFORE_DOB -> $AFTER_DOB (+$DIFF_DOB)\n  Apelido: $BEFORE_APELIDO -> $AFTER_APELIDO (+$DIFF_APELIDO)\n  Pais: $BEFORE_PAIS -> $AFTER_PAIS (+$DIFF_PAIS)\n  Academia: $BEFORE_ACADEMIA -> $AFTER_ACADEMIA (+$DIFF_ACADEMIA)\n  Total: $TOTAL lutadores\n\nFAILURE REPORT:\n$FAILURE_REPORT\n\nLog completo: $LOG",
  "html": "<div style='font-family:monospace;background:#0a0a0f;color:#ccc;padding:24px;border-radius:12px;'><h2 style='color:#D20A0A;margin:0 0 16px;'>Fighter Update V2 Concluido</h2><table style='width:100%;border-collapse:collapse;'><tr style='border-bottom:1px solid #222;'><th style='text-align:left;padding:8px;color:#666;'>Campo</th><th style='text-align:right;padding:8px;color:#666;'>Antes</th><th style='text-align:right;padding:8px;color:#666;'>Depois</th><th style='text-align:right;padding:8px;color:#666;'>Diff</th></tr><tr style='border-bottom:1px solid #222;'><td style='padding:8px;'>DOB</td><td style='text-align:right;padding:8px;'>$BEFORE_DOB</td><td style='text-align:right;padding:8px;'>$AFTER_DOB</td><td style='text-align:right;padding:8px;color:#10B981;font-weight:bold;'>+$DIFF_DOB</td></tr><tr style='border-bottom:1px solid #222;'><td style='padding:8px;'>Apelido</td><td style='text-align:right;padding:8px;'>$BEFORE_APELIDO</td><td style='text-align:right;padding:8px;'>$AFTER_APELIDO</td><td style='text-align:right;padding:8px;color:#10B981;font-weight:bold;'>+$DIFF_APELIDO</td></tr><tr style='border-bottom:1px solid #222;'><td style='padding:8px;'>Pais</td><td style='text-align:right;padding:8px;'>$BEFORE_PAIS</td><td style='text-align:right;padding:8px;'>$AFTER_PAIS</td><td style='text-align:right;padding:8px;color:#10B981;font-weight:bold;'>+$DIFF_PAIS</td></tr><tr><td style='padding:8px;'>Academia</td><td style='text-align:right;padding:8px;'>$BEFORE_ACADEMIA</td><td style='text-align:right;padding:8px;'>$AFTER_ACADEMIA</td><td style='text-align:right;padding:8px;color:#10B981;font-weight:bold;'>+$DIFF_ACADEMIA</td></tr></table><p style='color:#666;font-size:12px;margin:16px 0 0;'>Total: $TOTAL lutadores | Log: $LOG</p><pre style='background:#111;padding:12px;border-radius:8px;font-size:11px;color:#999;margin-top:12px;white-space:pre-wrap;'>$FAILURE_REPORT</pre></div>"
}
ENDJSON
)" 2>&1 | tee -a "$LOG"

echo "" | tee -a "$LOG"
echo "[$(date)] Email enviado para $EMAIL" | tee -a "$LOG"

# Tambem rodar o relatorio completo pro Gabriel
npx tsx scripts/send-fighter-report.ts 2>&1 | tee -a "$LOG"

echo "[$(date)] Done!" | tee -a "$LOG"
