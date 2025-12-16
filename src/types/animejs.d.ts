declare module 'animejs' {
  export interface AnimeParams {
    targets?: string | HTMLElement | NodeList | null | Array<string | HTMLElement>
    duration?: number | ((target: HTMLElement) => number)
    delay?: number | ((target: HTMLElement, index: number) => number)
    endDelay?: number | ((target: HTMLElement) => number)
    elasticity?: number | ((target: HTMLElement) => number)
    round?: number | boolean
    loop?: number | boolean
    autoplay?: boolean
    direction?: 'normal' | 'reverse' | 'alternate'
    easing?: string | ((el: number, index: number, total: number) => number)
    opacity?: number | number[] | string
    translateY?: number | number[] | string
    [key: string]: any
  }

  export interface AnimeInstance {
    play: () => void
    pause: () => void
    restart: () => void
    reverse: () => void
    seek: (time: number) => void
    [key: string]: any
  }

  export interface StaggerOptions {
    grid?: [number, number]
    from?: 'first' | 'last' | 'center' | number
    axis?: 'x' | 'y'
    [key: string]: any
  }

  export function stagger(
    value: number | number[] | string,
    options?: StaggerOptions
  ): (el: HTMLElement, index: number) => number

  interface Anime {
    (params: AnimeParams): AnimeInstance
    stagger: typeof stagger
  }

  const anime: Anime
  export default anime
}

