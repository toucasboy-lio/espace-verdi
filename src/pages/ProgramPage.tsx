import {
  faBuilding,
  faCalendarCheck,
  faHardHat,
  faRoad,
  faStethoscope,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatureCard from '../components/FeatureCard';
import PlaceholderImage from '../components/PlaceholderImage';
import SectionTitle from '../components/SectionTitle';
import { projectData } from '../data/lots';

/**
 * Page Programme — Présentation détaillée du bâtiment et calendrier.
 */
function ProgramPage() {
  const { projectInfo, projectImages } = projectData;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionTitle
        title="Le programme Espace VERDI"
        subtitle={`${projectInfo.totalLotsCount} lots tertiaires modulables à Néoules, sur l'axe très passant RD 554.`}
      />

      {/* Présentation générale */}
      <div className="mb-16 rounded-xl bg-white p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
            <FontAwesomeIcon icon={faBuilding} className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy">Un bâtiment tertiaire neuf</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Espace VERDI propose {projectInfo.totalLotsCount} lots de bureaux,
              cabinets médicaux et professions libérales, répartis en RDC et R+1.
              Les surfaces vont de 30 m² à 80 m² et plus, avec possibilité de
              combiner plusieurs lots contigus pour créer des plateaux sur mesure.
            </p>
            <p className="mt-3 text-sm text-slate-500">{projectInfo.address}</p>
          </div>
        </div>
      </div>

      {/* Sections illustrées */}
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <PlaceholderImage
            src={projectImages.programme.facade}
            alt="Façade du bâtiment avec visibilité sur la RD 554"
            aspectRatio="4/3"
          />
          <FeatureCard
            icon={faRoad}
            title="Visibilité maximale RD 554"
            description="Emplacement stratégique sur l'axe Néoules / Méounes / La Roquebrussanne. Forte visibilité pour votre enseigne et votre activité."
          />
        </div>

        <div>
          <PlaceholderImage
            src={projectImages.programme.parking}
            alt="Parking privatif dédié aux occupants du bâtiment"
            aspectRatio="4/3"
          />
          <FeatureCard
            icon={faBuilding}
            title="Grand parking privatif"
            description="Parking dédié aux résidents et à leurs clients. Un atout essentiel pour les cabinets médicaux et les bureaux recevant du public."
          />
        </div>

        <div>
          <PlaceholderImage
            src={projectImages.programme.pmr}
            alt="Accès PMR et ascenseur vers le R+1"
            aspectRatio="4/3"
          />
          <FeatureCard
            icon={faWheelchair}
            title="Accessibilité PMR intégrale"
            description="Accès PMR en RDC et R+1 via ascenseur. Conformité aux normes pour accueillir tous vos patients et clients."
          />
        </div>

        <div>
          <FeatureCard
            icon={faHardHat}
            title="Brut de béton, fluides en attente"
            description={projectInfo.deliveryCondition}
          />
        </div>
      </div>

      {/* Activités cibles */}
      <section className="mt-20">
        <SectionTitle
          title="Activités ciblées"
          subtitle="Des locaux adaptés à une clientèle professionnelle et médicale."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {projectInfo.targetActivities.map((activity) => (
            <div
              key={activity}
              className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm"
            >
              <FontAwesomeIcon
                icon={faStethoscope}
                className="text-2xl text-emerald-brand"
              />
              <p className="font-medium text-navy">{activity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calendrier livraison */}
      <section className="mt-20 rounded-2xl bg-navy p-8 text-white md:p-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-brand/20">
            <FontAwesomeIcon icon={faCalendarCheck} className="text-3xl text-emerald-brand" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Calendrier de livraison</h3>
            <p className="mt-2 text-lg text-slate-300">
              Livraison prévue :{' '}
              <span className="font-semibold text-emerald-brand">
                {projectInfo.deliveryDate}
              </span>
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Locaux livrés bruts de béton avec fluides en attente — liberté
              totale pour concevoir votre aménagement sur mesure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgramPage;
