import { useCallback, useEffect, useRef, useState } from 'react'
import { galleryWorksMeta } from '../../data/galleryWorksMeta'
import { type WorkImage, workImages } from '../../data/works'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

const galleryFullModules = import.meta.glob('../../assets/images/optimized/works/full/gallery-*.webp', {
  eager: true,
  import: 'default',
  query: '?url',
})

const galleryThumbModules = import.meta.glob('../../assets/images/optimized/works/thumbs/gallery-*.webp', {
  eager: true,
  import: 'default',
  query: '?url',
})

const preloadedImages = new Set<string>()

function getGalleryAssetUrl(
  modules: Record<string, unknown>,
  folder: 'full' | 'thumbs',
  fileName: string,
) {
  const src = modules[`../../assets/images/optimized/works/${folder}/${fileName}`]

  if (typeof src !== 'string') {
    throw new Error(`No se encontro la imagen optimizada: ${fileName}`)
  }

  return src
}

function preloadImage(src?: string) {
  if (!src || preloadedImages.has(src)) {
    return
  }

  preloadedImages.add(src)
  const image = new Image()
  image.src = src
}

function preloadNearbyImages(images: WorkImage[], index: number) {
  const previousIndex = index === 0 ? images.length - 1 : index - 1
  const nextIndex = index === images.length - 1 ? 0 : index + 1

  preloadImage(images[index]?.src)
  preloadImage(images[previousIndex]?.src)
  preloadImage(images[nextIndex]?.src)
}

const galleryImages: WorkImage[] = galleryWorksMeta.map((image) => ({
  src: getGalleryAssetUrl(galleryFullModules, 'full', image.fullFile),
  thumbnailSrc: getGalleryAssetUrl(galleryThumbModules, 'thumbs', image.thumbFile),
  alt: `Trabajo realizado en TE VES GUAUU - ${image.fileName}`,
  width: image.width,
  height: image.height,
  thumbnailWidth: image.thumbWidth,
  thumbnailHeight: image.thumbHeight,
}))

const secondaryImagePositionClasses = [
  'object-[center_35%]',
  'object-[center_28%]',
  'object-[center_22%]',
  'object-[center_30%]',
]

const secondaryImageScaleClasses = ['', '', '', 'scale-[1.18]']

function getImagesForGroup(group: 'featured' | 'gallery') {
  return group === 'featured' ? workImages : galleryImages
}

