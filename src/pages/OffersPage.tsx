import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTAButton from '../components/CTAButton';
import OfferCard from '../components/OfferCard';
import SectionTitle from '../components/SectionTitle';
import { formatSurfaceRangeLabel, projectData } from '../data/lots';

/**
 * Page Offres — 3 configurations types + modularité (sans liste exhaustive).
 */
function OffersPage() {
  const { configurations } = projectData;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionTitle
        title="Nos offres"
        subtitle="Trois configurations types. Possibilité de cumuler les lots pour agrandir votre surface."
      />

      {/* Grille des configurations */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {configurations.map((config) => (
          <OfferCard key={config.id} configuration={config} />
        ))}
      </div>

      {/* Section modularité — texte uniquement, pas de tableau de lots */}
      <section className="mt-20 rounded-2xl bg-white p-8 shadow-sm md:p-12">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
            <FontAwesomeIcon icon={faPuzzlePiece} className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy">
              Modularité
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              Le programme Espace VERDI comprend une vingtaine de 
              lots tertiaires indépendants, modulables et combinables. Vous
              pouvez acquérir un module solo ou bien 
              assembler des lots contigus pour créer un plateau cabinet, une
              équipe médicale ou un centre paramédical complet.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Surfaces cumulables {formatSurfaceRangeLabel()}, en RDC ou R+1.
              Chaque configuration est pensée pour s&apos;adapter à l&apos;évolution
              de votre activité professionnelle.
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
