/**
 * Source de vérité unique du site Espace VERDI.
 * Toutes les pages et composants lisent exclusivement projectData.
 */

/** Informations générales du programme immobilier */
export interface ProjectInfo {
  name: string;
  address: string;
  locationDetails: string;
  phone: string;
  email: string;
  deliveryDate: string;
  deliveryCondition: string;
  totalLotsCount: number;
  keyFeatures: string[];
  targetActivities: string[];
}

/** Chemins des visuels de présentation (remplaçables dans public/images/) */
export interface ProjectImages {
  hero: string;
  programme: {
    facade: string;
    parking: string;
    pmr: string;
  };
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
    phone: '04 XX XX XX XX',
    email: 'contact@espace-verdi.fr',
    deliveryDate: '2028',
    deliveryCondition:
      'Locaux livrés bruts de béton, fluides en attente (Aménagement libre)',
    totalLotsCount: 20,
    keyFeatures: [
      "Forte visibilité sur l'axe très passant RD 554",
      'Grand parking privatif dédié aux résidents et clients',
      'Accessibilité PMR intégrale (RDC & R+1 via ascenseur)',
      'une vingtaine de lots modulables et combinables de 40 m² à 80 m²+',
      'Constitution de patrimoine via SCI (récupération de TVA)',
      'Liberté totale d\'aménagement intérieur',
    ],
    targetActivities: [
      'Cabinets médicaux & paramédicaux',
      'Professions libérales (Avocats, Experts-comptables...)',
      "Bureaux d'entreprises & services",
    ],
  },
  projectImages: {
    hero: '/images/hero-espace-verdi.jpg',
    programme: {
      facade: '/images/programme-facade.jpg',
      parking: '/images/programme-parking.jpg',
      pmr: '/images/programme-pmr.jpg',
    },
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
        "Possibilité d'assembler plusieurs lots contigus",
        "Fluides en attente pour sanitaires privatifs ou point d'eau",
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
        'Grands volumes aménageables à la carte',
        "Possibilité d'assembler plusieurs lots contigus",
        'Emplacement premium dans le bâtiment',
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
