export type Confidence = 'HIGH' | 'MEDIUM' | 'LOW' | 'NOT_FOUND';
export type Stage = 'cold' | 'replied' | 'sample_sent' | 'call_booked' | 'kit_shipped' | 'passed';

export interface Creator {
  id: number;
  name: string;
  igHandle: string | null;
  igUrl: string | null;
  ytUrl?: string;
  email?: string | null;
  confidence: Confidence;
  isPriority?: boolean;
  notes?: string;
}

export const STAGE_OPTIONS: { value: Stage; label: string; color: string }[] = [
  { value: 'cold', label: 'Cold', color: 'bg-gray-500/10 text-gray-400' },
  { value: 'replied', label: 'Replied', color: 'bg-blue-500/10 text-blue-400' },
  { value: 'sample_sent', label: 'Sample Sent', color: 'bg-purple-500/10 text-purple-400' },
  { value: 'call_booked', label: 'Call Booked', color: 'bg-yellow-500/10 text-yellow-400' },
  { value: 'kit_shipped', label: 'Kit Shipped', color: 'bg-emerald-500/10 text-emerald-400' },
  { value: 'passed', label: 'Passed', color: 'bg-red-500/10 text-red-400' },
];

// QUALIFICATION FILTER (calibrado mai/2026 com Gabriel):
// 1. Faz VIDEOS/EPISODIOS ESPECIFICOS avaliando cards UFC ou lutadores.
//    Formato CONSISTENTE e RECORRENTE (semanal, alinhado ao calendario UFC).
// 2. Nao e apenas pagina de noticia. Tem opiniao/analise/predictions/breakdown
//    como formato principal — kit so faz sentido pra quem fala SOBRE a luta.
// 3. Nao e MICRO MICRO. Threshold pratico: 10K+ no canal principal, OU
//    monetizacao real (Patreon paid, paid pod, paid Discord, paid course,
//    institucional CBS/Action Network/RotoGrinders/TSN), OU persona tier-1
//    (ex-campeao UFC com pod proprio).
// 4. TEM canal de contato (IG handle, email, Twitter, Substack, site).
//
// FORA do ICP (NAO incluir):
// - News outlets puros (MMA Junkie, Bloody Elbow, LaSueur, AG Fight, Combate)
// - Highlight/clip pages (Freak MMA, Red Corner, vukoje, Fullsend, Standemup,
//   Mmauncensored, Unforgettable MMA, MMA Addict Only)
// - Meme/aggregator (BedTime MMA, Fightbasics)
// - Oddsmaker oficiais (Kalikas — ele cria linha, nao precisa de pick)
// - Reporters/interview-only (James Lynch, Jaiden Cable, Aaron Bronsteter)
// - Multi-sport (UFC nao e foco recorrente — Erick Tipster style)
// - Ex-lutadores SEM pod proprio (so postam opinioes esporadicas — Cigano, Maia)
// - Drift de tema (saiu do MMA pra politica, etc — Jesse On Fire)
// - Sem canal de contato identificavel (MMALabs, Fight Commentary Breakdowns)
export const CREATORS: Creator[] = [
  { id: 5, name: 'Matty Bets', igHandle: '@mattybetss', igUrl: 'https://instagram.com/mattybetss', ytUrl: 'https://youtube.com/@MattyBets', confidence: 'HIGH', isPriority: true, notes: '233K. Betting picks creator (own opinion). 2 esses no final' },
  { id: 27, name: 'Dan Hardy', igHandle: '@danhardymma', igUrl: 'https://instagram.com/danhardymma', ytUrl: 'https://youtube.com/@DanHardyFR', confidence: 'HIGH', notes: '255K. Ex-UFC, analyst/commentator (Sky Sports). Full Reptile YT (own brand) + Aftermath show. Talking-head breakdowns' },
  { id: 12, name: 'Morning Kombat', igHandle: '@morningkombat', igUrl: 'https://instagram.com/morningkombat', ytUrl: 'https://youtube.com/c/morningkombat', confidence: 'HIGH', notes: '295K. CBS Sports analytical show (Luke Thomas + Brian Campbell)' },
  { id: 1, name: 'MMA On Point', igHandle: '@mmaonpoint', igUrl: 'https://instagram.com/mmaonpoint', ytUrl: 'https://youtube.com/@mmaonpoint', confidence: 'HIGH', notes: 'Predictions + breakdown content, established channel' },
  { id: 3, name: 'The MMA Guru', igHandle: '@themmaguru_promoter', igUrl: 'https://instagram.com/themmaguru_promoter', ytUrl: 'https://youtube.com/@TheMMAGuru', confidence: 'MEDIUM', notes: 'Predictions YT channel, established' },
  { id: 14, name: 'Half The Battle', igHandle: '@halfthebattlepod', igUrl: 'https://instagram.com/halfthebattlepod', ytUrl: 'https://youtube.com/@HalfTheBattleOfficial', confidence: 'HIGH', isPriority: true, notes: 'Host: Daniel Levi. Pod predictions roundtable desde 2015 (longest standing UFC predictions show). Ja interessado, kit construido' },
  { id: 16, name: 'Lucrative James', igHandle: '@lucrative.james', igUrl: 'https://instagram.com/lucrative.james', ytUrl: 'https://youtube.com/@LucrativeJames', confidence: 'HIGH', notes: 'James Blissett. Pod weekly full-card breakdowns. Paid SubLaunch ($44/wk-$3499 lifetime) + free Telegram. Email: lucrativebettingtips@hotmail.com. Ponto no handle' },
  { id: 50, name: 'UFC Picker', igHandle: '@ufc_picker', igUrl: 'https://instagram.com/ufc_picker', confidence: 'MEDIUM', notes: '33K. Picks-focused. Underscore' },
  { id: 53, name: 'Home of Picks', igHandle: '@homeofpicks', igUrl: 'https://instagram.com/homeofpicks', confidence: 'HIGH', notes: '23K. Picks-focused' },
  { id: 60, name: 'Rob Brown Betting', igHandle: '@robbrownbetting', igUrl: 'https://instagram.com/robbrownbetting', confidence: 'HIGH', notes: 'Pro MMA handicapper, 10yr tracked, robbrownbetting.com (paid)' },
  { id: 63, name: 'MagicM', igHandle: '@magicm_mma', igUrl: 'https://instagram.com/magicm_mma', confidence: 'HIGH', notes: 'Tracked betmma.tips, co-host Magic & Andrew MMA Betting Show (paid)' },
  { id: 64, name: 'Kyle Marley', igHandle: '@bigmarley3', igUrl: 'https://instagram.com/bigmarley3', confidence: 'HIGH', notes: 'CBS SportsLine MMA handicapper, MMAOddsBreaker desde 2018' },
  { id: 66, name: 'Santino DeFranco', igHandle: '@santinodefranco', igUrl: 'https://instagram.com/santinodefranco', ytUrl: 'https://youtube.com/channel/UCiJqyVe5ipeTe6IN_Vneddg', confidence: 'HIGH', notes: 'BJJ black belt, UFC coach (Cejudo, KZ, Figueiredo, Cortez), co-host MMA Breakdowns and Bets com Brandan Olivas. Patreon ativo (paid)' },
  { id: 68, name: 'Punchlist MMA', igHandle: '@punchlistmma', igUrl: 'https://instagram.com/punchlistmma', ytUrl: 'https://youtube.com/channel/UCnhBjNB0dLlF7ygYySqQcew', confidence: 'HIGH', notes: 'Dale "The Beard" + Trey "The Entrey". #1 MMA betting pod no iTunes (paid). Drops weekly antes de cada UFC card' },
  { id: 70, name: 'MMA Lock-Cast', igHandle: '@mmalotn', igUrl: 'https://instagram.com/mmalotn', ytUrl: 'https://youtube.com/channel/UClwn3zgkfyne2Ecj36Dl7ZQ', confidence: 'MEDIUM', notes: 'Manpreet Jhass. UFC + Bellator full cards bottom-to-top. Patreon ativo + Discord. Hail Mary parlays' },
  { id: 72, name: 'MMA Betting Czar', igHandle: '@mmabettingczar', igUrl: 'https://instagram.com/mmabettingczar', confidence: 'HIGH', notes: '15K + paid betting tips, "Simpletons into Sharks"' },
  { id: 74, name: 'Liam Heslin', igHandle: '@liampicksfights', igUrl: 'https://instagram.com/liampicksfights', confidence: 'HIGH', notes: 'RotoGrinders MMA DFS writer (institucional) + premium pod (paid). HTB roundtable' },
  { id: 75, name: 'Fight Night Bets', igHandle: '@fightnightbets', igUrl: 'https://instagram.com/fightnightbets', confidence: 'HIGH', notes: '14K + tracked +750u + fightnightbets.co membership (paid)' },
  { id: 105, name: 'MMA Experts (AJ Devito)', igHandle: '@mma_experts', igUrl: 'https://instagram.com/mma_experts', ytUrl: 'https://youtube.com/@MMAExperts', confidence: 'HIGH', notes: '56-58K YT, 12M+ views, 4 videos/semana. UFC predictions, fight companions, livestreams. IG so 4.7K mas YT e canal principal' },
  { id: 107, name: 'Fight Disciples', igHandle: '@thefightdisciples', igUrl: 'https://instagram.com/thefightdisciples', ytUrl: 'https://youtube.com/channel/UCNfSq-sz-GfOM9xM3d-upiA', confidence: 'HIGH', isPriority: true, notes: '21K IG. UK pod multi-award (Best Sports Podcast British Podcast Awards 2x). Adam Catterall + Nick Peet. Full UFC + Boxing + NETBET partnership (institucional). Patreon ad-free' },
  { id: 109, name: 'Jack Slack', igHandle: '@jackslackmma', igUrl: 'https://instagram.com/jackslackmma', confidence: 'HIGH', isPriority: true, notes: 'Striking analyst legend, ex-Bleacher Report/Fightland. Patreon: 6.6K paid members, ~$14K/mes. IG so 2K mas Patreon e o sinal real' },
  { id: 110, name: 'Connor Ruebusch', igHandle: '@boxingbusch', igUrl: 'https://instagram.com/boxingbusch', confidence: 'MEDIUM', notes: 'Co-host MMA Vivisection (Bloody Elbow, prelims show separado!) + Heavy Hands. Substack "Finer Points of Face Punching" + Patreon' },
  { id: 112, name: 'Bookie Beatdown', igHandle: '@bookiebeatdownbets', igUrl: 'https://instagram.com/bookiebeatdownbets', confidence: 'HIGH', notes: 'Cody Saftic + Paul Shaughnessy. Cody contribui DraftKings/PrizePicks/CoolBet/Fight Network. Patreon ativo (paid). Institutional handicapper' },
  { id: 117, name: 'Severe MMA', igHandle: '@severemma', igUrl: 'https://instagram.com/severemma', ytUrl: 'https://youtube.com/channel/UCpPJZXMWn-MYc1jNwzI-rSw', confidence: 'MEDIUM', notes: 'Irish pod desde 2011 (Sean Sheehan + Graeme McDonnell). Patreon premium 1000+ extra eps em severemma.com/patreon. Sean apresenta The Sheehan Show no Sherdog Radio. 600+ episodios. Full UFC + Irish MMA + documentaries' },
  { id: 122, name: 'Inside The Distance (MadLabMMA)', igHandle: '@madlabmma', igUrl: 'https://instagram.com/madlabmma', confidence: 'MEDIUM', notes: 'Anthony Bush + Mike Iurato. Apple 5/5. Top 5 fight breakdowns, DFS, recommended wagers, weekly recap accountability' },
  { id: 104, name: 'TheWeasle MMA', igHandle: null, igUrl: null, ytUrl: 'https://youtube.com/@TheWeasleMMA', confidence: 'NOT_FOUND', notes: '300K+ YT, 130M+ views. MMA Examiner-style breakdowns, hosts "MMA Meeting" pod. IG nao identificado, outreach via X/email' },
  { id: 121, name: 'MMA Vivisection (Zane Simon + Connor Ruebusch)', igHandle: null, igUrl: null, confidence: 'NOT_FOUND', isPriority: true, notes: 'Bloody Elbow preview pod. TEM EPISODIO SEPARADO so para PRELIMS - hook "voce cobre prelims" pega aqui mais que em qualquer outro. ICP perfeito. Outreach Substack/X' },
  { id: 127, name: 'Stokastic MMA DFS', igHandle: null, igUrl: null, ytUrl: 'https://youtube.com/@StokasticMMA', confidence: 'NOT_FOUND', notes: 'Greg Ehrenberg, DFS focus. Stokastic Sims (paid product Awesemo network). YT regular UFC DFS preview. Apple 4.3/5. Outreach via Twitter/site' },
  // ─── Long-form UFC content additions (mai/2026) — descoberta deep research ───
  { id: 130, name: 'The Sound of Violence (Dan Tom)', igHandle: null, igUrl: null, ytUrl: 'https://youtube.com/@thesoundofviolencepodcast', confidence: 'NOT_FOUND', notes: 'Dan Tom MMA. Technique-nerd preview/post fight pod, full UFC card breakdowns + weekly Top-5 categories. Substack dantommma.substack.com + thesoundofviolence.com. X: @TSOVpod. IG nao identificado, outreach via X/site' },
  { id: 131, name: 'The Fight Site (Feno)', igHandle: null, igUrl: null, ytUrl: 'https://youtube.com/@FenoTFS', confidence: 'NOT_FOUND', isPriority: true, notes: 'Feno (analyst). Combat sports think tank, multi-pod (MMA + Wrestling for MMA + TENGRIDOME). Patreon ativo (571 membros, $283/mes). Site thefight-site.com. X: @FenoXSky, Threads: @feno_tfs. ICP perfeito pra kit re-skin' },
  { id: 134, name: 'Fighting with Numbers (Rob Moreno)', igHandle: '@therobbeo', igUrl: 'https://instagram.com/TheRobbeo', confidence: 'HIGH', isPriority: true, notes: 'Roberto Moreno. Model-driven UFC betting pod (xR% metric, octagon-data only). VSiN First Strike weekly host (Wed) + own pod. Substack FightNumbers + TikTok @TheRobbeo. Algorithm-literate, perfeito match com nosso pitch de gates' },
  { id: 135, name: 'Believe You Me Pod (Bisping)', igHandle: '@bympod', igUrl: 'https://instagram.com/bympod', ytUrl: 'https://youtube.com/channel/UCMTmbsnNJ8zj7E0UZfsoS7A', confidence: 'HIGH', isPriority: true, notes: 'Michael Bisping (ex-UFC champ) + co-host. GaS Digital Network. Twice weekly UFC pre/post + interviews. Tier-1 institutional. IG pessoal Bisping: @mikebisping. Anthony Smith saiu fev/2025, Felder voltou ou solo' },
  // ─── PT-BR research batch (mai/2026) — gap fill brasileiro ───
  // Verificacao: handles confirmados via Google SERP (IG bloqueou WebFetch direto com 429)
  { id: 139, name: 'MMA Hoje', igHandle: '@mmahoje', igUrl: 'https://instagram.com/mmahoje', ytUrl: 'https://youtube.com/@MMAHoje', email: null, confidence: 'HIGH', isPriority: true, notes: '~245K IG, +800M views YT. Top 20 podcast Brasil em Spotify/Apple. Palpites e analises de cards UFC com opiniao propria. ICP forte.' },
  { id: 140, name: 'Sexto Round', igHandle: '@sextoroundmma', igUrl: 'https://instagram.com/sextoroundmma', ytUrl: 'https://youtube.com/sextoround', email: 'sextoround@gmail.com', confidence: 'HIGH', isPriority: true, notes: '~160K IG. Curado pelo jornalista Renato Rebelo (Andre Azevedo + Lucas Carrano hosts). Analise tecnica + podcast semanal UFC. Patrocinio Stake' },
  { id: 142, name: 'Carlos Figueira MMA', igHandle: '@carlosfigueiramma', igUrl: 'https://instagram.com/carlosfigueiramma', ytUrl: 'https://youtube.com/c/carlosfigueiramma', email: 'figueiracarlos1955@gmail.com', confidence: 'HIGH', isPriority: true, notes: '~181K IG + 250K YT + 250K TikTok. Jornalista MMA independente. "MEU PALPITE" formato proprio. Patrocinio Stake (codigo FIGUEIRAUFC). ICP perfeito' },
  { id: 143, name: 'Galera Boa de Luta (Andre Azevedo)', igHandle: '@andreazevedomma', igUrl: 'https://instagram.com/andreazevedomma', ytUrl: 'https://youtube.com/@galeraboadeluta', email: null, confidence: 'HIGH', notes: '~118K IG, faixa preta BJJ. Narrador oficial UFC Brasil/Paramount+ com canal proprio "Galera Boa de Luta". 2 videos/semana de previas e palpites do card principal e prelim' },
  { id: 144, name: 'Cornercast (Vitor Miranda)', igHandle: '@vitormiranda_ufc', igUrl: 'https://instagram.com/vitormiranda_ufc', ytUrl: 'https://youtube.com/@VitorMiranda_UFC', email: null, confidence: 'HIGH', notes: '~101K IG. Ex-lutador UFC, analista oficial UFC Brasil, hosta Cornercast. Bio: "Analista e Comentarista de lutas". Convidado recorrente Resenha UFC Band, Overdogs' },
  { id: 145, name: 'Renato Moicano', igHandle: '@renato_moicano_ufc', igUrl: 'https://instagram.com/renato_moicano_ufc', ytUrl: 'https://youtube.com/@RenatoMoneyMoicano', email: null, confidence: 'HIGH', isPriority: true, notes: '~755K IG, ~300K YT (Renato Money Moicano), 25M+ views, 330+ videos. Lutador UFC ativo + criador + co-host Overdogs Brasil. Opiniao forte sobre cards' },
  { id: 146, name: 'Overdogs Brasil', igHandle: '@overdogs_brasil', igUrl: 'https://instagram.com/overdogs_brasil', ytUrl: 'https://youtube.com/@OverdogsBrasil', email: null, confidence: 'HIGH', notes: '~7K IG (lancado 2025) mas backed por Moicano + Parrumpa + Glover. Analises cards UFC, bastidores, predicoes. Patrocinio Strike Token + Overdogs Bet' },
  { id: 147, name: 'Dos Nossos Podcast (Werdum)', igHandle: '@dosnossospod', igUrl: 'https://instagram.com/dosnossospod', ytUrl: 'https://youtube.com/channel/UCPx9Y27gXgfCy4jYrpMovCA', email: 'felipones1977@gmail.com', confidence: 'HIGH', notes: '@werdum pessoal ~2M, podcast 28K. Werdum (ex-campeao UFC PP, triplice coroa UFC/ADCC/BJJ) + Cigano. 2x/semana com analises e ex-lutadores convidados' },
  { id: 148, name: 'Glover Teixeira', igHandle: '@gloverteixeira', igUrl: 'https://instagram.com/gloverteixeira', ytUrl: 'https://youtube.com/@OverdogsBrasil', email: null, confidence: 'HIGH', notes: '~628K IG. Ex-campeao UFC meio-pesado, treinador de Poatan e Jiri. Hosta show "Overdogs Brasil com Glover Teixeira" no Spotify dando analise tecnica. Maker of Champions' },
  { id: 149, name: 'Marcos "Parrumpa" da Matta (ATT)', igHandle: '@parrumpaatt', igUrl: 'https://instagram.com/parrumpaatt', email: null, confidence: 'HIGH', notes: '~66K IG. Diretor tecnico American Top Team, treinador de Pantoja, faixa preta Carlson Gracie 1997. Faz picks/predictions ativamente nos stories. Co-host Overdogs Brasil' },
  // ─── EN gap-fill batch (mai/2026) — analystas/podcasts nao listados ainda ───
  { id: 154, name: 'Lawrence Kenshin (Striking Breakdowns)', igHandle: '@lawrencekenshin1', igUrl: 'https://instagram.com/lawrencekenshin1', ytUrl: 'https://youtube.com/@lawrencekenshin', email: 'lawrencekenshin@gmail.com', confidence: 'HIGH', isPriority: true, notes: '~600K YT, 337K IG. Pure technical striking breakdowns of UFC/MT/kickboxing. Heavy monetization via paid Striking Academy (Legendary Striking Tactics). Endorsed by Firas Zahabi. 10+ years opinion-driven analytical content' },
  { id: 156, name: 'Pound 4 Pound (Usman + Cejudo)', igHandle: '@pound4pound', igUrl: 'https://instagram.com/pound4pound', ytUrl: 'https://youtube.com/@Pound4PoundwithKamaruHenry', email: null, confidence: 'HIGH', isPriority: true, notes: '91K IG. Two ex-UFC champs (Kamaru Usman + Henry Cejudo) do weekly card breakdowns + predictions. Independent Shadow Lion Production. Strong opinion content' },
  { id: 159, name: 'Sean Zerillo (Action Network MMA)', igHandle: null, igUrl: null, ytUrl: 'https://youtube.com/@actionnetwork', email: null, confidence: 'HIGH', notes: '15.2K Twitter @SeanZerillo. Institutional UFC analyst at Action Network using proprietary projection models. Law degree + finance-compliance bg. Per-fight predictions + betting previews. Outreach via Twitter/Action Network email' },
  { id: 161, name: 'Killshot MMA (DFS Army)', igHandle: '@killshotmma', igUrl: 'https://instagram.com/killshotmma', ytUrl: 'https://youtube.com/@MMADFS', email: null, confidence: 'HIGH', notes: '21K IG. DFS Army flagship UFC pod - DraftKings strategy + picks every UFC card. Monetization via DFS Army VIP/paid product. Active weekly' },
];

export const DM_TEMPLATE = `[name] — half the reason I'm DMing is that you actually cover prelims. Most don't. Built something for fight week with that exact creator in mind. Showing it to 4-5 people before it's public — want a look?`;

export const DM_TIPS = [
  'Nao mande link na primeira DM (anti-spam do IG bloqueia)',
  'Personalize a primeira frase com referencia ao conteudo recente do criador',
  'Quando ele responder ("what is it?"), ai sim manda o link',
];
