import {  facebook, linkedin, twitter, send, shield, star, s1, s2, shuffle, afcp, renape, cemka, cro,  } from "../assets";


export const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "Société",
  },
  {
    path: "/solutions",
    title: "Solutions",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/support",
    title: "Support",
  },
  {
    path: "/devis",
    title: "Devis",
  },
];

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
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
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