import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { query, queryOne } from '@/lib/db';
import type {
  PostCardData,
  PostCardDataInput,
  PostCardCreatorAngle,
  PostCardDivisional,
  PostCardKeyPoint,
  PostCardLesson,
  PostCardPerformance,
  PostCardStatus,
} from '@/types/post-card';

interface PostCardRow {
  id: string;
  evento_id: string | null;
  evento_nome: string;
  performance: PostCardPerformance;
  key_points: PostCardKeyPoint[];
  divisional: PostCardDivisional[];
  creator_angles: PostCardCreatorAngle[];
  lessons: PostCardLesson[];
  status: PostCardStatus;
  created_at: string;
  updated_at: string;
}

interface AnaliseRow {
  slug: string;
  titulo: string;
  predicted_winner_name: string | null;
  predicted_method: string | null;
  confidence_score: number | null;
  actual_winner_name: string | null;
  prediction_correct: boolean | null;
  card_position: number;
  fighter1_nome: string | null;
  fighter1_imagem: string | null;
  fighter2_nome: string | null;
  fighter2_imagem: string | null;
  categoria_peso: string | null;
}

interface EventoSummaryRow {
  evento_nome: string;
  evento_id: string | null;
  evento_data: string | null;
  evento_local: string | null;
  poster_url: string | null;
}

interface MainEventRow {
  fighter1_nome: string | null;
  fighter1_imagem: string | null;
  fighter1_pais: string | null;
  fighter2_nome: string | null;
  fighter2_imagem: string | null;
  fighter2_pais: string | null;
  vencedor_nome: string | null;
  metodo: string | null;
  round_final: number | null;
  tempo_final: string | null;
  categoria_peso: string | null;
}

const EMPTY_PERFORMANCE: PostCardPerformance = {
  resumo: '',
  acertos: 0,
  total_avaliado: 0,
  comparativo: '',
  observacoes: '',
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString);
}

function parsePerformance(input: unknown): PostCardPerformance {
  if (!isObject(input)) return { ...EMPTY_PERFORMANCE };
  return {
    resumo: isString(input.resumo) ? input.resumo : '',
    acertos: isNumber(input.acertos) ? input.acertos : 0,
    total_avaliado: isNumber(input.total_avaliado) ? input.total_avaliado : 0,
    comparativo: isString(input.comparativo) ? input.comparativo : '',
    observacoes: isString(input.observacoes) ? input.observacoes : '',
  };
}

function parseKeyPoints(input: unknown): PostCardKeyPoint[] {
  if (!Array.isArray(input)) return [];
  return input.flatMap((item) => {
    if (!isObject(item)) return [];
    if (!isString(item.titulo) || !isString(item.luta) || !isString(item.descricao)) return [];
    const tipo = isString(item.tipo) ? item.tipo : 'narrativa';
    const allowed = ['finish', 'upset', 'declinio', 'breakout', 'narrativa'] as const;
    const safeTipo = (allowed as readonly string[]).includes(tipo)
      ? (tipo as PostCardKeyPoint['tipo'])
      : 'narrativa';
    return [{ titulo: item.titulo, luta: item.luta, tipo: safeTipo, descricao: item.descricao }];
  });
}

function parseDivisional(input: unknown): PostCardDivisional[] {
  if (!Array.isArray(input)) return [];
  return input.flatMap((item) => {
    if (!isObject(item)) return [];
    if (!isString(item.divisao) || !isString(item.titulo)) return [];
    const allowed = ['sismo', 'relevante', 'pontual'] as const;
    const sevRaw = isString(item.severidade) ? item.severidade : 'pontual';
    const severidade = (allowed as readonly string[]).includes(sevRaw)
      ? (sevRaw as PostCardDivisional['severidade'])
      : 'pontual';
    const impacto = isStringArray(item.impacto) ? item.impacto : [];
    return [{ divisao: item.divisao, severidade, titulo: item.titulo, impacto }];
  });
}

