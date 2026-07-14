import { useState } from 'react'
import { recommendations } from '../../data/recommendations'
import type { Recommendation } from '../../types/recommendation'
import RecommendationCard from '../common/RecommendationCard'
import Container from '../ui/Container'
import Modal from '../ui/Modal'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

function RecommendationsSection() {
  const [selectedRecommendation, setSelectedRecommendation] = useState<Recommendation | null>(null)

  return (
    <Section id="recomendaciones" className="relative overflow-hidden bg-[#FFF8FA]">
      <div className="pointer-events-none absolute left-6 top-16 text-3xl text-[#F7AFC5]/35">♡</div>
      <div className="pointer-events-none absolute right-8 top-20 text-4xl text-[#E85A93]/15">🐾</div>
      <div className="pointer-events-none absolute -left-16 bottom-16 h-40 w-40 rounded-full bg-[#F7AFC5]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-10 h-44 w-44 rounded-full bg-[#E85A93]/10 blur-3xl" />

      <Container className="relative">
        <SectionTitle
          eyebrow="🐾 Consejos para tutores"
          title="Nuestras Recomendaciones"
          description="Pequeños consejos que ayudan a cuidar mejor a tu compañero todos los días."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {recommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
              onRead={setSelectedRecommendation}
            />
          ))}
        </div>
      </Container>

      <Modal
        isOpen={selectedRecommendation !== null}
        title={selectedRecommendation?.title ?? ''}
        onClose={() => setSelectedRecommendation(null)}
      >
        {selectedRecommendation ? (
          <article>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#F7AFC5]/30 text-2xl"
                aria-hidden="true"
              >
                {selectedRecommendation.emoji}
              </span>
              <span className="rounded-full bg-[#FFF8FA] px-4 py-2 text-sm font-bold text-[#D94A7F]">
                {selectedRecommendation.category}
              </span>
            </div>

            <div className="space-y-4 text-base leading-8 text-[#2B2B2B]/85">
              {selectedRecommendation.content.split('\n\n').map((paragraph) => (
                <p
                  key={paragraph}
                  className={paragraph.startsWith('• ') ? 'font-extrabold text-[#E85A93]' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {selectedRecommendation.tips ? (
              <div className="mt-6 rounded-[20px] bg-[#FFF8FA] p-5">
                <h4 className="font-extrabold text-[#E85A93]">Tips prácticos</h4>
                <ul className="mt-3 space-y-2 text-[#2B2B2B]/85">
                  {selectedRecommendation.tips.map((tip) => (
                    <li key={tip} className="flex gap-2">
                      <span className="text-[#E85A93]" aria-hidden="true">
                        •
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {selectedRecommendation.highlight ? (
              <p className="mt-6 rounded-[20px] border border-[#F7AFC5]/35 bg-[#F7AFC5]/20 p-5 font-bold leading-7 text-[#D94A7F]">
                {selectedRecommendation.highlight}
              </p>
            ) : null}
          </article>
        ) : null}
      </Modal>
    </Section>
  )
}

export default RecommendationsSection
