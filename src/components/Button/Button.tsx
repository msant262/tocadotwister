import type { ButtonHTMLAttributes, ReactNode, ElementType } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'as'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  as?: ElementType
  to?: string
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  as,
  to,
  ...props 
}: ButtonProps) => {
  const Component = as || (to ? Link : 'button')
  const componentProps = to ? { to } : {}
  
  return (
    <Component
      className={`btn btn-${variant} btn-${size} ${className}`}
      {...componentProps}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button

