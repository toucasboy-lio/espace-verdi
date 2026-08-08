interface BadgeProps {
  /** Texte affiché dans la pastille */
  label: string;
  /** Variante visuelle : navy (défaut), emerald, light ou hero (sur photo de fond) */
  variant?: 'navy' | 'emerald' | 'light' | 'hero';
}

/**
 * Pastille d'information (livraison, état, localisation…).
 */
function Badge({ label, variant = 'navy' }: BadgeProps) {
  const styles =
    variant === 'emerald'
      ? 'bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20'
      : variant === 'light'
        ? 'bg-white/15 text-white border-white/25'
        : variant === 'hero'
          ? 'border-white/20 bg-slate-900/40 text-white backdrop-blur-sm'
          : 'bg-navy/5 text-navy border-navy/10';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium ${styles}`}
    >
      {label}
    </span>
  );
}

export default Badge;
