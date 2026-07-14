import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'
import ComingSoonSection from '../components/sections/ComingSoonSection'
import HeroSection from '../components/sections/HeroSection'
import RecommendationsSection from '../components/sections/RecommendationsSection'
import ServicesSection from '../components/sections/ServicesSection'
import WorksSection from '../components/sections/WorksSection'

function Home() {
  return (
    <div>
      <HeroSection />

      <div>
        <ServicesSection />
      </div>

      <RecommendationsSection />

      <WorksSection />

      <AboutSection />

      <ComingSoonSection />

      <ContactSection />
    </div>
  )
}

export default Home
