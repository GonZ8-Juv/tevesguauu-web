import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-[24px] bg-white p-6 shadow-[0_16px_40px_rgba(247,175,197,0.18)] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(247,175,197,0.24)] ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
