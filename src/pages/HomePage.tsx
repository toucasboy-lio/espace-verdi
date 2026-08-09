import Badge from '../components/Badge';
import CTAButton from '../components/CTAButton';
import HeroRibbon from '../components/HeroRibbon';
import PlaceholderImage from '../components/PlaceholderImage';
import PromoterPriceStamp from '../components/PromoterPriceStamp';
import { projectData } from '../data/lots';

const heroBadges = [
  'Grand parking clients & collaborateurs dédié',
  'Livraison 2028',
];

/**
 * Page d'accueil — Hero, teaser offres, CTA simulateur.
 */
function HomePage() {
  const { projectInfo, projectImages } = projectData;

  return (
    <>
      {/* Hero avec image de fond */}
      <section className="relative min-h-[70vh] overflow-x-hidden">
        <PlaceholderImage
          src={projectImages.hero}
          alt="Immeuble tertiaire Espace VERDI sur l'axe RD 554"
          cover
          showOverlay
        />
        <HeroRibbon />
        <PromoterPriceStamp />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-20 text-white md:px-6">
          <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Votre patrimoine professionnel sur l&apos;axe RD 554
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200 md:text-xl">
            {projectInfo.locationDetails}. Une vingtaine de lots
            tertiaires modulables pour bureaux, cabinets médicaux et
            professions libérales.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {heroBadges.map((label) => (
              <Badge key={label} label={label} variant="hero" />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton to="/contact" variant="emerald">
              Nous contacter
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

      {/* Teaser vers la page Offres */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Des espaces adaptés à vos besoins
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Des lots modulables dès 40&nbsp;m², cumulables
            selon vos besoins, pour votre activité
            en Provence Verte — bureaux, cabinets médicaux ou professions libérales.
          </p>
          <div className="mt-8">
            <CTAButton to="/offres" variant="navy">
              Découvrir nos offres
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="rounded-2xl bg-navy p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Et si vos loyers constituaient votre patrimoine retraite ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Investir dans vos locaux, c&apos;est transformer des loyers en capital
            plutôt que des charges sans retour. Contacter nous pour plus d'informations.
          </p>
          <div className="mt-8">
            <CTAButton to="/contact" variant="emerald">
              Nous contacter
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
