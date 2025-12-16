// Sistema de Cores - Toca do Twister
export const colors = {
  // Verde Sálvia - Natureza, saúde e alimentação natural
  sageGreen: '#8FBC8F',
  
  // Amarelo Mostarda - Energia, inteligência e aspecto lúdico
  mustardYellow: '#FFDB58',
  
  // Branco Off-White - Fundo limpo
  offWhite: '#F8F9FA',
  
  // Cinza Chumbo - Textos e rodapés
  leadGray: '#2F4F4F',
  
  // Azul Bebê - Detalhes de higiene e limpeza
  babyBlue: '#E0FFFF',
  
  // Variações e utilitários
  white: '#FFFFFF',
  black: '#000000',
  
  // Cores semânticas
  success: '#8FBC8F',
  warning: '#FFDB58',
  error: '#DC3545',
  info: '#E0FFFF',
} as const

export type ColorKey = keyof typeof colors

export default colors

