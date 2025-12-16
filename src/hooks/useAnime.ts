import { useEffect, useRef } from 'react'
import anime, { type AnimeParams, type AnimeInstance } from 'animejs'

interface UseAnimeOptions {
  targets: string | HTMLElement | NodeList | null
  animation: AnimeParams
  dependencies?: unknown[]
}

export const useAnime = ({ targets, animation, dependencies = [] }: UseAnimeOptions) => {
  const animationRef = useRef<AnimeInstance | null>(null)

  useEffect(() => {
    if (targets) {
      animationRef.current = anime({
        targets,
        ...animation,
      })
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause()
      }
    }
  }, [targets, ...dependencies])

  return animationRef.current
}

export default useAnime

