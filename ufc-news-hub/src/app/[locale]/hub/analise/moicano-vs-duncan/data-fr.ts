import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'moicano-vs-duncan',
  evento_id: null,
  slug: 'moicano-vs-duncan',
  titulo: 'Moicano vs Duncan : Maintenant ou Jamais',
  subtitulo: 'Le veteran de 36 ans sur une serie de 2 defaites face a la star ecossaise en pleine ascension. Partenaires d\'entrainement. Meme salle. Destins opposes.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,80m', envergadura: '183cm', idade: 36, academia: 'American Top Team' },
      fighter2: { altura: '1,78m', envergadura: '180cm', idade: 32, academia: 'American Top Team' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Soumission R2-R3',
    confidence: 'MOYENNE',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Volume de Frappes', edge: 'fighter2', impact: 7, description: 'Duncan connecte 5.02 frappes significatives par minute contre 4.17 pour Moicano. L\'Ecossais impose un rythme plus eleve.' },
      { factor: 'Experience en 5 Rounds', edge: 'fighter1', impact: 8, description: 'Moicano a deja combattu en 5 rounds plusieurs fois. Duncan jamais. Les championship rounds sont le territoire du veteran.' },
      { factor: 'Menace de Takedown', edge: 'fighter2', impact: 7, description: 'Duncan tente en moyenne 3.27 TDs par 15 min contre 1.67 pour Moicano. La defense de TD de Moicano (62%) est vulnerable.' },
    ],
    xFactor: {
      title: 'Premier Main Event en 5 Rounds pour Duncan',
      description: 'Duncan n\'a jamais combattu en 5 rounds. Si Moicano survit a la tempete initiale et pousse le combat au R4-R5, l\'experience pourrait etre decisive.',
    },
  },
  fighter1_info: {
    nome: 'Renato Moicano',
    apelido: 'Money Moicano',
    record: '20-7-1',
    ranking: '#10 Poids Legers',
    ultimasLutas: [
      { result: 'L', opponent: 'Beneil Dariush', method: 'Decision Unanime', event: 'UFC 317' },
      { result: 'L', opponent: 'Islam Makhachev', method: 'Soumission R1', event: 'UFC 311' },
      { result: 'W', opponent: 'Benoit Saint Denis', method: 'Decision Unanime', event: 'UFC 310' },
    ],
  },
  fighter2_info: {
    nome: 'Chris Duncan',
    apelido: 'The Problem',
    record: '15-2-0',
    ranking: 'Non Classe',
    ultimasLutas: [
      { result: 'W', opponent: 'Terrance McKinney', method: 'Soumission R1', event: 'UFC 323' },
      { result: 'W', opponent: 'Mateusz Rebecki', method: 'Decision Unanime (FOTN)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Jordan Vucenic', method: 'Soumission R2', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night : Moicano vs Duncan',
  evento_data: '4 Avril 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Poids Legers (155 lbs)',
  num_rounds: 5,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night : Moicano vs Duncan',
      evento_data: '4 Avril 2026',
      evento_local: 'UFC Apex, Las Vegas',
      categoria_peso: 'Poids Legers (155 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'Maintenant ou Jamais',
      tagline_sub: 'Le precheur du Bitcoin avec 2 defaites consecutives face au berger ecossais en pleine ascension. Meme salle. Chemins opposes.',
      fighter1: {
        nome_completo: 'Renato "Money Moicano" Carneiro',
        apelido: 'Money Moicano',
        sobrenome: 'Moicano',
        record: '20-7-1',
        ranking: '#10 Poids Legers',
        info_extra: 'Brasilia, Bresil | American Top Team | 36 ans',
        imagem_fullbody_url: '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-01%2F12%2FMOICANO_RENATO_L_09-28.png%3Fitok%3DaJ4kuhkB',
      },
      fighter2: {
        nome_completo: 'Chris "The Problem" Duncan',
        apelido: 'The Problem',
        sobrenome: 'Duncan',
        record: '15-2-0',
        ranking: 'Non Classe',
        info_extra: 'Alloa, Ecosse | American Top Team | 32 ans',
        imagem_fullbody_url: '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2023-07%2FDUNCAN_CHRIS_L_07-22.png%3Fitok%3DHlQ_JCOr',
      },
    },

    narrativa: {
      html_content: `
        <!-- MOICANO : MAINTENANT OU JAMAIS -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">Le Precheur au Pied du Mur</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                A l'UFC 300, <strong class="text-ufc-red">Moicano</strong> est monte dans l'octogone, a battu Jalin Turner en outsider a +200, a saisi le micro et a lache : <em class="text-white/80">"Si vous ne savez pas qui est Ludwig von Mises, vous ne savez rien de l'economie. Lisez, et achetez du Bitcoin."</em> Le MMA s'est arrete. C'est devenu un meme. C'est devenu un t-shirt. Le gars est devenu plus celebre pour son discours que pour sa victoire. C'est ca, Renato Moicano : etudiant en droit, libertarien, 723 000 abonnes Instagram, le combattant le plus charismatique de l'UFC. Mais le charisme ne gagne pas les combats.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Jan 2025</p>
                <p class="font-display text-2xl text-white mb-2">MAKHACHEV</p>
                <p class="text-xs text-white/50 leading-relaxed">Soumission R1. Islam n'a meme pas transpire. Moicano a accepte en remplacement et s'est fait devorer par le meilleur au monde.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Combat pour le Titre</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Juin 2025</p>
                <p class="font-display text-2xl text-white mb-2">DARIUSH</p>
                <p class="text-xs text-white/50 leading-relaxed">Decision Unanime. Combat terne. Moicano n'a pas reussi a imposer son jeu. 2eme defaite consecutive.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Serie Negative</div>
              </div>
            </div>
          </div>

          <div class="mt-8 text-center">
            <p class="font-display text-5xl md:text-6xl bg-gradient-to-b from-ufc-red/40 to-ufc-red/10 bg-clip-text text-transparent leading-none">2 defaites consecutives</p>
            <div class="flex items-center justify-center gap-4 mt-3">
              <div class="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-white/10"></div>
              <p class="text-xs text-white/40">36 ans &middot; #10 LW &middot; Une 3eme defaite pourrait etre fatale</p>
              <div class="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-white/10"></div>
            </div>
            <p class="font-display text-lg text-white/70 mt-2 italic">"Maintenant ou jamais, Moicano."</p>
          </div>
        </div>

        <!-- DUNCAN : L'ASCENSION -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Des Paturages Ecossais au Main Event</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-blue-400">Duncan</strong> a grandi a Alloa, en Ecosse. Il travaillait comme berger. On l'appelait "Podgy" (le grassouillet) quand il etait enfant. Le jour de la pesee de son premier combat professionnel, sa mere a ete assassinee. Il a combattu le lendemain. Il porte un pendentif en son honneur a chaque pesee, a chaque combat. Chris Duncan ne parle pas de tragedie pour attirer la sympathie. Il se bat parce que se battre est la seule chose qui a du sens depuis ce jour-la.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">2024</p>
                <p class="font-display text-2xl text-white mb-2">VUCENIC</p>
                <p class="text-xs text-white/50 leading-relaxed">Soumission R2. A montre son jeu au sol.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Sub Finish</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">2025</p>
                <p class="font-display text-2xl text-white mb-2">REBECKI</p>
                <p class="text-xs text-white/50 leading-relaxed">Decision Unanime. Bonus FOTN. Une guerre de 3 rounds.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">FOTN</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Dec 2025</p>
                <p class="font-display text-2xl text-white mb-2">McKINNEY</p>
                <p class="text-xs text-white/50 leading-relaxed">Soumission R1. Rapide et letal.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Sub R1</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">2024</p>
                <p class="font-display text-2xl text-white mb-2">OKI</p>
                <p class="text-xs text-white/50 leading-relaxed">Soumission R1. Bonus POTN. Domination totale.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">POTN</div>
              </div>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-amber-500/4 to-amber-500/8"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div class="relative p-5 text-center">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">4 victoires consecutives</p>
              <p class="text-sm text-white/60">Toutes impressionnantes. <strong class="text-amber-400">Premier main event en 5 rounds</strong> de sa carriere. Le cardio reste l'inconnue.</p>
            </div>
          </div>
        </div>

        <!-- COULISSES : LE FACTEUR ATT -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">L'Elephant dans la Piece : Meme Salle</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">American Top Team</p>
                <p class="text-sm text-white/60 leading-relaxed">Les deux s'entrainent a l'ATT. Ils ont fait du sparring ensemble. Ils connaissent le jeu de l'autre par coeur. Cela elimine les surprises et transforme le combat en echecs purs.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-ufc-red/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-ufc-red rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-ufc-red mb-2">Moicano : le charisme viral</p>
                <p class="text-sm text-white/60 leading-relaxed">Le discours de Ludwig von Mises a l'UFC 300. Etudiant en droit. Libertarien. Bitcoin. 723K sur Instagram. Le gars que tout le monde veut entendre au micro.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Duncan : determination silencieuse</p>
                <p class="text-sm text-white/60 leading-relaxed">Pas de trash talk. Pas de show. Porte le pendentif de sa mere a chaque combat. A quitte l'Ecosse pour etre le meilleur. Sa motivation ne vient pas des likes, elle vient de quelque chose de bien plus profond.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Passage de Flambeau ?</p>
                <p class="text-sm text-white/60 leading-relaxed">Un veteran de 36 ans en declin face a une etoile de 32 ans en pleine ascension. Si Duncan gagne, il entre au classement. Si Moicano perd, les discussions sur la retraite commencent.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Classement', fighter1: '#10 Poids Legers', fighter2: 'Non Classe' },
        { dimensao: 'Serie', fighter1: '2 defaites consecutives', fighter2: '4 victoires consecutives' },
        { dimensao: 'Recit', fighter1: 'Eviter une 3eme defaite consecutive a 36 ans', fighter2: 'Entrer au classement avec une victoire sur un top 10' },
        { dimensao: 'Risque', fighter1: 'Une 3eme defaite pourrait mettre fin aux ambitions top 5', fighter2: 'Rater l\'opportunite en or contre un veteran en baisse' },
        { dimensao: 'Recompense', fighter1: 'Prouver qu\'il est encore pertinent au sommet', fighter2: 'Plus grande victoire de sa carriere, entree au top 15' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'LE VETERAN RESISTE',
          subtitulo: 'Moicano prouve que l\'experience en 5 rounds est le grand differenciateur et stoppe l\'hemorragie',
          consequencias: [
            { tag: 'CLASSEMENT', texto: 'Moicano reste dans le top 10 et respire au classement. Le recit du declin ralentit.' },
            { tag: 'RECIT', texto: 'Prouve que ses 2 defaites etaient contre l\'elite (champion et top 10) et qu\'il domine encore "le reste."' },
            { tag: 'PROCHAIN', texto: 'Combat contre un top 7-12 comme Dustin Poirier, Dan Hooker ou Michael Chandler.' },
          ],
          proxima_luta: 'Moicano vs top 7-12 LW (Poirier, Hooker ou Chandler)',
        },
        fighter2_vence: {
          titulo: 'THE PROBLEM ENTRE AU CLASSEMENT',
          subtitulo: 'Duncan confirme qu\'il est l\'avenir des poids legers avec une victoire dominante sur un veteran classe',
          consequencias: [
            { tag: 'ASCENSION', texto: 'Duncan entre au top 15 avec la plus grande victoire de sa carriere UFC' },
            { tag: 'HYPE', texto: 'L\'ascension meteorique prend de l\'ampleur. 5 victoires en 6 combats UFC. La communaute MMA prend note.' },
            { tag: 'MOICANO', texto: 'Une 3eme defaite consecutive a 36 ans souleve des questions serieuses sur l\'avenir de Moicano au sommet de la division.' },
          ],
          proxima_luta: 'Duncan vs top 10-15 LW (Bobby Green, Paddy Pimblett ou Mateusz Gamrot)',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Renato Moicano',
        color: 'red',
        recent_fights: [
          { date: 'Juin 2025', opponent: 'Beneil Dariush', result: 'L', method: 'Decision Unanime', opponent_rank: '#9 LW', quality_score: 3, quality_label: 'Bon', note: 'Combat terne. Moicano n\'a pas reussi a imposer son jeu. Dariush a controle le rythme et gagne aux points.' },
          { date: 'Jan 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Soumission R1', opponent_rank: 'Champion', quality_score: 5, quality_label: 'Excellent', note: 'A accepte en remplacement pour le titre. Islam l\'a soumis rapidement. Aucune honte a perdre contre le meilleur au monde.' },
          { date: 'Dec 2024', opponent: 'Benoit Saint Denis', result: 'W', method: 'Decision Unanime', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Bon', note: 'Victoire solide. A controle la distance et gagne aux points.' },
          { date: 'Avr 2024', opponent: 'Jalin Turner', result: 'W', method: 'Decision Unanime', opponent_rank: '#11 LW', quality_score: 3, quality_label: 'Bon', note: 'UFC 300. Outsider a +200 et victoire. Puis le discours viral de Ludwig von Mises et Bitcoin.' },
          { date: 'Nov 2023', opponent: 'Drew Dober', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Victoire tranquille aux points. Dober est un gatekeeper solide.' },
        ],
        full_fight_history: [
          { date: 'Aout 2014', opponent: 'Zubaira Tukhugov', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Debut UFC, defaite' },
          { date: 'Nov 2015', opponent: 'Tom Niinimaki', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Faible', note: 'Premiere victoire UFC' },
          { date: 'Mai 2016', opponent: 'Zubaira Tukhugov', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Revanche, victoire aux points' },
          { date: 'Sep 2016', opponent: 'Alex Oliveira', result: 'D', method: 'SD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Match nul' },
          { date: 'Fev 2017', opponent: 'Jeremy Stephens', result: 'W', method: 'UD', opponent_rank: '#6 FW', quality_score: 3, quality_label: 'Bon', note: 'Victoire solide contre un classe' },
          { date: 'Juin 2017', opponent: 'Brian Ortega', result: 'L', method: 'Sub R3', opponent_rank: '#4 FW', quality_score: 4, quality_label: 'Tres Bon', note: 'Defaite contre un futur challenger au titre' },
          { date: 'Fev 2018', opponent: 'Calvin Kattar', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Victoire aux points' },
          { date: 'Dec 2018', opponent: 'Mirsad Bektic', result: 'W', method: 'UD', opponent_rank: '#10 FW', quality_score: 3, quality_label: 'Bon', note: 'Victoire contre un classe' },
          { date: 'Fev 2019', opponent: 'Jose Aldo', result: 'L', method: 'KO R2', opponent_rank: '#3 FW', quality_score: 5, quality_label: 'Excellent', note: 'KO par la legende' },
          { date: 'Juin 2019', opponent: 'Korean Zombie', result: 'L', method: 'KO R1', opponent_rank: '#4 FW', quality_score: 4, quality_label: 'Tres Bon', note: 'KO rapide' },
          { date: 'Mar 2020', opponent: 'Damir Hadzovic', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Faible', note: 'Monte en LW, soumission rapide' },
          { date: 'Fev 2022', opponent: 'Alexander Hernandez', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Finalisation au sol' },
          { date: 'Juil 2022', opponent: 'Brad Riddell', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Victoire aux points' },
          { date: 'Nov 2023', opponent: 'Drew Dober', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Victoire tranquille' },
          { date: 'Avr 2024', opponent: 'Jalin Turner', result: 'W', method: 'UD', opponent_rank: '#11 LW', quality_score: 3, quality_label: 'Bon', note: 'UFC 300, discours viral' },
          { date: 'Dec 2024', opponent: 'Benoit Saint Denis', result: 'W', method: 'UD', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Bon', note: 'UFC 310' },
          { date: 'Jan 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Sub R1', opponent_rank: 'Champion', quality_score: 5, quality_label: 'Excellent', note: 'Remplacement, titre' },
          { date: 'Juin 2025', opponent: 'Beneil Dariush', result: 'L', method: 'UD', opponent_rank: '#9 LW', quality_score: 3, quality_label: 'Bon', note: 'Combat terne' },
        ],
        momentum_score: 4,
        momentum_label: 'En Recuperation',
        momentum_trend: 'descending',
        momentum_note: 'Moicano sort de 2 defaites consecutives, mais avec du contexte : la premiere etait contre le champion du monde en remplacement (Islam Makhachev), et la seconde contre le veteran Dariush. Avant cela, une serie de 5 victoires incluant l\'iconique UFC 300. A 36 ans, la fenetre se referme. Une 3eme defaite serait devastatrice pour son classement et son recit. Mais Moicano est le type de combattant qui sait se reinventer.',
      },
      fighter2: {
        nome: 'Chris Duncan',
        color: 'blue',
        recent_fights: [
          { date: 'Dec 2025', opponent: 'Terrance McKinney', result: 'W', method: 'Soumission R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Finalisation rapide a l\'UFC 323. A montre que le jiu-jitsu est affute.' },
          { date: 'Aout 2025', opponent: 'Mateusz Rebecki', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Bonus FOTN. Guerre de 3 rounds avec gros volume. A montre du cardio et du coeur.' },
          { date: 'Avr 2025', opponent: 'Jordan Vucenic', result: 'W', method: 'Soumission R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Encore une soumission. Le grappling fait la difference.' },
          { date: 'Nov 2024', opponent: 'Bolaji Oki', result: 'W', method: 'Soumission R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Faible', note: 'Bonus POTN. Domination totale des la premiere seconde.' },
          { date: 'Fev 2024', opponent: 'Manuel Torres', result: 'L', method: 'Soumission', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Seule defaite a l\'UFC. A ete soumis. La faiblesse : se faire prendre au sol quand il est en dessous.' },
        ],
        full_fight_history: [
          { date: 'Mar 2023', opponent: 'Omar Morales', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Faible', note: 'Debut UFC, victoire solide' },
          { date: 'Juil 2023', opponent: 'Chepe Mariscal', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Faible', note: 'KO rapide' },
          { date: 'Fev 2024', opponent: 'Manuel Torres', result: 'L', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Seule defaite UFC' },
          { date: 'Nov 2024', opponent: 'Bolaji Oki', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Faible', note: 'POTN' },
          { date: 'Avr 2025', opponent: 'Jordan Vucenic', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Sub finish' },
          { date: 'Aout 2025', opponent: 'Mateusz Rebecki', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'FOTN' },
          { date: 'Dec 2025', opponent: 'Terrance McKinney', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'UFC 323' },
        ],
        momentum_score: 8,
        momentum_label: 'En Feu',
        momentum_trend: 'ascending',
        momentum_note: 'Duncan est au meilleur moment de sa carriere. 4 victoires consecutives a l\'UFC, toutes impressionnantes, avec des bonus POTN et FOTN. Le hype est reel. Mais la qualite des adversaires reste discutable : aucun classe, aucun top 15. Moicano represente un bond ENORME en qualite. C\'est le vrai test. Son premier main event en 5 rounds ajoute une couche d\'incertitude supplementaire.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Moicano',
        media_oponentes: 3,
        media_oponentes_label: 'Bon',
        aproveitamento: '12V-7D (63%)',
        contra_top5: '0V-3D',
      },
      fighter2: {
        nome: 'Duncan',
        media_oponentes: 2,
        media_oponentes_label: 'Moyen',
        aproveitamento: '6V-1D (86%)',
        contra_top5: '0V-0D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Aucun adversaire commun a l\'UFC, mais les deux s\'entrainent ensemble a l\'American Top Team. C\'est plus precieux que n\'importe quel adversaire commun : ils connaissent litteralement les habitudes, les forces et les faiblesses de l\'autre. Moicano a affronte une competition nettement superieure (Makhachev, Aldo, Ortega, Dariush). Duncan n\'a encore affronte personne de classe.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Frappes Sig. par Minute', valueA: 4.17, valueB: 5.02, maxVal: 7, format: 'decimal', note: 'Duncan a un volume superieur. Pousse un rythme plus eleve et lance plus de frappes.' },
        { label: 'Precision des Frappes (%)', valueA: 48, valueB: 46, maxVal: 100, format: 'percent', note: 'Precision tres similaire. Moicano avec un leger avantage.' },
        { label: 'Frappes Absorbees/Min', valueA: 3.57, valueB: 4.82, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Duncan absorbe BEAUCOUP plus. Le style agressif a un prix. Moicano est plus prudent.' },
        { label: 'Defense de Frappes (%)', valueA: 59, valueB: 51, maxVal: 100, format: 'percent', note: 'Moicano defend mieux. Duncan encaisse plus pour donner plus.' },
        { label: 'Takedowns par 15 Min', valueA: 1.67, valueB: 3.27, maxVal: 5, format: 'decimal', note: 'Duncan tente presque le double de takedowns. Le wrestling est une partie centrale de son jeu.' },
        { label: 'Precision Takedown (%)', valueA: 41, valueB: 42, maxVal: 100, format: 'percent', note: 'Precision de TD pratiquement identique.' },
        { label: 'Defense Takedown (%)', valueA: 62, valueB: 50, maxVal: 100, format: 'percent', note: 'Moicano defend mieux les TDs, mais 62% n\'est pas elite. Vulnerable.' },
        { label: 'Soumissions par 15 Min', valueA: 0.5, valueB: 0.7, maxVal: 3, format: 'decimal', note: 'Les deux sont des menaces de soumission. Potentiel echecs au sol.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '36 ans', fighter2: '32 ans', note: 'Moicano 4 ans de plus' },
        { label: 'Taille', fighter1: '1,80m (5\'11")', fighter2: '1,78m (5\'10")', note: 'Quasiment la meme taille' },
        { label: 'Allonge', fighter1: '183cm (72")', fighter2: '180cm (71")', note: 'Moicano avec un leger avantage de 1 pouce' },
        { label: 'Stance', fighter1: 'Orthodoxe', fighter2: 'Orthodoxe', note: 'Les deux orthodoxes' },
        { label: 'Salle', fighter1: 'American Top Team', fighter2: 'American Top Team', note: 'MEME SALLE. Ils s\'entrainent ensemble. Ils savent tout l\'un de l\'autre.' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking Debout', valueA: 72, valueB: 70, labelA: 'Bon', labelB: 'Bon', advantage: 'even', advantage_note: 'Moicano est technique et precis (48% acc). Duncan a plus de volume (5.02 SLpM) mais absorbe trop (4.82 SApM). Styles differents, niveau similaire debout.' },
        { label: 'Wrestling Offensif', valueA: 60, valueB: 75, labelA: 'Bon', labelB: 'Tres Bon', advantage: 'fighter2', advantage_note: 'Duncan tente en moyenne 3.27 TDs par 15 min, presque le double de Moicano (1.67). L\'Ecossais est plus actif en wrestling et l\'utilise pour creer des transitions au sol.' },
        { label: 'Jiu-Jitsu / Soumissions', valueA: 70, valueB: 75, labelA: 'Bon', labelB: 'Tres Bon', advantage: 'fighter2', advantage_note: 'Duncan a 6 soumissions en carriere (40% des victoires), dont 3 a l\'UFC recemment. Moicano a 8 soumissions au total (4 a l\'UFC). Les deux dangereux, mais Duncan est plus actif dans le jeu de soumission dernierement.' },
        { label: 'Defense et Durabilite', valueA: 68, valueB: 55, labelA: 'Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Moicano defend 59% des frappes et 62% des TDs. Duncan absorbe trop (4.82 SApM) et ne defend que 51% des frappes. Duncan ne defend aussi que 50% des TDs.' },
        { label: 'Cardio et Reservoir', valueA: 75, valueB: 58, labelA: 'Tres Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Moicano a deja combattu en 5 rounds et a l\'experience des main events longs. Duncan n\'a JAMAIS combattu en 5 rounds. La plus grande inconnue de ce combat. Si ca va au R4-R5, personne ne sait comment Duncan reagira.' },
        { label: 'Experience d\'Elite', valueA: 80, valueB: 45, labelA: 'Tres Bon', labelB: 'Moyen', advantage: 'fighter1', advantage_note: 'Moicano a affronte Makhachev, Aldo, Ortega, Korean Zombie, Dariush. Duncan n\'a jamais affronte un classe. Le fosse d\'experience est enorme.' },
      ],
      insight: 'Les deux sont polyvalents avec un bon jiu-jitsu, mais avec des styles opposes. Moicano est plus technique et prudent, avec une meilleure defense et une experience d\'elite. Duncan est plus explosif et agressif, avec un wrestling superieur et un volume eleve. Le combat sera decide par : Duncan peut-il imposer son rythme eleve et amener le combat au sol, ou Moicano peut-il controler la distance et faire depenser Duncan dans les 3 premiers rounds ?',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Moicano',
        ko_tko: { count: 4, percent: 20 },
        submission: { count: 8, percent: 40 },
        decision: { count: 8, percent: 40 },
        total_wins: 20,
      },
      fighter2: {
        nome: 'Duncan',
        ko_tko: { count: 7, percent: 47 },
        submission: { count: 6, percent: 40 },
        decision: { count: 2, percent: 13 },
        total_wins: 15,
      },
      insight: 'Les profils de finalisation racontent des histoires tres differentes. Moicano est equilibre entre soumission (40%) et decision (40%), avec peu de KOs (20%). A l\'UFC, 10 de ses 12 victoires etaient par decision. Duncan est un finisseur ne : 87% de victoires par finish (47% KO + 40% sub) et seulement 2 decisions en 15 victoires. Si le combat s\'etire, ca favorise Moicano. Si Duncan impose son jeu tot, il chasse le finish.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 8,
          danger_label: 'AVANTAGE DUNCAN',
          color: 'green',
          title: 'Territoire de Duncan',
          description: 'Duncan est le plus dangereux au R1. Volume de 5.02 SLpM, la plupart de ses finalisations au R1, et l\'explosivite de quelqu\'un a son pic physique. Moicano doit survivre la tempete initiale sans etre amene au sol. Si Duncan place un takedown tot et transitionne au sol, la soumission peut arriver vite.',
        },
        {
          rounds: 'R2-R3',
          danger_level: 6,
          danger_label: 'EQUILIBRE',
          color: 'gold',
          title: 'Rounds de Transition',
          description: 'Si Moicano survit au R1, les rounds 2 et 3 sont la ou l\'experience commence a peser. Duncan a encore du jus, mais le rythme de 5.02 frappes par minute n\'est pas soutenable longtemps. Moicano peut commencer a trouver son timing et contrer. Le grappling peut aller dans les deux sens : les deux sont des menaces de soumission.',
        },
        {
          rounds: 'R4-R5',
          danger_level: 4,
          danger_label: 'AVANTAGE MOICANO',
          color: 'red',
          title: 'Championship Rounds',
          description: 'Territoire completement inconnu pour Duncan. Il n\'a JAMAIS combattu en 5 rounds. Moicano a ete dans cette situation plusieurs fois. Si le combat arrive ici, l\'experience, le fight IQ et le rythme controle du veteran devraient dominer. Duncan peut etre a sec apres le volume eleve des rounds precedents.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'MapPin', title: 'Meme Salle : American Top Team', fighter: 'Les Deux', risk_level: 'NEUTRE', risk_color: 'neutral', description: 'Les deux s\'entrainent a l\'ATT. Ils ont fait du sparring ensemble. Ils connaissent les forces et faiblesses de l\'autre. Cela elimine l\'element de surprise et transforme le combat en echecs purs. Qui adapte mieux son plan de jeu le jour J ?' },
        { icon: 'Clock', title: 'Age : 36 Ans', fighter: 'Moicano', risk_level: 'RISQUE MOYEN', risk_color: 'yellow', description: 'Moicano a 36 ans et sort de 2 defaites consecutives. La recuperation entre les combats n\'est plus la meme. Les reflexes diminuent. Face a un gars de 32 ans a son pic physique, chaque annee compte.' },
        { icon: 'Activity', title: 'Premier Main Event en 5 Rounds', fighter: 'Duncan', risk_level: 'RISQUE ELEVE', risk_color: 'red', description: 'Duncan n\'a JAMAIS combattu en 5 rounds. Tous ses combats ont ete en 3 rounds. Son cardio sur 25 minutes est completement inconnu. Le volume de 5.02 frappes par minute est insoutenable sur 5 rounds. Quelque chose doit ceder.' },
        { icon: 'TrendingUp', title: 'Elan de 4 Victoires', fighter: 'Duncan', risk_level: 'POSITIF', risk_color: 'green', description: 'Duncan sort d\'une serie de 4 victoires avec des bonus POTN et FOTN. La confiance est a son maximum. Chaque combat semble meilleur que le precedent. Le gars evolue en temps reel.' },
        { icon: 'Brain', title: 'Mentalite "Rien a Perdre"', fighter: 'Moicano', risk_level: 'POSITIF', risk_color: 'green', description: 'Moicano a deja combattu pour le titre, a deja fait le discours viral, a deja vecu l\'apogee. Avec le dos au mur a 36 ans, il peut se battre avec la liberte de quelqu\'un qui n\'a plus rien a proteger. Un Moicano "libere" peut etre dangereux.' },
        { icon: 'Shield', title: 'Pendentif de la Mere', fighter: 'Duncan', risk_level: 'TRES POSITIF', risk_color: 'green', description: 'Duncan se bat avec le pendentif en l\'honneur de sa mere assassinee. Ce n\'est pas du sentimentalisme. C\'est une motivation profonde, le genre qui ne s\'arrete pas quand le cardio flanche. L\'homme a traverse le pire de la vie et continue de se battre.' },
        { icon: 'Target', title: 'Defense de TD Vulnerable', fighter: 'Moicano', risk_level: 'RISQUE MOYEN', risk_color: 'yellow', description: 'Moicano ne defend que 62% des takedowns. Face au wrestling de Duncan (3.27 TDs par 15 min), c\'est un probleme. Si Duncan arrive a l\'amener au sol regulierement, il peut controler tout le combat.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Moicano',
        total_probability: 40,
        scenarios: [
          { name: 'Le Marathon du Veteran', probability: 22, method: 'Decision Unanime', description: 'Moicano survit au R1, controle la distance avec le jab, et fait depenser Duncan tot. Dans les championship rounds (R4-R5), l\'experience domine. Duncan n\'a jamais combattu en 5 rounds et craque. Moicano gagne aux points avec le controle et le fight IQ.' },
          { name: 'Soumission du Veteran', probability: 10, method: 'Soumission R3-R4', description: 'Moicano attend que Duncan fatigue puis cherche le takedown. Au sol, un Duncan epuise commet une erreur et Moicano verrouille une guillotine ou un RNC. L\'experience en grappling parle plus fort quand l\'adversaire est fatigue.' },
          { name: 'Contre Propre', probability: 8, method: 'TKO R2-R3', description: 'Duncan entre agressif comme toujours et Moicano place un contre precis qui fait mal. Le volume eleve de Duncan laisse des failles defensives. Si Moicano trouve le timing, il peut blesser et chasser le finish.' },
        ],
      },
      fighter2: {
        nome: 'Duncan',
        total_probability: 57,
        scenarios: [
          { name: 'Tempete Ecossaise', probability: 25, method: 'Soumission R1-R2', description: 'Duncan pousse des la premiere seconde, place un takedown tot et transitionne vers un back take ou arm triangle. Au sol, le grappling de Duncan est plus agressif et moderne. Moicano ne peut pas se relever et Duncan finalise par soumission.' },
          { name: 'Volume et Pression', probability: 18, method: 'Decision Unanime', description: 'Duncan maintient le rythme eleve pendant les 5 rounds (improbable mais possible). Le volume de 5.02 frappes/min combine avec des takedowns constants domine Moicano aux points. Duncan prouve que son cardio tient le main event.' },
          { name: 'TKO par Accumulation', probability: 14, method: 'TKO R2-R3', description: 'Le volume eleve de Duncan accumule les degats. Moicano absorbe 3.57 frappes/min et commence a ralentir. Duncan le sent et augmente la pression, melangeant frappes et takedowns jusqu\'a l\'arret de l\'arbitre.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Chris Duncan',
      winner_side: 'fighter2',
      predicted_method: 'Soumission R2-R3',
      confidence_score: 5,
      confidence_label: 'MOYENNE',
      explanation: 'Ce combat est bien plus equilibre que les cotes ne le suggerent, mais Duncan merite d\'etre leger favori. L\'Ecossais a un volume superieur, un wrestling plus actif et des soumissions plus frequentes. La combinaison de pression, takedowns et menace de soumission peut etre trop pour Moicano, surtout avec une defense de TD de seulement 62%. Le scenario le plus probable : Duncan pousse dans les premiers rounds, place des takedowns et finit par trouver la soumission. CEPENDANT : si Moicano survit jusqu\'au R4, la dynamique change completement. Duncan n\'a JAMAIS combattu en 5 rounds et le volume de 5.02 SLpM est insoutenable sur 25 minutes. L\'experience de Moicano dans les championship rounds est le joker de ce combat. C\'est le classique "celui qui impose le rythme l\'emporte."',
      x_factor: {
        title: 'Les 5 Rounds que Duncan n\'a Jamais Combattus',
        description: 'Duncan n\'a jamais depasse 3 rounds. Personne ne sait ce qui arrive a son cardio sur 25 minutes en maintenant 5.02 frappes par minute. S\'il fatigue, Moicano est exactement le type de combattant qui capitalise : technique, patient, et dangereux quand il sent la faiblesse. C\'est le facteur X qui pourrait retourner le combat pour le veteran.',
      },
      upset_alert: {
        title: 'Moicano : Veteran des Championship Rounds',
        description: 'Si Moicano survit aux 2-3 premiers rounds sans etre finalise, il peut completement retourner ce combat au R4-R5. Duncan sera en territoire inconnu, possiblement fatigue, face a un veteran qui a ete la des dizaines de fois. L\'upset n\'est pas improbable. Moicano a +160 a une vraie valeur.',
      },
      probabilities: {
        fighter1: { nome: 'Moicano', percent: 40 },
        fighter2: { nome: 'Duncan', percent: 57 },
        draw: 3,
      },
      value_picks: {
        moneyline: { pick: 'Moicano (+160)', reasoning: 'L\'outsider a une vraie valeur. Moicano est un top 10 avec une experience d\'elite en 5 rounds contre quelqu\'un qui n\'a jamais depasse 3. Si le combat s\'etire, +160 paie bien.' },
        method: { pick: 'Duncan par Soumission (+180)', reasoning: 'Duncan a 3 soumissions dans ses 4 derniers combats UFC. Moicano a ete soumis par Makhachev et Ortega. Le scenario est reel et les cotes paient bien.' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: 'Moicano est difficile a finir (10 decisions en 20 victoires) et sait survivre. Duncan peut pousser tot mais pourrait ne pas obtenir le finish rapide. Over 2.5 est le pari le plus sur.' },
        best_value: 'Moicano ML (+160) est le meilleur pari valeur. Un top 10 veteran avec l\'experience des 5 rounds contre un gars qui n\'a jamais depasse 3 rounds. Les cotes exagerent l\'avantage de Duncan.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Les 2 Premiers Takedowns de Duncan', icon: 'Target', description: 'Si Duncan place des takedowns dans les 5 premieres minutes et controle Moicano au sol, le plan de jeu fonctionne. Si Moicano defend et garde le combat debout, Duncan devra tout repenser.' },
        { num: 2, title: 'Le Rythme de Moicano au R1', icon: 'Brain', description: 'Observez si Moicano essaie de dicter un rythme lent et technique ou s\'il est force de combattre au tempo de Duncan. Si Moicano contre avec calme, il est a l\'aise. S\'il recule et absorbe, probleme.' },
        { num: 3, title: 'Le Reservoir de Duncan au R3', icon: 'Activity', description: 'Le round le plus important pourrait etre le troisieme. Duncan peut-il maintenir 5.02 frappes par minute pendant 15 minutes ? Si le rythme chute visiblement au R3, Moicano sait que les championship rounds sont a lui.' },
        { num: 4, title: 'Qui Controle le Sol', icon: 'Shield', description: 'Quand le combat ira au sol (et il IRA), observez qui controle. Les deux sont des menaces de soumission. Si Duncan est dessus et controle, il domine. Si Moicano menace du dessous, il peut surprendre.' },
        { num: 5, title: 'Le Langage Corporel au R4', icon: 'Zap', description: 'Si Duncan arrive au R4 en ayant l\'air frais, Moicano est en serieux probleme. Si Duncan est appuye contre la cage a reprendre son souffle entre les echanges, c\'est le signe que l\'experience en 5 rounds du veteran va trancher.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'MOICANO VS DUNCAN', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | 4 Avril\n5 Rounds | Poids Legers\n\n20-7-1 vs 15-2\nVeteran en declin vs Etoile montante\nMEME SALLE. Destins opposes.\n\nMaintenant ou jamais.', color: 'gold' },
        { slide_number: 2, title: 'MONEY MOICANO', content: '#10 Poids Legers | 36 ans\nAmerican Top Team\n\nLe gars du discours Bitcoin a l\'UFC 300.\n723K sur Instagram.\nEtudiant en droit. Libertarien.\n\nMAIS : 2 defaites consecutives.\nMakhachev (Sub R1) + Dariush (UD).\n3eme defaite = ambitions top 5 terminees.', color: 'red' },
        { slide_number: 3, title: 'THE PROBLEM', content: '15-2 | 32 ans | Ecosse\nAmerican Top Team\n\n4 victoires consecutives :\nOki Sub R1 (POTN)\nVucenic Sub R2\nRebecki UD (FOTN)\nMcKinney Sub R1\n\nAncien berger devenu combattant.\nPorte le pendentif de sa mere.\nPas de trash talk. Juste des resultats.', color: 'blue' },
        { slide_number: 4, title: 'LE FACTEUR ATT', content: 'MEME SALLE.\nMemes sparrings.\nMemes coaches.\n\nIls SAVENT tout l\'un de l\'autre.\nPas de surprises. Juste l\'execution.\n\nLa question :\nQui s\'adapte mieux dans l\'octogone ?\n\nLe veteran de 36 ou l\'etoile de 32 ?', color: 'gold' },
        { slide_number: 5, title: 'PREDICTION', content: 'DUNCAN par Soumission R2-R3\n\nConfiance : MOYENNE\n57% Duncan / 40% Moicano\n\nDuncan pousse, amene au sol\net chasse le finish.\n\nMAIS : si Moicano survit au R4,\nDuncan n\'a jamais combattu 5 rounds.\nExperience > Hype.', color: 'blue' },
      ],
      twitter: [
        { num: '1/5', text: 'Moicano vs Duncan samedi a l\'Apex. Le precheur du Bitcoin sur 2 defaites face au berger ecossais avec 4 victoires. MEME SALLE. Ils savent tout l\'un de l\'autre. Thread :' },
        { num: '2/5', text: 'La stat dont personne ne parle : Duncan n\'a JAMAIS combattu en 5 rounds. Jamais. Zero. Le volume de 5.02 frappes par minute est insoutenable sur 25 minutes. Si Moicano survit au R4, la dynamique change completement.' },
        { num: '3/5', text: 'Moicano a +160 en outsider a de la VALEUR. C\'est un top 10 avec l\'experience des 5 rounds, veteran de l\'UFC 300, face a un non-classe qui n\'a jamais affronte un top 15. Les cotes sont gonflees. Le marche paie pour le hype.' },
        { num: '4/5', text: 'Mais le scenario de Duncan est reel : 3 soumissions en 4 derniers combats. 3.27 TDs par 15 min. Moicano ne defend que 62% des TDs. Si Duncan l\'amene au sol tot et regulierement, la soumission peut arriver vite. "The Problem" est reel.' },
        { num: '5/5', text: 'Pick : Duncan par sub R2-R3, mais Moicano ML +160 est le pari valeur du card. Le gars qui a dit de lire Ludwig von Mises avec le dos au mur a 36 ans ? Respectez l\'experience. Respectez le chaos. Respectez le Moicano.' },
      ],
      video: [
        { time: '0-10s', title: 'Accroche', text: 'Le gars a pris le micro a l\'UFC 300 et a dit au monde entier de lire Ludwig von Mises. C\'est devenu un meme. C\'est devenu une legende. Mais maintenant Renato Moicano a 36 ans, 2 defaites consecutives, et affronte le gars avec qui il s\'entraine tous les jours.' },
        { time: '10-25s', title: 'Duncan', text: 'Chris Duncan. Berger ecossais. Sa mere a ete assassinee le jour de la pesee de son premier combat. Il a combattu le lendemain. Il porte son pendentif a ce jour. 4 victoires consecutives a l\'UFC, 3 par soumission. Et c\'est le premier main event en 5 rounds de sa carriere.' },
        { time: '25-40s', title: 'Le Conflit', text: 'Les deux s\'entrainent a l\'American Top Team. Meme salle. Memes sparrings. Ils savent TOUT l\'un de l\'autre. Pas de surprises. Des echecs purs. Le veteran charismatique de 36 face a l\'etoile silencieuse de 32. Bitcoin vs pendentif. Show vs substance.' },
        { time: '40-55s', title: 'L\'Analyse', text: 'Duncan pousse plus de volume : 5.02 frappes par minute. Wrestling plus actif : 3.27 TDs. Moicano ne defend que 62% des TDs. MAIS Duncan n\'a jamais combattu 5 rounds. JAMAIS. Le cardio sur 25 minutes est la plus grande inconnue de tout ce combat. Si Moicano survit au R3, ca devient son territoire.' },
        { time: '55-70s', title: 'Pick et CTA', text: 'Pick : Duncan par soumission R2-R3. Mais Moicano a +160 est le pari valeur du card. Maintenant ou jamais pour Money Moicano. Donnez votre pick en commentaire et consultez l\'analyse complete.' },
      ],
      tiktok: [
        { hook: 'Le gars qui a dit a TOUT LE MONDE de lire Ludwig von Mises a l\'UFC 300 a le dos au mur.', body: 'Moicano. 36 ans. 2 defaites consecutives. Et maintenant il affronte Chris Duncan, le gars qui S\'ENTRAINE AVEC LUI tous les jours a l\'ATT. Duncan : 4 victoires consecutives, 3 par soumission. Berger ecossais. Porte le pendentif de sa mere assassinee a chaque combat. Et c\'est son premier main event en 5 rounds. Si Moicano perd, les ambitions top 5 sont finies. Si Duncan gagne, il entre au classement.', cta: 'Qui gagne ? Le veteran ou l\'etoile ? Commentez !' },
        { hook: 'Duncan n\'a JAMAIS combattu 5 rounds. Et c\'est son premier main event.', body: 'Chris Duncan fait en moyenne 5.02 frappes significatives par minute. C\'est DINGUE. Mais personne ne sait s\'il peut maintenir ca pendant 25 minutes. Moicano a fait plusieurs combats en 5 rounds. Si Duncan fatigue au R4, le veteran de 36 ans le devore. Si Duncan finit avant le R3, le hype est confirme.', cta: 'Le cardio tient ou pas ? Commentez !' },
        { hook: 'Moicano a +160 est le MEILLEUR pari du card. Et je vais vous expliquer pourquoi.', body: 'C\'est un top 10 des poids legers. Experience face a Makhachev, Aldo, Ortega. A combattu en 5 rounds plusieurs fois. Contre un non-classe qui n\'a jamais affronte un top 15 et n\'a jamais depasse 3 rounds. Les cotes paient pour le hype de Duncan. Respectez le veteran. Respectez les +160.', cta: 'Vous parieriez sur Moicano ? Commentez !' },
      ],
      headlines: [
        'Moicano vs Duncan : Le Precheur du Bitcoin au Pied du Mur',
        'Meme Salle, Destins Opposes : Le Duel ATT Qui Pourrait Definir des Carrieres',
        'Duncan n\'a Jamais Combattu 5 Rounds. C\'est Son Premier Main Event.',
        'Maintenant ou Jamais : Moicano a 36 Ans Face a la Nouvelle Generation',
        'Des Paturages Ecossais au Main Event : L\'Histoire de Chris Duncan',
        'Moicano a +160 : Pourquoi le Marche Pourrait Avoir Tort',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '+160',
        fighter2_odds: '-192',
        fighter1_name: 'Renato Moicano',
        fighter2_name: 'Chris Duncan',
        source: 'Moyenne DraftKings et FanDuel (mars 2026)',
      },
      edges: [
        { icon: 'Activity', titulo: 'Duncan n\'a Jamais Combattu 5 Rounds', stat_headline: 'ZERO COMBATS EN 5 ROUNDS DANS SA CARRIERE. PREMIER MAIN EVENT.', contexto: 'Duncan n\'a jamais depasse 3 rounds. Le volume de 5.02 SLpM est physiquement impossible a maintenir pendant 25 minutes sans adaptation. Personne ne sait comment son cardio tient.', implicacao_aposta: 'Favorise l\'Over rounds et Moicano dans les combats longs. Si vous croyez que le combat depasse le R3, Moicano gagne en valeur.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Target', titulo: 'Volume de Frappes de Duncan', stat_headline: '5.02 FRAPPES SIGNIFICATIVES PAR MINUTE (TOP TIER LW)', contexto: 'Duncan pousse BEAUCOUP. Le volume est constant et accompagne de takedowns (3.27/15min). Moicano absorbe 3.57 SApM et ne defend que 62% des TDs.', implicacao_aposta: 'Favorise Duncan par finish dans les premiers rounds. L\'Under peut avoir de la valeur.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Brain', titulo: 'Experience d\'Elite de Moicano', stat_headline: 'MOICANO A AFFRONTE MAKHACHEV, ALDO, ORTEGA, KOREAN ZOMBIE, DARIUSH', contexto: 'Duncan n\'a jamais affronte un top 15. Moicano a affronte l\'elite des poids legers et des poids plumes. L\'ecart d\'experience dans les moments de pression est enorme.', implicacao_aposta: 'Favorise Moicano dans les championship rounds et les combats longs.', edge_level: 'moderado', fighter_side: 'fighter1' },
        { icon: 'Shield', titulo: 'Double Menace de Soumission', stat_headline: 'MOICANO 8 SUBS CARRIERE (0.5/15MIN) + DUNCAN 6 SUBS (0.7/15MIN)', contexto: 'Les deux sont de vraies menaces de soumission. Si le combat va au sol, ca peut devenir un match d\'echecs en jiu-jitsu. Duncan plus actif dernierement (3 subs en 4 combats).', implicacao_aposta: 'Le prop "combat finit par soumission" peut avoir de la valeur. Les deux chassent le finish au sol.', edge_level: 'moderado', fighter_side: 'neutral' },
        { icon: 'MapPin', titulo: 'Facteur Salle : ATT', stat_headline: 'ILS S\'ENTRAINENT ENSEMBLE. ILS CONNAISSENT LE JEU DE L\'AUTRE.', contexto: 'Quand des partenaires d\'entrainement s\'affrontent, les surprises sont rares. Le combat tend a etre plus tactique et moins explosif. Les deux savent a quoi s\'attendre.', implicacao_aposta: 'Favorise l\'Over rounds. Pas de surprises = combat plus long et plus tactique.', edge_level: 'leve', fighter_side: 'neutral' },
      ],
      value_picks: [
        { tipo: 'Moneyline', pick: 'Moicano ML (+160)', odds: '+160', confianca: 'media', edge_vs_mercado: 'Le marche sous-evalue l\'experience en 5 rounds. Duncan n\'y a jamais ete. +160 paie bien pour le risque.', raciocinio: 'Moicano est un top 10 avec une experience d\'elite contre un non-classe qui n\'a jamais combattu en 5 rounds. Les cotes exagerent le desavantage. Si le combat s\'etire, Moicano domine.' },
        { tipo: 'Methode', pick: 'Combat finit par Soumission', odds: '+120', confianca: 'alta', raciocinio: 'Duncan a 3 soumissions en 4 derniers combats UFC. Moicano a 8 soumissions en carriere. Les deux cherchent le sol. La probabilite de soumission est elevee quel que soit le vainqueur.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-140', confianca: 'media', raciocinio: 'Moicano est difficile a finir (10 de 20 victoires par decision). Meme sous pression, il tend a survivre et pousser le combat aux rounds tardifs. Le facteur ATT (ils se connaissent) favorise la prudence.' },
        { tipo: 'Duree', pick: 'Duncan par Sub R1-R2', odds: '+280', confianca: 'baixa', raciocinio: 'Si vous croyez au hype Duncan, +280 paie GROS. 3 subs en 4 combats, wrestling actif, contre Moicano qui defend 62% des TDs. Le scenario existe, mais le risque est eleve.' },
      ],
      armadilha: {
        titulo: 'Piege : Duncan par Decision',
        descricao: 'Duncan n\'a que 2 decisions en 15 victoires en carriere (13%). C\'est un finisseur ne. S\'il ne peut pas soumettre ou KO Moicano, il perd probablement aux points contre le veteran. Parier sur Duncan par decision va a l\'encontre de TOUT son historique.',
      },
      disclaimer: 'Analyse statistique a titre informatif. Pariez de maniere responsable.',
    },
  },
};
