import { useState } from 'react';

interface PlaceholderImageProps {
  /** Chemin public de l'image (ex. /images/hero.jpg) */
  src: string;
  /** Texte alternatif descriptif en français */
  alt: string;
  /** Ratio d'aspect CSS (ex. "16/9", "4/3") */
  aspectRatio?: string;
  /** Afficher l'overlay « Visuel de présentation » */
  showOverlay?: boolean;
  /** Image en arrière-plan plein écran (hero) */
  cover?: boolean;
  /** Classes CSS additionnelles sur le conteneur */
  className?: string;
}

/**
 * Affiche un visuel avec fallback gradient si le fichier est absent.
 * Overlay discret « Visuel de présentation » pour les placeholders.
 */
function PlaceholderImage({
  src,
  alt,
  aspectRatio = '16/9',
  showOverlay = true,
  cover = false,
  className = '',
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false);

  if (cover) {
    return (
      <div
        className={`absolute inset-0 overflow-hidden ${className}`}
        aria-hidden="true"
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy to-emerald-brand/40" />
        )}
        <div className="absolute inset-0 bg-navy/60" />
        {showOverlay && !hasError && (
          <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-1 text-xs text-white/80">
            Visuel de présentation
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
          <span className="text-sm text-slate-500">{alt}</span>
        </div>
      )}
      {showOverlay && !hasError && (
        <span className="absolute bottom-2 right-2 rounded bg-black/50 px-2 py-1 text-xs text-white/80">
          Visuel de présentation
        </span>
      )}
    </div>
  );
}

export default PlaceholderImage;
