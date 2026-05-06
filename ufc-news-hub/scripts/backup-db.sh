#!/bin/bash
BACKUP_DIR="/var/backups/postgresql"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
DB_URL="postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub"

# Criar backup
pg_dump "$DB_URL" --no-owner --no-acl -F c -f "$BACKUP_DIR/ufc_news_hub_$TIMESTAMP.dump"

# Manter só os ultimos 7 backups
ls -t "$BACKUP_DIR"/ufc_news_hub_*.dump | tail -n +8 | xargs -r rm

echo "[Backup] $TIMESTAMP - OK ($(du -h $BACKUP_DIR/ufc_news_hub_$TIMESTAMP.dump | cut -f1))"