function WorksSection() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedImageGroup, setSelectedImageGroup] = useState<'featured' | 'gallery'>('gallery')
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [hasImageError, setHasImageError] = useState(false)
  const [isLightboxClosing, setIsLightboxClosing] = useState(false)
  const lightboxCloseTimeoutRef = useRef<number | null>(null)
  const [featuredImage, ...secondaryImages] = workImages
  const selectedImages = getImagesForGroup(selectedImageGroup)
  const selectedImage = selectedImageIndex !== null ? selectedImages[selectedImageIndex] : null

  function openLightbox(index: number, group: 'featured' | 'gallery') {
    const images = getImagesForGroup(group)

    if (lightboxCloseTimeoutRef.current) {
      window.clearTimeout(lightboxCloseTimeoutRef.current)
    }

    preloadNearbyImages(images, index)
    setIsLightboxClosing(false)
    setIsImageLoading(true)
    setHasImageError(false)
    setSelectedImageGroup(group)
    setSelectedImageIndex(index)
  }

  const closeLightbox = useCallback(() => {
    setIsLightboxClosing(true)
    lightboxCloseTimeoutRef.current = window.setTimeout(() => {
      setSelectedImageIndex(null)
      setIsLightboxClosing(false)
      lightboxCloseTimeoutRef.current = null
    }, 180)
  }, [])

  function showPreviousImage() {
    setIsImageLoading(true)
    setHasImageError(false)
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex
      }

      return currentIndex === 0 ? selectedImages.length - 1 : currentIndex - 1
    })
  }

  function showNextImage() {
    setIsImageLoading(true)
    setHasImageError(false)
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex
      }

      return currentIndex === selectedImages.length - 1 ? 0 : currentIndex + 1
    })
  }

  useEffect(() => {
    if (!isGalleryOpen && selectedImageIndex === null) {
      return
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isGalleryOpen, selectedImageIndex])

  useEffect(() => {
    if (selectedImageIndex === null) {
      return
    }

    const images = getImagesForGroup(selectedImageGroup)
    preloadNearbyImages(images, selectedImageIndex)

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowLeft') {
        setIsImageLoading(true)
        setHasImageError(false)
        setSelectedImageIndex((currentIndex) => {
          if (currentIndex === null) {
            return currentIndex
          }

          return currentIndex === 0 ? images.length - 1 : currentIndex - 1
        })
      }

      if (event.key === 'ArrowRight') {
        setIsImageLoading(true)
        setHasImageError(false)
        setSelectedImageIndex((currentIndex) => {
          if (currentIndex === null) {
            return currentIndex
          }

          return currentIndex === images.length - 1 ? 0 : currentIndex + 1
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeLightbox, selectedImageGroup, selectedImageIndex])

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
            onMouseEnter={() => preloadNearbyImages(workImages, 0)}
            onTouchStart={() => preloadNearbyImages(workImages, 0)}
          >
            <img
              src={featuredImage.thumbnailSrc}
              alt={featuredImage.alt}
              width={featuredImage.thumbnailWidth}
              height={featuredImage.thumbnailHeight}
              loading="lazy"
              decoding="async"
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
                onMouseEnter={() => preloadNearbyImages(workImages, index + 1)}
                onTouchStart={() => preloadNearbyImages(workImages, index + 1)}
              >
                <img
                  src={image.thumbnailSrc}
                  alt={image.alt}
                  width={image.thumbnailWidth}
                  height={image.thumbnailHeight}
                  loading="lazy"
                  decoding="async"
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
                  onMouseEnter={() => preloadNearbyImages(galleryImages, index)}
                  onTouchStart={() => preloadNearbyImages(galleryImages, index)}
                >
                  <img
                    src={image.thumbnailSrc}
                    alt={image.alt}
                    width={image.thumbnailWidth}
                    height={image.thumbnailHeight}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="aspect-square w-full object-cover transition duration-200 group-hover:scale-[1.04]"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedImage ? (
        <div
          className={`fixed inset-0 z-[90] flex items-center justify-center bg-black/85 px-3 py-4 backdrop-blur-sm transition-opacity duration-200 sm:px-6 sm:py-6 ${
            isLightboxClosing ? 'opacity-0' : 'opacity-100'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada de trabajo realizado"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/45 text-3xl font-light text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-200 hover:scale-[1.08] hover:bg-black/60"
            aria-label="Cerrar foto ampliada"
            onClick={(event) => {
              event.stopPropagation()
              closeLightbox()
            }}
          >
            ×
          </button>

          <div
            className="relative inline-flex max-h-[88vh] max-w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {(isImageLoading || hasImageError) && (
              <div className="absolute left-1/2 top-1/2 z-10 flex min-h-[180px] min-w-[220px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-3 rounded-[18px] bg-black/35 px-6 text-center text-white shadow-[0_16px_42px_rgba(0,0,0,0.18)] backdrop-blur-md">
                {hasImageError ? (
                  <>
                    <p className="text-sm font-bold text-white">
                      No pudimos cargar esta imagen.
                    </p>
                    <button
                      type="button"
                      className="rounded-full bg-white/85 px-5 py-2 text-sm font-bold text-[#2B2B2B] transition duration-200 hover:bg-white"
                      onClick={closeLightbox}
                    >
                      Cerrar
                    </button>
                  </>
                ) : (
                  <>
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/35 border-t-white" />
                    <p className="text-sm font-bold text-white">Cargando imagen...</p>
                  </>
                )}
              </div>
            )}

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              decoding="async"
              className={`max-h-[88vh] max-w-[90vw] rounded-[18px] object-contain shadow-[0_18px_50px_rgba(0,0,0,0.28)] filter-none transition-opacity duration-300 ${
                isImageLoading || hasImageError ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => {
                setIsImageLoading(false)
                setHasImageError(false)
              }}
              onError={() => {
                setIsImageLoading(false)
                setHasImageError(true)
              }}
            />

            <button
              type="button"
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-x-full -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-4xl font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-200 hover:scale-[1.08] hover:bg-black/60 sm:-left-[30px] sm:translate-x-0"
              aria-label="Ver foto anterior"
              onClick={showPreviousImage}
            >
              ‹
            </button>

            <button
              type="button"
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 translate-x-full -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-4xl font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-200 hover:scale-[1.08] hover:bg-black/60 sm:-right-[30px] sm:translate-x-0"
              aria-label="Ver foto siguiente"
              onClick={showNextImage}
            >
              ›
            </button>
          </div>
        </div>
      ) : null}
    </Section>
  )
}

export default WorksSection
