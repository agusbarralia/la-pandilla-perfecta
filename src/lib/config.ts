// Brand logos
import eukanubaLogo from '../assets/images/brands/eukanuba.png';
import royalCaninLogo from '../assets/images/brands/royal-canin.png';
import golocanLogo from '../assets/images/brands/golocan.png';
import unikLogo from '../assets/images/brands/unik.png';
import vitalcanLogo from '../assets/images/brands/vitalcan.png';
import proPlanLogo from '../assets/images/brands/pro-plan.png';

// Gallery images
import galleryImage1 from '../assets/images/andrew-s-ouo1hbizWwo-unsplash.jpg';
import galleryImage2 from '../assets/images/peter-plashkin-F3lBkL_y9KY-unsplash.jpg';
import galleryImage3 from '../assets/images/benjamin-lehman-qwIeh5M8bF8-unsplash.jpg';
import galleryImage4 from '../assets/images/j-balla-photography-cMtiWjiAvq4-unsplash.jpg';
import galleryImage5 from '../assets/images/sam-moghadam-NVj9jZH_avA-unsplash.jpg';
import galleryImage6 from '../assets/images/bonnie-kittle-MUcxe_wDurE-unsplash.jpg';

export const SITE_CONFIG = {
  name: 'La Pandilla Perfecta',
  slogan: 'El espacio para tu peludo',
  description: 'Pet shop - Productos, servicios y atención para tu mascota',
  url: 'https://lapandillaperfecta.com', // Update with real URL when deployed
  author: 'La Pandilla Perfecta',
  defaultLanguage: 'es',
};

export const SEO_CONFIG = {
  siteName: 'La Pandilla Perfecta',
  siteUrl: SITE_CONFIG.url,
  defaultTitle: 'La Pandilla Perfecta - Pet Shop en CABA',
  defaultDescription:
    'Pet shop en Buenos Aires. Alimento premium, peluquería y lavado canino. Yerbal 547, CABA. ¡Visitanos!',
  ogImage: '/og-image.jpg', // 1200x630px image for social sharing
  locale: 'es_AR',
  type: 'website',
};

export const DESIGN_TOKENS = {
  colors: {
    primary: '#1f7162', // Verde oscuro (mejor contraste)
    primaryLight: '#27917b', // Verde original
    secondary: '#8b6f47', // Beige oscuro
    secondaryLight: '#957659', // Beige original
    accent: '#e67e22', // Orange para CTAs
    white: '#FFFFFF',
  },
};

export const CONTACT_INFO = {
  phone: '+54 11 5693-6377',
  phoneRaw: '541156936377', // For tel: links and WhatsApp
  email: 'info@lapandillaperfecta.com',
  whatsapp: '541156936377',
  whatsappMessage: 'Hola! Me gustaría consultar sobre...',
  address: {
    street: 'Yerbal 547',
    city: 'Ciudad Autónoma de Buenos Aires',
    province: 'CABA',
    country: 'Argentina',
    fullAddress: 'Yerbal 547, Ciudad Autónoma de Buenos Aires, CABA',
  },
  social: {
    instagram: 'https://www.instagram.com/lapandillaperfecta',
    facebook: 'https://www.facebook.com/lapandillaperfecta',
  },
  hours: {
    weekdays: 'Lunes a Viernes: 9:00 - 19:00',
    saturday: 'Sábado: 9:00 - 14:00',
    sunday: 'Domingo: Cerrado',
  },
};

