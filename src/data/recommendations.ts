import type { Recommendation } from '../types/recommendation'

// Cada recomendación ya tiene slug para que más adelante pueda convertirse
// en una página individual o conectarse a un CMS.
export const recommendations: Recommendation[] = [
  {
    id: 'recommendation-1',
    slug: 'que-es-el-deslanado',
    title: '¿Qué es el deslanado?',
    emoji: '🪮',
    category: 'Cuidado del pelaje',
    excerpt:
      'Conocé por qué el deslanado es una alternativa saludable para los perros de doble manto.',
    content:
      'El deslanado es una técnica que permite retirar el subpelo muerto en perros de doble manto o en razas que mudan su pelo según la estación del año.\n\nMuchas veces se piensa que esquilar ayuda a combatir el calor, pero en estos casos ocurre lo contrario: el manto funciona como regulador natural de la temperatura y protege la piel de los rayos UV.\n\nPor eso, un buen deslanado suele ser la mejor opción para mantener a tu mascota cómoda y saludable.',
    featured: true,
  },
  {
    id: 'recommendation-2',
    slug: 'cuando-cortar-las-unas',
    title: '¿Cuándo cortar las uñas?',
    emoji: '🐾',
    category: 'Higiene',
    excerpt:
      'Una señal muy sencilla puede ayudarte a saber cuándo es momento de realizar un recorte.',
    content:
      'Una forma sencilla de saber si es momento de cortar las uñas es observar a tu perro cuando está parado.\n\nSi las uñas tocan el suelo, es momento de realizar un recorte.\n\nMantenerlas con el largo adecuado ayuda a prevenir molestias al caminar, enganches y posibles uñas encarnadas.',
  },
  {
    id: 'recommendation-3',
    slug: 'cuidados-diarios-del-pelaje',
    title: 'Cuidados diarios del pelaje',
    emoji: '✨',
    category: 'Cuidado en casa',
    excerpt: 'Algunos hábitos simples ayudan a evitar nudos, molestias e irritaciones.',
    content: 'Un pelaje sano también depende de los cuidados que se realizan en casa.',
    tips: [
      'Cepillarlo regularmente.',
      'Evitar dejarle la ropa puesta durante todo el día.',
      'Utilizar abrigo solamente cuando sea necesario.',
      'Revisar frecuentemente si se están formando nudos.',
      'Mantener una rutina adecuada de baños y cepillado.',
    ],
    highlight: 'Un pelaje con muchos nudos puede provocar irritación, dolor y heridas en la piel.',
  },
  {
    id: 'recommendation-4',
    slug: 'politicas-te-ves-guauu',
    title: 'Políticas TE VES GUAUU',
    emoji: '⚠️',
    category: 'Políticas',
    excerpt:
      'Algunas medidas importantes para cuidar a cada mascota, a los demás perritos y al equipo.',
    content:
      'En TE VES GUAUU cuidamos la salud y el bienestar de todas las mascotas que nos visitan.\n\n• Sobre pulgas:\n\nSi un perro ingresa con una infestación importante de pulgas o huevos, la peluquería puede contaminarse y afectar a otros animales.\n\nPor este motivo, los perros que presenten una infestación importante deberán reprogramar su turno.\n\nEn estos casos se cobrará el 50% del servicio por la pérdida del turno y el proceso de desinfección necesario.\n\nLa peluquería no realiza tratamientos para eliminar pulgas. Recomendamos consultar con un veterinario para elegir el producto más adecuado para cada mascota.\n\nUna vez realizado el tratamiento correspondiente, estaremos encantados de recibir nuevamente a tu compañero.\n\n• Sobre perros que muerden:\n\nPor seguridad y cuidado, no se aceptan perros que muerdan o que presenten conductas agresivas que impidan trabajar de forma segura.\n\nEsta medida busca proteger a la mascota, evitar situaciones de estrés y cuidar también al equipo que realiza el servicio.',
    highlight:
      'Siempre priorizamos la salud, la tranquilidad y el cuidado de cada mascota, así como la de los demás perros y de todo nuestro equipo.',
  },
]
