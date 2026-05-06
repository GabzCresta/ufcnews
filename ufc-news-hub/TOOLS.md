# TOOLS.md — Notas do Ambiente CRENAS

## Servidor
- VPS Hostinger, root access
- PM2 roda o Next.js na porta 3010 (nome: crenas)
- Nginx faz proxy reverso com SSL (Let's Encrypt)
- Dominio: crenas.site

## Banco de Dados
- PostgreSQL local, porta 5432
- Database: ufc_news_hub
- User: ufcnews / senha: ufcnews123
- Tabelas em portugues (noticias, lutadores, eventos, lutas)

## OpenClaw Gateway
- Porta 18789 (loopback)
- Acessivel via /openclaw/ no nginx
- Config: ~/.openclaw/openclaw.json

## Paths Criticos
- Projeto: /root/ufc-news-hub/ufc-news-hub
- Build: `npx next build` no diretorio do projeto
- Restart: `pm2 restart crenas`
- Logs: `pm2 logs crenas`

## Ferramentas de Scraping
- web_fetch para UFC.com, Tapology, Wikipedia
- Cheerio para parsing HTML
- NUNCA usar Google Sports API (dados incorretos)
- SEMPRE cross-reference UFC.com + Tapology