export const SERVICES = [
  {
    id: 'alimentos',
    icon: null,
    title: 'Venta de Alimentos',
    description:
      'Alimento balanceado de las mejores marcas para perros y gatos de todas las edades',
  },
  {
    id: 'peluqueria',
    icon: null,
    title: 'Peluquería Canina',
    description:
      'Cortes de pelo, baños medicinales y estéticos para que tu mascota luzca espectacular',
  },
  {
    id: 'lavado',
    icon: null,
    title: 'Lavado y Baño',
    description: 'Servicio de baño completo con productos de calidad y secado profesional',
  },
  {
    id: 'accesorios',
    icon: null,
    title: 'Accesorios',
    description:
      'Collares, correas, juguetes, camas y todo lo necesario para el bienestar de tu mascota',
  },
  {
    id: 'higiene',
    icon: null,
    title: 'Productos de Higiene',
    description: 'Shampoos, antipulgas, desparasitarios y productos para el cuidado diario',
  },
  {
    id: 'asesoria',
    icon: null,
    title: 'Asesoramiento',
    description: 'Consultas sobre alimentación, cuidados y bienestar de tu mascota',
  },
];

export const BRANDS = [
  {
    id: 'eukanuba',
    name: 'Eukanuba',
    logo: eukanubaLogo,
  },
  {
    id: 'royal-canin',
    name: 'Royal Canin',
    logo: royalCaninLogo,
  },
  {
    id: 'golocan',
    name: 'Golocan',
    logo: golocanLogo,
  },
  {
    id: 'unik',
    name: 'Unik',
    logo: unikLogo,
  },
  {
    id: 'vitalcan',
    name: 'Vitalcan',
    logo: vitalcanLogo,
  },
  {
    id: 'pro-plan',
    name: 'Pro Plan',
    logo: proPlanLogo,
  },
];

export const GALLERY = [
  {
    id: 'grooming-1',
    title: 'Peluquería Premium',
    description: 'Corte profesional y baño',
    image: galleryImage1,
  },
  {
    id: 'grooming-2',
    title: 'Lavado Canino',
    description: 'Servicio de baño completo',
    image: galleryImage2,
  },
  {
    id: 'local-1',
    title: 'Nuestro Local',
    description: 'Espacio moderno y cómodo',
    image: galleryImage3,
  },
  {
    id: 'happy-dogs-1',
    title: 'Mascotas Felices',
    description: 'Clientes satisfechos',
    image: galleryImage4,
  },
  {
    id: 'products-1',
    title: 'Productos Premium',
    description: 'Alimentos de calidad',
    image: galleryImage5,
  },
  {
    id: 'grooming-3',
    title: 'Finishing Touch',
    description: 'Detalle en cada corte',
    image: galleryImage6,
  },
];

export const ABOUT_US = {
  mission: 'En La Pandilla Perfecta creemos que cada mascota merece lo mejor. Nuestro compromiso es ofrecer productos premium y servicios profesionales para garantizar el bienestar y felicidad de tus peludos.',
  vision: 'Ser el pet shop de referencia en CABA, reconocido por la calidad, profesionalismo y amor hacia los animales.',
  whyChooseUs: [
    {
      id: 'experience',
      title: 'Experiencia Profesional',
      description: 'Equipo capacitado con años de experiencia en cuidado y grooming canino',
    },
    {
      id: 'quality',
      title: 'Productos Premium',
      description: 'Marcas reconocidas y alimentos de la más alta calidad para la salud de tu mascota',
    },
    {
      id: 'care',
      title: 'Atención Personalizada',
      description: 'Tratamos a cada mascota como parte de nuestra familia, con dedicación y cuidado especial',
    },
    {
      id: 'location',
      title: 'Ubicación Accesible',
      description: 'Espacio moderno y cómodo ubicado en el centro de CABA para tu comodidad',
    },
  ],
};

export const NAV_ITEMS = [
  {
    id: 'inicio',
    label: 'Inicio',
    href: '#',
  },
  {
    id: 'servicios',
    label: 'Servicios',
    href: '#servicios',
  },
  {
    id: 'galeria',
    label: 'Galería',
    href: '#galeria',
  },
  {
    id: 'sobre-nosotros',
    label: 'Sobre Nosotros',
    href: '#sobre-nosotros',
  },
  {
    id: 'marcas',
    label: 'Marcas',
    href: '#marcas',
  },
  {
    id: 'ubicacion',
    label: 'Ubicación',
    href: '#ubicacion',
  },
  {
    id: 'contacto',
    label: 'Contacto',
    href: '#contacto',
  },
];
