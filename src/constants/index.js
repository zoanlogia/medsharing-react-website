import s1 from "@/assets/images/s1.png";
import s2 from "@/assets/images/s2.png";
import shuffle from "@/assets/images/shuffle.png";
import star from "@/assets/images/Star.svg";
import shield from "@/assets/images/Shield.svg";
import send from "@/assets/images/Send.svg";
import afcp from "@/assets/images/afcp.jpeg";
import renape from "@/assets/images/renape.jpeg";
import cemka from "@/assets/images/cemka.jpeg";
import cro from "@/assets/images/cro.png";
import linkedin from "@/assets/images/linkedin.svg";
import twitter from "@/assets/images/twitter.svg";


import { LOCALES } from "@/i18n/locales";

  export const navLinks = {
    [LOCALES.FRENCH]: [
      {
        key: "nav-1",
        path: "/",
        title: "home.title",
      },
      {
        key: "nav-2",
        path: "/about",
        title: "about.title",
      },
      {
        key: "nav-3",
        path: "/solutions",
        title: "solutions.title",
      },
      {
        key: "nav-4",
        path: "/services",
        title: "services.title",
      },
      {
        key: "nav-5",
        path: "/support",
        title: "support.title",
      },
      {
        key: "nav-6",
        path: "/devis",
        title: "devis.title",
      },
    ],
    [LOCALES.EN]: [
      {
        key: "nav-1",
        path: "/",
        title: "home.title",
      },
      {
        key: "nav-2",
        path: "/about",
        title: "about.title",
      },
      {
        key: "nav-3",
        path: "/solutions",
        title: "slutions.title",
      },
      {
        key: "nav-4",
        path: "/services",
        title: "services.title",
      },
      {
        key: "nav-5",
        path: "/support",
        title: "support.title",
      },
      {
        key: "nav-6",
        path: "/devis",
        title: "devis.title",
      },
    ],
  };

export const stats = [
  {
    id: "stats-1",
    title: "MEDSHARING a créé EOL©, une solution d'eCRF en ligne, simple, robuste et économique, totalement compatible avec tous les navigateurs et systèmes d'exploitation. ",
    icon: s1,
    value: "e-crf",
  },
  {
    id: "stats-2",
    title: "Basé sur une signature de niveau simple selon eIDAS, il permet au médecin investigateur de demander le consentement du patient via l'eCRF avant son inclusion dans l'étude.",
    icon: s2,
    value: "e-consent",
  },
  // {
  //   id: "stats-3",
  //   title: "Module-3",
  //   icon: s3,
  //   value: "e-Pro",
  // },
  {
    id: "stats-4",
    title: "EOL Random©, un module d'EOL©, gère de façon autonome ou associée à l'eCRF toutes les problématiques de randomisation grâce à un algorithme adaptatif.",
    icon: shuffle,
    value: "randomisation",
  },
];
export const counters = [
  {
    id: "counter-1",
    title: "Nombre d'étude réalisée",
    icon: s1,
    start: 0,
    end: 1500
  },
  {
    id: "counter-2",
    title: "Nombre de patient inclu",
    icon: s2,
    start: 0,
    end: 1456
  },
  {
    id: "counter-3",
    title: "Nombre de clients privé",
    icon: s2,
    start: 0,
    end: 1456
  },
  {
    id: "counter-4",
    title: "Nombre de clients publique",
    icon: s2,
    start: 0,
    end: 1456
  },
  
  {
    id: "counter-5",
    title: "Associations & sociétés savantes",
    icon: shuffle,
    value: "randomisation",
    start: 0,
    end: 20
  },
];

