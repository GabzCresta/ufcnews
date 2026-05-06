#!/bin/bash
cd /root/ufc-news-hub/ufc-news-hub
export DATABASE_URL="postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub"
export PATH="/usr/bin:$PATH"
npx tsx scripts/update-fighters-v2.ts >> /var/log/fighter-update.log 2>&1