function parseCreatorAngles(input: unknown): PostCardCreatorAngle[] {
  if (!Array.isArray(input)) return [];
  return input.flatMap((item) => {
    if (!isObject(item)) return [];
    if (!isString(item.titulo) || !isString(item.hook) || !isString(item.detalhes)) return [];
    const allowed = ['narrativa', 'data', 'apostador', 'tragic-arc', 'prospect-watch'] as const;
    const nichoRaw = isString(item.nicho) ? item.nicho : 'narrativa';
    const nicho = (allowed as readonly string[]).includes(nichoRaw)
      ? (nichoRaw as PostCardCreatorAngle['nicho'])
      : 'narrativa';
    const audiencia = isString(item.audiencia) ? item.audiencia : '';
    return [{ titulo: item.titulo, nicho, audiencia, hook: item.hook, detalhes: item.detalhes }];
  });
}

function parseLessons(input: unknown): PostCardLesson[] {
  if (!Array.isArray(input)) return [];
  return input.flatMap((item) => {
    if (!isObject(item)) return [];
    if (!isString(item.o_que_escapou) || !isString(item.por_que) || !isString(item.correcao)) return [];
    return [{ o_que_escapou: item.o_que_escapou, por_que: item.por_que, correcao: item.correcao }];
  });
}

function parseStatus(input: unknown): PostCardStatus {
  return input === 'publicado' ? 'publicado' : 'rascunho';
}

function parseInput(body: unknown): PostCardDataInput {
  const obj = isObject(body) ? body : {};
  return {
    performance: parsePerformance(obj.performance),
    key_points: parseKeyPoints(obj.key_points),
    divisional: parseDivisional(obj.divisional),
    creator_angles: parseCreatorAngles(obj.creator_angles),
    lessons: parseLessons(obj.lessons),
    status: parseStatus(obj.status),
  };
}

