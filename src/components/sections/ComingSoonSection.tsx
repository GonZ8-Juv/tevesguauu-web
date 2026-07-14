import { comingSoon } from '../../data/comingSoon'
import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

function ComingSoonSection() {
  return (
    <Section id="proximamente" className="relative overflow-hidden bg-[#FFF8FA]">
      <div className="pointer-events-none absolute left-8 top-16 text-3xl text-[#F7AFC5]/35">♡</div>
      <div className="pointer-events-none absolute right-8 top-20 text-4xl text-[#E85A93]/15">🐾</div>
      <div className="pointer-events-none absolute -left-16 bottom-12 h-40 w-40 rounded-full bg-[#F7AFC5]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-16 h-44 w-44 rounded-full bg-[#E85A93]/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="[&>div]:mx-auto [&>div]:items-center [&>div]:text-center lg:[&>div]:mx-0 lg:[&>div]:items-start lg:[&>div]:text-left">
              <SectionTitle
                eyebrow={comingSoon.eyebrow}
                title={comingSoon.title}
                align="left"
              />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#2B2B2B]/75 lg:mx-0">
              {comingSoon.secondaryText}
            </p>

            <div className="mt-8">
              <button
                type="button"
                aria-disabled="true"
                disabled
                className="w-full cursor-not-allowed rounded-[20px] bg-[#F7AFC5]/55 px-7 py-4 text-base font-extrabold text-[#D94A7F]/70 shadow-[0_12px_28px_rgba(247,175,197,0.2)] sm:w-auto"
              >
                {comingSoon.buttonLabel}
              </button>
              <p className="mt-3 text-sm font-bold text-[#8A8A8A]">{comingSoon.availability}</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-4 rounded-[32px] bg-[#F7AFC5]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-[#F7AFC5]/25 bg-white/70 p-4 shadow-[0_20px_56px_rgba(247,175,197,0.24)] sm:p-8">
              <div className="absolute inset-0 z-10 bg-[#FFF8FA]/45 backdrop-blur-[2px]" />
              <div className="relative grid grid-cols-3 gap-2 sm:gap-4">
                {comingSoon.productPreviews.map((product, index) => (
                  <div
                    key={product.title}
                    className={`rounded-[18px] border border-[#F7AFC5]/30 bg-white p-3 text-center opacity-60 blur-[1px] sm:rounded-[24px] sm:p-5 ${
                      index === 1 ? 'sm:translate-y-6' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <div className="text-2xl sm:text-4xl">{product.emoji}</div>
                    <p className="mt-2 text-xs font-extrabold text-[#E85A93] sm:mt-4 sm:text-lg">
                      {product.title}
                    </p>
                    <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-[#F7AFC5]/45 sm:mt-4 sm:h-2 sm:w-16" />
                    <div className="mx-auto mt-1.5 h-1.5 w-7 rounded-full bg-[#F7AFC5]/30 sm:mt-2 sm:h-2 sm:w-10" />
                  </div>
                ))}
              </div>
              <div className="relative z-20 mt-4 rounded-[18px] bg-white/80 p-3 text-center text-xs font-bold text-[#D94A7F] shadow-[0_12px_28px_rgba(247,175,197,0.18)] sm:mt-8 sm:rounded-[20px] sm:p-4 sm:text-sm">
                Preparando productos con mucho amor
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ComingSoonSection
