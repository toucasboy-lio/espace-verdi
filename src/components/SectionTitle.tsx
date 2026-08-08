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
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-3xl text-lg leading-relaxed text-slate-600 ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
