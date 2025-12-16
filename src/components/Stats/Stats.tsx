import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Stats.css'

interface StatItem {
  number: string
  label: string
  icon: string
}

const stats: StatItem[] = [
  { number: '2-3', label: 'Anos de vida', icon: '⏱️' },
  { number: '2+', label: 'Ratos mínimo', icon: '🐭' },
  { number: '0.5m³', label: 'Volume por rato', icon: '📏' },
  { number: '100%', label: 'Sociáveis', icon: '❤️' },
]

const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (statsRef.current) {
      const items = statsRef.current.querySelectorAll('.stat-item')
      anime({
        targets: items,
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: (_el, i) => i * 100,
        duration: 600,
        easing: 'easeOutElastic(1, .6)',
      })
    }
  }, [])

  return (
    <section className="stats-section">
      <div className="stats-container" ref={statsRef}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats

