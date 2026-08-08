import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  /** Contenu du bouton (texte ou éléments) */
  children: ReactNode;
  /** Lien interne (React Router) */
  to?: string;
  /** Lien externe ou téléchargement */
  href?: string;
  /** Variante visuelle */
  variant?: 'emerald' | 'navy' | 'outline';
  /** Téléchargement de fichier */
  download?: boolean;
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Bouton d'appel à l'action (conversion emerald ou navy).
 */
function CTAButton({
  children,
  to,
  href,
  variant = 'emerald',
  download,
  className = '',
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-md';

  const variantStyles = {
    emerald: 'bg-emerald-brand text-white hover:bg-emerald-700',
    navy: 'bg-navy text-white hover:bg-slate-800',
    outline:
      'border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        download={download}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }

  return <button type="button" className={combinedClassName}>{children}</button>;
}

export default CTAButton;
