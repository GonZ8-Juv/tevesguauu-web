import principalOne from '../assets/images/Principal 1.PNG'
import principalTwo from '../assets/images/Principal 2.png'
import principalThree from '../assets/images/Principal 3.PNG'
import principalFour from '../assets/images/Principal 4.jpg'
import principalFive from '../assets/images/Principal 5.jpg.jpeg'

export type WorkImage = {
  src: string
  alt: string
  featured?: boolean
}

export const workImages: WorkImage[] = [
  {
    src: principalOne,
    alt: 'Trabajo realizado de deslanado en TE VES GUAUU',
    featured: true,
  },
  {
    src: principalTwo,
    alt: 'Mascota luego de una sesión de peluquería canina',
  },
  {
    src: principalThree,
    alt: 'Perro pequeño blanco luego de su arreglo de peluquería',
  },
  {
    src: principalFour,
    alt: 'Golden retriever luego de su baño y cuidado de pelo',
  },
  {
    src: principalFive,
    alt: 'Perro pequeño con moño luego de su sesión de peluquería',
  },
]
