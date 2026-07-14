import logoTeVesGuauu from '../../assets/logos/logo-te-ves-guauu.png'
import instagramIcon from '../../assets/images/Instagram.png'
import tiktokIcon from '../../assets/images/Tiktok.png'
import whatsappIcon from '../../assets/images/whatsapp.png'
import { contact } from '../../data/contact'
import Container from '../ui/Container'

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Recomendaciones', href: '#recomendaciones' },
  { label: 'Próximamente', href: '#proximamente' },
  { label: 'Contacto', href: '#contacto' },
]

const socialLinks = [
  { label: 'Instagram', icon: instagramIcon, href: contact.instagramUrl },
  { label: 'TikTok', icon: tiktokIcon, href: contact.tiktokUrl },
  { label: 'WhatsApp', icon: whatsappIcon, href: 'https://wa.me/59891363260' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#EC5B98] text-white">
      <div className="pointer-events-none absolute left-8 top-10 text-5xl text-white/10">🐾</div>
      <div className="pointer-events-none absolute bottom-20 right-10 text-6xl text-white/10">🐾</div>
      <div className="pointer-events-none absolute right-1/3 top-16 hidden text-4xl text-white/10 lg:block">
        ♡
      </div>

      <Container className="relative py-10 sm:py-12">
        <div className="grid items-start gap-8 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative h-20 w-36 overflow-visible">
              <img
                src={logoTeVesGuauu}
                alt="Logo de TE VES GUAUU"
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 object-contain md:left-0 md:translate-x-0"
              />
            </div>
            <p className="mt-3 text-2xl font-extrabold">TE VES GUAUU</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-[0.22em] text-white/75">
              Peluquería Canina
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/85">
              Cuidamos a cada mascota con amor, paciencia y dedicación.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">Explorá</h3>
            <ul className="mt-4 space-y-2 text-sm font-semibold text-white/85">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a className="transition duration-200 hover:text-[#FFF8FA]" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">Contacto</h3>
            <div className="mt-4 space-y-2 text-sm font-semibold leading-6 text-white/85">
              <p>📍 {contact.neighborhood}</p>
              <p>📞 {contact.phoneDisplay}</p>
              <p>✉ {contact.email}</p>
              <p className="pt-2 text-white/75">No realizamos servicio a domicilio.</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">Seguinos</h3>
            <div className="mt-4 flex justify-center gap-3 md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 p-2 transition duration-200 hover:bg-white/25"
                >
                  <img src={link.icon} alt="" className="h-full w-full object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-center">
          <p className="text-sm font-semibold text-white/85">
            © 2026 TE VES GUAUU · Todos los derechos reservados.
          </p>
          <p className="mt-2 text-xs font-medium text-white/70">
            Diseñado y desarrollado por Gonzalo Benítez
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
