import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
}

function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-16 sm:py-20 lg:scroll-mt-32 lg:py-24 ${className}`}>
      {children}
    </section>
  )
}

export default Section
