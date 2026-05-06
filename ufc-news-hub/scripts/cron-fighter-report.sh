#!/bin/bash
cd /root/ufc-news-hub/ufc-news-hub
export DATABASE_URL="postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub"
export RESEND_API_KEY="re_RkAQFbMm_7Mq7B3GYdQXypqXF9NRYgUer"
npx tsx scripts/send-fighter-report.ts >> /var/log/fighter-report.log 2>&1
