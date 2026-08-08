import {
  faBuilding,
  faCalendarCheck,
  faCar,
  faChartLine,
  faEye,
  faPuzzlePiece,
  faStethoscope,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatureCard from '../components/FeatureCard';
import PlaceholderImage from '../components/PlaceholderImage';
import SectionTitle from '../components/SectionTitle';
import type { KeyFeature } from '../data/lots';
import { projectData } from '../data/lots';

const featureIconByIndex: IconDefinition[] = [
  faEye,
  faCar,
  faWheelchair,
  faPuzzlePiece,
  faChartLine,
  faBuilding,
];

function IllustratedFeature({
  feature,
  icon,
}: {
  feature: KeyFeature & { image: string; description: string };
  icon: IconDefinition;
}) {
  return (
    <article>
      <PlaceholderImage
        src={feature.image}
        alt={feature.title}
        aspectRatio="4/3"
      />
      <div className="mt-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
          <FontAwesomeIcon icon={icon} className="text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-navy">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * Page Programme — Présentation détaillée du bâtiment et calendrier.
 */
function ProgramPage() {
  const { projectInfo } = projectData;

  const illustratedFeatures = projectInfo.keyFeatures.flatMap((feature, index) =>
    feature.image && feature.description
      ? [{ feature: feature as KeyFeature & { image: string; description: string }, index }]
      : [],
  );
  const textFeatures = projectInfo.keyFeatures.flatMap((feature, index) =>
    !feature.image ? [{ feature, index }] : [],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionTitle
        title="Le programme Espace VERDI"
        subtitle={`Une vingtaine de lots tertiaires modulables à Néoules, sur l'axe très passant RD 554.`}
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

      {/* Atouts illustrés (keyFeatures avec image) */}
      {illustratedFeatures.length > 0 && (
        <section className="mb-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {illustratedFeatures.map(({ feature, index }) => (
              <IllustratedFeature
                key={feature.title}
                feature={feature}
                icon={featureIconByIndex[index]}
              />
            ))}
          </div>
        </section>
      )}

      {/* Atouts clés (keyFeatures sans image) */}
      {textFeatures.length > 0 && (
        <section className="mb-20">
          <SectionTitle
            title="Les atouts du programme"
            subtitle="Un emplacement premium et des locaux pensés pour les professionnels exigeants."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {textFeatures.map(({ feature, index }) => (
              <FeatureCard
                key={feature.title}
                icon={featureIconByIndex[index]}
                title={feature.title}
                description={feature.description ?? ''}
              />
            ))}
          </div>
        </section>
      )}

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
              {projectInfo.deliveryCondition} — liberté totale pour concevoir
              votre aménagement sur mesure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgramPage;
