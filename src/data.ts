import type { TimelineData } from "./types";

export const timelineData: TimelineData = {
  events: [
    {
      side: "left",
      year: "1961",
      title: "Teoría de conmutación de paquetes",
      description:
        "Leonard Kleinrock publica <em>Information Flow in Large Communication Nets</em>, sentando las bases teóricas de la conmutación de paquetes que luego usaría Internet.",
      emphasis: ["Information Flow in Large Communication Nets"],
    },
    {
      side: "right",
      year: "29 de octubre de 1969",
      title: "Primer mensaje de ARPANET",
      description:
        "ARPANET envía el primer mensaje host a host entre UCLA y el Stanford Research Institute (SRI); se considera el precursor directo de Internet.",
    },
    {
      side: "left",
      year: "1971",
      title: "Primer correo electrónico en red",
      description:
        "Ray Tomlinson envía el primer correo electrónico entre dos computadoras distintas y populariza el uso del símbolo '@'.",
    },
    {
      side: "right",
      year: "1974",
      title: "Diseño de TCP/IP",
      description:
        "Vinton Cerf y Robert Kahn publican el diseño de TCP, el conjunto de protocolos que permitiría interconectar redes heterogéneas.",
    },
    {
      side: "left",
      year: "1 de enero de 1983",
      title: 'ARPANET adopta TCP/IP ("Flag Day")',
      description:
        "ARPANET migra oficialmente de NCP a TCP/IP. Esta fecha se considera simbólicamente el nacimiento de Internet.",
    },
    {
      side: "right",
      year: "1983",
      title: "Nace el DNS",
      description:
        "Paul Mockapetris desarrolla el Sistema de Nombres de Dominio, que traduce nombres legibles a direcciones IP numéricas.",
    },
    {
      side: "left",
      year: "Marzo de 1989",
      title: "Propuesta original de la World Wide Web",
      description:
        "Tim Berners-Lee redacta <em>Information Management: A Proposal</em>, el documento fundacional que da origen a la WWW.",
      emphasis: ["Information Management: A Proposal"],
    },
    {
      side: "right",
      year: "Diciembre de 1990",
      title: "HTML, HTTP, URL y el primer navegador",
      description:
        "Berners-Lee desarrolla en una computadora NeXT los cuatro pilares de la Web: HTML, HTTP, URL y el navegador <em>WorldWideWeb</em>.",
      emphasis: ["WorldWideWeb"],
    },
    {
      side: "left",
      year: "6 de agosto de 1991",
      title: "Primer sitio web publicado",
      description:
        "Berners-Lee publica el primer sitio web (info.cern.ch) y anuncia el proyecto en el foro alt.hypertext.",
    },
    {
      side: "right",
      year: "1991",
      title: "HTTP/0.9",
      description:
        "Primera versión funcional de HTTP: solo admitía GET, sin cabeceras ni códigos de estado.",
    },
    {
      side: "left",
      year: "1991",
      title: "Primera versión de HTML",
      description:
        "Berners-Lee publica la primera versión de HTML, un lenguaje basado en SGML con etiquetas para estructurar texto e hipervínculos.",
    },
    {
      side: "right",
      year: "Junio de 1993",
      title: "NCSA Mosaic populariza la Web",
      description:
        "Marc Andreessen y Eric Bina lanzan Mosaic, el primer navegador gráfico ampliamente adoptado.",
    },
    {
      side: "left",
      year: "9 de septiembre de 1994",
      title: "Fundación de Netscape",
      description:
        "Marc Andreessen y Jim Clark fundan Netscape Communications y lanzan su primer navegador comercial.",
    },
    {
      side: "right",
      year: "1994",
      title: "Primera versión de SSL",
      description:
        "Netscape desarrolla SSL 1.0 para cifrar comunicaciones web; antecedente directo del actual HTTPS.",
    },
    {
      side: "left",
      year: "Octubre de 1994",
      title: "Propuesta original de CSS",
      description:
        "Håkon Wium Lie publica <em>Cascading HTML Style Sheets</em>, germen del lenguaje CSS para separar contenido y presentación.",
      emphasis: ["Cascading HTML Style Sheets"],
    },
    {
      side: "right",
      year: "1994",
      title: "Se funda el W3C",
      description:
        "Tim Berners-Lee funda el World Wide Web Consortium en el MIT para desarrollar estándares abiertos para la Web.",
    },
    {
      side: "left",
      year: "Febrero de 1995",
      title: "SSL 2.0 — primera versión pública",
      description:
        "Netscape publica SSL 2.0, permitiendo las primeras conexiones web seguras.",
    },
    {
      side: "right",
      year: "Mayo de 1995",
      title: "Creación del prototipo de JavaScript",
      description:
        "Brendan Eich diseña en solo diez días un prototipo de lenguaje (Mocha/LiveScript) para dar interactividad a la Web.",
    },
    {
      side: "left",
      year: "Septiembre de 1995",
      title: "JavaScript se lanza públicamente",
      description:
        "Netscape lanza JavaScript en Navigator 2.0, tras renombrarlo como estrategia de marketing junto a Sun Microsystems.",
    },
    {
      side: "right",
      year: "1995",
      title: "HTML 2.0 se estandariza",
      description:
        "El IETF publica HTML 2.0, la primera especificación de HTML tratada como estándar formal.",
    },
    {
      side: "left",
      year: "1996",
      title: "SSL 3.0",
      description:
        "Netscape rediseña por completo el protocolo y publica SSL 3.0, base sobre la que se construiría TLS.",
    },
    {
      side: "right",
      year: "17 de diciembre de 1996",
      title: "CSS1 — primera especificación oficial",
      description:
        "El W3C publica CSS Nivel 1, que permitía aplicar estilos básicos a documentos HTML.",
    },
    {
      side: "left",
      year: "1997",
      title: "HTML 3.2",
      description:
        "El W3C publica HTML 3.2, con soporte para tablas, applets y otros elementos de presentación.",
    },
    {
      side: "right",
      year: "1997",
      title: "HTML 4.0",
      description:
        "El W3C publica HTML 4.0, promoviendo la separación entre contenido (HTML) y presentación (CSS).",
    },
    {
      side: "left",
      year: "1997",
      title: "Primera edición de ECMAScript",
      description:
        "Se publica la primera edición del estándar ECMAScript ante ECMA International.",
    },
    {
      side: "right",
      year: "Mayo de 1998",
      title: "CSS2",
      description:
        "El W3C publica CSS Nivel 2, con posicionamiento absoluto/relativo y mayor control del diseño.",
    },
    {
      side: "left",
      year: "1999",
      title: "HTML 4.01",
      description:
        "Revisión y consolidación de HTML 4.0; estándar de referencia hasta la llegada de HTML5.",
    },
    {
      side: "right",
      year: "Enero de 1999",
      title: "TLS 1.0 — sucesor de SSL",
      description:
        "El IETF estandariza TLS 1.0 a partir de SSL 3.0, consolidando el cifrado que sustenta HTTPS.",
    },
    {
      side: "left",
      year: "2008",
      title: "Inicio del desarrollo activo de HTML5",
      description:
        "El W3C y el WHATWG intensifican el desarrollo de HTML5 para el video, audio y aplicaciones web.",
    },
    {
      side: "right",
      year: "28 de octubre de 2014",
      title: "HTML5 — recomendación oficial del W3C",
      description:
        "El W3C publica HTML5 como Recomendación oficial, consolidando el estándar moderno de la Web.",
    },
    {
      side: "left",
      year: "2015",
      title: "ECMAScript 6 (ES2015)",
      description:
        "Se publica ES6, con clases, módulos, promesas y funciones flecha — la actualización más importante de JavaScript.",
    },
    {
      side: "right",
      year: "2018",
      title: "HTTPS se convierte en el estándar por defecto",
      description:
        "Los navegadores marcan como \"no seguros\" los sitios sin HTTPS; TLS 1.3 consolida HTTPS como predeterminado.",
    },
  ],
  references: [
    {
      authors: "Berners-Lee, T.",
      year: "1989",
      title: "Information management: A proposal",
      source: "World Wide Web Consortium",
      url: "https://www.w3.org/History/1989/proposal.html",
    },
    {
      authors: "Bradford, P. y Pappas, N.",
      year: "2022",
      title: "The history of the Internet: From ARPANET to the World Wide Web",
      source: "Computer Networks",
      detail: "pp. 1–28. Springer.",
    },
    {
      authors: "Exabeam.",
      year: "2025",
      title: "SSL vs. TLS: The history of encryption protocols",
      source: "Exabeam",
      url: "https://www.exabeam.com/information-safety/ssl-vs-tls/",
    },
    {
      authors: "Genbeta.",
      year: "2025",
      title: "JavaScript: la historia del lenguaje de la Web",
      source: "Genbeta",
      url: "https://www.genbeta.com/desarrollo/web/javascript-historia-lenguaje",
    },
    {
      authors: "GeeksforGeeks.",
      year: "2025",
      title: "History of email",
      source: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/history-of-email/",
    },
    {
      authors: "Kleinrock, L.",
      year: "1961",
      title: "Information flow in large communication nets",
      source: "RLE Quarterly Progress Report, MIT.",
    },
    {
      authors: "MDN Web Docs.",
      year: "s. f.",
      title: "A brief history of the Web",
      source: "Mozilla",
      url: "https://developer.mozilla.org",
    },
    {
      authors: "Smitterhane, A.",
      year: "2023",
      title: "The evolution of TLS: From SSL to modern encryption",
      source: "Cybersecurity Journal",
      detail: "14(2), 45–62.",
    },
    {
      authors: "SitesBay.",
      year: "s. f.",
      title: "CSS history and evolution",
      source: "SitesBay",
      url: "https://www.sitesbay.com/css/css-history",
    },
    {
      authors: "TechEngage.",
      year: "2026",
      title: "How TCP/IP became the backbone of the Internet",
      source: "TechEngage",
      url: "https://techengage.com",
    },
    {
      authors: "W3C.",
      year: "2016",
      title: "CSS: Cascading style sheets",
      source: "World Wide Web Consortium",
      url: "https://www.w3.org/Style/CSS/",
    },
    {
      authors: "Wikipedia.",
      year: "s. f.",
      title: "World Wide Web",
      source: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/World_Wide_Web",
    },
    {
      authors: "div.zone Docs.",
      year: "s. f.",
      title: "History of HTML",
      source: "div.zone",
      url: "https://docs.div.zone",
    },
    {
      authors: "Vidal, E.",
      year: "s. f.",
      title: "Historia de los navegadores web: de Mosaic a Chrome",
      source: "Bitácora Digital",
      url: "https://www.bitacora.com.mx",
    },
  ],
};
