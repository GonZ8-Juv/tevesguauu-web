export type ContactLink = {
  label: string
  value: string
  href: string
  icon: string
  ariaLabel: string
  external?: boolean
}

export type ScheduleDay = {
  day: string
  hours: string
  closed?: boolean
}

export const contact = {
  phoneDisplay: '091 363 260',
  phoneHref: 'tel:+59891363260',
  internationalPhone: '59891363260',
  email: 'tevesguauu@gmail.com',
  instagramHandle: '@tevesguauu_peluqueriacanina',
  instagramUrl: 'https://www.instagram.com/tevesguauu_peluqueriacanina/',
  tiktokHandle: '@tevesguauu_pelucanina',
  tiktokUrl: 'https://www.tiktok.com/@tevesguauu_pelucanina',
  neighborhood: 'Pocitos, Montevideo',
  address: 'Pedro Francisco Berro 1289',
  homeService: false,
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Pedro%20Francisco%20Berro%201289%2C%20Montevideo%2C%20Uruguay',
  whatsappUrl:
    'https://wa.me/59891363260?text=Hola%2C%20quisiera%20consultar%20por%20un%20turno.',
  links: [
    {
      label: 'WhatsApp y llamadas',
      value: '091 363 260',
      href: 'tel:+59891363260',
      icon: '📞',
      ariaLabel: 'Llamar a TE VES GUAUU',
    },
    {
      label: 'Email',
      value: 'tevesguauu@gmail.com',
      href: 'mailto:tevesguauu@gmail.com',
      icon: '✉️',
      ariaLabel: 'Enviar email a TE VES GUAUU',
    },
    {
      label: 'Instagram',
      value: '@tevesguauu_peluqueriacanina',
      href: 'https://www.instagram.com/tevesguauu_peluqueriacanina/',
      icon: '📸',
      ariaLabel: 'Abrir Instagram de TE VES GUAUU',
      external: true,
    },
    {
      label: 'TikTok',
      value: '@tevesguauu_pelucanina',
      href: 'https://www.tiktok.com/@tevesguauu_pelucanina',
      icon: '🎵',
      ariaLabel: 'Abrir TikTok de TE VES GUAUU',
      external: true,
    },
  ] satisfies ContactLink[],
  schedule: [
    { day: 'Lunes', hours: '13:30 a 20:00' },
    { day: 'Martes', hours: '09:00 a 20:00' },
    { day: 'Miércoles', hours: '13:30 a 20:00' },
    { day: 'Jueves', hours: '09:00 a 20:00' },
    { day: 'Viernes', hours: '09:00 a 20:00' },
    { day: 'Sábado', hours: '09:00 a 17:00' },
    { day: 'Domingo', hours: 'Cerrado', closed: true },
  ] satisfies ScheduleDay[],
} as const
