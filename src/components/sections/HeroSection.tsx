import pinkCircle from '../../assets/images/Circulo rosa.png'
import pawPrint from '../../assets/images/Huellas.png'
import heroDog from '../../assets/images/prueba def.png'
import { hero } from '../../data/hero'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Section from '../ui/Section'

function HeroSection() {
  return (
    <Section
      id="inicio"
      className="relative scroll-mt-28 overflow-hidden bg-[#FFF8FA] pb-8 pt-0 sm:scroll-mt-36 sm:pb-10 sm:pt-2 lg:scroll-mt-56 lg:pb-16 lg:pt-8"
    >
      <img
        src={pawPrint}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-12 hidden h-28 w-28 -rotate-12 object-contain opacity-[0.14] sm:block lg:h-36 lg:w-36"
      />
      <img
        src={pawPrint}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 top-20 h-24 w-24 rotate-12 object-contain opacity-[0.16] sm:h-32 sm:w-32 lg:h-40 lg:w-40"
      />
      <img
        src={pawPrint}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-4 hidden h-40 w-40 -rotate-6 object-contain opacity-[0.14] lg:block xl:h-52 xl:w-52"
      />
      <img
        src={pawPrint}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-2 hidden h-24 w-24 rotate-6 object-contain opacity-[0.12] sm:block sm:h-32 sm:w-32 lg:h-40 lg:w-40"
      />
      <img
        src={pawPrint}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[42%] top-10 hidden h-16 w-16 rotate-[22deg] object-contain opacity-[0.12] lg:block"
      />
      <img
        src={pawPrint}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-[46%] hidden h-20 w-20 -rotate-[18deg] object-contain opacity-[0.1] xl:block"
      />
      <img
        src={pawPrint}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-28 bottom-[44%] hidden h-14 w-14 rotate-[35deg] object-contain opacity-[0.13] sm:block lg:h-20 lg:w-20"
      />
      <img
        src={pawPrint}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-16 bottom-[38%] hidden h-12 w-12 -rotate-[28deg] object-contain opacity-[0.1] lg:block"
      />
      <div className="pointer-events-none absolute left-4 top-40 text-3xl text-[#E85A93]/20 sm:left-10 sm:top-24">
        ♡
      </div>
      <div className="pointer-events-none absolute bottom-24 right-8 hidden text-4xl text-[#E85A93]/15 sm:block">
        ♡
      </div>
      <div className="pointer-events-none absolute right-[18%] top-32 hidden text-5xl text-[#E85A93]/10 lg:block">
        ♡
      </div>
      <div className="pointer-events-none absolute left-[42%] bottom-20 hidden text-2xl text-[#E85A93]/12 sm:block">
        ♡
      </div>
      <div className="pointer-events-none absolute left-[52%] top-28 hidden h-20 w-20 rounded-full bg-[#F7AFC5]/20 blur-3xl lg:block" />
      <div className="pointer-events-none absolute bottom-24 right-[34%] hidden h-16 w-16 rounded-full bg-[#E85A93]/10 blur-2xl sm:block" />
      <div className="pointer-events-none absolute bottom-10 left-[22%] hidden h-14 w-14 rounded-full bg-[#F7AFC5]/20 blur-2xl lg:block" />
      <Container className="relative">
        <div className="grid items-center gap-2 sm:gap-4 lg:grid-cols-[0.76fr_1.24fr] lg:gap-2 xl:gap-4">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h1 className="mx-auto max-w-3xl font-black leading-[0.92] tracking-normal lg:mx-0">
              <span className="block text-[clamp(2.35rem,9vw,5rem)] text-[#2B2B2B]">
                {hero.titleLines[0]}
              </span>
              <span className="block text-[clamp(2.2rem,8vw,4.5rem)] text-[#E85A93]">
                {hero.titleLines[1]}
              </span>
              <span className="flex items-end justify-center gap-2 text-[clamp(3.8rem,13vw,7.8rem)] text-[#E85A93] drop-shadow-[0_8px_0_rgba(255,255,255,0.9)] [text-shadow:0_3px_0_#fff,0_16px_26px_rgba(232,90,147,0.18)] lg:justify-start lg:gap-4">
                <span>{hero.titleLines[2]}</span>
                <span className="mb-2 text-[0.36em] leading-none text-[#E85A93] drop-shadow-[0_4px_0_rgba(255,255,255,0.9)] sm:mb-3 lg:mb-5">
                  ♥
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg font-semibold leading-8 text-[#2B2B2B] lg:mx-0">
              {hero.description}
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm font-bold leading-6 text-[#E85A93] sm:text-base lg:mx-0">
              {hero.highlight}
            </p>

            <div className="mt-8">
              <Button
                href={hero.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
              >
                Reservar turno por WhatsApp
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {hero.badges.map((badge) => (
                <Badge key={badge.label} className="bg-white px-4 py-2 shadow-[0_10px_24px_rgba(247,175,197,0.18)]">
                  <span className="mr-2" aria-hidden="true">
                    {badge.icon}
                  </span>
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="order-1 mb-3 mt-1 sm:mb-4 sm:-mt-4 md:mb-5 md:-mt-2 lg:order-2 lg:mb-0 lg:ml-24 lg:mt-0 xl:ml-32">
            <div className="relative mx-auto flex w-full max-w-[680px] items-center justify-center lg:max-w-[780px] xl:max-w-[860px]">
              <img
                src={pinkCircle}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-30 sm:top-[45%] sm:h-[820px] sm:w-[820px] sm:opacity-25 md:top-[48%] md:h-[920px] md:w-[920px] lg:left-[36%] lg:top-[34%] lg:h-[2600px] lg:w-[2600px] lg:opacity-45 xl:h-[3200px] xl:w-[3200px]"
              />
              <div className="relative z-10 flex items-center justify-center p-0">
                <img
                  src={heroDog}
                  alt="Perro golden retriever feliz luego de una sesión de peluquería canina"
                  className="mx-auto max-h-[330px] w-full max-w-[390px] translate-x-4 scale-[1.06] object-contain sm:max-h-[340px] sm:max-w-[440px] sm:translate-x-6 sm:scale-100 md:max-h-[420px] md:max-w-[560px] md:translate-x-8 lg:max-h-[620px] lg:max-w-none lg:translate-x-0 lg:scale-[1.42] xl:max-h-[680px] xl:scale-[1.46]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSection
