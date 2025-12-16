// Configuração centralizada de artigos
// Para adicionar um novo artigo, basta adicionar uma entrada aqui!

export interface ArtigoConfig {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedDate?: string
  featured?: boolean
}

export const artigosConfig: ArtigoConfig[] = [
  {
    slug: 'cheira-mal',
    title: 'Rato Twister cheira mal? Como evitar odores na gaiola',
    excerpt: 'Aprenda como manter uma gaiola praticamente sem odores desagradáveis com os cuidados adequados. Guia completo com dicas práticas e produtos recomendados.',
    category: 'Cuidados Básicos',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'nao-ter-apenas-um',
    title: 'Por que não posso ter apenas um rato Twister?',
    excerpt: 'Entenda a regra de ouro: ratos são animais de colônia e nunca devem ser mantidos sozinhos. Descubra por quê e como garantir o bem-estar dos seus ratos.',
    category: 'Comportamento',
    readTime: '7 min',
    featured: true,
  },
  {
    slug: 'alimentos-toxicos',
    title: 'Lista completa de alimentos tóxicos para ratos',
    excerpt: 'Conheça todos os alimentos que você deve evitar para manter seus Twisters seguros e saudáveis. Inclui explicações sobre por que são perigosos.',
    category: 'Alimentação',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'custo-brasil',
    title: 'Quanto custa ter um rato Twister no Brasil?',
    excerpt: 'Tabela completa de gastos iniciais, mensais e ocasionais para planejar financeiramente. Inclui dicas de economia e alternativas brasileiras.',
    category: 'Guia Financeiro',
    readTime: '6 min',
    featured: false,
  },
  {
    slug: 'apresentar-rato',
    title: 'Como apresentar um rato novo para o grupo',
    excerpt: 'Guia passo a passo para introduzir um novo rato ao grupo existente de forma segura. Métodos testados e dicas para evitar conflitos.',
    category: 'Comportamento',
    readTime: '10 min',
    featured: false,
  },
]

// Função helper para obter artigo por slug
export const getArtigoBySlug = (slug: string): ArtigoConfig | undefined => {
  return artigosConfig.find(artigo => artigo.slug === slug)
}

// Função helper para obter artigos por categoria
export const getArtigosByCategory = (category: string): ArtigoConfig[] => {
  return artigosConfig.filter(artigo => artigo.category === category)
}

// Função helper para obter artigos em destaque
export const getFeaturedArtigos = (): ArtigoConfig[] => {
  return artigosConfig.filter(artigo => artigo.featured)
}

// Função helper para obter todas as categorias únicas
export const getCategories = (): string[] => {
  const categories = artigosConfig.map(artigo => artigo.category)
  return Array.from(new Set(categories)).sort()
}

