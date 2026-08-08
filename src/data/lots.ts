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

/** Valeurs par défaut et texte légal du simulateur SCI */
export interface SimulationDefaults {
  defaultMonthlyRent: number;
  defaultYears: number;
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
      'Locaux livrés bruts de béton, fluides en attente (Aménagement 100% sur-mesure)',
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
    defaultMonthlyRent: 1200,
    defaultYears: 15,
    tvaNotice:
      "En optant pour la TVA via une SCI, vous récupérez 20% de TVA sur l'acquisition et le loyer versé par votre société d'exploitation rembourse le crédit.",
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

/** Calcule le prix TTC moyen des 3 configurations (base simulateur SCI) */
export function getAverageStartingPrice(): number {
  const { configurations } = projectData;
  const total = configurations.reduce(
    (sum, config) => sum + config.startingPriceHT,
    0,
  );
  return Math.round(total / configurations.length);
}

/** Formate un montant en euros (locale fr-FR) */
export function formatEuro(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}
