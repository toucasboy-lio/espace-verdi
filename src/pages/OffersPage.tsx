import { faDownload, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTAButton from '../components/CTAButton';
import OfferCard from '../components/OfferCard';
import SectionTitle from '../components/SectionTitle';
import { projectData } from '../data/lots';

/**
 * Page Offres — 3 configurations types + modularité (sans liste exhaustive).
 */
function OffersPage() {
  const { projectInfo, configurations } = projectData;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionTitle
        title="Nos offres"
        subtitle="Trois configurations types pour démarrer. Possibilité de cumuler les lots pour agrandir votre surface."
      />

      {/* Grille des 3 configurations */}
      <div className="grid gap-10 lg:grid-cols-2">
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
              Surfaces cumulables de 30 m² à 80 m² et plus, en RDC ou R+1.
              Chaque configuration est pensée pour s&apos;adapter à l&apos;évolution
              de votre activité professionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Téléchargement dossier commercial */}
      <section className="mt-16 text-center">
        <h3 className="text-xl font-bold text-navy">
          Besoin de plus de détails ?
        </h3>
        <p className="mt-2 text-slate-600">
          Téléchargez le dossier commercial complet du programme.
        </p>
        <div className="mt-6">
          <CTAButton href="/dossier-espace-verdi.pdf" download variant="emerald">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Télécharger le dossier commercial
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

export default OffersPage;