async function findEventoNome(slug: string): Promise<string | null> {
  const decoded = decodeURIComponent(slug);
  // exact match first
  const exact = await queryOne<{ evento_nome: string }>(
    `SELECT evento_nome FROM post_card_analyses WHERE evento_nome = $1`,
    [decoded]
  );
  if (exact) return exact.evento_nome;

  const fromSlug = await queryOne<{ evento_nome: string }>(
    `SELECT DISTINCT evento_nome FROM analises
     WHERE evento_nome IS NOT NULL
       AND REGEXP_REPLACE(LOWER(evento_nome), '[^a-z0-9]+', '-', 'g') = $1
     LIMIT 1`,
    [decoded]
  );
  return fromSlug?.evento_nome ?? null;
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const { slug } = await params;
  const eventoNome = await findEventoNome(slug);
  if (!eventoNome) {
    return NextResponse.json({ error: 'Evento nao encontrado' }, { status: 404 });
  }

  const summary = await queryOne<EventoSummaryRow>(
    `SELECT a.evento_nome,
            MAX(a.evento_id::text) AS evento_id,
            MAX(a.evento_data)::text AS evento_data,
            MAX(a.evento_local) AS evento_local,
            MAX(e.poster_url) AS poster_url
     FROM analises a
     LEFT JOIN eventos e ON e.id = a.evento_id
     WHERE a.evento_nome = $1
     GROUP BY a.evento_nome`,
    [eventoNome]
  );

  const mainEvent = await queryOne<MainEventRow>(
    `SELECT lu1.nome AS fighter1_nome, lu1.imagem_url AS fighter1_imagem, lu1.pais AS fighter1_pais,
            lu2.nome AS fighter2_nome, lu2.imagem_url AS fighter2_imagem, lu2.pais AS fighter2_pais,
            lu_v.nome AS vencedor_nome,
            l.metodo::text AS metodo, l.round_final, l.tempo_final, l.categoria_peso
     FROM lutas l
     LEFT JOIN lutadores lu1 ON l.lutador1_id = lu1.id
     LEFT JOIN lutadores lu2 ON l.lutador2_id = lu2.id
     LEFT JOIN lutadores lu_v ON l.vencedor_id = lu_v.id
     LEFT JOIN eventos e ON l.evento_id = e.id
     WHERE l.tipo = 'main_event' AND e.nome = $1
     LIMIT 1`,
    [eventoNome]
  );

  const analises = await query<AnaliseRow>(
    `SELECT a.slug, a.titulo, a.predicted_winner_name, a.predicted_method, a.confidence_score,
            a.actual_winner_name, a.prediction_correct, a.card_position,
            lu1.nome AS fighter1_nome, lu1.imagem_url AS fighter1_imagem,
            lu2.nome AS fighter2_nome, lu2.imagem_url AS fighter2_imagem,
            a.categoria_peso
     FROM analises a
     LEFT JOIN lutadores lu1 ON a.lutador1_id = lu1.id
     LEFT JOIN lutadores lu2 ON a.lutador2_id = lu2.id
     WHERE a.evento_nome = $1
     ORDER BY a.card_position ASC NULLS LAST, a.slug ASC`,
    [eventoNome]
  );

  const acertos = analises.filter((a) => a.prediction_correct === true).length;
  const avaliadas = analises.filter((a) => a.prediction_correct !== null).length;
  const taxa = avaliadas > 0 ? Math.round((acertos / avaliadas) * 100) : 0;

  const existing = await queryOne<PostCardRow>(
    `SELECT id, evento_id::text, evento_nome, performance, key_points, divisional,
            creator_angles, lessons, status,
            created_at::text AS created_at, updated_at::text AS updated_at
     FROM post_card_analyses WHERE evento_nome = $1`,
    [eventoNome]
  );

  const post_card: PostCardData | null = existing
    ? {
        id: existing.id,
        evento_id: existing.evento_id,
        evento_nome: existing.evento_nome,
        performance: parsePerformance(existing.performance),
        key_points: parseKeyPoints(existing.key_points),
        divisional: parseDivisional(existing.divisional),
        creator_angles: parseCreatorAngles(existing.creator_angles),
        lessons: parseLessons(existing.lessons),
        status: parseStatus(existing.status),
        created_at: existing.created_at,
        updated_at: existing.updated_at,
      }
    : null;

  return NextResponse.json({
    evento_nome: eventoNome,
    evento_data: summary?.evento_data ?? null,
    evento_local: summary?.evento_local ?? null,
    evento_id: summary?.evento_id ?? null,
    poster_url: summary?.poster_url ?? null,
    main_event: mainEvent,
    analises,
    summary: { acertos, avaliadas, total: analises.length, taxa },
    post_card,
  });
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const { slug } = await params;
  const eventoNome = await findEventoNome(slug);
  if (!eventoNome) {
    return NextResponse.json({ error: 'Evento nao encontrado' }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'JSON invalido' }, { status: 400 });
  }

  const data = parseInput(body);

  const eventoId = await queryOne<{ evento_id: string | null }>(
    `SELECT MAX(evento_id::text) AS evento_id FROM analises WHERE evento_nome = $1`,
    [eventoNome]
  );

  const upserted = await queryOne<PostCardRow>(
    `INSERT INTO post_card_analyses
       (evento_id, evento_nome, performance, key_points, divisional, creator_angles, lessons, status)
     VALUES ($1::uuid, $2, $3::jsonb, $4::jsonb, $5::jsonb, $6::jsonb, $7::jsonb, $8)
     ON CONFLICT (evento_nome) DO UPDATE SET
       evento_id      = COALESCE(EXCLUDED.evento_id, post_card_analyses.evento_id),
       performance    = EXCLUDED.performance,
       key_points     = EXCLUDED.key_points,
       divisional     = EXCLUDED.divisional,
       creator_angles = EXCLUDED.creator_angles,
       lessons        = EXCLUDED.lessons,
       status         = EXCLUDED.status
     RETURNING id, evento_id::text, evento_nome, performance, key_points, divisional,
               creator_angles, lessons, status,
               created_at::text AS created_at, updated_at::text AS updated_at`,
    [
      eventoId?.evento_id ?? null,
      eventoNome,
      JSON.stringify(data.performance),
      JSON.stringify(data.key_points),
      JSON.stringify(data.divisional),
      JSON.stringify(data.creator_angles),
      JSON.stringify(data.lessons),
      data.status,
    ]
  );

  if (!upserted) {
    return NextResponse.json({ error: 'Erro ao salvar' }, { status: 500 });
  }

  return NextResponse.json({
    post_card: {
      id: upserted.id,
      evento_id: upserted.evento_id,
      evento_nome: upserted.evento_nome,
      performance: parsePerformance(upserted.performance),
      key_points: parseKeyPoints(upserted.key_points),
      divisional: parseDivisional(upserted.divisional),
      creator_angles: parseCreatorAngles(upserted.creator_angles),
      lessons: parseLessons(upserted.lessons),
      status: parseStatus(upserted.status),
      created_at: upserted.created_at,
      updated_at: upserted.updated_at,
    },
  });
}
