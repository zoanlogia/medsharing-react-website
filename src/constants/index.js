import {  facebook, linkedin, twitter, send, shield, star, s1, s2, shuffle, afcp, renape, cemka, cro,  } from "../assets";
import { LOCALES } from "../i18n/locales.js";

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
]

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
    title: "Useful Links",
    links: [
      { 
        id: "footer-link-1-1",
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      { id: "footer-link-1-2",
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      { id : "footer-link-1-3",
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      { id : "footer-link-1-4",
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      { id : "footer-link-1-5",
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    id: "footer-link-2",
    title: "Community",
    links: [
      {
        id: "footer-link-2-1",
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        id: "footer-link-2-2",
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        id: "footer-link-2-3",
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        id: "footer-link-2-4",
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        id: "footer-link-2-5",
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    id: "footer-link-3",
    title: "Partner",
    links: [
      {
        id: "footer-link-3-1",
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        id: "footer-link-3-2",
        name: "Become a Partner",
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
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
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