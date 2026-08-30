import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Configuration } from '../data/lots';
import { formatEuro } from '../data/lots';
import PlaceholderImage from './PlaceholderImage';

interface OfferCardProps {
  /** Configuration type à afficher */
  configuration: Configuration;
  /** Affichage compact pour le teaser HomePage */
  compact?: boolean;
}

/**
 * Carte d'une configuration type (Offres + teaser Accueil).
 */
function OfferCard({ configuration, compact = false }: OfferCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
      <PlaceholderImage
        src={configuration.image}
        alt={`Visuel ${configuration.title}`}
        aspectRatio="4/3"
        showOverlay={!compact}
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-emerald-brand">
          {configuration.surfaceRange}
        </p>
        <h3 className="mt-1 text-xl font-bold text-navy">{configuration.title}</h3>

        {!compact && (
          <>
            <p className="mt-3 text-sm text-slate-600">
              <span className="font-medium text-navy">Idéal pour : </span>
              {configuration.idealFor}
            </p>
            <ul className="mt-4 space-y-2">
              {configuration.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="mt-1 shrink-0 text-emerald-brand"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </>
        )}

        {compact && (
          <p className="mt-2 text-sm text-slate-600">{configuration.idealFor}</p>
        )}

        <p className="mt-auto pt-4 text-lg font-bold text-navy">
          À partir de {formatEuro(configuration.startingPriceHT)} HT
        </p>
      </div>
    </article>
  );
}

export default OfferCard;
