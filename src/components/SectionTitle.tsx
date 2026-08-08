interface SectionTitleProps {
  /** Titre principal de la section */
  title: string;
  /** Sous-titre ou description optionnelle */
  subtitle?: string;
  /** Alignement du bloc titre */
  align?: 'left' | 'center';
}

/**
 * Titre de section homogène sur toutes les pages.
 */
function SectionTitle({
  title,
  subtitle,
  align = 'left',
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg leading-relaxed text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionTitle;
