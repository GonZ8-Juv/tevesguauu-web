import { useState } from 'react'
import { workImages } from '../../data/works'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

const galleryImageModules = import.meta.glob('../../assets/images/Fotos perritos jpg/*.{jpg,jpeg,png,PNG,JPG,JPEG}', {
  eager: true,
  import: 'default',
  query: '?url',
})

const galleryImages = Object.entries(galleryImageModules)
  .sort(([firstPath], [secondPath]) => {
    const featuredGalleryImage = 'IMG_5607.PNG'

    if (firstPath.endsWith(featuredGalleryImage)) {
      return -1
    }

    if (secondPath.endsWith(featuredGalleryImage)) {
      return 1
    }

    return firstPath.localeCompare(secondPath)
  })
  .map(([path, src]) => ({
    src: src as string,
    alt: `Trabajo realizado en TE VES GUAUU - ${path.split('/').pop() ?? 'foto'}`,
  }))

const secondaryImagePositionClasses = [
  'object-[center_35%]',
  'object-[center_28%]',
  'object-[center_22%]',
  'object-[center_30%]',
]

const secondaryImageScaleClasses = ['', '', '', 'scale-[1.18]']

function WorksSection() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedImageGroup, setSelectedImageGroup] = useState<'featured' | 'gallery'>('gallery')
  const [featuredImage, ...secondaryImages] = workImages

  function openLightbox(index: number, group: 'featured' | 'gallery') {
    setSelectedImageGroup(group)
    setSelectedImageIndex(index)
  }

  function closeLightbox() {
    setSelectedImageIndex(null)
  }

  function showPreviousImage() {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex
      }

      const images = selectedImageGroup === 'featured' ? workImages : galleryImages

      return currentIndex === 0 ? images.length - 1 : currentIndex - 1
    })
  }

  function showNextImage() {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex
      }

      const images = selectedImageGroup === 'featured' ? workImages : galleryImages

      return currentIndex === images.length - 1 ? 0 : currentIndex + 1
    })
  }

  const selectedImages = selectedImageGroup === 'featured' ? workImages : galleryImages

  return (
    <Section id="trabajos" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-12 top-20 h-36 w-36 rounded-full bg-[#F7AFC5]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-16 text-5xl text-[#E85A93]/10">
        ♡
      </div>
      <div className="pointer-events-none absolute bottom-10 right-16 h-24 w-24 rounded-full bg-[#E85A93]/10 blur-2xl" />

      <Container className="relative">
        <SectionTitle
          eyebrow="🐾 Antes y después"
          title="Trabajos realizados"
          description="Algunos de los perritos que pasaron por TE VES GUAUU y se fueron felices, con estilo, mimados y llenos de amor."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <button
            type="button"
            className="group aspect-square w-full overflow-hidden rounded-[28px] shadow-[0_16px_40px_rgba(247,175,197,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85A93]"
            onClick={() => openLightbox(0, 'featured')}
          >
            <img
              src={featuredImage.src}
              alt={featuredImage.alt}
              className="h-full w-full bg-[#FFF8FA] object-contain transition duration-200 group-hover:scale-[1.02]"
            />
          </button>

          <div className="grid grid-cols-2 gap-5">
            {secondaryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className="group aspect-square overflow-hidden rounded-[24px] shadow-[0_14px_34px_rgba(247,175,197,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85A93]"
                onClick={() => openLightbox(index + 1, 'featured')}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-full w-full object-cover transition duration-200 group-hover:scale-[1.03] ${
                    secondaryImagePositionClasses[index] ?? 'object-center'
                  } ${secondaryImageScaleClasses[index] ?? ''}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => setIsGalleryOpen(true)}
          >
            Ver más
          </Button>
        </div>
      </Container>

      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#2B2B2B]/45 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="works-gallery-title"
          onClick={() => setIsGalleryOpen(false)}
        >
          <div
            className="max-h-[88vh] w-full max-w-6xl overflow-y-auto rounded-[28px] bg-white p-5 shadow-[0_24px_70px_rgba(43,43,43,0.22)] sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#E85A93]">
                  Galería
                </p>
                <h3
                  id="works-gallery-title"
                  className="mt-2 text-2xl font-black text-[#2B2B2B] sm:text-3xl"
                >
                  Más trabajos realizados{' '}
                  <span className="text-sm font-bold text-[#8A8A8A] sm:text-base">
                    (Haz clic en cualquier imagen para verla en tamaño completo)
                  </span>
                </h3>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF8FA] text-2xl font-bold text-[#E85A93] transition duration-200 hover:bg-[#F7AFC5]/40"
                aria-label="Cerrar galería"
                onClick={() => setIsGalleryOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className="group overflow-hidden rounded-[18px] shadow-[0_10px_24px_rgba(247,175,197,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85A93]"
                  onClick={() => openLightbox(index, 'gallery')}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition duration-200 group-hover:scale-[1.04]"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada de trabajo realizado"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-3xl font-bold text-white transition duration-200 hover:bg-black/70"
            aria-label="Cerrar foto ampliada"
            onClick={(event) => {
              event.stopPropagation()
              closeLightbox()
            }}
          >
            ×
          </button>

          <div className="relative" onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedImages[selectedImageIndex].src}
              alt={selectedImages[selectedImageIndex].alt}
              className="max-h-[86vh] max-w-[92vw] rounded-[18px] object-contain shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            />

            <button
              type="button"
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-4xl font-bold text-white transition duration-200 hover:bg-black/70 sm:left-3"
              aria-label="Ver foto anterior"
              onClick={showPreviousImage}
            >
              ‹
            </button>

            <button
              type="button"
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-4xl font-bold text-white transition duration-200 hover:bg-black/70 sm:right-3"
              aria-label="Ver foto siguiente"
              onClick={showNextImage}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </Section>
  )
}

export default WorksSection
