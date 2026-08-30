/**
 * Source de vérité unique du site Espace VERDI.
 * Toutes les pages et composants lisent exclusivement projectData.
 */

/** Atout commercial du programme */
export interface KeyFeature {
  title: string;
  description?: string;
  image?: string;
}

/** Informations générales du programme immobilier */
export interface ProjectInfo {
  name: string;
  address: string;
  locationDetails: string;
  phones: string[];
  email: string;
  deliveryDate: string;
  deliveryCondition: string;
  minSurfaceM2: number;
  maxSurfaceM2: number;
  keyFeatures: KeyFeature[];
  targetActivities: string[];
}

/** Chemins des visuels de présentation (remplaçables dans public/images/) */
export interface ProjectImages {
  hero: string;
}

/** Valeurs par défaut et texte légal du simulateur d'acquisition */
export interface SimulationDefaults {
  defaultOfficePriceHT: number;
  defaultAmenagement: number;
  defaultPersonalContribution: number;
  defaultYears: number;
  interestRate: number;
  officePriceMin: number;
  officePriceMax: number;
  personalContributionMax: number;
  /** Taux indicatif frais de notaire VEFA (immeuble neuf), en % du prix HT */
  notaryFeeRate: number;
  /** Taux indicatif frais de notaire en immobilier ancien, pour comparaison */
  notaryFeeRateOld: number;
  tvaNotice: string;
}

/** Offre commerciale (configuration type) */
export interface Configuration {
  id: string;
  title: string;
  surfaceRange: string;
  idealFor: string;
  startingPriceHT: number;
  features: string[];
  image: string;
}

/** Catégorie d'offres par étage / activité */
export interface OfferCategory {
  id: string;
  title: string;
  subtitle?: string;
  offers: Configuration[];
}

/** Structure complète des données du projet */
export interface ProjectData {
  projectInfo: ProjectInfo;
  projectImages: ProjectImages;
  simulationDefaults: SimulationDefaults;
  offerCategories: OfferCategory[];
}

const MIN_SURFACE_M2 = 20;
const MAX_SURFACE_M2 = 80;

