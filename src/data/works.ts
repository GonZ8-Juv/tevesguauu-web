import principalOne from '../assets/images/optimized/works/full/principal-1.webp'
import principalOneThumb from '../assets/images/optimized/works/thumbs/principal-1.webp'
import principalTwo from '../assets/images/optimized/works/full/principal-2.webp'
import principalTwoThumb from '../assets/images/optimized/works/thumbs/principal-2.webp'
import principalThree from '../assets/images/optimized/works/full/principal-3.webp'
import principalThreeThumb from '../assets/images/optimized/works/thumbs/principal-3.webp'
import principalFour from '../assets/images/optimized/works/full/principal-4.webp'
import principalFourThumb from '../assets/images/optimized/works/thumbs/principal-4.webp'
import principalFive from '../assets/images/optimized/works/full/principal-5.webp'
import principalFiveThumb from '../assets/images/optimized/works/thumbs/principal-5.webp'

export type WorkImage = {
  src: string
  thumbnailSrc: string
  alt: string
  width: number
  height: number
  thumbnailWidth: number
  thumbnailHeight: number
  featured?: boolean
}

export const workImages: WorkImage[] = [
  {
    src: principalOne,
    thumbnailSrc: principalOneThumb,
    alt: 'Trabajo realizado de deslanado en TE VES GUAUU',
    width: 1289,
    height: 1269,
    thumbnailWidth: 700,
    thumbnailHeight: 689,
    featured: true,
  },
  {
    src: principalTwo,
    thumbnailSrc: principalTwoThumb,
    alt: 'Mascota luego de una sesion de peluqueria canina',
    width: 600,
    height: 800,
    thumbnailWidth: 525,
    thumbnailHeight: 700,
  },
  {
    src: principalThree,
    thumbnailSrc: principalThreeThumb,
    alt: 'Perro pequeno blanco luego de su arreglo de peluqueria',
    width: 1218,
    height: 1521,
    thumbnailWidth: 561,
    thumbnailHeight: 700,
  },
  {
    src: principalFour,
    thumbnailSrc: principalFourThumb,
    alt: 'Golden retriever luego de su bano y cuidado de pelo',
    width: 982,
    height: 1600,
    thumbnailWidth: 430,
    thumbnailHeight: 700,
  },
  {
    src: principalFive,
    thumbnailSrc: principalFiveThumb,
    alt: 'Perro pequeno con mono luego de su sesion de peluqueria',
    width: 1080,
    height: 1350,
    thumbnailWidth: 560,
    thumbnailHeight: 700,
  },
]
