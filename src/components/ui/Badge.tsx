import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  className?: string
}

function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full bg-[#F7AFC5]/35 px-3 py-1 text-sm font-bold text-[#D94A7F] ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
