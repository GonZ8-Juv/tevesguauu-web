import { useState } from 'react'
import { contact } from '../../data/contact'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

type MobilePanel = 'contact' | 'schedule'

const googleMapsEmbedUrl =
  'https://www.google.com/maps?q=Pedro%20Francisco%20Berro%201289%2C%20Montevideo%2C%20Uruguay&output=embed'

function ContactSection() {
  const [openPanel, setOpenPanel] = useState<MobilePanel | null>(null)

  function togglePanel(panel: MobilePanel) {
    setOpenPanel((currentPanel) => (currentPanel === panel ? null : panel))
  }

  const isContactOpen = openPanel === 'contact'
  const isScheduleOpen = openPanel === 'schedule'

  return (
    <Section id="contacto" className="relative overflow-hidden bg-[#FFF8FA]">
      <div className="pointer-events-none absolute left-6 top-16 text-3xl text-[#F7AFC5]/40">♡</div>
      <div className="pointer-events-none absolute right-8 top-24 text-4xl text-[#E85A93]/15">🐾</div>
      <div className="pointer-events-none absolute -left-16 bottom-16 h-40 w-40 rounded-full bg-[#F7AFC5]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-44 w-44 rounded-full bg-[#E85A93]/10 blur-3xl" />

      <Container className="relative">
        <SectionTitle
          eyebrow="🐾 Estamos para ayudarte"
          title="Contacto"
          description="Escribinos para coordinar un turno o consultar cuál es el mejor servicio para tu mascota."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border border-[#F7AFC5]/25 p-6 sm:p-8">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left md:pointer-events-none"
              aria-expanded={isContactOpen}
              aria-controls="contact-details"
              onClick={() => togglePanel('contact')}
            >
              <span>
                <span className="block text-2xl font-extrabold text-[#E85A93]">Hablemos</span>
                <span className="mt-3 block text-base leading-7 text-[#8A8A8A]">
                  Coordinamos turnos y respondemos tus consultas con gusto.
                </span>
              </span>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF8FA] text-2xl font-bold text-[#E85A93] md:hidden"
                aria-hidden="true"
              >
                {isContactOpen ? '−' : '+'}
              </span>
            </button>

            <div
              id="contact-details"
              className={`${isContactOpen ? 'block' : 'hidden'} mt-6 space-y-4 md:mt-8 md:block`}
            >
              {contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="flex gap-4 rounded-[20px] border border-[#F7AFC5]/25 bg-[#FFF8FA] p-4 text-[#2B2B2B] transition duration-200 hover:border-[#E85A93]/40 hover:bg-white"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-[0_10px_24px_rgba(247,175,197,0.18)]"
                    aria-hidden="true"
                  >
                    {link.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-[#E85A93]">{link.label}</span>
                    <span className="mt-1 block break-words text-sm font-semibold">
                      {link.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <Button
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="whatsapp"
              size="lg"
              className="mt-6 w-full md:mt-8"
              aria-label="Escribir por WhatsApp a TE VES GUAUU"
            >
              Escribir por WhatsApp
            </Button>
          </Card>

          <Card className="border border-[#F7AFC5]/25 p-6 sm:p-8">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left md:pointer-events-none"
              aria-expanded={isScheduleOpen}
              aria-controls="schedule-details"
              onClick={() => togglePanel('schedule')}
            >
              <span>
                <span className="block text-2xl font-extrabold text-[#E85A93]">Horarios</span>
                <span className="mt-3 block text-base leading-7 text-[#8A8A8A]">
                  Te esperamos durante la semana y los sábados.
                </span>
              </span>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF8FA] text-2xl font-bold text-[#E85A93] md:hidden"
                aria-hidden="true"
              >
                {isScheduleOpen ? '−' : '+'}
              </span>
            </button>

            <div
              id="schedule-details"
              className={`${isScheduleOpen ? 'block' : 'hidden'} mt-6 space-y-3 md:mt-8 md:block`}
            >
              {contact.schedule.map((item) => (
                <div
                  key={item.day}
                  className={`flex flex-col gap-1 rounded-[16px] border p-4 sm:flex-row sm:items-center sm:justify-between ${
                    item.closed
                      ? 'border-[#E85A93]/30 bg-[#F7AFC5]/20'
                      : 'border-[#F7AFC5]/25 bg-[#FFF8FA]'
                  }`}
                >
                  <span className="font-bold text-[#2B2B2B]">{item.day}</span>
                  <span
                    className={`font-semibold ${
                      item.closed ? 'text-[#D94A7F]' : 'text-[#8A8A8A]'
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="relative overflow-hidden border border-[#F7AFC5]/25 p-6 sm:p-8 lg:col-span-2">
            <div className="pointer-events-none absolute right-8 top-8 text-3xl text-[#F7AFC5]/35">
              🐾
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
              <div>
                <h3 className="text-2xl font-extrabold text-[#E85A93]">
                  📍 Dónde encontrarnos
                </h3>
                <div className="mt-5 space-y-3 text-[#2B2B2B]">
                  <p className="text-lg font-bold">{contact.neighborhood}</p>
                  <p className="text-base font-semibold text-[#8A8A8A]">{contact.address}</p>
                </div>

                {!contact.homeService ? (
                  <div className="mt-6 rounded-[20px] border border-[#F7AFC5]/30 bg-[#FFF8FA] p-4 text-sm font-semibold leading-6 text-[#2B2B2B]">
                    🐾 Trabajamos únicamente en nuestro local. No realizamos servicio a domicilio.
                  </div>
                ) : null}

                <Button
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  className="mt-6 w-full sm:w-auto"
                  aria-label="Abrir indicaciones para llegar a TE VES GUAUU en Google Maps"
                >
                  Cómo llegar
                </Button>
              </div>

              <div className="overflow-hidden rounded-[24px] border border-[#F7AFC5]/25 bg-[#FFF8FA] shadow-[0_16px_40px_rgba(247,175,197,0.16)]">
                <iframe
                  src={googleMapsEmbedUrl}
                  title="Mapa de ubicación de TE VES GUAUU en Pedro Francisco Berro 1289"
                  className="h-[280px] w-full border-0 lg:h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  )
}

export default ContactSection