// export const soluces = [
//   {
//     id: "soluce-1",
//     title: "CRO",
//     img: loupe,
//     content:
//       "Fort d'une expérience de plus de 10 ans avec des CRO, \n nous avons adapté nos méthodes de travail ainsi que notre solution d'e-CRF en gardant notre philosophie initiale d'avoir un outil très générique pouvant répondre aux besoins du plus grands nombre en terme de topologie d'étude, d'organisation de travail et de profils de nos clients. Bien que les grands laboratoires, pour certaines études, imposent leurs solutions, il reste néanmoins des profils de clients et d'études qui ne sont pas adaptés à ces outils souvent complexes. Le budget, les délais, les contraintes d'utilisation, la non flexibilité sont d'autant de freins ne permettant pas d'utiliser des solutions lourdes. C'est pour cela qu'EOL© offre la possibilité de répondre sans crainte aux demandes d'e-CRF pour un plus large éventail de clients grâce à une solution éprouvée et validée. Les avantages d'EOL© : une solution simple et rapide à mettre en place ; une interface conviviale et intuitive ne demandant aucune formation préalable ;aucun souci lors du recueil des données par les utilisateurs (médecins investigateurs, TEC...) vous restez 100% autonome vis-à-vis de vos clients ; un fort accompagnement lors de la mise en place jusqu'à la livraison finale des résultats ; une solution rapidement adaptable en cours d'étude, même pour des besoins spécifiques ; une solution fiable, déjà éprouvée et validée FDA CFR PART 11.",
//   },
//   {
//     id: "soluce-2",
//     title: "Laboratoires",
//     img: drugs,
//     content: "labo blabla",
//   },
//   {
//     id: "soluce-3",
//     title: "Groupes de recherche",
//     img: groupes,
//     content: "groupes blabla",
//   },
//   {
//     id: "soluce-4",
//     title: "Institutions publiques",
//     img: kit,
//     content: "institutions blabla",
//   },
// ];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: 'E-consent',
    content: "L'eConsent ou Consentement électronique permet au médecin investigateur d'envoyer directement une demande de consentement via l'eCRF avant d'inclure son patient dans l'étude."
  },
  {
    id: "feature-2",
    icon: shield,
    title: 'Vos données sécurisées',
    content: "Pour la sécurité physique des données, nous avons fait le choix d'un prestataire certifié HDS répondant aux normes de sécurité et de fiabilités les plus strictes ainsi qu'aux exigences réglementaires quant à l'hébergement de données de santés."
  },
  {
    id: "feature-3",
    icon: send,
    title: "EOL©, l'e-CRF 100% internet",
    content: "MEDSHARING a créé EOL©, une plateforme eCRF en ligne complète, compatible avec tous les navigateurs et systèmes d'exploitation. Hébergée de manière sécurisée chez OVH, cette solution garantit disponibilité, sécurité, et simplicité, tout en permettant une mutualisation des coûts. L'approche technologique de MEDSHARING correspond aux défis actuels de la recherche clinique."
  },
];


export const feedback = [
  {
    id: "feedback-1",
    content : "Nous avions besoin d’une solution fiable, avec un excellent rapport qualité prix, accessible depuis tout le territoire français. Medsharing nous a entièrement satisfaits par sa très grande réactivité, l’adaptabilité et l’ergonomie du logiciel utilisable quasiment sans formation.Le logiciel EOL est tellement simple que nous l’utilisons directement au bloc opératoire.",
    name: "L'AFCP",
    // title: 'Association Française de Chirurgie du Pied',
    img: afcp,
  },
  {
    id: "feedback-2",
    content : "Medsharing, grâce à sa très grande réactivité et son logiciel intuitif entièrement SaaS et paramétrable, a permis en cinq ans l’inclusion de plus de 1500 patients. Il a rendu les centres autonomes, a amélioré la qualité des données, et nous laisse envisager avec sérénité une pérennisation du registre et son ouverture à l’international.",
    name: 'RENAPE',
    // title: 'Réseau National de prise en charge des Tumeurs Rares du Péritoine',
    img: renape,
  },
  {
    id: "feedback-3",
    content : 'Medsharing a mis à disposition très rapidement une solution de gestion d’étude observationnelle simple et intuitive, qui a réduit l’intervention de nos formateurs et de nos data managers au minimum, et a permis de respecter les objectifs de délais du promoteur.',
    name: 'CEMKA-EVAL',
    // title: 'a mené une étude européenne sur une maladie chronique grâce à EOL.',
    img: cemka,
  },
]

export const clients = [
  {
    id: "client-1",
    title: "CRO",
    logo: cro,
  },
  {
    id: "client-2",
    title: "CRO",
    logo: cro,
  },
  {
    id: "client-3",
    title: "CRO",
    logo: cro,
  },
  {
    id: "client-4",
    title: "CRO",
    logo: cro,
  },
];

export const footerLinks = [
  {
    id: "footer-link-1",
    title: "",
    links: [
      { 
        id: "footer-link-1-1",
        name: "Accueil",
        link: "/",
      },
      { id: "footer-link-1-2",
        name: "Devis",
        link: "/devis",
      },
    ],
  },
  {
    id: "footer-link-2",
    title: "",
    links: [
      {
        id: "footer-link-2-1",
        name: "Mentions légales",
        link: "/legacy",
      },
      {
        id: "footer-link-2-2",
        name: "rss",
        link: "/rss",
      },
    ],
  },
  {
    id: "footer-link-3",
    title: "",
    links: [
      {
        id: "footer-link-3-1",
        name: "Support",
        link: "/support",
      },
      {
        id: "footer-link-3-2",
        name: "Administration",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  // {
  //   id: "social-media-1",
  //   icon: instagram,
  //   link: "https://www.instagram.com/",
  // },
  // {
  //   id: "social-media-2",
  //   icon: facebook,
  //   link: "https://www.facebook.com/",
  // },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];