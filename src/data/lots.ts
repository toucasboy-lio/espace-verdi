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
  totalLotsCount: number;
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

/** Une des 3 configurations types commercialisées */
export interface Configuration {
  id: string;
  title: string;
  surfaceRange: string;
  idealFor: string;
  startingPriceHT: number;
  features: string[];
  floorAvailability: string;
  image: string;
}

/** Structure complète des données du projet */
export interface ProjectData {
  projectInfo: ProjectInfo;
  projectImages: ProjectImages;
  simulationDefaults: SimulationDefaults;
  configurations: Configuration[];
}

/** Données commerciales et techniques du programme Espace VERDI */
export const projectData: ProjectData = {
  projectInfo: {
    name: 'Espace VERDI',
    address: 'Les Croys, RD 554, 83136 Néoules',
    locationDetails:
      "Emplacement stratégique sur l'axe Néoules / Méounes / La Roquebrussanne",
    phones: ['04 XX XX XX XX', '04 XX XX XX XX'],
    email: 'contact@espace-verdi.fr',
    deliveryDate: '2028',
    deliveryCondition:
      'Locaux livrés bruts de béton, fluides en attente (Aménagement libre)',
    totalLotsCount: 20,
    keyFeatures: [
      {
        title: 'Visibilité maximale RD 554',
        description:
          "Emplacement stratégique sur un axe très passant entre Néoules, Méounes et La Roquebrussanne. Une exposition idéale pour votre enseigne.",
        image: '/images/programme-facade.jpg',
      },
      {
        title: 'Grand parking privatif',
        description:
          'Stationnement facile et gratuit dédié aux occupants, clients et patients. Un atout clé pour l’accueil du public.',
        image: '/images/programme-parking.jpg',
      },
      {
        title: 'Accessibilité PMR intégrale',
        description:
          'Bâtiment 100 % conforme aux normes PMR en RDC et R+1 avec ascenseur adapté.',
      },
      {
        title: 'Lots modulables et combinables',
        description:
          'Plateaux de 40 à 80 m²+ assemblables sur mesure pour façonner l’espace adapté à votre activité.',
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
        title: 'Couloirs larges & zones d\'attente',
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
    hero: '/images/hero-espace-verdi.jpg',
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
  configurations: [
    {
      id: 'config-medium',
      title: 'Plateau Cabinet & Équipe',
      surfaceRange: '40 m² à 60 m²',
      idealFor:
        'Cabinet regroupant 2 à 4 professionnels, étude, agence, équipe médicale',
      startingPriceHT: 99000,
      features: [
        'Aménagement flexible : Accueil + 2 à 3 bureaux cloisonnés',
        "Format le plus demandé : Forte valeur à la revente et à la location",
        "Faibles charges de copropriété",
      ],
      floorAvailability: 'Disponible en RDC et R+1',
      image: '/images/config-medium.jpg',
    },
    {
      id: 'config-large',
      title: 'Grand Espace / Centre Paramédical',
      surfaceRange: '75 m² à 80 m² (ou plus par combinaison)',
      idealFor:
        'Centre de santé, cabinet pluridisciplinaire, siège d\'entreprise',
      startingPriceHT: 179000,
      features: [
        'Grands volumes aménageables',
        'Idéal pour mutualiser les coûts entre plusieurs associés',
        "Arrivées d'eau et évacuations en attente (idéal lave-mains par cabinet)"
      ],
      floorAvailability: 'Disponible en RDC et R+1',
      image: '/images/config-large.jpg',
    },
  ],
};

/** Retrouve une configuration par son identifiant */
export function getConfigurationById(id: string): Configuration | undefined {
  return projectData.configurations.find((config) => config.id === id);
}

/** Formate un montant en euros (locale fr-FR) */
export function formatEuro(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}
