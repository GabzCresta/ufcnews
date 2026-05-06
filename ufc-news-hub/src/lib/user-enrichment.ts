/**
 * Inferência automática de dados do usuário baseado em email e nome.
 * Roda no cadastro e pode ser re-rodado em batch.
 */

interface InferredData {
  pais_inferido: string | null;
  idioma_inferido: string | null;
  faixa_etaria: string | null;
}

// Domínios de email → país
const EMAIL_DOMAIN_COUNTRY: Record<string, { pais: string; idioma: string }> = {
  'orange.fr': { pais: 'Franca', idioma: 'fr' },
  'free.fr': { pais: 'Franca', idioma: 'fr' },
  'sfr.fr': { pais: 'Franca', idioma: 'fr' },
  'laposte.net': { pais: 'Franca', idioma: 'fr' },
  'wanadoo.fr': { pais: 'Franca', idioma: 'fr' },
  'yahoo.fr': { pais: 'Franca', idioma: 'fr' },
  'hotmail.fr': { pais: 'Franca', idioma: 'fr' },
  'telefonica.es': { pais: 'Espanha', idioma: 'es' },
  'yahoo.es': { pais: 'Espanha', idioma: 'es' },
  'hotmail.es': { pais: 'Espanha', idioma: 'es' },
  'terra.com.br': { pais: 'Brasil', idioma: 'pt' },
  'uol.com.br': { pais: 'Brasil', idioma: 'pt' },
  'bol.com.br': { pais: 'Brasil', idioma: 'pt' },
  'globo.com': { pais: 'Brasil', idioma: 'pt' },
  'hotmail.com.br': { pais: 'Brasil', idioma: 'pt' },
  'yahoo.com.br': { pais: 'Brasil', idioma: 'pt' },
  'outlook.com.br': { pais: 'Brasil', idioma: 'pt' },
  'mail.ru': { pais: 'Russia', idioma: 'en' },
  'yandex.ru': { pais: 'Russia', idioma: 'en' },
  'yahoo.co.uk': { pais: 'Reino Unido', idioma: 'en' },
  'hotmail.co.uk': { pais: 'Reino Unido', idioma: 'en' },
  'yahoo.com.mx': { pais: 'Mexico', idioma: 'es' },
  'hotmail.com.mx': { pais: 'Mexico', idioma: 'es' },
};

// Nomes tipicamente brasileiros
const BRAZILIAN_NAMES = [
  'joao', 'jose', 'pedro', 'paulo', 'lucas', 'matheus', 'gabriel', 'rafael',
  'guilherme', 'bruno', 'gustavo', 'rodrigo', 'thiago', 'felipe', 'andre',
  'maria', 'ana', 'juliana', 'fernanda', 'camila', 'bruna', 'thais', 'leticia',
  'larissa', 'isabela', 'beatriz', 'carolina', 'amanda', 'vitoria', 'luana',
  'cresta', 'silva', 'santos', 'oliveira', 'souza', 'lima', 'pereira', 'costa',
  'ferreira', 'almeida', 'nascimento', 'carvalho', 'gomes', 'martins', 'araujo',
  'ribeiro', 'barbosa', 'rocha', 'dias', 'monteiro', 'mendes', 'barros',
];

// Nomes tipicamente franceses
const FRENCH_NAMES = [
  'jean', 'pierre', 'jacques', 'francois', 'philippe', 'michel', 'alain',
  'marie', 'claire', 'sophie', 'isabelle', 'monique', 'jules', 'louis',
  'henri', 'rene', 'yves', 'thierry', 'laurent', 'nicolas', 'sebastien',
];

// Nomes tipicamente hispânicos
const SPANISH_NAMES = [
  'juan', 'carlos', 'miguel', 'alejandro', 'diego', 'javier', 'sergio',
  'rosa', 'carmen', 'lucia', 'elena', 'marta', 'pilar', 'teresa',
  'raul', 'pablo', 'roberto', 'jorge', 'hector', 'oscar', 'fernando',
];

