/**
 * Gera e envia relatorio de lutadores por email (HTML).
 * Dados 100% reais do banco PostgreSQL.
 *
 * Uso: npx tsx scripts/send-fighter-report.ts
 * Cron: todo dia 6h UTC
 */

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub',
  max: 3,
});

async function getCount(sql: string): Promise<number> {
  const { rows } = await pool.query(sql);
  return parseInt(rows[0]?.count || '0');
}

function progressBar(pct: number): string {
  const filled = Math.round(pct / 5);
  const empty = 20 - filled;
  const color = pct >= 90 ? '#10B981' : pct >= 70 ? '#F59E0B' : '#EF4444';
  return `
    <div style="display:flex;align-items:center;gap:8px;">
      <div style="flex:1;height:8px;background:#1a1a2e;border-radius:4px;overflow:hidden;">
        <div style="width:${pct}%;height:100%;background:${color};border-radius:4px;"></div>
      </div>
      <span style="font-size:13px;font-weight:700;color:${color};min-width:40px;text-align:right;">${pct}%</span>
    </div>`;
}

function statusIcon(pct: number): string {
  if (pct >= 90) return '&#9989;';
  if (pct >= 70) return '&#9888;&#65039;';
  return '&#10060;';
}

async function run() {
  const total = await getCount('SELECT COUNT(*) as count FROM lutadores');

  // Dados basicos
  const comApelido = await getCount("SELECT COUNT(*) as count FROM lutadores WHERE apelido IS NOT NULL AND apelido != ''");
  const comPeso = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE categoria_peso IS NOT NULL');
  const comPais = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE pais IS NOT NULL');
  const comCidade = await getCount("SELECT COUNT(*) as count FROM lutadores WHERE cidade_natal IS NOT NULL AND cidade_natal != ''");
  const comAcademia = await getCount("SELECT COUNT(*) as count FROM lutadores WHERE academia IS NOT NULL AND academia != ''");
  const comEstilo = await getCount("SELECT COUNT(*) as count FROM lutadores WHERE estilo_luta IS NOT NULL AND estilo_luta != ''");
  const comIdade = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE idade IS NOT NULL');
  const comDOB = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE data_nascimento IS NOT NULL');
  const comAltura = await getCount("SELECT COUNT(*) as count FROM lutadores WHERE altura IS NOT NULL AND altura != '0.00' AND altura != ''");
  const comEnvergadura = await getCount("SELECT COUNT(*) as count FROM lutadores WHERE envergadura IS NOT NULL AND envergadura != '0.00' AND envergadura != ''");
  const comStance = await getCount("SELECT COUNT(*) as count FROM lutadores WHERE stance IS NOT NULL AND stance != ''");
  const comFoto = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE imagem_url IS NOT NULL');
  const comFullbody = await getCount("SELECT COUNT(*) as count FROM lutadores WHERE imagem_fullbody_url IS NOT NULL AND imagem_fullbody_url != ''");
  const comSlug = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE ufc_slug IS NOT NULL');

  // Record
  const comRecord = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE vitorias IS NOT NULL AND vitorias > 0');
  const comNocautes = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE nocautes IS NOT NULL AND nocautes > 0');
  const comFinalizacoes = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE finalizacoes IS NOT NULL');
  const comDecisoes = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE decisoes IS NOT NULL');

  // Stats avancadas
  const comSLPM = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE slpm IS NOT NULL');
  const comStrAcc = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE str_acc IS NOT NULL');
  const comTdAvg = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE td_avg IS NOT NULL');
  const comSubAvg = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE sub_avg IS NOT NULL');

  // Sync
  const sync24h = await getCount("SELECT COUNT(*) as count FROM lutadores WHERE last_stats_sync > NOW() - INTERVAL '24 hours'");
  const nuncaSync = await getCount('SELECT COUNT(*) as count FROM lutadores WHERE last_stats_sync IS NULL');

  // Script status
  const { execSync } = await import('child_process');
  let scriptStatus: string;
  let scriptColor: string;
  try {
    const ps = execSync('ps aux | grep "update-fighters" | grep -v grep', { encoding: 'utf8' });
    scriptStatus = ps.trim() ? 'RODANDO' : 'PARADO';
    scriptColor = ps.trim() ? '#F59E0B' : '#10B981';
  } catch {
    scriptStatus = 'INATIVO';
    scriptColor = '#6B7280';
  }

  const pct = (v: number) => Math.round((v / total) * 100);
  const now = new Date();

  const camposBasicos = [
    { nome: 'Apelido', valor: comApelido, pct: pct(comApelido) },
    { nome: 'Categoria Peso', valor: comPeso, pct: pct(comPeso) },
    { nome: 'Pais', valor: comPais, pct: pct(comPais) },
    { nome: 'Cidade', valor: comCidade, pct: pct(comCidade) },
    { nome: 'Academia', valor: comAcademia, pct: pct(comAcademia) },
    { nome: 'Estilo de Luta', valor: comEstilo, pct: pct(comEstilo) },
    { nome: 'Idade', valor: comIdade, pct: pct(comIdade) },
    { nome: 'Data Nascimento', valor: comDOB, pct: pct(comDOB) },
    { nome: 'Altura', valor: comAltura, pct: pct(comAltura) },
    { nome: 'Envergadura', valor: comEnvergadura, pct: pct(comEnvergadura) },
    { nome: 'Stance', valor: comStance, pct: pct(comStance) },
    { nome: 'Foto Perfil', valor: comFoto, pct: pct(comFoto) },
    { nome: 'Foto Corpo', valor: comFullbody, pct: pct(comFullbody) },
    { nome: 'UFC Slug', valor: comSlug, pct: pct(comSlug) },
  ];

  const camposRecord = [
    { nome: 'Record (V-D-E)', valor: comRecord, pct: pct(comRecord) },
    { nome: 'KO/TKO', valor: comNocautes, pct: pct(comNocautes) },
    { nome: 'Finalizacoes', valor: comFinalizacoes, pct: pct(comFinalizacoes) },
    { nome: 'Decisoes', valor: comDecisoes, pct: pct(comDecisoes) },
  ];

  const camposStats = [
    { nome: 'Strikes/Min (SLpM)', valor: comSLPM, pct: pct(comSLPM) },
    { nome: 'Precisao Strikes', valor: comStrAcc, pct: pct(comStrAcc) },
    { nome: 'Takedowns/15min', valor: comTdAvg, pct: pct(comTdAvg) },
    { nome: 'Submissoes/15min', valor: comSubAvg, pct: pct(comSubAvg) },
  ];

  const campos = [...camposBasicos, ...camposRecord, ...camposStats];

  const completudeGeral = Math.round(campos.reduce((sum, c) => sum + c.pct, 0) / campos.length);

  const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:20px;">

    <!-- Header -->
    <div style="text-align:center;padding:30px 0 20px;">
      <div style="display:inline-block;background:rgba(210,10,10,0.15);border:1px solid rgba(210,10,10,0.3);border-radius:12px;padding:8px 16px;">
        <span style="color:#D20A0A;font-size:24px;font-weight:900;letter-spacing:2px;">CRENAS</span>
        <span style="color:#666;font-size:11px;">.site</span>
      </div>
      <p style="color:#666;font-size:11px;margin:8px 0 0;text-transform:uppercase;letter-spacing:1px;">Relatorio Diario de Dados</p>
    </div>

    <!-- Date -->
    <div style="text-align:center;margin-bottom:24px;">
      <span style="color:#999;font-size:12px;">${now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} - ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York' })} (Raleigh)</span>
    </div>

    <!-- Score Card -->
    <div style="background:#0d0d14;border:1px solid rgba(210,10,10,0.2);border-radius:16px;padding:24px;text-align:center;margin-bottom:16px;">
      <p style="color:#666;font-size:10px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Completude Geral</p>
      <span style="font-size:48px;font-weight:900;color:${completudeGeral >= 85 ? '#10B981' : completudeGeral >= 70 ? '#F59E0B' : '#EF4444'};">${completudeGeral}%</span>
      <p style="color:#666;font-size:12px;margin:4px 0 0;">${total.toLocaleString()} lutadores no banco</p>
    </div>

    <!-- KPIs Row -->
    <div style="display:flex;gap:8px;margin-bottom:16px;">
      <div style="flex:1;background:#0d0d14;border:1px solid #1e1e2e;border-radius:12px;padding:16px;text-align:center;">
        <p style="color:#3B82F6;font-size:24px;font-weight:800;margin:0;">${sync24h.toLocaleString()}</p>
        <p style="color:#666;font-size:9px;text-transform:uppercase;margin:4px 0 0;">Atualizados (24h)</p>
      </div>
      <div style="flex:1;background:#0d0d14;border:1px solid #1e1e2e;border-radius:12px;padding:16px;text-align:center;">
        <p style="color:${scriptColor};font-size:24px;font-weight:800;margin:0;">${scriptStatus}</p>
        <p style="color:#666;font-size:9px;text-transform:uppercase;margin:4px 0 0;">Script Update</p>
      </div>
      <div style="flex:1;background:#0d0d14;border:1px solid #1e1e2e;border-radius:12px;padding:16px;text-align:center;">
        <p style="color:#EF4444;font-size:24px;font-weight:800;margin:0;">${nuncaSync}</p>
        <p style="color:#666;font-size:9px;text-transform:uppercase;margin:4px 0 0;">Nunca Sync</p>
      </div>
    </div>

    <!-- Dados Basicos -->
    <div style="background:#0d0d14;border:1px solid #1e1e2e;border-radius:16px;overflow:hidden;margin-bottom:16px;">
      <div style="padding:16px 20px 12px;">
        <span style="color:#D20A0A;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Dados Basicos</span>
      </div>
      ${camposBasicos.map(c => `
        <div style="padding:10px 20px;border-top:1px solid #1a1a2e;">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
            <span style="color:#ccc;font-size:12px;">${statusIcon(c.pct)} ${c.nome}</span>
            <span style="color:#999;font-size:11px;">${c.valor.toLocaleString()} / ${total.toLocaleString()}</span>
          </div>
          ${progressBar(c.pct)}
        </div>
      `).join('')}
    </div>

    <!-- Record / Cartel -->
    <div style="background:#0d0d14;border:1px solid #1e1e2e;border-radius:16px;overflow:hidden;margin-bottom:16px;">
      <div style="padding:16px 20px 12px;">
        <span style="color:#3B82F6;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Record / Cartel</span>
      </div>
      ${camposRecord.map(c => `
        <div style="padding:10px 20px;border-top:1px solid #1a1a2e;">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
            <span style="color:#ccc;font-size:12px;">${statusIcon(c.pct)} ${c.nome}</span>
            <span style="color:#999;font-size:11px;">${c.valor.toLocaleString()} / ${total.toLocaleString()}</span>
          </div>
          ${progressBar(c.pct)}
        </div>
      `).join('')}
    </div>

    <!-- Stats Avancadas -->
    <div style="background:#0d0d14;border:1px solid #1e1e2e;border-radius:16px;overflow:hidden;margin-bottom:16px;">
      <div style="padding:16px 20px 12px;">
        <span style="color:#10B981;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Stats Avancadas (UFCStats.com)</span>
      </div>
      ${camposStats.map(c => `
        <div style="padding:10px 20px;border-top:1px solid #1a1a2e;">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
            <span style="color:#ccc;font-size:12px;">${statusIcon(c.pct)} ${c.nome}</span>
            <span style="color:#999;font-size:11px;">${c.valor.toLocaleString()} / ${total.toLocaleString()}</span>
          </div>
          ${progressBar(c.pct)}
        </div>
      `).join('')}
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding:20px 0;border-top:1px solid #1e1e2e;">
      <p style="color:#444;font-size:10px;margin:0;">
        Dados 100% reais do PostgreSQL | Nada inventado
      </p>
      <p style="color:#333;font-size:9px;margin:6px 0 0;">
        crenas.site/dashboard/analytics | crenas.site/pgadmin4
      </p>
    </div>

  </div>
</body>
</html>`;

  const textVersion = `CRENAS - Relatorio Lutadores ${now.toLocaleDateString('pt-BR')}
Completude geral: ${completudeGeral}% | ${total} lutadores
Idade: ${pct(comIdade)}% | Altura: ${pct(comAltura)}% | Envergadura: ${pct(comEnvergadura)}%
Record: ${pct(comRecord)}% | Pais: ${pct(comPais)}% | Foto: ${pct(comFoto)}%
Sync 24h: ${sync24h} | Script: ${scriptStatus} | Nunca sync: ${nuncaSync}`;

  console.log(textVersion);

  // Enviar
  try {
    const res = await fetch('http://localhost:3010/api/admin/send-report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'gabriel.macedo.cresta@gmail.com',
        subject: `[CRENAS] Lutadores ${completudeGeral}% completo - ${now.toLocaleDateString('pt-BR')}`,
        text: textVersion,
        html,
      }),
    });

    if (res.ok) {
      console.log('[Report] Email HTML enviado com sucesso!');
    } else {
      const err = await res.json();
      console.log('[Report] Erro:', err);
    }
  } catch {
    console.log('[Report] Servidor nao respondeu.');
  }

  const fs = await import('fs');
  fs.writeFileSync(`/var/log/fighter-report-${now.toISOString().split('T')[0]}.txt`, textVersion);

  await pool.end();
}

run().catch(err => {
  console.error('[Report] Erro:', err);
  process.exit(1);
});
