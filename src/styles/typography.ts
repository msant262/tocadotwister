// Sistema de Tipografia - Toca do Twister
export const typography = {
  // Fontes
  fontFamily: {
    heading: "'Fredoka', sans-serif",
    body: "'Lato', sans-serif",
  },
  
  // Tamanhos (Mobile First)
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },
  
  // Pesos
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line heights
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const

export type FontSizeKey = keyof typeof typography.fontSize
export type FontWeightKey = keyof typeof typography.fontWeight
export type LineHeightKey = keyof typeof typography.lineHeight

export default typography

