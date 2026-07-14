export type Service = {
  name: string
  description: string
  includes: string[]
  includesNote?: {
    title: string
    items: string[]
  }
  icon: string
  whatsappMessage: string
}

export const services: Service[] = [
  {
    name: 'Baños',
    description: 'Un baño completo con productos adecuados. ¡Nunca es solo un baño!',
    includes: [
      'Despeje de carita (en caso de ser necesario)',
      'Recorte higiénico',
      'Corte de uñas',
      'Limpieza de oídos',
      'Hidratación de patas y nariz',
    ],
    icon: '🛁',
    whatsappMessage: 'Hola, quisiera consultar por el servicio de Baños.',
  },
  {
    name: 'Cortes',
    description:
      'Realizamos cortes de raza y cortes comerciales adaptados a cada mascota, priorizando siempre su comodidad y bienestar.',
    includes: ['Cortes de raza', 'Cortes comerciales'],
    includesNote: {
      title: 'Ambos incluyen:',
      items: [
        'Recorte higiénico',
        'Recorte de uñas',
        'Limpieza de oídos',
        'Hidratación de patas y nariz',
      ],
    },
    icon: '✂️',
    whatsappMessage: 'Hola, quisiera consultar por el servicio de Cortes.',
  },
  {
    name: 'Deslanado',
    description:
      'Retiramos el pelo muerto para ayudar a que tu mascota se sienta más cómoda, limpia y liviana.',
    includes: [
      'Recorte higiénico',
      'Recorte de uñas',
      'Limpieza de oídos',
      'Hidratación de patas y nariz',
    ],
    icon: '✨',
    whatsappMessage: 'Hola, quisiera consultar por el servicio de Deslanado.',
  },
  {
    name: 'Higiene y cuidado',
    description:
      'Cuidados esenciales para mantener la higiene y comodidad de tu mascota en cada visita.',
    includes: ['Recorte higiénico', 'Recorte de uñas', 'Limpieza de oídos'],
    icon: '💕',
    whatsappMessage: 'Hola, quisiera consultar por el servicio de Higiene y cuidado.',
  },
]