export function inferUserData(email: string, displayName: string): InferredData {
  const result: InferredData = {
    pais_inferido: null,
    idioma_inferido: null,
    faixa_etaria: null,
  };

  const emailLower = email.toLowerCase();
  const nameLower = (displayName || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const nameParts = nameLower.split(/[\s_.-]+/);

  // 1. Inferir país pelo domínio do email
  const domain = emailLower.split('@')[1];
  if (domain && EMAIL_DOMAIN_COUNTRY[domain]) {
    result.pais_inferido = EMAIL_DOMAIN_COUNTRY[domain].pais;
    result.idioma_inferido = EMAIL_DOMAIN_COUNTRY[domain].idioma;
  }

  // 2. Inferir pelo TLD do email (.fr, .br, .es, .uk)
  if (!result.pais_inferido) {
    if (domain?.endsWith('.fr')) { result.pais_inferido = 'Franca'; result.idioma_inferido = 'fr'; }
    else if (domain?.endsWith('.br')) { result.pais_inferido = 'Brasil'; result.idioma_inferido = 'pt'; }
    else if (domain?.endsWith('.es')) { result.pais_inferido = 'Espanha'; result.idioma_inferido = 'es'; }
    else if (domain?.endsWith('.mx')) { result.pais_inferido = 'Mexico'; result.idioma_inferido = 'es'; }
    else if (domain?.endsWith('.co')) { result.pais_inferido = 'Colombia'; result.idioma_inferido = 'es'; }
    else if (domain?.endsWith('.ar')) { result.pais_inferido = 'Argentina'; result.idioma_inferido = 'es'; }
    else if (domain?.endsWith('.uk')) { result.pais_inferido = 'Reino Unido'; result.idioma_inferido = 'en'; }
    else if (domain?.endsWith('.pt')) { result.pais_inferido = 'Portugal'; result.idioma_inferido = 'pt'; }
  }

  // 3. Inferir pelo nome (se email genérico como gmail.com)
  if (!result.pais_inferido) {
    const isBrazilian = nameParts.some(p => BRAZILIAN_NAMES.includes(p));
    const isFrench = nameParts.some(p => FRENCH_NAMES.includes(p));
    const isSpanish = nameParts.some(p => SPANISH_NAMES.includes(p));

    if (isBrazilian) { result.pais_inferido = 'Brasil'; result.idioma_inferido = 'pt'; }
    else if (isFrench) { result.pais_inferido = 'Franca'; result.idioma_inferido = 'fr'; }
    else if (isSpanish) { result.pais_inferido = 'Espanha'; result.idioma_inferido = 'es'; }
  }

  // 4. Default: se nada encontrado, assume inglês (público UFC internacional)
  if (!result.idioma_inferido) {
    result.idioma_inferido = 'en';
  }

  // 5. Inferir faixa etária por padrões no email
  const yearMatch = emailLower.match(/(?:19|20)(\d{2})/);
  if (yearMatch) {
    const year = parseInt((parseInt(yearMatch[1]) > 50 ? '19' : '20') + yearMatch[1]);
    const age = new Date().getFullYear() - year;
    if (age >= 13 && age <= 17) result.faixa_etaria = '13-17';
    else if (age >= 18 && age <= 25) result.faixa_etaria = '18-25';
    else if (age >= 26 && age <= 35) result.faixa_etaria = '25-35';
    else if (age >= 36 && age <= 50) result.faixa_etaria = '35-50';
    else if (age > 50) result.faixa_etaria = '50+';
  }

  // Palavras-chave de idade no email
  if (!result.faixa_etaria) {
    if (emailLower.includes('college') || emailLower.includes('uni') || emailLower.includes('student')) {
      result.faixa_etaria = '18-25';
    }
  }

  return result;
}
