import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FeatureCardProps {
  /** Icône FontAwesome */
  icon: IconDefinition;
  /** Titre de l'atout */
  title: string;
  /** Description détaillée */
  description: string;
}

/**
 * Carte d'atout avec icône (HomePage, ProgramPage).
 */
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-navy">{title}</h3>
      <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}

export default FeatureCard;
