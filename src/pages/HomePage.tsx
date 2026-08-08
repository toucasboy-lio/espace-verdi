import Badge from '../components/Badge';
import CTAButton from '../components/CTAButton';
import OfferCard from '../components/OfferCard';
import PlaceholderImage from '../components/PlaceholderImage';
import SectionTitle from '../components/SectionTitle';
import { projectData } from '../data/lots';

/**
 * Page d'accueil — Hero, teaser offres, CTA simulateur.
 */
function HomePage() {
  const { projectInfo, projectImages, configurations } = projectData;

  return (
    <>
      {/* Hero avec image de fond */}
      <section className="relative min-h-[70vh]">
        <PlaceholderImage
          src={projectImages.hero}
          alt="Immeuble tertiaire Espace VERDI sur l'axe RD 554"
          cover
          showOverlay
        />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-20 text-white md:px-6">
          <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Votre patrimoine professionnel sur l&apos;axe RD 554
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200 md:text-xl">
            {projectInfo.locationDetails}. Une vigntaine de lots
            tertiaires modulables pour bureaux, cabinets médicaux et
            professions libérales.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Badge label={projectInfo.deliveryDate} variant="emerald" />
            <Badge label="Brut de béton" variant="light" />
            <Badge label="RD 554" variant="light" />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton to="/simulation" variant="emerald">
              Simuler mon patrimoine SCI
            </CTAButton>
            <CTAButton
              to="/offres"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Découvrir les offres
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Teaser des 3 configurations */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            title="Nos configurations types"
            subtitle="Des formats adaptés à votre activité, cumulables pour agrandir votre surface."
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {configurations.map((config) => (
              <OfferCard key={config.id} configuration={config} compact />
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton to="/offres" variant="navy">
              Voir le détail
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA simulateur SCI */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="rounded-2xl bg-navy p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Et si vos loyers constituaient votre patrimoine retraite ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Comparez la location classique (fonds perdus) et l&apos;achat via SCI
            (capital constitué). Simulez votre scénario en quelques clics.
          </p>
          <div className="mt-8">
            <CTAButton to="/simulation" variant="emerald">
              Lancer la simulation
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
