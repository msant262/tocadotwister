import type { ReactNode } from 'react'
import './HighlightBox.css'

interface HighlightBoxProps {
  children: ReactNode
  variant?: 'info' | 'warning' | 'success' | 'danger'
  icon?: string
  className?: string
}

const HighlightBox = ({ children, variant = 'info', icon, className = '' }: HighlightBoxProps) => {
  return (
    <div className={`highlight-box highlight-box-${variant} ${className}`}>
      {icon && <div className="highlight-icon">{icon}</div>}
      <div className="highlight-content">{children}</div>
    </div>
  )
}

export default HighlightBox

