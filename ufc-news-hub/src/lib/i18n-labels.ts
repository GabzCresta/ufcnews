/**
 * Centralized i18n labels for analysis components.
 * Component-level UI strings that need translation.
 */

export type Lang = 'pt' | 'en';

const labels = {
  pt: {
    // Section Headers
    narrativa_title: 'O Contexto Que Ninguem',
    narrativa_accent: 'Te Conta',
    momento_title: 'Momento',
    momento_accent: 'Atual',
    nivel_title: 'Nivel de',
    nivel_accent: 'Competicao',
    comparacao_title: 'Comparacao',
    comparacao_accent: 'Estatistica',
    habilidades_title: 'Perfil de',
    habilidades_accent: 'Habilidades',
    distribuicao_title: 'Distribuicao de',
    distribuicao_accent: 'Vitorias e Derrotas',
    distribuicao_subheading_wins: 'Vitorias',
    distribuicao_subheading_losses: 'Derrotas',
    distribuicao_derrotas_title: 'Distribuicao de',
    distribuicao_derrotas_accent: 'Derrotas',
    danger_title: 'Danger',
    danger_accent: 'Zones',
    intangiveis_title: 'Fatores Invisiveis &',
    intangiveis_accent: 'Red Flags',
    caminhos_title: 'Caminhos Para',
    caminhos_accent: 'Vitoria',
    previsao_title: 'Previsao',
    previsao_accent: 'Final',
    observar_title: 'O Que',
    observar_accent: 'Observar',
    creator_title: 'Creator',
    creator_accent: 'Kit',
    radar_title: 'Radar do',
    radar_accent: 'Apostador',
    historico_title: 'Historico de',
    historico_accent: 'Lutas',

    // Quality labels
    quality_1: 'Ruim',
    quality_2: 'Medio',
    quality_3: 'Bom',
    quality_4: 'Muito Bom',
    quality_5: 'Excelente',

    // Momentum labels
    momentum_ascending: 'Em Alta',
    momentum_descending: 'Em Baixa',
    momentum_stable: 'Estavel',
    momentum_resilient: 'Resiliente',

    // UI Labels
    ultimas_lutas: 'Ultimas',
    lutas: 'lutas',
    ver_historico: 'Ver historico completo',
    historico_completo: 'Historico Completo',
    qualidade: 'Qualidade',
    dimensao: 'Dimensao',
    lutador_fallback_1: 'Lutador 1',
    lutador_fallback_2: 'Lutador 2',
    proxima_luta: 'Proxima Luta Provavel',
    dois_destinos: 'Dois Destinos',
    uma_luta: 'Uma Luta',
    rounds: 'Rounds',
    titulo_em_jogo: 'TITULO EM JOGO',
    analise_preliminar: 'Analise Preliminar',
    analise_estatistica: 'Analise estatistica e tatica.',
    dados_baseados: 'Dados baseados em ufcstats.com e fontes publicas.',

    // Event page
    analise_completa_card: 'Analise Completa do Card',
    main_card: 'Main Card',
    preliminar: 'Preliminar',
    lutas_analisadas: 'lutas analisadas',
    por: 'por',
    preview_card: 'Preview Completo do Card',
    luta_analisada: 'Luta Analisada',
    lutas_analisadas_plural: 'Lutas Analisadas',

    // Stats labels
    sig_strikes_min: 'Sig. Strikes por Minuto',
    precisao_strikes: 'Precisao de Strikes (%)',
    strikes_absorvidos: 'Strikes Absorvidos/Min',
    defesa_strikes: 'Defesa de Strikes (%)',
    takedowns_15min: 'Takedowns por 15 Min',
    precisao_takedown: 'Precisao de Takedown (%)',
    defesa_takedown: 'Defesa de Takedown (%)',
    submissoes_15min: 'Submissoes por 15 Min',

    // Tale of tape labels
    idade: 'Idade',
    altura: 'Altura',
    envergadura: 'Envergadura',
    stance: 'Stance',
    academia: 'Academia',
    estreia_ufc: 'Estreia UFC',
    anos: 'anos',

    // Nivel competicao
    media_oponentes: 'Media oponentes',
    aproveitamento: 'Aproveitamento',
    contra_top5: 'Contra top 5',

    // Oponente comum
    spotlight: 'Spotlight:',

    // CreatorKit tabs
    tab_instagram: 'Instagram Cards',
    tab_twitter: 'Twitter Thread',
    tab_video: 'Video Script',
    tab_tiktok: 'TikTok/Reels',
    video_duration: '60 segundos',
    corpo: 'Corpo',
    headlines_prontas: 'Headlines Prontas',
    nao_disponivel_tiktok: 'TikTok scripts nao disponiveis para esta analise.',
    nao_disponivel_headlines: 'Headlines nao disponiveis para esta analise.',

    // Previsao Final
    confianca: 'Confianca',
    x_factor: 'X-Factor',
    upset_alert: 'Upset Alert',
    value_picks: 'Value Picks',
    moneyline: 'Moneyline',
    metodo: 'Metodo',
    over_under: 'Over/Under',
    melhor_valor: 'Melhor Valor',

    // Verdict block (CONTRACT v2)
    veredito: 'Veredito',
    vencedor: 'Vencedor',
    vencedor_previsto: 'Vencedor Previsto',
    empate: 'empate',
    apostas: 'Apostas',
    melhor_aposta: 'Melhor Aposta',
    stats_que_importam: 'Stats Que Importam',
    armadilha: 'Armadilha',

    // Radar apostador
    odds_fonte: 'Fonte:',
    edge_forte: 'forte',
    edge_moderado: 'moderado',
    edge_leve: 'leve',
    confianca_alta: 'alta',
    confianca_media: 'media',
    confianca_baixa: 'baixa',

    // Distribuicao vitorias
    ko_tko: 'KO/TKO',
    submissao: 'Submissao',
    decisao: 'Decisao',

    // Caminhos vitoria
    probabilidade_total: 'Probabilidade Total',

    // Striking distribution
    cabeca: 'Cabeca',
    corpo_strike: 'Corpo',
    perna: 'Perna',
    distancia: 'Distancia',
    clinch: 'Clinch',
    ground: 'Ground',

    // Navigation
    voltar_evento: 'Voltar ao Evento',
    ver_analise: 'Ver Analise',
  },
  en: {
    // Section Headers
    narrativa_title: 'The Context Nobody',
    narrativa_accent: 'Tells You',
    momento_title: 'Current',
    momento_accent: 'Form',
    nivel_title: 'Level of',
    nivel_accent: 'Competition',
    comparacao_title: 'Statistical',
    comparacao_accent: 'Comparison',
    habilidades_title: 'Skills',
    habilidades_accent: 'Profile',
    distribuicao_title: 'Win & Loss',
    distribuicao_accent: 'Distribution',
    distribuicao_subheading_wins: 'Wins',
    distribuicao_subheading_losses: 'Losses',
    distribuicao_derrotas_title: 'Loss',
    distribuicao_derrotas_accent: 'Distribution',
    danger_title: 'Danger',
    danger_accent: 'Zones',
    intangiveis_title: 'Invisible Factors &',
    intangiveis_accent: 'Red Flags',
    caminhos_title: 'Paths to',
    caminhos_accent: 'Victory',
    previsao_title: 'Final',
    previsao_accent: 'Prediction',
    observar_title: 'What to',
    observar_accent: 'Watch For',
    creator_title: 'Creator',
    creator_accent: 'Kit',
    radar_title: 'Betting',
    radar_accent: 'Radar',
    historico_title: 'Fight',
    historico_accent: 'History',

    // Quality labels
    quality_1: 'Poor',
    quality_2: 'Average',
    quality_3: 'Good',
    quality_4: 'Very Good',
    quality_5: 'Excellent',

    // Momentum labels
    momentum_ascending: 'On Fire',
    momentum_descending: 'Declining',
    momentum_stable: 'Steady',
    momentum_resilient: 'Resilient',

    // UI Labels
    ultimas_lutas: 'Last',
    lutas: 'fights',
    ver_historico: 'View full history',
    historico_completo: 'Full History',
    qualidade: 'Quality',
    dimensao: 'Dimension',
    lutador_fallback_1: 'Fighter 1',
    lutador_fallback_2: 'Fighter 2',
    proxima_luta: 'Likely Next Fight',
    dois_destinos: 'Two Paths',
    uma_luta: 'One Fight',
    rounds: 'Rounds',
    titulo_em_jogo: 'TITLE ON THE LINE',
    analise_preliminar: 'Preliminary Analysis',
    analise_estatistica: 'Statistical and tactical analysis.',
    dados_baseados: 'Data sourced from ufcstats.com and public sources.',

    // Event page
    analise_completa_card: 'Full Card Analysis',
    main_card: 'Main Card',
    preliminar: 'Prelims',
    lutas_analisadas: 'fights analyzed',
    por: 'by',
    preview_card: 'Full Card Preview',
    luta_analisada: 'Fight Analyzed',
    lutas_analisadas_plural: 'Fights Analyzed',

    // Stats labels
    sig_strikes_min: 'Sig. Strikes Per Minute',
    precisao_strikes: 'Striking Accuracy (%)',
    strikes_absorvidos: 'Strikes Absorbed/Min',
    defesa_strikes: 'Strike Defense (%)',
    takedowns_15min: 'Takedowns Per 15 Min',
    precisao_takedown: 'Takedown Accuracy (%)',
    defesa_takedown: 'Takedown Defense (%)',
    submissoes_15min: 'Submissions Per 15 Min',

    // Tale of tape labels
    idade: 'Age',
    altura: 'Height',
    envergadura: 'Reach',
    stance: 'Stance',
    academia: 'Gym',
    estreia_ufc: 'UFC Debut',
    anos: 'years old',

    // Nivel competicao
    media_oponentes: 'Avg. opponent quality',
    aproveitamento: 'Win rate',
    contra_top5: 'vs Top 5',

    // Oponente comum
    spotlight: 'Spotlight:',

    // CreatorKit tabs
    tab_instagram: 'Instagram Cards',
    tab_twitter: 'Twitter Thread',
    tab_video: 'Video Script',
    tab_tiktok: 'TikTok/Reels',
    video_duration: '60 seconds',
    corpo: 'Body',
    headlines_prontas: 'Ready-Made Headlines',
    nao_disponivel_tiktok: 'TikTok scripts not available for this analysis.',
    nao_disponivel_headlines: 'Headlines not available for this analysis.',

    // Previsao Final
    confianca: 'Confidence',
    x_factor: 'X-Factor',
    upset_alert: 'Upset Alert',
    value_picks: 'Value Picks',
    moneyline: 'Moneyline',
    metodo: 'Method',
    over_under: 'Over/Under',
    melhor_valor: 'Best Value',

    // Verdict block (CONTRACT v2)
    veredito: 'Verdict',
    vencedor: 'Winner',
    vencedor_previsto: 'Predicted Winner',
    empate: 'draw',
    apostas: 'Bets',
    melhor_aposta: 'Best Bet',
    stats_que_importam: 'Stats That Matter',
    armadilha: 'The Trap',

    // Radar apostador
    odds_fonte: 'Source:',
    edge_forte: 'strong',
    edge_moderado: 'moderate',
    edge_leve: 'slight',
    confianca_alta: 'high',
    confianca_media: 'medium',
    confianca_baixa: 'low',

    // Distribuicao vitorias
    ko_tko: 'KO/TKO',
    submissao: 'Submission',
    decisao: 'Decision',

    // Caminhos vitoria
    probabilidade_total: 'Total Probability',

    // Striking distribution
    cabeca: 'Head',
    corpo_strike: 'Body',
    perna: 'Leg',
    distancia: 'Distance',
    clinch: 'Clinch',
    ground: 'Ground',

    // Navigation
    voltar_evento: 'Back to Event',
    ver_analise: 'View Analysis',
  },
} as const;


export type Labels = typeof labels['pt'];

export function getLabels(lang: Lang = 'pt'): Labels {
  return (labels[lang] ?? labels.pt) as Labels;
}

export function getQualityLabel(score: number, lang: Lang = 'pt'): string {
  const l = labels[lang];
  const map: Record<number, string> = {
    1: l.quality_1,
    2: l.quality_2,
    3: l.quality_3,
    4: l.quality_4,
    5: l.quality_5,
  };
  return map[score] || '';
}