/** Données commerciales et techniques du programme Espace VERDI */
export const projectData: ProjectData = {
  projectInfo: {
    name: 'Espace VERDI',
    address: 'Les Croys, RD 554, 83136 Néoules',
    locationDetails:
      "Emplacement stratégique sur l'axe Néoules / Méounes / La Roquebrussanne",
    phones: ['06 35 27 08 46', '06 21 87 58 68'],
    email: 'contact@espace-verdi.fr',
    deliveryDate: '2028',
    deliveryCondition:
      'Locaux livrés bruts de béton, fluides en attente (Aménagement libre)',
    minSurfaceM2: MIN_SURFACE_M2,
    maxSurfaceM2: MAX_SURFACE_M2,
    keyFeatures: [
      {
        title: 'Visibilité maximale RD 554',
        description:
          "Emplacement stratégique sur un axe très passant entre Néoules, Méounes et La Roquebrussanne. Une exposition idéale pour votre enseigne.",
        image: `${import.meta.env.BASE_URL}images/programme-position.jpg`,
      },
      {
        title: 'Grand parking privatif (50 places)',
        description:
          'Stationnement facile et gratuit dédié aux occupants, clients et patients. Un atout clé pour l’accueil du public.',
        image: `${import.meta.env.BASE_URL}images/programme-parking.jpg`,
      },
      {
        title: 'Accès rapide aux bassins d\'emplois et de population',
        description:
          'ZA Fray Redon (Rocbaron): 8 minutes\nBrignoles: 20 minutes\nZI Toulon-Est La Farlede: 25 minutes\nToulon: 30 minutes',
      },
      {
        title: 'Accessibilité PMR intégrale',
        description:
          'Bâtiment 100 % conforme aux normes PMR en RDC et R+1 avec ascenseur adapté.',
      },
      {
        title: 'Lots modulables et combinables',
        description:
          `Plateaux de ${MIN_SURFACE_M2} à ${MAX_SURFACE_M2} m²+ assemblables sur mesure pour façonner l’espace adapté à votre activité.`,
      },
      {
        title: 'Constitution de patrimoine',
        description:
          'Devenez propriétaire de vos locaux professionnels et capitalisez plutôt que de payer des loyers à perte.',
      },
      {
        title: 'Liberté totale d\'aménagement',
        description:
          'Locaux livrés bruts avec fluides en attente pour un aménagement sur mesure adapté à votre métier.',
      },
      {
        title: 'Frais de notaire réduits',
        description:
          'Achat en VEFA neuf : bénéficiez de frais de notaire réduits à environ 2 à 3 % (contre 7 à 8 % dans l’ancien).',
      },
      {
        title: 'Sanitaires communs par étage',
        description:
          'Blocs WC communs au RDC et R+1 : économisez de la surface utile au sein de votre lot.',
      },
      {
        title: 'Couloirs larges à l\'étage (zone d\'attente)',
        description:
          'Espaces de circulation généreux à l’étage, idéaux pour aménager une zone d’attente visiteurs ou patients.',
      },
      {
        title: 'Accès direct extérieur au RDC',
        description:
          'Sortie directe vers l’extérieur pour tous les lots du rez-de-chaussée : autonomie renforcée.',
      },
    ],
    targetActivities: [
      'Cabinets médicaux & paramédicaux',
      'Professions libérales (Avocats, Experts-comptables...)',
      "Bureaux d'entreprises & services",
    ],
  },
  projectImages: {
    hero: `${import.meta.env.BASE_URL}images/hero-espace-verdi.jpg`,
  },
  simulationDefaults: {
    defaultOfficePriceHT: 149000,
    defaultAmenagement: 50000,
    defaultPersonalContribution: 20000,
    defaultYears: 15,
    interestRate: 3.5,
    officePriceMin: 99000,
    officePriceMax: 299000,
    personalContributionMax: 100000,
    notaryFeeRate: 2.5,
    notaryFeeRateOld: 7.5,
    tvaNotice:
      "Inclus : Récupération de la TVA (20 %) sur l'acquisition et les travaux d'aménagement via le montage SCI.",
  },
  offerCategories: [
    {
      id: 'bureaux-rdc',
      title: 'Bureaux au RDC',
      subtitle:
        'Plateaux au rez-de-chaussée avec accès direct extérieur et visibilité sur la RD 554',
      offers: [
        {
          id: 'bureaux-rdc-medium',
          title: 'Plateau Bureau & Équipe',
          surfaceRange: '40 m² à 60 m²',
          idealFor:
            'Cabinet de conseil, agence immobilière ou d\'assurance, expert-comptable, avocat, cabinet d\'architecture, agence de communication, bureau d\'études — équipe de 2 à 4 collaborateurs',
          startingPriceHT: 149000,
          features: [
            'Aménagement flexible : Accueil + 2 à 3 bureaux cloisonnés',
            'Accès direct extérieur et visibilité enseigne',
            'Faibles charges de copropriété',
          ],
          image: `${import.meta.env.BASE_URL}images/config-medium.jpg`,
        },
        {
          id: 'bureaux-rdc-large',
          title: 'Grand Plateau / Siège',
          surfaceRange: '75 m² à 80 m² (ou plus par combinaison)',
          idealFor:
            'Siège social, centre d\'affaires ou espace coworking, cabinet pluridisciplinaire (conseil, RH, juridique, ingénierie), plateforme de services administratifs ou téléservices',
          startingPriceHT: 199000,
          features: [
            'Grands volumes aménageables',
            'Idéal pour mutualiser les coûts entre plusieurs associés ou activités',
            'Accès PMR direct depuis le parking',
          ],
          image: `${import.meta.env.BASE_URL}images/config-large.jpg`,
        },
      ],
    },
    {
      id: 'sante-etage',
      title: 'Espace Santé / Bien-être au 1er étage',
      subtitle:
        'Pôle santé au R+1 avec couloirs larges pour zone d\'attente et accessibilité PMR.',
      offers: [
        {
          id: 'sante-solo',
          title: 'Cabinet Praticien',
          surfaceRange: '20 m² à 25 m²',
          idealFor:
            'Praticien individuel : médecin, psychologue, orthophoniste, infirmier, diététicien, ostéopathe, sage-femme, ou spécialiste du bien-être (sophrologue, naturopathe, hypnothérapeute)',
          startingPriceHT: 89000,
          features: [
            "Faible coût d'acquisition",
            'Espace à optimisation maximale',
            'Accès PMR par ascenseur',
          ],
          image: `${import.meta.env.BASE_URL}images/sante-solo.jpg`,
        },
        {
          id: 'sante-medium',
          title: 'Cabinet Premium',
          surfaceRange: '40 m² à 60 m²',
          idealFor:
            'Médecins, dentistes ou spécialistes souhaitant plus d\'espace pour leur équipe (assistant, plusieurs salles de soin)',
          startingPriceHT: 149000,
          features: [
            'Aménagement flexible',
            'Couloirs larges pour zone d\'attente patients',
            'Format le plus demandé : Forte valeur à la revente et à la location',
          ],
          image: `${import.meta.env.BASE_URL}images/sante-medium.jpg`,
        },
        {
          id: 'sante-large',
          title: 'Grand Espace / Centre Paramédical',
          surfaceRange: '75 m² à 80 m² (ou plus par combinaison)',
          idealFor:
            'Cabinet de kinésithérapie, centre de santé pluridisciplinaire ou pôle bien-être regroupant plusieurs praticiens',
          startingPriceHT: 199000,
          features: [
            'Grands volumes aménageables : idéal pour salle d\'exercice et plateau technique',
            'Idéal pour mutualiser les coûts entre plusieurs associés ou activités',
          ],
          image: `${import.meta.env.BASE_URL}images/sante-large.jpg`,
        },
      ],
    },
  ],
};

/** Retrouve une offre par son identifiant */
export function getConfigurationById(id: string): Configuration | undefined {
  return projectData.offerCategories
    .flatMap((category) => category.offers)
    .find((offer) => offer.id === id);
}

/** Libellé marketing « dès X m² » */
export function formatMinSurfaceLabel(): string {
  return `dès ${projectData.projectInfo.minSurfaceM2} m²`;
}

/** Libellé marketing « de X m² à Y m² et plus » */
export function formatSurfaceRangeLabel(): string {
  const { minSurfaceM2, maxSurfaceM2 } = projectData.projectInfo;
  return `de ${minSurfaceM2} m² à ${maxSurfaceM2} m² et plus`;
}

/** Formate un montant en euros (locale fr-FR) */
export function formatEuro(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}
