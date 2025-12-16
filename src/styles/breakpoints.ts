// Breakpoints - Mobile First
export const breakpoints = {
  sm: '640px',   // Tablets pequenos
  md: '768px',   // Tablets
  lg: '1024px',  // Desktops pequenos
  xl: '1280px',  // Desktops
  '2xl': '1536px', // Desktops grandes
} as const

export type BreakpointKey = keyof typeof breakpoints

export default breakpoints

