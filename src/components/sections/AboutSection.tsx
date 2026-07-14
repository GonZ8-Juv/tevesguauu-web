import { useState } from 'react'
import localImage from '../../assets/images/Local.png'
import { about } from '../../data/about'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

function AboutSection() {
  const [isStoryOpen, setIsStoryOpen] = useState(false)

  return (
    <Section id="nosotros" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-16 top-16 h-40 w-40 rounded-full bg-[#F7AFC5]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 right-8 text-5xl text-[#E85A93]/10">
        ♡
      </div>

      <Container className="relative">
        <SectionTitle
          eyebrow={about.eyebrow}
          title={about.title}
          description="Una historia hecha de vocación, cariño y respeto por cada mascota."
        />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <Card className="order-2 border border-[#F7AFC5]/25 lg:order-1 lg:self-stretch">
            <div className="space-y-4 text-base leading-8 text-[#2B2B2B]/85">
              {about.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Button
              type="button"
              className="mt-7 w-full sm:w-auto"
              onClick={() => setIsStoryOpen(true)}
            >
              Seguir conociéndonos
            </Button>
          </Card>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-4 rounded-[36px] bg-[#F7AFC5]/20 blur-2xl" />
              <img
                src={localImage}
                alt="Local de TE VES GUAUU en Pocitos, Montevideo"
                className="relative aspect-square w-full rounded-[28px] object-cover object-[center_32%] shadow-[0_20px_50px_rgba(247,175,197,0.28)]"
              />
            </div>
          </div>
        </div>
      </Container>

      {isStoryOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#2B2B2B]/45 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-story-title"
        >
          <div className="max-h-[86vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-[0_24px_70px_rgba(43,43,43,0.22)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#E85A93]">
                  TE VES GUAUU
                </p>
                <h3 id="about-story-title" className="mt-2 text-2xl font-black text-[#2B2B2B] sm:text-3xl">
                  La historia de Flor
                </h3>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF8FA] text-2xl font-bold text-[#E85A93] transition duration-200 hover:bg-[#F7AFC5]/40"
                aria-label="Cerrar historia"
                onClick={() => setIsStoryOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="mt-6 space-y-4 text-base leading-8 text-[#2B2B2B]/85">
              {about.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default AboutSection
