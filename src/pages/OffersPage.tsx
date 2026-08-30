import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTAButton from '../components/CTAButton';
import OfferCard from '../components/OfferCard';
import SectionTitle from '../components/SectionTitle';
import { formatSurfaceRangeLabel, projectData } from '../data/lots';

function getOfferGridClass(offerCount: number): string {
  switch (offerCount) {
    case 1:
      return 'mx-auto grid max-w-md grid-cols-1 gap-10';
    case 2:
      return 'mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2';
    default:
      return 'grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3';
  }
}

/**
 * Page Offres — catégories par étage + modularité.
 */
function OffersPage() {
  const { offerCategories } = projectData;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionTitle
        title="Nos offres"
        subtitle="Des lots modulables et combinables : Bureaux au RDC, Pôle Santé & Bien-être au 1er étage."
      />

      {offerCategories.map((category, index) => (
        <section
          key={category.id}
          className={index > 0 ? 'mt-20' : undefined}
          aria-labelledby={`category-${category.id}`}
        >
          <div className="mb-10">
            <h2
              id={`category-${category.id}`}
              className="text-2xl font-bold tracking-tight text-navy md:text-3xl"
            >
              {category.title}
            </h2>
            {category.subtitle && (
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-600">
                {category.subtitle}
              </p>
            )}
          </div>

          <div className={getOfferGridClass(category.offers.length)}>
            {category.offers.map((offer) => (
              <OfferCard key={offer.id} configuration={offer} />
            ))}
          </div>
        </section>
      ))}

      <section className="mt-20 rounded-2xl bg-white p-8 shadow-sm md:p-12">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
            <FontAwesomeIcon icon={faPuzzlePiece} className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy">Modularité</h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              Le programme Espace VERDI comprend une vingtaine de lots
              tertiaires indépendants, modulables et combinables. Bureaux au
              rez-de-chaussée, pôle santé au 1er étage : vous pouvez acquérir
              un module solo ou assembler des lots contigus pour créer un
              plateau cabinet, une équipe médicale ou un centre paramédical
              complet.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Surfaces cumulables {formatSurfaceRangeLabel()}. Chaque offre est
              pensée pour s&apos;adapter à l&apos;évolution de votre activité
              professionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h3 className="text-xl font-bold text-navy">
          Besoin de plus de détails ?
        </h3>
        <p className="mt-2 text-slate-600">
          Notre équipe est à votre disposition pour répondre à vos questions.
        </p>
        <div className="mt-6">
          <CTAButton to="/contact" variant="emerald">
            Nous contacter
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

export default OffersPage;
