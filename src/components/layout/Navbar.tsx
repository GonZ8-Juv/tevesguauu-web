import { type MouseEvent, useEffect, useState } from 'react'
import logoTeVesGuauu from '../../assets/logos/Fondo transp navbar.png'
import peluqueriaLabel from '../../assets/logos/Peluqueria.png'
import { company } from '../../data/company'
import Container from '../ui/Container'

const navigationLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Recomendaciones', href: '#recomendaciones' },
  { label: 'Galería', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function handleNavigationClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (href !== '#inicio') {
      closeMenu()
      return
    }

    event.preventDefault()
    closeMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        hasScrolled || isMenuOpen
          ? 'border-b border-[#D94A7F]/40 bg-[#E85A93]/90 shadow-[0_8px_28px_rgba(232,90,147,0.22)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent shadow-none'
      }`}
    >
      <Container>
        <nav className="relative flex min-h-[4.5rem] items-center justify-between gap-1 py-0 sm:gap-2 lg:min-h-[5.5rem] lg:gap-4">
          <a
            href="#inicio"
            className="absolute -left-3 z-10 flex w-24 shrink-0 items-center sm:-left-4 sm:w-32 lg:static lg:-ml-36 lg:w-auto"
            aria-label="Ir al inicio"
            onClick={(event) => handleNavigationClick(event, '#inicio')}
          >
            <span className="relative h-20 w-24 shrink-0 overflow-visible sm:h-[5rem] sm:w-32 lg:h-28 lg:w-56">
              <img
                src={logoTeVesGuauu}
                alt="Logo de TE VES GUAUU"
                className="h-full w-full origin-left -translate-x-[30%] scale-[2.05] object-contain sm:scale-[2.2] lg:-translate-x-[44%] lg:scale-[2.8]"
              />
            </span>
          </a>

          <img
            src={peluqueriaLabel}
            alt="Peluquería canina"
            className={`pointer-events-none absolute left-[55%] top-1/2 h-16 w-28 -translate-x-1/2 -translate-y-1/2 object-contain opacity-95 min-[390px]:w-36 sm:h-20 sm:w-44 lg:hidden ${
              hasScrolled || isMenuOpen
                ? 'drop-shadow-[0_0_1px_rgba(255,255,255,1)] drop-shadow-[0_0_3px_rgba(255,255,255,1)] drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]'
                : 'drop-shadow-sm'
            }`}
          />

          <button
            type="button"
            className={`ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition duration-300 ease-out lg:hidden ${
              hasScrolled || isMenuOpen ? 'text-white hover:bg-white/15' : 'text-[#2B2B2B] hover:bg-white/70'
            }`}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span className="relative h-5 w-6" aria-hidden="true">
              <span
                className={`absolute left-1 top-1.5 h-0.5 w-4 rounded-full bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-1 top-3.5 h-0.5 w-4 rounded-full bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>

          <div className="hidden flex-1 items-center justify-between gap-8 lg:flex">
            <img
              src={peluqueriaLabel}
              alt=""
              aria-hidden="true"
              className={`ml-8 h-24 w-80 object-contain opacity-95 ${
                hasScrolled
                  ? 'drop-shadow-[0_0_1px_rgba(255,255,255,1)] drop-shadow-[0_0_3px_rgba(255,255,255,1)] drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]'
                  : 'drop-shadow-sm'
              }`}
            />

            <div className="flex items-center gap-10">
              <ul
                className={`flex items-center gap-8 text-lg font-semibold transition-colors duration-300 ${
                  hasScrolled ? 'text-white' : 'text-[#2B2B2B]'
                }`}
              >
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                  href={link.href}
                  className={`transition duration-200 ${
                    hasScrolled ? 'hover:text-[#FFEAF2]' : 'hover:text-[#D94A7F]'
                  }`}
                  onClick={(event) => handleNavigationClick(event, link.href)}
                >
                    {link.label}
                  </a>
                </li>
              ))}
              </ul>

              <a
                href={company.whatsapp}
                className={`inline-flex whitespace-nowrap items-center justify-center rounded-[10px] px-8 py-4 text-lg font-bold text-white transition duration-200 ${
                  hasScrolled
                    ? 'bg-[#F7AFC5] shadow-[0_12px_28px_rgba(43,43,43,0.12)] hover:bg-[#FFD1DF]'
                    : 'bg-[#E85A93] shadow-[0_12px_28px_rgba(232,90,147,0.22)] hover:bg-[#D94A7F]'
                }`}
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </nav>

        <div
          id="mobile-navigation"
          className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-white/20 pb-5 pt-4 lg:hidden`}
        >
          <ul className="flex flex-col items-center gap-3 text-lg font-bold text-white">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-[20px] px-4 py-2 transition duration-200 hover:bg-white/15 hover:text-[#FFEAF2]"
                  onClick={(event) => handleNavigationClick(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
