export interface Cabin {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  pricePerNight: number;
  priceWeekend: number;
  weeklyDiscount: number;
  minStay: number;
  maxStay: number;
  features: string[];
  images: string[];
  isPrimary: boolean;
}

export interface PoolInfo {
  name: string;
  slug: string;
  description: string;
  features: string[];
  images: string[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  cabin: string;
}

export const cabins: Cabin[] = [
  {
    id: "cabana-1",
    name: "Cabaña El Roble",
    slug: "el-roble",
    description:
      "🌿 Tu refugio rural cerca de Madrid\n\nEscápate del ruido y disfruta de una acogedora cabaña en plena naturaleza, rodeada de tranquilidad y con vistas espectaculares. A tan solo 5 minutos en coche del pueblo más cercano y con conexión rápida a Madrid en transporte público, podrás desconectar sin renunciar a la comodidad.\n\n🏡 Un espacio pensado para disfrutar\n\nLa cabaña tiene capacidad para hasta 5 personas y cuenta con todas las comodidades:\n• Salón con cocina integrada\n• Baño con ducha\n• Dormitorio con mosquiteras\n• Sofá cama adicional\n\nPerfecta para una escapada en pareja, con amigos o en familia.\n\n🌞 Exterior y actividades\n\nDisfruta de un amplio espacio exterior ideal para relajarte o compartir momentos:\n• Piscina disponible en verano ☀️\n• Zona chill out para las noches bajo las estrellas\n• Barbacoa y mesa para reuniones\n• Espacio para niños y mascotas\n\nTambién podrás hacer rutas, paseos en bici o visitar lugares cercanos como Patones de Arriba o El Escorial.\n\n🐾 Naturaleza y animales\n\nJunto a la cabaña hay una pequeña granja con animales rescatados. Si quieres interactuar con ellos, solo tienes que pedirnos permiso 😊\n\n🎉 Perfecto para escapadas y celebraciones\n\nUn lugar ideal para desconectar o reunirte con los tuyos en un entorno natural, con posibilidad de ampliar la experiencia con tiendas de campaña (bajo solicitud).",
    shortDescription:
      "Tu refugio rural cerca de Madrid. Acogedora cabaña en plena naturaleza con vistas espectaculares, piscina y zona chill out.",
    capacity: 5,
    bedrooms: 1,
    bathrooms: 1,
    beds: 3,
    pricePerNight: 90,
    priceWeekend: 130,
    weeklyDiscount: 10,
    minStay: 2,
    maxStay: 180,
    features: [
      "Vistas panorámicas",
      "Vistas a la montaña",
      "Cocina completa",
      "Baño con ducha",
      "Dormitorio con mosquiteras",
      "Sofá cama adicional",
      "Aire acondicionado",
      "Calefacción",
      "Lavadora",
      "TV",
      "Zona para trabajar",
      "Entrada privada",
      "Patio trasero",
      "Tumbonas",
      "Barbacoa",
      "Aparcamiento gratuito",
      "Acceso piscina",
      "Admite mascotas",
      "Personal 24h",
      "Llegada autónoma",
    ],
    images: [
      "/cabana1-1.jpg",
      "/cabana1-2.jpg",
      "/cabana1-3.jpg",
      "/cabana1-4.jpg",
      "/cabana1-5.jpg",
      "/cabana1-7.jpg",
      "/cabana1-8.jpg",
      "/cabana1-9.jpg",
      "/cabana1-10.jpg",
      "/cabana1-11.jpg",
      "/cabana1-12.jpg",
      "/cabana1-13.jpg",
      "/cabana1-14.jpg",
      "/cabana1-15.jpg",
      "/cabana1-16.jpg",
      "/cabana1-17.jpg",
      "/cabana1-18.jpg",
      "/cabana1-19.jpg",
      "/cabana1-20.jpg",
      "/cabana1-21.jpg",
      "/cabana1-22.jpg",
      "/cabana1-23.jpg",
      "/cabana1-24.jpg",
      "/cabana1-25.jpg",
      "/cabana1-26.jpg",
      "/cabana1-27.jpg",
      "/cabana1-28.jpg",
      "/cabana1-29.jpg",
      "/cabana1-30.jpg",
    ],
    isPrimary: true,
  },
  {
    id: "cabana-2",
    name: "Cabaña El Encinar",
    slug: "el-encinar",
    description:
      "🌄 Una cabaña única con vistas increíbles\n\nDescubre una acogedora cabaña tipo loft con personalidad propia, rodeada de naturaleza y con unas vistas espectaculares. Un lugar perfecto para desconectar y disfrutar de la tranquilidad, a tan solo 30 minutos de Madrid.\n\n🏡 Espacio cómodo y totalmente equipado\n\nLa cabaña, de estilo loft y con abundante luz natural, está pensada para ofrecerte una estancia cómoda y relajante:\n\n• Capacidad para hasta 4 personas\n• Cama de matrimonio + sofá cama\n• Cocina completamente equipada\n• Baño con ducha\n• Aire acondicionado y calefacción\n\nIncluye todo lo necesario: lavadora, secadora, lavavajillas, horno, microondas, cafetera y más.\n\n🌿 Exterior para disfrutar todo el día\n\nRelájate en su terraza privada de 20 m² con vistas abiertas al campo:\n\n• Barbacoa\n• Zona chill out\n• Mesa exterior\n\nAdemás, podrás acceder a zonas comunes como piscina y jacuzzi (según disponibilidad).\n\n🐾 Naturaleza, finca y convivencia\n\nLa cabaña se encuentra en una finca de más de 4 hectáreas, donde hay otras viviendas independientes. Cada alojamiento mantiene su privacidad, aunque los accesos y espacios exteriores son compartidos, por lo que es posible coincidir con otros huéspedes.\n\nTambién contamos con animales de granja y huerto propio 🌱\n\n🐶 Mascotas bienvenidas\n\nPuedes venir con tu mascota, siempre que sea sociable, esté bien educada y bajo control. Es importante respetar a otros huéspedes y animales de la finca.\n\n📍 Ubicación y acceso\n\nSituada en plena naturaleza:\n\n• A 6 km del pueblo más cercano\n• A 10 km de estación de tren (Colmenar Viejo)\n• A 30 minutos de Madrid\n\nEl acceso es por camino de tierra, transitable con vehículos normales. Es imprescindible disponer de coche, aunque ofrecemos recogida en estación bajo solicitud.\n\n🎉 Ideal para escapadas o pequeñas celebraciones\n\nUn espacio perfecto para desconectar en pareja, con amigos o en familia. También existe la posibilidad de organizar pequeñas reuniones utilizando zonas comunes como la piscina (bajo reserva y suplemento).",
    shortDescription:
      "Cabaña loft única con vistas espectaculares, terraza de 20 m², barbacoa y acceso a piscina. Perfecta para desconectar a 30 min de Madrid.",
    capacity: 4,
    bedrooms: 1,
    bathrooms: 1,
    beds: 2,
    pricePerNight: 89,
    priceWeekend: 110,
    weeklyDiscount: 10,
    minStay: 2,
    maxStay: 1125,
    features: [
      "Agua caliente",
      "Agua corriente con temperatura suficiente",
      "Aire acondicionado",
      "Almohadas y mantas adicionales",
      "Alojamiento de una altura",
      "Aparcamiento gratuito en instalaciones",
      "Bandeja de repostería",
      "Barbacoa",
      "Batidora",
      "Botiquín",
      "Cafetera",
      "Café",
      "Calefacción",
      "Cocina completa",
      "Comedor al aire libre",
      "Congelador",
      "Copas de vino",
      "Disponible para estancias largas",
      "Entrada privada",
      "Espacio para guardar ropa",
      "Fogones",
      "Gel de ducha",
      "Hervidor de agua",
      "Horno",
      "Juegos de mesa",
      "Kitchenette",
      "Lavadora",
      "Libros y material de lectura",
      "Limpieza disponible durante estancia",
      "Mesa de comedor",
      "Microondas",
      "Mobiliario exterior",
      "Mosquitera",
      "Nevera",
      "Patio o balcón",
      "Perchas",
      "Persianas o cortinas opacas",
      "Piscina compartida",
      "Plancha",
      "Platos y cubiertos",
      "Productos de limpieza",
      "Ropa de cama algodón",
      "Salón privado",
      "Secador de pelo",
      "Secadora",
      "Servicios básicos",
      "Tendedero para ropa",
      "Tostadora",
      "Tumbonas",
      "TV",
      "Utensilios básicos de cocina",
      "Utensilios de barbacoa",
      "Zona para trabajar",
      "Admite mascotas",
    ],
    images: [
      "/cabana2-9.jpg",
      "/cabana2-1.jpg",
      "/cabana2-2.jpg",
      "/cabana2-3.jpg",
      "/cabana2-4.jpg",
      "/cabana2-5.jpg",
      "/cabana2-6.jpg",
      "/cabana2-7.jpg",
      "/cabana2-8.jpg",
      "/cabana2-10.jpg",
      "/cabana2-11.jpg",
      "/cabana2-12.jpg",
      "/cabana2-13.jpg",
      "/cabana2-14.jpg",
      "/cabana2-15.jpg",
      "/cabana2-16.jpg",
      "/cabana2-17.jpg",
      "/cabana2-18.jpg",
      "/cabana2-19.jpg",
      "/cabana2-20.jpg",
      "/cabana2-21.jpg",
      "/cabana2-22.jpg",
      "/cabana2-23.jpg",
      "/cabana2-24.jpg",
      "/cabana2-25.jpg",
      "/cabana2-26.jpg",
      "/cabana2-27.jpg",
      "/cabana2-28.jpg",
      "/cabana2-29.jpg",
      "/cabana2-30.jpg",
      "/cabana2-31.jpg",
      "/cabana2-32.jpg",
      "/cabana2-33.jpg",
      "/cabana2-34.jpg",
      "/cabana2-35.jpg",
      "/cabana2-36.jpg",
      "/cabana2-37.jpg",
      "/cabana2-38.jpg",
      "/cabana2-39.jpg",
    ],
    isPrimary: true,
  },
];

export const pool: PoolInfo = {
  name: "Piscina Panorámica",
  slug: "piscina",
  description:
    "Nuestra piscina de diseño moderno con vistas panorámicas al valle es el lugar perfecto para refrescarse y relajarse. Rodeada de zonas verdes y con un cómodo solárium, ofrece un espacio exclusivo para nuestros huéspedes.\n\n🏊 Diseño y características\n\nLa piscina está cuidadosamente diseñada para maximizar las vistas y el confort:\n\n• Vistas panorámicas al valle\n• Zona de solárium con tumbonas\n• Duchas exteriores para refrescarse\n• Zona lounge para relajarse después del baño\n• Áreas verdes alrededor para privacidad\n• Acceso exclusivo para huéspedes de las cabañas\n\n🌞 Abierta en verano\n\nDisfruta de la piscina durante los meses de verano, ideal para refrescarte después de explorar la naturaleza o simplemente para pasar un día relajante.\n\n💎 El lugar perfecto para relajarse\n\nSi te hospedas en cualquiera de nuestras cabañas, tendrás acceso gratuito a la piscina. Un oasis de tranquilidad rodeado de naturaleza.",
  features: [
    "Vistas panorámicas",
    "Zona solárium",
    "Tumbonas cómodas",
    "Duchas exteriores",
    "Zona lounge",
    "Áreas verdes",
    "Acceso exclusivo",
    "Agua cristalina",
  ],
  images: [
    "/piscina-1.jpg",
    "/piscina-2.jpg",
    "/piscina-3.jpg",
    "/piscina-4.jpg",
    "/piscina-5.jpg",
    "/piscina-6.jpg",
  ],
};

export const services: Service[] = [
  {
    icon: "🏊",
    title: "Piscina Privada",
    description:
      "Piscina de diseño con vistas panorámicas al valle, zona solárium y tumbonas exclusivas para huéspedes.",
  },
  {
    icon: "🌿",
    title: "Naturaleza Pura",
    description:
      "Rodeados de encinas y naturaleza virgen. Senderos para pasear y descubrir la flora y fauna local.",
  },
  {
    icon: "📶",
    title: "WiFi Gratuito",
    description:
      "Conexión WiFi de alta velocidad en todas las cabañas. Desconecta o trabaja, tú decides.",
  },
  {
    icon: "🔥",
    title: "Barbacoa",
    description:
      "Cada cabaña cuenta con su propia zona de barbacoa para disfrutar de comidas al aire libre.",
  },
  {
    icon: "🅿️",
    title: "Parking Privado",
    description:
      "Aparcamiento gratuito junto a las cabañas. Acceso fácil y seguro para tu vehículo.",
  },
  {
    icon: "🌅",
    title: "Vistas al Valle",
    description:
      "Disfruta de atardeceres espectaculares desde tu terraza privada con vistas al valle.",
  },
  {
    icon: "🛏️",
    title: "Ropa de Cama Premium",
    description:
      "Sábanas y toallas de alta calidad para que tu descanso sea perfecto.",
  },
  {
    icon: "🏡",
    title: "Terraza Privada",
    description:
      "Cada cabaña tiene su propia terraza amueblada con zona chill-out para relajarte.",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "María García",
    avatar: "MG",
    rating: 5,
    date: "Febrero 2026",
    text: "Un lugar mágico. Las cabañas son preciosas y la piscina con esas vistas es increíble. Volveremos seguro. El trato del anfitrión fue excepcional.",
    cabin: "Cabaña El Roble",
  },
  {
    id: 2,
    name: "Carlos Martínez",
    avatar: "CM",
    rating: 5,
    date: "Enero 2026",
    text: "Perfecto para desconectar. Hemos pasado un fin de semana inolvidable. La cabaña estaba impecable y la zona de barbacoa es genial. 100% recomendable.",
    cabin: "Cabaña El Encinar",
  },
  {
    id: 3,
    name: "Laura Sánchez",
    avatar: "LS",
    rating: 5,
    date: "Diciembre 2025",
    text: "Nos encantó la terraza con las luces y la pérgola. Cenamos bajo las estrellas y fue una experiencia única. La piscina panorámica es espectacular.",
    cabin: "Cabaña El Encinar",
  },
  {
    id: 4,
    name: "Javier López",
    avatar: "JL",
    rating: 4,
    date: "Noviembre 2025",
    text: "Muy buen alojamiento rural. Tranquilidad total y naturaleza por todos lados. Las vistas desde la piscina son impresionantes. Ideal para familias.",
    cabin: "Cabaña El Roble",
  },
  {
    id: 5,
    name: "Ana Rodríguez",
    avatar: "AR",
    rating: 5,
    date: "Octubre 2025",
    text: "Sin duda uno de los mejores sitios en los que hemos estado. Todo cuidado al detalle, la decoración rústica es preciosa y se respira paz.",
    cabin: "Cabaña El Roble",
  },
  {
    id: 6,
    name: "Pedro Fernández",
    avatar: "PF",
    rating: 5,
    date: "Septiembre 2025",
    text: "Fuimos con amigos y lo pasamos genial. La zona chill-out de la cabaña El Encinar es perfecta para reuniones. Repetiremos en verano por la piscina.",
    cabin: "Cabaña El Encinar",
  },
];
