import { services } from '../../data/services'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

const whatsappNumber = '59891363260'

function createWhatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

function ServicesSection() {
  return (
    <Section
      id="servicios"
      className="relative overflow-hidden rounded-[32px] bg-white px-0"
    >
      <div className="pointer-events-none absolute -left-10 top-16 h-32 w-32 rounded-full bg-[#F7AFC5]/20 blur-2xl" />
      <div className="pointer-events-none absolute right-6 top-10 h-10 w-10 rounded-full bg-[#E85A93]/10" />
      <div className="pointer-events-none absolute bottom-24 left-1/4 h-6 w-6 rounded-full bg-[#F7AFC5]/25" />
      <div className="pointer-events-none absolute -right-12 bottom-10 h-40 w-40 rounded-full bg-[#F7AFC5]/20 blur-2xl" />

      <Container className="relative">
        <SectionTitle
          eyebrow="🐾 Cuidado y bienestar"
          title="Nuestros Servicios"
          description="Todo lo que hacemos para que tu compañero se vea, se sienta y se vaya... ¡GUAUU! 💕"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.name}
              className="flex h-full flex-col border border-[#F7AFC5]/25 p-6"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#F7AFC5]/30 text-3xl">
                {service.icon}
              </div>

              <h3 className="text-xl font-extrabold text-[#E85A93]">{service.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[#2B2B2B]/80">{service.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-[#2B2B2B]/85">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 text-[#E85A93]" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {service.includesNote && (
                <details className="group mt-5 rounded-[18px] bg-[#FFF8FA] p-4 text-sm text-[#2B2B2B]/85">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-extrabold text-[#E85A93]">
                    <span>{service.includesNote.title}</span>
                    <span className="text-lg leading-none transition duration-200 group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {service.includesNote.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 text-[#E85A93]" aria-hidden="true">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <Button
                href={createWhatsappUrl(service.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                variant="whatsapp"
                size="sm"
                className="mt-6 w-full"
              >
                Reservar por WhatsApp
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-[24px] border border-[#F7AFC5]/35 bg-white p-6 text-center shadow-[0_16px_40px_rgba(247,175,197,0.18)] sm:p-8">
          <h3 className="text-2xl font-extrabold text-[#E85A93]">
            ¿No sabés qué servicio necesita tu mascota?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#8A8A8A]">
            Escribinos por WhatsApp y te ayudamos a elegir la mejor opción.
          </p>
          <Button
            href={createWhatsappUrl(
              'Hola, quisiera consultar qué servicio necesita mi mascota.',
            )}
            target="_blank"
            rel="noreferrer"
            variant="whatsapp"
            className="mt-6"
          >
            Consultar sin compromiso
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default ServicesSection
