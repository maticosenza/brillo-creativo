export type Insight = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  img: string;
  category: string;
  readTime: string;
  body: string[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "evento-contenido",
    date: "15.03.2026",
    title: "Cómo diseñar un evento que se convierte en contenido",
    excerpt: "El evento dejó de ser un fin en sí mismo. Hoy es la materia prima de meses de comunicación.",
    img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1600&q=80",
    category: "Estrategia",
    readTime: "6 min",
    body: [
      "Durante años, el evento se pensó como un destino: un día, un lugar, una experiencia que sucedía y se evaporaba. Esa lógica ya no alcanza. Las marcas más interesantes están diseñando eventos pensados para vivir mucho más allá del momento, como una usina de contenido capaz de alimentar redes, prensa y comunicación interna durante meses.",
      "Diseñar para contenido implica tomar decisiones desde el día cero. La escenografía deja de ser un fondo y se vuelve un set. La iluminación no solo ambienta: trabaja también para cámara. El run-of-show contempla momentos pensados para registro y otros para audiencia presente. Esa doble capa, bien resuelta, multiplica el ROI sin sumar costos significativos.",
      "El otro pilar es el equipo. No se trata de sumar un fotógrafo y un camarógrafo al final, sino de integrar al equipo audiovisual desde el guion. Cuando creatividad, producción y contenido trabajan juntos desde el inicio, lo que sucede en el evento ya viene editado en la cabeza de quienes lo registran.",
    ],
  },
  {
    slug: "tendencias-2026",
    date: "02.03.2026",
    title: "5 tendencias de producción para 2026",
    excerpt: "Lo que estamos viendo en briefs, presupuestos y decisiones creativas este año.",
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1600&q=80",
    category: "Tendencias",
    readTime: "5 min",
    body: [
      "Cada año revisamos los briefs que entran al estudio para identificar patrones. En 2026 vemos cinco movimientos claros: formatos más cortos pero más densos, escenografías modulares reutilizables, mayor inversión en contenido post-evento, integración de IA generativa en piezas visuales y un retorno fuerte de lo presencial íntimo frente a los grandes formatos.",
      "Lo más interesante no es ninguna tendencia individual, sino cómo se cruzan. Un evento corporativo de 200 personas hoy puede tener la producción audiovisual de una gala de 2.000, porque la mayor parte del público va a verlo después en pantalla.",
    ],
  },
  {
    slug: "roi-activaciones",
    date: "18.02.2026",
    title: "El ROI de las activaciones de marca",
    excerpt: "Cómo medir lo que parece imposible de medir y por qué importa más que nunca.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    category: "Métricas",
    readTime: "7 min",
    body: [
      "El gran mito sobre las activaciones de marca es que no se pueden medir. Es falso. Lo que pasa es que la mayoría de las marcas miden mal: cuentan asistentes, fotos en redes y poco más. El verdadero ROI vive en otra capa.",
      "Trabajamos con un dashboard de cuatro capas: alcance, engagement, sentiment y conversión asistida. Combinar esas cuatro lecturas le da al cliente una foto real del impacto y, lo más importante, insumos para tomar decisiones sobre la próxima inversión.",
    ],
  },
  {
    slug: "produccion-hibrida",
    date: "30.01.2026",
    title: "Producción híbrida: presencial + streaming",
    excerpt: "El formato híbrido dejó de ser una concesión pandémica. Hoy es estándar.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    category: "Producción",
    readTime: "6 min",
    body: [
      "La producción híbrida bien hecha no es transmitir una cámara fija de un evento presencial. Es diseñar dos experiencias paralelas que respetan los lenguajes de cada audiencia.",
      "El público en sala vive el ritmo del lugar; la audiencia remota necesita planos cerrados, transiciones cuidadas y un host que la sostenga. Resolverlo bien implica equipos diferenciados y un guion pensado en doble pantalla desde el día uno.",
    ],
  },
  {
    slug: "talento-en-vivo",
    date: "12.01.2026",
    title: "Cómo trabajar con talento en vivo sin morir en el intento",
    excerpt: "Riders, expectativas y la coordinación detrás de un show impecable.",
    img: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&w=1600&q=80",
    category: "Producción",
    readTime: "5 min",
    body: [
      "Trabajar con talento en vivo es un ejercicio de gestión de expectativas tanto como de logística. Los grandes problemas casi nunca son técnicos: son acuerdos mal cerrados, riders ambiguos y comunicación tardía.",
      "Una buena producción de talento empieza meses antes, con un brief claro, contratos detallados y un único punto de contacto del lado de la marca y del lado del management. El día del show, todo lo importante ya pasó.",
    ],
  },
  {
    slug: "diseno-escenario",
    date: "20.12.2025",
    title: "Diseño de escenario: arquitectura efímera",
    excerpt: "Pensar el escenario como un edificio temporal cambia las decisiones desde el primer boceto.",
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
    category: "Diseño",
    readTime: "8 min",
    body: [
      "Un escenario es arquitectura. Tiene escala, materialidad, luz, recorrido y narrativa. Pensado así, deja de ser un decorado y se vuelve parte estructural de la experiencia.",
      "En el estudio trabajamos cada escenario con planos arquitectónicos, render fotorrealista y maquetas físicas. Esa exigencia, que suena excesiva, evita sorpresas en montaje y le da al cliente certeza desde la primera presentación.",
    ],
  },
];

export const getInsight = (slug: string) =>
  INSIGHTS.find((i) => i.slug === slug);